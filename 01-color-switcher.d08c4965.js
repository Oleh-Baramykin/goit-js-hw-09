const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");let l=null;e.addEventListener("click",(()=>{e.setAttribute("disabled",null),l=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(()=>{clearInterval(l),e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.d08c4965.js.map
