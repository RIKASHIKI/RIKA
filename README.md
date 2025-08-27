 <h1 align="center">RIKA</h1><hr>
<h4 align="center">BOT WHATSAPP MULTI DEVICE</h4>
<p align="center">
	<img src="media/image.png" style="width:100%; object-fit:contain;">
</p>

```This WhatsApp bot is still in the development stage, so there are a few bugs WhatsApp Connection (BETA, not working perfectly)```

## WHAT'S NEW
* update version (pm2, whiskeysockets/baileys)
* add qrcode-terminal
* delete anonymous
* fix some bug


## SETTING
````ts
// sistem
global.modepub = true // public mode or self
global.lang = ind // change your language

// profile
global.owner = ['6287820032793','6288744328279'] // your number
global.packname = 'RKS MD' // pacname sticker & name bot
global.author = '088744328279' // author sticker
global.ownername = 'RIKASHIKI' // your name
global.fouter = 'RIKASHIKI | RKS-MD ©2022' // credits
global.ownernumber = '6287820032793' // your master number

// media
global.thumbnaili = './media/RKS.jpg' // thumbnail
global.video = './media/VIDEOWIBU.mp4' // video to link? switch to {url: 'yourlinkvideo' }
global.youtube = 'https://youtube.com/c/RIKASHIKI' // youtube
global.webyou = 'https://github.com/RIKASHIKI/RIKA' // your web
global.email = 'hariamd210@gmail.com' // email
global.loc = 'JAPAN' // location
global.instagram = 'https://instagram.com/@rikashiki_san' // ig
global.grup = 'https://chat.whatsapp.com/E4YXacQLqPh3isulcGqlSA' // grup whatsapp
global.sessionName = 'session' // session
global.prefa = ['','!','.','🐦','🐤','🗿'] // daftar prefix, default utama adalah '.'
global.prefix = '.' // prefix utama bot
global.sp = 'Ξ' // mark
````
Edit in [`config.js`](https://github.com/RIKASHIKI/RIKA/blob/master/config.js)
Editing Number Owner & session name in [`config.js`](https://github.com/RIKASHIKI/RIKA/blob/master/config.js)
Get Apikey zenz on [`zenz`](https://zenzapi.xyz/pricing)

## FOR WINDOWS/RDP USERS

* Download & Install Git [`Click Here`](https://git-scm.com/downloads)
* Download & Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download & Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Download & Instal pm2 [`Click Here`](https://pm2.keymetrics.io/)

```bash
git clone https://github.com/RIKASHIKI/RIKA
cd RIKA
npm start
```

## HOW TO CONNECT TO MONGODB ON HEROKU
* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`

## FOR TERMUX/UBUNTU/SSH USER

```bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
git clone https://github.com/RIKASHIKI/RIKA
cd RIKA
npm start
```
## RECOMMENDED INSTALL ON TERMUX

```bash
pkg install yarn
yarn
```

## Installing
```bash
$ node .
```

## Running
```bash
npm start
```

## stop
```bash
pm2 stop rika
```

## restart
```bash
pm2 restart rika
```

## delete
```bash
pm2 delete rika
```

## QR Code
QR Code for WhatsApp login will appear in the terminal and can also be accessed via browser at:

```
http://localhost:8082
```

License: [MIT](https://en.wikipedia.org/wiki/MIT_License)

## Thanks To
* [@adiwajshing/baileys](https://github.com/adiwajshing/baileys)
* [@whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys)
* [Nurutomo](https://github.com/Nurutomo)
* [Mhankbarbar](https://github.com/MhankBarBar)
* [Faiz](https://github.com/FaizBastomi)
* [Gimenz](https://github.com/Gimenz)
* [rayy](https://github.com/rayyreall)
* [Fatih Arridho](https://github.com/FatihArridho)
* [zhwzein](https://github.com/zhwzein)
* [CAF-ID](https://github.com/CAF-ID)
* [bintang](https://github.com/Bintangp02)
* [dika ardnt](https://github.com/DikaArdnt)
* [rikashiki](https://github.com/RIKASHIKI)

```Thanks to all who have participated in the development of this script```

