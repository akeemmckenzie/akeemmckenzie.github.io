"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[5e3],{5e3:(t,e,a)=>{a.d(e,{RotateUpdater:()=>r});var o=a(4864);class i{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(t){t&&(void 0!==t.enable&&(this.enable=t.enable),void 0!==t.speed&&(this.speed=(0,o.Ws)(t.speed)),void 0!==t.decay&&(this.decay=(0,o.Ws)(t.decay)),void 0!==t.sync&&(this.sync=t.sync))}}class s extends o.S4{constructor(){super(),this.animation=new i,this.direction="clockwise",this.path=!1,this.value=0}load(t){t&&(super.load(t),void 0!==t.direction&&(this.direction=t.direction),this.animation.load(t.animation),void 0!==t.path&&(this.path=t.path))}}const n=2*Math.PI;class r{constructor(t){this.container=t}async init(t){const e=t.options.rotate;if(!e)return;t.rotate={enable:e.animation.enable,value:(0,o.qy)((0,o.qS)(e.value)),min:0,max:n},t.pathRotation=e.path;let a=e.direction;if("random"===a){a=Math.floor(2*(0,o.CE)())>0?"counter-clockwise":"clockwise"}switch(a){case"counter-clockwise":case"counterClockwise":t.rotate.status="decreasing";break;case"clockwise":t.rotate.status="increasing"}const i=e.animation;i.enable&&(t.rotate.decay=1-(0,o.qS)(i.decay),t.rotate.velocity=(0,o.qS)(i.speed)/360*this.container.retina.reduceFactor,i.sync||(t.rotate.velocity*=(0,o.CE)())),t.rotation=t.rotate.value,await Promise.resolve()}isEnabled(t){const e=t.options.rotate;return!!e&&(!t.destroyed&&!t.spawning&&e.animation.enable&&!e.path)}loadOptions(t){t.rotate||(t.rotate=new s);for(var e=arguments.length,a=new Array(e>1?e-1:0),o=1;o<e;o++)a[o-1]=arguments[o];for(const i of a)t.rotate.load(null===i||void 0===i?void 0:i.rotate)}async update(t,e){this.isEnabled(t)&&t.rotate&&((0,o.C2)(t,t.rotate,!1,"none",e),t.rotation=t.rotate.value,await Promise.resolve())}}}}]);
//# sourceMappingURL=5000.9e3ef13e.chunk.js.map