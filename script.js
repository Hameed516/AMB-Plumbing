document.addEventListener('DOMContentLoaded',()=>{
const toggle=document.querySelector('.nav-toggle');
const menu=document.querySelector('.nav-menu');
toggle.addEventListener('click',()=>menu.classList.toggle('active'));

document.querySelectorAll('.nav-menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('active')));

const theme=document.querySelector('.theme-toggle');
const saved=localStorage.getItem('theme');
if(saved)document.documentElement.setAttribute('data-theme',saved);
theme.addEventListener('click',()=>{
const current=document.documentElement.getAttribute('data-theme');
const next=current==='dark'?'light':'dark';
document.documentElement.setAttribute('data-theme',next);
localStorage.setItem('theme',next);
theme.textContent=next==='dark'?'☀️':'🌙';
});
if(saved==='dark')theme.textContent='☀️';

const observer=new IntersectionObserver((entries)=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:0.1});
document.querySelectorAll('section>*').forEach(el=>{
el.classList.add('fade-in');
observer.observe(el);
});

document.getElementById('contactForm').addEventListener('submit',function(e){
e.preventDefault();
const btn=this.querySelector('button');
btn.textContent='Sending...';
setTimeout(()=>{
alert('Thank you! We will contact you shortly.');
this.reset();
btn.textContent='Send Request';
},1000);
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click',function(e){
e.preventDefault();
const target=document.querySelector(this.getAttribute('href'));
if(target)target.scrollIntoView({behavior:'smooth'});
});
});
});
