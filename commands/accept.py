import roblox
import os
from dotenv import load_dotenv
from discord import Interaction
from tables import guild_id_table, accept_table
from util import conv_discord_roblox_user, conv_username_roblox_user, get_roblox_user_role
import asyncio

load_dotenv()

BLOXLINK_API_KEY = os.getenv('BLOXLINK_API_KEY')

async def accept_command(interaction: Interaction, roblox_client: roblox.Client, username: str):
    group_data = guild_id_table[interaction.guild_id]
    group = await roblox_client.get_group(group_data.get('group_id'))

    operator_user, target_user = await asyncio.gather(
        conv_discord_roblox_user(interaction.user.id, roblox_client),
        conv_username_roblox_user(roblox_client, username),
    )

    if operator_user == None:
        await interaction.followup.send('There was an error getting your Roblox account.', ephemeral=True)
        return

    if target_user == None:
        await interaction.followup.send(f"There was an error getting {username}'s Roblox account.", ephemeral=True)
        return

    operator_user_role = await get_roblox_user_role(operator_user, group_data.get('group_id'))
    if operator_user_role == None:
        await interaction.followup.send(f"There was an error getting your group role.", ephemeral=True)
        return

    group_roles = await group.get_roles()
    recruit_role = group_roles[0]
    group_name = group_data['name']

    if operator_user_role.name not in accept_table[group_name]:
        await interaction.followup.send(f"Cannot accept {target_user.name} as you do not have authority to accept new {recruit_role.name}s.", ephemeral=True)
        return

    target_user_join_request = await group.get_join_request(target_user)
    if target_user_join_request == None:
        await interaction.followup.send(f"There was an error getting {target_user.name}'s join request.", ephemeral=True)
        return

    await interaction.followup.send(f'Accepted {target_user.name} into {group_name}.', ephemeral=True)
    await group.accept_user(target_user_join_request)