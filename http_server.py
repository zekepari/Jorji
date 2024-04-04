import os
from dotenv import load_dotenv
import json
import hmac
import hashlib
from aiohttp import web
from util.roblox import get_roblox_client
from util.tiers import main_id, main_api_key
from util.conversions import update_roles

load_dotenv()

def verify_signature(data, signature, secret_key):
    expected_signature = hmac.new(secret_key.encode(), data.encode(), hashlib.sha1).hexdigest()
    return hmac.compare_digest(signature, expected_signature)

async def handle_post_request(request):
    data = await request.json()
    encoded_data = json.dumps(data)
    signature = request.headers.get('Signature')
    secret_key = os.getenv('ROBLOX_KEY')

    if encoded_data and signature and verify_signature(encoded_data, signature, secret_key):
        decoded_data = json.loads(encoded_data)
        user_id = int(decoded_data.get('robloxId'))
        rank = decoded_data.get('rank')

        if user_id and rank:
            roblox_client = get_roblox_client()
            try:
                group = await roblox_client.get_group(main_id)
                await group.set_rank(user_id, rank)
                await update_roles(user_id, main_api_key)
                return web.Response(status=200)
            except Exception as e:
                return web.Response(status=500)
        else:
            return web.Response(status=400)
    else:
        return web.Response(status=401)

async def start_http_server():
    app = web.Application()
    app.router.add_post('/roblox', handle_post_request)
    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, '0.0.0.0', 5000)
    await site.start()
    print(f'Server open on port {site._port}')