/* Hero: a living network that runs BFS between two random users and lights the shortest path */
(function(){
  const c=document.getElementById('net'); if(!c) return; const x=c.getContext('2d');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches, D=devicePixelRatio||1;
  let W,H,N=[],E=[],wave=null,path=[],maxLv=0;
  function build(){W=c.width=c.offsetWidth*D;H=c.height=c.offsetHeight*D;const n=Math.round(Math.min(70,c.offsetWidth/14));N=[];E=[];
    for(let i=0;i<n;i++)N.push({x:Math.random()*W,y:Math.random()*H,a:[],vx:(Math.random()-.5)*.25*D,vy:(Math.random()-.5)*.25*D});
    N.forEach((p,i)=>N.map((q,j)=>[j,Math.hypot(p.x-q.x,p.y-q.y)]).filter(o=>o[0]!==i).sort((a,b)=>a[1]-b[1]).slice(0,3).forEach(o=>{if(!p.a.includes(o[0])){p.a.push(o[0]);N[o[0]].a.push(i);E.push([i,o[0]]);}}));}
  function bfs(s,t){const par={[s]:null},lv={[s]:0},q=[s];while(q.length){const u=q.shift();if(u===t)break;N[u].a.forEach(v=>{if(!(v in par)){par[v]=u;lv[v]=lv[u]+1;q.push(v);}});}
    if(!(t in par))return null;const p=[];for(let u=t;u!==null;u=par[u])p.unshift(u);return{p,lv};}
  function pulse(){const r=bfs(Math.random()*N.length|0,Math.random()*N.length|0);if(!r||r.p.length<3)return;wave={t0:performance.now(),lv:r.lv};path=r.p;maxLv=Math.max(...Object.values(r.lv));
    const l=document.getElementById('hops');if(l)l.textContent='Shortest path found: '+(r.p.length-1)+' hops';}
  function draw(now){x.clearRect(0,0,W,H);
    if(!reduce)N.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;});
    x.lineWidth=D;x.strokeStyle='rgba(180,200,235,.16)';E.forEach(([a,b])=>{x.beginPath();x.moveTo(N[a].x,N[a].y);x.lineTo(N[b].x,N[b].y);x.stroke();});
    const reach=wave?(now-wave.t0)/380:-1,found=wave&&reach>maxLv;
    if(found){x.strokeStyle='#FF6B35';x.lineWidth=2.5*D;x.beginPath();path.forEach((i,k)=>k?x.lineTo(N[i].x,N[i].y):x.moveTo(N[i].x,N[i].y));x.stroke();}
    N.forEach((p,i)=>{const hit=wave&&wave.lv[i]!==undefined&&wave.lv[i]<=reach,onP=found&&path.includes(i);
      x.fillStyle=onP?'#FF6B35':hit?'#37C2B0':'#8FA6D0';x.beginPath();x.arc(p.x,p.y,(onP?5:3)*D,0,7);x.fill();});
    if(wave&&reach>maxLv+3)wave=null; if(!reduce)requestAnimationFrame(draw);}
  build();addEventListener('resize',build);pulse();requestAnimationFrame(draw);
  if(!reduce)setInterval(()=>{if(!wave)pulse();},2500);
  c.addEventListener('click',()=>{if(!wave)pulse();});
})();

/* Hospital dashboard (Chart.js) built from the Excel pivot tables */
(function(){
  const sel=document.getElementById('pivotSel'),met=document.getElementById('metricSel'),typ=document.getElementById('typeSel');if(!sel||!window.Chart)return;
  const fmt=n=>n>=100000?'₹'+(n/100000).toFixed(1)+'L':n.toLocaleString('en-IN');
  const K=HOSPITAL.kpi,kp=[['Patients',K.patients],['Total cost','₹'+K.cost.toLocaleString('en-IN')],['Avg stay',K.stay+' days'],['Avg wait',K.wait+' min'],['Avg cost','₹'+K.avgCost.toLocaleString('en-IN')]];
  document.getElementById('kpis').innerHTML=kp.map(k=>`<div class="kpi"><b>${k[1]}</b><span>${k[0]}</span></div>`).join('');
  document.getElementById('insights').innerHTML=HOSPITAL.insights.map(i=>`<li>${i}</li>`).join('');
  Object.keys(HOSPITAL.pivots).forEach(k=>sel.add(new Option(k,k)));
  let ch;const pal=['#14213D','#1B998B','#FF6B35','#5B7DB1','#E9B44C','#8E6C8A','#2F6F8F','#C44536'];
  function metrics(){const p=HOSPITAL.pivots[sel.value];met.innerHTML='';Object.keys(p).filter(k=>k!=='labels').forEach(k=>met.add(new Option(k,k)));render();}
  function render(){const p=HOSPITAL.pivots[sel.value],t=typ.value,m=met.value,pie=t==='doughnut';if(ch)ch.destroy();
    ch=new Chart(document.getElementById('chart'),{type:t,data:{labels:p.labels,datasets:[{label:m,data:p[m],backgroundColor:pie?pal:'#1B998B',borderColor:'#FF6B35',borderWidth:t==='line'?3:0,tension:.3}]},
      options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:pie,position:'bottom'},title:{display:true,text:m+' by '+sel.value.toLowerCase()}},scales:pie?{}:{y:{beginAtZero:true,ticks:{callback:v=>m.includes('₹')?fmt(v):v}}}}});}
  sel.onchange=metrics;met.onchange=render;typ.onchange=render;metrics();
})();

/* Contact form opens the visitor's mail app, so no backend is needed */
document.getElementById('contactForm')?.addEventListener('submit',e=>{e.preventDefault();const f=e.target;
  location.href=`mailto:ayushomprakashpal@gmail.com?subject=${encodeURIComponent('Portfolio message from '+f.name.value)}&body=${encodeURIComponent(f.msg.value+'\n\nFrom: '+f.name.value+' ('+f.email.value+')')}`;});
document.querySelectorAll('.navbar-nav a').forEach(a=>a.addEventListener('click',()=>{const m=document.getElementById('nav');if(m.classList.contains('show'))bootstrap.Collapse.getInstance(m)?.hide();}));
