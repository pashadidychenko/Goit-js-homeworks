(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("Xlt+"),n("SgDD"),n("L1EO"),n("PzF0"),n("JBxO"),n("FdtR");function a(e,t,n,a){fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+e+"&page="+t+"&per_page="+n+"&key=16131668-a6b5f889764d48a111b29e31c").then((function(e){return e.json()})).then((function(e){return a(e.hits)}))}var o=n("dcBu"),i=n("QJ3N"),r=(n("bzha"),n("zrP5"),n("WSJ9"));n("mFSj");i.defaults.width="500px",i.defaults.delay="2000",i.defaults.destroy="false",i.defaultModules.set(r,{});var d,c=n("9va6"),l=0,u=[],s=document.getElementById("gallery"),m=document.getElementById("templateGallery").innerHTML.trim(),g=Handlebars.compile(m),f=document.getElementById("search-form"),p=document.getElementById("divContainer"),h=document.getElementById("loadButton");function b(e){if(0===e.length)return h.classList.add("hide"),Object(i.error)("Image not found");u.push.apply(u,e);var t=g(u);return Object(i.info)("Click button load more for load more images or click on image to see big image"),h.classList.remove("hide"),s.innerHTML=t}f.addEventListener("input",c.debounce((function(e){d=e.target.value,u.splice(0,u.length),a(d,l=1,12,b)}),500)),p.addEventListener("click",(function(e){"img"===e.target.localName&&(o.create('<img src="'+e.target.dataset.bigsrc+'">').show(),Object(i.info)("Click on image to exit"));if("loadButton"!==e.target.id)return;a(d,l+=1,12,b)}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.bb14127fdf5622d844cb.js.map