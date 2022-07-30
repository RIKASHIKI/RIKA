const fs = require('fs')
const chalk = require('chalk')
const  { ind, eng} = require(`./language`)

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}


// sistem
global.modepub = true //true for public | false for self
global.lang = ind //ind for indonesia | eng for english

// profile
global.owner = ['6287820032793','6288744328279'] // owner
global.packname = 'RKS MD' //pacname sticker & name bot
global.author = '088744328279' //author sticker
global.ownername = 'RIKASHIKI' //your name
global.fouter = 'RIKASHIKI | RKS-MD ©2022' //whatever
global.ownernumber = '6287820032793' //owner number

// media
global.thumbnaili = './media/RKS.jpg' //thumbnail
global.donasnya ='./media/RKS.jpg' //donate image
global.video = './media/VIDEOWIBU.mp4' //video to link? switch to {url: 'yourlinkvideo' }
global.youtube = 'https://youtube.com/c/RIKASHIKI' //youtube
global.github = 'https://github.com/RIKASHIKI/RIKA' //github
global.email = 'hariamd210@gmail.com' //email
global.loc = 'JAPAN' //location
global.instagram = 'https://instagram.com/@rikashiki_san' //ig
global.grup = 'https://chat.whatsapp.com/E4YXacQLqPh3isulcGqlSA' //grup whatsapp
global.sessionName = 'session' //session
global.prefa = ['','!','.','🐦','🐤','🗿'] 
global.sp = '□' //mark
/*
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
