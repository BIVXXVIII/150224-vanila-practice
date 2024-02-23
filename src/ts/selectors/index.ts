type Selectors = {
    body: HTMLBodyElement;
    navigation: HTMLDivElement;
    navigationButton: HTMLButtonElement;
    preloader: HTMLDivElement;
    preloaderText: HTMLDivElement;
    fallElems: NodeListOf<HTMLDivElement>;
    yellowSigns: NodeListOf<HTMLLIElement>;
};

const selectors: Selectors = {
    body: document.querySelector("body")!,
    navigation: document.querySelector("#navigation")!,
    navigationButton: document.querySelector("#showNavigation")!,
    preloader: document.querySelector("#preloader")!,
    preloaderText: document.querySelector("#preloader-text")!,
    fallElems: document.querySelectorAll(".fall-elem"),
    yellowSigns: document.querySelectorAll(".yellow-sign"),
};

export default selectors;
