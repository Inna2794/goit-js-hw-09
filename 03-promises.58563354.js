!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("h6c0i");function i(e,o){new Promise((function(n,t){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:o}):t({position:e,delay:o})}),o)})).then((function(e){var o=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms")),console.log({position:o,delay:n})})).catch((function(e){var o=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms")),console.log({position:o,delay:n})}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var o=e.currentTarget.delay.valueAsNumber,n=e.currentTarget.step.valueAsNumber,t=e.currentTarget.amount.valueAsNumber;if(o<0||n<0)return alert("Number should be more than zero!!!!");for(var r=1;r<=t;r+=1)i(r,o),o+=n}))}();
//# sourceMappingURL=03-promises.58563354.js.map
