async function sendDataTelegramm(message) {
    try {
        const response = await fetch("http://localhost:3000/send-message", { // меняй URL на свой сервер
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        });

        return await response.json();
    } catch (error) {
        console.error("Ошибка при отправке сообщения в Telegram:", error);
        return error;
    }
}

export { sendDataTelegramm }
