from roblox.users import User
from roblox.groups import Group
from roblox.roles import Role
from util.conversions import update_roles
from util.tiers import main_id, auto_rank_ranges, main_api_key
from util.roblox import get_roblox_client

class GroupData(dict):
    name: str
    group_id: int
    api_key: str

async def update_rank(group: Group, role: Role, target_user: User, group_data: GroupData):
    await group.set_role(target_user, role)
    await update_roles(target_user.id, group_data.get('api_key'))
    
    roblox_client = get_roblox_client()
    auto_rank_range = auto_rank_ranges.get(group_data.get('name'))
    rank_number = get_rank_number(role.rank, auto_rank_range)

    if rank_number:
        main_group = await roblox_client.get_group(main_id)
        await main_group.set_rank(target_user, rank_number)
        await update_roles(target_user.id, main_api_key)

def get_rank_number(rank, auto_rank_range):
    for rank_range, rank_number in auto_rank_range.items():
        if rank in rank_range:
            return rank_number
    return None