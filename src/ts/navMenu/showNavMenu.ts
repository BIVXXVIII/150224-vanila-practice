import { selectors } from "..";
import { svgGalery } from "../../assets/svg/svg";
const { shevron_left, shevron_right } = svgGalery;
const { body, navigation, navigationButton } = selectors;

const background = document.createElement("div");
background.classList.add(
    "fixed",
    "top-0",
    "left-0",
    "right-0",
    "bottom-0",
    "z-10",
    "bg-stone-900/80"
);
body.appendChild(background);

const hideNavigation = () => {
    navigation.classList.remove("hidden");
    background.classList.remove("hidden");
    navigationButton.innerHTML = shevron_left;
    body.classList.add("max-h-screen", "overflow-hidden");
};
const showNavigation = () => {
    navigation.classList.add("hidden");
    background.classList.add("hidden");
    navigationButton.innerHTML = shevron_right;
    body.classList.remove("max-h-screen", "overflow-hidden");
};
const isMenuOpen = (initialState: boolean) => {
    let innerState = initialState;
    return () => {
        if (innerState) {
            hideNavigation();
            innerState = false;
            return;
        }
        showNavigation();
        innerState = true;
    };
};

function addNavigationMenuEvents() {
    const toogleMenu = isMenuOpen(false);
    toogleMenu();
    background.addEventListener("click", toogleMenu);
    navigationButton.addEventListener("click", toogleMenu);
}
export default addNavigationMenuEvents;
