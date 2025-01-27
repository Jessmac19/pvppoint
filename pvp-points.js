"use strict";(()=>{var m=Object.defineProperty;var E=(t,e,r)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var s=(t,e,r)=>E(t,typeof e!="symbol"?e+"":e,r);var f={CHEVRON_UP:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>',CHEVRON_DOWN:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-chevron-down"
>
  <path d="m6 9 6 6 6-6" />
</svg>`},i=f;var a=class{constructor(e,r,l){s(this,"parent");s(this,"values");s(this,"chevron");s(this,"valueEl");s(this,"valueIndex",0);s(this,"valuesEl");s(this,"onChange");if(this.onChange=()=>{},this.parent=document.getElementByIdSafe(e),this.values=r,this.chevron=document.getElementByIdSafe(e+"-chevron"),this.valueEl=document.getElementByIdSafe(e+"-value"),l&&(this.valueIndex=this.values.indexOf(l),this.valueIndex===-1))throw new Error("Default dropdown value must be within the values array");this.valueEl.innerText=this.values[this.valueIndex],this.valuesEl=document.createElement("div"),this.valuesEl.classList.add("hidden","top-full","left-0","absolute","flex","flex-col","min-w-full","z-10","bg-neutral-900"),this.parent.appendChild(this.valuesEl),this.parent.onclick=()=>{this.valuesEl.classList.toggle("hidden"),this.chevron.innerHTML=this.valuesEl.classList.contains("hidden")?i.CHEVRON_DOWN:i.CHEVRON_UP},window.addEventListener("click",n=>{!this.valuesEl.contains(n.target)&&!this.parent.contains(n.target)&&(this.valuesEl.classList.add("hidden"),this.chevron.innerHTML=i.CHEVRON_DOWN)});for(let n=0;n<this.values.length;n++){let o=document.createElement("div");o.innerText=this.values[n],o.classList.add("border-t","border-l","border-r","first:rounded-t","last:rounded-b","last:border-b","border-neutral-600","hover:border-neutral-500","focus:border-neutral-500","hover:border","focus:border","cursor-pointer"),o.onclick=()=>{this.selectElement(n)},this.valuesEl.appendChild(o)}}selectElement(e){this.valueIndex=e,this.valueEl.innerText=this.values[e],this.onChange(this.values[e])}get value(){return this.values[this.valueIndex]}};function v(){Document.prototype.getElementByIdSafe=function(t){let e=this.getElementById(t);if(!e)throw new Error(`Expected element with id ${t} but found none.`);return e}}function w(){v();let t=document.getElementByIdSafe("pvp-point-value"),e=document.getElementByIdSafe("pvp-users-point-value"),r=25e7,l=.3,n=10,o=()=>r*l/1e6,u=()=>{t.innerText=`$${o().toFixed(2)}`,d()},d=()=>{e.innerText=`Your points are worth $${(o()*n).toFixed(2)}`};u();let p=new a("pvp-market-cap",["$25M","$50M","$100M","$250M","$500M","$1B","$2B","$5B"],"$250M");p.onChange=c=>{r=x(c),u()};let g=new a("pct-airdrop",["10%","20%","30%","40%","50%","60%","70%","80%"],"30%");g.onChange=c=>{l=M(c),u()};let h=document.getElementByIdSafe("pvp-user-points");h.onchange=()=>{n=parseInt(h.value),d()}}function x(t){switch(t){case"$25M":return 25e6;case"$50M":return 5e7;case"$100M":return 1e8;case"$250M":return 25e7;case"$500M":return 5e8;case"$1B":return 1e9;case"$2B":return 2e9;case"$5B":return 5e9;default:throw new Error("Invalid value in getMC")}}function M(t){switch(t){case"10%":return .1;case"20%":return .2;case"30%":return .3;case"40%":return .4;case"50%":return .5;case"60%":return .6;case"70%":return .7;case"80%":return .8;default:throw new Error("Invalid value in getPCT")}}window.addEventListener("DOMContentLoaded",w);})();
//# sourceMappingURL=pvp-points.js.map
