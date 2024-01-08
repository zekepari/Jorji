import { SlashCommandBuilder, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import { divisionIdTable, rankingTable } from './config.js';
import handleRankCommand from './commands/handleRank.js';
import handleAcceptCommand from './commands/handleAccept.js';

function setupDiscordCommands(client) {
    const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN);

    const guildIds = Object.keys(divisionIdTable);

    guildIds.forEach(guildId => {
        const division = divisionIdTable[guildId];
        const commands = [createRankCommandForGuild(guildId)];

        if (division.name !== 'Main') {
            commands.push(
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
                                { name: 'Training', value: 'training' },
                                { name: 'Tryout', value: 'tryout' },
                            ),
                    )
            );
        }

        const commandsJSON = commands.map(command => command.toJSON());

        rest.put(
            Routes.applicationGuildCommands(client.user.id, guildId),
            { body: commandsJSON }
        ).then(() => {
            console.log(`Commands registered for guild ${guildId}`);
        }).catch(console.error);
    });

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;

        const guildId = interaction.guildId;

        switch (interaction.commandName) {
            case 'rank':
                handleRankCommand(interaction, guildId);
                break;
            case 'accept':
                handleAcceptCommand(interaction, guildId);
                break;
            case 'host':
                // Add handling logic for 'host' command here if needed
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

    const division = divisionIdTable[guildId];
    if (!division) {
        console.error(`No division found for guild ID ${guildId}`);
        return;
    }

    const divisionName = division.name;
    const ranks = rankingTable[divisionName];
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

export default setupDiscordCommands;