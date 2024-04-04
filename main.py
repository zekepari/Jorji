import os
import asyncio
import discord
from dotenv import load_dotenv
from util.tiers import guild_groups
from commands.promote import promote_command
from commands.demote import demote_command
from commands.accept import accept_command
from commands.exile import exile_command
from util.roblox import get_roblox_client
from http_server import start_http_server

load_dotenv()
DISCORD_BOT_TOKEN = os.getenv('DISCORD_BOT_TOKEN')

intents = discord.Intents.default()
intents.messages = True
intents.guilds = True
bot = discord.Bot(intents=intents)

async def start_roblox():
    roblox_client = get_roblox_client()
    bot_user = await roblox_client.get_authenticated_user()
    print(f'Logged on Roblox as {bot_user.name}')

@bot.event
async def on_ready():
    print(f'Logged on as {bot.user}')

@bot.slash_command(guild_ids=list(guild_groups.keys()), description='promote a user in a Roblox group')
@discord.option('username', description='the Roblox username', required=True)
@discord.option('reason', description='the reason for the promotion', required=True)
async def promote(interaction: discord.Interaction, username: str, reason: str):
    await interaction.response.defer()
    await promote_command(interaction, username, reason)

@bot.slash_command(guild_ids=list(guild_groups.keys()), description='demote a user in a Roblox group')
@discord.option('username', description='the Roblox username', required=True)
@discord.option('reason', description='the reason for the demotion', required=True)
async def demote(interaction: discord.Interaction, username: str, reason: str):
    await interaction.response.defer()
    await demote_command(interaction, username, reason)

@bot.slash_command(guild_ids=list(guild_groups.keys()), description='exile a user from a Roblox group')
@discord.option('username', description='the Roblox username', required=True)
@discord.option('reason', description='the reason for the exile', required=True)
async def exile(interaction: discord.Interaction, username: str, reason: str):
    await interaction.response.defer()
    await exile_command(interaction, username, reason)

@bot.slash_command(guild_ids=list(guild_groups.keys()), description='accept a user into a Roblox group')
@discord.option('username', description='the Roblox username', required=True)
@discord.option('reason', description='the reason for the acceptance', required=True)
async def accept(interaction: discord.Interaction, username: str, reason: str):
    await interaction.response.defer()
    await accept_command(interaction, username, reason)

async def main():
    await start_roblox()
    await start_http_server()
    await bot.start(DISCORD_BOT_TOKEN)

asyncio.run(main())