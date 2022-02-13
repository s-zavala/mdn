const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgNames = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg"
]
/* Looping through images */
for (let img of imgNames) {
    let image = document.createElement("img");
    let path = `images/${img}`;
    image.setAttribute("src", path);
    thumbBar.appendChild(image);

    image.addEventListener("click", () => {
        displayedImage.setAttribute("src", path);
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    const darkColor = "rgba(0, 0, 0, .5)";
    const defaultColor = "rgba(0, 0, 0, 0)"
    if (overlay.style.backgroundColor === darkColor) {
        overlay.style.backgroundColor = defaultColor;
    }
    else {
        overlay.style.backgroundColor = darkColor;
    }
})