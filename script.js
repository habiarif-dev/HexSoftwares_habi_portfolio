const words = [
    "Web Developer",
    "CS Student",
    "Aspiring Internee"
];

let index = 0;

setInterval(() => {
    document.getElementById("typing").textContent =
        words[index];

    index = (index + 1) % words.length;

}, 2000);

const btn = document.getElementById("theme-btn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});