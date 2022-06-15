/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['6281908052908']
global.premium = ['6281908052908']
global.packname = 'vivian lie'
global.author = 'WhatsApp Bot'
global.sessionName = 'vivian'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Khusus Admin bree...!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Lu bukan Owner Bot',
    group: 'Khusus Group bree!',
    private: 'chat pribadi tod!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'sabar bre...',
    endLimit: 'Limit Harian Kau habis bree..',
}
global.limitawal = {
    premium: "Infinity",
    free: 10
}
global.thumb = fs.readFileSync('./lib/lia.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
