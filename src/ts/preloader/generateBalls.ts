import selectors from "../../ts/selectors";
import { ballsVariables } from "./preloaderBallsVar";
const { fallElems, preloader } = selectors;
const {
    sizeClasses,
    colorsClasses,
    positionsClasses,
    fallSpeedClasses,
    delayClasses,
} = ballsVariables;
const params = [
    sizeClasses,
    colorsClasses,
    positionsClasses,
    fallSpeedClasses,
    delayClasses,
];
function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function getRandomVariable(array: string[]) {
    return array[getRandomInt(array.length - 1)];
}

function getRandomBallParam() {
    return params.map(getRandomVariable);
}

const generateLoaderBalls = () => {
    function generateElements() {
        const element = document.createElement("div");
        element.classList.add(
            "fixed",
            "-top-20",
            "rounded-full",
            "opacity-80",
            "fallElems",
            ...getRandomBallParam()
        );
        preloader.append(element);
    }
    for (let i = 0; i < 100; i++) {
        generateElements();
    }

    fallElems.forEach((elem) => elem.classList.add(...getRandomBallParam()));

    setTimeout(() => {
        const balls: NodeListOf<HTMLDivElement> =
            document.querySelectorAll(".fallElems");
        balls.forEach((elem) => {
            elem.style.top = "120%";
            elem.style.opacity = "0";
        });
    }, 500);
};

export default function () {
    generateLoaderBalls();
}
