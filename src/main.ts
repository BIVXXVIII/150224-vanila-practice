import "./index.css";
import loader from "./ts/preloader";
import { addNavigationMenuEvents } from "./ts";
import SignList from "./ts/SignList";
loader();
addNavigationMenuEvents();
SignList();
document.querySelectorAll("a").forEach((link) => {
    link.target = "_blank";
});
