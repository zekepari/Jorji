import roblox
import requests

async def roblox_to_discord_id(roblox_id: str):
    try:
        url = f"http://arstotzka_rolinker_1:3000/roblox-to-discord?id={roblox_id}"

        req = requests.get(url)
        data = req.json()

        discord_id = data.get('discordId')

        return discord_id
    except Exception as e:
        print(e)
        return None

async def discord_to_roblox_id(discord_id: str):
    try:
        url = f"http://arstotzka_rolinker_1:3000/discord-to-roblox?id={discord_id}"

        req = requests.get(url)
        data = req.json()

        roblox_id = data.get('robloxId')

        return roblox_id
    except Exception as e:
        print(e)
        return None

async def conv_discord_roblox_user(discord_user_id: str, roblox_client: roblox.Client):
    try:
        roblox_id = await discord_to_roblox_id(discord_user_id)

        roblox_user = await roblox_client.get_user(roblox_id)
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
