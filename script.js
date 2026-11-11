const surprises = [
  {icon:"💌",title:"Um recado pra você",text:"Maria Eduarda, talvez eu não consiga colocar em palavras tudo o que você significa, mas quero tentar: sua presença deixa meus dias mais especiais. Obrigado por ser você. ❤️"},
  {icon:"🌷",title:"Os detalhes que encantam",text:"É o seu jeitinho, seu sorriso, suas palavras e até as pequenas coisas que talvez você nem perceba. São esses detalhes que fazem você ser tão especial pra mim."},
  {icon:"🌙",title:"Um universo chamado nós",text:"Se cada lembrança boa fosse uma estrela, já existiria um céu inteiro com momentos que eu guardaria com carinho. Que a gente continue criando histórias bonitas, uma de cada vez."},
  {icon:"🤍",title:"Uma promessa de carinho",text:"Prometo valorizar os momentos simples, respeitar seu jeito, torcer pelas suas conquistas e nunca deixar de demonstrar o quanto você é importante. Você merece cuidado e carinho de verdade."}
];
let current = 0;
const tabs = [...document.querySelectorAll(".tab")];
const cardNumber = document.getElementById("cardNumber");
const cardIcon = document.getElementById("cardIcon");
const cardTitle = document.getElementById("cardTitle");
const cardText = document.getElementById("cardText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showSurprise(index){
  current = Math.max(0, Math.min(surprises.length - 1, index));
  const item = surprises[current];
  cardNumber.textContent = `0${current+1} / 0${surprises.length}`;
  cardIcon.textContent = item.icon;
  cardTitle.textContent = item.title;
  cardText.textContent = item.text;
  tabs.forEach((tab,i)=>tab.classList.toggle("active",i===current));
  prevBtn.disabled = current===0;
  nextBtn.innerHTML = current===surprises.length-1 ? 'Ver o final <span>♥</span>' : 'Próxima surpresa <span>→</span>';
  document.querySelector(".reveal-card").animate([{opacity:.45,transform:"translateY(8px)"},{opacity:1,transform:"translateY(0)"}],{duration:350});
}
tabs.forEach(tab=>tab.addEventListener("click",()=>showSurprise(Number(tab.dataset.tab))));
prevBtn.addEventListener("click",()=>showSurprise(current-1));
nextBtn.addEventListener("click",()=>{
  if(current<surprises.length-1) showSurprise(current+1);
  else document.getElementById("finale").scrollIntoView({behavior:"smooth",block:"center"});
});
document.getElementById("startBtn").addEventListener("click",()=>{
  document.getElementById("journey").scrollIntoView({behavior:"smooth"});
  burstHearts(12);
});
document.getElementById("loveBtn").addEventListener("click",()=>{
  document.getElementById("finalMessage").classList.remove("hidden");
  document.getElementById("loveBtn").textContent="Surpresa desbloqueada ♥";
  burstHearts(28);
});
function burstHearts(amount){
  const symbols=["♥","♡","✦","💗"];
  for(let i=0;i<amount;i++){
    const heart=document.createElement("span");
    heart.className="floating-heart";
    heart.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    heart.style.left=(8+Math.random()*84)+"vw";
    heart.style.top=(55+Math.random()*35)+"vh";
    heart.style.animationDelay=(Math.random()*.6)+"s";
    heart.style.color=["#ff78a8","#ffc0d4","#dba5ed"][i%3];
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),3000);
  }
}
showSurprise(0);
