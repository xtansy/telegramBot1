const switchName = require('./SwitchName');

const allIn = [
    'ку',
    'Егор кто?',
    'Леша кто?',
    'Дима кто?',
    'Андрей кто?',
    'Света кто?',
    'Привет',
    'а',
    'a',
    'Егор',
    'хуй',
    'пока',
    'Пока',
];
const allOut = [
    'ку ку епта',
    'микрочел',
    'Раскол',
    'Солдат',
    'Создатель',
    'Девушка Раскола',
    'Здарова',
    'гавна на',
    'гавна на',
    'Хуй до гор, но всеравно микрочелллл',
    'на, жуй два',
    'Еще увидимся',
    'Еще увидимся'
]
const bindHears = (bot) => {
    bot.hears('Кто я?', (ctx) => ctx.reply(switchName.names(ctx.message.from.first_name)));
    for (let i = 0; i < allIn.length; i++) {
        bot.hears(allIn[i], (ctx) => ctx.reply(allOut[i]))
    }
}

module.exports.bindHears = bindHears;
