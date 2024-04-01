from discord import Interaction
from util.conversions import conv_discord_roblox_user, conv_username_roblox_user, get_roblox_user_role
from util.roblox import get_roblox_client
from util.tiers import guild_groups, tier_ranges, exile_permissions
from roblox.roles import Role
from roblox.users import User

async def exile_command(interaction: Interaction, username: str, reason: str):
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
    target_user_role: Role | None = await get_roblox_user_role(target_user, group_data.get('group_id'))

    if operator_user_role is None:
        await interaction.followup.send(f"There was an error getting your group role.")
        return
    
    if target_user_role is None:
        await interaction.followup.send(f"There was an error getting {target_user.name}'s group role.")
        return

    operator_user_tier = get_tier(operator_user_role.rank, group_data.get('name'))
    target_user_tier = get_tier(target_user_role.rank, group_data.get('name'))

    if target_user_tier in exile_permissions[operator_user_tier]: # is the new target tier in the operator's capacity?
        await interaction.followup.send(f'Exiled {target_user.name} for reason: {reason}.')
        await group.kick_user(target_user)
    else:
        permissible_tiers = [key for key, value in exile_permissions.items() if target_user_tier in value]
        if len(permissible_tiers) == 0:
            result = "No keys found"
        elif len(permissible_tiers) == 1:
            result = permissible_tiers[0]
        else:
            result = ", ".join(permissible_tiers[:-1]) + f", and {permissible_tiers[-1]}"
        await interaction.followup.send(f"You cannot demote {target_user.name}. Only {result} Tier(s) have permission to exile {target_user_tier} Tier.")

def get_tier(rank, group_name):
    for rank_range, tier in tier_ranges[group_name].items():
        if rank in rank_range:
            return tier
    return None