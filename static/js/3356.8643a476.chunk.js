"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[3356],{3356:(e,o,t)=>{t.d(o,{Collider:()=>i});var n=t(4864);async function s(e,o,n,s){switch(e.options.collisions.mode){case"absorb":{const{absorb:i}=await t.e(2696).then(t.bind(t,2696));i(e,o,n,s);break}case"bounce":{const{bounce:n}=await t.e(1787).then(t.bind(t,1787));n(e,o);break}case"destroy":{const{destroy:n}=await t.e(4744).then(t.bind(t,2364));n(e,o);break}}}class i extends n.Cm{constructor(e){super(e)}clear(){}init(){}async interact(e,o){if(e.destroyed||e.spawning)return;const t=this.container,i=e.getPosition(),a=e.getRadius(),c=t.particles.quadTree.queryCircle(i,2*a);for(const r of c){if(e===r||!r.options.collisions.enable||e.options.collisions.mode!==r.options.collisions.mode||r.destroyed||r.spawning)continue;const c=r.getPosition(),l=r.getRadius();if(Math.abs(Math.round(i.z)-Math.round(c.z))>a+l)continue;(0,n.c$)(i,c)>a+l||await s(e,r,o,t.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}}}]);
//# sourceMappingURL=3356.8643a476.chunk.js.map