import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import 'utils/telegramBot';
import { Telegraf } from 'telegraf';

const sendform = (req: NextApiRequest, res: NextApiResponse) => {
  require('dotenv').config();

  const bot: Telegraf = global.telegramBot;
  fs.readFile('data/chatids.json', (err: Error | null, data: Buffer | string) => {
    if (err) throw err;
    let ids = JSON.parse(data as string);
    ids.forEach((id: string) =>
      bot.telegram.sendMessage(id, `${req.body.clientName} ${req.body.clientPhone} ${req.body.body}`)
    );
  });

  res.json('ok');
};

export default sendform;
