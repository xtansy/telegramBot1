const { Markup } = require('telegraf')

const commands = (bot) => {
    bot.command('menu', async (ctx) => {
        try {
            await ctx.replyWithHTML('<b>Меню</b>', Markup.inlineKeyboard(
                [
                    [Markup.button.callback('Фото по слову', 'btnScrapeImg')],
                ]
            ))
        } catch(err) {
            console.log(err);
        }
    })
    bot.action('btnScrapeImg', async (ctx) => {
        try {
            await ctx.reply("Введите слово:");
            console.log(ctx.update.callback_query.message);
        } catch(err) {
            console.log(err);
        }
    })
}
module.exports.commands = commands;
