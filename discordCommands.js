import { SlashCommandBuilder, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import { guildIdTable } from './config.js';
import handlePromoteCommand from './commands/handlePromote.js';
import handleDemoteCommand from './commands/handleDemote.js';
import handleAcceptCommand from './commands/handleAccept.js';

function setupDiscordCommands(client) {
    const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN);

    const guildIds = Object.keys(guildIdTable);

    guildIds.forEach(guildId => {
        const commands = [
            new SlashCommandBuilder()
                .setName('promote')
                .setDescription('Promote a user in a Roblox group')
                .addStringOption(option =>
                    option.setName('username')
                        .setDescription('The Roblox username')
                        .setRequired(true))
                .addStringOption(option =>
                    option.setName('reason')
                        .setDescription('The reason for promotion')
                        .setRequired(true)),
            new SlashCommandBuilder()
                .setName('demote')
                .setDescription('Demote a user in a Roblox group')
                .addStringOption(option =>
                    option.setName('username')
                        .setDescription('The Roblox username')
                        .setRequired(true))
                .addStringOption(option =>
                    option.setName('reason')
                        .setDescription('The reason for demotion')
                        .setRequired(true)),
            new SlashCommandBuilder()
                .setName('accept')
                .setDescription('Accept a user into a Roblox group')
                .addStringOption(option =>
                    option.setName('username')
                        .setDescription('The username to accept')
                        .setRequired(true)),
            new SlashCommandBuilder()
                .setName('exile')
                .setDescription('Exile a user from a Roblox group')
                .addStringOption(option =>
                    option.setName('username')
                        .setDescription('The Roblox username')
                        .setRequired(true))
                .addStringOption(option =>
                    option.setName('reason')
                        .setDescription('The reason for exile')
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
                ),
        ];

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
            case 'promote':
                handlePromoteCommand(interaction, guildId);
                break;
            case 'demote':
                handleDemoteCommand(interaction, guildId)
                break;
            case 'accept':
                handleAcceptCommand(interaction, guildId);
                break;
            case 'exile':
                break;
            case 'host':
                break;
        }
    });
}

export default setupDiscordCommands;