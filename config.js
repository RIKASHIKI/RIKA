const fs = require('fs')
const chalk = require('chalk')
const  { ind, eng} = require(`./language`)
lang1 = global.lang1
// sistem
global.modepub = true //true for public | false for self
global.lang1 = eng //ind for indonesia | eng for english

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	lolhuman :'https://api.lolhuman.xyz',
	cali : 'https://caliphapi.com'
}
// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
	'https://api.lolhuman.xyz': '3211199ba2ebb6121d3676b8', //4e5dd596c8
	'https://caliphapi.com': 'MqrYHqvR'
}

global.limitMember = 50 //minimum member
// profile
global.owner = ['62882020038817','6287820032793'] // owner
global.packname = 'RKS MD' //pacname sticker & name bot
global.author = '62882020038817' //author sticker
global.ownername = 'RIKASHIKI' //your name
global.fouter = 'RIKASHIKI | RKS-MD ©2022' //whatever
global.ownernumber = ['62882020038817'] //owner number
global.sessionName = 'session'
// media
global.thumbnaili = fs.readFileSync('./media/RKS.jpg') //thumbnail
global.donasnya = fs.readFileSync('./media/logo1.mp4') //donate image
global.video = ('.media/logo1.mp4') //video to link? switch to {url: 'yourlinkvideo' }
global.youtube = 'https://youtube.com/c/RIKASHIKI' //youtube
global.webyou = 'https://github.com/RIKASHIKI' //github
global.email = 'hariamd210@gmail.com' //email
global.loc = 'JAPAN' //location
global.instagram = 'https://instagram.com/@rikashiki_san' //ig
global.grup = 'https://chat.whatsapp.com/BjK5KU9nZNNDJRqjZwfV4I' //grupwhatsapp
global.shcenter = 'https://chat.whatsapp.com/EKLhAWTkGd07un1wQsKbcz' //suggest & help center
global.prefa = ['','!','.','🐦','🐤','🗿'] 
global.sp = '►' //mark

global.tim = {
    night: 'good night',
	evening: 'good evening',
	afternoon: 'good afternoon',
	midday: 'good midday',
	morning: 'good morning',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
