document.getElementById('yr').textContent = new Date().getFullYear();
// nav — scrolls away inside the hero; becomes a fixed hide/show bar past it
const nav=document.getElementById('nav');
const heroEl=document.querySelector('.hero');
let lastY=scrollY;
function updateNav(){
  const y=scrollY;
  const heroEnd=heroEl.offsetHeight;
  if(y<heroEnd-80){
    nav.classList.remove('nav-fixed');
    nav.classList.remove('nav-hidden');
    nav.classList.remove('scrolled');
  }else{
    nav.classList.add('nav-fixed');
    nav.classList.toggle('scrolled',y>10);
    if(y>lastY){
      nav.classList.add('nav-hidden');
    }else if(y<lastY){
      nav.classList.remove('nav-hidden');
    }
  }
  lastY=y;
}
addEventListener('scroll',updateNav,{passive:true});
updateNav();
// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// counters (integer or fixed-decimal)
const cio=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;cio.unobserve(e.target);
  const el=e.target,end=+el.dataset.count,suf=el.dataset.suffix||'',dec=+(el.dataset.decimals||0),t0=performance.now(),dur=1400;
  const step=t=>{const p=Math.min((t-t0)/dur,1),v=end*(1-Math.pow(1-p,3));
    el.innerHTML=(dec?v.toFixed(dec):Math.round(v).toLocaleString('en-IN'))+(suf?'<sup>'+suf+'</sup>':'');
    if(p<1)requestAnimationFrame(step)};
  requestAnimationFrame(step);
}),{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));
// draggable scatter photos (desktop only, decorative — resets on refresh)
document.querySelectorAll('.scatter-photo').forEach(el=>{
  let dragging=false,offX=0,offY=0;
  const parent=el.parentElement;
  el.addEventListener('pointerdown',e=>{
    dragging=true;
    el.classList.add('dragging');
    el.setPointerCapture(e.pointerId);
    const r=el.getBoundingClientRect();
    offX=e.clientX-r.left;
    offY=e.clientY-r.top;
    el.style.zIndex=1000;
  });
  el.addEventListener('pointermove',e=>{
    if(!dragging)return;
    const pr=parent.getBoundingClientRect();
    let nx=e.clientX-pr.left-offX;
    let ny=e.clientY-pr.top-offY;
    nx=Math.max(-40,Math.min(nx,pr.width-60));
    ny=Math.max(-20,Math.min(ny,pr.height-60));
    el.style.left=nx+'px';
    el.style.top=ny+'px';
  });
  el.addEventListener('pointerup',e=>{dragging=false;el.classList.remove('dragging');el.releasePointerCapture(e.pointerId)});
});
// horizontal sliders (testimonials, projects) — looped forward only, never jumps back
function initInfiniteSlider(trackId,prevId,nextId,itemSel,autoMs){
  const track=document.getElementById(trackId);
  if(!track)return;
  const baseItems=Array.from(track.children).map(ch=>{
    const c=ch.cloneNode(true);
    c.classList.remove('reveal');
    return c;
  });
  const appendSet=()=>baseItems.forEach(ch=>track.appendChild(ch.cloneNode(true)));
  appendSet();
  const ensureBuffer=()=>{
    const card=track.querySelector(itemSel);
    if(!card)return;
    const gap=parseFloat(getComputedStyle(track).columnGap||22);
    const remaining=track.scrollWidth-(track.scrollLeft+track.clientWidth);
    if(remaining<(card.offsetWidth+gap)*3)appendSet();
  };
  const step=dir=>{
    const card=track.querySelector(itemSel);
    const gap=parseFloat(getComputedStyle(track).columnGap||22);
    track.scrollBy({left:dir*(card.offsetWidth+gap),behavior:'smooth'});
    setTimeout(ensureBuffer,450);
  };
  document.getElementById(prevId)?.addEventListener('click',()=>step(-1));
  document.getElementById(nextId)?.addEventListener('click',()=>step(1));
  let paused=false;
  track.addEventListener('mouseenter',()=>paused=true);
  track.addEventListener('mouseleave',()=>paused=false);
  track.addEventListener('touchstart',()=>paused=true,{passive:true});
  setInterval(()=>{if(!paused)step(1)},autoMs);
}
initInfiniteSlider('quote-track','quote-prev','quote-next','.quote',4800);
initInfiniteSlider('proj-track','proj-prev','proj-next','.pcard',4200);
// lightbox
const lb=document.getElementById('lightbox'),lbi=document.getElementById('lightbox-img');
document.querySelectorAll('.gallery-grid img').forEach(im=>im.addEventListener('click',()=>{lbi.src=im.src;lb.classList.add('open')}));
lb.addEventListener('click',()=>lb.classList.remove('open'));
// form → prefilled email (swap for Formspree endpoint when available)
document.getElementById('csr-form').addEventListener('submit',e=>{
  e.preventDefault();
  const d=Object.fromEntries(new FormData(e.target));
  const body=encodeURIComponent(`Name: ${d.name}\nCompany: ${d.company}\nEmail: ${d.email}\nPhone: ${d.phone||'-'}\n\n${d.message||''}`);
  location.href=`mailto:info@deleadint.com?subject=${encodeURIComponent('CSR Partnership Enquiry from '+d.company)}&body=${body}`;
});
