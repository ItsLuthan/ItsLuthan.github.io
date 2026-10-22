const wa = (m)=>`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(m)}`;
document.querySelectorAll("a.wa").forEach(a=>{a.href=wa("Halo admin Luthan Joki FF, saya mau order joki.");a.target="_blank";a.rel="noopener"});

document.getElementById("priceGrid").innerHTML = PAKET.map(p=>`
 <div class="pc"><h3>${p.from} → ${p.to}</h3>
  <div class="rk"><b style="background:${p.c[0]}33;color:${p.c[0]};box-shadow:inset 0 0 0 2px ${p.c[0]}">${p.from[0]}</b><em>›</em><b style="background:${p.c[1]}33;color:${p.c[1]};box-shadow:inset 0 0 0 2px ${p.c[1]}">${p.to[0]}</b></div>
  <div class="amt">${p.price}</div><small>Proses ${p.time}</small>
  <a class="btn o" target="_blank" rel="noopener" href="${wa(`Halo admin, saya mau order joki ${p.from} → ${p.to} (${p.price})`)}">💬 Order via WhatsApp</a></div>`).join("")+
 `<div class="pick"><h3>Pilih Paket Sesuai Kebutuhanmu</h3><ul class="ck"><li>Proses cepat &amp; aman</li><li>Harga bersaing</li><li>Bisa request jadwal</li><li>Garansi jika terjadi masalah</li></ul></div>`;

// testimoni slider
let pg=0;const per=()=>innerWidth<980?1:2,pages=()=>Math.ceil(TESTI.length/per());
function draw(){
 const s=pg*per();
 document.getElementById("tm").innerHTML=TESTI.slice(s,s+per()).map(x=>`<div class="t"><div class="u"><div class="av">${x.n[0]}</div><div><strong>${x.n}</strong><span class="st">★★★★★</span></div></div>${x.t}<br><span class="bd">${x.r}</span></div>`).join("");
 document.getElementById("dots").innerHTML=Array.from({length:pages()},(_,i)=>`<span class="${i===pg?"on":""}"></span>`).join("");
}
document.getElementById("next").onclick=()=>{pg=(pg+1)%pages();draw()};
document.getElementById("prev").onclick=()=>{pg=(pg-1+pages())%pages();draw()};
addEventListener("resize",()=>{pg=0;draw()});draw();

// menu mobile
const L=document.getElementById("links");
document.getElementById("burger").onclick=()=>L.classList.toggle("open");
L.querySelectorAll("a").forEach(a=>a.onclick=()=>L.classList.remove("open"));

// pindah halaman lewat menu (tanpa scroll)
const PAGES=["beranda","harga","order","testimoni","faq","kontak"];
function showPage(){
 let h=location.hash.slice(1);if(!PAGES.includes(h))h="beranda";
 document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id==="page-"+h));
 document.querySelectorAll(".links a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+h));
 scrollTo(0,0);
}
addEventListener("hashchange",showPage);showPage();
