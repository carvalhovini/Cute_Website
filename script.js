document.addEventListener("DOMContentLoaded", function() {
    // Contagem regressiva do tempo juntos
    var startDate = new Date("2022-10-18"); // Coloque a data que começaram a namorar aqui
    var countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        var currentDate = new Date();
        var timeDifference = currentDate.getTime() - startDate.getTime();
        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        countdownElement.textContent = daysDifference + " dias juntos!";
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Carregar imagem do céu no dia que começaram a namorar usando a NASA API
    var skyImageElement = document.getElementById("sky-image");
    var nasaApiKey = "Y9iyTNJXcHTTL57E2MzSZEXQLICcOyyogjhs6pcr";

    fetch("https://api.nasa.gov/planetary/earth/assets?lon=0&lat=0&date=2022-10-18&dim=0.1&api_key=" + nasaApiKey)
        .then(response => response.json())
        .then(data => {
            skyImageElement.src = data.url;
        })
        .catch(error => {
            console.error("Erro ao carregar a imagem do céu:", error);
        });

    // Carregar imagem Astronomy Picture of the Day usando a API APOD da NASA
    var apodImageElement = document.getElementById("apod-image");
    var apodTitleElement = document.getElementById("apod-title");
    var apodExplanationElement = document.getElementById("apod-explanation");
    
    fetch("https://api.nasa.gov/planetary/apod?api_key=" + nasaApiKey)
        .then(response => response.json())
        .then(data => {
            apodImageElement.src = data.hdurl; // Usa a URL de alta resolução, se disponível
            apodImageElement.alt = data.title;
            apodTitleElement.textContent = data.title;
            apodExplanationElement.textContent = data.explanation;
        })
        .catch(error => {
            console.error("Erro ao carregar a imagem do Astronomy Picture of the Day:", error);
        });

    // Carregar fotos e motivos
    var photoGridElement = document.getElementById("photo-grid");
    for (var i = 1; i <= 50; i++) {
        var photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");
        var photoImg = document.createElement("img");
        photoImg.src = "photos/photo" + i + ".jpg"; // Substitua pelo caminho das suas fotos
        photoDiv.appendChild(photoImg);
        photoGridElement.appendChild(photoDiv);

        // Adicionar evento de clique para exibir mensagem fofa
        photoDiv.addEventListener("click", function() {
            alert("Mensagem fofa relacionada ao motivo pelo qual você a ama.");
        });
    }
});
