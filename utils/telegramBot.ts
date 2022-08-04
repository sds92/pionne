import { Telegraf } from 'telegraf';
import fs from 'fs';

declare global {
  var telegramBot: Telegraf;
}


(async () => {
  require('dotenv').config();
  const ACCESS_TOKEN = process.env.TG_ACCESS_TOKEN || '';
  const TG_PASS = process.env.TG_PASS || '';

  var bot: Telegraf;
  if (!global.telegramBot) {
    bot = new Telegraf(ACCESS_TOKEN);
    bot.start((ctx) => ctx.reply('Welcome'));
    bot.help((ctx) => ctx.reply('Send me a sticker'));
    bot.hears(`${TG_PASS}`, (ctx) => {
      fs.readFile('data/chatids.json', (err: Error | null, data: Buffer | string) => {
        if (err) throw err;
        fs.writeFile(
          'data/chatids.json',
          JSON.stringify(JSON.parse(data as string).push(ctx.chat.id)),
          (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          }
        );
      });
    });
    bot.launch();
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
    global.telegramBot = bot;
  }
})();
