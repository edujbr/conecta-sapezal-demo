import{n as o}from"./index-r0eYOka5.js";function a(e){return e.replace(/[&<>"']/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[i])}function n(e,i,r){e.setAttribute("role","button"),e.setAttribute("tabindex","0"),e.setAttribute("aria-label",r),e.addEventListener("click",t=>{t.stopPropagation(),i()}),e.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),i())})}function d(e,i,r){const t=document.createElement("div");return t.className="cs-mood cursor-pointer",t.innerHTML=`
    <div class="cs-mood-inner" style="display:flex;flex-direction:column;align-items:center;gap:2px;">
      <div style="width:34px;height:34px;border-radius:9999px;background:#fff;border:3px solid ${e.color};box-shadow:0 3px 8px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;font-size:20px;line-height:1">${e.emoji}</div>
      <div style="padding:1px 6px;border-radius:9999px;background:rgba(15,23,42,.72);color:#fff;font:600 9px/1.4 Inter,system-ui,sans-serif;white-space:nowrap">${a(i)}</div>
    </div>`,n(t,r,`Humor de ${i}: ${e.label}`),t}function c(e,i){const r=o(e.categoria),t=document.createElement("div");return t.className="cursor-pointer",t.innerHTML=`
    <div class="animate-pop-in" style="display:flex;flex-direction:column;align-items:center">
      <div style="width:32px;height:32px;border-radius:10px;background:${r.color};border:2px solid #fff;box-shadow:0 3px 8px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;font-size:17px">${r.emoji}</div>
      <div style="width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:7px solid ${r.color};margin-top:-1px"></div>
    </div>`,n(t,i,`Negócio: ${e.nome}`),t}function l(e,i,r){const t=document.createElement("div");return t.className="cursor-pointer",t.innerHTML=`
    <div class="animate-pop-in" style="display:flex;flex-direction:column;align-items:center">
      <div style="width:36px;height:36px;border-radius:9999px;background:${i?"#16a34a":"#7c3aed"};border:3px solid #fde047;box-shadow:0 0 0 4px rgba(124,58,237,.25),0 3px 8px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;font-size:18px">${i?"✅":e.emoji}</div>
    </div>`,n(t,r,`Ponto de check-in: ${e.nome}`),t}function p(e,i){const r=document.createElement("div");return r.className="cursor-pointer",r.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center">
      <div class="animate-bob" style="position:relative;width:46px;height:46px;border-radius:9999px;background:linear-gradient(135deg,#fde047,#22c55e);padding:3px;box-shadow:0 4px 12px rgba(0,0,0,.35)">
        <div style="width:100%;height:100%;border-radius:9999px;background:#fff;display:flex;align-items:center;justify-content:center;font-size:24px">${e}</div>
        <div style="position:absolute;right:-6px;bottom:-4px;width:22px;height:22px;border-radius:9999px;background:#16a34a;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:11px">🏠</div>
      </div>
    </div>`,n(r,i,"Minha casa"),r}function x(e){const i=document.createElement("div");return i.title=`${e.nome} mora por aqui`,i.innerHTML=`<div style="width:24px;height:24px;border-radius:7px;background:rgba(255,255,255,.92);border:1.5px solid #86efac;box-shadow:0 2px 5px rgba(0,0,0,.2);display:flex;align-items:center;justify-content:center;font-size:13px">${e.avatar}</div>`,i}export{l as a,x as b,c,p as d,d as e};
