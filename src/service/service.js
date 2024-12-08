const _CHAT_ID = "-4510833870"
const _TG_TOKEN_BOT = "7250435985:AAGRN7tI4NCsFE0iCK9ciEwj-T7886PJV-c"
const _TG_URL = `https://api.telegram.org/bot${_TG_TOKEN_BOT}/sendMessage`



async function sendDataTelegramm(message){
	try {
		return await fetch(_TG_URL,{
			method: "POST",
			headers:{"Content-Type" : "application/json"},
			body: JSON.stringify({
				chat_id: _CHAT_ID,
				text: message,
				parse_mode: "html"
			}),
		})
	} catch (error) {
		return error
	}
}


export{sendDataTelegramm}