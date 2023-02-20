const toAnime = require('@arugaz/ai2d')
exports.run = {
   usage: ['toanime', 'jadianimek'],
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      try {
         let q = m.quoted ? m.quoted : m
         let mime = (q.msg || q).mimetype || ''
         if (!/image\/(jpe?g|png)/.test(mime)) return client.reply(m.chat, Func.texted('bold', `Berikan keterangan atau balas foto dengan perintah ${isPrefix + command}`), m)
         let old = new Date()
         let img = await q.download()
         if (!img) return client.reply(m.chat, Func.texted('bold', `Berikan keterangan atau balas foto dengan perintah ${isPrefix + command}`), m)
         let res = await toAnime(img, {
            crop: "SINGLE",
            proxy: {
               url: "http://183.221.242.103:9443",
               chinese: true,
               image: false
            }
         })
         client.sendFile(m.chat, res, 'image.jpg', `Nih banh messi`, m)


         const toAnime = require('@arugaz/ai2d')
         let dw = await qouted.download()
         let res = await toAnime(dw, {
            crop: "SINGLE",
            proxy: {
               url: "http://183.221.242.103:9443",
               chinese: true,
               image: false
            }})
            Rika.sendFile(m.chat,res,'image.jpg','iya bang messi',m)>