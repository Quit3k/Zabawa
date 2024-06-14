document.querySelector('.fa-rotate-right').addEventListener('click', function() {
    window.location.reload();
});


//modal

// Otwarcie popupu
document.getElementById('info-icon').addEventListener('click', function() {
    document.getElementById('info-popup').style.display = 'block';
});

// Zamknięcie popupu po kliknięciu na przycisk zamknięcia
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('info-popup').style.display = 'none';
});

// Zamknięcie popupu po kliknięciu poza popupem
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('info-popup')) {
        document.getElementById('info-popup').style.display = 'none';
    }
});

//linki do flash

document.querySelectorAll('.matches h3 a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Zapobiega domyślnemu zachowaniu linku
        const url = this.href;
        const windowFeatures = "menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=700,height=600";
        window.open(url, '_blank', windowFeatures);
    });
});

//zapisz przycisk 
// document.querySelectorAll('.save-button').forEach(button => {
//     button.addEventListener('click', function () {
//         const match = this.closest('.match');
//         const team1Score = match.querySelector('.score-entry input:nth-child(2)').value;
//         const team2Score = match.querySelector('.score-entry input:nth-child(4)').value;
//         const matchId = match.querySelector('h3').dataset.matchId;
//         const wynik = `${team1Score}:${team2Score}`;
//         updateResult(matchId, wynik).then(() => {
//             const resultElement = document.getElementById(`${matchId}-result`);
//             if (resultElement) {
//                 resultElement.textContent = wynik;
//             }
//         });
//     });
// });

//document.addEventListener('DOMContentLoaded', getMatchResults);

//tło 

//tło
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
  
    for (let i = 1; i <= 100; i++) {
      const circleContainer = document.createElement('div');
      circleContainer.classList.add('circle-container');
  
      const circle = document.createElement('div');
      circle.classList.add('circle');
  
      circleContainer.appendChild(circle);
      container.appendChild(circleContainer);
  
      // Losowanie pozycji początkowej i animacji
      const startPositionX = Math.random() * 100; // Losowa pozycja X w procentach
      const startPositionY = 100 + Math.random() * 10; // Losowa pozycja Y poza ekranem
      circleContainer.style.left = `${startPositionX}%`;
      circleContainer.style.top = `${startPositionY}vh`;
  
      // Ustawianie losowej animacji dla każdego kontenera
      const moveDuration = 20 + Math.random() * 10; // Czas trwania animacji od 20 do 30 sekund
      const delay = Math.random() * 10; // Losowe opóźnienie do 10 sekund
      const rotation = (Math.random() - 0.5) * 60; // Losowa rotacja między -30 a 30 stopni
  
      circleContainer.style.animation = `move-frames-${i} ${moveDuration}s linear ${delay}s infinite`;
  
      // Definiowanie klatek kluczowych dla animacji ruchu
      const keyframes = `
        @keyframes move-frames-${i} {
          from {
            transform: translate(0, 0) rotate(${rotation}deg);
          }
          to {
            transform: translate(${(Math.random() - 0.5) * 20}vw, -100vh) rotate(${rotation}deg);
          }
        }
      `;
      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = keyframes;
      document.head.appendChild(styleSheet);
  
      // Losowe opóźnienia dla animacji scale-frames
      const scaleDelay = Math.random() * 2; // Opóźnienie do 2 sekund
      circle.style.animationDelay = `${scaleDelay}s`;
  
      // Logowanie szczegółów animacji
    //   console.log(`Circle ${i} animation: move-frames-${i} ${moveDuration}s linear ${delay}s infinite`);
    }
  
    // console.log('Stars added and animated');
  });
  

//   pisanie
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('nick');
    const textToType = 'Admin';
    const typingSpeed = 150; // Szybkość pisania w milisekundach

    let charIndex = 0;

    function typeChar() {
        if (charIndex < textToType.length) {
            textElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, typingSpeed);
        } else {
            setTimeout(blinkCursor, 1000); // Zacznij miganie kursora po zakończeniu pisania
        }
    }

    function blinkCursor() {
        textElement.style.borderRight = 'none'; // Usuń kreskę po zakończeniu migania
    }

    typeChar();
});

//music

document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('background-music');
    let isPlaying = false;

    document.addEventListener('keydown', (event) => {
        if (event.key === 'm' || event.key === 'M') {
            if (isPlaying) {
                audioElement.pause();
            } else {
                audioElement.play();
            }
            isPlaying = !isPlaying;
        }
    });

    audioElement.addEventListener('ended', () => {
        isPlaying = false; // Reset the flag when the music ends
    });
});


//scorll na sam dół 

window.addEventListener('load', function() {
    // Sprawdzanie wysokości strony po załadowaniu wszystkich zasobów
    const pageHeight = document.documentElement.scrollHeight;
    console.log("Wysokość strony:", pageHeight);

    // Podział strony na części
    const quarterPoint = pageHeight / 3.5;
    const threeQuarterPoint = pageHeight * 0.62;

    // Ustawienie funkcji przewijania
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'w':
            case 'W':
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                break;
            case 'a':
            case 'A':
                window.scrollTo({
                    top: quarterPoint,
                    behavior: 'smooth'
                });
                break;
            case 'd':
            case 'D':
                window.scrollTo({
                    top: threeQuarterPoint,
                    behavior: 'smooth'
                });
                break;
            case 's':
            case 'S':
                window.scrollTo({
                    top: pageHeight,
                    behavior: 'smooth'
                });
                break;
            default:
                break;
        }
    });
});


//tryb ciemny 
document.getElementById('theme-switch-icon').addEventListener('click', function() {
    // Przełączanie trybu nocnego
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelectorAll('.navbar-icon').forEach(icon => {
        icon.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.ranking-table').forEach(table => {
        table.classList.toggle('dark-mode');
    });
    document.querySelector('.ranking').classList.toggle('dark-mode');
    document.querySelectorAll('.match').forEach(match => {
        match.classList.toggle('dark-mode');
    });
    document.querySelector('.footer').classList.toggle('dark-mode');

    // Zmiana tła
    const backgroundImg = document.querySelector('.background');
    if (document.body.classList.contains('dark-mode')) {
        backgroundImg.src = 'flagiitp/noc.png';
        localStorage.setItem('theme', 'dark');
    } else {
        backgroundImg.src = 'flagiitp/dzien.png';
        localStorage.setItem('theme', 'light');
    }
});

// Ładowanie stanu trybu z localStorage przy załadowaniu strony
window.addEventListener('load', function() {
    const backgroundImg = document.querySelector('.background');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.navbar').classList.add('dark-mode');
        document.querySelectorAll('.navbar-icon').forEach(icon => {
            icon.classList.add('dark-mode');
        });
        document.querySelectorAll('.ranking-table').forEach(table => {
            table.classList.add('dark-mode');
        });
        document.querySelector('.ranking').classList.add('dark-mode');
        document.querySelectorAll('.match').forEach(match => {
            match.classList.add('dark-mode');
        });
        document.querySelector('.footer').classList.add('dark-mode');
        backgroundImg.src = 'flagiitp/noc.png';
    } else {
        backgroundImg.src = 'flagiitp/dzien.png';
    }
});


//przycisk

document.addEventListener('DOMContentLoaded', function() {
    const escapeButton = document.getElementById('escape-button');
    const returnButton = document.getElementById('return-button');
    const ranking = document.querySelector('.ranking');
    const rankingPlaceholder = document.querySelector('.ranking-placeholder');
    const mainContent = document.querySelector('.matches-container');

    escapeButton.addEventListener('click', function() {
        // Ukryj ranking i ranking-placeholder, powiększ main, zmień przyciski
        ranking.style.display = 'none';
        rankingPlaceholder.classList.add('hidden');
        mainContent.classList.add('expanded');
        escapeButton.style.display = 'none';
        returnButton.style.display = 'inline';
    });

    returnButton.addEventListener('click', function() {
        // Przywróć ranking i ranking-placeholder, zmniejsz main, zmień przyciski
        ranking.style.display = 'block';
        rankingPlaceholder.classList.remove('hidden');
        mainContent.classList.remove('expanded');
        escapeButton.style.display = 'inline';
        returnButton.style.display = 'none';
    });
});
