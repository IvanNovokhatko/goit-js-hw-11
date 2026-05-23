import{a as u,S as f,i as l}from"./assets/vendor-GgwdjDaY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const p="https://pixabay.com/api/";function h(s){return u.get(p,{params:{key:"55989739-dc7d8052769ba2cd59e59f330",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const d=document.querySelector(".gallery"),m=document.querySelector(".loader");let y=new f(".gallery a");function g(s){const o=s.map(e=>`
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
      `).join("");d.innerHTML=o,y.refresh()}function w(){d.innerHTML=""}function L(){m.classList.add("is-show")}function v(){m.classList.remove("is-show")}const n=document.querySelector(".form"),c=n.querySelector("input"),S=s=>{if(s.preventDefault(),c.value.trim()==="")return l.show({message:"Please, fill out the search field!",messageColor:"white",backgroundColor:"red",position:"topRight"});w(),L();const o=c.value.trim();h(o).then(e=>{if(e.data.hits.length===0)throw new Error("EMPTY_RESULT");return e.data}).then(e=>{g(e.hits)}).catch(e=>{const i=e.message==="EMPTY_RESULT"?"Sorry, there are no images matching your search query. Please try again!":"Something went wrong";return l.show({message:i,messageColor:"white",backgroundColor:"red",position:"topRight"}),[]}).finally(()=>{v(),n.reset()})};n.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
