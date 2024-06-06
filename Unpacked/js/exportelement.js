chrome.tabs.query({ active: !0, currentWindow: !0 }, (o) => {
  chrome.runtime.onConnect.addListener((i) => {
    i.onMessage.addListener((t) => {
      var n;
      o[0].id === ((n = i.sender.tab) == null ? void 0 : n.id) && t.action === "exportElementJS" && d(t);
    });
    function d(t) {
      let n = JSON.stringify({
          title: "SuperDev Pro - Exported Element",
          description: "Copied with SuperDev Pro",
          html: t.finalHTML,
          css: t.finalCSS,
          js: "/* Copied with SuperDev Pro https://superdevpro.com */",
          tags: ["SuperDev Pro"],
        }),
        e = document.createElement("form");
      e.setAttribute("action", "https://codepen.io/pen/define"),
        e.setAttribute("method", "POST"),
        e.setAttribute("target", "_blank");
      let r = document.createElement("input");
      (r.type = "hidden"),
        (r.name = "data"),
        (r.value = n),
        e.appendChild(r),
        document.documentElement.appendChild(e),
        e.submit(),
        e.remove();
    }
  });
});
