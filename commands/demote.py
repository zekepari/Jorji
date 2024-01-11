import roblox
import os
import requests
from dotenv import load_dotenv
from discord import Interaction
from tables import guild_id_table, demotion_table
import asyncio

load_dotenv()

BLOXLINK_API_KEY = os.getenv('BLOXLINK_API_KEY')

async def demote_command(interaction: Interaction, roblox_client: roblox.Client, username: str, reason: str):
    group_data = guild_id_table[interaction.guild_id]
    group = await roblox_client.get_group(group_data.get('group_id'))

    operator_user, target_user = await asyncio.gather(
        conv_discord_roblox_user(interaction.user.id, roblox_client),
        conv_username_roblox_user(roblox_client, username),
    )

    if operator_user == None:
        await interaction.followup.send('There was an error getting your Roblox account.')
        return

    if target_user == None:
        await interaction.followup.send(f"There was an error getting {username}'s Roblox account.")
        return

    operator_user_role, target_user_role = await asyncio.gather(
        get_roblox_user_role(operator_user, group_data.get('group_id')),
        get_roblox_user_role(target_user, group_data.get('group_id'))
    )

    if operator_user_role == None:
        await interaction.followup.send(f"There was an error getting your group role.")
        return

    if target_user_role == None:
        await interaction.followup.send(f"There was an error getting {target_user.name}'s group role.")
        return

    if target_user_role.rank >= operator_user_role.rank:
        await interaction.followup.send(f"Cannot demote {target_user.name} as they have an equal or higher rank to you.")
        return

    group_roles = await group.get_roles()
    demoted_role = next((role for role in group_roles if role.rank == target_user_role.rank - 1), None)

    max_demotable_ranks = demotion_table[group_data['name']][operator_user_role.name]
    if demoted_role.name not in max_demotable_ranks:
        await interaction.followup.send(f"Cannot accept {target_user.name} as you do not have authority to assign {demoted_role.name}s.")
        return

    await interaction.followup.send(f'Demoted {target_user.name} to {demoted_role.name} for reason: {reason}.')
    await group.set_rank(target_user, demoted_role.rank)

async def conv_discord_roblox_user(discord_user_id: str, roblox_client: roblox.Client):
    try:
        url = f"https://api.blox.link/v4/public/guilds/1168540731506425917/discord-to-roblox/{discord_user_id}"
        headers = {"Authorization": BLOXLINK_API_KEY}

        req = requests.get(url, headers=headers)
        data = req.json()

        roblox_user_id = data.get('robloxID')

        roblox_user = await roblox_client.get_user(roblox_user_id)
        return roblox_user
    except Exception as e:
        print(e)
        return None

async def conv_username_roblox_user(robloxBot: roblox.Client, username: str):
    try:
        return await robloxBot.get_user_by_username(username)
    except roblox.UserNotFound:
        return None

async def get_roblox_user_role(roblox_user, group_id: int):
    roblox_user_roles = await roblox_user.get_group_roles()
    roblox_user_role = None
    for role in roblox_user_roles:
        if role.group.id == group_id:
            roblox_user_role = role
    return roblox_user_role
