import os
import asyncio
import discord
import roblox
from dotenv import load_dotenv
from tables import guild_id_table
from commands.promote import promote_command
from commands.demote import demote_command
from commands.accept import accept_command

load_dotenv()

ROBLOX_COOKIE = os.getenv('ROBLOX_COOKIE')
DISCORD_BOT_TOKEN = os.getenv('DISCORD_BOT_TOKEN')

roblox_client = roblox.Client(ROBLOX_COOKIE)

intents = discord.Intents.default()
intents.messages = True
intents.guilds = True

bot = discord.Bot(intents = intents)

async def start_roblox():
    bot_user = await roblox_client.get_authenticated_user()
    print(f'Logged on Roblox as {bot_user.name}')

@bot.event
async def on_ready():
    print(f'Logged on as {bot.user}')

@bot.slash_command(guild_ids=list(guild_id_table.keys()), description='Promote a user in a Roblox group')
@discord.option('username', description='The Roblox username', required=True)
@discord.option('reason', description='The reason for the promotion', required=True)
async def promote(interaction: discord.Interaction, username: str, reason: str):
    await interaction.response.defer()
    await promote_command(interaction, roblox_client, username, reason)

@bot.slash_command(guild_ids=list(guild_id_table.keys()), description='Demote a user in a Roblox group')
@discord.option('username', description='The Roblox username', required=True)
@discord.option('reason', description='The reason for the demotion', required=True)
async def demote(interaction: discord.Interaction, username: str, reason: str):
    await interaction.response.defer()
    await demote_command(interaction, roblox_client, username, reason)
    print('test')

@bot.slash_command(guild_ids=list(guild_id_table.keys()), description='Accept a user into a Roblox group')
@discord.option('username', description='The Roblox username', required=True)
async def accept(interaction: discord.Interaction, username: str):
    await interaction.response.defer()
    await accept_command(interaction, roblox_client, username)

asyncio.get_event_loop().run_until_complete(start_roblox())
bot.run(DISCORD_BOT_TOKEN)