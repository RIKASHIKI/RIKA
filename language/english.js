exports.ownerOnly = () => {
    return `owner only`
}
exports.success = () => {
    return`✅ done ok desu~`
}
exports.wait = () => {
    return`⏳ wait...`
}
exports.adminOnly = () => {
    return`admin only`
}
exports.grupOnly = () => {
    return`group only`
}
exports.notAdmin = () => {
    return`bot not admin`
}
exports.bane = () => {
    return`you have been banned`
}
exports.antilig = () => {
    return`「 ANTI LINK 」\n\n You have been detected sending a group link, you will be kicked !`
}
exports.thisGc = () => {
    return`you are allowed to send this group link`
}
exports.admiGc = () => {
    return`admin allowed to send group link`
}
exports.ownGc = () =>{
    return`owner allowed to send group link`
}
exports.maLin = () => {
    return`Enter Link Group!`
}
exports.choicemed = () => {
    return`select the media you want to download`
}
exports.nostic = (prefix, menu) => {
    return`Send/reply image/sticker with caption ${prefix + menu} text1|text2`
}
exports.exampel = (prefix, menu) =>{
    return`ex : ${prefix + menu} text|text`
}
exports.onbefo = () => {
    return`been active before`
}
exports.offbefo = () => {
    return`been unactive before`
}
exports.adlin = () => {
    return`add link`
}
exports.chochat = () => {
    return`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`
}
exports.wetext = () => {
    return`where the text ?`
}
exports.memlimit = (limitMember) =>{
    return`minimum members must be more than ${limitMember} people`
}
exports.linvalid = () =>{
    return`Link Invalid!`
}
exports.otoban = () => {
    return`「 AUTO BLOCK SISTEM 」\nDon't call bot!\nchat owner for unblock!`
}
exports.afkbefore = (reason) =>{
    return`
    don't tag him!
    he's is AFK ${reason ? 'with reason ' + reason : 'no reason'}
    its been`
}
exports.afkafter = (user) =>{
    return`you come back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
    been`
}
exports.timenight = () =>{
    return`night`
}
exports.timeevening = () =>{
    return`evening`
}
exports.timeafternoon = () =>{
    return`afternoon`
}
exports.timemidday = () =>{
    return`midday`
}
exports.timemorning = () =>{
    return`morning`
}
exports.sc = () => {
    return `*──────「 SOURCE CODE 」 ──────*

    Base    : https://github.com/DikaArdnt/Hisoka-Morou
    recode  : https://github.com/RIKASHIKI`
} 
exports.dona = (pushname, ownernumber) => {
    return `*──────「 DONATION 」──────*
hi ${pushname}
support bot to stay active by donating
Any amount of your donation will mean a lot 👍


dana : 087820032793
pulsa : 087820032793 [XL]


first contact:
wa.me/${ownernumber}`
}
exports.rules = () => {
    return`*──────「 RULES 」 ──────*


# *TERMS AND CONDITIONS*
 — Don't spam, call or exploit bots


# *PRIVACY*
 — owner can see all user activity
 — bots don't save, share or abuse user data
    
    
# *FREQUENTLY ASKED QUESTIONS*
🗯️ Bot not / slow to respond ?
 — affected by signal, banned, server problems and some random things

🗯️ frequently error at command
 — affected api dead / problem code

🗯️ Where can I get this bot script?
 — search in github or you can make it
    
🗯️ how to add bot to group?
 — type #join linkgrup | free for now
    
🗯️ What's the prefix?
 — multi prefix
    
🗯️ owner not responding / answering?
 — the owner only answers important chats
    


_by using this bot, the user agrees to the terms and conditions that apply._
_if it violates it will be subject to permanent ban sanctions_ ⚠`
}
exports.men = (pushname, salam, packname, sp, prefix) => {
    return`
    halo ${pushname}👋
    good ${salam}
    i'am ${packname}

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
    │${sp} ${prefix}textpromenu
    │${sp} ${prefix}photoexymenu
    │${sp} ${prefix}ephotomenu
    │${sp} ${prefix}funmenu
    │${sp} ${prefix}convertmenu
    │${sp} ${prefix}databasemenu
    │${sp} ${prefix}anonymousmenu
    │${sp} ${prefix}islammenu
    │${sp} ${prefix}voicemenu
    │${sp} ${prefix}thankto
    ╰─────────`
}
exports.allmen = (prefix, salam, pushname, time, tanggal, ownername, sp) => {
   return`
   good ${salam} ${pushname}👋

   ╭──── 「 *INFO* 」
   │
   │${sp} PREFIX    : ${prefix}
   │${sp} TIME      : ${time}
   │${sp} DATE      : ${tanggal}
   │${sp} OWNER     : ${ownername}
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
   │${sp} ${prefix}setppbotfull [image]
   │${sp} ${prefix}setwm
   │${sp} ${prefix}setmenu [option]
   │${sp} ${prefix}jointes [test]
   ╰─────────

   ╭──── 「 *BOT MENU* 」
   │
   │${sp} ${prefix}ping
   │${sp} ${prefix}owner
   │${sp} ${prefix}join [link]
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
   │${sp} ${prefix}setppgcfull [image]
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
   │${sp} ${prefix}gitrepo [text|text]
   │${sp} ${prefix}gitclone [url]
   │${sp} ${prefix}tiktoknowm [url]
   │${sp} ${prefix}tiktokwm [url]
   │${sp} ${prefix}tiktokmp3 [url]
   │${sp} ${prefix}tiktoknowm1 [url]
   │${sp} ${prefix}tiktokwm1 [url]
   │${sp} ${prefix}tiktokaudio1 [url]
   │${sp} ${prefix}instagram [url]
   │${sp} ${prefix}twitter [url]
   │${sp} ${prefix}twittermp3 [url]
   │${sp} ${prefix}facebook [url]
   │${sp} ${prefix}pinterestdl [url]
   │${sp} ${prefix}ytmp3 [url]
   │${sp} ${prefix}ytmp4 [url]
   │${sp} ${prefix}joox [query]
   │${sp} ${prefix}soundcloud [url]
   │${sp} ${prefix}mediafire [url]
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
   ╰─────────`
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
   │${sp} ${prefix}setppbotfull [image]
   │${sp} ${prefix}setwm
   │${sp} ${prefix}setmenu [option]
   ╰─────────`
}
exports.botmen = (sp, prefix) =>{
    return`
   ╭──── 「 *BOT MENU* 」
   │
   │${sp} ${prefix}ping
   │${sp} ${prefix}owner
   │${sp} ${prefix}join [link]
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
   ╰─────────`
}
exports.grupmen = (sp, prefix) =>{
    return`
   ╭──── 「 *GRUP MENU* 」
   │
   │${sp} ${prefix}linkgroup
   │${sp} ${prefix}ephemeral [option]
   │${sp} ${prefix}setppgc [image]
   │${sp} ${prefix}setppgcfull [image]
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
   │${sp} ${prefix}tiktoknowm1 [url]
   │${sp} ${prefix}tiktokwm1 [url]
   │${sp} ${prefix}tiktokaudio1 [url]
   │${sp} ${prefix}instagram [url]
   │${sp} ${prefix}twitter [url]
   │${sp} ${prefix}twittermp3 [url]
   │${sp} ${prefix}facebook [url]
   │${sp} ${prefix}pinterestdl [url]
   │${sp} ${prefix}ytmp3 [url]
   │${sp} ${prefix}ytmp4 [url]
   │${sp} ${prefix}joox [query]
   │${sp} ${prefix}soundcloud [url]
   │${sp} ${prefix}mediafire [url]
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
   │${sp} ${prefix}waifus (nsfw)
   │${sp} ${prefix}nekos (nsfw)
   │${sp} ${prefix}trap (nsfw)
   │${sp} ${prefix}blowjob (nsfw)
   ╰─────────`
}
exports.textpromen = (sp, prefix) =>{
    return`
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