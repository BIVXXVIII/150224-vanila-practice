(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver((s) => {
        for (const o of s)
            if (o.type === "childList")
                for (const l of o.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(s) {
        const o = {};
        return (
            s.integrity && (o.integrity = s.integrity),
            s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
            s.crossOrigin === "use-credentials"
                ? (o.credentials = "include")
                : s.crossOrigin === "anonymous"
                ? (o.credentials = "omit")
                : (o.credentials = "same-origin"),
            o
        );
    }
    function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const o = n(s);
        fetch(s.href, o);
    }
})();
const d = {
        body: document.querySelector("body"),
        navigation: document.querySelector("#navigation"),
        navigationButton: document.querySelector("#showNavigation"),
        preloader: document.querySelector("#preloader"),
        preloaderText: document.querySelector("#preloader-text"),
        fallElems: document.querySelectorAll(".fall-elem"),
        yellowSigns: document.querySelectorAll(".yellow-sign"),
    },
    E = {
        shevron_right: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
`,
        shevron_left: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
`,
    },
    { shevron_left: q, shevron_right: S } = E,
    { body: g, navigation: v, navigationButton: h } = d,
    c = document.createElement("div");
c.classList.add(
    "fixed",
    "top-0",
    "left-0",
    "right-0",
    "bottom-0",
    "z-10",
    "bg-stone-900/80"
);
g.appendChild(c);
const M = () => {
        v.classList.remove("hidden"),
            c.classList.remove("hidden"),
            (h.innerHTML = q),
            g.classList.add("max-h-screen", "overflow-hidden");
    },
    k = () => {
        v.classList.add("hidden"),
            c.classList.add("hidden"),
            (h.innerHTML = S),
            g.classList.remove("max-h-screen", "overflow-hidden");
    },
    z = (e) => {
        let t = e;
        return () => {
            if (t) {
                M(), (t = !1);
                return;
            }
            k(), (t = !0);
        };
    };
function T() {
    const e = z(!1);
    e(), c.addEventListener("click", e), h.addEventListener("click", e);
}
const P = [
        "size-10",
        "size-8",
        "size-6",
        "size-11",
        "size-12",
        "size-16",
        "size-20",
        "size-24",
        "size-28",
        "size-32",
    ],
    B = [
        "duration-[2000ms]",
        "duration-[2100ms]",
        "duration-[2200ms]",
        "duration-[2300ms]",
        "duration-[2400ms]",
        "duration-[2500ms]",
        "duration-[2600ms]",
        "duration-[2700ms]",
        "duration-[2800ms]",
        "duration-[2900ms]",
        "duration-[3000ms]",
        "duration-[3100ms]",
        "duration-[3200ms]",
        "duration-[3300ms]",
        "duration-[3400ms]",
        "duration-[3500ms]",
        "duration-[3600ms]",
        "duration-[3700ms]",
        "duration-[3800ms]",
        "duration-[3900ms]",
        "duration-[4000ms]",
        "duration-[4100ms]",
        "duration-[4200ms]",
        "duration-[4300ms]",
        "duration-[4400ms]",
        "duration-[4500ms]",
        "duration-[4600ms]",
        "duration-[4700ms]",
        "duration-[4800ms]",
        "duration-[4900ms]",
        "duration-[5000ms]",
        "duration-[5100ms]",
        "duration-[5200ms]",
        "duration-[5300ms]",
        "duration-[5400ms]",
        "duration-[5500ms]",
        "duration-[5600ms]",
        "duration-[5700ms]",
        "duration-[5800ms]",
        "duration-[5900ms]",
        "duration-[6000ms]",
    ],
    F = [
        "bg-red-600",
        "bg-orange-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-blue-500",
    ],
    H = [
        "delay-0",
        "delay-75",
        "delay-100",
        "delay-150",
        "delay-200",
        "delay-300",
    ],
    j = [
        "left-[1%]",
        "left-[2%]",
        "left-[3%]",
        "left-[4%]",
        "left-[5%]",
        "left-[6%]",
        "left-[7%]",
        "left-[8%]",
        "left-[9%]",
        "left-[10%]",
        "left-[11%]",
        "left-[12%]",
        "left-[13%]",
        "left-[14%]",
        "left-[15%]",
        "left-[16%]",
        "left-[17%]",
        "left-[18%]",
        "left-[19%]",
        "left-[20%]",
        "left-[21%]",
        "left-[22%]",
        "left-[23%]",
        "left-[24%]",
        "left-[25%]",
        "left-[26%]",
        "left-[27%]",
        "left-[28%]",
        "left-[29%]",
        "left-[30%]",
        "left-[31%]",
        "left-[32%]",
        "left-[33%]",
        "left-[34%]",
        "left-[35%]",
        "left-[36%]",
        "left-[37%]",
        "left-[38%]",
        "left-[39%]",
        "left-[40%]",
        "left-[41%]",
        "left-[42%]",
        "left-[43%]",
        "left-[44%]",
        "left-[45%]",
        "left-[46%]",
        "left-[47%]",
        "left-[48%]",
        "left-[49%]",
        "left-[50%]",
        "left-[51%]",
        "left-[52%]",
        "left-[53%]",
        "left-[54%]",
        "left-[55%]",
        "left-[56%]",
        "left-[57%]",
        "left-[58%]",
        "left-[59%]",
        "left-[60%]",
        "left-[61%]",
        "left-[62%]",
        "left-[63%]",
        "left-[64%]",
        "left-[65%]",
        "left-[66%]",
        "left-[67%]",
        "left-[68%]",
        "left-[69%]",
        "left-[70%]",
        "left-[71%]",
        "left-[72%]",
        "left-[73%]",
        "left-[74%]",
        "left-[75%]",
        "left-[76%]",
        "left-[77%]",
        "left-[78%]",
        "left-[79%]",
        "left-[80%]",
        "left-[81%]",
        "left-[82%]",
        "left-[83%]",
        "left-[84%]",
        "left-[85%]",
        "left-[86%]",
        "left-[87%]",
        "left-[88%]",
        "left-[89%]",
        "left-[90%]",
        "left-[91%]",
        "left-[92%]",
        "left-[93%]",
        "left-[94%]",
        "left-[95%]",
        "left-[96%]",
        "left-[97%]",
        "left-[98%]",
        "left-[99%]",
        "left-[100%]",
    ],
    $ = {
        sizeClasses: P,
        positionsClasses: j,
        fallSpeedClasses: B,
        colorsClasses: F,
        delayClasses: H,
    },
    { fallElems: N, preloader: O } = d,
    {
        sizeClasses: A,
        colorsClasses: _,
        positionsClasses: I,
        fallSpeedClasses: V,
        delayClasses: R,
    } = $,
    G = [A, _, I, V, R];
function K(e) {
    return Math.floor(Math.random() * e);
}
function D(e) {
    return e[K(e.length - 1)];
}
function b() {
    return G.map(D);
}
const J = () => {
    function e() {
        const t = document.createElement("div");
        t.classList.add(
            "fixed",
            "-top-20",
            "rounded-full",
            "opacity-80",
            "fallElems",
            ...b()
        ),
            O.append(t);
    }
    for (let t = 0; t < 100; t++) e();
    N.forEach((t) => t.classList.add(...b())),
        setTimeout(() => {
            document.querySelectorAll(".fallElems").forEach((n) => {
                (n.style.top = "120%"), (n.style.opacity = "0");
            });
        }, 500);
};
function Q() {
    J();
}
const { preloader: f, preloaderText: U } = d;
let u = 1;
const W = () => {
    const e = "loading",
        t = [];
    u === 3 ? (u = 1) : u++;
    for (let n = 0; n < u; n++) t.push(".");
    U.innerHTML = [e, ...t].join("");
};
function X() {
    Q(),
        setTimeout(() => {
            f.classList.add("duration-200");
        }, 100);
    const e = setInterval(W, 800);
    setTimeout(() => {
        f.classList.add("opacity-0");
    }, 2800),
        setTimeout(() => {
            clearInterval(e), f.classList.add("hidden");
        }, 3e3);
}
const { body: m } = d,
    i = document.createElement("div");
i.classList.add(
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
const a = document.createElement("div");
a.classList.add(
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
i.append(a);
function Y() {
    return {
        addPopup: (e) => {
            switch ((m.classList.add("overflow-hidden"), typeof e)) {
                case "string":
                    (a.innerHTML = e),
                        a.classList.add("text-center", "justify-center");
                    break;
                default:
                    (a.innerHTML = ""), a.appendChild(e);
                    break;
            }
            i.addEventListener("click", (t) => {
                t.stopPropagation(), t.target === i && i.remove();
            }),
                m.append(i);
        },
        removePopup: () => {
            m.classList.remove("overflow-hidden"), i.remove();
        },
    };
}
const p = (e) => {
        const t = document.createElement("div"),
            n = document.createElement("h3"),
            r = document.createElement("img"),
            s = document.createElement("div"),
            o = document.createElement("button"),
            l = document.createElement("button"),
            L = [
                "w-full",
                "h-full",
                "flex",
                "flex-grow",
                "flex-col",
                "justify-between",
            ],
            w = [
                "text-xl",
                "font-bold",
                "text-center",
                "text-slate-950",
                "mb-4",
            ],
            x = ["mb-8", "w-[200px]", "mx-auto"],
            C = [
                "flex",
                "flex-wrap",
                "gap-8",
                "items-center",
                "justify-center",
            ],
            y = [
                "rounded-xl",
                "w-20",
                "py-1.5",
                "text-center",
                "text-white",
                "duration-150",
                "hover:scale-105",
            ];
        return (
            t.classList.add(...L),
            n.classList.add(...w),
            r.classList.add(...x),
            s.classList.add(...C),
            o.classList.add(...y, "bg-indigo-600", "hover:bg-indigo-800"),
            l.classList.add(...y, "bg-stone-800", "hover:bg-stone-600"),
            (n.innerHTML = e.title),
            (r.src = e.img),
            (o.innerHTML = "Buy now"),
            (l.innerHTML = "Share"),
            t.appendChild(n),
            t.appendChild(r),
            t.appendChild(s),
            e.buyFunc &&
                (s.appendChild(o), o.addEventListener("click", e.buyFunc)),
            e.shareFunc &&
                (s.appendChild(l), l.addEventListener("click", e.shareFunc)),
            t
        );
    },
    Z = document.createElement("div");
Z.innerHTML = "custom sign from js";
const ee = {
    sign1: p({
        title: "Product card with buy and share oportunity",
        img: "/img/abstract.png",
        buyFunc: () => {
            alert("Buy this product function");
        },
        shareFunc: () => {
            alert("Share this product function");
        },
    }),
    sign2: p({
        title: "Product card with only buy func",
        img: "/img/logo.png",
        buyFunc: () => {
            alert("buy this product function");
        },
    }),
    sign3: p({
        title: "Product card with only share func",
        img: "/img/preview.jpg",
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
function te(e) {
    const t = e.id;
    e.addEventListener("click", () => {
        Y().addPopup(ee[t]);
    });
}
function se() {
    d.yellowSigns.forEach(te);
}
X();
T();
se();
document.querySelectorAll("a").forEach((e) => {
    e.target = "_blank";
});
console.log("hello world");
