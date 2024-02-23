type Props = {
    readonly title: string;
    readonly img: string;
    buyFunc?: () => void;
    shareFunc?: () => void;
};

const createProductPopup = (props: Props) => {
    const container = document.createElement("div");
    const title = document.createElement("h3");
    const img = document.createElement("img");
    const buttonContainer = document.createElement("div");
    const buttonBuy = document.createElement("button");
    const buttonShare = document.createElement("button");

    const containerClasses = [
        "w-full",
        "h-full",
        "flex",
        "flex-grow",
        "flex-col",
        "justify-between",
    ];
    const titleClasses = [
        "text-xl",
        "font-bold",
        "text-center",
        "text-slate-950",
        "mb-4",
    ];
    const imgClasses = ["mb-8", "w-[200px]", "mx-auto"];
    const buttonContainerClasses = [
        "flex",
        "flex-wrap",
        "gap-8",
        "items-center",
        "justify-center",
    ];
    const buttonClasses = [
        "rounded-xl",
        "w-20",
        "py-1.5",
        "text-center",
        "text-white",
        "duration-150",
        "hover:scale-105",
    ];

    container.classList.add(...containerClasses);
    title.classList.add(...titleClasses);
    img.classList.add(...imgClasses);
    buttonContainer.classList.add(...buttonContainerClasses);
    buttonBuy.classList.add(
        ...buttonClasses,
        "bg-indigo-600",
        "hover:bg-indigo-800"
    );
    buttonShare.classList.add(
        ...buttonClasses,
        "bg-stone-800",
        "hover:bg-stone-600"
    );

    title.innerHTML = props.title;
    img.src = props.img;
    buttonBuy.innerHTML = "Buy now";
    buttonShare.innerHTML = "Share";

    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(buttonContainer);

    if (props.buyFunc) {
        buttonContainer.appendChild(buttonBuy);
        buttonBuy.addEventListener("click", props.buyFunc);
    }
    if (props.shareFunc) {
        buttonContainer.appendChild(buttonShare);
        buttonShare.addEventListener("click", props.shareFunc);
    }

    return container as Node;
};

export default createProductPopup;
