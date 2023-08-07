const toAnime = require('@arugaz/ai2d');

// Fungsi untuk mengubah gambar menjadi anime
async function toAnimeImage(m, isPrefix, command) {
  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!/image\/(jpe?g|png)/.test(mime)) {
      return `Berikan keterangan atau balas foto dengan perintah ${isPrefix}${command}`;
    }
    let img = await q.download();
    if (!img) {
      return `Berikan keterangan atau balas foto dengan perintah ${isPrefix}${command}`;
    }
    let res = await toAnime(img, {
      crop: "SINGLE",
      proxy: {
        url: "http://183.221.242.103:9443",
        chinese: true,
        image: false,
      },
    });

    return {
      fileData: res,
      fileName: 'image.jpg',
      caption: 'Nih banh messi',
    };
  } catch (error) {
    console.error(error);
    return 'Terjadi kesalahan saat mengubah gambar menjadi anime.';
  }
}

module.exports = {
  toAnimeImage,
};
