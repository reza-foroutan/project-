(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const i=async()=>{let n=[];try{n=(await(await fetch("https://reza-foroutan.github.io/json/db.json")).json()).menu.map(e=>e.dropdown&&e.dropdown.length>0?`<div class="dropdown dropdown-hover -mt-[8px]">
                  <div
                    tabindex="0"
                    role="button"
                    class="text-white leading-[40px] font-bold hover:bg-pink-600 px-[10px] box-border cursor-pointer"
                  >
                    ${e.name}
                  </div>
                  <ul
                    tabindex="0"
                    class="dropdown-content  menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                  ${e.dropdown.map(t=>`<li><a href=${t.link}>${t.name}</a></li>`).join(" ")}
                  </ul>
                </div>`:`<div class="w-fit -mt-[8px]"><a href=${e.link} class="block px-[10px] box-border  text-[12px] no-underline capitalize text-white leading-[40px] hover:bg-pink-600 transition-all duration-200">${e.name}</a></div>`),document.querySelector(".menu nav").innerHTML=n.join(" ")}catch(r){console.log(r.message)}},c=async()=>{let n=[];try{n=(await(await fetch("https://reza-foroutan.github.io/json/db.json")).json()).slider.map(e=>`<div class="swiper-slide">
              <img src=${e.imgae} alt=${e.alt} />
            </div>`),document.querySelector(".swiper-wrapper").innerHTML=n.join(" ")}catch(r){console.log(r.message)}},l=async()=>{let n=[];try{let a=await(await fetch("https://reza-foroutan.github.io/json/db.json")).json();a&&a.length>0&&(n=a.products.map(e=>`
          <div class="product w-[45%] h-[300px] bg-[#f5f5f5] p-[10px] box-border">
          <h1 class="text-center text-[12px] font-bold">${e.title}</h1>
          <h1 class="text-center text-[12px] font-bold">${e.price}</h1>
          <h1 class="text-center text-[12px] font-bold">${e.category}</h1>
          <h1 class="text-center text-[12px] font-bold">${e.description}</h1>
          <img src=${e.image} class="w-[60%] block mx-auto" alt=${e.title} />
          <div c>
            <h1 class="text-center text-[12px] font-bold">${e.rating.rate}</h1>
            <h1 class="text-center text-[12px] font-bold">${e.rating.count}</h1>
          </div>
        </div>
        `),document.querySelector(".products").innerHTML+=n.join(" "))}catch(r){console.error("Error fetching products:",r)}};function d(){new Swiper(".mySwiper",{spaceBetween:0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function p(n){await i(),await c(),await l(),d()}p();
