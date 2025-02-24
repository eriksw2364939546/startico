require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); // Разрешаем запросы с фронтенда
app.use(express.json()); // Разрешаем JSON-запросы

const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`;
const CHAT_ID = process.env.TG_CHAT_ID;

// Маршрут для отправки сообщения в Telegram
app.post('/send-message', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post(TELEGRAM_API_URL, {
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
        });

        res.json(response.data);
    } catch (error) {
        console.error("Ошибка отправки:", error);
        res.status(500).json({ error: "Error sending message!" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

