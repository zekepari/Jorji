const noblox = require('noblox.js');

async function startRoblox() {
    const currentUser = await noblox.setCookie(process.env.ROBLOX_COOKIE);
    console.log('Roblox ready', currentUser.UserName);
}

module.exports = startRoblox;
