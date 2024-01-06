const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const config = require('./config');
const handleRankCommand = require('./permissions');

function setupDiscordCommands(client) {
    const commands = [
        new SlashCommandBuilder()
            .setName('rank')
            .setDescription('Rank a user in a Roblox group')
            .addStringOption(option => 
                option.setName('username')
                    .setDescription('The Roblox username')
                    .setRequired(true))
            .addStringOption(option => 
                option.setName('role')
                    .setDescription('The role name')
                    .setRequired(true))
    ].map(command => command.toJSON());

    const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN);

    rest.put(
        Routes.applicationGuildCommands(client.user.id, '1171056646185816225'), // Replace with your guild ID
        { body: commands }
    );

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand() || interaction.commandName !== 'rank') return;
        handleRankCommand(interaction);
    });
}

module.exports = setupDiscordCommands;