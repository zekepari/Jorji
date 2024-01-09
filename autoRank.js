import noblox from 'noblox.js';
import { guildIdTable, mainAutoRankTable } from './config.js';

async function autoRank(userId, group, newRankName) {
    const mainGroup = Object.values(guildIdTable).find(g => g.name === 'Main');
    if (!mainGroup) {
        console.error('Main group not found in configuration.');
        return;
    }
    const mainGroupId = mainGroup.groupId;

    for (const [mainRank, divisions] of Object.entries(mainAutoRankTable)) {
        const divisionRanks = divisions[group.name];
        if (divisionRanks && divisionRanks.includes(newRankName)) {
            try {
                const userCurrentRankInMainGroup = await noblox.getRankInGroup(mainGroupId, userId);
                const mainGroupRoles = await noblox.getRoles(mainGroupId);
                const mainRankLevel = mainGroupRoles.find(role => role.name === mainRank)?.rank;

                if (mainRankLevel && userCurrentRankInMainGroup < mainRankLevel) {
                    await noblox.setRank({ group: mainGroupId, target: userId, rank: mainRankLevel });
                    console.log(`User ${userId} has been promoted to ${mainRank} in the main group.`);
                }
            } catch (error) {
                console.error('Error updating rank in main group:', error);
            }
            break;
        }
    }
}

export default autoRank;
