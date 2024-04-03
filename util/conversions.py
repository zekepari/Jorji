import os
from dotenv import load_dotenv
import roblox
import requests
from util.roblox import get_roblox_client
from roblox.roles import Role

load_dotenv()

ROLINKER_ARSTOTZKA_KEY = os.getenv('ROLINKER_ARSTOTZKA_KEY')

async def update_roles(roblox_id: str, api_key: str):
    target_user_discord_id = await roblox_to_discord_id(roblox_id)
    if target_user_discord_id:
        url = f"https://rolinker.net/api/guilds/members/update-roles?userId={target_user_discord_id}"
        headers = {
            "Authorization": api_key
        }

        requests.post(url, headers=headers)

    return

async def roblox_to_discord_id(roblox_id: str):
    try:
        url = f"https://rolinker.net/api/convert/roblox-to-discord?robloxId={roblox_id}"
        headers = {
            "Authorization": ROLINKER_ARSTOTZKA_KEY
        }

        req = requests.get(url, headers=headers)
        data = req.json()

        discord_id = data.get('userId')

        return discord_id
    except Exception as e:
        print(e)
        return None

async def discord_to_roblox_id(discord_id: str):
    try:
        url = f"https://rolinker.net/api/guilds/members/associated-account?userId={discord_id}"
        headers = {
            "Authorization": ROLINKER_ARSTOTZKA_KEY
        }
        req = requests.get(url, headers=headers)
        data = req.json()

        roblox_id = data.get('id')

        return roblox_id
    except Exception as e:
        print(e)
        return None

async def conv_discord_roblox_user(discord_user_id: str):
    roblox_client = get_roblox_client()

    try:
        roblox_id = await discord_to_roblox_id(discord_user_id)

        roblox_user = await roblox_client.get_user(roblox_id)
        return roblox_user
    except Exception as e:
        print(e)
        return None

async def conv_username_roblox_user(username: str):
    roblox_client = get_roblox_client()

    try:
        return await roblox_client.get_user_by_username(username)
    except roblox.UserNotFound:
        return None

async def get_roblox_user_role(roblox_user, group_id: int):
    roblox_user_roles = await roblox_user.get_group_roles()
    roblox_user_role = None
    for role in roblox_user_roles:
        if role.group.id == group_id:
            roblox_user_role = role
    return roblox_user_role
