const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const startRoblox = require('./roblox');
const setupDiscordCommands = require('./discordCommands');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log('Discord ready', client.user.username);
    startRoblox();
    setupDiscordCommands(client);
});

client.login(process.env.DISCORD_BOT_TOKEN);