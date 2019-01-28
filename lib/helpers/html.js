const cheerio = require('cheerio');
const htmlToText = require('html-to-text');

module.exports.convertHTMLToText = (body) => {
    return htmlToText.fromString(body.toString(), {
        ignoreHref: true,
        ignoreImage: true
    })
}

module.exports.getTitle = (htmlBody) => {
    let $ = cheerio.load(htmlBody)
    return $('title').text() || $('h1').text() || ""
}
