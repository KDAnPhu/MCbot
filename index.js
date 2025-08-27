const express = require('express');
const app = express();

// Lấy port từ môi trường (Render cung cấp), nếu không có thì mặc định 3000
const PORT = process.env.PORT || 3000;

// Tạo route chính
app.get('/', (req, res) => {
  res.send('Bot is running! ✅');
});

// Bắt đầu lắng nghe port
app.listen(PORT, () => {
  console.log(`HTTP server listening on port ${PORT}`);
});

const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'adventurecraftsmp.aternos.me',
    port: 36410,
    username: 'Bot',
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

  // ❌ Xoá hoặc comment phần auto reconnect đi
  // bot.on('end', () => {
  //   console.log('🔁 Bot bị disconnect, thử lại sau 10s...');
  //   setTimeout(createBot, 10000);
  // });
}

createBot();


