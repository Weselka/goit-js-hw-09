!function(){var t={body:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")},o=null,n=!1;function e(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.btnStart.addEventListener("click",(function(r){if(n)return;n=!0,t.body.style.backgroundColor=e(),o=setInterval((function(){t.body.style.backgroundColor=e(),console.log("change color")}),1e3)})),t.btnStop.addEventListener("click",(function(t){clearInterval(o),n=!1}))}();
//# sourceMappingURL=01-color-switcher.946eb274.js.map
