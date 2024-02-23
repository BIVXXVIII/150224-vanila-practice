import createProductPopup from "./createProductPopup";

type PopupContent = {
    sign1: string | Node;
    sign2: string | Node;
    sign3: string | Node;
    sign4: string | Node;
    sign5: string | Node;
};

const sign2 = document.createElement("div");
sign2.innerHTML = "custom sign from js";

export const popupContent: PopupContent = {
    sign1: createProductPopup({
        title: "Product card with buy and share oportunity",
        img: "/abstract.png",
        buyFunc: () => {
            alert("Buy this product function");
        },
        shareFunc: () => {
            alert("Share this product function");
        },
    }),
    sign2: createProductPopup({
        title: "Product card with only buy func",
        img: "/logo.png",
        buyFunc: () => {
            alert("buy this product function");
        },
    }),
    sign3: createProductPopup({
        title: "Product card with only share func",
        img: "/preview.jpg",
        shareFunc: () => {
            alert("share this product function");
        },
    }),
    sign4: `
    Example popup with text as content.
    <br/>
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ad aspernatur itaque odit autem dolor eligendi assumenda nesciunt tempora, unde perferendis omnis eos aliquid saepe, at repudiandae doloremque officia harum nisi quidem, rerum atque! Laboriosam fuga iusto dolor, vitae, beatae possimus eius repudiandae porro odio at perferendis corporis id! Fuga.`,
    sign5: `Example popup with text as content.
    <br/>
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ad aspernatur itaque odit autem dolor eligendi assumenda nesciunt tempora, unde perferendis omnis eos aliquid saepe, at repudiandae doloremque officia harum nisi quidem, rerum atque! Laboriosam fuga iusto dolor, vitae, beatae possimus eius repudiandae porro odio at perferendis corporis id! Fuga.`,
};

export type PopupContentKey = keyof PopupContent;
