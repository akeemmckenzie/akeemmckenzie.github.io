"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[64],{64:(e,o,i)=>{i.d(o,{ImagePreloaderPlugin:()=>s});class r{constructor(){this.src="",this.gif=!1}load(e){e&&(void 0!==e.gif&&(this.gif=e.gif),void 0!==e.height&&(this.height=e.height),void 0!==e.name&&(this.name=e.name),void 0!==e.replaceColor&&(this.replaceColor=e.replaceColor),void 0!==e.src&&(this.src=e.src),void 0!==e.width&&(this.width=e.width))}}class s{constructor(e){this.id="imagePreloader",this._engine=e}async getPlugin(){return await Promise.resolve(),{}}loadOptions(e,o){if(null===o||void 0===o||!o.preload)return;e.preload||(e.preload=[]);const i=e.preload;for(const s of o.preload){const e=i.find((e=>e.name===s.name||e.src===s.src));if(e)e.load(s);else{const e=new r;e.load(s),i.push(e)}}}needsPlugin(){return!0}}}}]);
//# sourceMappingURL=64.f9484ec0.chunk.js.map