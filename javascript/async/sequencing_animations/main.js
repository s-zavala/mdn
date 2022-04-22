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

// Promise Chain

function anim_alice(init) {
  const animation = init.animate(aliceTumbling, aliceTiming);
  return animation.finished
}

// anim_alice(alice1)
//   .then(result => anim_alice(alice2))
//   .then(result => anim_alice(alice3))
//   .then(finalResult => console.log("Hello Alice"));

// Using async and await

async function sequence() {
  try {
    const result = await anim_alice(alice1);
    const newResult = await anim_alice(alice2);
    const finalResult = await anim_alice(alice3);
  }
  catch(error) {
    failureCallback(error)
  }
}

sequence()