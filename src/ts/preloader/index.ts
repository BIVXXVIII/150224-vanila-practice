import { selectors } from "..";
import generateBalls from "./generateBalls";
const { preloader, preloaderText } = selectors;
let count = 1;
const loading = () => {
    const fish = "loading";
    const str = [];
    if (count === 3) {
        count = 1;
    } else {
        count++;
    }
    for (let i = 0; i < count; i++) {
        str.push(`.`);
    }
    preloaderText.innerHTML = [fish, ...str].join("");
};

export default function () {
    generateBalls();
    setTimeout(() => {
        preloader.classList.add("duration-200");
    }, 100);
    const interval = setInterval(loading, 800);
    setTimeout(() => {
        preloader.classList.add("opacity-0");
    }, 2800);
    setTimeout(() => {
        clearInterval(interval);
        preloader.classList.add("hidden");
    }, 3000);
}
