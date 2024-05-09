(()=>{"use strict";var t={800:(t,i,e)=>{e.d(i,{Z:()=>h});var s=e(81),n=e.n(s),o=e(645),a=e.n(o)()(n());a.push([t.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:0}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}body{width:100%}html{background-color:#afb3c9}body{width:fit-content;max-width:1200px;margin:0 auto;text-align:center}h3{font-size:20px;display:block}#left{display:flex;flex-direction:column;justify-content:space-around;width:20%}#left h3{font-weight:bolder}#left h4{position:relative;display:block;height:fit-content}#left .settings-div{height:20%;display:flex;flex-direction:column;justify-content:space-around}#left .settings-div .control-button,#left .settings-div .sound-button{height:max-content;border-radius:50%;font-size:larger;padding:10px;border:none}#left .speed-div{height:30%;display:flex;flex-direction:column;justify-content:space-around}#main{width:100%;display:flex;padding:20px 0;border-radius:20px;background-color:#4d4f59;height:50vh;justify-content:space-around}#canvas-container{position:relative;width:fit-content;height:fit-content;text-align:left;align-self:center}#game{position:absolute;top:0;left:0}#right{display:flex;flex-direction:column;justify-content:space-around;width:15%}#right a{margin:0 10px;color:#d53200;display:flex;flex-direction:column;align-items:center;text-decoration:none}#right a:visited{color:#d58a00}#right a:first-child{animation-duration:4s;animation-name:shake;animation-iteration-count:infinite;animation-direction:normal}@keyframes shake{0%{transform:rotate(1deg)}1%{transform:rotate(-1deg)}2%{transform:rotate(1deg)}3%{transform:rotate(-1deg)}4%{transform:rotate(1deg)}5%{transform:rotate(-1deg)}6%{transform:scale(1, 1)}}#right a p{display:block;margin-top:10px;font-size:larger}#right img{width:100%;max-width:225px}h2{display:block;font-size:larger;height:20px}header{display:flex;justify-content:space-around;font-size:40px;align-items:center;min-height:50px;margin-bottom:2vh}header a{text-decoration:none;color:#d53200;transition:.2s}header a:hover{color:#d58a00}',""]);const h=a},645:t=>{t.exports=function(t){var i=[];return i.toString=function(){return this.map((function(i){var e="",s=void 0!==i[5];return i[4]&&(e+="@supports (".concat(i[4],") {")),i[2]&&(e+="@media ".concat(i[2]," {")),s&&(e+="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {")),e+=t(i),s&&(e+="}"),i[2]&&(e+="}"),i[4]&&(e+="}"),e})).join("")},i.i=function(t,e,s,n,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(s)for(var h=0;h<this.length;h++){var r=this[h][0];null!=r&&(a[r]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);s&&a[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),i.push(c))}},i}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var i=[];function e(t){for(var e=-1,s=0;s<i.length;s++)if(i[s].identifier===t){e=s;break}return e}function s(t,s){for(var o={},a=[],h=0;h<t.length;h++){var r=t[h],l=s.base?r[0]+s.base:r[0],c=o[l]||0,d="".concat(l," ").concat(c);o[l]=c+1;var m=e(d),p={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==m)i[m].references++,i[m].updater(p);else{var g=n(p,s);s.byIndex=h,i.splice(h,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function n(t,i){var e=i.domAPI(i);return e.update(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap&&i.supports===t.supports&&i.layer===t.layer)return;e.update(t=i)}else e.remove()}}t.exports=function(t,n){var o=s(t=t||[],n=n||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var h=e(o[a]);i[h].references--}for(var r=s(t,n),l=0;l<o.length;l++){var c=e(o[l]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}o=r}}},569:t=>{var i={};t.exports=function(t,e){var s=function(t){if(void 0===i[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}i[t]=e}return i[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}},216:t=>{t.exports=function(t){var i=document.createElement("style");return t.setAttributes(i,t.attributes),t.insert(i,t.options),i}},565:(t,i,e)=>{t.exports=function(t){var i=e.nc;i&&t.setAttribute("nonce",i)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var i=t.insertStyleElement(t);return{update:function(e){!function(t,i,e){var s="";e.supports&&(s+="@supports (".concat(e.supports,") {")),e.media&&(s+="@media ".concat(e.media," {"));var n=void 0!==e.layer;n&&(s+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),s+=e.css,n&&(s+="}"),e.media&&(s+="}"),e.supports&&(s+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),i.styleTagTransform(s,t,i.options)}(i,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)}}}},589:t=>{t.exports=function(t,i){if(i.styleSheet)i.styleSheet.cssText=t;else{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(document.createTextNode(t))}}}},i={};function e(s){var n=i[s];if(void 0!==n)return n.exports;var o=i[s]={id:s,exports:{}};return t[s](o,o.exports,e),o.exports}e.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},e.d=(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},e.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),e.nc=void 0,(()=>{function t(t,i){let e=[i[0][0],i[1][0]],s=[i[0][1],i[3][1]];return t.some((t=>{let[i,n]=t;return e[0]<=i&&i<=e[1]&&s[0]<=n&&n<=s[1]}))}const i=class{constructor(t,i,e=[0,0],s=[0,0],n=[10,10]){this.position=[e[0]*i.scale,e[1]*i.scale],this.dimensions=[n[0]*i.scale,n[1]*i.scale],this.velocity=s,this.context=t,this.game=i,this.facingRight=!0}move(t){this.position=[this.position[0]+this.velocity[0]*t*this.game.scale,this.position[1]+this.velocity[1]*t*this.game.scale]}draw(t="red"){this.context.fillStyle=t,this.context.fillRect(...this.position,...this.dimensions)}destroy(){this.game.objects.delete(this)}collisionBox(){return[this.position,[this.position[0]+this.dimensions[0],this.position[1]],[this.position[0]+this.dimensions[0],this.position[1]+this.dimensions[1]],[this.position[0],this.position[1]+this.dimensions[1]]]}collides(i){let e=this.collisionBox(),s=i.collisionBox();return t(e,s)||t(s,e)}},s=class extends i{constructor(t,i){super(t,i,[i.dimensions[0]/4,5],[5,0],[45*i.scale,45*i.scale]),this.addListeners(),this.standing=!1,this.footing=void 0,this.spriteSheetRight=new Image,this.spriteSheetRight.src="./runnerRight.png",this.spriteSheetLeft=new Image,this.spriteSheetLeft.src="./runnerLeft.png",this.spriteState=0,this.relativeSpeed=0,this.death=!1,this.topSpeed=17,this.keysDown={},this.coolDown={},this.distTraveled=0}move(t){if(this.standing?this.velocity=[.995*this.velocity[0],this.footing.velocity[1]]:this.velocity=[this.velocity[0],Math.min(this.velocity[1]+.4,16)],this.velocity[1]>=0&&Array.from(this.game.platforms).some((t=>this.collides(t)&&(this.footing=t)))){if(!this.standing){const t=Math.floor(this.velocity[1]/4);this.velocity[1]=this.footing.velocity[1],this.rolling=!0,setTimeout((()=>{this.coolDown.jump=!1,this.rolling=!1}),125*t),this.standing=!0,this.position[1]=this.footing.position[1]-this.dimensions[0]+5*this.game.scale}}else this.footing=void 0,this.standing=!1;const i=[this.position[0]+this.velocity[0]*t*this.game.scale,this.position[1]+this.velocity[1]*t*this.game.scale];this.distTraveled+=this.velocity[0]*t,i[0]/this.game.dimensions[0]>.35||i[0]/this.game.dimensions[0]<.2?(this.game.scrollX(-this.velocity[0]*t*this.game.scale),this.position[1]=i[1]):this.position=i}spriteArgs(){this.spriteState=(this.spriteState+1)%48;let t=[40*Math.floor(this.spriteState/6),1];const i=this.velocity[0]-(this.footing?.velocity[0]||0);return this.rolling?t=[200+40*Math.floor(this.spriteState/16),80]:!this.standing&&this.velocity[1]<-4?t=[2,80]:!this.standing&&this.velocity[1]<-1?t=[42,80]:!this.standing&&this.velocity[1]<=1?t=[82,80]:!this.standing&&this.velocity[1]>5?t=[162,80]:!this.standing&&this.velocity[1]>1?t=[122,80]:this.standing&&Math.abs(i)<1&&this.position[0]>0?(t=[202,80],this.velocity[0]=this.footing.velocity[0]):this.standing&&(t[1]=41,this.facingRight=i>0),[...t,39,39,this.position[0],this.position[1]-4,this.dimensions[0],this.dimensions[1]]}draw(){!1===this.facingRight?this.context.drawImage(this.spriteSheetLeft,...this.spriteArgs()):this.context.drawImage(this.spriteSheetRight,...this.spriteArgs())}addListeners(){document.addEventListener("keydown",function(t){" "==t.key&&this.standing?(t.preventDefault(),this.jump(),this.keysDown[t.key]||=setInterval(this.jump.bind(this),300)):"ArrowRight"==t.key||"d"==t.key?(t.preventDefault(),this.keysDown[t.key]||=setInterval(function(){this.standing&&!this.rolling&&(this.velocity[0]>0?(this.velocity=[Math.min(1.3*this.velocity[0],this.topSpeed),this.velocity[1]],this.facingRight=!0):0===this.velocity[0]?(this.facingRight=!0,this.velocity[0]+=2):this.velocity=[Math.ceil(.8*this.velocity[0]),this.velocity[1]])}.bind(this),100)):"ArrowLeft"!=t.key&&"a"!=t.key||(t.preventDefault(),this.keysDown[t.key]||=setInterval(function(){this.standing&&!this.rolling&&(this.velocity[0]<0?this.velocity=[Math.max(1.3*this.velocity[0],-this.topSpeed),this.velocity[1]]:0===this.velocity[0]?(this.velocity[0]-=2,this.facingRight=!1):(this.facingRight=!1,this.velocity=[Math.floor(.8*this.velocity[0]),this.velocity[1]]))}.bind(this),100))}.bind(this)),document.addEventListener("keyup",function(t){clearInterval(this.keysDown[t.key]),delete this.keysDown[t.key]}.bind(this))}jump(){this.coolDown.jump||(this.position=[this.position[0],this.position[1]-7],this.velocity=[this.velocity[0],-18],this.coolDown.jump=!0,this.standing=!1,this.footing=void 0)}collisionBox(){return[[this.position[0],this.position[1]+.9*this.dimensions[1]],[this.position[0]+this.dimensions[0],this.position[1]+.9*this.dimensions[1]],[this.position[0]+this.dimensions[0],this.position[1]+this.dimensions[1]],[this.position[0],this.position[1]+this.dimensions[1]]]}},n=class extends i{constructor(t,i,e,s=[-1,0]){const n=.7*i.scale/Math.abs(1/s[0]);super(t,i,e,s,[n,n])}move(t){super.move(t),this.position[0]<0-this.dimensions[0]-50&&this.destroy()}draw(){super.draw("white")}destroy(){this.game.objects.delete(this)}},o=class{constructor(t,i,e=[0,0],s=[0,0],n=[10,10]){this.position=[e[0]*i.scale,e[1]*i.scale],this.dimensions=[n[0]*i.scale,n[1]*i.scale],this.velocity=s,this.context=t,this.game=i}move(t){this.position=[this.position[0]+this.velocity[0]*t*this.game.scale,this.position[1]+this.velocity[1]*t*this.game.scale]}draw(t="white"){this.context.fillStyle=t,this.context.fillRect(...this.position,...this.dimensions)}destroy(){this.game.objects.delete(this)}collisionBox(){return null}collides(){return!1}},a=class extends o{constructor(t,i){super(t,i,[28,28],[0,0],[120,30])}draw(){if(!this.game.player)return null;const t=(this.game.player.velocity[0]-(this.game.player.footing?.velocity[0]||0))/(17-(this.game.player.footing?.velocity[0]||0));this.context.fillStyle="white",this.context.font="16px serif",this.context.fillText("Speed",this.position[0],this.position[1]+16,this.dimensions[0]),this.context.fillStyle="blue",this.context.fillRect(this.position[0],this.position[1]-20,t*this.dimensions[0],20),this.context.strokeStyle="black",this.context.strokeRect(this.position[0],this.position[1]-20,this.dimensions[0],20)}},h=class extends i{constructor(t,i,e,s,n=[0,0]){super(t,i,e,n,[s,10])}move(t){super.move(t),this.position[0]+this.dimensions[0]<this.game.barrier?.position[0]&&this.destroy()}draw(t="red"){this.context.fillStyle=t,this.context.fillRect(...this.position,this.dimensions[0],this.dimensions[1])}destroy(){this.game.platforms.delete(this)}},r=class extends h{constructor(t,i,e,s=2,n=[0,0]){super(t,i,e,s*i.scale,n),this.sprite=new Image,this.sprite.src="./building.png"}draw(){this.context.drawImage(this.sprite,this.position[0]-5,this.position[1]-5,this.dimensions[0]+10,this.game.dimensions[1])}},l=class extends i{constructor(t,i){super(t,i,[-1150,0],[6,0],[1e3,i.dimensions[1]*i.scale]),this.sprite=new Image,this.sprite.src="./fire.png",this.spriteState=0,setInterval((()=>{this.spriteState=(this.spriteState+1)%19}),100)}move(t){this.velocity[0]<16&&(this.velocity[0]*=1.01),this.position=[this.position[0]+this.velocity[0]*t*this.game.scale,this.position[1]+this.velocity[1]*t*this.game.scale]}draw(t="green"){const i=Math.floor(this.spriteState/4),e=this.spriteState%4,s=(this.spriteState+3)%19,n=Math.floor(s/4),o=s%4,a=(this.spriteState+7)%19,h=Math.floor(a/4),r=a%4;this.context.drawImage(this.sprite,96*e,96*i+30,96,66,this.position[0]+895,this.position[1]-180,280,1.5*this.game.dimensions[1]),this.context.drawImage(this.sprite,96*o,96*n+30,96,66,this.position[0]+890,this.position[1]-180-20,250,1.5*this.game.dimensions[1]),this.context.drawImage(this.sprite,96*r,96*h+30,96,66,this.position[0]+850,this.position[1]-180-10,250,1.5*this.game.dimensions[1]),this.context.drawImage(this.sprite,96*e,96*i+30,96,66,this.position[0]+750,this.position[1]-180,300,1.5*this.game.dimensions[1]),this.context.drawImage(this.sprite,96*o,96*n+30,96,66,this.position[0]+625,this.position[1]-180-20,400,1.5*this.game.dimensions[1]),this.context.drawImage(this.sprite,96*r,96*h+30,96,66,this.position[0]+535,this.position[1]-180-10,400,1.5*this.game.dimensions[1])}};var c=e(379),d=e.n(c),m=e(795),p=e.n(m),g=e(569),f=e.n(g),u=e(565),y=e.n(u),v=e(216),w=e.n(v),b=e(589),x=e.n(b),S=e(800),k={};k.styleTagTransform=x(),k.setAttributes=y(),k.insert=f().bind(null,"head"),k.domAPI=p(),k.insertStyleElement=w(),d()(S.Z,k),S.Z&&S.Z.locals&&S.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("game"),i=document.getElementById("background"),e=document.getElementById("canvas-container"),o={background:i.getContext("2d"),game:t.getContext("2d")},c=window.innerWidth;t.width=Math.min(.7*c,800),t.height=.5*t.width,i.width=Math.min(.7*c,800),i.height=.5*t.width,e.style.width=t.width+2,e.style.height=t.height+2,new class{constructor(t,i){this.gameContext=t.game,this.bgContext=t.background,this.dimensions=i,this.platformController=new class{constructor(t){this.game=t,this.last_y=.5*t.dimensions[1],this.buildingSpawn=this.buildingSpawn.bind(this),this.platformSpawn=this.platformSpawn.bind(this)}async platformSequence(t){const i=t.sequence;for(let t=0;t<i.length&&this.started;t++){const e=i[t],{y:s,width:n,timing:o,velocity:a}=e;if(this.buildingSpawn([800,s+this.last_y],n*this.scale,a),await sleep(o*this.scale),t===i.length-1&&this.started){const t=randomEl(sequences.easy);this.platformSequence(t)}}}spawnNextSequence(){console.log("Sequence Spanwed"),this.last_y=this.last_y+(.2*Math.random()-.1)*this.game.dimensions[1],this.last_y>.8*this.game.dimensions[1]&&(this.last_y=.8*this.game.dimensions[1]),this.last_y<.3*this.game.dimensions[1]&&(this.last_y=.3*this.game.dimensions[1]),this.buildingSpawn([this.game.dimensions[0]+10,this.last_y],100*Math.random()+500,[0,0]),this.buildingSpawn([this.game.dimensions[0]+900,this.last_y+(.3*Math.random()-.15)*this.game.dimensions[1]],100*Math.random()+500,[0,0])}endless(){this.buildingSpawn([this.game.dimensions[0]+10,this.game.dimensions[1]*(.5*Math.random()+.25)],400*Math.random()+400,[0,0]),this.buildingSpawn([this.game.dimensions[0]+1100,this.game.dimensions[1]*(.5*Math.random()+.25)],400*Math.random()+500,[0,0]),this.game.gameOver||setTimeout((()=>{this.endless()}),6e3)}platformSpawn(t,i,e=[0,0]){this.game.platforms.add(new h(this.game.gameContext,this.game,[...t],i,[...e]))}buildingSpawn(t,i,e=[0,0]){this.game.platforms.add(new r(this.game.gameContext,this.game,[...t],i,[...e]))}}(this),this.scale=i[0]/800,this.logo=new Image,this.logo.src="./logo.png",this.started=!1,this.gameOver=!1,this.spawnerId,this.score=0,this.objects=new Set,this.platforms=new Set,this.staticObjects=new Set,this.last_y=.75*this.dimensions[1],this.lastTime=0,this.animate=this.animate.bind(this),this.background=new class{constructor(t,i){this.context=t,this.scale=i.scale,this.dimensions=i.dimensions,this.game=i,this.objects=new Set,this.spawnStar=this.spawnStar.bind(this),this.starSpawnInterval=setInterval(this.spawnStar,500);for(let t=0;t<100;t++){let t=Math.random()*this.dimensions[0];this.spawnStar(t)}}spawnStar(t,i){t||=this.dimensions[0]+10,i||=Math.random()*this.dimensions[1]/1.5;const e=[-2*Math.random(),0];this.objects.add(new n(this.context,this,[t,i],e))}move(t){this.objects.forEach((i=>i.move(t)))}draw(){this.context.fillStyle="#111133",this.context.fillRect(0,0,...this.dimensions),this.objects.forEach((t=>t.draw()))}}(t.background,this),this.barrier,this.addListeners()}addListeners(){document.getElementById("game").addEventListener("click",(t=>{this.started||this.start()}))}resize(t){this.dimensions=t,this.scale=t[0]/800}update(t){this.player?.move(1.1*t),this.objects.forEach((i=>i.move(1.1*t))),this.platforms.forEach((i=>i.move(1.1*t))),this.background.move(1.1*t),this.barrier?.move(1.1*t)}draw(){this.background.draw(),this.gameContext.clearRect(0,0,...this.dimensions),this.player?.draw(),this.objects.forEach((t=>t.draw())),this.platforms.forEach((t=>t.draw())),this.barrier?.draw(),this.staticObjects.forEach((t=>t.draw())),this.started?(this.gameContext.fillStyle="#ffffff",this.gameContext.font="20px serif",this.gameContext.fillText(`Score: ${this.score}`,600*this.scale,28*this.scale,this.dimensions[0])):(this.gameContext.drawImage(this.logo,.2*this.dimensions[0],0,.6*this.dimensions[0],.6*this.dimensions[1]),this.gameContext.fillStyle=["#ffffff","#e3e3ee","#e3e3eff","#f3f3ff","#ddddee"][Math.floor(5*Math.random())],this.gameContext.font="28px serif",this.gameContext.fillText("Click to Begin",.4*this.dimensions[0],.7*this.dimensions[1],.8*this.dimensions[0]))}animate(t){if((this.player?.position[1]>this.dimensions[1]||this.player?.collides(this.barrier))&&(this.gameOver=!0),this.gameOver&&this.started)return this.gameOver=!1,this.started=!1,this.objects=new Set,this.platforms=new Set,this.player=null,this.barrier=null,clearInterval(this.scoreInterval),this.run();this.player?.distTraveled>1800&&(this.player.distTraveled=0,this.platformController.spawnNextSequence());const i=t-this.lastTime;this.lastTime=t,this.update(i/60),this.draw(),requestAnimationFrame(this.animate)}scrollX(t){this.barrier.position[0]+=t,this.objects.forEach((i=>i.position[0]+=t)),this.platforms.forEach((i=>i.position[0]+=t))}run(){requestAnimationFrame(this.animate)}start(){this.gameOver=!1,this.score=0,this.objects=new Set,this.platforms=new Set,this.last_y=.75*this.dimensions[1],this.started=!0,clearInterval(this.spawnerId),this.spawnerId=void 0,this.player=new s(this.gameContext,this),this.speedometer=new a(this.gameContext,this),this.barrier=new l(this.gameContext,this),this.staticObjects.add(this.speedometer),this.platformController.buildingSpawn([0,.5*this.dimensions[1]],700,[0,0]),this.platformController.spawnNextSequence(),this.scoreInterval=setInterval((()=>{this.player.standing&&(this.score+=10)}),500)}}(o,[t.width,t.height]).run()}))})()})();