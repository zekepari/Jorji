import os
import roblox
from dotenv import load_dotenv

load_dotenv()
ROBLOX_COOKIE = os.getenv('ROBLOX_COOKIE')

def get_roblox_client():
    return roblox.Client(ROBLOX_COOKIE)