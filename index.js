import{i as u,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="46816597-00495df87fc70f19aecba95fd",a=document.querySelector(".loader");function m(s,o){new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});const i="https://pixabay.com/api/?${searchParams}";a.style.display="block",fetch(i).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{const e=r.hits;e.length===0&&u.error({title:"No pictures found",message:"Sorry, there are no images matching your search query. Please try again",messageColor:"black",messageSize:"14px",position:"topCenter",timeout:2500,closeOnClick:!0}),a.style.display="none",o(e)}).catch(r=>console.log(r))}const d=new p(".gallery a",{captionData:"alt"});function h(s){const o=s.map(({webformatURL:i,largeImageURL:r,tags:e,likes:t,views:n,comments:c,downloads:l})=>`
                <li class='gallery-item'>
                <a href='${r}'>
                <img src='${i}' alt='${e}'>
                </a>
         <div class='info'>
         
<div class='info-item'>
  <p class='main'>Likes</p>
  <p>${t}</p>
</div>

<div class='info-item'>
  <p class='main'>Views</p>
  <p>${n}</p>
</div>

<div class='info-item'>
  <p class='main'>Comments</p>
  <p>${c}</p>
</div>

<div class='info-item'>
  <p class='main'>Downloads</p>
  <p>${l}</p>
</div>
        </div>

                </li> 
                `).join("");gallery.innerHTML=o,d.refresh()}const y=document.querySelector(".js-search"),g=document.querySelector(".gallery");y.addEventListener("submit",s=>{s.preventDefault(),g.innerHTML="";const o=s.target.elements.search.value;o.trim()!==""&&m(o,h)});
//# sourceMappingURL=index.js.map
