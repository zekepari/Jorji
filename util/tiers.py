guild_groups = {
    1168540731506425917: {
        'name': 'Main',
        'group_id': 33315557,
    },
    1171056646185816225: {
        'name': 'Army',
        'group_id': 33315713,
    },
    1171059393333313616: {
        'name': 'Police',
        'group_id': 33315700,
    },
    1171060112761311383: {
        'name': 'Intelligence',
        'group_id': 33315696,
    },
    1171057617863450674: {
        'name': 'Admission',
        'group_id': 33315725,
    }
}

# Tier ranks
tier_3 = {
    "army": [1, 2, 3, 4, 5, 6],
    "police": [1, 2, 3, 4, 5, 6],
    "admission": [1, 2, 3],
    "intelligence": [1, 2, 3],
}

tier_2 = {
    "army": [7, 8, 9, 10, 11, 12],
    "police": [7, 8, 9, 10, 11, 12],
    "admission": [4, 5, 6],
    "intelligence": [4, 5, 6],
}

tier_1 = {
    "army": [13, 14, 15],
    "police": [13, 14, 15],
    "admission": [7],
    "intelligence": [7],
}

tier_gov = {
    "army": [16, 17],
    "police": [16, 17],
    "admission": [8, 9],
    "intelligence": [8, 9],
}

# Tier permissions
tier_3_permissions = {
    "rankPromote": {},
    "tierPromote": {},
    "demote": {},
    "exile": {},
    "accept": False
}

tier_2_permissions = {
    "rankPromote": {"tier_3"},
    "tierPromote": {},
    "demote": {},
    "exile": {},
    "accept": True
}

tier_1_permissions = {
    "rankPromote": {"tier_2"},
    "tierPromote": {"tier_3"},
    "demote": {"tier_2", "tier_3"},
    "exile": {"tier_2", "tier_3"},
    "accept": True
}

tier_gov_permissions = {
    "rankPromote": {"tier_1"},
    "tierPromote": {"tier_2"},
    "demote": {"tier_1", "tier_2"},
    "exile": {"tier_1", "tier_2"},
    "accept": True
}