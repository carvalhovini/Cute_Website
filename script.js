document.addEventListener("DOMContentLoaded", function() {
    // Função para embaralhar um array
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // Contagem regressiva do tempo juntos
    var startDate = new Date("2022-09-18"); // Coloque a data que começaram a namorar aqui
    var countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        var currentDate = new Date();
        var timeDifference = currentDate.getTime() - startDate.getTime();

        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.textContent = daysDifference + " dias, " + hoursDifference + " horas, " + minutesDifference + " minutos e " + secondsDifference + " segundos juntos!";
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Carregar fotos e motivos
    var photoGridElement = document.getElementById("photo-grid");
    var photoIndexes = Array.from({ length: 25 }, (_, i) => i + 1); // Cria um array de índices de 1 a 25
    photoIndexes = shuffle(photoIndexes); // Embaralha os índices

    var messages = [
        "Porque você tem um coração gentil e amoroso.",
        "Porque seu sorriso ilumina meu dia.",
        "Porque você me faz rir mesmo nos momentos difíceis.",
        "Porque você é minha melhor amiga e confidente.",
        "Porque você me inspira a ser uma pessoa melhor.",
        "Porque você sempre acredita em mim, mesmo quando eu duvido de mim mesmo.",
        "Porque você é linda por dentro e por fora.",
        "Porque você me apoia em todas as minhas decisões.",
        "Porque você é a minha pessoa favorita para compartilhar aventuras.",
        "Porque seu abraço é o meu lugar favorito na Terra.",
        "Porque você me faz sentir amado todos os dias.",
        "Porque você é incrivelmente talentosa e criativa.",
        "Porque você é minha fonte de força e inspiração.",
        "Porque sua presença torna qualquer dia ordinário extraordinário.",
        "Porque você é a razão do meu sorriso todos os dias.",
        "Porque você me ensina o verdadeiro significado do amor todos os dias.",
        "Porque você é minha rocha em tempos de tempestade.",
        "Porque você faz com que cada momento seja mágico.",
        "Porque você é minha parceira de vida e aventuras.",
        "Porque você me aceita exatamente como eu sou.",
        "Porque seu amor é o maior presente que já recebi.",
        "Porque você é minha luz nos dias mais sombrios.",
        "Porque você me faz acreditar em contos de fadas e finais felizes.",
        "Porque você é simplesmente você - e isso é tudo que eu sempre quis.",
        "Porque eu não consigo imaginar minha vida sem você ao meu lado."
    ];

    for (var i = 0; i < photoIndexes.length; i++) {
        var photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");
        var photoImg = document.createElement("img");
        photoImg.src = "IMGs/IMG (" + photoIndexes[i] + ").jpeg"; // Caminho das imagens
        photoDiv.appendChild(photoImg);

        var messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.textContent = (i + 1) + ". " + messages[i];
        photoDiv.appendChild(messageDiv);

        photoGridElement.appendChild(photoDiv);
    }
});