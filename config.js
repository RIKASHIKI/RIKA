const fs = require('fs')
const chalk = require('chalk')
const  { ind, eng} = require(`./language`)
lang = global.lang


// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	lolhuman :'https://api.lolhuman.xyz',
	cali : 'https://caliphapi.com',
}
// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'apikey',
	'https://api.lolhuman.xyz': 'apikey',
	'https://caliphapi.com': 'apikey'
}
// sistem
global.modepub = true //true for public | false for self
global.lang = eng //ind for indonesia | eng for english
global.limitMember = 50 //minimum member
// profile
global.owner = ['6287820032793','62882020044760'] // owner
global.vvip =[]
global.packname = 'RKS MD' //pacname sticker & name bot
global.author = '0882020044760' //author sticker
global.ownername = 'RIKASHIKI' //your name
global.fouter = 'RIKASHIKI | RKS-MD ©2022' //whatever
global.ownernumber = '6287820032793' //owner number
// media
global.thumbnaili = './media/RKS.jpg' //thumbnail
global.donasnya ='./media/RKS.jpg' //donate image
global.video = '.media/' //video to link? switch to {url: 'yourlinkvideo' }
global.youtube = 'https://youtube.com/c/RIKASHIKI' //youtube
global.webyou = 'https://github.com/RIKASHIKI' //github
global.email = 'hariamd210@gmail.com' //email
global.loc = 'JAPAN' //location
global.instagram = 'https://instagram.com/@rikashiki_san' //ig
global.grup = 'https://chat.whatsapp.com/E4YXacQLqPh3isulcGqlSA' //grup whatsapp
global.sessionName = 'session' //session
global.prefa = ['','!','.','🐦','🐤','🗿'] 
global.sp = '□' //mark


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
