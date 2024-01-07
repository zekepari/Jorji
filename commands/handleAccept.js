const noblox = require('noblox.js');
const config = require('../config');

async function handleRankCommand(interaction, guildId) {
    const { options, user, channelId } = interaction;

    if (channelId !== config.discordChannelIdTable.Army) {
        await interaction.reply('This command can only be used in the Army rank channel.');
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

    // Get the roles of the user who issued the command
    const member = await interaction.guild.members.fetch(user.id);
    const userRoles = member.roles.cache;

    // Find the highest Army role of the user
    let userHighestArmyRole = '';
    Object.entries(config.rankToDiscordRoleIdTable.Army).forEach(([rankName, roleId]) => {
        if (userRoles.has(roleId) && !userHighestArmyRole) {
            userHighestArmyRole = rankName;
        }
    });

    // Check if user has permission to rank others
    if (!userHighestArmyRole) {
        await interaction.reply('You do not have permission to use this command.');
        return;
    }

    // Check if the user can assign the specified role
    const maxAssignableRoles = config.rankingTable.Army[userHighestArmyRole] || [];
    if (!maxAssignableRoles.includes(roleName)) {
        await interaction.reply(`You do not have permission to assign the role ${roleName}.`);
        return;
    }

    try {
        const groupRoles = await noblox.getRoles(config.groupIdTable.Army);
        const role = groupRoles.find(role => role.name.toLowerCase() === roleName.toLowerCase());

        if (!role) {
            await interaction.reply('Role not found.');
            return;
        }

        await noblox.setRank({ group: config.groupIdTable.Army, target: userId, rank: role.rank });
        await interaction.reply(`User ${username} has been ranked to role ${roleName}.`);
    } catch (error) {
        console.error(error);
        await interaction.reply('There was an error executing the command.');
    }
}

module.exports = handleRankCommand;