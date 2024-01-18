guild_id_table = {
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

auto_rank_table = {
    "National Council": {
        'Army': ["Minister", "Deputy Minister"],
        'Police': ["Minister", "Deputy Minister"],
        'Intelligence': ["Minister", "Deputy Minister"],
        'Admission': ["Minister", "Deputy Minister"],
    },
    "High Command": {
        'Army': ["Generalissimo"],
        'Police': ["Chief of Police"],
        'Intelligence': ["Intelligence Director"],
        'Admission': ["Border Director"],
    },
}

host_table = {
    'Army': ["Owner", "Glorious Leader", "Deputy Minister", "Generalissimo", "General", "Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant"],
    'Police': ["Owner", "Glorious Leader", "Minister", "Deputy Minister", "Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant"],
    'Intelligence': ["Owner", "Glorious Leader", "Minister", "Deputy Minister", "Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent"],
    'Admission': ["Owner", "Glorious Leader", "Minister", "Deputy Minister", "Border Director", "Assistant Director"],
}

accept_table = {
    'Army': ["Owner", "Glorious Leader", "Deputy Minister", "Generalissimo", "General", "Colonel"],
    'Police': ["Owner", "Glorious Leader", "Minister", "Deputy Minister", "Chief of Police", "Assistant Chief"],
    'Intelligence': ["Owner", "Glorious Leader", "Minister", "Deputy Minister", "Intelligence Director", "Assistant Director", "Section Chief"],
    'Admission': ["Owner", "Glorious Leader", "Minister", "Deputy Minister", "Border Director"],
}

exile_table = {
    'Army': ["Owner", "Glorious Leader", "Deputy Minister"],
    'Police': ["Owner", "Glorious Leader", "Minister", "Deputy Minister"],
    'Intelligence': ["Owner", "Glorious Leader", "Minister", "Deputy Minister"],
    'Admission': ["Owner", "Glorious Leader", "Minister", "Deputy Minister"],
}

promotion_table = {
    'Army': {
        "Owner": ["Minister", "Deputy Minister", "Generalissimo", "General", "Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
        "Glorious Leader": ["Deputy Minister", "Generalissimo", "General", "Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
        "Minister": ["Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
        "Deputy Minister": ["Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
        "Generalissimo": ["Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
        "General": ["Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
        "Colonel": ["Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
        "Major": ["Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
        "Captain": ["Sergeant", "Corporal", "Private"],
        "Lieutenant": ["Corporal", "Private", "Conscript"],
        "Sergeant Major": ["Conscript"],
        "Sergeant": ["Conscript"]
    },
    'Police': {
        "Owner": ["Minister", "Deputy Minister", "Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
        "Glorious Leader": ["Deputy Minister", "Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
        "Minister": ["Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
        "Deputy Minister": ["Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
        "Chief of Police": ["Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
        "Assistant Chief": ["Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
        "Commander": ["Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
        "Captain": ["Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
        "Lieutenant": ["Detective", "Constable", "Probationary Constable", "Recruit"],
        "Sergeant": ["Recruit"]
    },
    'Intelligence': {
        "Owner": ["Minister", "Deputy Minister", "Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent", "Intake"],
        "Glorious Leader": ["Deputy Minister", "Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent", "Intake"],
        "Minister": ["Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent", "Intake"],
        "Deputy Minister": ["Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent", "Intake"],
        "Intelligence Director": ["Head Agent", "Field Agent", "Probationary Agent", "Intake"],
        "Assistant Director": ["Head Agent", "Field Agent", "Probationary Agent", "Intake"],
        "Section Chief": ["Field Agent", "Probationary Agent", "Intake"],
        "Head Agent": ["Probationary Agent", "Intake"],
        "Field Agent": ["Intake"]
    },
    'Admission': {
        "Owner": ["Minister", "Deputy Minister", "Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
        "Glorious Leader": ["Deputy Minister", "Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
        "Minister": ["Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
        "Deputy Minister": ["Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
        "Border Director": ["Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
        "Assistant Director": ["Inspector", "Junior Inspector", "Recruit"]
    }
}

demotion_table = {
    'Army': {
        "Owner": ["Glorious Leader", "Minister", "Deputy Minister", "Generalissimo", "General", "Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private"],
        "Glorious Leader": ["Minister", "Deputy Minister", "Generalissimo", "General", "Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private"],
        "Minister": ["General", "Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private"],
        "Deputy Minister": ["General", "Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private"],
        "Generalissimo": ["Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private"],
        "General": ["Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private"],
        "Colonel": ["Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private"],
        "Major": ["Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private"],
        "Captain": ["Sergeant Major", "Sergeant", "Corporal", "Private"],
        "Lieutenant": ["Sergeant", "Corporal", "Private"],
    },
    'Police': {
        "Owner": ["Glorious Leader", "Minister", "Deputy Minister", "Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
        "Glorious Leader": ["Minister", "Deputy Minister", "Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
        "Minister": ["Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
        "Deputy Minister": ["Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
        "Chief of Police": ["Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
        "Assistant Chief": ["Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
        "Commander": ["Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
        "Captain": ["Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
        "Lieutenant": ["Sergeant", "Detective", "Constable", "Probationary Constable"]
    },
    'Intelligence': {
        "Owner": ["Glorious Leader", "Minister", "Deputy Minister", "Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent"],
        "Glorious Leader": ["Minister", "Deputy Minister", "Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent"],
        "Minister": ["Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent"],
        "Deputy Minister": ["Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent"],
        "Intelligence Director": ["Section Chief", "Head Agent", "Field Agent", "Probationary Agent"],
        "Assistant Director": ["Section Chief", "Head Agent", "Field Agent", "Probationary Agent"],
        "Section Chief": ["Head Agent", "Field Agent", "Probationary Agent"],
        "Head Agent": ["Field Agent", "Probationary Agent"],
        "Field Agent": ["Probationary Agent"]
    },
    'Admission': {
        "Owner": ["Glorious Leader", "Minister", "Deputy Minister", "Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector"],
        "Glorious Leader": ["Minister", "Deputy Minister", "Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector"],
        "Minister": ["Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector"],
        "Deputy Minister": ["Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector"],
        "Border Director": ["Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector"],
        "Assistant Director": ["Chief Inspector", "Inspector", "Junior Inspector"]
    }
}
