import { selectors } from "..";
import popup from "../popup";
import { PopupContentKey, popupContent } from "../popup/popupContent";
function listClickHandler(sign: HTMLLIElement) {
    const key = sign.id as PopupContentKey;
    sign.addEventListener("click", () => {
        popup().addPopup(popupContent[key]);
    });
}

export default function () {
    selectors.yellowSigns.forEach(listClickHandler);
}
