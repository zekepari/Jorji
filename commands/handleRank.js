import noblox from 'noblox.js';
import { rankingTable, divisionIdTable } from '../config.js';

async function handleRankCommand(interaction, guildId) {
    const { options, user, channelId } = interaction;
    const division = divisionIdTable[guildId];
    const rankChannelId = division.rankChannelId;

    if (channelId !== rankChannelId) {
        return reply(interaction, 'This command can only be used in the rank channel.');
    }

    const usernameInput = options.getString('username');
    const roleName = options.getString('role');
    
    const operatorUserId = await verifyUser(interaction, user.id);
    if (!operatorUserId) return;

    const targetUserId = await getUserId(interaction, usernameInput);
    if (!targetUserId) return;

    const actualUsername = await noblox.getUsernameFromId(targetUserId);
    if (!actualUsername) {
        return reply(interaction, `Failed to get the actual username for the provided ID.`);
    }

    const userRankInfo = await getUserRankInfo(interaction, division.groupId, operatorUserId);
    if (!userRankInfo) return;

    const targetUserRankLevel = await getTargetUserRankLevel(interaction, division.groupId, targetUserId);
    if (targetUserRankLevel === undefined) return;

    if (targetUserRankLevel === 0) {
        return reply(interaction, `User with username: ${actualUsername} is not in the Roblox group.`);
    }

    if (targetUserRankLevel >= userRankInfo.rankLevel) {
        return reply(interaction, 'You cannot rank a user who has a higher rank than you.');
    }

    const maxAssignableRoles = rankingTable[division.name][userRankInfo.rankName] || [];
    if (!maxAssignableRoles.includes(roleName)) {
        return reply(interaction, `You do not have permission to assign the role ${roleName}.`);
    }

    await assignRole(interaction, division.groupId, targetUserId, roleName, targetUserRankLevel, actualUsername);
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
        await reply(interaction, `User ${username} has been ranked to role ${roleName}.`);
    } catch (error) {
        console.error(error);
        await reply(interaction, 'There was an error executing the command.');
    }
}

function reply(interaction, message) {
    interaction.reply(message);
}

export default handleRankCommand;
