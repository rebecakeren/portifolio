document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector(".content h1");
    const messages = ["Olá, sou a Rebeca Keren.", "Sou Desenvolvedora Front-End.", "Sou Designer.", "Sou Técnica de Informática."];
    let messageIndex = 0;
    let charIndex = 0;

    function typeMessage() {
        const currentMessage = messages[messageIndex];
        if (charIndex < currentMessage.length) {
            h1.textContent += currentMessage.charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, 100); // Adiciona um caractere a cada 100 milissegundos
        } else {
            setTimeout(eraseMessage, 2000); // Aguarda 2 segundos antes de começar a apagar a mensagem
        }
    }

    function eraseMessage() {
        if (charIndex > 0) {
            const currentMessage = messages[messageIndex];
            h1.textContent = currentMessage.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseMessage, 50); // Remove um caractere a cada 50 milissegundos
        } else {
            messageIndex = (messageIndex + 1) % messages.length;
            setTimeout(typeMessage, 500); // Aguarda 0.5 segundos antes de começar a digitar a próxima mensagem
        }
    }

    // Inicia o efeito de digitação
    typeMessage();
    
});

