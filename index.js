const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'svVanillaSMP.aternos.me',
    port: 57635,
    username: 'AFK_Bot_' + Math.floor(Math.random() * 1000),
    version: '1.21.1'
  });

  bot.on('spawn', () => {
    console.log('✅ Bot đã vào server!');
    
    // Nếu cần đăng nhập:
    // bot.chat('/login your_password');

    // Chống AFK kick
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('error', err => {
    console.log('❌ Lỗi:', err.message);
  });

  bot.on('end', () => {
    console.log('🔁 Bot bị disconnect, thử lại sau 10s...');
    setTimeout(createBot, 10000);
  });
}

createBot();
