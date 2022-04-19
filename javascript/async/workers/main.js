// Create dedicated worker and pass it code in generate.js
const worker = new Worker("./generate.js");

// Send message to worker, when user clicks 'Generate Primes' button.
document.querySelector("#generate").addEventListener("click", () => 
{
  const quota = document. querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota: quota
  });
});

// Update the output box, when response recieved.
worker.addEventListener("message", message => {
  document.querySelector("#output").textContent = `Finished generating ${message.data} primes!`;
});
