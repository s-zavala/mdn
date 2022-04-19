const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");
output.textContent = "";

const firstName = "Matilda";
const delay = 1000;

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error(`Alarm delay must not be negative.`);
        }
        window.setTimeout(() => {
            resolve(`Wake up ${person}!!!`);
        }, delay);
    });
}

button.addEventListener('click', async () => {
    // call async function and get Promise object
    try {
        const message = await alarm(firstName, delay);
        output.textContent = message;
    }
    catch (error) {
        output.textContent = `Could not set alarm: ${error}`;
    }
    // main flow
    output.textContent += "zZzZ";
});

