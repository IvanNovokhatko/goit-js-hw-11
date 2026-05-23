import{a as d,S as h,i as n}from"./assets/vendor-GgwdjDaY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const f="https://pixabay.com/api/";function p(i){return d.get(f,{params:{key:"55989739-dc7d8052769ba2cd59e59f330",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw t})}const u=document.querySelector(".gallery"),m=document.querySelector(".loader");let g=new h(".gallery a");function y(i){const t=i.map(e=>`
          <li class="gallery-item">
             <a class="gallery-link" href="${e.largeImageURL}">
               <img
                   class="gallery-image"
                   src="${e.webformatURL}"
                   data-source="${e.largeImageURL}"
                    alt="${e.tags}"
              />
             </a>

             <div class="gallery-item-information">
                <div class="item-information-wrapper">
                    <h2>Likes</h2>
                    <p>${e.likes}</p>
                </div>
                <div class="item-information-wrapper">
                    <h2>Views</h2>
                    <p>${e.views}</p>
                </div>
                <div class="item-information-wrapper">
                    <h2>Comments</h2>
                    <p>${e.comments}</p>
                </div>
                <div class="item-information-wrapper">
                    <h2>Downloads</h2>
                    <p>${e.downloads}</p>
                </div>
            </div>
         </li>
      `).join("");u.innerHTML=t,g.refresh()}function w(){u.innerHTML=""}function L(){m.classList.add("is-show")}function v(){m.classList.remove("is-show")}function S(){n.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"})}function b(){n.show({message:"Please, fill out the search field!",messageColor:"white",backgroundColor:"red",position:"topRight"})}function E(){n.show({message:"Something went wrong",messageColor:"white",backgroundColor:"red",position:"topRight"})}const a=document.querySelector(".form"),c=a.querySelector("input"),R=i=>{if(i.preventDefault(),c.value.trim()==="")return b();w(),L();const t=c.value.trim();p(t).then(e=>{if(e.hits.length===0)throw new Error("EMPTY_RESULT");y(e.hits)}).catch(e=>(e.message==="EMPTY_RESULT"?S():E(),[])).finally(()=>{v(),a.reset()})};a.addEventListener("submit",R);
//# sourceMappingURL=index.js.map
