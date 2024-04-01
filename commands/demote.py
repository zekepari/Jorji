from discord import Interaction
from tables import demotion_table
from util.conversions import conv_discord_roblox_user, conv_username_roblox_user, get_roblox_user_role
import asyncio
from util.roblox import get_roblox_client
from util.tiers import guild_groups

async def demote_command(interaction: Interaction, username: str, reason: str):
    roblox_client = get_roblox_client()
    group_data = guild_groups[interaction.guild_id]
    group = await roblox_client.get_group(group_data.get('group_id'))

    operator_user, target_user = await asyncio.gather(
        conv_discord_roblox_user(interaction.user.id),
        conv_username_roblox_user(username),
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
    if demoted_role.name not in max_demotable_ranks or max_demotable_ranks is None:
        await interaction.followup.send(f"Cannot accept {target_user.name} as you do not have authority to assign {demoted_role.name}s.")
        return

    await interaction.followup.send(f'Demoted {target_user.name} to {demoted_role.name} for reason: {reason}.')
    await group.set_rank(target_user, demoted_role.rank)