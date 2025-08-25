const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'adventurecraftsmp.aternos.me',
    port: 36410,
    username: 'AFK_Bot',
    version: '1.21'
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


