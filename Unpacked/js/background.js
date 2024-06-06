let O = {
    cssInspector: { title: "CSS Inspector", isPaid: !1, icon: "fa-solid fa-code", id: "cssInspector" },
    liveTextEditor: { title: "Live Text Editor", isPaid: !0, icon: "fa-solid fa-pen-to-square", id: "liveTextEditor" },
    fontsChanger: { title: "Fonts Changer", isPaid: !0, icon: "fa-solid fa-text-size", id: "fontsChanger" },
    listAllFonts: { title: "List All Fonts", isPaid: !1, icon: "fa-solid fa-font-case", id: "listAllFonts" },
    colorPicker: { title: "Color Picker", isPaid: !1, icon: "fa-solid fa-eye-dropper", id: "colorPicker" },
    colorPalette: { title: "Color Palette", isPaid: !1, icon: "fa-solid fa-swatchbook", id: "colorPalette" },
    moveElement: {
      title: "Move Element",
      isPaid: !0,
      icon: "fa-solid fa-arrows-up-down-left-right",
      id: "moveElement",
    },
    deleteElement: { title: "Delete Element", isPaid: !0, icon: "fa-solid fa-trash-can", id: "deleteElement" },
    exportElement: {
      title: "Export Element",
      isPaid: !0,
      icon: "fa-solid fa-up-right-from-square",
      id: "exportElement",
    },
    extractImages: { title: "Extract Images", isPaid: !1, icon: "fa-solid fa-image", id: "extractImages" },
    pageRuler: { title: "Page Ruler", isPaid: !0, icon: "fa-solid fa-ruler-combined", id: "pageRuler" },
    pageOutliner: { title: "Page Outliner", isPaid: !0, icon: "fa-solid fa-grid-2", id: "pageOutliner" },
    imageReplacer: { title: "Image Replacer", isPaid: !0, icon: "fa-solid fa-image", id: "imageReplacer" },
    takeScreenshot: { title: "Take Screenshot", isPaid: !1, icon: "fa-solid fa-aperture", id: "takeScreenshot" },
  },
  U = {
    pageGuideline: {
      title: "Page Guideline Settings",
      settings: {
        pageGuidelineQ4NDY4MQ: !0,
        pageGuidelineQ5MJIWMG: !0,
        pageGuidelineUXMDI3OQ: !0,
        pageGuidelineRESET: !1,
      },
      settingsRef: {
        pageGuidelineQ4NDY4MQ: !0,
        pageGuidelineQ5MJIWMG: !0,
        pageGuidelineUXMDI3OQ: !0,
        pageGuidelineRESET: !1,
      },
      settingsText: [
        "Show Page Guideline",
        "Show Element Tagname",
        "Show Margin And Padding",
        "Reset Settings to Default",
      ],
    },
    colorFormat: {
      title: "Color Format Settings",
      settings: { colorFormatY4NZC0MQ: !0, colorFormatY5MZI3NW: !1, colorFormatY4NTC5OA: !1, colorFormatRESET: !1 },
      settingsRef: { colorFormatY4NZC0MQ: !0, colorFormatY5MZI3NW: !1, colorFormatY4NTC5OA: !1, colorFormatRESET: !1 },
      settingsText: [
        "Use Hex Color Code Format",
        "Use RGB Color Code Format",
        "Use HSL Color Code Format",
        "Reset Settings to Default",
      ],
    },
    cssInspector: {
      title: "CSS Inspector Settings",
      settings: { cssInspectorE5NTAWNA: !0, cssInspectorIXMTUZMQ: !1, cssInspectorRESET: !1 },
      settingsRef: { cssInspectorE5NTAWNA: !0, cssInspectorIXMTUZMQ: !1, cssInspectorRESET: !1 },
      settingsText: ["Create Normal CSS Selector", "Create Unique CSS Selector", "Reset Settings to Default"],
    },
    deleteElement: {
      title: "Delete Element Settings",
      settings: { deleteElementQ0MDI2MW: !0, deleteElementQ2NDC3MQ: !1, deleteElementRESET: !1 },
      settingsRef: { deleteElementQ0MDI2MW: !0, deleteElementQ2NDC3MQ: !1, deleteElementRESET: !1 },
      settingsText: ["Use Display None To Hide", "Use Visibility Hidden To Hide", "Reset Settings to Default"],
    },
    exportElement: {
      title: "Export Element Settings",
      settings: {
        exportElementAWOTA5NG: !1,
        exportElementM2MTUXNG: !1,
        exportElementLCSA49C3: !0,
        exportElementLCSA4H5U: !1,
        exportElementRESET: !1,
      },
      settingsRef: {
        exportElementAWOTA5NG: !1,
        exportElementM2MTUXNG: !1,
        exportElementLCSA49C3: !0,
        exportElementLCSA4H5U: !1,
        exportElementRESET: !1,
      },
      settingsText: [
        "Remove CSS Font-Faces",
        "Add Unique Selector Prefix",
        "Export Element to Codepen",
        "Export Element to a File",
        "Reset Settings to Default",
      ],
    },
    extractImages: {
      title: "Extract Images Settings",
      settings: {
        extractImagesC1MDQ4MQ: !0,
        extractImagesC1MTK1NG: !0,
        extractImagesC1NDE1MG: !0,
        extractImagesY1ODE2NQ: !0,
        extractImagesC1NTQXNA: !0,
        extractImagesG5ODI3NA: !0,
        extractImagesK3MZY3NW: !0,
        extractImagesA3MZU3MQ: !0,
        extractImagesRESET: !1,
      },
      settingsRef: {
        extractImagesC1MDQ4MQ: !0,
        extractImagesC1MTK1NG: !0,
        extractImagesC1NDE1MG: !0,
        extractImagesY1ODE2NQ: !0,
        extractImagesC1NTQXNA: !0,
        extractImagesG5ODI3NA: !0,
        extractImagesK3MZY3NW: !0,
        extractImagesA3MZU3MQ: !0,
        extractImagesRESET: !1,
      },
      settingsText: [
        "Include OG/Twitter Images",
        "Include Background Images",
        "Include All <IMG> Images",
        "Include All Srcset Images",
        "Include All Inline SVGs",
        "Include All Canvas Images",
        "Include All Video Posters",
        "Include All Page Favicons",
        "Reset Settings to Default",
      ],
    },
  },
  X = /color\(([\S\s]+?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)(?:\s+\/\s+(-?\d+(?:\.\d+)?))?\)/gm,
  K = /@import (['"])(\S+?)\1/gm,
  V = /@import url\((['"]?)(\S+?)\1\)/gm,
  z = new RegExp(
    "(?<!ok)lab\\((-?\\d+(?:\\.\\d+)?)\\s+(-?\\d+(?:\\.\\d+)?)\\s+(-?\\d+(?:\\.\\d+)?)(?:\\s+\\/\\s+(-?\\d+(?:\\.\\d+)?))?\\)",
    "gm"
  ),
  _ = new RegExp(
    "(?<!ok)lch\\((-?\\d+(?:\\.\\d+)?)\\s+(-?\\d+(?:\\.\\d+)?)\\s+(-?\\d+(?:\\.\\d+)?)(?:\\s+\\/\\s+(-?\\d+(?:\\.\\d+)?))?\\)",
    "gm"
  ),
  ee = /oklab\((-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)(?:\s+\/\s+(-?\d+(?:\.\d+)?))?\)/gm,
  te = /oklch\((-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)(?:\s+\/\s+(-?\d+(?:\.\d+)?))?\)/gm,
  q = /rgba?\((\d+),\s+(\d+),\s+(\d+)(?:,\s+(-?\d+(?:\.\d+)?))?\)/gm,
  re = /url\((['"]?)(\S+?)\1\)/gm;
function le(r) {
  let e = r,
    a = r.match(X);
  a == null ||
    a.forEach((c) => {
      e = e.replaceAll(c, f(c));
    });
  let i = r.match(z);
  i == null ||
    i.forEach((c) => {
      e = e.replaceAll(c, f(c));
    });
  let n = r.match(_);
  n == null ||
    n.forEach((c) => {
      e = e.replaceAll(c, f(c));
    });
  let u = r.match(ee);
  u == null ||
    u.forEach((c) => {
      e = e.replaceAll(c, f(c));
    });
  let x = r.match(te);
  return (
    x == null ||
      x.forEach((c) => {
        e = e.replaceAll(c, f(c));
      }),
    e
  );
  function f(c) {
    let b = document.createElement("canvas");
    (b.width = 1), (b.height = 1);
    let h = b.getContext("2d", { willReadFrequently: !0 });
    (h.fillStyle = c), h.fillRect(0, 0, 1, 1);
    let y = h.getImageData(0, 0, 1, 1).data[0],
      E = h.getImageData(0, 0, 1, 1).data[1],
      A = h.getImageData(0, 0, 1, 1).data[2],
      R = h.getImageData(0, 0, 1, 1).data[3];
    return (R = Math.round((R / 255) * 100) / 100), R === 1 ? `rgb(${y}, ${E}, ${A})` : `rgb(${y}, ${E}, ${A}, ${R})`;
  }
}
function se(r) {
  let e = r.match(q);
  if (!e) return r;
  let a = r;
  return (
    e.forEach((n) => {
      a = a.replaceAll(n, i(n));
    }),
    a
  );
  function i(n) {
    let u = n.split("(")[1].split(")")[0].split(","),
      x = parseFloat(u[0].trim()) / 255,
      f = parseFloat(u[1].trim()) / 255,
      c = parseFloat(u[2].trim()) / 255,
      b = Math.min(x, f, c),
      h = Math.max(x, f, c),
      y = h - b,
      E,
      A,
      R,
      L;
    return (
      h === b
        ? (E = 0)
        : x === h
        ? (E = (f - c) / y)
        : f === h
        ? (E = 2 + (c - x) / y)
        : c === h && (E = 4 + (x - f) / y),
      (E = Math.min(E * 60, 360)),
      E < 0 && (E += 360),
      (R = (b + h) / 2),
      h === b ? (A = 0) : R <= 0.5 ? (A = y / (h + b)) : (A = y / (2 - h - b)),
      (E = Math.round(E)),
      (A = Math.round(A * 100)),
      (R = Math.round(R * 100)),
      u.length === 3
        ? `hsl(${E}, ${A}%, ${R}%)`
        : ((L = parseFloat(u[3].trim())), (L = parseFloat(L.toFixed(2))), `hsla(${E}, ${A}%, ${R}%, ${L})`)
    );
  }
}
function W(r) {
  let e = r.match(q);
  if (!e) return r;
  let a = r;
  return (
    e.forEach((n) => {
      a = a.replaceAll(n, i(n));
    }),
    a
  );
  function i(n) {
    let u = n.split("(")[1].split(")")[0].split(",");
    if (u.length === 3) {
      let x = (Math.round(parseFloat(u[0].trim())) & 255) << 16,
        f = (Math.round(parseFloat(u[1].trim())) & 255) << 8,
        c = Math.round(parseFloat(u[2].trim())) & 255,
        b = (x + f + c).toString(16).toUpperCase();
      return "#" + "000000".substring(b.length) + b;
    } else {
      let x = (Math.round(parseFloat(u[0].trim())) & 255) << 16,
        f = (Math.round(parseFloat(u[1].trim())) & 255) << 8,
        c = Math.round(parseFloat(u[2].trim())) & 255,
        b = Math.round(parseFloat(u[3].trim()) * 255) & 255;
      b = (b | 256).toString(16).slice(1).toUpperCase();
      let h = (x + f + c).toString(16).toUpperCase();
      return "#" + "000000".substring(h.length) + h + b;
    }
  }
}
function ae(r, e) {
  let { shortSettings: a } = r;
  return a.colorFormatY4NZC0MQ ? W(e) : a.colorFormatY5MZI3NW ? e : a.colorFormatY4NTC5OA ? se(e) : W(e);
}
function k(r) {
  try {
    let e = new URL(r);
    return ["http:", "https:"].includes(e.protocol);
  } catch {
    return !1;
  }
}
function v(r) {
  try {
    let e = new URL(r);
    return (
      ["http:", "https:"].includes(e.protocol) &&
      !e.href.startsWith("https://chrome.google.com/webstore") &&
      !e.href.startsWith("https://chromewebstore.google.com") &&
      !e.href.startsWith("https://microsoftedge.microsoft.com/addons")
    );
  } catch {
    return !1;
  }
}
function oe(r) {
  try {
    let e = new URL(r);
    return ["blob:"].includes(e.protocol);
  } catch {
    return !1;
  }
}
function ie(r) {
  try {
    let e = new URL(r);
    return ["data:"].includes(e.protocol);
  } catch {
    return !1;
  }
}
function ne(r) {
  return r.startsWith("%23") ? !0 : !!r.startsWith("#");
}
function Q(r) {
  try {
    let e = new URL(r);
    return ["data:"].includes(e.protocol) && e.href.startsWith("data:image");
  } catch {
    return !1;
  }
}
function F(r, e, a) {
  chrome.runtime.id !== "jlkikimlceonbmfjieipbonnglnlchhl" &&
    (console.log("%c" + r, "color: #40FE53; font-weight: bold;"),
    e.forEach((i) => {
      console.log(i);
    }),
    console.log(a),
    console.log(`

`));
}
function ce(r, e) {
  try {
    return (e = e || window.location.href), new URL(r, e).href;
  } catch {
    return r;
  }
}
chrome.runtime.onInstalled.addListener((r) => {
  r.reason === chrome.runtime.OnInstalledReason.INSTALL
    ? (chrome.tabs.create({ url: "https://superdevpro.com/installed" }),
      chrome.runtime.setUninstallURL("https://superdevpro.com/uninstalled"),
      chrome.storage.local.set({ allFeatures: JSON.stringify(O) }),
      chrome.storage.local.set({ allSettings: JSON.stringify(U) }))
    : r.reason === chrome.runtime.OnInstalledReason.UPDATE &&
      (chrome.storage.local.set({ allFeatures: JSON.stringify(O) }),
      chrome.storage.local.get(["allSettings"], (e) => {
        if (!e.allSettings) chrome.storage.local.set({ allSettings: JSON.stringify(U) });
        else {
          let a = U,
            i = JSON.parse(e.allSettings);
          Object.keys(i).forEach((n) => {
            if (a[n] === void 0 || !Object.keys(a[n].settings).length || !Object.keys(i[n].settings).length) return;
            let u = a[n].settings,
              x = i[n].settings;
            Object.keys(x).forEach((f) => {
              u[f] !== void 0 && (u[f] = x[f]);
            });
          }),
            chrome.storage.local.set({ allSettings: JSON.stringify(a) });
        }
      })),
    chrome.contextMenus.create({ title: "Inspect with SuperDev Pro", id: "inspectWith", contexts: ["all"] });
});
chrome.action.onClicked.addListener(() => {
  G();
});
chrome.contextMenus.onClicked.addListener(() => {
  G();
});
function G() {
  chrome.tabs.query({ active: !0, currentWindow: !0 }, (r) => {
    v(r[0].url) &&
      (chrome.tabs.connect(r[0].id, { name: "portBG" }).postMessage({ action: "switchPopup" }),
      chrome.storage.local.get(["userLicense"], (a) => {
        if (a.userLicense) {
          let i = JSON.parse(a.userLicense);
          i.reply || ((i.reply = i.answer), delete i.answer),
            i.license || ((i.license = i.key), delete i.key),
            i.reply === "success" &&
              fetch("https://superdevpro.com/api/check", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ license: i.license }),
                signal: AbortSignal.timeout(15e3),
              })
                .then((n) => {
                  if (!n.ok) throw new Error("Req Failed");
                  return n.json();
                })
                .then((n) => {
                  if (n.reply === "success") {
                    let u = btoa(JSON.stringify({ timestamp: i.timestamp, userAgent: i.userAgent }));
                    n.devices[u] || chrome.storage.local.remove("userLicense");
                  } else chrome.storage.local.remove("userLicense");
                })
                .catch((n) => {
                  let u = [i.license];
                  F("Check License", u, n);
                }),
            chrome.storage.local.set({ userLicense: JSON.stringify(i) });
        }
      }));
  });
}
chrome.runtime.onConnect.addListener((r) => {
  let e, a, i, n;
  r.onMessage.addListener((l) => {
    switch (l.action) {
      case "activateLicense":
        u(l);
        break;
      case "openDocs":
        x();
        break;
      case "getProNow":
        f();
        break;
      case "openWebsite":
        c();
        break;
      case "switchPopup":
        G();
        break;
      case "searchFont":
        b(l);
        break;
      case "routeFonts":
        h(l);
        break;
      case "askScreenshot":
        y();
        break;
      case "askGrayscale":
        E(l);
        break;
      case "askClientRect":
        A(l);
        break;
      case "setColorPicker":
        L(l);
        break;
      case "askColorsAt":
        Y(l);
        break;
      case "routeColors":
        H(l);
        break;
      case "askAllCSS":
        J(l);
        break;
      case "routeImages":
        Z(l);
        break;
    }
  });
  function u(l) {
    fetch("https://superdevpro.com/api/activate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ license: l.license, timestamp: l.timestamp, userAgent: l.userAgent }),
      signal: AbortSignal.timeout(15e3),
    })
      .then((t) => {
        if (!t.ok) throw new Error("Req Failed");
        return t.json();
      })
      .then((t) => {
        r.postMessage({ action: "activateLicense", userLicense: t });
      })
      .catch((t) => {
        let s = { reply: "requestFailed" },
          p = [l.license, l.timestamp, l.userAgent];
        F("Activate License", p, t), r.postMessage({ action: "activateLicense", userLicense: s });
      });
  }
  function x() {
    chrome.tabs.query({ active: !0, currentWindow: !0 }, (l) => {
      chrome.tabs.create({ index: l[0].index + 1, url: "https://docs.superdevpro.com" });
    });
  }
  function f() {
    chrome.tabs.query({ active: !0, currentWindow: !0 }, (l) => {
      chrome.tabs.create({ index: l[0].index + 1, url: "https://superdevpro.com/#pricing" });
    });
  }
  function c() {
    chrome.tabs.query({ active: !0, currentWindow: !0 }, (l) => {
      chrome.tabs.create({ index: l[0].index + 1, url: "https://superdevpro.com" });
    });
  }
  function b(l) {
    let { fontName: t } = l;
    chrome.tabs.query({ active: !0, currentWindow: !0 }, (s) => {
      chrome.tabs.create({ index: s[0].index + 1, url: `https://www.google.com/search?q=${t.toLowerCase()}+font` });
    });
  }
  function h(l) {
    let { allFonts: t } = l;
    chrome.tabs.query({ active: !0, currentWindow: !0 }, (s) => {
      chrome.tabs.connect(s[0].id, { name: "portBG" }).postMessage({ action: "allFonts", allFonts: t });
    });
  }
  function y() {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, (l) => {
      r.postMessage({ action: "recScreenshot", dataURL: l });
    });
  }
  function E(l) {
    (e = new Uint8ClampedArray(l.imageData)), (a = new Int16Array(e.length / 4));
    for (let t = 0, s = 0, p = e.length; t < p; t += 4, s++) {
      let g = e[t],
        m = e[t + 1],
        o = e[t + 2];
      a[s] = Math.round(g * 0.3 + m * 0.59 + o * 0.11);
    }
    (i = l.width), (n = l.height), r.postMessage({ action: "recGrayscale" });
  }
  function A(l) {
    let { input: t } = l,
      s = { top: 0, right: 0, bottom: 0, left: 0 },
      p = { top: { x: 0, y: -1 }, right: { x: 1, y: 0 }, bottom: { x: 0, y: 1 }, left: { x: -1, y: 0 } },
      g = 0,
      m = R(a, t.x, t.y),
      o;
    for (let d in s) {
      let S = p[d],
        I = !1,
        M = t.x,
        C = t.y,
        w;
      for (o = m; !I; )
        (M += S.x), (C += S.y), (w = R(a, M, C)), w > -1 && Math.abs(w - o) < 6 ? (s[d]++, (o = w)) : (I = !0);
      g += s[d];
    }
    if (g <= 6) {
      (s.top = 0), (s.right = 0), (s.bottom = 0), (s.left = 0);
      let d = 8;
      for (let S in s) {
        let I = p[S],
          M = !1,
          C = t.x,
          w = t.y,
          T,
          N = 0;
        for (o = m; !M; )
          (C += I.x),
            (w += I.y),
            (T = R(a, C, w)),
            T > -1
              ? (s[S]++, Math.abs(T - o) < 6 ? (N++, N === d && ((s[S] -= d + 1), (M = !0))) : ((o = T), (N = 0)))
              : (M = !0);
      }
    }
    (s.x = t.x), (s.y = t.y), r.postMessage({ action: "recClientRect", rect: s });
  }
  function R(l, t, s) {
    return D(t, s) ? l[s * i + t] : -1;
  }
  function L(l) {
    (e = new Uint8ClampedArray(l.imageData)), (i = l.width), (n = l.height), r.postMessage({ action: "okColorPicker" });
  }
  function Y(l) {
    let { input: t } = l;
    if (!D(t.x, t.y)) return -1;
    let s = [],
      p = [];
    for (let g = t.y - 4; g <= t.y + 4; g++)
      for (let m = t.x - 4; m <= t.x + 4; m++)
        if (g < 0 || m < 0) s.push({ x: m, y: g }), p.push("rgb(255, 255, 255)");
        else {
          let o = g * i * 4 + m * 4,
            d = e[o],
            S = e[o + 1],
            I = e[o + 2];
          s.push({ x: m, y: g }), p.push(`rgb(${d}, ${S}, ${I})`);
        }
    chrome.storage.local.get(["allSettings"], (g) => {
      let o = { shortSettings: JSON.parse(g.allSettings).colorFormat.settings };
      (p = p.map((d) => ae(o, le(d)))),
        r.postMessage({ action: "recColorsAt", axes: s, colors: p }),
        chrome.tabs.query({ active: !0, currentWindow: !0 }, (d) => {
          chrome.tabs.connect(d[0].id, { name: "portBG" }).postMessage({ action: "recColorsAt", axes: s, colors: p });
        });
    });
  }
  function D(l, t) {
    return l >= 0 && l < i && t >= 0 && t < n;
  }
  function H(l) {
    let { allColors: t } = l;
    chrome.tabs.query({ active: !0, currentWindow: !0 }, (s) => {
      chrome.tabs.connect(s[0].id, { name: "portBG" }).postMessage({ action: "allColors", allColors: t });
    });
  }
  function J(l) {
    let { allCSS: t } = l,
      s = [],
      p = [],
      g = [];
    t.forEach((m, o) => {
      k(m) &&
        p.push(
          fetch(m, { signal: AbortSignal.timeout(15e3) })
            .then((d) => {
              if (!d.ok) throw new Error("Req Failed");
              return d.text();
            })
            .then((d) => {
              (t[o] = d), (s[o] = m);
            })
            .catch((d) => {
              F("Fetch All CSS", [m], d), (t[o] = "");
            })
        );
    }),
      Promise.all(p).then(() => {
        if (
          (t.forEach((m, o) => {
            k(s[o]) &&
              t[o].includes("url(") &&
              [...t[o].matchAll(re)].forEach((S) => {
                let I = S[0],
                  M = S[2];
                if (!k(M) && !ie(M) && !ne(M)) {
                  let C = I.replaceAll(M, ce(M, s[o]));
                  t[o] = t[o].replaceAll(I, C);
                }
              });
          }),
          (t = t.filter((m) => m).join("")),
          t.includes("@import"))
        ) {
          let m = [...t.matchAll(V)],
            o = [...t.matchAll(K)];
          [...new Set(m.concat(o))].forEach((S) => {
            k(S[2]) &&
              g.push(
                fetch(S[2], { signal: AbortSignal.timeout(15e3) })
                  .then((I) => {
                    if (!I.ok) throw new Error("Req Failed");
                    return I.text();
                  })
                  .then((I) => {
                    t = t.replaceAll(S[0], I);
                  })
                  .catch((I) => {
                    let M = [S[2]];
                    F("Fetch Import URL", M, I), (t = t.replaceAll(S[0], ""));
                  })
              );
          });
        }
        Promise.all(g).then(async () => {
          r.postMessage({ action: "allCSS", allCSS: t });
        });
      });
  }
  function Z(l) {
    let { allImages: t } = l;
    chrome.tabs.query({ active: !0, currentWindow: !0 }, (s) => {
      let p = [];
      t.forEach((g, m) => {
        (k(g.src) || oe(g.src) || Q(g.src)) &&
          p.push(
            fetch(g.src, { signal: AbortSignal.timeout(15e3) })
              .then((o) => {
                if (!o.ok) throw new Error("Req Failed");
                return o.blob();
              })
              .then((o) => {
                let d = new FileReader();
                return (
                  d.readAsDataURL(o),
                  new Promise((S) => {
                    d.onloadend = () => {
                      S(d.result);
                    };
                  })
                );
              })
              .then((o) => {
                t[m].src = o;
              })
              .catch((o) => {
                let d = [g.src];
                F("Fetch All Images", d, o), (t[m].src = "");
              })
          );
      }),
        Promise.all(p).then(() => {
          (t = t.filter((m) => Q(m.src))),
            chrome.tabs.connect(s[0].id, { name: "portBG" }).postMessage({ action: "allImages", allImages: t });
        });
    });
  }
});
chrome.tabs.query({}, (r) => {
  r.forEach((e) => {
    v(e.url) &&
      (chrome.scripting.executeScript({
        target: { tabId: e.id },
        files: ["libs/js/jszip.js", "libs/js/filesaver.js", "js/contentscript.js"],
      }),
      chrome.scripting.insertCSS({
        target: { tabId: e.id },
        files: ["libs/css/fafontfaces.css", "css/contentscript.css"],
      }));
  });
});
function ue(r) {
  r.name === "keepAlive" && (setTimeout(() => r.disconnect(), 25e4), r.onDisconnect.addListener(() => P()));
}
async function P(r) {
  let e = r || (await chrome.tabs.query({ url: "*://*/*" }));
  for (let { id: a } of e)
    try {
      await chrome.scripting.executeScript({ target: { tabId: a }, func: B }), chrome.tabs.onUpdated.removeListener(j);
      return;
    } catch {}
  chrome.tabs.onUpdated.addListener(j);
}
function B() {
  chrome.runtime.connect({ name: "keepAlive" }).onDisconnect.addListener(B);
}
function j(r, e, a) {
  return /^https?:/.test(e.url) && P([a]);
}
chrome.runtime.onConnect.addListener(ue);
P();
function $() {
  setInterval(() => {
    chrome.storage.local.get();
  }, 2e4);
}
chrome.runtime.onStartup.addListener($);
$();
