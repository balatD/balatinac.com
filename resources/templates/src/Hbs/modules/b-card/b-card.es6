class BCard {
  constructor() {
    this.bCardFlipAnimationToggle();
  }

  bCardFlipAnimationToggle = () => {
    let toggleButton = document.querySelector('.b-card-help span');
    let bCard = document.querySelector('.b-card-container');

    if (toggleButton !== undefined && toggleButton !== null) {
      toggleButton.onclick = function () {
        bCard.classList.toggle('flip-toggle');
      };
    }
  }
}
