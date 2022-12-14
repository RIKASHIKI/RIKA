exports.ownerOnly = () => {
    return `hanya pemilik`
}
exports.success = () => {
    return`✅ done ok desu~`
}
exports.nowor = () => {
    return`gagal`
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
exports.mebot = () => {
    return`Pesan tersebut bukan dikirim oleh bot!`
}
exports.meus = () => {
    return`Pesan tersebut bukan dikirim oleh user!`
}
exports.bane = () => {
    return`anda telah dibanned`
}
exports.antilig = () => {
    return`──────「 ANTI LINK 」──────\n\n anda terdeteksi mengirim link grup, anda akan di kick !`
}
exports.broadcas = (text) => {
    return`──────「 SIARAN 」──────\n\n ${text}\n\n dari RIKA`
}
exports.ret = (menu, text) => {
    return`「 MESSAGE 」\n\n DARI @${m.sender.split('@')[0]}\n jenis ${menu}\n\n${text}`
}
exports.thisGc = () => {
    return`anda di izinkan mengrim link grup ini`
}
exports.admiGc = () => {
    return`admin di izinkan mengirimkan link grup`
}
exports.ownGc = () =>{
    return`pemilik di izinkan mengirimkan link grup`
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
exports.repor = (prefix, menu) =>{
    return`contoh : ${prefix + menu} ada yang error bang`
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
exports.memlimit = (limitMember) =>{
    return`paling sedikit member harus lebih dari ${limitMember} orang`
}
exports.linvalid = () =>{
    return`tautan tidak sah!`
}
exports.otoban = () => {
    return`──────「 AUTO BLOCK SISTEM 」──────\njangan telpon bot!\nhubungi owner untuk menghentikan block!`
}
exports.afkbefore = (reason) =>{
    return`jangan panggil dia!
    dia sedang afk ${reason ? 'dengan alasan' + reason : 'tanpa alasan'}
    selama`
}
exports.afkafter = (user) =>{
    return`kamu kembali online dari afk${user.afkReason ? ' setelah ' + user.afkReason : ''}
    Selama`
}
exports.timenight = () =>{
    return`selamat malam`
}
exports.timeevening = () =>{
    return`selamat petang`
}
exports.timeafternoon = () =>{
    return`selamat sore`
}
exports.timemidday = () =>{
    return` selamat siang`
}
exports.timemorning = () =>{
    return`selamat pagi`
}
exports.sc = () => {
    return `*──────「 SOURCE CODE 」 ──────*

    Base    : https://github.com/DikaArdnt/Hisoka-Morou
    recode  : https://github.com/RIKASHIKI`
}
exports.dona = (pushname, ownernumber) => {
    return `*──────「 DONATE 」 ──────*
hai ${pushname}
dukung bot ini tetap aktif dengan cara donasi
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
  
🗯️ sering error pada command
 — disebabkan api mati / kesalahan code

🗯️ dimana bisa mendapatkan script ini ?
 — cari di github atau bikin sendiri
    
🗯️ bagaimana menambahkan bot ke grup?
 — aku tidak tau
    
🗯️ prefix nya apa ?
 — multi prefix
    
🗯️ pemilik tidak merespon / menjawab?
 — pemilik hanya menjawab chat penting
    


_dengan menggunakan bot ini maka pengguna setuju dengan syarat dan ketentuan yang berlaku._
_jika melanggar maka akan dikenakan sanksi banned permanen_ ⚠`
}
exports.men = (pushname, salam, packname, sp, prefix) => {
    return`
    hallo ${pushname}👋
    ${salam}
    saya ${packname}
    _baca rules sebelum menggunakan bot ini !_

    ╭──── 「 *MENU* 」
    │
    │${sp} ${prefix}ownermenu
    │${sp} ${prefix}botmenu
    │${sp} ${prefix}grupmenu
    │${sp} ${prefix}webmenu
    │${sp} ${prefix}downloadmenu
    │${sp} ${prefix}searchmenu
    │${sp} ${prefix}randommenu
    │${sp} ${prefix}animemenu
    │${sp} ${prefix}nsfwmenu
    │${sp} ${prefix}photoexymenu
    │${sp} ${prefix}ephotomenu
    │${sp} ${prefix}funmenu
    │${sp} ${prefix}convertmenu
    │${sp} ${prefix}databasemenu
    │${sp} ${prefix}anonymousmenu
    │${sp} ${prefix}islammenu
    │${sp} ${prefix}voicemenu
    |${sp} ${prefix}thankto
    ╰─────────`
}
exports.allmen = (prefix, salam, pushname, time, tanggal, ownername, sp) => {
   return`
   ${salam}  ${pushname}👋

   ╭──── 「 *INFO* 」
   │
   │${sp} PREFIX   : ${prefix}
   │${sp} WAKTU    : ${time}
   │${sp} TANGGAL  : ${tanggal}
   │${sp} PEMILIK  : ${ownername}
   ╰─────────

   ╭──── 「 *OWNER MENU* 」
   │
   │${sp} ${prefix}react [emoji]
   │${sp} ${prefix}chat [option]
   │${sp} ${prefix}leave
   │${sp} ${prefix}block @user
   │${sp} ${prefix}unblock @user
   │${sp} ${prefix}bcgroup [text]
   │${sp} ${prefix}bcall [text]
   │${sp} ${prefix}setppbot [image]
   │${sp} ${prefix}setppbot full [image]
   │${sp} ${prefix}setwm
   │${sp} ${prefix}setmenu [option]
   │${sp} ${prefix}join [link]
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
   │${sp} ${prefix}report
   │${sp} ${prefix}request
   ╰─────────
    
   ╭──── 「 *GRUP MENU* 」
   │
   │${sp} ${prefix}linkgroup
   │${sp} ${prefix}ephemeral [option]
   │${sp} ${prefix}setppgc [image]
   │${sp} ${prefix}setppgc full [image]
   │${sp} ${prefix}setnamegc [text]
   │${sp} ${prefix}setdescgc [text]
   │${sp} ${prefix}group [option]
   │${sp} ${prefix}editinfo [option]
   │${sp} ${prefix}add @user [tidak tersedia untuk sekarang]
   │${sp} ${prefix}kick @user [tidak tersedia unutk sekarang]
   │${sp} ${prefix}hidetag [text]
   │${sp} ${prefix}tagall [text]
   │${sp} ${prefix}hapus [reply]
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
   │${sp} ${prefix}gitrepo [text|text]
   │${sp} ${prefix}gitclone [url]
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
   │${sp} ${prefix}joox [query]
   │${sp} ${prefix}soundcloud [url]
   │${sp} ${prefix}mediafire 1/2 [url]
   │${sp} ${prefix}zippyshare [url]
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
   │${sp} ${prefix}waifu
   │${sp} ${prefix}awoo
   │${sp} ${prefix}shinobu
   ╰─────────

   ╭──── 「 *NSFW MENU* 」
   │
   │${sp} ${prefix}ahegao
   │${sp} ${prefix}ass
   │${sp} ${prefix}bdsm
   │${sp} ${prefix}blowjob
   │${sp} ${prefix}cuckold
   │${sp} ${prefix}cum
   │${sp} ${prefix}ero
   │${sp} ${prefix}femdom
   │${sp} ${prefix}foot
   │${sp} ${prefix}gangbang
   │${sp} ${prefix}glasses
   │${sp} ${prefix}hentai
   │${sp} ${prefix}hentaigif
   │${sp} ${prefix}jahy
   │${sp} ${prefix}maid
   │${sp} ${prefix}manga
   │${sp} ${prefix}masturbation
   │${sp} ${prefix}mobilewall
   │${sp} ${prefix}netorare
   │${sp} ${prefix}nsfwneko
   │${sp} ${prefix}sfwneko
   │${sp} ${prefix}orgy
   │${sp} ${prefix}panties
   │${sp} ${prefix}pussy
   │${sp} ${prefix}tentacles
   │${sp} ${prefix}thighs
   │${sp} ${prefix}yuri
   │${sp} ${prefix}zettairyouiki
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
   │${sp} ${prefix}cecan
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
   │${sp} ${prefix}smeme [text|text]
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
    
   ╭──── 「 *VOICE MENU* 」
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
   │${sp} tobz
   │${sp} Faiz bastomi
   │${sp} Bremana
   │${sp} Eksa
   │${sp} Rikashiki
   │${sp} Penyedia Module
   │${sp} all support
   ╰─────────
    `
}
exports.ownermen = (sp, prefix) =>{
    return`
   ╭──── 「 *OWNER MENU* 」
   │
   │${sp} ${prefix}react [emoji]
   │${sp} ${prefix}chat [option]
   │${sp} ${prefix}leave
   │${sp} ${prefix}block @user
   │${sp} ${prefix}unblock @user
   │${sp} ${prefix}bcgroup [text]
   │${sp} ${prefix}bcall [text]
   │${sp} ${prefix}setppbot [image]
   │${sp} ${prefix}setppbot full [image]
   │${sp} ${prefix}setwm
   │${sp} ${prefix}setmenu [option]
   │${sp} ${prefix}join [link]
   ╰─────────`
}
exports.botmen = (sp, prefix) =>{
    return`
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
   │${sp} ${prefix}report
   │${sp} ${prefix}request
   ╰─────────`
}
exports.grupmen = (sp, prefix) =>{
    return`
   ╭──── 「 *GRUP MENU* 」
   │
   │${sp} ${prefix}linkgroup
   │${sp} ${prefix}ephemeral [option]
   │${sp} ${prefix}setppgc [image]
   │${sp} ${prefix}setppgc full [image]
   │${sp} ${prefix}setnamegc [text]
   │${sp} ${prefix}setdescgc [text]
   │${sp} ${prefix}group [option]
   │${sp} ${prefix}editinfo [option]
   │${sp} ${prefix}add @user tidak tersedia
   │${sp} ${prefix}kick @user tidak tersedia
   │${sp} ${prefix}hidetag [text]
   │${sp} ${prefix}tagall [text]
   │${sp} ${prefix}hapus [reply]
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
   ╰─────────`
}
exports.webmen = (sp, prefix) =>{
    return`
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
   ╰─────────`
}
exports.downloadmen = (sp, prefix) =>{
    return`
   ╭──── 「 *DOWNLOAD MENU* 」
   │
   │${sp} ${prefix}ytdl [url]
   │${sp} ${prefix}ttdl [url]
   │${sp} ${prefix}gitrepo [text|text]
   │${sp} ${prefix}gitclone [url]
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
   │${sp} ${prefix}joox [query]
   │${sp} ${prefix}soundcloud [url]
   │${sp} ${prefix}mediafire 1/2 [url]
   │${sp} ${prefix}zippyshare [url]
   ╰─────────`
}
exports.searchmen = (sp, prefix) =>{
    return`
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
   ╰─────────`
}
exports.randommen = (sp, prefix) =>{
    return`
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
   ╰─────────`
}
exports.animemen = (sp, prefix) =>{
    return`
   ╭──── 「 *ANIME MENU* 」
   │
   │${sp} ${prefix}waifu
   │${sp} ${prefix}awoo
   │${sp} ${prefix}shinobu
   ╰─────────`
}
exports.nsfwmen = (sp, prefix) =>{
    return`
   ╭──── 「 *NSFW MENU* 」
   │
   │${sp} ${prefix}ahegao
   │${sp} ${prefix}ass
   │${sp} ${prefix}bdsm
   │${sp} ${prefix}blowjob
   │${sp} ${prefix}cuckold
   │${sp} ${prefix}cum
   │${sp} ${prefix}ero
   │${sp} ${prefix}femdom
   │${sp} ${prefix}foot
   │${sp} ${prefix}gangbang
   │${sp} ${prefix}glasses
   │${sp} ${prefix}hentai
   │${sp} ${prefix}hentaigif
   │${sp} ${prefix}jahy
   │${sp} ${prefix}maid
   │${sp} ${prefix}manga
   │${sp} ${prefix}masturbation
   │${sp} ${prefix}mobilewall
   │${sp} ${prefix}netorare
   │${sp} ${prefix}nsfwneko
   │${sp} ${prefix}sfwneko
   │${sp} ${prefix}orgy
   │${sp} ${prefix}panties
   │${sp} ${prefix}pussy
   │${sp} ${prefix}tentacles
   │${sp} ${prefix}thighs
   │${sp} ${prefix}yuri
   │${sp} ${prefix}zettairyouiki
   ╰─────────`
}
exports.photoexymen = (sp, prefix) =>{
    return`
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
   ╰─────────`
}
exports.ephotomen = (sp, prefix) =>{
    return`
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
   ╰─────────`
}
exports.funmen = (sp, prefix) =>{
    return`
   ╭──── 「 *FUN MENU* 」
   │
   │${sp} ${prefix}simih
   │${sp} ${prefix}cecan
   │${sp} ${prefix}delttt
   │${sp} ${prefix}tictactoe
   │${sp} ${prefix}family100
   │${sp} ${prefix}tebak [option]
   │${sp} ${prefix}math [mode]
   │${sp} ${prefix}suitpvp [@tag]
   ╰─────────`
}
exports.convertmen = (sp, prefix) =>{
    return`
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
   ╰─────────`
}
exports.databasemen = (sp, prefix) =>{
    return`
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
   ╰─────────`
}
exports.anonymousmen = (sp, prefix) =>{
    return`
   ╭──── 「 *ANONYMOUS MENU* 」
   │
   │${sp} ${prefix}anonymous
   │${sp} ${prefix}start
   │${sp} ${prefix}next
   │${sp} ${prefix}keluar
   ╰─────────`
}
exports.islammen = (sp, prefix) =>{
    return`
   ╭──── 「 *ISLAM MENU* 」
   │
   │${sp} ${prefix}iqra
   │${sp} ${prefix}hadist
   │${sp} ${prefix}alquran
   │${sp} ${prefix}juzamma
   │${sp} ${prefix}tafsirsurah
   ╰─────────`
}
exports.voicemen = (sp, prefix) =>{
    return`
   ╭──── 「 *VOICE MENU* 」
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
   ╰─────────`
}
exports.thankto = (sp) =>{
    return`
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
   │${sp} tobz
   │${sp} Faiz bastomi
   │${sp} Bremana
   │${sp} Eksa
   │${sp} Rikashiki
   │${sp} Penyedia Module
   │${sp} all support
   ╰─────────`
}