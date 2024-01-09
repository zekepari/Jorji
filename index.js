import { Client, GatewayIntentBits } from 'discord.js';
import noblox from 'noblox.js';
import dotenv from 'dotenv';
dotenv.config();

import setupDiscordCommands from './discordCommands.js';
import { guildIdTable } from './config.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
    console.log('Discord ready', client.user.username);
    startRoblox();
    setupDiscordCommands(client);
});

const getRankChannelIds = () => {
    return Object.values(guildIdTable).map(division => division.rankChannelId);
};

const rankChannelIds = getRankChannelIds();

client.on('messageCreate', message => {
    if (rankChannelIds.includes(message.channel.id) && message.author.id !== client.user.id) {
        message.delete()
            .catch(console.error);
    }
});

async function startRoblox() {
    const currentUser = await noblox.setCookie(process.env.ROBLOX_COOKIE);
    console.log('Roblox ready', currentUser.UserName);
}

client.login(process.env.DISCORD_BOT_TOKEN);
