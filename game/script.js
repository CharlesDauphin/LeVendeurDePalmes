let points = 0;

const backgroundMusic = new Audio('audio/background.wav');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

backgroundMusic.addEventListener('canplay', function () {
  backgroundMusic.play();
});

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.getElementById('tree');
  const pointsDisplay = document.getElementById('points');
  const palmesContainer = document.getElementById('palmes-container');
  const scientistIcon = document.getElementById('scientist-icon');
  const scientistCount = document.getElementById('scientist-count');

  let scientists = 0;

  tree.addEventListener('click', (e) => {
    points++;
    pointsDisplay.textContent = points;

    const palme = createPalmeImage();
    positionPalmeNearMouse(palme, e);
    palme.style.animation = 'descend 1s linear';

    setTimeout(() => {
      palmesContainer.removeChild(palme);
    }, 1000);
  });

  scientistIcon.addEventListener('click', () => {
    scientists++;
    scientistCount.textContent = scientists;
  });
});

function createPalmeImage() {
  const palme = document.createElement('img');
  palme.src = 'img/palmes.png';
  palme.className = 'palme';
  palme.style.width = '50px';
  palme.style.height = '50px';
  return palme;
}

function positionPalmeNearMouse(palme, event) {
  const palmesContainer = document.getElementById('palmes-container');
  const containerRect = palmesContainer.getBoundingClientRect();

  palme.style.left = event.clientX - containerRect.left - palme.width / 2 + 'px';
  palme.style.top = event.clientY - containerRect.top - palme.height / 2 + 'px';

  palmesContainer.appendChild(palme);
}

function showMessageModal(message) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `<div class="modal-content">
                       <p>${message}</p>
                       <button id="close-modal">OK</button>
                     </div>`;
  document.body.appendChild(modal);

  const closeModalButton = document.getElementById('close-modal');
  closeModalButton.addEventListener('click', () => {
    document.body.removeChild(modal);
    points = 0;
    document.getElementById('points').textContent = points;
  });
}
