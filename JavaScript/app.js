"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BCard = function BCard() {
  _classCallCheck(this, BCard);

  _defineProperty(this, "bCardFlipAnimationToggle", function () {
    var toggleButton = document.querySelector('.b-card-help span');
    var bCard = document.querySelector('.b-card-container');

    toggleButton.onclick = function () {
      bCard.classList.toggle('flip-toggle');
    };
  });

  this.bCardFlipAnimationToggle();
};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EasterEgg = function EasterEgg() {
  _classCallCheck(this, EasterEgg);

  _defineProperty(this, "consoleLogEaesterEgg", function () {
    console.log('');
  });

  this.consoleLogEaesterEgg();
};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  _classCallCheck(this, App);

  new BCard();
};

new App();