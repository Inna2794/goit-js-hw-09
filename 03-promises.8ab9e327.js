var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=r);var n=r("iQIUW");function i(e,o){new Promise(((t,r)=>{const n=Math.random()>.3;setTimeout((()=>{n?t({position:e,delay:o}):r({position:e,delay:o})}),o)})).then((({position:e,delay:o})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`),console.log({position:e,delay:o})})).catch((({position:e,delay:o})=>{n.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`),console.log({position:e,delay:o})}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let o=e.currentTarget.delay.valueAsNumber;const t=e.currentTarget.step.valueAsNumber,r=e.currentTarget.amount.valueAsNumber;if(o<0||t<0)return alert("Number should be more than zero!!!!");for(let e=1;e<=r;e+=1)i(e,o),o+=t}));
//# sourceMappingURL=03-promises.8ab9e327.js.map