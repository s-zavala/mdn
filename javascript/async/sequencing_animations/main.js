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
  const result = init.animate(aliceTumbling, aliceTiming);
  callback(result.finished);
}

function animate2(init, callback) {
  const result = init.animate(aliceTumbling, aliceTiming);
  callback(result.finished);
}

function animate3(init, callback) {
  const result = init.animate(aliceTumbling, aliceTiming);
  callback(result.finished)
}

function doOperation() {
  animeate1(alice1, result1 => {
    animate2(alice2, result2 => {
      animate3(alice3, result3 => {
        console.log(`Hello Alice`);
      });
    });
  });
};

doOperation();