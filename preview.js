const groups=[...document.querySelectorAll('.catalog-group')], tabs=[...document.querySelectorAll('.menu-tabs button')], search=document.querySelector('.search input');
let active=0;
function filter(){let n=0;groups.forEach((g,i)=>{let visible=0;g.querySelectorAll('.product-card').forEach(card=>{card.hidden=!card.innerText.includes(search?.value||'') && !card.textContent.includes(search?.value||'');if(!card.hidden)visible++});g.hidden=(active>0&&active!==i+1)||!visible;if(!g.hidden)n+=visible});tabs.forEach((t,i)=>t.classList.toggle('selected',i===active));const count=document.querySelector('.catalog-toolbar p');if(count)count.textContent=n+' صنف'}
tabs.forEach((t,i)=>t.onclick=()=>{active=i;filter()});if(search)search.oninput=filter;
const cat=new URLSearchParams(location.search).get('category');if(cat){const i=tabs.findIndex(t=>t.textContent.includes(cat));if(i>0)active=i}filter();
const item=new URLSearchParams(location.search).get('item');if(item&&/^[\w-]+$/.test(item))document.querySelector('img[src*="product-'+item+'-"]')?.closest('article')?.scrollIntoView();
