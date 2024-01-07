const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const config = require('./config');
const handleRankCommand = require('./commands/handleRank');
const handleAcceptCommand = require('./commands/handleAccept');

function setupDiscordCommands(client) {
    const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN);
    
    const guildIds = ['1171056646185816225', '1171057617863450674', '1171060112761311383', '1171059393333313616', '1168540731506425917'];

    guildIds.forEach(guildId => {
        const commands = [
            createRankCommandForGuild(guildId),
            new SlashCommandBuilder()
                .setName('accept')
                .setDescription('Accept a user')
                .addStringOption(option =>
                    option.setName('username')
                        .setDescription('The username to accept')
                        .setRequired(true)),
            new SlashCommandBuilder()
                .setName('host')
                .setDescription('Host an event')
                .addStringOption(option =>
                    option.setName('type')
                        .setDescription('The event type to host')
                        .setRequired(true)
                        .addChoices(
                            {name: 'Training', value: 'training'},
                            {name: 'Tryout', value: 'tryout'},
                        ),
                )
        ].map(command => command.toJSON());

        rest.put(
            Routes.applicationGuildCommands(client.user.id, guildId),
            { body: commands }
        ).then(() => {
            console.log(`Commands registered for guild ${guildId}`);
        }).catch(console.error);
    });

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;

        const guildId = interaction.guildId;

        switch(interaction.commandName) {
            case 'rank':
                handleRankCommand(interaction, guildId);
                break;
            case 'accept':
                handleAcceptCommand(interaction, guildId);
                break;
            case 'host':
                break;
        }
    });
}

function createRankCommandForGuild(guildId) {
    const rankCommand = new SlashCommandBuilder()
        .setName('rank')
        .setDescription('Rank a user in a Roblox group')
        .addStringOption(option => 
            option.setName('username')
                .setDescription('The Roblox username')
                .setRequired(true));

    const division = config.divisionIdTable[guildId];
    if (!division) {
        console.error(`No division found for guild ID ${guildId}`);
        return;
    }

    const divisionName = division.name;
    const ranks = config.rankingTable[divisionName];
    if (!ranks) {
        console.error(`No ranks found for group ID ${divisionName}`);
        return;
    }

    const choices = Object.keys(ranks).map(role => ({ name: role, value: role }));
    rankCommand.addStringOption(option => {
        option.setName('role')
            .setDescription('The role name')
            .setRequired(true)
            .addChoices(...choices);
        return option;
    });
    
    return rankCommand;
}

module.exports = setupDiscordCommands;
