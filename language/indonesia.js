exports.ownerOnly = () => {
    return `hanya owner`
}
exports.success = () => {
    return`✅ done ok desu~`
}
exports.wait = () => {
    return`⏳ tunggu...`
}
exports.adminOnly = () => {
    return`hanya admin`
}
exports.grupOnly = () => {
    return`hanya grup`
}
exports.notAdmin = () => {
    return`bot bukan admin`
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
    return`tambahkan tautan Grup!`
}
exports.choicemed = () => {
    return`pilih media yang ingin di unduh`
}
exports.nostic = (prefix, menu) => {
    return`kirim/balas gambar/stiker dengan keterangan ${prefix + menu} text1|text2`
}
exports.exampel = (prefix, menu) =>{
    return`contoh : ${prefix + menu} teks|teks`
}
exports.onbefo = () => {
    return`sudah aktif sebelumnya`
}
exports.offbefo = () => {
    return`Sudah Tidak Aktif Sebelumnya`
}
exports.adlin = () => {
    return`tambahkan tautan`
}
exports.chochat = () => {
    return`pilihan : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`
}
exports.wetext = () => {
    return`dimana teksnya ?`
}
exports.otoban = () => {
    return`「 OTOMATIS LARANGAN SISTEM 」\njangan telpon bot!\nhubungi owner untuk menghentikan larangan!`
}
exports.timenight = () =>{
    return`malam`
}
exports.timeevening = () =>{
    return`petang`
}
exports.timeafternoon = () =>{
    return`sore`
}
exports.timemidday = () =>{
    return`siang`
}
exports.timemorning = () =>{
    return`pagi`
}





exports.men = (pushname, salam, packname) => {
    return`hallo ${pushname}👋
    selamat ${salam}
    saya ${packname} `
}
exports.allmen = (prefix, salam, pushname, time, tanggal, ownername, sp) => {
   return`
   selamat ${salam}

   ╭──── 「 *INFO* 」
   │
   │${sp} PREFIX   : ${prefix}
   │${sp} PENGGUNA : ${pushname}
   │${sp} WAKTU    : ${time}
   │${sp} TANGGAL  : ${tanggal}
   │${sp} PEMILIK  : ${ownername}
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
    │${sp} ${prefix}ytdl [url]
    │${sp} ${prefix}ttdl [url]
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

    ╭──── 「 *CONVERT MENU* 」
    │
    │${sp} ${prefix}attp
    │${sp} ${prefix}ttp
    │${sp} ${prefix}toimage
    │${sp} ${prefix}removebg
    │${sp} ${prefix}sticker
    │${sp} ${prefix}stickerwm
    │${sp} ${prefix}emojimix
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
exports.sc = () => {
    return `*──────「 SOURCE CODE 」 ──────*

    Base    : https://github.com/DikaArdnt/Hisoka-Morou
    recode  : https://github.com/RIKASHIKI`
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


    # *SYARAT & KETENTUAN*
     — jangan spam ,menelpon atau eksploitasi bot 


    # *PRIVASI*
     — pemilik dapat melihat segala aktifitas pengguna
     — bot tidak menyimpan, membagikan , atau menyalahgunakan data pengguna
    
    
    # *PERTANYAAN YANG SERING DI AJUKAN*
    🗯️ bot tidak / lambat menjawab ?
     — disebabkan oleh sinyal, banned, masalah dari server dan alasan lainnya
    
    🗯️ dimana bisa mendapatkan script ini ?
     — cari di github atau bikin sendiri
    
    🗯️ bagaimana menambahkan bot ke grup?
     — info lebih lanjut tanya kepada pemilik
    
    🗯️ prefix nya apa ?
     — multi prefix
    
    🗯️ pemilik tidak merespon / menjawab?
     — pemilik hanya menjawab chat penting
    


    _dengan menggunakan bot ini maka pengguna setuju dengan syarat dan ketentuan yang berlaku._
    _jika melanggar maka akan dikenakan sanksi banned permanen_ ⚠
    `
}