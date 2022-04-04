const { Telegraf } = require('telegraf')
// bot's imports
const { helpText } = require('./bot/helpText');
const { bindHears } = require('./bot/Hears');
const { commands } = require('./bot/Commands');


const { photoAction, jokeAction } = require('./bot/Actions');

// services imports

const bot = new Telegraf('5168565514:AAFJ4jWVNLMfs4O1pRfWNATY0TpQ4YKrLKA')

bot.start((ctx) => ctx.reply(`Привет, ${ctx.message.from.first_name == 'Skid' ? 'Создатель' : ctx.message.from.first_name }`))
bot.help((ctx) => ctx.reply(helpText))


// bot.command('course', async (ctx) => {
//     await axios.get("https://www.cbr-xml-daily.ru/daily_utf8.xml")
//         .then((res) => {
//             console.log(res.data);
//         })
//         .catch((err) => console.log(err))
// });

bindHears(bot);

// commands(bot);


bot.command('/photo', (ctx) => {
    ctx.message.text.slice(6) && photoAction(ctx, ['/photo'])
})
bot.command('/joke', (ctx) => {
    jokeAction(ctx, ['/joke'])
})








bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))