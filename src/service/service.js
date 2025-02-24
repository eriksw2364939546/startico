async function sendDataTelegramm(message) {
    try {
        const response = await fetch("https://startico.vercel.app//send-message", { 
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
