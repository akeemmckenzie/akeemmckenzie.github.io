"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[1176],{1176:(t,c,i)=>{i.d(c,{clickAttract:()=>s,hoverAttract:()=>u});var n=i(4864);const e=1,o=1,a=0;function r(t,c,i,a,r){const s=t.actualOptions.interactivity.modes.attract;if(!s)return;const u=t.particles.quadTree.query(a,r);for(const f of u){const{dx:t,dy:a,distance:r}=(0,n.If)(f.position,c),u=s.speed*s.factor,p=(0,n.qk)((0,n.Q3)(s.easing)(o-r/i)*u,e,s.maxSpeed),l=n.Cg.create(r?t/r*p:u,r?a/r*p:u);f.position.subFrom(l)}}function s(t,c){t.attract||(t.attract={particles:[]});const{attract:i}=t;if(i.finish||(i.count||(i.count=0),i.count++,i.count===t.particles.count&&(i.finish=!0)),i.clicking){const i=t.interactivity.mouse.clickPosition,e=t.retina.attractModeDistance;if(!e||e<a||!i)return;r(t,i,e,new n.um(i.x,i.y,e),(t=>c(t)))}else!1===i.clicking&&(i.particles=[])}function u(t,c){const i=t.interactivity.mouse.position,e=t.retina.attractModeDistance;!e||e<a||!i||r(t,i,e,new n.um(i.x,i.y,e),(t=>c(t)))}}}]);
//# sourceMappingURL=1176.ab54afa6.chunk.js.map