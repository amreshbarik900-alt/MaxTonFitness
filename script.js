// Mobile menu
const burger=document.getElementById('burger'),menu=document.getElementById('menu');
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded',false)}));

// Pricing toggle
const per={m:'/month',q:'/quarter',y:'/year'};
document.querySelectorAll('.toggle button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.toggle button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  const k=b.dataset.p;
  document.querySelectorAll('.price span').forEach(s=>s.textContent=Number(s.dataset[k]).toLocaleString('en-IN'));
  document.querySelectorAll('.per').forEach(s=>s.textContent=per[k]);
}));

// Contact form (front-end validation; connect to your backend/Formspree to actually send)
const form=document.getElementById('form'),st=document.getElementById('status');
form.addEventListener('submit',e=>{
  e.preventDefault();let ok=true;
  form.querySelectorAll('input,textarea').forEach(f=>{
    const bad=!f.value.trim()||(f.type==='email'&&!/^\S+@\S+\.\S+$/.test(f.value));
    f.classList.toggle('bad',bad);if(bad)ok=false;
  });
  st.style.color=ok?'#4cc38a':'#e5484d';
  st.textContent=ok?'Thanks! We’ll get back to you soon.':'Please fill in your name, a valid email and a message.';
  if(ok)form.reset();
});
document.getElementById('yr').textContent=new Date().getFullYear();

