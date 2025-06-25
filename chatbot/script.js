function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if (message === "") return;

    const chat = document.getElementById("chat");

    // Adiciona mensagem do usuário
    const userMsg = document.createElement("div");
    userMsg.className = "user";
    userMsg.textContent = message;
    chat.appendChild(userMsg);

    // Gera resposta do bot
    const response = getBotResponse(message);

    const botMsg = document.createElement("div");
    botMsg.className = "bot";
    botMsg.textContent = response;
    chat.appendChild(botMsg);

    // Limpa o campo e rola para baixo
    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}

function getBotResponse(message) {
    const msg = message.toLowerCase();

    if (msg.includes("oi") || msg.includes("olá") || msg.includes("tudo bem?")) {
        return "Olá! Como posso ajudar?";
    } else if (msg.includes("como se chama?") || msg.includes("qual seu nome?")) {
        return "Meu nome é Chico. Sou um chatbot.";
    } else if (msg.includes("o que tem a oferecer?") || msg.includes("o que você faz?")) {
        return "Ajudo pessoas desprovidas de inteligência (LGBTs) a se curar :) ";
    } else if (msg.includes("como você faz isso?") || msg("como isso funciona?")) {
        return "Faço isso com base em estudos comprovados que a agressão é a melhor escolha. Porém, sou só um chatbot, então eu xingo.";
    } else if (msg.includes("")) {
        return "";
    } else if (msg.includes("")) {
        return "";
    } else if (msg.includes("")) {
        return "";
    } else if (msg.includes("")) {
        return "";
    } else if (msg.includes("")) {
        return "";
    } else if (msg.includes("")) {
        return "";
    } else if (msg.includes("")) {
        return "";
    } else if (msg.includes("")) {
        return "";
    } else if (msg.includes("")) {
        return "";
    } else if (msg.includes("")) {
        return "";
    } else if (msg.includes("")) {
        return "";
    } else if (msg.includes("")) {
        return "";
    } else if (msg.includes("tchau")) {
        return "Tchau! Volte sempre.";
    } else {
        return "Desculpe, não entendi. Pode reformular?";
    }
}