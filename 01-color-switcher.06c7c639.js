!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");e.addEventListener("click",(function(){r.removeAttribute("disabled"),e.setAttribute("disabled",""),a=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),r.addEventListener("click",(function(){clearInterval(a),r.setAttribute("disabled",""),e.removeAttribute("disabled")})),r.setAttribute("disabled","");var a=null}();
//# sourceMappingURL=01-color-switcher.06c7c639.js.map