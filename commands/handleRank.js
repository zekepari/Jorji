const noblox = require('noblox.js');
const config = require('../config');

async function handleRankCommand(interaction, guildId) {
    const { options, user, channelId } = interaction;
    const division = config.divisionIdTable[guildId]

    if (channelId !== division.rankChannelId) {
        await interaction.reply('This command can only be used in the rank channel.');
        return;
    }

    const username = options.getString('username');
    const roleName = options.getString('role');
    let userId;

    try {
        userId = await noblox.getIdFromUsername(username);
    } catch (error) {
        console.error(error);
        await interaction.reply(`Failed to find Roblox user with username: ${username}.`);
        return;
    }

    const member = await interaction.guild.members.fetch(user.id);
    const userRoles = member.roles.cache;

    let userHighestRole = '';
    Object.entries(config.rankToDiscordRoleIdTable[division.name]).forEach(([rankName, roleId]) => {
        if (userRoles.has(roleId) && !userHighestRole) {
            userHighestRole = rankName;
        }
    });

    if (!userHighestRole) {
        await interaction.reply('You do not have permission to use this command.');
        return;
    }

    const maxAssignableRoles = config.rankingTable[division.name][userHighestRole] || [];
    if (!maxAssignableRoles.includes(roleName)) {
        await interaction.reply(`You do not have permission to assign the role ${roleName}.`);
        return;
    }

    try {
        const groupRoles = await noblox.getRoles(division.groupId);
        const role = groupRoles.find(role => role.name.toLowerCase() === roleName.toLowerCase());

        if (!role) {
            await interaction.reply('Role not found.');
            return;
        }

        await noblox.setRank({ group: division.groupId, target: userId, rank: role.rank });
        await interaction.reply(`User ${username} has been ranked to role ${roleName}.`);
    } catch (error) {
        console.error(error);
        await interaction.reply('There was an error executing the command.');
    }
}

module.exports = handleRankCommand;