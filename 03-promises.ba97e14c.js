var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var n=r("iQIUW");function i(e,t){return new Promise(((o,r)=>{const n=Math.random()>.3;setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:o,amount:r}=e.currentTarget.elements,l={delay:t.value,step:o.value,amount:r.value};let a=Number(l.delay),u=Number(l.step),s=Number(l.amount);if(a<0||u<0||s<0)return void n.Notify.failure("Data must be positive");for(let e=1;e<=s;e+=1)i(e,a).then((({position:e,delay:t})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{n.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),a+=u;e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.ba97e14c.js.map