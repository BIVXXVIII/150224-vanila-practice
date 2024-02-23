import { selectors } from "..";
const { body } = selectors;
const popup = document.createElement("div");
popup.classList.add(
    "fixed",
    "top-0",
    "left-0",
    "bottom-0",
    "right-0",
    "bg-stone-900/90",
    "flex",
    "justify-center",
    "items-center",
    "z-[100]"
);
const popupBody = document.createElement("div");
popupBody.classList.add(
    "bg-white",
    "min-h-[400px]",
    "md:w-[400px]",
    "w-[250px]",
    "flex",
    "flex-col",
    "items-center",
    "rounded-md",
    "text-slate-950",
    "px-10",
    "py-4"
);

popup.append(popupBody);

export default function () {
    return {
        addPopup: (content: string | Node) => {
            body.classList.add("overflow-hidden");
            switch (typeof content) {
                case "string":
                    popupBody.innerHTML = content;
                    popupBody.classList.add("text-center", "justify-center");
                    break;
                default:
                    popupBody.innerHTML = "";
                    popupBody.appendChild(content);
                    break;
            }

            popup.addEventListener("click", (e) => {
                e.stopPropagation();

                if (e.target === popup) {
                    popup.remove();
                }
            });
            body.append(popup);
        },
        removePopup: () => {
            body.classList.remove("overflow-hidden");
            popup.remove();
        },
    };
}
