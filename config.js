export const divisionIdTable = {
  '1168540731506425917': {
    name: 'Main',
    groupId: 33315557,
    rankChannelId: '1193601714704625765',
  },
  '1171056646185816225': {
    name: 'Army',
    groupId: 33315713,
    rankChannelId: '1193603353628905583',
  },
  '1171059393333313616': {
    name: 'Police',
    groupId: 33315700,
    rankChannelId: '1193108925432733796',
  },
  '1171060112761311383': {
    name: 'Intelligence',
    groupId: 33315696,
    rankChannelId: '1193108887126159410',
  },
  '1171057617863450674': {
    name: 'Admission',
    groupId: 33315725,
    rankChannelId: '1193108870080507964',
  }
};

export const acceptTable = {
  Army: ["Glorious Leader", "Deputy Minister", "Generalissimo", "General", "Colonel"],
  Police: ["Glorious Leader", "Minister", "Deputy Minister", "Chief of Police", "Assistant Chief"],
  Intelligence: ["Glorious Leader", "Minister", "Deputy Minister", "Intelligence Director", "Assistant Director", "Section Chief"],
  Admission: ["Glorious Leader", "Minister", "Deputy Minister", "Border Director"],
}

export const autoRankTable = {
  "National Council": {
    Army: ["Minister", "Deputy Minister"],
    Police: ["Minister", "Deputy Minister"],
    Intelligence: ["Minister", "Deputy Minister"],
    Admission: ["Minister", "Deputy Minister"],
  },
  "High Command": {
    Army: ["Generalissimo"],
    Police: ["Chief of Police"],
    Intelligence: ["Intelligence Director"],
    Admission: ["Border Director"],
  },
}

export const rankingTable = {
  Main: {
    "Owner": ["Glorious Leader", "Premier", "Deputy Premier", "National Council", "High Command", "Upper Class", "Middle Class", "Lower Class", "Immigrant", "Outsider"],
    "Glorious Leader": ["Premier", "Deputy Premier", "National Council", "High Command", "Upper Class"],
    "Premier": [],
    "Deputy Premier": [],
    "National Council": [],
    "High Command": [],
    "Upper Class": [],
    "Middle Class": [],
    "Lower Class": [],
    "Immigrant": [],
    "Outsider": []
  },
  Army: {
    "Owner": ["Glorious Leader", "Deputy Minister", "Generalissimo", "General", "Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
    "Glorious Leader": ["Minister", "Deputy Minister", "Generalissimo", "General", "Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
    "Minister": ["General", "Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
    "Deputy Minister": ["General", "Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
    "Generalissimo": ["Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
    "General": ["Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
    "Colonel": ["Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private", "Conscript"],
    "Major": ["Lieutenant", "Sergeant Major", "Sergeant", "Corporal", "Private"],
    "Captain": ["Sergeant Major", "Sergeant", "Corporal", "Private"],
    "Lieutenant": ["Sergeant", "Corporal", "Private"],
    "Sergeant Major": ["Private"],
    "Sergeant": ["Private"],
    "Corporal": [],
    "Private": [],
    "Conscript": []
  },
  Police: {
    "Owner": ["Glorious Leader", "Minister", "Deputy Minister", "Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
    "Glorious Leader": ["Minister", "Deputy Minister", "Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
    "Minister": ["Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
    "Deputy Minister": ["Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
    "Chief of Police": ["Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
    "Assistant Chief": ["Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable", "Recruit"],
    "Commander": ["Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
    "Captain": ["Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
    "Lieutenant": ["Sergeant", "Detective", "Constable", "Probationary Constable"],
    "Sergeant": ["Probationary Constable"],
    "Detective": [],
    "Constable": [],
    "Probationary Constable": [],
    "Recruit": []
  },
  Intelligence: {
    "Owner": ["Glorious Leader", "Minister", "Deputy Minister", "Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent", "Intake"],
    "Glorious Leader": ["Minister", "Deputy Minister", "Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent", "Intake"],
    "Minister": ["Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent", "Intake"],
    "Deputy Minister": ["Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent", "Intake"],
    "Intelligence Director": ["Section Chief", "Head Agent", "Field Agent", "Probationary Agent", "Intake"],
    "Assistant Director": ["Section Chief", "Head Agent", "Field Agent", "Probationary Agent", "Intake"],
    "Section Chief": ["Head Agent", "Field Agent", "Probationary Agent", "Intake"],
    "Head Agent": ["Field Agent", "Probationary Agent"],
    "Field Agent": ["Probationary Agent"],
    "Probationary Agent": [],
    "Intake": []
  },
  Admission: {
    "Owner": ["Glorious Leader", "Minister", "Deputy Minister", "Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
    "Glorious Leader": ["Minister", "Deputy Minister", "Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
    "Minister": ["Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
    "Deputy Minister": ["Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
    "Border Director": ["Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
    "Assistant Director": ["Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
    "Chief Inspector": [],
    "Inspector": [],
    "Junior Inspector": [],
    "Recruit": []
  }
};