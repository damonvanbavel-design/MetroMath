const {STATIONS,F,parseAns,rawIsSimplest}=require('./load-core.js');
let errs=0,n=0;const bad=s=>/undefined|NaN|null|\[object/.test(s);
const strip=h=>h.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
for(const s of STATIONS){ if(s.boss) continue;
 for(const l of [1,2,3]) for(let i=0;i<3000;i++){ n++;
  let q; try{q=s.gen(l)}catch(e){errs++;console.log('THROW',s.id,l,e.message);continue}
  const all=[q.html,...q.hints,...q.sol.map(x=>x.eq+(x.why||''))].join('|');
  if(!(q.ans instanceof F)||bad(all)||q.hints.length!==3||!q.sol.length){errs++; if(errs<15) console.log('BAD',s.id,l,strip(all));}
  if(q.diag(q.ans)){ /* diag on right answer should never fire */ errs++; if(errs<15) console.log('DIAGRIGHT',s.id,strip(q.html),q.ans+'',q.diag(q.ans));}
  // answer typed back round-trips
  const typed=q.ans.toString(); const x=parseAns(typed);
  const ok=q.check? q.check(typed,x).ok : x.eq(q.ans);
  if(!ok){errs++; console.log('ROUNDTRIP',s.id,typed);}
  // controle lines
  for(const st of q.sol){ const m=strip(st.eq).match(/links (\S+), rechts (\S+)/); if(m && m[1]!==m[2]){errs++;console.log('CONTROLE',s.id,strip(q.html),strip(st.eq));} }
  // final sol line should contain answer for numeric
  const last=strip(q.sol.filter(x=>!/Controle/.test(x.eq)).slice(-1)[0].eq).replace(/−/g,'-');
  const ansTxt=q.ans.d===1? String(q.ans.n) : null;
  if(ansTxt!==null && !new RegExp('(^|[^0-9])'+ansTxt.replace('-','\\-')+'([^0-9]|$)').test(last.replace(/- /g,'-'))){ errs++; if(errs<30) console.log('LASTLINE',s.id,l,strip(q.html),'|',last,'| ans',ansTxt);}
 }
 for(let i=0;i<500;i++){ const m=s.mc(); if(bad(m.lines.join()+m.explain)||m.wrong<1||m.wrong>=m.lines.length){errs++;console.log('MC',s.id,m)} }
}
console.log('parse', ['-3','−3','2,5','3/4','-3/4','6/8','','3/','1/0','.5'].map(t=>t+'='+parseAns(t)).join(' '));
console.log('simplest', rawIsSimplest('3/4'), rawIsSimplest('6/8'));
console.log(n,'vragen, fouten:',errs);
