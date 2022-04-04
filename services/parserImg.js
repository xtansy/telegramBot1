const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function scrape(word) {

    const browser = await puppeteer.launch()
        .then(() => {
            console.log('opened')
        })

    const page = await browser.newPage();
    await page.goto(`https://yandex.ru/images/search?text=${word}`)

    const content = await page.content();

    const $ = cheerio.load(content); // загрузка html в cheerio

    const result = [];

    $('.serp-item__thumb').slice(0, 1).each((idx, elem) => {
        const item = $(elem).attr("src");
        result.push(item);
    });

    browser.close();

    return result[0].slice(2);
}
module.exports.scrape = scrape;
