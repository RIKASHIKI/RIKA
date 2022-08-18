let axios = require('axios')
let cheerio = require('cheerio')

async function Tiktokdl (Url) {
	return new Promise (async (resolve, reject) => {
		await axios.request({
			url: "https://ttdownloader.com/",
			method: "GET",
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
				"cookie": "PHPSESSID=9egem3bvpjkgcpddhjtk8cqk2m; popCookie=1"
			}
		}).then(respon => {
			const $ = cheerio.load(respon.data)
			const token = $('#token').attr('value')
			axios({
				url: "https://ttdownloader.com/req/",
				method: "POST",
				data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
				headers: {
					"accept": "*/*",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
					"cookie": "PHPSESSID=9egem3bvpjkgcpddhjtk8cqk2m; popCookie=1"
				}
			}).then(res => {
				const ch = cheerio.load(res.data)
                                 let nowm = ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href')
                                 let wm = ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href')
                                 
				const result = {
						nowatermark: nowm,
						watermark: wm
						}
				resolve(result)
                         
                         
			}).catch(reject)
		}).catch(reject)
	})
}

module.exports = { Tiktokdl }
