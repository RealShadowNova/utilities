function e(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function t(e,t,i){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,i),i}var i,s,n,r,h,o,a;class l{constructor(l,u,d={}){Object.defineProperty(this,"emitter",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"event",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"filter",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),i.set(this,!1),s.set(this,void 0),n.set(this,[]),r.set(this,0),h.set(this,void 0),o.set(this,null),a.set(this,void 0),this.emitter=l,this.event=u,t(this,h,d.limit??1/0),t(this,s,d.idle),this.filter=d.filter??(()=>!0),e(this,s)&&t(this,o,setTimeout(this.end.bind(this),e(this,s))),t(this,a,this.push.bind(this));const v=this.emitter.getMaxListeners();0!==v&&this.emitter.setMaxListeners(v+1),this.emitter.on(this.event,e(this,a))}get ended(){return e(this,i)}end(){if(e(this,i))return;t(this,i,!0),t(this,n,[]),this.emitter.off(this.event,e(this,a));const s=this.emitter.getMaxListeners();0!==s&&this.emitter.setMaxListeners(s-1)}async next(){if(e(this,n).length){const i=e(this,n).shift();return this.filter(i)?(t(this,r,+e(this,r)+1)>=e(this,h)&&this.end(),e(this,o)&&e(this,o).refresh(),{done:!1,value:i}):this.next()}return e(this,i)?(e(this,o)&&clearTimeout(e(this,o)),{done:!0,value:void 0}):new Promise(t=>{let i=null;e(this,s)&&(i=setTimeout(()=>{this.end(),t(this.next())},e(this,s))),this.emitter.once(this.event,()=>{i&&clearTimeout(i),t(this.next())})})}return(){return this.end(),Promise.resolve({done:!0,value:void 0})}throw(){return this.end(),Promise.resolve({done:!0,value:void 0})}[(i=new WeakMap,s=new WeakMap,n=new WeakMap,r=new WeakMap,h=new WeakMap,o=new WeakMap,a=new WeakMap,Symbol.asyncIterator)](){return this}push(...t){e(this,n).push(t)}}export{l as EventIterator};
//# sourceMappingURL=index.mjs.map
