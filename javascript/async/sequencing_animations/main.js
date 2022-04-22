const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

function animeate1(init, callback) {
  init.animate(aliceTumbling, aliceTiming);
  callback(0);
}

function animate2(init, callback) {
  init.animate(aliceTumbling, aliceTiming);
  callback(0);
}

function animate3(init, callback) {
  init.animate(aliceTumbling, aliceTiming);
  callback(0)
}

function doOperation() {
  animeate1(alice1, nul => {
    animate2(alice2, nul => {
      animate3(alice3, nul => {
        console.log("Hello world.")
      });
    });
  });
};

doOperation();