require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, generateMessageID } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const BodyForm = require('form-data')
const speed = require('performance-now')
const { performance } = require('perf_hooks')

const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { fromBuffer } = require('file-type')


// read database
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = Rika = async (Rika, m, chatUpdate, store) => {
 try {
  var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
  var budy = (typeof m.text == 'string' ? m.text : '')
  var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
  const isCmd = body.startsWith(prefix)
  const menu = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
  const args = body.trim().split(/ +/).slice(1)
  const pushname = m.pushName || "No Name"
  const botNumber = await Rika.decodeJid(Rika.user.id)
  const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
  const salam1 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
    if(salam1 < "23:59:00"){
    var salam = lang.timenight()
                                                     }
    if(salam1 < "19:00:00"){
    var salam = lang.timeevening()
                                                      }
    if(salam1 < "18:00:00"){
    var salam = lang.timeafternoon()
                                                      }
    if(salam1 < "15:00:00"){
    var salam = lang.timemidday()
                                                      }
    if(salam1 < "11:00:00"){
    var salam = lang.timemorning()
                                                      }
    if(salam1 < "05:00:00"){
    var salam = lang.timenight()
                                                      }
        const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await Rika.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        //const isBanned = find(v => v.id === id)?.banned

	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('banned' in user)) user.banned = false
                if (!('afkReason' in user)) user.afkReason = ''
            } else global.db.data.users[m.sender] = {
                banned: false,
                afkTime: -1,
                afkReason: '',
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('nsfw' in chats)) chats.nsfw = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = true
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
        Banned: false,
		autobio: false,
		templateImage: false,
		templateVideo: false,
		templateGif: false,
		templateMsg: true,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!Rika.public) {
            if (!m.key.fromMe && !isCreator) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            Rika.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('> MESSAGE')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('> FROM'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('> IN'), chalk.green(m.isGroup ? groupName : 'PRIVATE', m.chat))
        }
	
	// auto set bio every 10 minutes
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 360 * 1000) {
		let uptime = await runtime(process.uptime())
		await Rika.setStatus(` ${fouter} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
  
	  // Anti Link
      if (db.data.chats[m.chat].antilink) {
        if (budy.match(`https://chat.whatsapp.com`)){
        const valid = (`https://chat.whatsapp.com/`+await Rika.groupInviteCode(m.chat))
         let isLinkThisGc = new RegExp(valid, 'i')
         let isgclink = isLinkThisGc.test(m.text)
         await m.reply(lang.antilig())
         if (!isBotAdmins) return m.reply(lang.notAdmin())
         if (isgclink) return m.reply(lang.thisGc())
         if (isAdmins) return m.reply(lang.admiGc())
         if (isCreator) return m.reply(lang.ownGc())
        Rika.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
          }
        }
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
      
      //Banned Member
      if (db.data.users[m.sender].banned && isBanned){
       return m.reply(lang.bane())
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Rika.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Rika.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Rika.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Rika.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Rika.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `${fouter}`, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Rika.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `${fouter}`, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Rika.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, `${fouter}`, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Rika.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `${fouter}`, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Rika.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `${fouter}`, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Rika.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Rika.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    Rika.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Rika.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Rika.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) Rika.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Rika.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Rika.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) Rika.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) Rika.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Rika.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
don't tag him!
he's is AFK ${reason ? 'with reason ' + reason : 'no reason'}
its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
you come back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
its been ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(menu) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} already afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await Rika.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Rika.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik menu dibawah ini ${prefix}${menu} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            Rika.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await Rika.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Rika.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'donate': {
            /*let btn = [
            {
            urlButton: {
              displayText: "MY GROUP",
              url: `${grup}`
            }
            },
            {
            urlButton: {
              displayText: "WEB",              
              url: `${webyou}`
            }
            },
            {
            quickReplyButton: {
              displayText: "RULES",
              id: 'rules'
            }
            },
            {
            quickReplyButton: {
              displayText: "OWNER",
              id: 'owner'
            }
            },
            {
            quickReplyButton: {
              displayText: "MENU",
              id: 'menu'
            }
            }
        ]
         let setbot = db.data.settings[botNumber]
         if (setbot.templateImage) {
         Rika.send5ButImg(m.chat,lang.dona(pushname, ownernumber),`${fouter}`,`${thumbnaili}`,btn,`${thumbnaili}`)
         } else if (setbot.templateGif) {
         Rika.send5ButGif(m.chat,lang.dona(pushname, ownernumber),`${fouter}`,`${video}`,btn,`${thumbnaili}`)
         } else if (setbot.templateVid) {
         Rika.send5ButVid(m.chat,lang.dona(pushname, ownernumber),`${fouter}`,`${video}`,btn,`${thumbnaili}`)
         } else if (setbot.templateMsg) {
         Rika.send5ButMsg(m.chat,lang.dona(pushname, ownernumber),`${fouter}`,btn)
         } else if (setbot.templateLocation) {
         Rika.send5ButLoc(m.chat,lang.dona(pushname, ownernumber),`${fouter}`,`${thumbnaili}`,btn)*/
         let button = [
            {buttonId: `rules`, buttonText: {displayText: 'RULES'}, type: 1},
            {buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
            {buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1}
        ]
        let buttonMessage = {
            image: thumbnaili,
            caption: lang.dona(pushname, ownernumber),
            footer: `${fouter}`,
            buttons: button,
            headerType: 4
        }
        Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
            break
            case 'sc': case 'source': {
               /*let btn = [
                    {
                        quickReplyButton: {
                            displayText: "DONATE",
                            id: `donasi`
                            }
                        }
                    ]
                    let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        Rika.send5ButImg(m.chat, lang.sc(), `${fouter}`, `${thumbnaili}`, btn,`${thumbnaili}`)
                        } else if (setbot.templateGif) {
                        Rika.send5ButGif(m.chat, lang.sc(), `${fouter}`, `${video}`, btn,`${thumbnaili}`)
                        } else if (setbot.templateVid) {
                        Rika.send5ButVid(m.chat, lang.sc(), `${fouter}`,`${video}`, btn, `${thumbnaili}`)
                        } else if (setbot.templateMsg) {
                        Rika.send5ButMsg(m.chat, lang.sc(), `${fouter}`, btn)
                        } else if (setbot.templateLocation) {
                        Rika.send5ButLoc(m.chat, lang.sc(), `${fouter}`, `${thumbnaili}`, btn)*/
                        let button = [
                            {buttonId: `donate`, buttonText: {displayText: 'DONATE'}, type: 1}
                        ]
                        let buttonMessage = {
                            image: thumbnaili,
                            caption: lang.sc(),
                            footer: `${fouter}`,
                            buttons: button,
                            headerType: 4
                        }
                        Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
                        } 
            break
            case 'chat': {
                if (!isCreator) throw lang.ownerOnly()
                if (!q) throw lang.chochat()
                if (args[0] === 'mute') {
                    Rika.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    Rika.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    Rika.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    Rika.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    Rika.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    Rika.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    Rika.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Rika.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + menu} kata\n\nOption : \n1. gambar\n2. kata\n3. kalimat\n4.lontong`
                if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Rika.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Rika.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${fouter}`, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Rika.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Rika.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${fouter}`, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Rika.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Rika.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${fouter}`, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Rika.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Rika.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${fouter}`, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                Rika.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'react': {
                if (!isCreator) throw lang.ownerOnly()
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Rika.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw lang.ownerOnly()
                if (!text) throw lang.maLin()
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw lang.linvalid()
                    m.reply(lang.wait())
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Rika.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw lang.ownerOnly()
                await Rika.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setwm': {
               if (!isCreator) throw lang.ownerOnly()
               if (!text) throw `Example : ${prefix + menu} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n${sp} Packname : ${global.packname}\n${sp} Author : ${global.author}`)
            }
            break
	/*case 'kick': {
		if (!m.isGroup) throw lang.grupOnly()
        if (!isBotAdmins) throw lang.notAdmin()
        if (!isAdmins) throw lang.adminOnly()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Rika.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw lang.grupOnly()
                if (!isBotAdmins) throw lang.notAdmin()
                if (!isAdmins) throw lang.adminOnly()
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Rika.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break*/
	case 'promote': {
		if (!m.isGroup) throw lang.grupOnly()
                if (!isBotAdmins) throw lang.notAdmin()
                if (!isAdmins) throw lang.adminOnly()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Rika.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw lang.grupOnly()
                if (!isBotAdmins) throw lang.notAdmin()
                if (!isAdmins) throw lang.adminOnly()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Rika.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': case'banned': case'ban': {
		if (!isCreator) throw lang.ownerOnly()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Rika.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': case'unbanned': case'unban': {
		if (!isCreator) throw lang.ownerOnly()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Rika.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
    case 'report': case 'request':{
        if (!text) throw lang.repor(prefix, menu)
    Rika.sendMessage(`${ownernumber}@s.whatsapp.net`,lang.ret(menu, text),{qouted:m})
    }

	    case 'setnamegc': {
                if (!m.isGroup) throw lang.grupOnly()
                if (!isBotAdmins) throw lang.notAdmin()
                if (!isAdmins) throw lang.adminOnly()
                if (!text) throw lang.wetext()
                await Rika.groupUpdateSubject(m.chat, text).then((res) => m.reply(lang.success())).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdescgc': {
                if (!m.isGroup) throw lang.grupOnly()
                if (!isBotAdmins) throw lang.notAdmin()
                if (!isAdmins) throw lang.adminOnly()
                if (!text) throw lang.wetext()
                await Rika.groupUpdateDescription(m.chat, text).then((res) => m.reply(lang.success())).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setppbot': {
             
                if (!isCreator) return m.reply(lang.ownerOnly())
                if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                var media = await Rika.downloadAndSaveMediaMessage(quoted)
                try {
                if (args[0] === "full") {
                const { generateProfilePicture } = require("./lib/myfunc")
                var { img } = await generateProfilePicture(media)
                await Rika.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
                } else { await Rika.updateProfilePicture(botNumber, { url: media }) }
                m.reply(lang.success())
                } catch { m.reply(lang.nowor()) }
                }
                break
                case 'setppgroup': case'setppgc': case'setppgrup': {
             
                    if (!isCreator) return m.reply(lang.ownerOnly())
                    if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    var media = await Rika.downloadAndSaveMediaMessage(quoted)
                    try {
                    if (args[0] === "full") {
                    const { generateProfilePicture } = require("./lib/myfunc")
                    var { img } = await generateProfilePicture(media)
                    await Rika.query({ tag: 'iq',  attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
                    } else { await Rika.updateProfilePicture(m.chat, { url: media }) }
                    m.reply(lang.success())
                    } catch { m.reply(lang.nowor()) }
                    }
                    break
            case 'tagall': {
                if (!m.isGroup) throw lang.grupOnly()
                if (!isBotAdmins) throw lang.notAdmin()
                if (!isAdmins) throw lang.adminOnly()
let teks = `「 *TAGALL* 」
 
 *pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `${sp} @${mem.id.split('@')[0]}\n`
                }
                Rika.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw lang.grupOnly()
            if (!isBotAdmins) throw lang.notAdmin()
            if (!isAdmins) throw lang.adminOnly()
            Rika.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
               case 'totag': {
               if (!m.isGroup) throw lang.grupOnly()
               if (!isBotAdmins) throw lang.notAdmin()
               if (!isAdmins) throw lang.adminOnly()
               if (!m.quoted) throw `Reply pesan dengan caption ${prefix + menu}`
               Rika.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
	    case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) throw lang.wetext()
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${sp} *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw lang.grupOnly()
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + menu} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: `${fouter}`,
                buttons: buttonsVote,
                headerType: 1
            }
            Rika.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw lang.grupOnly()
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: `${fouter}`,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            Rika.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw lang.grupOnly()
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: `${fouter}`,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            Rika.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw lang.grupOnly()
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${Rika.user.id}
`
Rika.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw lang.grupOnly()
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw lang.grupOnly()
                if (!isBotAdmins) throw lang.notAdmin()
                if (!isAdmins) throw lang.adminOnly()
                if (args[0] === 'close'){
                    await Rika.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await Rika.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await Rika.sendButtonText(m.chat, buttons, `Mode Group`, `${fouter}`, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw lang.grupOnly()
                if (!isBotAdmins) throw lang.notAdmin()
                if (!isAdmins) throw lang.adminOnly()
             if (args[0] === 'open'){
                await Rika.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await Rika.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await Rika.sendButtonText(m.chat, buttons, `Mode Edit Info`, `${fouter}`, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw lang.grupOnly()
                if (!isBotAdmins) throw lang.notAdmin()
                if (!isAdmins) throw lang.adminOnly()
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(lang.onbefo())
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(lang.offbefo())
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink unactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await Rika.sendButtonText(m.chat, buttons, `Mode Antilink`, `${fouter}`, m)
                }
             }
             break
             case'nsfw':{
                if (!isCreator && !isAdmins) throw lang.adminOnly()
                if (args[0] === "on"){
                if (db.data.chats[m.chat].nsfw) return m.reply(lang.onbefo())
                db.data.chats[m.chat].nsfw = true
                m.reply('nsfw active !')
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].nsfw) return m.chat(lang.offbefo())
                db.data.chats[m.chat].nsfw = false
                m.reply('nsfw unactive !')
                } else {
                    let buttons = [
                        { buttonId: 'nsfw on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'nsfw off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await Rika.sendButtonText(m.chat, buttons, `Mode nsfw`, `${fouter}`, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw lang.grupOnly()
                if (!isBotAdmins) throw lang.notAdmin()
                if (!isAdmins) throw lang.adminOnly()
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(lang.onbefo())
                db.data.chats[m.chat].mute = true
                m.reply(`${`${fouter}`} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(lang.offbefo())
                db.data.chats[m.chat].mute = false
                m.reply(`${`${fouter}`} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await Rika.sendButtonText(m.chat, buttons, `Mute Bot`, `${fouter}`, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': case 'gclink': {
                if (!m.isGroup) throw lang.grupOnly()
                if (!isBotAdmins) throw lang.notAdmin()
                let response = await Rika.groupInviteCode(m.chat)
                Rika.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral':case'ephe': {
                if (!m.isGroup) throw lang.grupOnly()
                if (!isBotAdmins) throw lang.notAdmin()
                if (!isAdmins) throw lang.adminOnly()
                if (args[0] === '1') {
                    await Rika.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await Rika.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await Rika.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await Rika.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EPHEMERAL GROUP",
                rows: [
                {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                Rika.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, `${fouter}`, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
            }
            break
            case 'delete': case 'del': case'hapus': {
                Rika.sendMessage(m.chat, { delete: { remoteJid: m.chat,id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw lang.ownerOnly()
                if (!text) throw `textnya ? \n\nExample : ${prefix + menu} RIKASHIKI`
                let getGroups = await Rika.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 2} detik`)
                for (let i of anu) {
                    await sleep(2000)
                    let txt =`─────「 BROADCAST 」 ─────\n\n ${text}`
                    await Rika.sendMessage(i,{image:thumbnaili, caption: txt},{qouted : m})
                }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw lang.ownerOnly()
                if (!text) throw `Text mana?\n\nExample : ${prefix + menu} rika-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 2} detik`)
		for (let u of anu) {
		    await sleep(2000)
            let txt =`─────「 BROADCAST 」 ─────\n\n ${text}`
            await Rika.sendMessage(u,{image: thumbnaili, caption: txt},{qouted : m})
                }
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `${sp} @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━${sp} *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${sp} *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                Rika.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await Rika.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda m.reply tidak mengandung m.reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${sp} *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${sp} *Nama :* ${nama}\n${sp} *User :* @${i.split('@')[0]}\n${sp} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Rika.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${sp} *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await Rika.groupMetadata(i)
                     teks += `${sp} *Nama :* ${metadata.subject}\n${sp} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n${sp} *ID :* ${metadata.id}\n${sp} *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${sp} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Rika.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    Rika.sendText(m.chat, 'List Online:\n\n' + online.map(v => `${sp} @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stiker': {
                m.reply(lang.wait())
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + menu}`
             if (/image/.test(mime)) {
            let media = await quoted.download()
            let encmedia = await Rika.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
            await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
            let media = await quoted.download()
            let encmedia = await Rika.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
            await fs.unlinkSync(encmedia)
            } else {
            throw `Kirim Gambar/Video Dengan Caption ${prefix + menu}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case'take':{
                m.reply(lang.wait())
                if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + menu} teks1|teks2`
                let [teks1, teks2] = text.split`|`
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await Rika.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await Rika.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + menu}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + menu} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + menu} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + menu} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + menu} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await Rika.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	     break
	       case 'attp': case 'ttp': {
           if (!text) throw lang.wetext()
           await Rika.sendMedia(m.chat, `https://xteam.xyz/${menu}?file&text=${text}`, 'Rika', 'shiki', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stickermeme': case 'stikermeme': {
	        if (!/image/.test(mime)) throw lang.nostic(prefix, menu)
            if (!text) throw lang.nostic(prefix, menu)
	        m.reply(lang.wait())
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let Rina = await floNime(dwnld)
	        let smeme = await fetchJson `https://api.memegen.link/images/custom/_/${text}.png?background=${Rina.result.url}`
	        let SHIkI = await Rika.sendImageAsSticker(m.chat, smeme, m, { packname: packname, author: author })
	        await fs.unlinkSync(SHIkI)
        
            await Rika.sendImageAsSticker(m.chat, smeme, m, { packname: `${packname}`, author: `${author}` })
           }
	       break
	        case 'simih': case 'simisimi': {
            if (!text) throw lang.wetext()
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + menu}*`
                m.reply(lang.wait())
                let media = await Rika.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Rika.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + menu}*`
                m.reply(lang.wait())
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Rika.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Rika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video Yang Ingin Dijadikan Audio Dengan Caption ${prefix + menu}`
            if (!quoted) throw `Kirim/Reply Video Yang Ingin Dijadikan Audio Dengan Caption ${prefix + menu}`
            m.reply(lang.wait())
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Rika.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + menu}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + menu}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + menu}`
            m.reply(lang.wait())
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Rika.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${fouter}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + menu}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + menu}`
            m.reply(lang.wait())
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            Rika.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + menu}*`
                m.reply(lang.wait())
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Rika.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Rika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(lang.wait())
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Rika.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + menu}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + menu}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + menu}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Rika.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(lang.wait())
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Rika.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: lang.success()}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
        case'poll' :case'polling':{
            //if (!text) throw lang.wetext()
             pollMes =[{ 
                pollCreationMessage:{
                    encKey: generateMessageID(),
                    name:'poll',
                    selectableOptionCount: 2,
                    options:[{
                            optionName:'option 1'
                        },{
                            optionName:'option 2'
                        },],},}]
            
        }
        Rika.sendMessage(m.chat,pollMes,{qouted:m})
        break
            case 'ytsearch' : case 'youtubesearch': case'yts':{
                if (!text) throw lang.wetext()
                let yts = require("yt-search")
                let search = await yts(text)
                let ylist = [{
                    title: "YOUTUBE SEARCH",
                    rows: [] }];
                    for (let i of search.all){
                        ylist[0].rows.push({title:`${i.title}`, rowId:`ytdl ${i.url}`, description:`Duration ${i.timestamp}|Views ${i.views}|Upload ${i.ago}|channel ${i.author.name}`})
                    }
                Rika.sendListMsg(m.chat, `select media to download`,`${fouter}`, `Hello ${pushname}`, `Click Here`, ylist, m)
                }
            break
        case 'google': {
                if (!text) throw lang.wetext()
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `_${text}_\n\n`
                for (let g of res) {
                teks += `${sp} *Title* : ${g.title}\n`
                teks += `${sp} *Description* : ${g.snippet}\n`
                teks += `${sp} *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + menu} misaka mikoto`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*────────「 GIMAGE SEARCH 」────────*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: `${fouter}`,
                    buttons: buttons,
                    headerType: 4
                }
                Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
        case'mediafire':{
        if (!isUrl) throw lang.adlin()
        m.reply(lang.wait())
        if (args[0] === '1'){
        res = await fetchJson(api('zenz','/downloader/mediafire',{ url: isUrl(text)[0] }, 'apikey'))
        Rika.sendMessage(m.chat,{document:{url: res},mimetype:'application',caption:'download from rika'},{qouted:m})
        } else if (args[0] === '2') {
            get = await fetchJson('cali',`/api/mediafire?url=${text}&apikey=MqrYHqvR`)
          Rika.sendMessage(m.chat,{document:{url: get.result.link},mimetype:'application',caption:'download from rika'},{qouted:m}) 
        }}
        break
        case'zippyshare':{
            if (!isUrl) throw lang.adlin()
            m.reply(lang.wait())
          get = await fetchJson(api("zenz", "/downloader/zippyshare", { url: isUrl(text)[0] }, "apikey"))
          Rika.sendMessage(m.chat,{document:{url: get},mimetype:'application',caption:'download from rika'},{qouted:m})
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + menu} mang chung`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'VIDEO'}, type: 1},
                    {buttonId: `ytfilemp3 ${anu.url}`, buttonText: {displayText: 'FILE AUDIO'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
${sp} Title : ${anu.title}
${sp} Ext : Search
${sp} ID : ${anu.videoId}
${sp} Duration : ${anu.timestamp}
${sp} Viewers : ${anu.views}
${sp} Upload At : ${anu.ago}
${sp} Author : ${anu.author.name}
${sp} Channel : ${anu.author.url}
${sp} Url : ${anu.url}
${sp} Description : ${anu.description}`,
                    footer: `${fouter}`,
                    buttons: buttons,
                    headerType: 4
                }
                Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'ytdl': case'youtubedl': case'youtubedownload': {
                if (!text) throw lang.adlin()
		    let { yta } = require('./lib/y2mate')
		    let media = await yta(text)
                    /*let btn = [{
                          quickReplyButton: {
                          displayText: "VIDEO",
                          id: `ytmp4 ${text}`
                          }
                          },
                          {
                          quickReplyButton: {
                          displayText: "AUDIO",
                          id: `ytmp3 ${text}`
                          }
                          },
                          {
                          quickReplyButton: {
                          displayText: "FILE AUDIO",
                          id: `ytfilemp3 ${text}`
                          }
                          }
                          ]
                          let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        Rika.send5ButImg(m.chat,lang.choicemed(),`${fouter}`,media.thumb,btn,media.thumb)
                        } else if (setbot.templateGif) {
                        Rika.send5ButGif(m.chat,lang.choicemed(),`${fouter}`,media.thumb,btn,media.thumb)
                        } else if (setbot.templateVid) {
                        Rika.send5ButVid(m.chat,lang.choicemed(),`${fouter}`,media.thumb,btn,media.thumb)
                        } else if (setbot.templateMsg) {
                        Rika.send5ButMsg(m.chat,lang.choicemed(),`${fouter}`, btn)
                        } else if (setbot.templateLocation) {
                        Rika.send5ButLoc(m.chat,lang.choicemed(),`${fouter}`,media.thumb, btn)*/
                        let button = [
                            {buttonId: `ytmp4 ${text}`, buttonText: {displayText: 'VIDEO'}, type: 1},
                            {buttonId: `ytmp3 ${text}`, buttonText: {displayText: 'AUDIO'}, type: 1},
                            {buttonId: `ytfilemp3 ${text}`, buttonText: {displayText: 'FILE AUDIO'}, type: 1},
                        ]
                        let buttonMessage = {
                            image: thumbnaili,
                            caption: lang.choicemed(),
                            footer: `${fouter}`,
                            buttons: button,
                            headerType: 4
                        }
                        Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
                        }
        break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + menu} https://youtube.com/watch?v=PtFMh6Tccag%27`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 200000) return m.reply('File Melebihi Batas '+util.format(media))
                Rika.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
        case 'ytfileaudio': case 'ytfilemp3': {
            let { yta } = require('./lib/y2mate')
            if (!text) throw `contoh :  ${prefix + menu} https://youtube.com/watch?v=PtFMh6Tccag%27` 
            let quality = args[1] ? args[1] : '128kbps'
            let media = await yta(text, quality)
            if (media.filesize >= 200000) return m.reply('File Melebihi Batas '+util.format(media))
            Rika.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }      
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + menu} https://youtube.com/watch?v=PtFMh6Tccag%27`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 200000) return m.reply('File Melebihi Batas '+util.format(media))
                Rika.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}`, caption: `${sp} Title : ${media.title}\n${sp} File Size : ${media.filesizeF}\n${sp} Url : ${isUrl(text)}\n${sp} Ext : MP3\n${sp} Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }    break
            case 'pinterest': case'pin':{
                m.reply(lang.wait())
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `pin ${text}`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `${sp} Url : ${result}`,
                    footer: `${fouter}`,
                    buttons: buttons,
                    headerType: 2
                }
                Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'ahegao': case 'ass': case 'bdsm': case 'blowjob': case 'cuckold': case 'cum': case 'ero': case 'femdom': case 'foot': case 'gangbang': case 'glasses': case 'hentai': case 'hentaigif': case 'jahy': case 'maid': case 'manga': case 'masturbation': case 'mobilewall': case 'netorare': case 'nsfwneko': case 'sfwneko': case 'orgy': case 'panties': case 'pussy': case 'tentacles': case 'thighs': case 'yuri': case 'zettairyouiki': {
                if (!db.data.chats[m.chat].nsfw) throw 'nsfw unactive'
                if (m.isGroup) throw 'tidak dapat digunakan di grup'
                m.reply(lang.wait())
                Rika.sendMessage(m.chat, { image: { url: api('zenz', '/api/morensfw/'+menu,{},'apikey') }, caption: 'Generate Random ' + menu }, { quoted: m })
            }
            break
            case`waifu`: case`awoo`: case`shinobu`:{
                m.reply(lang.wait())
                nih = await fetchJson(`https://api.waifu.pics/sfw/${menu}`)
                hasil = await getBuffer(nih.url)
                let buttons = [
                    {buttonId:`${menu}`,buttonText:{displayText:'next'},type:1}
                ]
                let buttonMessage = {
                    image: hasil,
                    caption: `random ${menu}`,
                    fouter: 'anime menu',
                    buttons:buttons,
                    headerType:4
                }
                Rika.sendMessage(m.chat,buttonMessage,{qouted:m})
            }
            break
	    case 'couple': {
                m.reply(lang.wait())
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Rika.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                Rika.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: `${fouter}`,
                    buttons: buttons,
                    headerType: 4
                }
                Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `${sp} Title : ${result.title}\n${sp} Category : ${result.type}\n${sp} Detail : ${result.source}\n${sp} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${fouter}`,
                    buttons: buttons,
                    headerType: 4
                }
                Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${sp} Title : ${result.title}\n${sp} Source : ${result.source}\n${sp} Media Url : ${result.image}`,
                    footer: `${fouter}`,
                    buttons: buttons,
                    headerType: 4
                }
                Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case'gitrepo':{
                if (!text) throw lang.wetext()
                m.reply(lang.wait())
                user = text.split('|')[0] ? text.split('|')[0] : '-'
                project = text.split('|')[1] ? text.split('|')[1] : '-'
                Rika.sendMessage(m.chat, {document: {url: `https://github.com/${encodeURIComponent(user)}/${encodeURIComponent(project)}/archive/refs/heads/main.zip`}, mimetype: 'application/zip', fileName: `[${encodeURIComponent(user)} | ${encodeURIComponent(project)}]`}, {quoted:m})
                }
            break
            case'gitclone':{
                if (!isUrl) throw lang.adlin()
                m.reply(lang.wait())
                let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex) || []
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                Rika.sendFileUrl(m.chat,url,filename, null, m)
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: `${fouter}`,
                    buttons: buttons,
                    headerType: 2
                }
                Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+menu, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: `${fouter}`,
                    buttons: buttons,
                    headerType: 2
                }
                Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(lang.wait())
                Rika.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + menu, { text: text }, 'apikey') }, caption: `Photo Oxy ${menu}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(lang.wait())
                Rika.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + menu, { text: text }, 'apikey') }, caption: `Ephoto ${menu}` }, { quoted: m })
            }
            break
	    case 'stalker': case 'stalk': {
                if (!text) return m.reply(`Example : ${prefix +menu} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() ==='ff') {
                    if (!id) throw `No Query id, Example ${prefix + menu} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                } if (type.toLowerCase() === 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + menu} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + menu} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
                } if (type.toLowerCase() === 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + menu} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                } if (type.toLowerCase() === 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + menu} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                } if (type.toLowerCase() === 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + menu} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                } if (type.toLowerCase() === 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + menu} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    Rika.sendMedia(m.chat, anu.caption.profile_hd, '', `${sp} Full Name : ${anu.caption.full_name}\n${sp} User Name : ${anu.caption.user_name}\n${sp} ID ${anu.caption.user_id}\n${sp} Followers : ${anu.caption.followers}\n${sp} Following : ${anu.caption.following}\n${sp} Bussines : ${anu.caption.bussines}\n${sp} Profesional : ${anu.caption.profesional}\n${sp} Verified : ${anu.caption.verified}\n${sp} Private : ${anu.caption.private}\n${sp} Bio : ${anu.caption.biography}\n${sp} Bio Url : ${anu.caption.bio_url}`, m)
                } if (type.toLowerCase() === 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + menu} npm performance-now`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`${sp} Name : ${anu.name}\n${sp} Version : ${Object.keys(anu.versions)}\n${sp} Created : ${tanggal(anu.time.created)}\n${sp} Modified : ${tanggal(anu.time.modified)}\n${sp} Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n${sp} Description : ${anu.description}\n${sp} Homepage : ${anu.homepage}\n${sp} Keywords : ${anu.keywords}\n${sp} Author : ${anu.author.name}\n${sp} License : ${anu.license}\n${sp} Readme : ${anu.readme}`)
                } else {
                    m.reply(`Example : ${prefix +menu} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
            case 'tiktok': case 'tt': case 'ttdl': case 'tiktokdl': case 'tiktokdownload': {
              if (!text) throw lang.adlin()
             /* let btn = [{
                    quickReplyButton: {
                    displayText: "NO WATERMARK",
                    id: `ttnowm ${text}`
                    }
                    },
                    {
                    quickReplyButton: {
                    displayText: "WATERMARK",
                    id: `ttwm ${text}`
                    }
                    },
                    {
                    quickReplyButton: {
                    displayText: "AUDIO",
                    id: `ttmp3 ${text}`
                    }
                    }
                    ]
              let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        Rika.send5ButImg(m.chat,lang.choicemed(),`${fouter}`,`${thumbnaili}`,btn,`${thumbnaili}`)
                        } else if (setbot.templateGif) {
                        Rika.send5ButGif(m.chat,lang.choicemed(),`${fouter}`,`${thumbnaili}`,btn,`${thumbnaili}`)
                        } else if (setbot.templateVid) {
                        Rika.send5ButVid(m.chat,lang.choicemed(),`${fouter}`,`${thumbnaili}`,btn,`${thumbnaili}`)
                        } else if (setbot.templateMsg) {
                        Rika.send5ButMsg(m.chat,lang.choicemed(),`${fouter}`, btn)
                        } else if (setbot.templateLocation) {
                        Rika.send5ButLoc(m.chat,lang.choicemed(),`${fouter}`,`${thumbnaili}`, btn)*/
                        let button = [
                            {buttonId: `ttnowm ${text}`, buttonText: {displayText: 'NO WATERMARK'}, type: 1},
                            {buttonId: `ttwm ${text}`, buttonText: {displayText: 'WATERMARK'}, type: 1},
                            {buttonId: `ttmp3 ${text}`, buttonText: {displayText: 'AUDIO'}, type: 1},
                        ]
                        let buttonMessage = {
                            image: thumbnaili,
                            caption:  lang.choicemed(),
                            footer: `${fouter}`,
                            buttons: button,
                            headerType: 4
                        }
                        Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
                    }
            break
            case 'tiktoknowatermark': case 'tiktoknowm' :case 'ttnowm': {
                if (!text) throw lang.adlin()
                m.reply(lang.wait()) 
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url:text}, 'apikey'))
                let buttons = [
                    {buttonId: `ttwm ${text}`, buttonText: {displayText: 'WATERMARK'}, type: 1},
                    {buttonId: `ttmp3 ${text}`, buttonText: {displayText: 'AUDIO'}, type: 1}
                ]
                let buttonMessage = {
                    video: {url: anu.result.nowm },
                    caption: `Download From ${text}`,
                    footer: `${fouter}`,
                    buttons: buttons,
                    headerType: 5
                }
                Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
                Rika.sendMessage(m.chat, { video: { url: anu.result.nowm }, mimetype: 'mp4', fileName: 'download from rks.mp4' }, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': case 'ttwm': {
                if (!text) throw lang.adlin()
                m.reply(lang.wait())
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `ttnowm ${text}`, buttonText: {displayText: 'NO WATERMARK'}, type: 1},
                    {buttonId: `ttmp3 ${text}`, buttonText: {displayText: 'AUDIO'}, type: 1}
                ]
                 let buttonMessage = {
                    video: {url: anu.json.download.wm},
                    caption: `Download From ${text}`,
                    footer: `${fouter}`,
                    buttons: buttons,
                    headerType: 5
                }
                Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio':case'ttmp3': {
                if (!text) throw lang.adlin()
                m.reply(lang.wait())
                anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                Rika.sendMessage(m.chat, { audio: {url: anu.json.download.wm}, mimetype: 'audio/mpeg'}, { quoted: m })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw lang.adlin()
                m.reply(lang.wait())
                    let anu = await fetchJson(api('cali','/api/ig?url=',{ query: text },'apikey'))  
                    for (let media of anu.result)
                    Rika.sendFileUrl(m.chat, media.url , `Download Url Instagram From ${isUrl(text)[0]}`, m)
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Text'
                m.reply(lang.wait())
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await Rika.sendImage(m.chat, anu.result.img, `${sp} Title : ${anu.result.lagu}\n${sp} Album : ${anu.result.album}\n${sp} Singer : ${anu.result.penyanyi}\n${sp} Publish : ${anu.result.publish}\n${sp} Lirik :\n${anu.result.lirik.result}`, m)
                Rika.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No text'
                m.reply(lang.wait())
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await Rika.sendImage(m.chat, anu.result.thumb, `${sp} Title : ${anu.result.title}\n${sp} Url : ${isUrl(text)[0]}`)
                Rika.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter':case'twitterdl': {
                if (!text) throw lang.adlin()
                m.reply(lang.wait())
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: `${fouter}`,
                    buttons: buttons,
                    headerType: 5
                }
                Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw lang.adlin()
                m.reply(lang.wait())
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: 'VIDEO'}, type: 1}
                ]
                let buttonMessage = {
		            image: { url: anu.result.tumb },
                    caption: util.format(anu.result),
                    footer: `${fouter}`,
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
                Rika.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw lang.adlin()
                m.reply(lang.wait())
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook',{ url: text },'apikey'))
                await Rika.sendMessage(m.chat, { video: { url: anu.result.hd }, caption: `${sp} Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw lang.adlin()
                m.reply(lang.wait())
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                Rika.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + menu} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Rika.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + menu} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		Rika.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(lang.wait())
		Rika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(lang.wait())
		Rika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(lang.wait())
		Rika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(lang.wait())
		Rika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + menu} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadits': case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + menu} bukhari 1
${prefix + menu} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + menu} muslim 1`
		try {
		let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
		let { number, arab, id } = res.result.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + menu} 1 2\n\nmaka hasilnya adalah surah Al-fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + menu} 1 2\n\nmaka hasilnya adalah surah Al-fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		Rika.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + menu} 1 2\n\nmaka hasilnya adalah tafsir surah Al-fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + menu} 1 2\n\nmaka hasilnya adalah tafsir surah Al-fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(menu)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(menu)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(menu)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(menu)) set = '-af volume=12'
                if (/fast/.test(menu)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(menu)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(menu)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(menu)) set = '-filter_complex "areverse"'
                if (/robot/.test(menu)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(menu)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(menu)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(menu)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(lang.wait())
                let media = await Rika.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                Rika.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + menu}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk menu Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker menu'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker menu'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Rika.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw lang.ownerOnly()
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(menu)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + menu} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + menu} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                Rika.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `${sp} *Name :* ${i.nama}\n${sp} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [ {
                    buttonText: { displayText: 'start' },
                    buttonId: 'start',
                      type: 1 
                    }
                ]
                Rika.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Rika.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, `${fouter}`, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [ {
                        buttonText: { displayText: 'start' },
                        buttonId: 'start',
                          type: 1 
                        }
                    ]
                    await Rika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await Rika.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (menu === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [ {
                        buttonText: { displayText: 'Stop' },
                        buttonId: 'keluar',
                          type: 1 
                        }
                    ]
                    await Rika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, `${fouter}`, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [ {
                        buttonText: { displayText: 'next' },
                        buttonId: 'skip',
                          type: 1 
                        }, {
                            buttonText: { displayText: 'Stop' },
                            buttonId: 'keluar',
                              type: 1 
                            }
                    ]
                    await Rika.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `${fouter}`, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Rika.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `${fouter}`, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [ {
                        buttonText: { displayText: 'Stop' },
                        buttonId: 'keluar',
                          type: 1 
                        }
                    ]
                    await Rika.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, `${fouter}`, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [ {
                        buttonText: { displayText: 'start' },
                        buttonId: 'start',
                          type: 1 
                        }
                    ]
                    await Rika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await Rika.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons =[ {
                        buttonText: { displayText: 'next' },
                        buttonId: 'skip',
                          type: 1 
                        }, {
                            buttonText: { displayText: 'Stop' },
                            buttonId: 'keluar',
                              type: 1 
                            }
                    ]
                    await Rika.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `${fouter}`, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Rika.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `${fouter}`, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [ {
                        buttonText: { displayText: 'Stop' },
                        buttonId: 'keluar',
                          type: 1 
                        }
                    ]
                    await Rika.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, `${fouter}`, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw lang.ownerOnly()
                Rika.public = true
                m.reply('Sukse Change To Public')
            }
            break
            case 'self': {
                if (!isCreator) throw lang.ownerOnly()
                Rika.public = false
                m.reply('Sukses Change To Self')
            }
            break
            case 'ping':case 'botstatus':case 'statusbot':case'speed':case 'z': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                Rika.sendContact(m.chat, global.ownernumber, m)
            }
            break
            case 'playstore': {
            if (!text) throw `Example : ${prefix + menu} moderns warships`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `${sp} Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `${sp} Name           : ${i.name}\n`
            teks += `${sp} Link           : ${i.link}\n`
            teks += `${sp} Developer      : ${i.developer}\n`
            teks += `${sp} Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': case'hp': {
            if (!text) throw `Example : ${prefix + menu} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `${sp} Title: ${judul}
${sp} Realease    : ${rilis}
${sp} Size        : ${ukuran}
${sp} Type        : ${type}
${sp} Storage     : ${storage}
${sp} Display     : ${display}
${sp} Inchi       : ${inchi}
${sp} Pixel       : ${pixel}
${sp} Video Pixel : ${videoPixel}
${sp} Ram         : ${ram}
${sp} Chipset     : ${chipset}
${sp} Battery     : ${batrai}
${sp} Battery Brand: ${merek_batre}
${sp} Detail      : ${detail}`
            Rika.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!text) throw `Example: ${prefix + menu} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `${sp} Title: ${i.title}\n`
            capt += `${sp} thumbnail: ${i.thumb}\n`
            capt += `${sp} Url: ${i.url}\n\n──────────────────────\n`
            }
            Rika.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `${sp} Title: ${i.title}\n`
            capt += `${sp} Url: ${i.url}\n`
            capt += `${sp} Img Url: ${i.img}\n\n──────────────────────\n`
            }
            Rika.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${prefix + menu} pubg`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Aminio Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `${sp} Community: ${i.community}\n`
            capt += `${sp} Community Link: ${i.community_link}\n`
            capt += `${sp} tumbnail: ${i.community_thumb}\n`
            capt += `${sp} Description: ${i.community_desc}\n`
            capt += `${sp} Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            Rika.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `Example : ${prefix + menu} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `${sp} Judul: ${judul}\n`
            capt += `${sp} Dibaca: ${dibaca}\n`
            capt += `${sp} Divote: ${divote}\n`
            capt += `${sp} Bab: ${bab}\n`
            capt += `${sp} Waktu: ${waktu}\n`
            capt += `${sp} Url: ${url}\n`
            capt += `${sp} Deskripsi: ${description}`
            Rika.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + menu} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `${sp} Judul: ${i.judul}\n`
            capt += `${sp} Like: ${i.like}\n`
            capt += `${sp} Creator: ${i.creator}\n`
            capt += `${sp} Genre: ${i.genre}\n`
            capt += `${sp} Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) throw `Example : ${prefix + menu} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `${sp} Judul: ${i.judul}\n`
            capt += `${sp} Years: ${i.years}\n`
            capt += `${sp} Genre: ${i.genre}\n`
            capt += `${sp} Url: ${i.url}\n`
            capt += `${sp} Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            Rika.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) return m.reply (lang.ownerOnly())
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(lang.success())
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(lang.success())
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(lang.success())
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                setbot.templateLocation = false
                m.reply(lang.success())
                } else if (args[0] === 'templateLocation'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = true
                m.reply(lang.success())
                } else {
                let sections = [
                {
                title: "CHANGE MENU ",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu to Template Message`},
                {title: "Template Location", rowId: `setmenu templateLocation`, description: `Change menu to Template Location`}
                ]
                },
                ]
                Rika.sendListMsg(m.chat, `Please select the menu you want to change!`, `${fouter}`, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
            case 'rules' :{
                /*let btn = [{
                    urlButton: {
                      displayText: "MY GROUP",
                      url: `${grup}`
                    }
                    },
                    {
                    quickReplyButton: {
                      displayText: "DONATE",
                      id: 'donasi'
                    }
                    },
                    {
                    quickReplyButton: {
                      displayText: "OWNER",
                      id: 'owner'
                    }
                    },
                    {
                    quickReplyButton: {
                      displayText: "MENU",
                      id: 'menu'
                    }
                    }
                ]
               let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        Rika.send5ButImg(m.chat, lang.rules(), `${fouter}`, `${thumbnaili}`, btn,`${thumbnaili}`)
                        } else if (setbot.templateGif) {
                        Rika.send5ButGif(m.chat, lang.rules(), `${fouter}`, `${video}`, btn,`${thumbnaili}`)
                        } else if (setbot.templateVid) {
                        Rika.send5ButVid(m.chat, lang.rules(), `${fouter}`,`${video}`, btn, `${thumbnaili}`)
                        } else if (setbot.templateMsg) {
                        Rika.send5ButMsg(m.chat, lang.rules(), `${fouter}`, btn)
                        } else if (setbot.templateLocation) {
                        Rika.send5ButLoc(m.chat, lang.rules(), `${fouter}`, `${thumbnaili}`, btn)*/
                        let button = [
                            {buttonId: `donate`, buttonText: {displayText: 'DONATE'}, type: 1},
                            {buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
                            {buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},
                        ]
                        let buttonMessage = {
                            image: thumbnaili,
                            caption: lang.rules(),
                            footer: `${fouter}`,
                            buttons: button,
                            headerType: 4
                        }
                        Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
                        }
            break
            case 'menu': case 'help': case 'command': {
                /*let btn = [{
                    urlButton: {
                      displayText: "MY GROUP",
                      url: `${grup}`
                    }
                    },
                    {
                    urlButton: {
                      displayText: "WEB",              
                      url: `${webyou}`
                    }
                    },
                    {
                    quickReplyButton: {
                      displayText: "RULES",
                      id: 'rules'
                    }
                    },
                    {
                    quickReplyButton: {
                      displayText: "SOURCE",
                      id: 'sc'
                    }
                    },
                    {
                    quickReplyButton: {
                      displayText: "ALLMENU",
                      id: 'allmenu'
                    }
                    }
                ]
                let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        Rika.send5ButImg(m.chat, lang.men(pushname, salam, packname, sp, prefix), `${fouter}`, `${thumbnaili}`, btn)
                        } else if (setbot.templateGif) {
                        Rika.send5ButGif(m.chat, lang.men(pushname, salam, packname, sp, prefix), `${fouter}`, `${video}`, btn,`${thumbnaili}`)
                        } else if (setbot.templateVid) {
                        Rika.send5ButVid(m.chat, lang.men(pushname, salam, packname, sp, prefix), `${fouter}`,`${video}`, btn, `${thumbnaili}`)
                        } else if (setbot.templateMsg) {
                        Rika.send5ButMsg(m.chat, lang.men(pushname, salam, packname, sp, prefix), `${fouter}`, btn)
                        } else if (setbot.templateLocation) {
                        Rika.send5ButLoc(m.chat, lang.men(pushname, salam, packname, sp ,prefix), `${fouter}`, `${thumbnaili}`, btn)*/
                        let button = [
                            {buttonId: `rules`, buttonText: {displayText: 'RULES'}, type: 1},
                            {buttonId: `listmenu`, buttonText: {displayText: 'LISTMENU'}, type: 1},
                            {buttonId: `allmenu`, buttonText: {displayText: 'ALLMENU'}, type: 1}
                        ]
                        let buttonMessage = {
                            image: thumbnaili,
                            caption: lang.men(pushname, salam, packname, sp ,prefix),
                            footer: `${fouter}`,
                            buttons: button,
                            headerType: 4
                        }
                        Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
                        }
        break
        case'ownermenu':{m.reply (lang.ownermen(sp, prefix))}
        break
        case'botmenu':{m.reply (lang.botmen(sp, prefix))}
        break
        case'grupmenu':{m.reply (lang.grupmen(sp, prefix))}
        break
        case'webmenu':{m.reply (lang.webmen(sp, prefix))}
        break
        case'downloadmenu':{m.reply (lang.downloadmen(sp, prefix))}
        break
        case'searchmenu':{m.reply (lang.searchmen(sp, prefix))}
        break
        case'randommenu':{m.reply (lang.randommen(sp, prefix))}
        break
        case'animemenu':{m.reply (lang.animemen(sp, prefix))}
        break
        case'nsfwmenu':{m.reply (lang.nsfwmen(sp, prefix))}
        break
        case'photoexymenu':{m.reply (lang.photoexymen(sp, prefix))}
        break
        case'ephotomenu':{m.reply (lang.ephotomen(sp, prefix))}
        break
        case'funmenu':{m.reply (lang.funmen(sp, prefix))}
        break
        case'convertmenu':{m.reply (lang.convertmen(sp, prefix))}
        break
        case'databasemenu':{m.reply (lang.databasemen(sp, prefix))}
        break
        case'anonymousmenu':{m.reply (lang.anonymousmen(sp, prefix))}
        break
        case'islammenu':{m.reply (lang.islammen(sp, prefix))}
        break
        case'voicemenu':{m.reply (lang.voicemen(sp, prefix))}
        break
        case'thankto':{m.reply (lang.thankto(sp))}
        break
        case'listmenu':{
        let sections = [
            {
            title: "ALLMENU",
            rows: [
            {title: "OWNERMENU", rowId: `ownermenu`, description: `───────────────────────────`},
            {title: "BOTMENU", rowId: `botmenu`, description: `───────────────────────────`},
            {title: "GROUPMENU", rowId: `grupmenu`, description: `───────────────────────────`},
            {title: "WEBMENU", rowId: `webmenu`, description: `───────────────────────────`},
            {title: "DOWNLOADMENU", rowId: `downloadmenu`, description: `───────────────────────────`},
            {title: "SEARCHMENU", rowId: `searchmenu`, description: `───────────────────────────`},
            {title: "RANDOMMENU", rowId: `randommenu`, description: `───────────────────────────`},
            {title: "ANIMEMENU", rowId: `animemenu`, description: `───────────────────────────`},
            {title: "NSFWMENU", rowId: `nsfwmenu`, description: `───────────────────────────`},
            {title: "PHOTOEXYMENU", rowId: `photoexymenu`, description: `───────────────────────────`},
            {title: "EPHOTOMENU", rowId: `ephotomenu`, description: `───────────────────────────`},
            {title: "FUNMENU", rowId: `funmenu`, description: `───────────────────────────`},
            {title: "CONVERTMENU", rowId: `convertmenu`, description: `───────────────────────────`},
            {title: "DATABASEMENU", rowId: `databasemenu`, description: `───────────────────────────`},
            {title: "ANONYMOUSMENU", rowId: `anonymousmenu`, description: `───────────────────────────`},
            {title: "ISLAMMENU", rowId: `islammenu`, description: `───────────────────────────`},
            {title: "VOICEMENU", rowId: `voicemenu`, description: `───────────────────────────`},
            {title: "THANK TO", rowId: `thankto`, description: `───────────────────────────`}
            ]
            },
            ]
            Rika.sendListMsg(m.chat, `${salam}`, `${fouter}`, `ALLMENU`, `Click Here`, sections, m)
        }
        break
            case 'allmenu':{
                /*let btn = [{
                    urlButton: {
                      displayText: "MY GROUP",
                      url: `${grup}`
                    }
                    },
                    {
                    urlButton: {
                      displayText: "WEB",              
                      url: `${webyou}`
                    }
                    },
                    {
                    quickReplyButton: {
                      displayText: "RULES",
                      id: 'rules'
                    }
                    },
                    {
                    quickReplyButton: {
                      displayText: "OWNER",
                      id: 'owner'
                    }
                    },
                    {
                    quickReplyButton: {
                      displayText: "DONATE",
                      id: 'donasi'
                    }
                    }
                ]
                let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        Rika.send5ButImg(m.chat, lang.allmen(prefix, salam, pushname, time, tanggal, ownername, sp), `${fouter}`, `${thumbnaili}`, btn, `${thumbnaili}`)
                        } else if (setbot.templateGif) {
                        Rika.send5ButGif(m.chat, lang.allmen(prefix, salam, pushname, time, tanggal, ownername, sp), `${fouter}`, `${video}`, btn, `${thumbnaili}`)
                        } else if (setbot.templateVid) {
                        Rika.send5ButVid(m.chat, lang.allmen(prefix, salam, pushname, time, tanggal, ownername, sp), `${fouter}`, `${video}`, btn, `${thumbnaili}`)
                        } else if (setbot.templateMsg) {
                        Rika.send5ButMsg(m.chat, lang.allmen(prefix, salam, pushname, time, tanggal, ownername, sp), `${fouter}`, btn)
                        } else if (setbot.templateLocation) {
                        Rika.send5ButLoc(m.chat, lang.allmen(prefix, salam, pushname, time, tanggal, ownername, sp) , `${fouter}`, `${thumbnaili}`, btn)*/
                let button = [
                    {buttonId: `rules`, buttonText: {displayText: 'RULES'}, type: 1},
                    {buttonId: `sc`, buttonText: {displayText: 'SC'}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}
                ]
                let buttonMessage = {
                    image: thumbnaili,
                    caption: lang.allmen(prefix, salam, pushname, time, tanggal, ownername, sp) ,
                    footer: `${fouter}`,
                    buttons: button,
                    headerType: 4
                }
                Rika.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(lang.ownerOnly())
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(lang.ownerOnly())
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(lang.ownerOnly())
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    Rika.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})