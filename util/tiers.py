import os
from dotenv import load_dotenv

load_dotenv()

guild_groups = {
    #1168540731506425917: {
        #'name': 'main',
        #'group_id': 33315557,
    #},
    1171056646185816225: {
        'name': 'army',
        'group_id': 33315713,
        'api_key': os.getenv('ROLINKER_ARMY_KEY')
    },
    1171059393333313616: {
        'name': 'police',
        'group_id': 33315700,
        'api_key': os.getenv('ROLINKER_POLICE_KEY')
    },
    1171060112761311383: {
        'name': 'intelligence',
        'group_id': 33315696,
        'api_key': os.getenv('ROLINKER_INTELLIGENCE_KEY')
    },
    1171057617863450674: {
        'name': 'admission',
        'group_id': 33315725,
        'api_key': os.getenv('ROLINKER_ADMISSION_KEY')
    }
}

tier_ranges = {
    "army": {
        range(1, 7): "🥉",
        range(7, 13): "🥈",
        range(13, 16): "🥇",
        range(16, 256): "🏛️",
    },
    "police": {
        range(1, 7): "🥉",
        range(7, 13): "🥈",
        range(13, 16): "🥇",
        range(16, 256): "🏛️",
    },
    "admission": {
        range(1, 4): "🥉",
        range(4, 7): "🥈",
        range(7, 8): "🥇",
        range(8, 256): "🏛️",
    },
    "intelligence": {
        range(1, 4): "🥉",
        range(4, 7): "🥈",
        range(7, 8): "🥇",
        range(8, 256): "🏛️",
    },
}

# Tier permissions
promote_permissions = {
    "🏛️": ["🥇"],
    "🥇": ["🥈"],
    "🥈": ["🥉"],
    "🥉": []
}

tierPromote_permissions = {
    "🏛️": ["🥈"],
    "🥇": ["🥉"],
    "🥈": [],
    "🥉": []
}

demote_permissions = {
    "🏛️": ["🥇", "🥈"],
    "🥇": ["🥈", "🥉"],
    "🥈": [],
    "🥉": []
}

exile_permissions = {
    "🏛️": ["🥇", "🥈"],
    "🥇": ["🥈", "🥉"],
    "🥈": [],
    "🥉": []
}

accept_permissions = {
    "🏛️": True,
    "🥇": True,
    "🥈": True,
    "🥉": False
}