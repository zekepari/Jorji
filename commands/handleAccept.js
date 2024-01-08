import noblox from 'noblox.js';
import { divisionAcceptTable, guildIdTable } from '../config.js';

async function handleAcceptCommand(interaction, guildId) {
    const { options, user, channelId } = interaction;
    const group = guildIdTable[guildId];

    if (channelId !== group.rankChannelId) {
        await interaction.reply('This command can only be used in the rank channel.');
        return;
    }

    const username = options.getString('username');
    let userId;

    try {
        userId = await noblox.getIdFromUsername(username);
    } catch (error) {
        console.error(error);
        await interaction.reply(`Failed to find Roblox user with username: ${username}.`);
        return;
    }

    const operatorUserId = await verifyUser(interaction, user.id);
    if (!operatorUserId) return;

    const userRankInfo = await getUserRankInfo(interaction, group.groupId, operatorUserId);
    if (!userRankInfo) return;

    const canAccept = divisionAcceptTable[group.name].includes(userRankInfo.rankName);
    if (!canAccept) {
        await interaction.reply(`You do not have permission to accept join requests.`);
        return;
    }

    try {
        const joinRequest = await noblox.getJoinRequest(group.groupId, userId);

        if (joinRequest) {
            await noblox.handleJoinRequest(group.groupId, userId, true);
            await interaction.reply(`Join request from user ${username} has been accepted.`);
        } else {
            await interaction.reply(`No join request found for user ${username}.`);
        }
    } catch (error) {
        console.error(error);
        await interaction.reply('There was an error executing the command.');
    }
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

export default handleAcceptCommand;