import{a as d,S as h,i as a}from"./assets/vendor-GgwdjDaY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const p="https://pixabay.com/api/";function f(s){return d.get(p,{params:{key:"55989739-dc7d8052769ba2cd59e59f330",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data).catch(o=>{throw o})}const m=document.querySelector(".gallery"),u=document.querySelector(".loader");let g=new h(".gallery a");function y(s){const o=s.map(e=>`
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
      `).join("");m.innerHTML=o,g.refresh()}function w(){m.innerHTML=""}function L(){u.classList.add("is-show")}function v(){u.classList.remove("is-show")}function b(){a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"})}function S(){a.show({message:"Please, fill out the search field!",messageColor:"white",backgroundColor:"red",position:"topRight"})}function E(){a.show({message:"Something went wrong",messageColor:"white",backgroundColor:"red",position:"topRight"})}const l=document.querySelector(".form"),c=l.querySelector("input"),R=s=>{if(s.preventDefault(),c.value.trim()==="")return S();w(),L();const o=c.value.trim();f(o).then(e=>{if(e.hits.length===0)throw new Error("EMPTY_RESULT");y(e.hits)}).catch(e=>{const i=e.message==="EMPTY_RESULT"?b():E();return iziToast.show({message:i,messageColor:"white",backgroundColor:"red",position:"topRight"}),[]}).finally(()=>{v(),l.reset()})};l.addEventListener("submit",R);
//# sourceMappingURL=index.js.map
