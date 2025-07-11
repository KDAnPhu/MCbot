const mineflayer = require("mineflayer");

function createBot() {
  const bot = mineflayer.createBot({
    host: "tensrv.aternos.me", // ← sửa thành tên server của bạn
    port: 25565,
    username: "BotGiuServer",   // ← bot crack, không cần tài khoản
    version: "1.20.1"           // ← sửa theo version server
  });

  bot.on("spawn", () => {
    console.log("✅ Bot đã vào server!");
    bot.chat("Tôi giữ cho Aternos không tắt đây!");
  });

  bot.on("end", () => {
    console.log("⚠️ Bot bị disconnect. Đang vào lại sau 10s...");
    setTimeout(createBot, 10000);
  });

  bot.on("error", err => {
    console.log("❌ Lỗi: " + err.message);
  });
}

createBot();
