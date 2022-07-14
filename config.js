/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')
const  { ind, eng} = require(`./language`)

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstone',
}

// Other
global.modesp = false //true or false
global.owner = ['6287820032793','6288744328279'] // owner
global.premium = ['6287820032793','6288744328279'] // premium member
global.packname = 'RKS MD' //pacname sticker & nama bot
global.author = '088744328279' //author sticker
global.ownername = 'RIKASHIKI' //your name
global.fouter = '© RIKASHIKI | RKS MD 2022' //sesuai keinginan
global.ownernumber = '6287820032793' // nomer owner
global.thumbnaili = './media/RKS.jpg' //thumbnail
global.lang = 'ind' // [ind for indonesia] [eng for english]
global.youtube = 'https://youtube.com/c/RIKASHIKI' //youtube if have
global.github = 'https://github.com/RIKASHIKI/RIKA' //github
global.email = 'hariamd210@gmail.com' //email
global.loc = 'JAPAN' //location
global.instagram = 'https://instagram/@rikashiki_san' //ig
global.grup = 'https://chat.whatsapp.com/E4YXacQLqPh3isulcGqlSA' //grup wa
global.sessionName = 'session' // name session
global.prefa = ['','!','.','🐦','🐤','🗿'] 
global.sp = 'Ξ' //mark
global.video = './media/VIDEOWIBU.mp4' //video to link ? switch to {url: 'yourlinkvideo' }

global.limitawal = {
    premium: "Infinity", //premium user
    free: 15 //free user
}
/*
//limit
global.premium = 'infinity'
global.free = 15

//api
global.APIs= {
	lolhuman: 'https://api.lolhuman.xyz',
	zenz: 'http://zenzapis.xyz',
}
// apikey
global.APIKeys = {
	'https://api.lolhuman.xyz': 'yourapikey',
	'http://zenzapis.xyz': 'yourapikey',
}
*/

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
