exports.ownerOnly = () => {
    return `only owner`
}
exports.success = () => {
    return`✅ done ok desu~`
}
exports.wait = () => {
    return`⏳ wait...`
}
exports.adminOnly = () => {
    return`only admin`
}
exports.grupOnly = () => {
    return`only grup`
}
exports.notAdmin = () => {
    return`bot not admin`
}
exports.endlimit = () => {
    return`limit anda telah habis`
}
exports.premiumOnly = () => {
    return'Premium only'
}
exports.bane = () => {
    return`kamu telah dibanned`
}
exports.antlig = () => {
    return`「 ANTI LINK 」\n\n kamu terdeteksi mengirim link grup, kamu akan di kick !`
}
exports.thisGc = () => {
    return`kamu di izinkan mengrim link grup ini`
}
exports.admiGc = () => {
    return`admin di izinkan mengirimkan link grup`
}
exports.ownGc = () =>{
    return`owner di izinkan mengirimkan link grup`
}
exports.maLin = () => {
    return`add Link Group!`
}
exports.choicett = () => {
    return`pilih media yang ingin di unduh`
}
exports.nostic = (prefix, menu) => {
    return`send/reply image/sticker with caption ${prefix + menu} text1|text2`
}






exports.men = (pushname, salam, packname) => {
    return`hello ${pushname} 
    👋good ${salam} , 
    im ${packname} `
}
exports.allmen = (prefix, salam, pushname, time, tanggal, ownername, sp) => {
   return`
   good ${salam}

   ╭──── 「 *INFO* 」
   │
   │${sp} PREFIX  : ${prefix}
   │${sp} USER    : ${pushname}
   │${sp} TIME    : ${time}
   │${sp} DATE : ${tanggal}
   │${sp} OWNER   : ${ownername}
   ╰─────────

    ╭──── 「 *OWNER MENU* 」
    │
    │${sp} ${prefix}react [emoji]
    │${sp} ${prefix}chat [option]
    │${sp} ${prefix}join [link]
    │${sp} ${prefix}leave
    │${sp} ${prefix}block @user
    │${sp} ${prefix}unblock @user
    │${sp} ${prefix}bcgroup [text]
    │${sp} ${prefix}bcall [text]
    │${sp} ${prefix}setppbot [image]
    │${sp} ${prefix}setwm
    │${sp} ${prefix}setmenu [option]
    ╰─────────

    ╭──── 「 *BOT MENU* 」
    │
    │${sp} ${prefix}ping
    │${sp} ${prefix}owner
    │${sp} ${prefix}menu
    │${sp} ${prefix}allmenu
    │${sp} ${prefix}rules
    │${sp} ${prefix}donasi
    │${sp} ${prefix}delete
    │${sp} ${prefix}infochat
    │${sp} ${prefix}quoted
    │${sp} ${prefix}listpc
    │${sp} ${prefix}listgc
    │${sp} ${prefix}listonline
    │${sp} ${prefix}speed
    │${sp} ${prefix}sc
    ╰─────────
    
    ╭──── 「 *GRUP MENU* 」
    │
    │${sp} ${prefix}linkgroup
    │${sp} ${prefix}ephemeral [option]
    │${sp} ${prefix}setppgc [image]
    │${sp} ${prefix}setnamegc [text]
    │${sp} ${prefix}setdescgc [text]
    │${sp} ${prefix}group [option]
    │${sp} ${prefix}editinfo [option]
    │${sp} ${prefix}add @user
    │${sp} ${prefix}kick @user
    │${sp} ${prefix}hidetag [text]
    │${sp} ${prefix}tagall [text]
    │${sp} ${prefix}totag [reply]
    │${sp} ${prefix}antilink [on/off]
    │${sp} ${prefix}mute [on/off]
    │${sp} ${prefix}promote @user
    │${sp} ${prefix}demote @user
    │${sp} ${prefix}vote [text]
    │${sp} ${prefix}devote
    │${sp} ${prefix}upvote
    │${sp} ${prefix}cekvote
    │${sp} ${prefix}hapusvote
    ╰─────────

    ╭──── 「 *WEB MENU* 」
    │
    │${sp} ${prefix}playstore
    │${sp} ${prefix}hp
    │${sp} ${prefix}jadwalbioskop
    │${sp} ${prefix}nowplayingbioskop
    │${sp} ${prefix}aminio
    │${sp} ${prefix}wattpad
    │${sp} ${prefix}webtoons
    │${sp} ${prefix}drakor
    ╰─────────
    
    ╭──── 「 *DOWNLOAD MENU* 」
    │
    │${sp} ${prefix}tiktoknowm [url]
    │${sp} ${prefix}tiktokwm [url]
    │${sp} ${prefix}tiktokmp3 [url]
    │${sp} ${prefix}instagram [url]
    │${sp} ${prefix}twitter [url]
    │${sp} ${prefix}twittermp3 [url]
    │${sp} ${prefix}facebook [url]
    │${sp} ${prefix}pinterestdl [url]
    │${sp} ${prefix}ytmp3 [url]
    │${sp} ${prefix}ytmp4 [url]
    │${sp} ${prefix}getmusic [query]
    │${sp} ${prefix}getvideo [query]
    │${sp} ${prefix}umma [url]
    │${sp} ${prefix}joox [query]
    │${sp} ${prefix}soundcloud [url]
    ╰─────────

    ╭──── 「 *SEARCH MENU* 」
    │
    │${sp} ${prefix}play [query]
    │${sp} ${prefix}yts [query]
    │${sp} ${prefix}google [query]
    │${sp} ${prefix}gimage [query]
    │${sp} ${prefix}pinterest [query]
    │${sp} ${prefix}wallpaper [query]
    │${sp} ${prefix}wikimedia [query]
    │${sp} ${prefix}ytsearch [query]
    │${sp} ${prefix}ringtone [query]
    │${sp} ${prefix}stalk [option] [query]
    ╰─────────
    
    ╭──── 「 *RANDOM MENU* 」
    │
    │${sp} ${prefix}coffe
    │${sp} ${prefix}quotesanime
    │${sp} ${prefix}motivasi
    │${sp} ${prefix}dilanquote
    │${sp} ${prefix}bucinquote
    │${sp} ${prefix}katasenja
    │${sp} ${prefix}puisi
    │${sp} ${prefix}couple
    ╰─────────

    ╭──── 「 *ANIME MENU* 」
    │
    │${sp} ${prefix}anime
    │${sp} ${prefix}waifu
    │${sp} ${prefix}husbu
    │${sp} ${prefix}neko
    │${sp} ${prefix}shinobu
    ╰─────────

    ╭──── 「 *NSFW MENU* 」
    │
    │${sp} ${prefix}waifus (nsfw)
    │${sp} ${prefix}nekos (nsfw)
    │${sp} ${prefix}trap (nsfw)
    │${sp} ${prefix}blowjob (nsfw)
    ╰─────────
    
    ╭──── 「 *TEXTPRO MENU* 」
    │
    │${sp} ${prefix}3dchristmas
    │${sp} ${prefix}3ddeepsea
    │${sp} ${prefix}americanflag
    │${sp} ${prefix}3dscifi
    │${sp} ${prefix}3drainbow
    │${sp} ${prefix}3dwaterpipe
    │${sp} ${prefix}halloweenskeleton
    │${sp} ${prefix}sketch
    │${sp} ${prefix}bluecircuit
    │${sp} ${prefix}space
    │${sp} ${prefix}metallic
    │${sp} ${prefix}fiction
    │${sp} ${prefix}greenhorror
    │${sp} ${prefix}transformer
    │${sp} ${prefix}berry
    │${sp} ${prefix}thunder
    │${sp} ${prefix}magma
    │${sp} ${prefix}3dcrackedstone
    │${sp} ${prefix}3dneonlight
    │${sp} ${prefix}impressiveglitch
    │${sp} ${prefix}naturalleaves
    │${sp} ${prefix}fireworksparkle
    │${sp} ${prefix}matrix
    │${sp} ${prefix}dropwater
    │${sp} ${prefix}harrypotter
    │${sp} ${prefix}foggywindow
    │${sp} ${prefix}neondevils
    │${sp} ${prefix}christmasholiday
    │${sp} ${prefix}3dgradient
    │${sp} ${prefix}blackpink
    │${sp} ${prefix}gluetext
    ╰─────────

    ╭──── 「 *PHOTO EXY MENU* 」
    │
    │${sp} ${prefix}shadow
    │${sp} ${prefix}romantic
    │${sp} ${prefix}smoke
    │${sp} ${prefix}burnpapper
    │${sp} ${prefix}naruto
    │${sp} ${prefix}lovemsg
    │${sp} ${prefix}grassmsg
    │${sp} ${prefix}lovetext
    │${sp} ${prefix}coffecup
    │${sp} ${prefix}butterfly
    │${sp} ${prefix}harrypotter
    │${sp} ${prefix}retrolol
    ╰─────────

    ╭──── 「 *EPHOTO MENU* 」
    │
    │${sp} ${prefix}ffcover
    │${sp} ${prefix}crossfire
    │${sp} ${prefix}galaxy
    │${sp} ${prefix}glass
    │${sp} ${prefix}neon
    │${sp} ${prefix}beach
    │${sp} ${prefix}blackpink
    │${sp} ${prefix}igcertificate
    │${sp} ${prefix}ytcertificate
    ╰─────────

    ╭──── 「 *FUN MENU* 」
    │
    │${sp} ${prefix}simih
    │${sp} ${prefix}halah
    │${sp} ${prefix}hilih
    │${sp} ${prefix}huluh
    │${sp} ${prefix}heleh
    │${sp} ${prefix}holoh
    │${sp} ${prefix}jadian
    │${sp} ${prefix}jodohku
    │${sp} ${prefix}delttt
    │${sp} ${prefix}tictactoe
    │${sp} ${prefix}family100
    │${sp} ${prefix}tebak [option]
    │${sp} ${prefix}math [mode]
    │${sp} ${prefix}suitpvp [@tag]
    ╰─────────

    ╭──── 「 *PRIMBON MENU* 」
    │
    │${sp} ${prefix}nomorhoki
    │${sp} ${prefix}artimimpi
    │${sp} ${prefix}artinama
    │${sp} ${prefix}ramaljodoh
    │${sp} ${prefix}ramaljodohbali
    │${sp} ${prefix}suamiistri
    │${sp} ${prefix}ramalcinta
    │${sp} ${prefix}cocoknama
    │${sp} ${prefix}pasangan
    │${sp} ${prefix}jadiannikah
    │${sp} ${prefix}sifatusaha
    │${sp} ${prefix}rezeki
    │${sp} ${prefix}pekerjaan
    │${sp} ${prefix}nasib
    │${sp} ${prefix}penyakit
    │${sp} ${prefix}tarot
    │${sp} ${prefix}fengshui
    │${sp} ${prefix}haribaik
    │${sp} ${prefix}harisangar
    │${sp} ${prefix}harisial
    │${sp} ${prefix}nagahari
    │${sp} ${prefix}arahrezeki
    │${sp} ${prefix}peruntungan
    │${sp} ${prefix}weton
    │${sp} ${prefix}karakter
    │${sp} ${prefix}keberuntungan
    │${sp} ${prefix}memancing
    │${sp} ${prefix}masasubur
    │${sp} ${prefix}zodiak
    │${sp} ${prefix}shio
    ╰─────────
    
    ╭──── 「 *CONVERT MENU* 」
    │
    │${sp} ${prefix}attp
    │${sp} ${prefix}ttp
    │${sp} ${prefix}toimage
    │${sp} ${prefix}removebg
    │${sp} ${prefix}sticker
    │${sp} ${prefix}stickerwm
    │${sp} ${prefix}emojimix
    │${sp} ${prefix}emojimix2
    │${sp} ${prefix}tovideo
    │${sp} ${prefix}togif
    │${sp} ${prefix}tourl
    │${sp} ${prefix}tovn
    │${sp} ${prefix}tomp3
    │${sp} ${prefix}toaudio
    │${sp} ${prefix}ebinary
    │${sp} ${prefix}dbinary
    │${sp} ${prefix}styletext
    │${sp} ${prefix}smeme
    ╰─────────
    
    ╭──── 「 *DATABASE MENU* 」
    │
    │${sp} ${prefix}setcmd
    │${sp} ${prefix}listcmd
    │${sp} ${prefix}delcmd
    │${sp} ${prefix}lockcmd
    │${sp} ${prefix}addmsg
    │${sp} ${prefix}listmsg
    │${sp} ${prefix}getmsg
    │${sp} ${prefix}delmsg
    ╰─────────

    ╭──── 「 *ANONYMOUS MENU* 」
    │
    │${sp} ${prefix}anonymous
    │${sp} ${prefix}start
    │${sp} ${prefix}next
    │${sp} ${prefix}keluar
    ╰─────────

    ╭──── 「 *ISLAM MENU* 」
    │
    │${sp} ${prefix}iqra
    │${sp} ${prefix}hadist
    │${sp} ${prefix}alquran
    │${sp} ${prefix}juzamma
    │${sp} ${prefix}tafsirsurah
    ╰─────────
    
    ╭──── 「 *VOICE CHARGER* 」
    │
    │${sp} ${prefix}bass
    │${sp} ${prefix}blown
    │${sp} ${prefix}deep
    │${sp} ${prefix}earrape
    │${sp} ${prefix}fast
    │${sp} ${prefix}fat
    │${sp} ${prefix}nightcore
    │${sp} ${prefix}reverse
    │${sp} ${prefix}robot
    │${sp} ${prefix}slow
    │${sp} ${prefix}tupai
    ╰─────────

    ╭────「 *THANK TO* 」
    │ 
    │${sp} My God
    │${sp} My Parents
    │${sp} Fatih A.
    │${sp} Ferdi
    │${sp} DikaArdnt
    │${sp} Mhankbarbar
    │${sp} Nurutomo
    │${sp} Rashid
    │${sp} ZeeoneOfc
    │${sp} Penyedia Module
    │${sp} Faiz bastomi
    │${sp} Bremana
    │${sp} Eksa
    │${sp} Rikashiki
    │${sp} all support
    ╰─────────
    `
}
exports.sc = (github) => {
    return `*──────「 SOURCE CODE 」 ──────*

    Base    : https://github.com/DikaArdnt/Hisoka-Morou
    recode  : ${github}`
}
exports.dona = (pushname, ownernumber) => {
    return `*──────「 DONATE 」 ──────*
    hai ${pushname}
    Kalian bisa mendukung agar bot ini tetap aktif dengan cara donasi

    Berapapun donasi kalian akan sangat berarti 👍


dana  : 087820032793
pulsa : 087820032793 [XL]

contact person:
wa.me/${ownernumber}`
}
exports.rules = () => {
    return`*────── 「 RULES 」 ──────*


    # *TERMS AND CONDITIONS*
     — Don't spam ,call or exsploitation bot 


    # *PRIVACY*
     — pemilik dapat melihat segala aktifitas pengguna
     — bot tidak menyimpan, membagikan , atau menyalahgunakan data pengguna
    
    
    # *FAQ*
    🗯️ Bot not / slow respon ?
     — influenced signal, banned, peoblem on server and another reason
    
    🗯️ where to get this Script bot ?
     — Script private and not for sale
    
    🗯️ how add bot to group?
     — info lebih lanjut tanya kepada pemilik
    
    🗯️ what the Prefix ?
     — multi prefix
    
    🗯️ pemilik tidak merespon / menjawab?
     — pemilik hanya menjawab chat penting
    


    _dengan menggunakan bot ini maka pengguna setuju dengan syarat dan ketentuan yang berlaku._
    _jika melanggar maka akan dikenakan sanksi banned permanen_ ⚠
    `
}