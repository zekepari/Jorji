from discord import Interaction
from tables import promotion_table
from util.conversions import conv_discord_roblox_user, conv_username_roblox_user, get_roblox_user_role
import asyncio
from util.roblox import get_roblox_client
from util.tiers import guild_groups

async def promote_command(interaction: Interaction, username: str, reason: str):
    roblox_client = get_roblox_client()
    group_data = guild_groups[interaction.guild_id]
    group = await roblox_client.get_group(group_data.get('group_id'))

    operator_user, target_user = await asyncio.gather(
        conv_discord_roblox_user(interaction.user.id),
        conv_username_roblox_user(username)
    )

    if operator_user is None:
        await interaction.followup.send('There was an error getting your Roblox account.')
        return

    if target_user is None:
        await interaction.followup.send(f"There was an error getting {username}'s Roblox account.")
        return

    operator_user_role, target_user_role = await asyncio.gather(
        get_roblox_user_role(operator_user, group_data.get('group_id')),
        get_roblox_user_role(target_user, group_data.get('group_id'))
    )

    if operator_user_role is None:
        await interaction.followup.send(f"There was an error getting your group role.")
        return
    
    if target_user_role is None:
        await interaction.followup.send(f"There was an error getting {target_user.name}'s group role.")
        return

    if target_user_role.rank >= operator_user_role.rank:
        await interaction.followup.send(f"Cannot promote {target_user.name} as they have an equal or higher rank to you.")
        return

    group_roles = await group.get_roles()
    promoted_role = next((role for role in group_roles if role.rank == target_user_role.rank + 1), None)

    max_promotable_ranks = promotion_table[group_data['name']][operator_user_role.name]
    if promoted_role.name not in max_promotable_ranks or max_promotable_ranks is None:
        await interaction.followup.send(f"Cannot promote {target_user.name} as you do not have authority to assign {promoted_role.name}s.")
        return

    await interaction.followup.send(f'Promoted {target_user.name} to {promoted_role.name} for reason: {reason}.')
    await group.set_rank(target_user, promoted_role.rank)