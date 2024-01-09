import noblox from 'noblox.js';
import autoRank from '../autoRank.js';
import { guildIdTable, promotionTable } from '../config.js';

async function handlePromoteCommand(interaction, guildId) {
    const { options, user, channelId, guild } = interaction;
    const group = guildIdTable[guildId];
    const rankChannelId = group.rankChannelId;

    const isServerOwner = (guild.ownerId === user.id)

    if (channelId !== rankChannelId) {
        return reply(interaction, 'This command can only be used in the rank channel.');
    }

    const usernameInput = options.getString('username');
    const reasonInput = options.getString('reason');
    
    const operatorUserId = await verifyUser(interaction, user.id);
    if (!operatorUserId) return;

    const targetUserId = await getUserId(interaction, usernameInput);
    if (!targetUserId) return;

    const actualUsername = await noblox.getUsernameFromId(targetUserId);
    if (!actualUsername) {
        return reply(interaction, `Failed to get the actual username for the provided ID.`);
    }

    const userRankInfo = await getUserRankInfo(interaction, group.groupId, operatorUserId);
    if (!userRankInfo) return;

    const targetUserRankLevel = await getTargetUserRankLevel(interaction, group.groupId, targetUserId);
    if (targetUserRankLevel === undefined) return;

    if (targetUserRankLevel === 0) {
        return reply(interaction, `User with username: ${actualUsername} is not in the Roblox group.`);
    }

    if (targetUserRankLevel >= userRankInfo.rankLevel) {
        return reply(interaction, 'You cannot promote a user who has a higher or equal rank than you.');
    }

    const groupRoles = await noblox.getRoles(group.groupId);
    const currentRankIndex = groupRoles.findIndex(role => role.rank === targetUserRankLevel);
    if (!isServerOwner && (currentRankIndex === -1 || currentRankIndex === groupRoles.length - 1)) {
        return reply(interaction, `Cannot promote user ${actualUsername} further.`);
    }

    const nextRank = groupRoles[currentRankIndex + 1];

    const maxPromotableRanks = promotionTable[group.name][userRankInfo.rankName];
    if (!isServerOwner && (!maxPromotableRanks || !maxPromotableRanks.includes(nextRank.name))) {
        return reply(interaction, `You do not have permission to promote ${actualUsername} to ${nextRank.name}.`);
    }

    await assignRole(interaction, group.groupId, targetUserId, nextRank.name, targetUserRankLevel, actualUsername);
    await autoRank(targetUserId, group, nextRank.name);
}

async function verifyUser(interaction, userId) {
    try {
        let response = await fetch(`https://api.blox.link/v4/public/guilds/1168540731506425917/discord-to-roblox/${userId}`, {
            headers: { "Authorization": process.env.BLOXLINK_API_KEY }
        });
        let data = await response.json();

        return data.robloxID;
    } catch (error) {
        console.error(error);
        await reply(interaction, 'There was an error verifying your account.');
        return null;
    }
}

async function getUserId(interaction, username) {
    try {
        return await noblox.getIdFromUsername(username);
    } catch (error) {
        console.error(error);
        await reply(interaction, `Failed to find Roblox user with username: ${username}.`);
        return null;
    }
}

async function getUserRankInfo(interaction, groupId, userId) {
    try {
        const rankName = await noblox.getRankNameInGroup(groupId, userId);
        const rankLevel = await noblox.getRankInGroup(groupId, userId);
        return { rankName, rankLevel };
    } catch (error) {
        console.error(error);
        await reply(interaction, 'There was an error getting your Roblox group rank.');
        return null;
    }
}

async function getTargetUserRankLevel(interaction, groupId, targetUserId) {
    try {
        return await noblox.getRankInGroup(groupId, targetUserId);
    } catch (error) {
        console.error(error);
        await reply(interaction, 'There was an error getting the target user\'s Roblox group rank.');
        return undefined;
    }
}

async function assignRole(interaction, groupId, targetUserId, roleName, currentRankLevel, username) {
    try {
        const groupRoles = await noblox.getRoles(groupId);
        const roleToAssign = groupRoles.find(role => role.name.toLowerCase() === roleName.toLowerCase());

        if (!roleToAssign) {
            return reply(interaction, 'Role not found.');
        }

        if (currentRankLevel === roleToAssign.rank) {
            return reply(interaction, `User ${username} is already at the rank of ${roleName}.`);
        }

        await noblox.setRank({ group: groupId, target: targetUserId, rank: roleToAssign.rank });
        await reply(interaction, `User ${username} has been promoted to ${roleName}.`);
    } catch (error) {
        console.error(error);
        await reply(interaction, 'There was an error executing the command.');
    }
}

function reply(interaction, message) {
    interaction.reply(message);
}

export default handlePromoteCommand;
