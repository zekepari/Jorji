// Group info (Key = Guild Id)
export const guildIdTable = {
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

// What main ranks will users receive based on their divisional rank
export const mainAutoRankTable = {
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

// What ranks can host events based on their respective division group
export const divisionHostTable = {
  Army: ["Glorious Leader", "Deputy Minister", "Generalissimo", "General", "Colonel", "Major", "Captain", "Lieutenant", "Sergeant Major", "Sergeant"],
  Police: ["Glorious Leader", "Minister", "Deputy Minister", "Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant"],
  Intelligence: ["Glorious Leader", "Minister", "Deputy Minister", "Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent"],
  Admission: ["Glorious Leader", "Minister", "Deputy Minister", "Border Director", "Assistant Director"],
}

// What ranks can accept users into their respective division group
export const divisionAcceptTable = {
  Army: ["Glorious Leader", "Deputy Minister", "Generalissimo", "General", "Colonel"],
  Police: ["Glorious Leader", "Minister", "Deputy Minister", "Chief of Police", "Assistant Chief"],
  Intelligence: ["Glorious Leader", "Minister", "Deputy Minister", "Intelligence Director", "Assistant Director", "Section Chief"],
  Admission: ["Glorious Leader", "Minister", "Deputy Minister", "Border Director"],
}

// What ranks can exile users from their respective division group
export const divisionExileTable = {
  Army: ["Glorious Leader", "Deputy Minister"],
  Police: ["Glorious Leader", "Minister", "Deputy Minister"],
  Intelligence: ["Glorious Leader", "Minister", "Deputy Minister"],
  Admission: ["Glorious Leader", "Minister", "Deputy Minister"],
}

// What ranks each rank can promote in their respective group
export const promotionTable = {
  Army: {
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
  Police: {
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
  Intelligence: {
    "Glorious Leader": ["Deputy Minister", "Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent", "Intake"],
    "Minister": ["Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent", "Intake"],
    "Deputy Minister": ["Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent", "Intake"],
    "Intelligence Director": ["Head Agent", "Field Agent", "Probationary Agent", "Intake"],
    "Assistant Director": ["Head Agent", "Field Agent", "Probationary Agent", "Intake"],
    "Section Chief": ["Field Agent", "Probationary Agent", "Intake"],
    "Head Agent": ["Probationary Agent", "Intake"],
    "Field Agent": ["Intake"]
  },
  Admission: {
    "Glorious Leader": ["Deputy Minister", "Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
    "Minister": ["Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
    "Deputy Minister": ["Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
    "Border Director": ["Chief Inspector", "Inspector", "Junior Inspector", "Recruit"],
    "Assistant Director": ["Inspector", "Junior Inspector", "Recruit"]
  }
}

// What ranks each rank can promote in their respective group
export const demotionTable = {
  Army: {
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
  Police: {
    "Glorious Leader": ["Minister", "Deputy Minister", "Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
    "Minister": ["Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
    "Deputy Minister": ["Chief of Police", "Assistant Chief", "Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
    "Chief of Police": ["Commander", "Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
    "Assistant Chief": ["Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
    "Commander": ["Captain", "Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
    "Captain": ["Lieutenant", "Sergeant", "Detective", "Constable", "Probationary Constable"],
    "Lieutenant": ["Sergeant", "Detective", "Constable", "Probationary Constable"]
  },
  Intelligence: {
    "Glorious Leader": ["Minister", "Deputy Minister", "Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent"],
    "Minister": ["Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent"],
    "Deputy Minister": ["Intelligence Director", "Assistant Director", "Section Chief", "Head Agent", "Field Agent", "Probationary Agent"],
    "Intelligence Director": ["Section Chief", "Head Agent", "Field Agent", "Probationary Agent"],
    "Assistant Director": ["Section Chief", "Head Agent", "Field Agent", "Probationary Agent"],
    "Section Chief": ["Head Agent", "Field Agent", "Probationary Agent"],
    "Head Agent": ["Field Agent", "Probationary Agent"],
    "Field Agent": ["Probationary Agent"]
  },
  Admission: {
    "Glorious Leader": ["Minister", "Deputy Minister", "Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector"],
    "Minister": ["Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector"],
    "Deputy Minister": ["Border Director", "Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector"],
    "Border Director": ["Assistant Director", "Chief Inspector", "Inspector", "Junior Inspector"],
    "Assistant Director": ["Chief Inspector", "Inspector", "Junior Inspector"]
  }
}