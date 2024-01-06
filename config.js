module.exports = {
    groupIdTable: {
        Main: 33315557,
        Army: 33315713,
        Police: 33315700,
        Intelligence: 33315696,
        Admission: 33315725,
    },
    discordChannelIdTable: {
        Army: '1193107337158852639',
        Police: '1193108925432733796',
        Intelligence: '1193108887126159410',
        Admission: '1193108870080507964'
    },
    rankToDiscordRoleIdTable: {
        Army: {
            "Glorious Leader": '1171056764767186974',
            "Minister": '1180792434771369986',
            "Deputy Minister": '1180792436742692934',
            "Generalissimo": '1180792437950648352',
            "General": '1180792438676267080',
            "Colonel": '1180792440085549056',
            "Major": '1180792440085549056',
            "Captain": '1180792442333696050',
            "Lieutenant": '1180792443344527382',
            "Sergeant Major": '1180792444158230539',
            "Sergeant": '1180792445693349929',
            "Corporal": '1180792446569939025',
            "Lance Corporal": '1180792447798878250',
            "Private": '1180792449493389372',
            "Conscript": '1180792450638434315'
          },
          Police: {
            "Glorious Leader": '1171059423112876114',
            "Minister": '1181569349182562364',
            "Deputy Minister": '1181569350201782313',
            "Chief of Police": '1181569351304884298',
            "Assistant Chief": '1181569353028739173',
            "Commander": '1181569354559672330',
            "Captain": '1181569355834724362',
            "Lieutenant": '1181569356350636103',
            "Sergeant": '1181569357332086825',
            "Detective": '1181569358649114705',
            "Constable": '1181569359710273666',
            "Probationary Constable": '1181569360733683733',
            "Recruit": '1181569361392189442'
          },
          Intelligence: {
            "Glorious Leader": '1171060180969078815',
            "Minister": '1182745000883265577',
            "Deputy Minister": '1182745002221240371',
            "Intelligence Director": '1182745003353718864',
            "Assistant Director": '1182745004381327400',
            "Section Chief": '1182745005081763933',
            "Head Agent": '1182745006193266688',
            "Field Agent": '1182745007275397180',
            "Probationary Agent": '1182745008550457525',
            "Intake": '1182745009590640731'
          },
          Admission: {
            "Glorious Leader": '1171057648884523118',
            "Minister": '1190223069441183804',
            "Deputy Minister": '1190223070644940800',
            "Border Director": '1190223071882252388',
            "Assistant Director": '1190223073224441908',
            "Chief Inspector": '1190223074595971154',
            "Inspector": '1190223075430641785',
            "Junior Inspector": '1190223077502623854',
            "Recruit": '1190223078962241607'
        }
    },
    rankingTable: {
        "Army": {
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
          "Police": {
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
          "Intelligence": {
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
          "Admissions": {
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
    }
};