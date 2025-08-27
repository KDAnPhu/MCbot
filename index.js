const express = require('express');
const app = express();
const mineflayer = require('mineflayer');

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

function createBot() {
  const bot = mineflayer.createBot({
    host: 'adventurecraftsmp.aternos.me',
    port: 36410,
    username: 'Bot',
    version: '1.21'
  });

  bot.on('spawn', () => {
    console.log('✅ Bot đã vào server!');

    // Di chuyển ngẫu nhiên mỗi giây
    setInterval(() => {
      const directions = ['forward', 'back', 'left', 'right'];
      // Tắt hết các hướng trước
      directions.forEach(dir => bot.setControlState(dir, false));

      // Chọn ngẫu nhiên 1 hướng để đi
      const randomDir = directions[Math.floor(Math.random() * directions.length)];
      bot.setControlState(randomDir, true);
    }, 1000);
  });

  bot.on('error', err => {
    console.log('❌ Lỗi:', err.message);
  });

  bot.on('end', () => {
    console.log('🔌 Bot đã rời server.');
  });
}

createBot();
