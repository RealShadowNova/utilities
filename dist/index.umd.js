!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SapphireEventIterator={})}(this,(function(e){"use strict";function t(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function i(e,t,i){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,i),i}var s,n,r,h,o,a,l;class u{constructor(e,u,d={}){Object.defineProperty(this,"emitter",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"event",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"filter",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),s.set(this,!1),n.set(this,void 0),r.set(this,[]),h.set(this,0),o.set(this,void 0),a.set(this,null),l.set(this,void 0),this.emitter=e,this.event=u,i(this,o,d.limit??1/0),i(this,n,d.idle),this.filter=d.filter??(()=>!0),t(this,n)&&i(this,a,setTimeout(this.end.bind(this),t(this,n))),i(this,l,this.push.bind(this));const f=this.emitter.getMaxListeners();0!==f&&this.emitter.setMaxListeners(f+1),this.emitter.on(this.event,t(this,l))}get ended(){return t(this,s)}end(){if(t(this,s))return;i(this,s,!0),i(this,r,[]),this.emitter.off(this.event,t(this,l));const e=this.emitter.getMaxListeners();0!==e&&this.emitter.setMaxListeners(e-1)}async next(){if(t(this,r).length){const e=t(this,r).shift();return this.filter(e)?(i(this,h,+t(this,h)+1)>=t(this,o)&&this.end(),t(this,a)&&t(this,a).refresh(),{done:!1,value:e}):this.next()}return t(this,s)?(t(this,a)&&clearTimeout(t(this,a)),{done:!0,value:void 0}):new Promise((e=>{let i=null;t(this,n)&&(i=setTimeout((()=>{this.end(),e(this.next())}),t(this,n))),this.emitter.once(this.event,(()=>{i&&clearTimeout(i),e(this.next())}))}))}return(){return this.end(),Promise.resolve({done:!0,value:void 0})}throw(){return this.end(),Promise.resolve({done:!0,value:void 0})}[(s=new WeakMap,n=new WeakMap,r=new WeakMap,h=new WeakMap,o=new WeakMap,a=new WeakMap,l=new WeakMap,Symbol.asyncIterator)](){return this}push(...e){t(this,r).push(e)}}e.EventIterator=u,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
