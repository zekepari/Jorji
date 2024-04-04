from discord import Interaction
from util.conversions import conv_discord_roblox_user, conv_username_roblox_user, get_roblox_user_role
from util.roblox import get_roblox_client
from util.tiers import guild_groups, tier_ranges, accept_permissions
from roblox.roles import Role
from roblox.users import User

async def accept_command(interaction: Interaction, username: str, reason: str):
    roblox_client = get_roblox_client()
    group_data = guild_groups[interaction.guild_id]
    group = await roblox_client.get_group(group_data.get('group_id'))

    operator_user: User | None = await conv_discord_roblox_user(interaction.user.id)
    target_user: User | None = await conv_username_roblox_user(username)

    if operator_user is None:
        await interaction.followup.send('There was an error getting your Roblox account.')
        return

    if target_user is None:
        await interaction.followup.send(f"There was an error getting {username}'s Roblox account.")
        return

    operator_user_role: Role | None = await get_roblox_user_role(operator_user, group_data.get('group_id'))
    target_user_invite = await group.get_join_request(target_user)

    if operator_user_role is None:
        await interaction.followup.send(f"There was an error getting your group role.")
        return
    
    if target_user_invite is None:
        await interaction.followup.send(f"There was an error getting {target_user.name}'s join request. Check if they've sent a join request.")
        return

    operator_user_tier = get_tier(operator_user_role.rank, group_data.get('name'))

    if accept_permissions[operator_user_tier]: # is the accepting members in the operator's capacity?
        await interaction.followup.send(f'Accepted {target_user.name} for reason: {reason}.')
        await target_user_invite.accept()
    else:
        permissible_tiers = [key for key, value in accept_permissions.items() if value]
        if len(permissible_tiers) == 0:
            result = "🛠️ Tier"
        elif len(permissible_tiers) == 1:
            result = permissible_tiers[0] + " Tier"
        else:
            result = ", ".join(permissible_tiers[:-1]) + f", and {permissible_tiers[-1]} Tiers"
        await interaction.followup.send(f"You cannot accept {target_user.name}. Only members in {result} have permission to accept join requests.")

def get_tier(rank, group_name):
    for rank_range, tier in tier_ranges[group_name].items():
        if rank in rank_range:
            return tier
    return None