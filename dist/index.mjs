class Bucket{constructor(){Object.defineProperty(this,"delay",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"limit",{enumerable:!0,configurable:!0,writable:!0,value:{timespan:0,maximum:1}}),Object.defineProperty(this,"entries",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}setDelay(e){return this.delay=e,this}setLimit(e){return this.limit=e,this}take(e){const t=Date.now(),i=this.getEntry(e);if(this.limit.maximum>1){if(i.tickets+1>this.limit.maximum){if(0!==i.setTime){const e=i.setTime+this.limit.timespan-t;if(e>0)return e}i.tickets=0}i.setTime=t}if(0!==this.delay&&0!==i.lastTime){const e=i.lastTime+this.delay-t;if(e>0)return e}return++i.tickets,i.lastTime=t,0}getEntry(e){const t=this.entries.get(e);if(t)return t;const i={lastTime:0,setTime:0,tickets:0};return this.entries.set(e,i),i}}export{Bucket};
//# sourceMappingURL=index.mjs.map
