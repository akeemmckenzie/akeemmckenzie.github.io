"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[2020],{2020:(e,a,i)=>{i.d(a,{ImageDrawer:()=>o});var t=i(4864);class o{constructor(e){this.loadImageShape=async e=>{var a;if(!this._engine.loadImage)throw new Error("".concat(t.iQ," image shape not initialized"));await this._engine.loadImage({gif:e.gif,name:e.name,replaceColor:null!==(a=e.replaceColor)&&void 0!==a&&a,src:e.src})},this._engine=e}addImage(e){this._engine.images||(this._engine.images=[]),this._engine.images.push(e)}async draw(e){const{context:a,radius:t,particle:o,opacity:n}=e,s=o.image,l=null===s||void 0===s?void 0:s.element;if(s){if(a.globalAlpha=n,s.gif&&s.gifData){const{drawGif:a}=await i.e(2840).then(i.bind(i,2840));a(e)}else if(l){const e=s.ratio,i={x:-t,y:-t},o=2*t;a.drawImage(l,i.x,i.y,o,o/e)}a.globalAlpha=1}}getSidesCount(){return 12}async init(e){const a=e.actualOptions;if(a.preload&&this._engine.loadImage)for(const i of a.preload)await this._engine.loadImage(i)}async loadShape(e){if("image"!==e.shape&&"images"!==e.shape)return;this._engine.images||(this._engine.images=[]);const a=e.shapeData;if(!a)return;this._engine.images.find((e=>e.name===a.name||e.source===a.src))||(await this.loadImageShape(a),await this.loadShape(e))}async particleInit(e,a){var t,o,n;if("image"!==a.shape&&"images"!==a.shape)return;this._engine.images||(this._engine.images=[]);const s=this._engine.images,l=a.shapeData;if(!l)return;const r=a.getFillColor(),g=s.find((e=>e.name===l.name||e.source===l.src));if(!g)return;const c=null!==(t=l.replaceColor)&&void 0!==t?t:g.replaceColor;if(g.loading)return void setTimeout((()=>{this.particleInit(e,a)}));let h;if(g.svgData&&r){const{replaceImageColor:e}=await Promise.resolve().then(i.bind(i,2360));h=await e(g,l,r,a)}else{var m;h={color:r,data:g,element:g.element,gif:g.gif,gifData:g.gifData,gifLoopCount:g.gifLoopCount,loaded:!0,ratio:l.width&&l.height?l.width/l.height:null!==(m=g.ratio)&&void 0!==m?m:1,replaceColor:c,source:l.src}}h.ratio||(h.ratio=1);const p={image:h,fill:null!==(o=l.fill)&&void 0!==o?o:a.shapeFill,close:null!==(n=l.close)&&void 0!==n?n:a.shapeClose};a.image=p.image,a.shapeFill=p.fill,a.shapeClose=p.close}}}}]);
//# sourceMappingURL=2020.c6a8c7b3.chunk.js.map