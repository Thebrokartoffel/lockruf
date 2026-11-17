(()=>{var Zu=0,lh=1,Yu=2;var Hs=1,$u=2,Lr=3,xs=0,An=1,ye=2,Gs=0,Dr=1,Li=2,ch=3,hh=4,Ku=5;var Vs=100,Ju=101,ju=102,Qu=103,td=104,ed=200,nd=201,id=202,sd=203,uh=204,dh=205,rd=206,ad=207,od=208,ld=209,cd=210,hd=211,ud=212,dd=213,fd=214,To=0,Ao=1,Ro=2,vr=3,Co=4,Po=5,Io=6,Lo=7,Aa=0,pd=1,md=2,Di=0,fh=1,ph=2,mh=3,gh=4,xh=5,yh=6,vh=7;var _h=300,Ws=301,kr=302,rl=303,al=304,Ti=1e3,Ei=1001,Do=1002,xn=1003,gd=1004;var Ra=1005;var cn=1006,ol=1007;var ji=1008;var Bn=1009,bh=1010,Mh=1011,Nr=1012,ll=1013,ui=1014,ei=1015,Hn=1016,cl=1017,hl=1018,Xs=1020,Sh=35902,wh=35899,Eh=1021,Th=1022,di=1023,Ki=1026,Qi=1027,ul=1028,dl=1029,ys=1030,fl=1031;var pl=1033,Ca=33776,Pa=33777,Ia=33778,La=33779,ml=35840,gl=35841,xl=35842,yl=35843,vl=36196,_l=37492,bl=37496,Ml=37488,Sl=37489,Da=37490,wl=37491,El=37808,Tl=37809,Al=37810,Rl=37811,Cl=37812,Pl=37813,Il=37814,Ll=37815,Dl=37816,kl=37817,Nl=37818,Ul=37819,Fl=37820,Ol=37821,zl=36492,Bl=36494,Hl=36495,Gl=36283,Vl=36284,ka=36285,Wl=36286;var ra=2300,ko=2301,wo=2302,Jc=2303,jc=2400,Qc=2401,th=2402;var xd=3200;var Ur=0,yd=1,fi="",rn="srgb",aa="srgb-linear",oa="linear",De="srgb";var Eo=7680;var vd=519,_d=512,bd=513,Md=514,Ah=515,Sd=516,wd=517,Rh=518,Ch=519,Ph=35044;var Ih="300 es",ti=2e3,_r=2001;function Vp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Wp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function la(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ed(){let s=la("canvas");return s.style.display="block",s}var uu={},br=null;function ca(...s){let t="THREE."+s.shift();br?br("log",t,...s):console.log(t,...s)}function Td(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ne(...s){s=Td(s);let t="THREE."+s.shift();if(br)br("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ie(...s){s=Td(s);let t="THREE."+s.shift();if(br)br("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function sa(...s){let t=s.join(" ");t in uu||(uu[t]=!0,ne(...s))}function Ad(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Rd={[To]:To,[Ro]:Io,[Co]:Co,[vr]:Po,[Ao]:Ao,[Io]:Ro,[Lo]:Lo,[Po]:vr},Ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ac=Math.PI/180,ha=180/Math.PI;function qs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[e&63|128]+Pn[e>>8&255]+"-"+Pn[e>>16&255]+Pn[e>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function Me(s,t,e){return Math.max(t,Math.min(e,s))}function Xp(s,t){return(s%t+t)%t}function Rc(s,t,e){return(1-e)*s+e*t}function Cd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xl(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pd(s,t){if(t.constructor===Float32Array)return s;let e=Xl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Id(s,t){if(t.constructor===Float32Array)return s;let e=Xl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Uh=class Uh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uh.prototype.isVector2=!0;var Kt=Uh,Ln=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],d=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(f!==x||l!==d||c!==p||u!==m){let g=l*d+c*p+u*m+f*x;g<0&&(d=-d,p=-p,m=-m,x=-x,g=-g);let y=1-o;if(g<.9995){let b=Math.acos(g),w=Math.sin(b);y=Math.sin(y*b)/w,o=Math.sin(o*b)/w,l=l*y+d*o,c=c*y+p*o,u=u*y+m*o,f=f*y+x*o}else{l=l*y+d*o,c=c*y+p*o,u=u*y+m*o,f=f*y+x*o;let b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+u*f+l*p-c*d,t[e+1]=l*m+u*d+c*f-o*p,t[e+2]=c*m+u*p+o*d-l*f,t[e+3]=u*m-o*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(r/2),d=l(n/2),p=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f-d*p*m;break;case"YXZ":this._x=d*u*f+c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f+d*p*m;break;case"ZXY":this._x=d*u*f-c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f-d*p*m;break;case"ZYX":this._x=d*u*f-c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f+d*p*m;break;case"YZX":this._x=d*u*f+c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f-d*p*m;break;case"XZY":this._x=d*u*f-c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f+d*p*m;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fh=class Fh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(du.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=i+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cc.copy(this).projectOnVector(t),this.sub(Cc)}reflect(t){return this.sub(Cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fh.prototype.isVector3=!0;var U=Fh,Cc=new U,du=new Ln,Oh=class Oh{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],p=n[5],m=n[8],x=i[0],g=i[3],y=i[6],b=i[1],w=i[4],S=i[7],v=i[2],E=i[5],_=i[8];return r[0]=a*x+o*b+l*v,r[3]=a*g+o*w+l*E,r[6]=a*y+o*S+l*_,r[1]=c*x+u*b+f*v,r[4]=c*g+u*w+f*E,r[7]=c*y+u*S+f*_,r[2]=d*x+p*b+m*v,r[5]=d*g+p*w+m*E,r[8]=d*y+p*S+m*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*r,p=c*r-a*l,m=e*f+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=f*x,t[1]=(i*c-u*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(u*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return sa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pc.makeScale(t,e)),this}rotate(t){return sa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pc.makeRotation(-t)),this}translate(t,e){return sa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Oh.prototype.isMatrix3=!0;var oe=Oh,Pc=new oe,fu=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qp(){let s={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===De&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===De&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?oa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[aa]:{primaries:t,whitePoint:n,transfer:oa,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:De,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),s}var _e=qp();function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var tr,No=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{tr===void 0&&(tr=la("canvas")),tr.width=t.width,tr.height=t.height;let i=tr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=tr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=la("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($i(e[n]/255)*255):e[n]=$i(e[n]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zp=0,Mr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ic(i[a].image)):r.push(Ic(i[a]))}else r=Ic(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ic(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?No.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}var Yp=0,Lc=new U,Fn=class s extends Ai{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ei,i=Ei,r=cn,a=ji,o=di,l=Bn,c=s.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=qs(),this.name="",this.source=new Mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Lc).x}get height(){return this.source.getSize(Lc).y}get depth(){return this.source.getSize(Lc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ti:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case Do:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ti:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case Do:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=_h;Fn.DEFAULT_ANISOTROPY=1;var zh=class zh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],m=l[9],x=l[2],g=l[6],y=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,S=(p+1)/2,v=(y+1)/2,E=(u+d)/4,_=(f+x)/4,M=(m+g)/4;return w>S&&w>v?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=E/n,r=_/n):S>v?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=E/i,r=M/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=_/r,i=M/r),this.set(n,i,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(f-x)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this.w=Me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this.w=Me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zh.prototype.isVector4=!0;var Je=zh,Uo=class extends Ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Fn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Mr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Uo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ua=class extends Fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fo=class extends Fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var sl=class sl{constructor(t,e,n,i,r,a,o,l,c,u,f,d,p,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,u,f,d,p,m,x,g)}set(t,e,n,i,r,a,o,l,c,u,f,d,p,m,x,g){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=i,y[1]=r,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=u,y[10]=f,y[14]=d,y[3]=p,y[7]=m,y[11]=x,y[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/er.setFromMatrixColumn(t,0).length(),r=1/er.setFromMatrixColumn(t,1).length(),a=1/er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*u,p=a*f,m=o*u,x=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+m*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,p=l*f,m=c*u,x=c*f;e[0]=d+x*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-m,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,p=l*f,m=c*u,x=c*f;e[0]=d-x*o,e[4]=-a*f,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,p=a*f,m=o*u,x=o*f;e[0]=l*u,e[4]=m*c-p,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,m=o*l,x=o*c;e[0]=l*u,e[4]=x-d*f,e[8]=m*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+m,e[10]=d-x*f}else if(t.order==="XZY"){let d=a*l,p=a*c,m=o*l,x=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+x,e[5]=a*u,e[9]=p*f-m,e[2]=m*f-p,e[6]=o*u,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($p,t,Kp)}lookAt(t,e,n){let i=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),as.crossVectors(n,Vn),as.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),as.crossVectors(n,Vn)),as.normalize(),$a.crossVectors(Vn,as),i[0]=as.x,i[4]=$a.x,i[8]=Vn.x,i[1]=as.y,i[5]=$a.y,i[9]=Vn.y,i[2]=as.z,i[6]=$a.z,i[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],p=n[13],m=n[2],x=n[6],g=n[10],y=n[14],b=n[3],w=n[7],S=n[11],v=n[15],E=i[0],_=i[4],M=i[8],I=i[12],P=i[1],O=i[5],k=i[9],H=i[13],N=i[2],X=i[6],Z=i[10],$=i[14],et=i[3],J=i[7],st=i[11],ft=i[15];return r[0]=a*E+o*P+l*N+c*et,r[4]=a*_+o*O+l*X+c*J,r[8]=a*M+o*k+l*Z+c*st,r[12]=a*I+o*H+l*$+c*ft,r[1]=u*E+f*P+d*N+p*et,r[5]=u*_+f*O+d*X+p*J,r[9]=u*M+f*k+d*Z+p*st,r[13]=u*I+f*H+d*$+p*ft,r[2]=m*E+x*P+g*N+y*et,r[6]=m*_+x*O+g*X+y*J,r[10]=m*M+x*k+g*Z+y*st,r[14]=m*I+x*H+g*$+y*ft,r[3]=b*E+w*P+S*N+v*et,r[7]=b*_+w*O+S*X+v*J,r[11]=b*M+w*k+S*Z+v*st,r[15]=b*I+w*H+S*$+v*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],p=t[14],m=t[3],x=t[7],g=t[11],y=t[15],b=l*p-c*d,w=o*p-c*f,S=o*d-l*f,v=a*p-c*u,E=a*d-l*u,_=a*f-o*u;return e*(x*b-g*w+y*S)-n*(m*b-g*v+y*E)+i*(m*w-x*v+y*_)-r*(m*S-x*E+g*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],p=t[11],m=t[12],x=t[13],g=t[14],y=t[15],b=e*o-n*a,w=e*l-i*a,S=e*c-r*a,v=n*l-i*o,E=n*c-r*o,_=i*c-r*l,M=u*x-f*m,I=u*g-d*m,P=u*y-p*m,O=f*g-d*x,k=f*y-p*x,H=d*y-p*g,N=b*H-w*k+S*O+v*P-E*I+_*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/N;return t[0]=(o*H-l*k+c*O)*X,t[1]=(i*k-n*H-r*O)*X,t[2]=(x*_-g*E+y*v)*X,t[3]=(d*E-f*_-p*v)*X,t[4]=(l*P-a*H-c*I)*X,t[5]=(e*H-i*P+r*I)*X,t[6]=(g*S-m*_-y*w)*X,t[7]=(u*_-d*S+p*w)*X,t[8]=(a*k-o*P+c*M)*X,t[9]=(n*P-e*k-r*M)*X,t[10]=(m*E-x*S+y*b)*X,t[11]=(f*S-u*E-p*b)*X,t[12]=(o*I-a*O-l*M)*X,t[13]=(e*O-n*I+i*M)*X,t[14]=(x*w-m*v-g*b)*X,t[15]=(u*v-f*w+d*b)*X,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,d=r*c,p=r*u,m=r*f,x=a*u,g=a*f,y=o*f,b=l*c,w=l*u,S=l*f,v=n.x,E=n.y,_=n.z;return i[0]=(1-(x+y))*v,i[1]=(p+S)*v,i[2]=(m-w)*v,i[3]=0,i[4]=(p-S)*E,i[5]=(1-(d+y))*E,i[6]=(g+b)*E,i[7]=0,i[8]=(m+w)*_,i[9]=(g-b)*_,i[10]=(1-(d+x))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=er.set(i[0],i[1],i[2]).length(),o=er.set(i[4],i[5],i[6]).length(),l=er.set(i[8],i[9],i[10]).length();r<0&&(a=-a),oi.copy(this);let c=1/a,u=1/o,f=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=ti,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===ti)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===_r)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=ti,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-i),d=-(e+t)/(e-t),p=-(n+i)/(n-i),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===ti)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===_r)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};sl.prototype.isMatrix4=!0;var ce=sl,er=new U,oi=new ce,$p=new U(0,0,0),Kp=new U(1,1,1),as=new U,$a=new U,Vn=new U,mu=new ce,gu=new Ln,yn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gu.setFromEuler(this),this.setFromQuaternion(gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jp=0,xu=new U,nr=new Ln,Vi=new ce,Ka=new U,Yr=new U,jp=new U,Qp=new Ln,yu=new U(1,0,0),vu=new U(0,1,0),_u=new U(0,0,1),bu={type:"added"},t0={type:"removed"},ir={type:"childadded",child:null},Dc={type:"childremoved",child:null},We=class s extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new U,e=new yn,n=new Ln,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new oe}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(vu,t)}rotateZ(t){return this.rotateOnAxis(_u,t)}translateOnAxis(t,e){return xu.copy(t).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(vu,t)}translateZ(t){return this.translateOnAxis(_u,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ka.copy(t):Ka.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Yr,Ka,this.up):Vi.lookAt(Ka,Yr,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),nr.setFromRotationMatrix(Vi),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bu),ir.child=t,this.dispatchEvent(ir),ir.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(t0),Dc.child=t,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bu),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,t,jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,Qp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new U(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ee=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},e0={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),y=this._getHandJoint(c,x);g!==null&&(y.matrix.fromArray(g.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=g.radius),y.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function kc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=_e.workingColorSpace){if(t=Xp(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=kc(a,r,t+1/3),this.g=kc(a,r,t),this.b=kc(a,r,t-1/3)}return _e.colorSpaceToWorking(this,i),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let n=Ld[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return _e.workingToColorSpace(In.copy(this),t),Math.round(Me(In.r*255,0,255))*65536+Math.round(Me(In.g*255,0,255))*256+Math.round(Me(In.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(In.copy(this),e);let n=In.r,i=In.g,r=In.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(In.copy(this),e),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=rn){_e.workingToColorSpace(In.copy(this),t);let e=In.r,n=In.g,i=In.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(Ja);let n=Rc(os.h,Ja.h,e),i=Rc(os.s,Ja.s,e),r=Rc(os.l,Ja.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Jt;Jt.NAMES=Ld;var da=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Jt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ls=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new U,Wi=new U,Nc=new U,Xi=new U,sr=new U,rr=new U,Mu=new U,Uc=new U,Fc=new U,Oc=new U,zc=new Je,Bc=new Je,Hc=new Je,Yi=class s{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),li.subVectors(t,e),i.cross(li);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){li.subVectors(i,e),Wi.subVectors(n,e),Nc.subVectors(t,e);let a=li.dot(li),o=li.dot(Wi),l=li.dot(Nc),c=Wi.dot(Wi),u=Wi.dot(Nc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return zc.setScalar(0),Bc.setScalar(0),Hc.setScalar(0),zc.fromBufferAttribute(t,e),Bc.fromBufferAttribute(t,n),Hc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(zc,r.x),a.addScaledVector(Bc,r.y),a.addScaledVector(Hc,r.z),a}static isFrontFacing(t,e,n,i){return li.subVectors(n,e),Wi.subVectors(t,e),li.cross(Wi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),li.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;sr.subVectors(i,n),rr.subVectors(r,n),Uc.subVectors(t,n);let l=sr.dot(Uc),c=rr.dot(Uc);if(l<=0&&c<=0)return e.copy(n);Fc.subVectors(t,i);let u=sr.dot(Fc),f=rr.dot(Fc);if(u>=0&&f<=u)return e.copy(i);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(sr,a);Oc.subVectors(t,r);let p=sr.dot(Oc),m=rr.dot(Oc);if(m>=0&&p<=m)return e.copy(r);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(rr,o);let g=u*m-p*f;if(g<=0&&f-u>=0&&p-m>=0)return Mu.subVectors(r,i),o=(f-u)/(f-u+(p-m)),e.copy(i).addScaledVector(Mu,o);let y=1/(g+x+d);return a=x*y,o=d*y,e.copy(n).addScaledVector(sr,a).addScaledVector(rr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ri=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ja.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox)),ja.applyMatrix4(t.matrixWorld),this.union(ja)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($r),Qa.subVectors(this.max,$r),ar.subVectors(t.a,$r),or.subVectors(t.b,$r),lr.subVectors(t.c,$r),ls.subVectors(or,ar),cs.subVectors(lr,or),Rs.subVectors(ar,lr);let e=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Rs.z,Rs.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Rs.z,0,-Rs.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Rs.y,Rs.x,0];return!Gc(e,ar,or,lr,Qa)||(e=[1,0,0,0,1,0,0,0,1],!Gc(e,ar,or,lr,Qa))?!1:(to.crossVectors(ls,cs),e=[to.x,to.y,to.z],Gc(e,ar,or,lr,Qa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qi=[new U,new U,new U,new U,new U,new U,new U,new U],ci=new U,ja=new Ri,ar=new U,or=new U,lr=new U,ls=new U,cs=new U,Rs=new U,$r=new U,Qa=new U,to=new U,Cs=new U;function Gc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Cs.fromArray(s,r);let o=i.x*Math.abs(Cs.x)+i.y*Math.abs(Cs.y)+i.z*Math.abs(Cs.z),l=t.dot(Cs),c=e.dot(Cs),u=n.dot(Cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ln=new U,eo=new Kt,n0=0,tn=class extends Ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ph,this.updateRanges=[],this.gpuType=ei,this.version=0,this._normalizationScale=t!==void 0?Xl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Id(t,this.array)}};var fa=class extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pa=class extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},i0=new Ri,Kr=new U,Vc=new U,Ci=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):i0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kr.subVectors(t,this.center);let e=Kr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Kr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kr.copy(t.center).add(Vc)),this.expandByPoint(Kr.copy(t.center).sub(Vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},s0=0,Qn=new ce,Wc=new We,cr=new U,Wn=new Ri,Jr=new Ri,gn=new U,Ue=class s extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vp(t)?pa:fa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,n){return Qn.makeTranslation(t,e,n),this.applyMatrix4(Qn),this}scale(t,e,n){return Qn.makeScale(t,e,n),this.applyMatrix4(Qn),this}lookAt(t){return Wc.lookAt(t),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(Wn.min,Jr.min),Wn.expandByPoint(gn),gn.addVectors(Wn.max,Jr.max),Wn.expandByPoint(gn)):(Wn.expandByPoint(Jr.min),Wn.expandByPoint(Jr.max))}Wn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)gn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(gn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gn.fromBufferAttribute(o,c),l&&(cr.fromBufferAttribute(t,c),gn.add(cr)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new U,l[I]=new U;let u=new U,f=new U,d=new U,p=new Kt,m=new Kt,x=new Kt,g=new U,y=new U;function b(I,P,O){c[I]=c[P]=c[O]=1,u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,P),d.fromBufferAttribute(n,O),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,P),x.fromBufferAttribute(r,O),f.sub(u),d.sub(u),m.sub(p),x.sub(p);let k=1/(m.x*x.y-x.x*m.y);isFinite(k)&&(g.copy(f).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(k),y.copy(d).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(k),o[I].add(g),o[P].add(g),o[O].add(g),l[I].add(y),l[P].add(y),l[O].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,P=w.length;I<P;++I){let O=w[I],k=O.start,H=O.count;for(let N=k,X=k+H;N<X;N+=3)b(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let S=new U,v=new U,E=new U,_=new U;function M(I){E.fromBufferAttribute(i,I),_.copy(E);let P=o[I];S.copy(P),S.sub(E.multiplyScalar(E.dot(P))).normalize(),v.crossVectors(_,P);let k=v.dot(l[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,k)}for(let I=0,P=n.count;I<P;++I)c[I]&&M(I);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u),p=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let y=0;y<u;y++)d[m++]=c[p++]}return new tn(d,u,f)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ma=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ph,this.updateRanges=[],this.version=0,this.uuid=qs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Su(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Su(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Su(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=qs()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Un=new U,Er=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?Xl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix4(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.applyNormalMatrix(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.transformDirection(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pd(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Id(t,this.data.array)}},Xc=new U,r0=new U,a0=new oe,hi=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Xc.subVectors(n,e).cross(r0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Xc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||a0.getNormalMatrix(t),i=this.coplanarPoint(Xc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},o0=0,Xn=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Dr,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=dh,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Kt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Kt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},us=class extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hr,jr=new U,ur=new U,dr=new U,fr=new Kt,Qr=new Kt,Dd=new ce,no=new U,ta=new U,io=new U,wu=new Kt,qc=new Kt,Eu=new Kt,Ds=class extends We{constructor(t=new us){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ma(e,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new Er(n,3,0,!1)),hr.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=hr,this.material=t,this.center=new Kt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),Dd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;so(no.set(-.5,-.5,0),dr,a,ur,i,r),so(ta.set(.5,-.5,0),dr,a,ur,i,r),so(io.set(.5,.5,0),dr,a,ur,i,r),wu.set(0,0),qc.set(1,0),Eu.set(1,1);let o=t.ray.intersectTriangle(no,ta,io,!1,jr);if(o===null&&(so(ta.set(-.5,.5,0),dr,a,ur,i,r),qc.set(0,1),o=t.ray.intersectTriangle(no,io,ta,!1,jr),o===null))return;let l=t.ray.origin.distanceTo(jr);l<t.near||l>t.far||e.push({distance:l,point:jr.clone(),uv:Yi.getInterpolation(jr,no,ta,io,wu,qc,Eu,new Kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function so(s,t,e,n,i,r){fr.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Qr.x=r*fr.x-i*fr.y,Qr.y=i*fr.x+r*fr.y):Qr.copy(fr),s.copy(t),s.x+=Qr.x,s.y+=Qr.y,s.applyMatrix4(Dd)}var Zi=new U,Zc=new U,ro=new U,ao=new U,ks=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zc.copy(t).add(e).multiplyScalar(.5),ro.copy(e).sub(t).normalize(),ao.copy(this.origin).sub(Zc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ro),o=ao.dot(this.direction),l=-ao.dot(ro),c=ao.lengthSq(),u=Math.abs(1-a*a),f,d,p,m;if(u>0)if(f=a*l-o,d=a*o-l,m=r*u,f>=0)if(d>=-m)if(d<=m){let x=1/u;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Zc).addScaledVector(ro,d),p}intersectSphere(t,e){if(t.radius<0)return null;Zi.subVectors(t.center,this.origin);let n=Zi.dot(this.direction),i=Zi.dot(Zi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,d=t.y-a.y,p=t.z-a.z,m=e.x-a.x,x=e.y-a.y,g=e.z-a.z,y=n.x-a.x,b=n.y-a.y,w=n.z-a.z,S=Math.abs(l),v=Math.abs(c),E=Math.abs(u),_,M,I,P,O,k,H,N,X,Z,$,et;if(S>=v&&S>=E?(I=l,k=f,X=m,et=y,l>=0?(_=c,M=u,P=d,O=p,H=x,N=g,Z=b,$=w):(_=u,M=c,P=p,O=d,H=g,N=x,Z=w,$=b)):v>=E?(I=c,k=d,X=x,et=b,c>=0?(_=u,M=l,P=p,O=f,H=g,N=m,Z=w,$=y):(_=l,M=u,P=f,O=p,H=m,N=g,Z=y,$=w)):(I=u,k=p,X=g,et=w,u>=0?(_=l,M=c,P=f,O=d,H=m,N=x,Z=y,$=b):(_=c,M=l,P=d,O=f,H=x,N=m,Z=b,$=y)),I===0)return null;let J=_/I,st=M/I,ft=1/I,Dt=P-J*k,zt=O-st*k,it=H-J*X,Tt=N-st*X,kt=Z-J*et,F=$-st*et,C=kt*Tt-F*it,K=Dt*F-zt*kt,nt=it*zt-Tt*Dt;if(i){if(C<0||K<0||nt<0)return null}else if((C<0||K<0||nt<0)&&(C>0||K>0||nt>0))return null;let ut=C+K+nt;if(ut===0)return null;let Ft=ft*(C*k+K*X+nt*et);return(ut>0?Ft<0:Ft>0)?null:this.at(Ft/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Tu=new ce,Ps=new ks,oo=new Ci,Au=new U,lo=new U,co=new U,ho=new U,Yc=new U,uo=new U,Ru=new U,fo=new U,W=class extends We{constructor(t=new Ue,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Yc.fromBufferAttribute(f,t),a?uo.addScaledVector(Yc,u):uo.addScaledVector(Yc.sub(e),u))}e.add(uo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),Ps.copy(t.ray).recast(t.near),!(oo.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(oo,Au)===null||Ps.origin.distanceToSquared(Au)>(t.far-t.near)**2))&&(Tu.copy(r).invert(),Ps.copy(t.ray).applyMatrix4(Tu),!(n.boundingBox!==null&&Ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ps)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],y=a[g.materialIndex],b=Math.max(g.start,p.start),w=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=b,v=w;S<v;S+=3){let E=o.getX(S),_=o.getX(S+1),M=o.getX(S+2);i=po(this,y,t,n,c,u,f,E,_,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,y=x;g<y;g+=3){let b=o.getX(g),w=o.getX(g+1),S=o.getX(g+2);i=po(this,a,t,n,c,u,f,b,w,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],y=a[g.materialIndex],b=Math.max(g.start,p.start),w=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=b,v=w;S<v;S+=3){let E=S,_=S+1,M=S+2;i=po(this,y,t,n,c,u,f,E,_,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,y=x;g<y;g+=3){let b=g,w=g+1,S=g+2;i=po(this,a,t,n,c,u,f,b,w,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function l0(s,t,e,n,i,r,a,o){let l;if(t.side===An?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===xs,o),l===null)return null;fo.copy(o),fo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(fo);return c<e.near||c>e.far?null:{distance:c,point:fo.clone(),object:s}}function po(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,lo),s.getVertexPosition(l,co),s.getVertexPosition(c,ho);let u=l0(s,t,e,n,lo,co,ho,Ru);if(u){let f=new U;Yi.getBarycoord(Ru,lo,co,ho,f),i&&(u.uv=Yi.getInterpolatedAttribute(i,o,l,c,f,new Kt)),r&&(u.uv1=Yi.getInterpolatedAttribute(r,o,l,c,f,new Kt)),a&&(u.normal=Yi.getInterpolatedAttribute(a,o,l,c,f,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};Yi.getNormal(lo,co,ho,d.normal),u.face=d,u.barycoord=f}return u}var ga=class extends Fn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=xn,u=xn,f,d){super(null,a,o,l,c,u,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tr=class extends tn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},pr=new ce,Cu=new ce,mo=[],Pu=new Ri,c0=new ce,ea=new W,na=new Ci,Ns=class extends W{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,c0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),Pu.copy(t.boundingBox).applyMatrix4(pr),this.boundingBox.union(Pu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),na.copy(t.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(na)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(n),t.ray.intersectsSphere(na)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,pr),Cu.multiplyMatrices(n,pr),ea.matrixWorld=Cu,ea.raycast(t,mo);for(let a=0,o=mo.length;a<o;a++){let l=mo[a];l.instanceId=r,l.object=this,e.push(l)}mo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ga(new Float32Array(i*this.count),i,this.count,ul,ei));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Is=new Ci,h0=new Kt(.5,.5),go=new U,ds=class{constructor(t=new hi,e=new hi,n=new hi,i=new hi,r=new hi,a=new hi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],p=r[7],m=r[8],x=r[9],g=r[10],y=r[11],b=r[12],w=r[13],S=r[14],v=r[15];if(i[0].setComponents(c-a,p-u,y-m,v-b).normalize(),i[1].setComponents(c+a,p+u,y+m,v+b).normalize(),i[2].setComponents(c+o,p+f,y+x,v+w).normalize(),i[3].setComponents(c-o,p-f,y-x,v-w).normalize(),n)i[4].setComponents(l,d,g,S).normalize(),i[5].setComponents(c-l,p-d,y-g,v-S).normalize();else if(i[4].setComponents(c-l,p-d,y-g,v-S).normalize(),e===ti)i[5].setComponents(c+l,p+d,y+g,v+S).normalize();else if(e===_r)i[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(t){Is.center.set(0,0,0);let e=h0.distanceTo(t.center);return Is.radius=.7071067811865476+e,Is.applyMatrix4(t.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(go.x=i.normal.x>0?t.max.x:t.min.x,go.y=i.normal.y>0?t.max.y:t.min.y,go.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Iu=new ce,Oo=class s{constructor(){this.coordinateSystem=ti,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Iu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new ds),n[i].setFromProjectionMatrix(Iu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new ds),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Ar=class extends Xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},zo=new U,Bo=new U,Lu=new ce,ia=new ks,xo=new Ci,$c=new U,Du=new U,Ho=class extends We{constructor(t=new Ue,e=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)zo.fromBufferAttribute(e,i-1),Bo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=zo.distanceTo(Bo);t.setAttribute("lineDistance",new le(n,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;Lu.copy(i).invert(),ia.copy(t.ray).applyMatrix4(Lu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=c){let y=u.getX(x),b=u.getX(x+1),w=yo(this,t,ia,l,y,b,x);w&&e.push(w)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(p),y=yo(this,t,ia,l,x,g,m-1);y&&e.push(y)}}else{let p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=c){let y=yo(this,t,ia,l,x,x+1,x);y&&e.push(y)}if(this.isLineLoop){let x=yo(this,t,ia,l,m-1,p,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yo(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(zo.fromBufferAttribute(o,i),Bo.fromBufferAttribute(o,r),e.distanceSqToSegment(zo,Bo,$c,Du)>n)return;$c.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo($c);if(!(c<t.near||c>t.far))return{distance:c,point:Du.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var ku=new U,Nu=new U,xa=class extends Ho{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)ku.fromBufferAttribute(e,i),Nu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ku.distanceTo(Nu);t.setAttribute("lineDistance",new le(n,1))}else ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Go=class extends Xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Uu=new ce,eh=new ks,vo=new Ci,_o=new U,ya=class extends We{constructor(t=new Ue,e=new Go){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(i),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;Uu.copy(i).invert(),eh.copy(t.ray).applyMatrix4(Uu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=d,x=p;m<x;m++){let g=c.getX(m);_o.fromBufferAttribute(f,g),Fu(_o,g,l,i,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let m=d,x=p;m<x;m++)_o.fromBufferAttribute(f,m),Fu(_o,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fu(s,t,e,n,i,r,a){let o=eh.distanceSqToPoint(s);if(o<e){let l=new U;eh.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var va=class extends Fn{constructor(t=[],e=Ws,n,i,r,a,o,l,c,u){super(t,e,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},en=class extends Fn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ji=class extends Fn{constructor(t,e,n=ui,i,r,a,o=xn,l=xn,c,u=Ki,f=1){if(u!==Ki&&u!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_a=class extends Ji{constructor(t,e=ui,n=Ws,i,r,a=xn,o=xn,l,c=Ki){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ba=class extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xe=class s extends Ue{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function m(x,g,y,b,w,S,v,E,_,M,I){let P=S/_,O=v/M,k=S/2,H=v/2,N=E/2,X=_+1,Z=M+1,$=0,et=0,J=new U;for(let st=0;st<Z;st++){let ft=st*O-H;for(let Dt=0;Dt<X;Dt++){let zt=Dt*P-k;J[x]=zt*b,J[g]=ft*w,J[y]=N,c.push(J.x,J.y,J.z),J[x]=0,J[g]=0,J[y]=E>0?1:-1,u.push(J.x,J.y,J.z),f.push(Dt/_),f.push(1-st/M),$+=1}}for(let st=0;st<M;st++)for(let ft=0;ft<_;ft++){let Dt=d+ft+X*st,zt=d+ft+X*(st+1),it=d+(ft+1)+X*(st+1),Tt=d+(ft+1)+X*st;l.push(Dt,zt,Tt),l.push(zt,it,Tt),et+=6}o.addGroup(p,et,I),p+=et,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Pi=class s extends Ue{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,f=Math.PI/2*t,d=e,p=2*f+d,m=n*2+r,x=i+1,g=new U,y=new U;for(let b=0;b<=m;b++){let w=0,S=0,v=0,E=0;if(b<=n){let I=b/n,P=I*Math.PI/2;S=-u-t*Math.cos(P),v=t*Math.sin(P),E=-t*Math.cos(P),w=I*f}else if(b<=n+r){let I=(b-n)/r;S=-u+I*e,v=t,E=0,w=f+I*d}else{let I=(b-n-r)/n,P=I*Math.PI/2;S=u+t*Math.sin(P),v=t*Math.cos(P),E=t*Math.sin(P),w=f+d+I*f}let _=Math.max(0,Math.min(1,w/p)),M=0;b===0?M=.5/i:b===m&&(M=-.5/i);for(let I=0;I<=i;I++){let P=I/i,O=P*Math.PI*2,k=Math.sin(O),H=Math.cos(O);y.x=-v*H,y.y=S,y.z=v*k,o.push(y.x,y.y,y.z),g.set(-v*H,E,v*k),g.normalize(),l.push(g.x,g.y,g.z),c.push(P+M,_)}if(b>0){let I=(b-1)*x;for(let P=0;P<i;P++){let O=I+P,k=I+P+1,H=b*x+P,N=b*x+P+1;a.push(O,k,H),a.push(k,N,H)}}}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ii=class s extends Ue{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,u=new Kt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let p=n+f/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ne=class s extends Ue{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],f=[],d=[],p=[],m=0,x=[],g=n/2,y=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(p,2));function b(){let S=new U,v=new U,E=0,_=(e-t)/n;for(let M=0;M<=r;M++){let I=[],P=M/r,O=P*(e-t)+t;for(let k=0;k<=i;k++){let H=k/i,N=H*l+o,X=Math.sin(N),Z=Math.cos(N);v.x=O*X,v.y=-P*n+g,v.z=O*Z,f.push(v.x,v.y,v.z),S.set(X,_,Z).normalize(),d.push(S.x,S.y,S.z),p.push(H,1-P),I.push(m++)}x.push(I)}for(let M=0;M<i;M++)for(let I=0;I<r;I++){let P=x[I][M],O=x[I+1][M],k=x[I+1][M+1],H=x[I][M+1];(t>0||I!==0)&&(u.push(P,O,H),E+=3),(e>0||I!==r-1)&&(u.push(O,k,H),E+=3)}c.addGroup(y,E,0),y+=E}function w(S){let v=m,E=new Kt,_=new U,M=0,I=S===!0?t:e,P=S===!0?1:-1;for(let k=1;k<=i;k++)f.push(0,g*P,0),d.push(0,P,0),p.push(.5,.5),m++;let O=m;for(let k=0;k<=i;k++){let N=k/i*l+o,X=Math.cos(N),Z=Math.sin(N);_.x=I*Z,_.y=g*P,_.z=I*X,f.push(_.x,_.y,_.z),d.push(0,P,0),E.x=X*.5+.5,E.y=Z*.5*P+.5,p.push(E.x,E.y),m++}for(let k=0;k<i;k++){let H=v+k,N=O+k;S===!0?u.push(N,N+1,H):u.push(N+1,N,H),M+=3}c.addGroup(y,M,S===!0?1:2),y+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Rr=class s extends Ne{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vo=class s extends Ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let w=new U,S=new U,v=new U;for(let E=0;E<e.length;E+=3)p(e[E+0],w),p(e[E+1],S),p(e[E+2],v),l(w,S,v,b)}function l(b,w,S,v){let E=v+1,_=[];for(let M=0;M<=E;M++){_[M]=[];let I=b.clone().lerp(S,M/E),P=w.clone().lerp(S,M/E),O=E-M;for(let k=0;k<=O;k++)k===0&&M===E?_[M][k]=I:_[M][k]=I.clone().lerp(P,k/O)}for(let M=0;M<E;M++)for(let I=0;I<2*(E-M)-1;I++){let P=Math.floor(I/2);I%2===0?(d(_[M][P+1]),d(_[M+1][P]),d(_[M][P])):(d(_[M][P+1]),d(_[M+1][P+1]),d(_[M+1][P]))}}function c(b){let w=new U;for(let S=0;S<r.length;S+=3)w.x=r[S+0],w.y=r[S+1],w.z=r[S+2],w.normalize().multiplyScalar(b),r[S+0]=w.x,r[S+1]=w.y,r[S+2]=w.z}function u(){let b=new U;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let S=g(b)/2/Math.PI+.5,v=y(b)/Math.PI+.5;a.push(S,1-v)}m(),f()}function f(){for(let b=0;b<a.length;b+=6){let w=a[b+0],S=a[b+2],v=a[b+4],E=Math.max(w,S,v),_=Math.min(w,S,v);E>.9&&_<.1&&(w<.2&&(a[b+0]+=1),S<.2&&(a[b+2]+=1),v<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,w){let S=b*3;w.x=t[S+0],w.y=t[S+1],w.z=t[S+2]}function m(){let b=new U,w=new U,S=new U,v=new U,E=new Kt,_=new Kt,M=new Kt;for(let I=0,P=0;I<r.length;I+=9,P+=6){b.set(r[I+0],r[I+1],r[I+2]),w.set(r[I+3],r[I+4],r[I+5]),S.set(r[I+6],r[I+7],r[I+8]),E.set(a[P+0],a[P+1]),_.set(a[P+2],a[P+3]),M.set(a[P+4],a[P+5]),v.copy(b).add(w).add(S).divideScalar(3);let O=g(v);x(E,P+0,b,O),x(_,P+2,w,O),x(M,P+4,S,O)}}function x(b,w,S,v){v<0&&b.x===1&&(a[w]=b.x-1),S.x===0&&S.z===0&&(a[w]=v/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function y(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}},Cr=class s extends Vo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Yt=class s extends Ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=t/o,d=e/l,p=[],m=[],x=[],g=[];for(let y=0;y<u;y++){let b=y*d-a;for(let w=0;w<c;w++){let S=w*f-r;m.push(S,-b,0),x.push(0,0,1),g.push(w/o),g.push(1-y/l)}}for(let y=0;y<l;y++)for(let b=0;b<o;b++){let w=b+c*y,S=b+c*(y+1),v=b+1+c*(y+1),E=b+1+c*y;p.push(w,S,E),p.push(S,v,E)}this.setIndex(p),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ae=class s extends Ue{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new U,d=new U,p=[],m=[],x=[],g=[];for(let y=0;y<=n;y++){let b=[],w=y/n,S=a+w*o,v=t*Math.cos(S),E=Math.sqrt(t*t-v*v),_=0;y===0&&a===0?_=.5/e:y===n&&l===Math.PI&&(_=-.5/e);for(let M=0;M<=e;M++){let I=M/e,P=i+I*r;f.x=-E*Math.cos(P),f.y=v,f.z=E*Math.sin(P),m.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),g.push(I+_,1-w),b.push(c++)}u.push(b)}for(let y=0;y<n;y++)for(let b=0;b<e;b++){let w=u[y][b+1],S=u[y][b],v=u[y+1][b],E=u[y+1][b+1];(y!==0||a>0)&&p.push(w,S,E),(y!==n-1||l<Math.PI)&&p.push(S,v,E)}this.setIndex(p),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qn=class s extends Ue{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],f=[],d=new U,p=new U,m=new U;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let y=0;y<=i;y++){let b=y/i*r;p.x=(t+e*Math.cos(g))*Math.cos(b),p.y=(t+e*Math.cos(g))*Math.sin(b),p.z=e*Math.sin(g),c.push(p.x,p.y,p.z),d.x=t*Math.cos(b),d.y=t*Math.sin(b),m.subVectors(p,d).normalize(),u.push(m.x,m.y,m.z),f.push(y/i),f.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let y=(i+1)*x+g-1,b=(i+1)*(x-1)+g-1,w=(i+1)*(x-1)+g,S=(i+1)*x+g;l.push(y,b,S),l.push(b,w,S)}this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Zs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Ou(i))i.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Ou(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function kn(s){let t={};for(let e=0;e<s.length;e++){let n=Zs(s[e]);for(let i in n)t[i]=n[i]}return t}function Ou(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function u0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Lh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var kd={clone:Zs,merge:kn},d0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=u0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Kt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Je().fromArray(i.value);break;case"m3":this.uniforms[n].value=new oe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ce().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wo=class extends vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Us=class extends Xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var fs=class extends Xn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Aa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var xe=class extends Xn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Aa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xo=class extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qo=class extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function mr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function bo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var ps=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zo=class extends ps{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jc,endingEnd:jc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qc:r=t,o=2*e-n;break;case th:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qc:a=t,l=2*n-e;break;case th:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,y=-d*g+2*d*x-d*m,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,w=(-1-p)*g+(1.5+p)*x+.5*m,S=p*g-p*x;for(let v=0;v!==o;++v)r[v]=y*a[u+v]+b*a[c+v]+w*a[l+v]+S*a[f+v];return r}},Yo=class extends ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),f=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*u;return r}},$o=class extends ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ko=class extends ps{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(n-e)/(i-e),x=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*m;return r}let d=o*2,p=t-1;for(let m=0;m!==o;++m){let x=a[c+m],g=a[l+m],y=p*d+m*2,b=f[y],w=f[y+1],S=t*d+m*2,v=u[S],E=u[S+1],_=m0(n,e,b,v,i);r[m]=Nd(_,x,w,E,g)}return r}};function Nd(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function p0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function m0(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Nd(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=p0(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Zn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mr(e,this.TimeBufferType),this.values=mr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:mr(t.times,Array),values:mr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),bo(t.settings)&&(n.settings={inTangents:mr(t.settings.inTangents,Array),outTangents:mr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ko(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ra:e=this.InterpolantFactoryMethodDiscrete;break;case ko:e=this.InterpolantFactoryMethodLinear;break;case wo:e=this.InterpolantFactoryMethodSmooth;break;case Jc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ne("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return ko;case this.InterpolantFactoryMethodSmooth:return wo;case this.InterpolantFactoryMethodBezier:return Jc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;bo(this.settings)&&(zu(this.settings.inTangents,t),zu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;bo(this.settings)&&(Bu(this.settings.inTangents,t),Bu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ie("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ie("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ie("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Wp(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){ie("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{let f=o*n,d=f-n,p=f+n;for(let m=0;m!==n;++m){let x=e[f+m];if(x!==e[d+m]||x!==e[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,bo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function zu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Bu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=ko;var ms=class extends Zn{constructor(t,e,n){super(t,e,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=ra;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};Jo.prototype.ValueTypeName="color";var jo=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};jo.prototype.ValueTypeName="number";var Qo=class extends ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let u=c+o;c!==u;c+=4)Ln.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ma=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Qo(this.times,this.values,this.getValueSize(),t)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends Zn{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ra;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};tl.prototype.ValueTypeName="vector";var el=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],m=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ud=new el,nl=class{constructor(t){this.manager=t!==void 0?t:Ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fs=class extends We{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Sa=class extends Fs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Kc=new ce,Hu=new U,Gu=new U,Pr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hu),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Kc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===_r||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Mo=new U,So=new Ln,wi=new U,wa=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mo,So,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,So,wi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Mo,So,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,So,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hs=new U,Vu=new Kt,Wu=new Kt,Tn=class extends wa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ha*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hs.x,hs.y).multiplyScalar(-t/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-t/hs.z)}getViewSize(t,e){return this.getViewBounds(t,Vu,Wu),e.subVectors(Wu,Vu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ac*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},nh=class extends Pr{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ha*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Os=class extends Fs{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new nh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},ih=class extends Pr{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0}},zs=class extends Fs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ih}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Bs=class extends wa{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},sh=class extends Pr{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ea=class extends Fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new sh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var gr=-90,xr=1,Ir=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Tn(gr,xr,t,e);i.layers=this.layers,this.add(i);let r=new Tn(gr,xr,t,e);r.layers=this.layers,this.add(r);let a=new Tn(gr,xr,t,e);a.layers=this.layers,this.add(a);let o=new Tn(gr,xr,t,e);o.layers=this.layers,this.add(o);let l=new Tn(gr,xr,t,e);l.layers=this.layers,this.add(l);let c=new Tn(gr,xr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},il=class extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Dh="\\[\\]\\.:\\/",g0=new RegExp("["+Dh+"]","g"),kh="[^"+Dh+"]",x0="[^"+Dh.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",kh),v0=/(WCOD+)?/.source.replace("WCOD",x0),_0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),b0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),M0=new RegExp("^"+y0+v0+_0+b0+"$"),S0=["material","materials","bones","map"],rh=class{constructor(t,e,n){let i=n||Ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ve=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(g0,"")}static parseTrackName(t){let e=M0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);S0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;ie("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=rh;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nv=new Float32Array(1);var Xu=new ce,Ta=class{constructor(t,e,n=0,i=1/0){this.ray=new ks(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xu),this}intersectObject(t,e=!0,n=[]){return ah(t,this,n,e),n.sort(qu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ah(t[i],this,n,e);return n.sort(qu),n}};function qu(s,t){return s.distance-t.distance}function ah(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)ah(r[a],t,e,!0)}}var Bh=class Bh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Bh.prototype.isMatrix2=!0;var oh=Bh;function Nh(s,t,e,n){let i=w0(n);switch(e){case Eh:return s*t;case ul:return s*t/i.components*i.byteLength;case dl:return s*t/i.components*i.byteLength;case ys:return s*t*2/i.components*i.byteLength;case fl:return s*t*2/i.components*i.byteLength;case Th:return s*t*3/i.components*i.byteLength;case di:return s*t*4/i.components*i.byteLength;case pl:return s*t*4/i.components*i.byteLength;case Ca:case Pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ia:case La:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gl:case yl:return Math.max(s,16)*Math.max(t,8)/4;case ml:case xl:return Math.max(s,8)*Math.max(t,8)/2;case vl:case _l:case Ml:case Sl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case bl:case Da:case wl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Il:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case kl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case zl:case Bl:case Hl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Gl:case Vl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ka:case Wl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function w0(s){switch(s){case Bn:case bh:return{byteLength:1,components:1};case Nr:case Mh:case Hn:return{byteLength:2,components:1};case cl:case hl:return{byteLength:2,components:4};case ui:case ll:case ei:return{byteLength:4,components:1};case Sh:case wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function rf(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function P0(s){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,u);else{f.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<f.length;p++){let m=f[d],x=f[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,m=f.length;p<m;p++){let x=f[p];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,B0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,W0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,X0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,em=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Mm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Eg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$g=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:I0,alphahash_pars_fragment:L0,alphamap_fragment:D0,alphamap_pars_fragment:k0,alphatest_fragment:N0,alphatest_pars_fragment:U0,aomap_fragment:F0,aomap_pars_fragment:O0,batching_pars_vertex:z0,batching_vertex:B0,begin_vertex:H0,beginnormal_vertex:G0,bsdfs:V0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:Z0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:$0,color_fragment:K0,color_pars_fragment:J0,color_pars_vertex:j0,color_vertex:Q0,common:tm,defaultnormal_vertex:em,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:sm,emissivemap_pars_fragment:rm,colorspace_fragment:am,colorspace_pars_fragment:om,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:hm,envmap_pars_vertex:um,envmap_physical_pars_fragment:Mm,envmap_vertex:dm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:xm,lightmap_pars_fragment:ym,lights_lambert_fragment:vm,lights_lambert_pars_fragment:_m,lights_pars_begin:bm,lights_toon_fragment:Sm,lights_toon_pars_fragment:wm,lights_phong_fragment:Em,lights_phong_pars_fragment:Tm,lights_physical_fragment:Am,lights_physical_pars_fragment:Rm,lights_fragment_begin:Cm,lights_fragment_maps:Pm,lights_fragment_end:Im,lightprobes_pars_fragment:Lm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:km,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Um,map_fragment:Fm,map_pars_fragment:Om,map_particle_fragment:zm,map_particle_pars_fragment:Bm,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Gm,morphinstance_vertex:Vm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:qm,morphtarget_vertex:Zm,normal_fragment_begin:Ym,normal_fragment_maps:$m,normal_pars_fragment:Km,normal_pars_vertex:Jm,normal_vertex:jm,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:tg,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:ag,project_vertex:og,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:fg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:xg,skinning_vertex:yg,skinnormal_vertex:vg,specularmap_fragment:_g,specularmap_pars_fragment:bg,tonemapping_fragment:Mg,tonemapping_pars_fragment:Sg,transmission_fragment:wg,transmission_pars_fragment:Eg,uv_pars_fragment:Tg,uv_pars_vertex:Ag,uv_vertex:Rg,worldpos_vertex:Cg,background_vert:Pg,background_frag:Ig,backgroundCube_vert:Lg,backgroundCube_frag:Dg,cube_vert:kg,cube_frag:Ng,depth_vert:Ug,depth_frag:Fg,distance_vert:Og,distance_frag:zg,equirect_vert:Bg,equirect_frag:Hg,linedashed_vert:Gg,linedashed_frag:Vg,meshbasic_vert:Wg,meshbasic_frag:Xg,meshlambert_vert:qg,meshlambert_frag:Zg,meshmatcap_vert:Yg,meshmatcap_frag:$g,meshnormal_vert:Kg,meshnormal_frag:Jg,meshphong_vert:jg,meshphong_frag:Qg,meshphysical_vert:t1,meshphysical_frag:e1,meshtoon_vert:n1,meshtoon_frag:i1,points_vert:s1,points_frag:r1,shadow_vert:a1,shadow_frag:o1,sprite_vert:l1,sprite_frag:c1},Ot={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ni={basic:{uniforms:kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:kn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:kn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Jt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:kn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:kn([Ot.points,Ot.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:kn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:kn([Ot.common,Ot.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:kn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:kn([Ot.sprite,Ot.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:kn([Ot.common,Ot.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:kn([Ot.lights,Ot.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ni.physical={uniforms:kn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var ql={r:0,b:0,g:0},h1=new ce,af=new oe;af.set(-1,0,0,0,1,0,0,0,1);function u1(s,t,e,n,i,r){let a=new Jt(0),o=i===!0?0:1,l,c,u=null,f=0,d=null;function p(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let S=b.backgroundBlurriness>0;w=t.get(w,S)}return w}function m(b){let w=!1,S=p(b);S===null?g(a,o):S&&S.isColor&&(g(S,1),w=!0);let v=s.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(b,w){let S=p(w);S&&S.isCubeTexture?(c===void 0&&(c=new W(new Xe(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Zs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(h1.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(af),c.material.toneMapped=_e.getTransfer(S.colorSpace)!==De,(u!==S||f!==S.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new W(new Yt(2,2),new vn({name:"BackgroundMaterial",uniforms:Zs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=_e.getTransfer(S.colorSpace)!==De,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,w){b.getRGB(ql,Lh(s)),e.buffers.color.setClear(ql.r,ql.g,ql.b,w,r)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:m,addToRenderList:x,dispose:y}}function d1(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(O,k,H,N,X){let Z=!1,$=f(O,N,H,k);r!==$&&(r=$,c(r.object)),Z=p(O,N,H,X),Z&&m(O,N,H,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(O,k,H,N),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(O){return s.bindVertexArray(O)}function u(O){return s.deleteVertexArray(O)}function f(O,k,H,N){let X=N.wireframe===!0,Z=n[k.id];Z===void 0&&(Z={},n[k.id]=Z);let $=O.isInstancedMesh===!0?O.id:0,et=Z[$];et===void 0&&(et={},Z[$]=et);let J=et[H.id];J===void 0&&(J={},et[H.id]=J);let st=J[X];return st===void 0&&(st=d(l()),J[X]=st),st}function d(O){let k=[],H=[],N=[];for(let X=0;X<e;X++)k[X]=0,H[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:N,object:O,attributes:{},index:null}}function p(O,k,H,N){let X=r.attributes,Z=k.attributes,$=0,et=H.getAttributes();for(let J in et)if(et[J].location>=0){let ft=X[J],Dt=Z[J];if(Dt===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(Dt=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(Dt=O.instanceColor)),ft===void 0||ft.attribute!==Dt||Dt&&ft.data!==Dt.data)return!0;$++}return r.attributesNum!==$||r.index!==N}function m(O,k,H,N){let X={},Z=k.attributes,$=0,et=H.getAttributes();for(let J in et)if(et[J].location>=0){let ft=Z[J];ft===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(ft=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(ft=O.instanceColor));let Dt={};Dt.attribute=ft,ft&&ft.data&&(Dt.data=ft.data),X[J]=Dt,$++}r.attributes=X,r.attributesNum=$,r.index=N}function x(){let O=r.newAttributes;for(let k=0,H=O.length;k<H;k++)O[k]=0}function g(O){y(O,0)}function y(O,k){let H=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;H[O]=1,N[O]===0&&(s.enableVertexAttribArray(O),N[O]=1),X[O]!==k&&(s.vertexAttribDivisor(O,k),X[O]=k)}function b(){let O=r.newAttributes,k=r.enabledAttributes;for(let H=0,N=k.length;H<N;H++)k[H]!==O[H]&&(s.disableVertexAttribArray(H),k[H]=0)}function w(O,k,H,N,X,Z,$){$===!0?s.vertexAttribIPointer(O,k,H,X,Z):s.vertexAttribPointer(O,k,H,N,X,Z)}function S(O,k,H,N){x();let X=N.attributes,Z=H.getAttributes(),$=k.defaultAttributeValues;for(let et in Z){let J=Z[et];if(J.location>=0){let st=X[et];if(st===void 0&&(et==="instanceMatrix"&&O.instanceMatrix&&(st=O.instanceMatrix),et==="instanceColor"&&O.instanceColor&&(st=O.instanceColor)),st!==void 0){let ft=st.normalized,Dt=st.itemSize,zt=t.get(st);if(zt===void 0)continue;let it=zt.buffer,Tt=zt.type,kt=zt.bytesPerElement,F=Tt===s.INT||Tt===s.UNSIGNED_INT||st.gpuType===ll;if(st.isInterleavedBufferAttribute){let C=st.data,K=C.isInterleavedBuffer===!0?C.stride:C.itemSize,nt=st.offset;if(C.isInstancedInterleavedBuffer||C.isInstancedBufferAttribute){for(let ut=0;ut<J.locationSize;ut++)y(J.location+ut,C.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ut=0;ut<J.locationSize;ut++)g(J.location+ut);s.bindBuffer(s.ARRAY_BUFFER,it);for(let ut=0;ut<J.locationSize;ut++)w(J.location+ut,Dt/J.locationSize,Tt,ft,K*kt,(nt+Dt/J.locationSize*ut)*kt,F)}else{if(st.isInstancedBufferAttribute){for(let C=0;C<J.locationSize;C++)y(J.location+C,st.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let C=0;C<J.locationSize;C++)g(J.location+C);s.bindBuffer(s.ARRAY_BUFFER,it);for(let C=0;C<J.locationSize;C++)w(J.location+C,Dt/J.locationSize,Tt,ft,Dt*kt,Dt/J.locationSize*C*kt,F)}}else if($!==void 0){let ft=$[et];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(J.location,ft);break;case 3:s.vertexAttrib3fv(J.location,ft);break;case 4:s.vertexAttrib4fv(J.location,ft);break;default:s.vertexAttrib1fv(J.location,ft)}}}}b()}function v(){I();for(let O in n){let k=n[O];for(let H in k){let N=k[H];for(let X in N){let Z=N[X];for(let $ in Z)u(Z[$].object),delete Z[$];delete N[X]}}delete n[O]}}function E(O){if(n[O.id]===void 0)return;let k=n[O.id];for(let H in k){let N=k[H];for(let X in N){let Z=N[X];for(let $ in Z)u(Z[$].object),delete Z[$];delete N[X]}}delete n[O.id]}function _(O){for(let k in n){let H=n[k];for(let N in H){let X=H[N];if(X[O.id]===void 0)continue;let Z=X[O.id];for(let $ in Z)u(Z[$].object),delete Z[$];delete X[O.id]}}}function M(O){for(let k in n){let H=n[k],N=O.isInstancedMesh===!0?O.id:0,X=H[N];if(X!==void 0){for(let Z in X){let $=X[Z];for(let et in $)u($[et].object),delete $[et];delete X[Z]}delete H[N],Object.keys(H).length===0&&delete n[k]}}}function I(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:P,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function f1(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function p1(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==di&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Bn&&_!==ei&&!M&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&ne("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:S,maxSamples:v,samples:E}}function m1(s){let t=this,e=null,n=0,i=!1,r=!1,a=new hi,o=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||i;return i=d,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){let m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,y=s.get(f);if(!i||m===null||m.length===0||r&&!g)r?u(null):c();else{let b=r?0:n,w=b*4,S=y.clippingState||null;l.value=S,S=u(m,d,w,p);for(let v=0;v!==w;++v)S[v]=e[v];y.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,p,m){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let y=p+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<y)&&(g=new Float32Array(y));for(let w=0,S=p;w!==x;++w,S+=4)a.copy(f[w]).applyMatrix4(b,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Fa=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new va(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xe(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Gs});r.uniforms.tEquirect.value=e;let a=new W(i,r),o=e.minFilter;return e.minFilter===ji&&(e.minFilter=cn),new Ir(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Fd=256,g1=3,x1=20,of=256,lf=16,y1=3,v1=new U,_1=new Jt,Yl=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ir(1,10,null),this._boxMesh=new W(new Xe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=v1}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,m=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(_1));let g=new Ir(n,i,u);return g.position.copy(o),g.update(l,t),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=m,t.background=x,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Fd,Cd(t))}_fromTexture(t,e){t.mapping===Ws||t.mapping===kr?this._setSize(t.image.length===0?Fd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Od(t,!1,!1),n=Math.log2(t)-g1;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Od(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ws||t.mapping===kr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=zd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=b1(),this._integrationMaterial=M1());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/lf);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-y1)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(of*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=S1());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function Od(s,t,e){return new Fa(s,{minFilter:ji,generateMipmaps:t,type:Hn,colorSpace:aa,depthBuffer:e})}function Oa(s,t,e){return new vn({name:s,uniforms:t,vertexShader:he.cube_vert,fragmentShader:e,side:An,blending:Gs,depthTest:!1,depthWrite:!1})}function b1(){return Oa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${of}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function M1(){return Oa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function S1(){return Oa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${x1}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function zd(){return Oa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Bd(){return Oa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function w1(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===rl||p===al)if(t.has(d)){let m=t.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new Fa(m.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,m=p===rl||p===al,x=p===Ws||p===kr;if(m||x){let g=e.get(d),y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new Yl(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let b=d.image;return m&&b&&b.height>0||x&&b&&l(b)?(n===null&&(n=new Yl(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,p){return p===rl?d.mapping=Ws:p===al&&(d.mapping=kr),d}function l(d){let p=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&p++;return p===m}function c(d){let p=d.target;p.removeEventListener("dispose",c);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(d){let p=d.target;p.removeEventListener("dispose",u);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function E1(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&sa("WebGLRenderer: "+n+" extension not supported."),i}}}function T1(s,t,e,n){let i={},r=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);let x=r.get(m);x&&(t.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function u(m){let x=m.attributes;for(let g in x)t.update(x[g],s.ARRAY_BUFFER)}function f(m){let x=m.index,g=m.attributes.position,y=0;if(g===void 0)return;let b=x!==null?x.array.length:g.array.length/3-1,w=g.count>=65535?pa:fa,S=new w(Math.ceil(b/3)*6,1),v=S.array;if(x!==null){let _=x.array;y=x.version;for(let M=0,I=0;M<b;M+=3){let P=_[M+0],O=_[M+1],k=_[M+2];v[I++]=P,v[I++]=O,v[I++]=O,v[I++]=k,v[I++]=k,v[I++]=P}}else{y=g.version;for(let _=0,M=0;_<b;_+=3){let I=_+0,P=_+1,O=_+2;v[M++]=I,v[M++]=P,v[M++]=P,v[M++]=O,v[M++]=O,v[M++]=I}}S.version=y;let E=r.get(m);E&&t.remove(E),r.set(m,S)}function d(m){let x=r.get(m);if(x){let g=m.index;g!==null&&x.version<g.version&&f(m)}else f(m);return r.get(m)}function p(){for(let m in i){let x=i[m].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:d,dispose:p}}function A1(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*a,p),e.update(d,n,p))}function u(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let x=0;for(let g=0;g<p;g++)x+=d[g];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function R1(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function C1(s,t,e){let n=new WeakMap,i=new Je;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==f){let I=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;p===!0&&(w=1),m===!0&&(w=2),x===!0&&(w=3);let S=o.attributes.position.count*w,v=1;S>t.maxTextureSize&&(v=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*v*4*f),_=new ua(E,S,v,f);_.type=ei,_.needsUpdate=!0;let M=w*4;for(let P=0;P<f;P++){let O=g[P],k=y[P],H=b[P],N=S*v*4*P;for(let X=0;X<O.count;X++){let Z=X*M;p===!0&&(i.fromBufferAttribute(O,X),E[N+Z+0]=i.x,E[N+Z+1]=i.y,E[N+Z+2]=i.z,E[N+Z+3]=0),m===!0&&(i.fromBufferAttribute(k,X),E[N+Z+4]=i.x,E[N+Z+5]=i.y,E[N+Z+6]=i.z,E[N+Z+7]=0),x===!0&&(i.fromBufferAttribute(H,X),E[N+Z+8]=i.x,E[N+Z+9]=i.y,E[N+Z+10]=i.z,E[N+Z+11]=H.itemSize===4?i.w:1)}}d={count:f,texture:_,size:new Kt(S,v)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function P1(s,t,e,n,i){let r=new WeakMap;function a(c){let u=i.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var I1={[fh]:"LINEAR_TONE_MAPPING",[ph]:"REINHARD_TONE_MAPPING",[mh]:"CINEON_TONE_MAPPING",[gh]:"ACES_FILMIC_TONE_MAPPING",[yh]:"AGX_TONE_MAPPING",[vh]:"NEUTRAL_TONE_MAPPING",[xh]:"CUSTOM_TONE_MAPPING"};function L1(s,t,e,n,i,r){let a=new Dn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Ue;u.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new le([0,2,0,0,2,0],2));let f=new Wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new W(u,f),p=new Bs(-1,1,1,-1,0,1),m=null,x=null,g=!1,y,b=null,w=[],S=!1;this.setSize=function(v,E){a.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let _=0;_<w.length;_++){let M=w[_];M.setSize&&M.setSize(v,E)}},this.setEffects=function(v){w=v,S=w.length>0&&w[0].isRenderPass===!0;let E=a.width,_=a.height;w.length>0&&o===null&&(o=new Dn(E,_,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new Dn(E,_,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&w.some(I=>I.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Ji(E,_),r===!0&&(c.format=Qi,c.type=Xs)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let I=0;I<w.length;I++){let P=w[I];P.setSize&&P.setSize(E,_),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(v,E){if(g||v.toneMapping===Di&&w.length===0)return!1;if(b=E,E!==null){let _=E.width,M=E.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return S===!1&&v.setRenderTarget(a),y=v.toneMapping,v.toneMapping=Di,!0},this.hasRenderPass=function(){return S},this.end=function(v,E){v.toneMapping=y,g=!0;let _=a,M=o;for(let I=0;I<w.length;I++){let P=w[I];P.enabled!==!1&&(P.render(v,M,_,E),P.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(m!==v.outputColorSpace||x!==v.toneMapping){m=v.outputColorSpace,x=v.toneMapping,f.defines={},_e.getTransfer(m)===De&&(f.defines.SRGB_TRANSFER="");let I=I1[x];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,v.setRenderTarget(b),v.render(d,p),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var cf=new Fn,hf=new Ji(1,1),uf=new _a(1),df=new ua,ff=new Fo,pf=new va,Hd=[],Gd=[],Vd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function Or(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Hd[i];if(r===void 0&&(r=new Float32Array(i),Hd[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function hn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function un(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Kl(s,t){let e=Gd[t];e===void 0&&(e=new Int32Array(t),Gd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function D1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function k1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;s.uniform2fv(this.addr,t),un(e,t)}}function N1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;s.uniform3fv(this.addr,t),un(e,t)}}function U1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;s.uniform4fv(this.addr,t),un(e,t)}}function F1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Xd.set(n),s.uniformMatrix2fv(this.addr,!1,Xd),un(e,n)}}function O1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Wd.set(n),s.uniformMatrix3fv(this.addr,!1,Wd),un(e,n)}}function z1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Vd.set(n),s.uniformMatrix4fv(this.addr,!1,Vd),un(e,n)}}function B1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function H1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;s.uniform2iv(this.addr,t),un(e,t)}}function G1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;s.uniform3iv(this.addr,t),un(e,t)}}function V1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;s.uniform4iv(this.addr,t),un(e,t)}}function W1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function X1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;s.uniform2uiv(this.addr,t),un(e,t)}}function q1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;s.uniform3uiv(this.addr,t),un(e,t)}}function Z1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;s.uniform4uiv(this.addr,t),un(e,t)}}function Jl(s){return s.version===0&&(s.compareFunction=Ch,s.needsUpdate=!0),s}function Y1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Jl(hf):r=cf,e.setTexture2D(t||r,i)}function $1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ff,i)}function K1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Jl(uf):r=pf,e.setTextureCube(t||r,i)}function J1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||df,i)}function j1(s){switch(s){case 5126:return D1;case 35664:return k1;case 35665:return N1;case 35666:return U1;case 35674:return F1;case 35675:return O1;case 35676:return z1;case 5124:case 35670:return B1;case 35667:case 35671:return H1;case 35668:case 35672:return G1;case 35669:case 35673:return V1;case 5125:return W1;case 36294:return X1;case 36295:return q1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return J1}}function Q1(s,t){s.uniform1fv(this.addr,t)}function tx(s,t){let e=Or(t,this.size,2);s.uniform2fv(this.addr,e)}function ex(s,t){let e=Or(t,this.size,3);s.uniform3fv(this.addr,e)}function nx(s,t){let e=Or(t,this.size,4);s.uniform4fv(this.addr,e)}function ix(s,t){let e=Or(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function sx(s,t){let e=Or(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function rx(s,t){let e=Or(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ax(s,t){s.uniform1iv(this.addr,t)}function ox(s,t){s.uniform2iv(this.addr,t)}function lx(s,t){s.uniform3iv(this.addr,t)}function cx(s,t){s.uniform4iv(this.addr,t)}function hx(s,t){s.uniform1uiv(this.addr,t)}function ux(s,t){s.uniform2uiv(this.addr,t)}function dx(s,t){s.uniform3uiv(this.addr,t)}function fx(s,t){s.uniform4uiv(this.addr,t)}function px(s,t,e){let n=this.cache,i=t.length,r=Kl(e,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Jl(hf):a=cf;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function mx(s,t,e){let n=this.cache,i=t.length,r=Kl(e,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ff,r[a])}function gx(s,t,e){let n=this.cache,i=t.length,r=Kl(e,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Jl(uf):a=pf;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,r[o])}function xx(s,t,e){let n=this.cache,i=t.length,r=Kl(e,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||df,r[a])}function yx(s){switch(s){case 5126:return Q1;case 35664:return tx;case 35665:return ex;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ax;case 35667:case 35671:return ox;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return hx;case 36294:return ux;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return xx}}var Vh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=j1(e.type)}},Wh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yx(e.type)}},Xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Hh=/(\w+)(\])?(\[|\.)?/g;function qd(s,t){s.seq.push(t),s.map[t.id]=t}function vx(s,t,e){let n=s.name,i=n.length;for(Hh.lastIndex=0;;){let r=Hh.exec(n),a=Hh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){qd(e,c===void 0?new Vh(o,s,t):new Wh(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new Xh(o),qd(e,f)),e=f}}}var Fr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);vx(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Zd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var _x=37297,bx=0;function Mx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Yd=new oe;function Sx(s){_e._getMatrix(Yd,_e.workingColorSpace,s);let t=`mat3( ${Yd.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(s)){case oa:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $d(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Mx(s.getShaderSource(t),o)}else return r}function wx(s,t){let e=Sx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ex={[fh]:"Linear",[ph]:"Reinhard",[mh]:"Cineon",[gh]:"ACESFilmic",[yh]:"AgX",[vh]:"Neutral",[xh]:"Custom"};function Tx(s,t){let e=Ex[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zl=new U;function Ax(){_e.getLuminanceCoefficients(Zl);let s=Zl.x.toFixed(4),t=Zl.y.toFixed(4),e=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function Cx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Px(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ua(s){return s!==""}function Kd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Jd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(s){return s.replace(Ix,Lx)}function Lx(s,t){let e=he[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return qh(e)}var Dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(s){return s.replace(Dx,kx)}function kx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Nx={[Hs]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function Ux(s){return Nx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fx={[kr]:"ENVMAP_MODE_REFRACTION"};function Ox(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Fx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zx={[Aa]:"ENVMAP_BLENDING_MULTIPLY",[pd]:"ENVMAP_BLENDING_MIX",[md]:"ENVMAP_BLENDING_ADD"};function Bx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":zx[s.combine]||"ENVMAP_BLENDING_NONE"}function Hx(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ux(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Ox(e),f=Bx(e),d=Rx(e),p=Cx(r),m=i.createProgram(),x,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ua).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ua).join(`
`),g.length>0&&(g+=`
`)):(x=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),g=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?he.tonemapping_pars_fragment:"",e.toneMapping!==Di?Tx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,wx("linearToOutputTexel",e.outputColorSpace),Ax(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ua).join(`
`)),a=qh(a),a=Kd(a,e),a=Jd(a,e),o=qh(o),o=Kd(o,e),o=Jd(o,e),a=jd(a),o=jd(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=y+x+a,w=y+g+o,S=Zd(i,i.VERTEX_SHADER,b),v=Zd(i,i.FRAGMENT_SHADER,w);i.attachShader(m,S),i.attachShader(m,v),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(P){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(m)||"",k=i.getShaderInfoLog(S)||"",H=i.getShaderInfoLog(v)||"",N=O.trim(),X=k.trim(),Z=H.trim(),$=!0,et=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,S,v);else{let J=$d(i,S,"vertex"),st=$d(i,v,"fragment");ie("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+J+`
`+st)}else N!==""?ne("WebGLProgram: Program Info Log:",N):(X===""||Z==="")&&(et=!1);et&&(P.diagnostics={runnable:$,programLog:N,vertexShader:{log:X,prefix:x},fragmentShader:{log:Z,prefix:g}})}i.deleteShader(S),i.deleteShader(v),_=new Fr(i,m),M=Px(i,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(m,_x)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=v,this}var Gx=0,Zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yh(t),e.set(t,n)),n}},Yh=class{constructor(t){this.id=Gx++,this.code=t,this.usedTimes=0}};function Vx(s){return s===ys||s===Da||s===ka}function Wx(s,t,e,n,i,r){let a=new Sr,o=new Zh,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,M,I,P,O,k){let H=P.fog,N=O.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,$=t.get(_.envMap||X,Z),et=d[_.type],J=n.precision;_.precision!==null&&(J=n.getMaxPrecision(_.precision),J!==_.precision&&ne("WebGLProgram.getParameters:",_.precision,"not supported, using",J,"instead."));let st=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ft=st!==void 0?st.length:0,Dt=0;N.morphAttributes.position!==void 0&&(Dt=1),N.morphAttributes.normal!==void 0&&(Dt=2),N.morphAttributes.color!==void 0&&(Dt=3);let zt,it,Tt,kt;if(et){let It=Ni[et];zt=It.vertexShader,it=It.fragmentShader}else{zt=_.vertexShader,it=_.fragmentShader;let It=o.getVertexShaderStage(_),ge=o.getFragmentShaderStage(_);o.update(_,It,ge),Tt=It.id,kt=ge.id}let F=s.getRenderTarget(),C=s.state.buffers.depth.getReversed(),K=O.isInstancedMesh===!0,nt=O.isBatchedMesh===!0,ut=!!_.map,Ft=!!_.matcap,Bt=!!$,$t=Bt&&$.isPMREMTexture===!0,at=!!_.aoMap,pe=!!_.lightMap,Ie=!!_.bumpMap&&_.wireframe===!1,me=!!_.normalMap,Ye=!!_.displacementMap,Se=!!_.emissiveMap,$e=!!_.metalnessMap,Fe=!!_.roughnessMap,Oe=_.anisotropy>0,q=_.clearcoat>0,ze=_.diffuseRoughness>0,ue=_.dispersion>0,ke=_.retroreflectivity>0,At=_.iridescence>0,Le=_.sheen>0,Qt=_.transmission>0,qt=Oe&&!!_.anisotropyMap,D=q&&!!_.clearcoatMap,T=q&&!!_.clearcoatNormalMap,j=q&&!!_.clearcoatRoughnessMap,gt=ze&&!!_.diffuseRoughnessMap,ht=At&&!!_.iridescenceMap,Rt=At&&!!_.iridescenceThicknessMap,Ct=Le&&!!_.sheenColorMap,rt=Le&&!!_.sheenRoughnessMap,ot=!!_.specularMap,St=!!_.specularColorMap,B=!!_.specularIntensityMap,lt=Qt&&!!_.transmissionMap,Q=Qt&&!!_.thicknessMap,yt=!!_.gradientMap,vt=!!_.alphaMap,wt=_.alphaTest>0,Wt=!!_.alphaHash,ae=!!_.extensions,xt=Di;_.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(xt=s.toneMapping);let Xt=$t?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,re={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:zt,fragmentShader:it,defines:_.defines,customVertexShaderID:Tt,customFragmentShaderID:kt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:J,batching:nt,batchingColor:nt&&O._colorsTexture!==null,instancing:K,instancingColor:K&&O.instanceColor!==null,instancingMorph:K&&O.morphTexture!==null,outputColorSpace:F===null?s.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ut,matcap:Ft,envMap:Bt,envMapMode:Bt&&$.mapping,envMapPMREM:$t,envMapMaxLod:$t?Xt.length-1:null,envMapSize:$t?Xt[0].width:null,aoMap:at,lightMap:pe,bumpMap:Ie,normalMap:me,displacementMap:Ye,emissiveMap:Se,normalMapObjectSpace:me&&_.normalMapType===yd,normalMapTangentSpace:me&&_.normalMapType===Ur,packedNormalMap:me&&_.normalMapType===Ur&&Vx(_.normalMap.format),metalnessMap:$e,roughnessMap:Fe,anisotropy:Oe,anisotropyMap:qt,clearcoat:q,clearcoatMap:D,clearcoatNormalMap:T,clearcoatRoughnessMap:j,diffuseRoughness:ze,diffuseRoughnessMap:gt,dispersion:ue,retroreflection:ke,iridescence:At,iridescenceMap:ht,iridescenceThicknessMap:Rt,sheen:Le,sheenColorMap:Ct,sheenRoughnessMap:rt,specularMap:ot,specularColorMap:St,specularIntensityMap:B,transmission:Qt,transmissionMap:lt,thicknessMap:Q,gradientMap:yt,opaque:_.transparent===!1&&_.blending===Dr&&_.alphaToCoverage===!1,alphaMap:vt,alphaTest:wt,alphaHash:Wt,combine:_.combine,mapUv:ut&&p(_.map.channel),aoMapUv:at&&p(_.aoMap.channel),lightMapUv:pe&&p(_.lightMap.channel),bumpMapUv:Ie&&p(_.bumpMap.channel),normalMapUv:me&&p(_.normalMap.channel),displacementMapUv:Ye&&p(_.displacementMap.channel),emissiveMapUv:Se&&p(_.emissiveMap.channel),metalnessMapUv:$e&&p(_.metalnessMap.channel),roughnessMapUv:Fe&&p(_.roughnessMap.channel),anisotropyMapUv:qt&&p(_.anisotropyMap.channel),clearcoatMapUv:D&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:gt&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:ht&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:rt&&p(_.sheenRoughnessMap.channel),specularMapUv:ot&&p(_.specularMap.channel),specularColorMapUv:St&&p(_.specularColorMap.channel),specularIntensityMapUv:B&&p(_.specularIntensityMap.channel),transmissionMapUv:lt&&p(_.transmissionMap.channel),thicknessMapUv:Q&&p(_.thicknessMap.channel),alphaMapUv:vt&&p(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(me||Oe),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(ut||vt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:C,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Dt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:k.filter(It=>It.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:xt,decodeVideoTexture:ut&&_.map.isVideoTexture===!0&&_e.getTransfer(_.map.colorSpace)===De,decodeVideoTextureEmissive:Se&&_.emissiveMap.isVideoTexture===!0&&_e.getTransfer(_.emissiveMap.colorSpace)===De,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ye,flipSided:_.side===An,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)M.push(I),M.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(g(M,_),y(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function g(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function y(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){let M=d[_.type],I;if(M){let P=Ni[M];I=kd.clone(P.uniforms)}else I=_.uniforms;return I}function w(_,M){let I=u.get(M);return I!==void 0?++I.usedTimes:(I=new Hx(s,M,_,i),c.push(I),u.set(M,I)),I}function S(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function v(_){o.remove(_)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:b,acquireProgram:w,releaseProgram:S,releaseShaderCache:v,programs:c,dispose:E}}function Xx(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function qx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function tf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ef(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,m,x,g,y){let b=s[t];return b===void 0?(b={id:d.id,object:d,geometry:p,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:y},s[t]=b):(b.id=d.id,b.object=d,b.geometry=p,b.material=m,b.materialVariant=a(d),b.groupOrder=x,b.renderOrder=d.renderOrder,b.z=g,b.group=y),t++,b}function l(d,p,m,x,g,y,b){b.reversedDepth===!0&&(g=-g);let w=o(d,p,m,x,g,y);m.transmission>0?n.push(w):m.transparent===!0?i.push(w):e.push(w)}function c(d,p,m,x,g,y){let b=o(d,p,m,x,g,y);m.transmission>0?n.unshift(b):m.transparent===!0?i.unshift(b):e.unshift(b)}function u(d,p){e.length>1&&e.sort(d||qx),n.length>1&&n.sort(p||tf),i.length>1&&i.sort(p||tf)}function f(){for(let d=t,p=s.length;d<p;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:u}}function Zx(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new ef,s.set(n,[a])):i>=r.length?(a=new ef,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Yx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Jt};break;case"SpotLight":e={position:new U,direction:new U,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function $x(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Kx=0;function Jx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function jx(s){let t=new Yx,e=$x(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let i=new U,r=new ce,a=new ce;function o(c){let u=0,f=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let p=0,m=0,x=0,g=0,y=0,b=0,w=0,S=0,v=0,E=0,_=0,M=0,I=0,P=0;c.sort(Jx);for(let k=0,H=c.length;k<H;k++){let N=c[k],X=N.color,Z=N.intensity,$=N.distance,et=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ys?et=N.shadow.map.texture:et=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=X.r*Z,f+=X.g*Z,d+=X.b*Z;else if(N.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(N.sh.coefficients[J],Z);P++}else if(N.isSunLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let st=N.shadow,ft=e.get(N);ft.shadowIntensity=st.intensity,ft.shadowBias=st.bias,ft.shadowNormalBias=st.normalBias,ft.shadowRadius=st.radius,ft.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[m]=ft,n.sunShadowMap[m]=et;let Dt=st.getViewportCount();for(let zt=0;zt<Dt;zt++)n.sunShadowMatrix[x+zt]=st.getMatrix(zt),n.sunShadowCascade[x+zt]=st._cascadeData[zt];x+=Dt,m++}n.sun[p]=J,p++}else if(N.isDirectionalLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let st=N.shadow,ft=e.get(N);ft.shadowIntensity=st.intensity,ft.shadowBias=st.bias,ft.shadowNormalBias=st.normalBias,ft.shadowRadius=st.radius,ft.shadowMapSize=st.mapSize,n.directionalShadow[g]=ft,n.directionalShadowMap[g]=et,n.directionalShadowMatrix[g]=N.shadow.matrix,v++}n.directional[g]=J,g++}else if(N.isSpotLight){let J=t.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(X).multiplyScalar(Z),J.distance=$,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,n.spot[b]=J;let st=N.shadow;if(N.map&&(n.spotLightMap[M]=N.map,M++,st.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[b]=st.matrix,N.castShadow){let ft=e.get(N);ft.shadowIntensity=st.intensity,ft.shadowBias=st.bias,ft.shadowNormalBias=st.normalBias,ft.shadowRadius=st.radius,ft.shadowMapSize=st.mapSize,n.spotShadow[b]=ft,n.spotShadowMap[b]=et,_++}b++}else if(N.isRectAreaLight){let J=t.get(N);J.color.copy(X).multiplyScalar(Z),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),n.rectArea[w]=J,w++}else if(N.isPointLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){let st=N.shadow,ft=e.get(N);ft.shadowIntensity=st.intensity,ft.shadowBias=st.bias,ft.shadowNormalBias=st.normalBias,ft.shadowRadius=st.radius,ft.shadowMapSize=st.mapSize,ft.shadowCameraNear=st.camera.near,ft.shadowCameraFar=st.camera.far,n.pointShadow[y]=ft,n.pointShadowMap[y]=et,n.pointShadowMatrix[y]=N.shadow.matrix,E++}n.point[y]=J,y++}else if(N.isHemisphereLight){let J=t.get(N);J.skyColor.copy(N.color).multiplyScalar(Z),J.groundColor.copy(N.groundColor).multiplyScalar(Z),n.hemi[S]=J,S++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let O=n.hash;(O.sunLength!==p||O.directionalLength!==g||O.pointLength!==y||O.spotLength!==b||O.rectAreaLength!==w||O.hemiLength!==S||O.numSunShadows!==m||O.numDirectionalShadows!==v||O.numPointShadows!==E||O.numSpotShadows!==_||O.numSpotMaps!==M||O.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=g,n.spot.length=b,n.rectArea.length=w,n.point.length=y,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-I,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,O.sunLength=p,O.directionalLength=g,O.pointLength=y,O.spotLength=b,O.rectAreaLength=w,O.hemiLength=S,O.numSunShadows=m,O.numDirectionalShadows=v,O.numPointShadows=E,O.numSpotShadows=_,O.numSpotMaps=M,O.numLightProbes=P,n.version=Kx++)}function l(c,u){let f=0,d=0,p=0,m=0,x=0,g=0,y=u.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let S=c[b];if(S.isSunLight){let v=n.sun[f];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(y),f++}else if(S.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(y),d++}else if(S.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(y),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(y),m++}else if(S.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(y),a.identity(),r.copy(S.matrixWorld),r.premultiply(y),a.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(y),p++}else if(S.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(y),g++}}}return{setup:o,setupView:l,state:n}}function nf(s){let t=new jx(s),e=[],n=[],i=[];function r(f){u.camera=f,e.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),i.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qx(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new nf(s),t.set(i,[o])):r>=a.length?(o=new nf(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ny=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],iy=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],sf=new ce,Na=new U,Gh=new U;function sy(s,t,e){let n=new ds,i=new Kt,r=new Kt,a=new Je,o=new Xo,l=new qo,c={},u=e.maxTextureSize,f={[xs]:An,[An]:xs,[ye]:ye},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:ty,fragmentShader:ey}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ue;m.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new W(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hs;let y=this.type;this.render=function(E,_,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===$u&&(ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hs);let I=s.getRenderTarget(),P=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Gs),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let H=y!==this.type;H&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(X=>X.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,X=E.length;N<X;N++){let Z=E[N],$=Z.shadow;if($===void 0){ne("WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let et=$.getFrameExtents();i.multiply(et),r.copy($.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/et.x),i.x=r.x*et.x,$.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/et.y),i.y=r.y*et.y,$.mapSize.y=r.y));let J=s.state.buffers.depth.getReversed();if($.camera._reversedDepth=J,$.map===null||H===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Lr){if(Z.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Dn(i.x,i.y,{format:ys,type:Hn,minFilter:cn,magFilter:cn,generateMipmaps:!1}),$.map.texture.name=Z.name+".shadowMap",$.map.depthTexture=new Ji(i.x,i.y,ei),$.map.depthTexture.name=Z.name+".shadowMapDepth",$.map.depthTexture.format=Ki,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=xn,$.map.depthTexture.magFilter=xn}else Z.isPointLight?($.map=new Fa(i.x),$.map.depthTexture=new _a(i.x,ui)):($.map=new Dn(i.x,i.y),$.map.depthTexture=new Ji(i.x,i.y,ui)),$.map.depthTexture.name=Z.name+".shadowMap",$.map.depthTexture.format=Ki,this.type===Hs?($.map.depthTexture.compareFunction=J?Rh:Ah,$.map.depthTexture.minFilter=cn,$.map.depthTexture.magFilter=cn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=xn,$.map.depthTexture.magFilter=xn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==i.x||$.map.height!==i.y)&&$.map.setSize(i.x,i.y);let st=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Z.isPointLight!==!0&&$.updateMatrices(Z,M);let ft=($.camera.layers.mask&4294967294)!==0?$.camera.layers:M.layers;for(let Dt=0;Dt<st;Dt++){let zt=$.getCamera(Dt);if(Z.isPointLight){let it=$.camera,Tt=$.matrix,kt=Z.distance||it.far;kt!==it.far&&(it.far=kt,it.updateProjectionMatrix()),Na.setFromMatrixPosition(Z.matrixWorld),it.position.copy(Na),Gh.copy(it.position),Gh.add(ny[Dt]),it.up.copy(iy[Dt]),it.lookAt(Gh),it.updateMatrixWorld(),Tt.makeTranslation(-Na.x,-Na.y,-Na.z),sf.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),$._frustum.setFromProjectionMatrix(sf,it.coordinateSystem,it.reversedDepth)}if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,Dt),s.clear();else{Dt===0&&(s.setRenderTarget($.map),s.clear());let it=$.getViewport(Dt);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),k.viewport(a)}n=$.getFrustum(Dt),S(_,M,zt,Z,ft,this.type)}$.isPointLightShadow!==!0&&this.type===Lr&&b($,M),$.needsUpdate=!1}y=this.type,g.needsUpdate=!1,s.setRenderTarget(I,P,O)};function b(E,_){let M=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new Dn(i.x,i.y,{format:ys,type:Hn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,M,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,M,p,x,null)}function w(E,_,M,I){let P=null,O=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)P=O;else if(P=M.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let k=P.uuid,H=_.uuid,N=c[k];N===void 0&&(N={},c[k]=N);let X=N[H];X===void 0&&(X=P.clone(),N[H]=X,_.addEventListener("dispose",v)),P=X}if(P.visible=_.visible,P.wireframe=_.wireframe,I===Lr?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:f[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let k=s.properties.get(P);k.light=M}return P}function S(E,_,M,I,P,O){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===Lr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let N=t.update(E),X=E.material;if(Array.isArray(X)){let Z=N.groups;for(let $=0,et=Z.length;$<et;$++){let J=Z[$],st=X[J.materialIndex];if(st&&st.visible){let ft=w(E,st,I,O);E.onBeforeShadow(s,E,_,M,N,ft,J),s.renderBufferDirect(M,null,N,ft,E,J),E.onAfterShadow(s,E,_,M,N,ft,J)}}}else if(X.visible){let Z=w(E,X,I,O);E.onBeforeShadow(s,E,_,M,N,Z,null),s.renderBufferDirect(M,null,N,Z,E,null),E.onAfterShadow(s,E,_,M,N,Z,null)}}let H=E.children;for(let N=0,X=H.length;N<X;N++)S(H[N],_,M,I,P,O)}function v(E){E.target.removeEventListener("dispose",v);for(let M in c){let I=c[M],P=E.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}}function ry(s,t){function e(){let B=!1,lt=new Je,Q=null,yt=new Je(0,0,0,0);return{setMask:function(vt){Q!==vt&&!B&&(s.colorMask(vt,vt,vt,vt),Q=vt)},setLocked:function(vt){B=vt},setClear:function(vt,wt,Wt,ae,xt){xt===!0&&(vt*=ae,wt*=ae,Wt*=ae),lt.set(vt,wt,Wt,ae),yt.equals(lt)===!1&&(s.clearColor(vt,wt,Wt,ae),yt.copy(lt))},reset:function(){B=!1,Q=null,yt.set(-1,0,0,0)}}}function n(){let B=!1,lt=!1,Q=null,yt=null,vt=null;return{setReversed:function(wt){if(lt!==wt){let Wt=t.get("EXT_clip_control");wt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),lt=wt;let ae=vt;vt=null,this.setClear(ae)}},getReversed:function(){return lt},setTest:function(wt){wt?C(s.DEPTH_TEST):K(s.DEPTH_TEST)},setMask:function(wt){Q!==wt&&!B&&(s.depthMask(wt),Q=wt)},setFunc:function(wt){if(lt&&(wt=Rd[wt]),yt!==wt){switch(wt){case To:s.depthFunc(s.NEVER);break;case Ao:s.depthFunc(s.ALWAYS);break;case Ro:s.depthFunc(s.LESS);break;case vr:s.depthFunc(s.LEQUAL);break;case Co:s.depthFunc(s.EQUAL);break;case Po:s.depthFunc(s.GEQUAL);break;case Io:s.depthFunc(s.GREATER);break;case Lo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=wt}},setLocked:function(wt){B=wt},setClear:function(wt){vt!==wt&&(vt=wt,lt&&(wt=1-wt),s.clearDepth(wt))},reset:function(){B=!1,Q=null,yt=null,vt=null,lt=!1}}}function i(){let B=!1,lt=null,Q=null,yt=null,vt=null,wt=null,Wt=null,ae=null,xt=null;return{setTest:function(Xt){B||(Xt?C(s.STENCIL_TEST):K(s.STENCIL_TEST))},setMask:function(Xt){lt!==Xt&&!B&&(s.stencilMask(Xt),lt=Xt)},setFunc:function(Xt,re,It){(Q!==Xt||yt!==re||vt!==It)&&(s.stencilFunc(Xt,re,It),Q=Xt,yt=re,vt=It)},setOp:function(Xt,re,It){(wt!==Xt||Wt!==re||ae!==It)&&(s.stencilOp(Xt,re,It),wt=Xt,Wt=re,ae=It)},setLocked:function(Xt){B=Xt},setClear:function(Xt){xt!==Xt&&(s.clearStencil(Xt),xt=Xt)},reset:function(){B=!1,lt=null,Q=null,yt=null,vt=null,wt=null,Wt=null,ae=null,xt=null}}}let r=new e,a=new n,o=new i,l={},c=new WeakMap,u={},f={},d={},p=new WeakMap,m=[],x=null,g=!1,y=null,b=null,w=null,S=null,v=null,E=null,_=null,M=new Jt(0,0,0),I=0,P=!1,O=null,k=null,H=null,N=null,X=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,et=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=et>=1):J.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=et>=2);let st=null,ft={},Dt=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),it=new Je().fromArray(Dt),Tt=new Je().fromArray(zt);function kt(B,lt,Q,yt){let vt=new Uint8Array(4),wt=s.createTexture();s.bindTexture(B,wt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<Q;Wt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(lt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return wt}let F={};F[s.TEXTURE_2D]=kt(s.TEXTURE_2D,s.TEXTURE_2D,1),F[s.TEXTURE_CUBE_MAP]=kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[s.TEXTURE_2D_ARRAY]=kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),F[s.TEXTURE_3D]=kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),C(s.DEPTH_TEST),a.setFunc(vr),Ie(!1),me(lh),C(s.CULL_FACE),at(Gs);function C(B){u[B]!==!0&&(s.enable(B),u[B]=!0)}function K(B){u[B]!==!1&&(s.disable(B),u[B]=!1)}function nt(B,lt){return d[B]!==lt?(s.bindFramebuffer(B,lt),d[B]=lt,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=lt),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function ut(B,lt){let Q=m,yt=!1;if(B){Q=p.get(lt),Q===void 0&&(Q=[],p.set(lt,Q));let vt=B.textures;if(Q.length!==vt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let wt=0,Wt=vt.length;wt<Wt;wt++)Q[wt]=s.COLOR_ATTACHMENT0+wt;Q.length=vt.length,yt=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,yt=!0);yt&&s.drawBuffers(Q)}function Ft(B){return x!==B?(s.useProgram(B),x=B,!0):!1}let Bt={[Vs]:s.FUNC_ADD,[Ju]:s.FUNC_SUBTRACT,[ju]:s.FUNC_REVERSE_SUBTRACT};Bt[Qu]=s.MIN,Bt[td]=s.MAX;let $t={[ed]:s.ZERO,[nd]:s.ONE,[id]:s.SRC_COLOR,[uh]:s.SRC_ALPHA,[cd]:s.SRC_ALPHA_SATURATE,[od]:s.DST_COLOR,[rd]:s.DST_ALPHA,[sd]:s.ONE_MINUS_SRC_COLOR,[dh]:s.ONE_MINUS_SRC_ALPHA,[ld]:s.ONE_MINUS_DST_COLOR,[ad]:s.ONE_MINUS_DST_ALPHA,[hd]:s.CONSTANT_COLOR,[ud]:s.ONE_MINUS_CONSTANT_COLOR,[dd]:s.CONSTANT_ALPHA,[fd]:s.ONE_MINUS_CONSTANT_ALPHA};function at(B,lt,Q,yt,vt,wt,Wt,ae,xt,Xt){if(B===Gs){g===!0&&(K(s.BLEND),g=!1);return}if(g===!1&&(C(s.BLEND),g=!0),B!==Ku){if(B!==y||Xt!==P){if((b!==Vs||v!==Vs)&&(s.blendEquation(s.FUNC_ADD),b=Vs,v=Vs),Xt)switch(B){case Dr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Li:s.blendFunc(s.ONE,s.ONE);break;case ch:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ie("WebGLState: Invalid blending: ",B);break}else switch(B){case Dr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Li:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ch:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hh:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",B);break}w=null,S=null,E=null,_=null,M.set(0,0,0),I=0,y=B,P=Xt}return}vt=vt||lt,wt=wt||Q,Wt=Wt||yt,(lt!==b||vt!==v)&&(s.blendEquationSeparate(Bt[lt],Bt[vt]),b=lt,v=vt),(Q!==w||yt!==S||wt!==E||Wt!==_)&&(s.blendFuncSeparate($t[Q],$t[yt],$t[wt],$t[Wt]),w=Q,S=yt,E=wt,_=Wt),(ae.equals(M)===!1||xt!==I)&&(s.blendColor(ae.r,ae.g,ae.b,xt),M.copy(ae),I=xt),y=B,P=!1}function pe(B,lt){B.side===ye?K(s.CULL_FACE):C(s.CULL_FACE);let Q=B.side===An;lt&&(Q=!Q),Ie(Q),B.blending===Dr&&B.transparent===!1?at(Gs):at(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let yt=B.stencilWrite;o.setTest(yt),yt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Se(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?C(s.SAMPLE_ALPHA_TO_COVERAGE):K(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(B){O!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),O=B)}function me(B){B!==Zu?(C(s.CULL_FACE),B!==k&&(B===lh?s.cullFace(s.BACK):B===Yu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):K(s.CULL_FACE),k=B}function Ye(B){B!==H&&($&&s.lineWidth(B),H=B)}function Se(B,lt,Q){B?(C(s.POLYGON_OFFSET_FILL),(N!==lt||X!==Q)&&(N=lt,X=Q,a.getReversed()&&(lt=-lt,Q=-Q),s.polygonOffset(lt,Q))):K(s.POLYGON_OFFSET_FILL)}function $e(B){B?C(s.SCISSOR_TEST):K(s.SCISSOR_TEST)}function Fe(B){B===void 0&&(B=s.TEXTURE0+Z-1),st!==B&&(s.activeTexture(B),st=B)}function Oe(B,lt,Q){Q===void 0&&(st===null?Q=s.TEXTURE0+Z-1:Q=st);let yt=ft[Q];yt===void 0&&(yt={type:void 0,texture:void 0},ft[Q]=yt),(yt.type!==B||yt.texture!==lt)&&(st!==Q&&(s.activeTexture(Q),st=Q),s.bindTexture(B,lt||F[B]),yt.type=B,yt.texture=lt)}function q(){let B=ft[st];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ze(){try{s.compressedTexImage2D(...arguments)}catch(B){ie("WebGLState:",B)}}function ue(){try{s.compressedTexImage3D(...arguments)}catch(B){ie("WebGLState:",B)}}function ke(){try{s.texSubImage2D(...arguments)}catch(B){ie("WebGLState:",B)}}function At(){try{s.texSubImage3D(...arguments)}catch(B){ie("WebGLState:",B)}}function Le(){try{s.compressedTexSubImage2D(...arguments)}catch(B){ie("WebGLState:",B)}}function Qt(){try{s.compressedTexSubImage3D(...arguments)}catch(B){ie("WebGLState:",B)}}function qt(){try{s.texStorage2D(...arguments)}catch(B){ie("WebGLState:",B)}}function D(){try{s.texStorage3D(...arguments)}catch(B){ie("WebGLState:",B)}}function T(){try{s.texImage2D(...arguments)}catch(B){ie("WebGLState:",B)}}function j(){try{s.texImage3D(...arguments)}catch(B){ie("WebGLState:",B)}}function gt(B){return f[B]!==void 0?f[B]:s.getParameter(B)}function ht(B,lt){f[B]!==lt&&(s.pixelStorei(B,lt),f[B]=lt)}function Rt(B){it.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),it.copy(B))}function Ct(B){Tt.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Tt.copy(B))}function rt(B,lt){let Q=c.get(lt);Q===void 0&&(Q=new WeakMap,c.set(lt,Q));let yt=Q.get(B);yt===void 0&&(yt=s.getUniformBlockIndex(lt,B.name),s.uniformBlockBinding(lt,yt,yt),Q.set(B,yt))}function ot(B,lt,Q){let vt=c.get(lt).get(B);l[vt]!==Q&&(s.bindBufferBase(s.UNIFORM_BUFFER,vt,Q),l[vt]=Q)}function St(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},f={},st=null,ft={},d={},l={},p=new WeakMap,m=[],x=null,g=!1,y=null,b=null,w=null,S=null,v=null,E=null,_=null,M=new Jt(0,0,0),I=0,P=!1,O=null,k=null,H=null,N=null,X=null,it.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:C,disable:K,bindFramebuffer:nt,drawBuffers:ut,useProgram:Ft,setBlending:at,setMaterial:pe,setFlipSided:Ie,setCullFace:me,setLineWidth:Ye,setPolygonOffset:Se,setScissorTest:$e,activeTexture:Fe,bindTexture:Oe,unbindTexture:q,compressedTexImage2D:ze,compressedTexImage3D:ue,texImage2D:T,texImage3D:j,pixelStorei:ht,getParameter:gt,updateUBOMapping:rt,uniformBlockBinding:ot,texStorage2D:qt,texStorage3D:D,texSubImage2D:ke,texSubImage3D:At,compressedTexSubImage2D:Le,compressedTexSubImage3D:Qt,scissor:Rt,viewport:Ct,reset:St}}function ay(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,u=new WeakMap,f=new Set,d,p=new WeakMap,m=new Set,x=new FinalizationRegistry(D=>m.delete(D)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,T){return g?new OffscreenCanvas(D,T):la("canvas")}function b(D,T,j){let gt=1,ht=qt(D);if((ht.width>j||ht.height>j)&&(gt=j/Math.max(ht.width,ht.height)),gt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let Rt=Math.floor(gt*ht.width),Ct=Math.floor(gt*ht.height);d===void 0&&(d=y(Rt,Ct));let rt=T?y(Rt,Ct):d;return rt.width=Rt,rt.height=Ct,rt.getContext("2d").drawImage(D,0,0,Rt,Ct),ne("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+Rt+"x"+Ct+")."),rt}else return"data"in D&&ne("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),D;return D}function w(D){return D.generateMipmaps}function S(D){s.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(D,T,j,gt,ht,Rt=!1){if(D!==null){if(s[D]!==void 0)return s[D];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ct;gt&&(Ct=t.get("EXT_texture_norm16"),Ct||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=T;if(T===s.RED&&(j===s.FLOAT&&(rt=s.R32F),j===s.HALF_FLOAT&&(rt=s.R16F),j===s.UNSIGNED_BYTE&&(rt=s.R8),j===s.UNSIGNED_SHORT&&Ct&&(rt=Ct.R16_EXT),j===s.SHORT&&Ct&&(rt=Ct.R16_SNORM_EXT)),T===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(rt=s.R8UI),j===s.UNSIGNED_SHORT&&(rt=s.R16UI),j===s.UNSIGNED_INT&&(rt=s.R32UI),j===s.BYTE&&(rt=s.R8I),j===s.SHORT&&(rt=s.R16I),j===s.INT&&(rt=s.R32I)),T===s.RG&&(j===s.FLOAT&&(rt=s.RG32F),j===s.HALF_FLOAT&&(rt=s.RG16F),j===s.UNSIGNED_BYTE&&(rt=s.RG8),j===s.UNSIGNED_SHORT&&Ct&&(rt=Ct.RG16_EXT),j===s.SHORT&&Ct&&(rt=Ct.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(rt=s.RG8UI),j===s.UNSIGNED_SHORT&&(rt=s.RG16UI),j===s.UNSIGNED_INT&&(rt=s.RG32UI),j===s.BYTE&&(rt=s.RG8I),j===s.SHORT&&(rt=s.RG16I),j===s.INT&&(rt=s.RG32I)),T===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(rt=s.RGB8UI),j===s.UNSIGNED_SHORT&&(rt=s.RGB16UI),j===s.UNSIGNED_INT&&(rt=s.RGB32UI),j===s.BYTE&&(rt=s.RGB8I),j===s.SHORT&&(rt=s.RGB16I),j===s.INT&&(rt=s.RGB32I)),T===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(rt=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(rt=s.RGBA16UI),j===s.UNSIGNED_INT&&(rt=s.RGBA32UI),j===s.BYTE&&(rt=s.RGBA8I),j===s.SHORT&&(rt=s.RGBA16I),j===s.INT&&(rt=s.RGBA32I)),T===s.RGB&&(j===s.UNSIGNED_SHORT&&Ct&&(rt=Ct.RGB16_EXT),j===s.SHORT&&Ct&&(rt=Ct.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(rt=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(rt=s.R11F_G11F_B10F)),T===s.RGBA){let ot=Rt?oa:_e.getTransfer(ht);j===s.FLOAT&&(rt=s.RGBA32F),j===s.HALF_FLOAT&&(rt=s.RGBA16F),j===s.UNSIGNED_BYTE&&(rt=ot===De?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&Ct&&(rt=Ct.RGBA16_EXT),j===s.SHORT&&Ct&&(rt=Ct.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(rt=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(rt=s.RGB5_A1)}return(rt===s.R16F||rt===s.R32F||rt===s.RG16F||rt===s.RG32F||rt===s.RGBA16F||rt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function _(D,T){let j;return D?T===null||T===ui||T===Xs?j=s.DEPTH24_STENCIL8:T===ei?j=s.DEPTH32F_STENCIL8:T===Nr&&(j=s.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ui||T===Xs?j=s.DEPTH_COMPONENT24:T===ei?j=s.DEPTH_COMPONENT32F:T===Nr&&(j=s.DEPTH_COMPONENT16),j}function M(D,T){return w(D)===!0||D.isFramebufferTexture&&D.minFilter!==xn&&D.minFilter!==cn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function I(D){let T=new WeakRef(D);n.get(D).__ref=T,m.add(T),x.register(D,T,T)}function P(D){let T=n.get(D).__ref;T!==void 0&&(m.delete(T),x.unregister(T))}function O(D){H(D.target)}function k(D){N(D.target)}function H(D){D.removeEventListener("dispose",O),P(D),Z(D),D.isVideoTexture&&u.delete(D),D.isHTMLTexture&&f.delete(D)}function N(D){D.removeEventListener("dispose",k),P(D),et(D)}function X(){for(let D of m){let T=D.deref();T!==void 0&&(T.isRenderTarget===!0?N(T):H(T))}m.clear(),f.clear()}function Z(D){let T=n.get(D);if(T.__webglInit===void 0)return;let j=D.source,gt=p.get(j);if(gt){let ht=gt[T.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&$(D),Object.keys(gt).length===0&&p.delete(j)}n.remove(D)}function $(D){let T=n.get(D);s.deleteTexture(T.__webglTexture);let j=D.source,gt=p.get(j);delete gt[T.__cacheKey],a.memory.textures--}function et(D){let T=n.get(D);T.__depthDisposeCallback&&T.__depthDisposeCallback();let j=D.depthTexture;if(j&&j.renderTarget===D&&H(j),D.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let Rt=0;Rt<T.__webglFramebuffer[ht].length;Rt++)s.deleteFramebuffer(T.__webglFramebuffer[ht][Rt]);else s.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)s.deleteFramebuffer(T.__webglFramebuffer[ht]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let gt=D.textures;for(let ht=0,Rt=gt.length;ht<Rt;ht++){let Ct=n.get(gt[ht]);Ct.__webglTexture&&(s.deleteTexture(Ct.__webglTexture),a.memory.textures--),n.remove(gt[ht])}n.remove(D)}let J=0;function st(){J=0}function ft(){return J}function Dt(D){J=D}function zt(){let D=J;return D>=i.maxTextures&&ne("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),J+=1,D}function it(D){let T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.mipmapsAutoUpdate),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function Tt(D,T){let j=n.get(D);if(D.isVideoTexture&&Le(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&j.__version!==D.version){let gt=D.image;if(gt===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(j,D,T);return}}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+T)}function kt(D,T){let j=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){pe(j,D,T);return}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+T)}function F(D,T){let j=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){pe(j,D,T);return}e.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+T)}function C(D,T){let j=n.get(D);if(D.version>0&&j.__version!==D.version){Ie(j,D,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+T)}let K={[Ti]:s.REPEAT,[Ei]:s.CLAMP_TO_EDGE,[Do]:s.MIRRORED_REPEAT},nt={[xn]:s.NEAREST,[gd]:s.NEAREST_MIPMAP_NEAREST,[Ra]:s.NEAREST_MIPMAP_LINEAR,[cn]:s.LINEAR,[ol]:s.LINEAR_MIPMAP_NEAREST,[ji]:s.LINEAR_MIPMAP_LINEAR},ut={[_d]:s.NEVER,[Ch]:s.ALWAYS,[bd]:s.LESS,[Ah]:s.LEQUAL,[Md]:s.EQUAL,[Rh]:s.GEQUAL,[Sd]:s.GREATER,[wd]:s.NOTEQUAL};function Ft(D,T){if(T.type===ei&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===cn||T.magFilter===ol||T.magFilter===Ra||T.magFilter===ji||T.minFilter===cn||T.minFilter===ol||T.minFilter===Ra||T.minFilter===ji)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,K[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,K[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,K[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,nt[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,nt[T.minFilter]),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ut[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xn||T.minFilter!==Ra&&T.minFilter!==ji||T.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let j=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Bt(D,T){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",O),I(T));let gt=T.source,ht=p.get(gt);ht===void 0&&(ht={},p.set(gt,ht));let Rt=it(T);if(Rt!==D.__cacheKey){ht[Rt]===void 0&&(ht[Rt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ht[Rt].usedTimes++;let Ct=ht[D.__cacheKey];Ct!==void 0&&(ht[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&$(T)),D.__cacheKey=Rt,D.__webglTexture=ht[Rt].texture}return j}function $t(D,T,j){return Math.floor(Math.floor(D/j)/T)}function at(D,T,j,gt){let Rt=D.updateRanges;if(Rt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,j,gt,T.data);else{Rt.sort((B,lt)=>B.start-lt.start);let Ct=0;for(let B=1;B<Rt.length;B++){let lt=Rt[Ct],Q=Rt[B],yt=lt.start+lt.count,vt=$t(Q.start,T.width,4),wt=$t(lt.start,T.width,4);Q.start<=yt+1&&vt===wt&&$t(Q.start+Q.count-1,T.width,4)===vt?lt.count=Math.max(lt.count,Q.start+Q.count-lt.start):(++Ct,Rt[Ct]=Q)}Rt.length=Ct+1;let rt=e.getParameter(s.UNPACK_ROW_LENGTH),ot=e.getParameter(s.UNPACK_SKIP_PIXELS),St=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let B=0,lt=Rt.length;B<lt;B++){let Q=Rt[B],yt=Math.floor(Q.start/4),vt=Math.ceil(Q.count/4),wt=yt%T.width,Wt=Math.floor(yt/T.width),ae=vt,xt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,wt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Wt),e.texSubImage2D(s.TEXTURE_2D,0,wt,Wt,ae,xt,j,gt,T.data)}D.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,rt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(s.UNPACK_SKIP_ROWS,St)}}function pe(D,T,j){let gt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=s.TEXTURE_3D);let ht=Bt(D,T),Rt=T.source;e.bindTexture(gt,D.__webglTexture,s.TEXTURE0+j);let Ct=n.get(Rt);if(Rt.version!==Ct.__version||ht===!0){if(e.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let xt=_e.getPrimaries(_e.workingColorSpace),Xt=T.colorSpace===fi?null:_e.getPrimaries(T.colorSpace),re=T.colorSpace===fi||xt===Xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let ot=b(T.image,!1,i.maxTextureSize);ot=Qt(T,ot);let St=r.convert(T.format,T.colorSpace),B=r.convert(T.type),lt=E(T.internalFormat,St,B,T.normalized,T.colorSpace,T.isVideoTexture);Ft(gt,T);let Q,yt=T.mipmaps,vt=T.isVideoTexture!==!0,wt=Ct.__version===void 0||ht===!0,Wt=Rt.dataReady,ae=M(T,ot);if(T.isDepthTexture)lt=_(T.format===Qi,T.type),wt&&(vt?e.texStorage2D(s.TEXTURE_2D,1,lt,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,lt,ot.width,ot.height,0,St,B,null));else if(T.isDataTexture)if(yt.length>0){vt&&wt&&e.texStorage2D(s.TEXTURE_2D,ae,lt,yt[0].width,yt[0].height);for(let xt=0,Xt=yt.length;xt<Xt;xt++)Q=yt[xt],vt?Wt&&e.texSubImage2D(s.TEXTURE_2D,xt,0,0,Q.width,Q.height,St,B,Q.data):e.texImage2D(s.TEXTURE_2D,xt,lt,Q.width,Q.height,0,St,B,Q.data);T.generateMipmaps=!1}else vt?(wt&&e.texStorage2D(s.TEXTURE_2D,ae,lt,ot.width,ot.height),Wt&&at(T,ot,St,B)):e.texImage2D(s.TEXTURE_2D,0,lt,ot.width,ot.height,0,St,B,ot.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){vt&&wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ae,lt,yt[0].width,yt[0].height,ot.depth);for(let xt=0,Xt=yt.length;xt<Xt;xt++)if(Q=yt[xt],T.format!==di)if(St!==null)if(vt){if(Wt)if(T.layerUpdates.size>0){let re=Nh(Q.width,Q.height,T.format,T.type);for(let It of T.layerUpdates){let ge=Q.data.subarray(It*re/Q.data.BYTES_PER_ELEMENT,(It+1)*re/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,It,Q.width,Q.height,1,St,ge)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,0,Q.width,Q.height,ot.depth,St,Q.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xt,lt,Q.width,Q.height,ot.depth,0,Q.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?Wt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,0,Q.width,Q.height,ot.depth,St,B,Q.data):e.texImage3D(s.TEXTURE_2D_ARRAY,xt,lt,Q.width,Q.height,ot.depth,0,St,B,Q.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{vt&&wt&&e.texStorage2D(s.TEXTURE_2D,ae,lt,yt[0].width,yt[0].height);for(let xt=0,Xt=yt.length;xt<Xt;xt++)Q=yt[xt],T.format!==di?St!==null?vt?Wt&&e.compressedTexSubImage2D(s.TEXTURE_2D,xt,0,0,Q.width,Q.height,St,Q.data):e.compressedTexImage2D(s.TEXTURE_2D,xt,lt,Q.width,Q.height,0,Q.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?Wt&&e.texSubImage2D(s.TEXTURE_2D,xt,0,0,Q.width,Q.height,St,B,Q.data):e.texImage2D(s.TEXTURE_2D,xt,lt,Q.width,Q.height,0,St,B,Q.data)}else if(T.isDataArrayTexture)if(vt){if(wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ae,lt,ot.width,ot.height,ot.depth),Wt)if(T.layerUpdates.size>0){let xt=Nh(ot.width,ot.height,T.format,T.type);for(let Xt of T.layerUpdates){let re=ot.data.subarray(Xt*xt/ot.data.BYTES_PER_ELEMENT,(Xt+1)*xt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Xt,ot.width,ot.height,1,St,B,re)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,St,B,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,lt,ot.width,ot.height,ot.depth,0,St,B,ot.data);else if(T.isData3DTexture)vt?(wt&&e.texStorage3D(s.TEXTURE_3D,ae,lt,ot.width,ot.height,ot.depth),Wt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,St,B,ot.data)):e.texImage3D(s.TEXTURE_3D,0,lt,ot.width,ot.height,ot.depth,0,St,B,ot.data);else if(T.isFramebufferTexture){if(wt)if(vt)e.texStorage2D(s.TEXTURE_2D,ae,lt,ot.width,ot.height);else{let xt=ot.width,Xt=ot.height;for(let re=0;re<ae;re++)e.texImage2D(s.TEXTURE_2D,re,lt,xt,Xt,0,St,B,null),xt>>=1,Xt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let xt=s.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),ot.parentNode!==xt){xt.appendChild(ot),f.add(T),xt.onpaint=Xt=>{let re=Xt.changedElements;for(let It of f)re.includes(It.image)&&(It.needsUpdate=!0)},xt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ot);else{let re=s.RGBA,It=s.RGBA,ge=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,re,It,ge,ot)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(yt.length>0){if(vt&&wt){let xt=qt(yt[0]);e.texStorage2D(s.TEXTURE_2D,ae,lt,xt.width,xt.height)}for(let xt=0,Xt=yt.length;xt<Xt;xt++)Q=yt[xt],vt?Wt&&e.texSubImage2D(s.TEXTURE_2D,xt,0,0,St,B,Q):e.texImage2D(s.TEXTURE_2D,xt,lt,St,B,Q);T.generateMipmaps=!1}else if(vt){if(wt){let xt=qt(ot);e.texStorage2D(s.TEXTURE_2D,ae,lt,xt.width,xt.height)}Wt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,B,ot)}else e.texImage2D(s.TEXTURE_2D,0,lt,St,B,ot);w(T)&&T.mipmapsAutoUpdate===!0&&S(gt),Ct.__version=Rt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ie(D,T,j){if(T.image.length!==6)return;let gt=Bt(D,T),ht=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+j);let Rt=n.get(ht);if(ht.version!==Rt.__version||gt===!0){e.activeTexture(s.TEXTURE0+j);let Ct=_e.getPrimaries(_e.workingColorSpace),rt=T.colorSpace===fi?null:_e.getPrimaries(T.colorSpace),ot=T.colorSpace===fi||Ct===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let St=T.isCompressedTexture||T.image[0].isCompressedTexture,B=T.image[0]&&T.image[0].isDataTexture,lt=[];for(let It=0;It<6;It++)!St&&!B?lt[It]=b(T.image[It],!0,i.maxCubemapSize):lt[It]=B?T.image[It].image:T.image[It],lt[It]=Qt(T,lt[It]);let Q=lt[0],yt=r.convert(T.format,T.colorSpace),vt=r.convert(T.type),wt=E(T.internalFormat,yt,vt,T.normalized,T.colorSpace),Wt=T.isVideoTexture!==!0,ae=Rt.__version===void 0||gt===!0,xt=ht.dataReady,Xt=M(T,Q);Ft(s.TEXTURE_CUBE_MAP,T);let re;if(T.isDepthTexture){if(wt=_(T.format===Qi,T.type),ae)if(Wt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,wt,Q.width,Q.height);else for(let It=0;It<6;It++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,wt,Q.width,Q.height,0,yt,vt,null)}else if(St){Wt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,wt,Q.width,Q.height);for(let It=0;It<6;It++){re=lt[It].mipmaps;for(let ge=0;ge<re.length;ge++){let Ke=re[ge];T.format!==di?yt!==null?Wt?xt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge,0,0,Ke.width,Ke.height,yt,Ke.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge,wt,Ke.width,Ke.height,0,Ke.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge,0,0,Ke.width,Ke.height,yt,vt,Ke.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge,wt,Ke.width,Ke.height,0,yt,vt,Ke.data)}}}else{if(re=T.mipmaps,Wt&&ae){re.length>0&&Xt++;let It=qt(lt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,wt,It.width,It.height)}for(let It=0;It<6;It++)if(B){Wt?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,lt[It].width,lt[It].height,yt,vt,lt[It].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,wt,lt[It].width,lt[It].height,0,yt,vt,lt[It].data);for(let ge=0;ge<re.length;ge++){let wn=re[ge].image[It].image;Wt?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge+1,0,0,wn.width,wn.height,yt,vt,wn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge+1,wt,wn.width,wn.height,0,yt,vt,wn.data)}}else{Wt?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,yt,vt,lt[It]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,wt,yt,vt,lt[It]);for(let ge=0;ge<re.length;ge++){let Ke=re[ge];Wt?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge+1,0,0,yt,vt,Ke.image[It]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge+1,wt,yt,vt,Ke.image[It])}}}w(T)&&T.mipmapsAutoUpdate===!0&&S(s.TEXTURE_CUBE_MAP),Rt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function me(D,T,j,gt,ht,Rt){let Ct=r.convert(j.format,j.colorSpace),rt=r.convert(j.type),ot=E(j.internalFormat,Ct,rt,j.normalized,j.colorSpace),St=n.get(T),B=n.get(j);if(B.__renderTarget=T,!St.__hasExternalTextures){let lt=Math.max(1,T.width>>Rt),Q=Math.max(1,T.height>>Rt);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?e.texImage3D(ht,Rt,ot,lt,Q,T.depth,0,Ct,rt,null):e.texImage2D(ht,Rt,ot,lt,Q,0,Ct,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),At(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,gt,ht,B.__webglTexture,0,ke(T)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,gt,ht,B.__webglTexture,Rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(D,T,j){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer){let gt=T.depthTexture,ht=gt&&gt.isDepthTexture?gt.type:null,Rt=_(T.stencilBuffer,ht),Ct=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;At(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke(T),Rt,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke(T),Rt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Rt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,D)}else{let gt=T.textures;for(let ht=0;ht<gt.length;ht++){let Rt=gt[ht],Ct=r.convert(Rt.format,Rt.colorSpace),rt=r.convert(Rt.type),ot=E(Rt.internalFormat,Ct,rt,Rt.normalized,Rt.colorSpace);At(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke(T),ot,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke(T),ot,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ot,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(D,T,j){let gt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ht=n.get(T.depthTexture);ht.__renderTarget=T;let Rt=gt?T.depthTexture.image[0]:T.depthTexture.image;(!ht.__webglTexture||Rt.width!==T.width||Rt.height!==T.height)&&(Rt.width=T.width,Rt.height=T.height,T.depthTexture.needsUpdate=!0),gt?C(T.depthTexture,0):Tt(T.depthTexture,0);let Ct=ht.__webglTexture,rt=ke(T),ot=gt?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,St=T.depthTexture.format===Qi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ki)At(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,St,ot,Ct,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,St,ot,Ct,0);else if(T.depthTexture.format===Qi)At(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,St,ot,Ct,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,St,ot,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(D){let T=n.get(D),j=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){let gt=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){let ht=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",ht)};gt.addEventListener("dispose",ht),T.__depthDisposeCallback=ht}T.__boundDepthTexture=gt}if(D.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let gt=0;gt<6;gt++)Se(T.__webglFramebuffer[gt],D,gt);else D.texture.mipmaps.length>0?Se(T.__webglFramebuffer[0],D,0):Se(T.__webglFramebuffer,D,0);else if(j){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=s.createRenderbuffer(),Ye(T.__webglDepthbuffer[gt],D,!1);else{let ht=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=T.__webglDepthbuffer[gt];s.bindRenderbuffer(s.RENDERBUFFER,Rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,Rt)}}else if(D.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Ye(T.__webglDepthbuffer,D,!1);else{let ht=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,Rt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(D,T,j){let gt=n.get(D);T!==void 0&&me(gt.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&$e(D)}function Oe(D){let T=D.texture,j=n.get(D),gt=n.get(T);D.addEventListener("dispose",k),I(D);let ht=D.textures,Rt=D.isWebGLCubeRenderTarget===!0,Ct=ht.length>1;if(Ct||(gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture()),gt.__version=T.version,a.memory.textures++),Rt){j.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(T.mipmaps.length>0){j.__webglFramebuffer[rt]=[];for(let ot=0;ot<T.mipmaps.length;ot++)j.__webglFramebuffer[rt][ot]=s.createFramebuffer()}else j.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(T.mipmaps.length>0){j.__webglFramebuffer=[];for(let rt=0;rt<T.mipmaps.length;rt++)j.__webglFramebuffer[rt]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let rt=0,ot=ht.length;rt<ot;rt++){let St=n.get(ht[rt]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),a.memory.textures++)}if(D.samples>0&&At(D)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let rt=0;rt<ht.length;rt++){let ot=ht[rt];j.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[rt]);let St=r.convert(ot.format,ot.colorSpace),B=r.convert(ot.type),lt=E(ot.internalFormat,St,B,ot.normalized,ot.colorSpace,D.isXRRenderTarget===!0),Q=ke(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,lt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,j.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Ye(j.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Rt){e.bindTexture(s.TEXTURE_CUBE_MAP,gt.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,T);for(let rt=0;rt<6;rt++)if(T.mipmaps.length>0)for(let ot=0;ot<T.mipmaps.length;ot++)me(j.__webglFramebuffer[rt][ot],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ot);else me(j.__webglFramebuffer[rt],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);w(T)?S(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(Ct){for(let rt=0,ot=ht.length;rt<ot;rt++){let St=ht[rt],B=n.get(St),lt=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(lt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,B.__webglTexture),Ft(lt,St),me(j.__webglFramebuffer,D,St,s.COLOR_ATTACHMENT0+rt,lt,0),w(St)&&S(lt)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(rt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,gt.__webglTexture),Ft(rt,T),T.mipmaps.length>0)for(let ot=0;ot<T.mipmaps.length;ot++)me(j.__webglFramebuffer[ot],D,T,s.COLOR_ATTACHMENT0,rt,ot);else me(j.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,rt,0);w(T)?S(rt):T.mipmaps.length>0&&s.texParameteri(rt,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}D.depthBuffer&&$e(D)}function q(D){let T=D.textures;for(let j=0,gt=T.length;j<gt;j++){let ht=T[j];if(w(ht)&&ht.mipmapsAutoUpdate===!0){let Rt=v(D),Ct=n.get(ht).__webglTexture;e.bindTexture(Rt,Ct),S(Rt),e.unbindTexture()}}}let ze=[];function ue(D){if(D.samples>0){if(At(D)===!1){let T=D.textures,j=D.width,gt=D.height,ht=s.COLOR_BUFFER_BIT,Rt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(D),rt=T.length>1;if(rt)for(let St=0;St<T.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let St=0;St<T.length;St++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[St]);let B=n.get(T[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,B,0)}s.blitFramebuffer(0,0,j,gt,0,0,j,gt,ht,s.NEAREST),l===!0&&(ze.length=0,ze.push(s.COLOR_ATTACHMENT0+St),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&ze.push(Rt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ze))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let St=0;St<T.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[St]);let B=n.get(T[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,B,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let T=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ke(D){return Math.min(i.maxSamples,D.samples)}function At(D){let T=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Le(D){let T=a.render.frame;u.get(D)!==T&&(u.set(D,T),D.update())}function Qt(D,T){let j=D.colorSpace,gt=D.format,ht=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==aa&&j!==fi&&(_e.getTransfer(j)===De?(gt!==di||ht!==Bn)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",j)),T}function qt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=zt,this.resetTextureUnits=st,this.getTextureUnits=ft,this.setTextureUnits=Dt,this.setTexture2D=Tt,this.setTexture2DArray=kt,this.setTexture3D=F,this.setTextureCube=C,this.rebindTextures=Fe,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=At,this.dispose=X}function oy(s,t){function e(n,i=fi){let r,a=_e.getTransfer(i);if(n===Bn)return s.UNSIGNED_BYTE;if(n===cl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===hl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Sh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===wh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===bh)return s.BYTE;if(n===Mh)return s.SHORT;if(n===Nr)return s.UNSIGNED_SHORT;if(n===ll)return s.INT;if(n===ui)return s.UNSIGNED_INT;if(n===ei)return s.FLOAT;if(n===Hn)return s.HALF_FLOAT;if(n===Eh)return s.ALPHA;if(n===Th)return s.RGB;if(n===di)return s.RGBA;if(n===Ki)return s.DEPTH_COMPONENT;if(n===Qi)return s.DEPTH_STENCIL;if(n===ul)return s.RED;if(n===dl)return s.RED_INTEGER;if(n===ys)return s.RG;if(n===fl)return s.RG_INTEGER;if(n===pl)return s.RGBA_INTEGER;if(n===Ca||n===Pa||n===Ia||n===La)if(a===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===xl||n===yl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===_l||n===bl||n===Ml||n===Sl||n===Da||n===wl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vl||n===_l)return a===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ml)return r.COMPRESSED_R11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Da)return r.COMPRESSED_RG11_EAC;if(n===wl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===kl||n===Nl||n===Ul||n===Fl||n===Ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===El)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ol)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zl||n===Bl||n===Hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zl)return a===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===Vl||n===ka||n===Wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ba(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new vn({vertexShader:ly,fragmentShader:cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new W(new Yt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kh=class extends Ai{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,m=null,x=typeof XRWebGLBinding<"u",g=new $h,y={},b=e.getContextAttributes(),w=null,S=null,v=[],E=[],_=new Kt,M=null,I=null,P=new Tn;P.viewport=new Je;let O=new Tn;O.viewport=new Je;let k=[P,O],H=new il,N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let Tt=v[it];return Tt===void 0&&(Tt=new wr,v[it]=Tt),Tt.getTargetRaySpace()},this.getControllerGrip=function(it){let Tt=v[it];return Tt===void 0&&(Tt=new wr,v[it]=Tt),Tt.getGripSpace()},this.getHand=function(it){let Tt=v[it];return Tt===void 0&&(Tt=new wr,v[it]=Tt),Tt.getHandSpace()};function Z(it){let Tt=E.indexOf(it.inputSource);if(Tt===-1)return;let kt=v[Tt];kt!==void 0&&(kt.update(it.inputSource,it.frame,c||a),kt.dispatchEvent({type:it.type,data:it.inputSource}))}function $(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",et);for(let it=0;it<v.length;it++){let Tt=E[it];Tt!==null&&(E[it]=null,v[it].disconnect(Tt))}N=null,X=null,g.reset();for(let it in y)delete y[it];if(t.setRenderTarget(w),p=null,d=null,f=null,i=null,S=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),I!==null){let it=I.camera;it.fov=I.fov,it.zoom=I.zoom,it.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(it){if(i=it,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",$),i.addEventListener("inputsourceschange",et),b.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let kt=null,F=null,C=null;b.depth&&(C=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,kt=b.stencil?Qi:Ki,F=b.stencil?Xs:ui);let K={colorFormat:e.RGBA8,depthFormat:C,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(K),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Dn(d.textureWidth,d.textureHeight,{format:di,type:Bn,depthTexture:new Ji(d.textureWidth,d.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,kt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let kt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,kt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Dn(p.framebufferWidth,p.framebufferHeight,{format:di,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),zt.setContext(i),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function et(it){for(let Tt=0;Tt<it.removed.length;Tt++){let kt=it.removed[Tt],F=E.indexOf(kt);F>=0&&(E[F]=null,v[F].disconnect(kt))}for(let Tt=0;Tt<it.added.length;Tt++){let kt=it.added[Tt],F=E.indexOf(kt);if(F===-1){for(let K=0;K<v.length;K++)if(K>=E.length){E.push(kt),F=K;break}else if(E[K]===null){E[K]=kt,F=K;break}if(F===-1)break}let C=v[F];C&&C.connect(kt)}}function J(it,Tt){Tt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(Tt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(i===null)return;let Tt=it.near,kt=it.far;g.texture!==null&&(g.depthNear>0&&(Tt=g.depthNear),g.depthFar>0&&(kt=g.depthFar)),H.near=O.near=P.near=Tt,H.far=O.far=P.far=kt,(N!==H.near||X!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,X=H.far),H.layers.mask=it.layers.mask|6,P.layers.mask=H.layers.mask&-5,O.layers.mask=H.layers.mask&-3;let F=it.parent,C=H.cameras;J(H,F);for(let K=0;K<C.length;K++)J(C[K],F);H.projectionMatrix.copy(P.projectionMatrix),H.projectionMatrixInverse.copy(P.projectionMatrixInverse),I===null&&it.isPerspectiveCamera&&(I={camera:it,fov:it.fov,zoom:it.zoom}),st(it,H,F)};function st(it,Tt,kt){kt===null?it.matrix.copy(Tt.matrixWorld):(it.matrix.copy(kt.matrixWorld),it.matrix.invert(),it.matrix.multiply(Tt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(Tt.projectionMatrix),it.projectionMatrixInverse.copy(Tt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=ha*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(it){l=it,d!==null&&(d.fixedFoveation=it),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=it)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(it){return y[it]};let ft=null;function Dt(it,Tt){if(u=Tt.getViewerPose(c||a),m=Tt,u!==null){let kt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let F=!1;kt.length!==H.cameras.length&&(H.cameras.length=0,F=!0);for(let ut=0;ut<kt.length;ut++){let Ft=kt[ut],Bt=null;if(p!==null)Bt=p.getViewport(Ft);else{let at=f.getViewSubImage(d,Ft);Bt=at.viewport,ut===0&&(t.setRenderTargetTextures(S,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(S))}let $t=k[ut];$t===void 0&&($t=new Tn,$t.layers.enable(ut),$t.viewport=new Je,k[ut]=$t),$t.matrix.fromArray(Ft.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Ft.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),ut===0&&(H.matrix.copy($t.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),F===!0&&H.cameras.push($t)}let C=i.enabledFeatures;if(C&&C.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let ut=f.getDepthInformation(kt[0]);ut&&ut.isValid&&ut.texture&&g.init(ut,i.renderState)}if(C&&C.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let ut=0;ut<kt.length;ut++){let Ft=kt[ut].camera;if(Ft){let Bt=y[Ft];Bt||(Bt=new ba,y[Ft]=Bt);let $t=f.getCameraImage(Ft);Bt.sourceTexture=$t}}}}for(let kt=0;kt<v.length;kt++){let F=E[kt],C=v[kt];F!==null&&C!==void 0&&C.update(F,Tt,c||a)}ft&&ft(it,Tt),Tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Tt}),m=null}let zt=new rf;zt.setAnimationLoop(Dt),this.setAnimationLoop=function(it){ft=it},this.dispose=function(){}}},hy=new ce,mf=new oe;mf.set(-1,0,0,0,1,0,0,0,1);function uy(s,t){function e(g,y){g.matrixAutoUpdate===!0&&g.updateMatrix(),y.value.copy(g.matrix)}function n(g,y){y.color.getRGB(g.fogColor.value,Lh(s)),y.isFog?(g.fogNear.value=y.near,g.fogFar.value=y.far):y.isFogExp2&&(g.fogDensity.value=y.density)}function i(g,y,b,w,S){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?r(g,y):y.isMeshLambertMaterial?(r(g,y),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(r(g,y),f(g,y)):y.isMeshPhongMaterial?(r(g,y),u(g,y),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(r(g,y),d(g,y),y.isMeshPhysicalMaterial&&p(g,y,S)):y.isMeshMatcapMaterial?(r(g,y),m(g,y)):y.isMeshDepthMaterial?r(g,y):y.isMeshDistanceMaterial?(r(g,y),x(g,y)):y.isMeshNormalMaterial?r(g,y):y.isLineBasicMaterial?(a(g,y),y.isLineDashedMaterial&&o(g,y)):y.isPointsMaterial?l(g,y,b,w):y.isSpriteMaterial?c(g,y):y.isShadowMaterial?(g.color.value.copy(y.color),g.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function r(g,y){g.opacity.value=y.opacity,y.color&&g.diffuse.value.copy(y.color),y.emissive&&g.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(g.map.value=y.map,e(y.map,g.mapTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,e(y.alphaMap,g.alphaMapTransform)),y.bumpMap&&(g.bumpMap.value=y.bumpMap,e(y.bumpMap,g.bumpMapTransform),g.bumpScale.value=y.bumpScale,y.side===An&&(g.bumpScale.value*=-1)),y.normalMap&&(g.normalMap.value=y.normalMap,e(y.normalMap,g.normalMapTransform),g.normalScale.value.copy(y.normalScale),y.side===An&&g.normalScale.value.negate()),y.displacementMap&&(g.displacementMap.value=y.displacementMap,e(y.displacementMap,g.displacementMapTransform),g.displacementScale.value=y.displacementScale,g.displacementBias.value=y.displacementBias),y.emissiveMap&&(g.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,g.emissiveMapTransform)),y.specularMap&&(g.specularMap.value=y.specularMap,e(y.specularMap,g.specularMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest);let b=t.get(y),w=b.envMap,S=b.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(hy.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mf),g.reflectivity.value=y.reflectivity,g.ior.value=y.ior,g.refractionRatio.value=y.refractionRatio),y.lightMap&&(g.lightMap.value=y.lightMap,g.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,g.lightMapTransform)),y.aoMap&&(g.aoMap.value=y.aoMap,g.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,g.aoMapTransform))}function a(g,y){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,y.map&&(g.map.value=y.map,e(y.map,g.mapTransform))}function o(g,y){g.dashSize.value=y.dashSize,g.totalSize.value=y.dashSize+y.gapSize,g.scale.value=y.scale}function l(g,y,b,w){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,g.size.value=y.size*b,g.scale.value=w*.5,y.map&&(g.map.value=y.map,e(y.map,g.uvTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,e(y.alphaMap,g.alphaMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest)}function c(g,y){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,g.rotation.value=y.rotation,y.map&&(g.map.value=y.map,e(y.map,g.mapTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,e(y.alphaMap,g.alphaMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest)}function u(g,y){g.specular.value.copy(y.specular),g.shininess.value=Math.max(y.shininess,1e-4)}function f(g,y){y.gradientMap&&(g.gradientMap.value=y.gradientMap)}function d(g,y){g.metalness.value=y.metalness,y.metalnessMap&&(g.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,g.metalnessMapTransform)),g.roughness.value=y.roughness,y.roughnessMap&&(g.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,g.roughnessMapTransform)),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)}function p(g,y,b){g.ior.value=y.ior,y.diffuseRoughness>0&&(g.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=y.diffuseRoughnessMap,e(y.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),y.sheen>0&&(g.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),g.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(g.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,g.sheenColorMapTransform)),y.sheenRoughnessMap&&(g.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,g.sheenRoughnessMapTransform))),y.clearcoat>0&&(g.clearcoat.value=y.clearcoat,g.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(g.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,g.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(g.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===An&&g.clearcoatNormalScale.value.negate())),y.dispersion>0&&(g.dispersion.value=y.dispersion),y.retroreflectivity>0&&(g.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(g.iridescence.value=y.iridescence,g.iridescenceIOR.value=y.iridescenceIOR,g.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(g.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,g.iridescenceMapTransform)),y.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),y.transmission>0&&(g.transmission.value=y.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),y.transmissionMap&&(g.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,g.transmissionMapTransform)),g.thickness.value=y.thickness,y.thicknessMap&&(g.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=y.attenuationDistance,g.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(g.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(g.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=y.specularIntensity,g.specularColor.value.copy(y.specularColor),y.specularColorMap&&(g.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,g.specularColorMapTransform)),y.specularIntensityMap&&(g.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,y){y.matcap&&(g.matcap.value=y.matcap)}function x(g,y){let b=t.get(y).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dy(s,t,e,n){let i={},r={};function a(b,w){let S=w.program;n.uniformBlockBinding(b,S,i[b.id])}function o(b,w){let S=i[b.id];S===void 0&&(m(b),S=l(b),i[b.id]=S,b.addEventListener("dispose",g));let v=w.program;n.updateUBOMapping(b,v);let E=t.render.frame;r[b.id]!==E&&(c(b),r[b.id]=E)}function l(b){let w=s.createBuffer(),S=b.__size,v=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,S,v),s.bindBuffer(s.UNIFORM_BUFFER,null),w}function c(b){let w=i[b.id],S=b.uniforms,v=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let E=0,_=S.length;E<_;E++){let M=S[E];if(Array.isArray(M))for(let I=0,P=M.length;I<P;I++)u(M[I],E,I,v);else u(M,E,0,v)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(b,w,S,v){if(d(b,w,S,v)===!0){let E=b.__offset,_=b.value;if(Array.isArray(_)){let M=0;for(let I=0;I<_.length;I++){let P=_[I],O=x(P,!0);f(P,b.__data,M),M+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,b.__data)}}function f(b,w,S){typeof b=="number"||typeof b=="boolean"?w[S]=b:b.isMatrix3?(w[S]=b.elements[0],w[S+1]=b.elements[1],w[S+2]=b.elements[2],w[S+3]=0,w[S+4]=b.elements[3],w[S+5]=b.elements[4],w[S+6]=b.elements[5],w[S+7]=0,w[S+8]=b.elements[6],w[S+9]=b.elements[7],w[S+10]=b.elements[8],w[S+11]=0):ArrayBuffer.isView(b)?w.set(b.subarray(0,w.length-S),S):b.toArray(w,S)}function d(b,w,S,v){let E=b.value,_=w+"_"+S;if(Array.isArray(E)){v[_]===void 0&&(v[_]=[]);let M=v[_],I=!1;for(let P=0;P<E.length;P++)p(E[P],M,P)===!0&&(I=!0);return I}return p(E,v,_)}function p(b,w,S){if(w[S]===void 0)return typeof b=="number"||typeof b=="boolean"?w[S]=b:ArrayBuffer.isView(b)?w[S]=b.slice():w[S]=b.clone(),!0;{let v=w[S];if(typeof b=="number"||typeof b=="boolean"){if(v!==b)return w[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(v.equals(b)===!1)return v.copy(b),!0}}return!1}function m(b){let w=b.uniforms,S=0,v=16;for(let _=0,M=w.length;_<M;_++){let I=Array.isArray(w[_])?w[_]:[w[_]];for(let P=0,O=I.length;P<O;P++){let k=I[P],H=Array.isArray(k.value)?k.value:[k.value],N=Array.isArray(w[_])||Array.isArray(k.value),X=S;for(let $=0,et=H.length;$<et;$++){let J=H[$],st=x(J,N),ft=S%v,Dt=ft%st.boundary,zt=ft+Dt;S+=Dt,zt!==0&&v-zt<st.storage&&(S+=v-zt),$===0&&(X=S),S+=st.storage}let Z=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new Z((S-X)/Float32Array.BYTES_PER_ELEMENT),k.__offset=X}}let E=S%v;return E>0&&(S+=v-E),b.__size=S,b.__cache={},this}function x(b,w){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=16,S.storage=48):b.isMatrix4?(S.boundary=16,S.storage=64):b.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",b),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(b){let w=b.target;w.removeEventListener("dispose",g),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function y(){for(let b in i)s.deleteBuffer(i[b]);i={},r={}}return{bind:a,update:o,dispose:y}}var fy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ki=null;function py(){return ki===null&&(ki=new ga(fy,16,16,ys,Hn),ki.name="DFG_LUT",ki.minFilter=cn,ki.magFilter=cn,ki.wrapS=Ei,ki.wrapT=Ei,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}var $l=class{constructor(t={}){let{canvas:e=Ed(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Bn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=p,g=new Set([pl,fl,dl]),y=new Set([Bn,ui,Nr,Xs,cl,hl]),b=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},v=null,E=null,_=[],M=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,O=!1,k=null,H=null,N=null,X=null;this._outputColorSpace=rn;let Z=0,$=0,et=null,J=-1,st=null,ft=new Je,Dt=new Je,zt=null,it=new Jt(0),Tt=0,kt=e.width,F=e.height,C=1,K=null,nt=null,ut=new Je(0,0,kt,F),Ft=new Je(0,0,kt,F),Bt=!1,$t=new ds,at=new Oo,pe=!1,Ie=!1,me=new ce,Ye=new U,Se=new Je,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Oe(){return et===null?C:1}let q=n;function ze(R,G){return e.getContext(R,G)}let ue,ke,At,Le,Qt,qt,D,T,j,gt,ht,Rt,Ct,rt,ot,St,B,lt,Q,yt,vt,wt,Wt;try{let R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",It,!1),q===null){let G="webgl2";if(q=ze(G,R),q===null)throw ze(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(R){throw e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",It,!1),ie("WebGLRenderer: "+R.message),R}function ae(){ue=new E1(q),ue.init(),vt=new oy(q,ue),ke=new p1(q,ue,t,vt),At=new ry(q,ue),ke.reversedDepthBuffer&&d&&At.buffers.depth.setReversed(!0),H=q.createFramebuffer(),N=q.createFramebuffer(),X=q.createFramebuffer(),Le=new R1(q),Qt=new Xx,qt=new ay(q,ue,At,Qt,ke,vt,Le),D=new w1(P),T=new P0(q),wt=new d1(q,T),j=new T1(q,T,Le,wt),gt=new P1(q,j,T,wt,Le),lt=new C1(q,ke,qt),ot=new m1(Qt),ht=new Wx(P,D,ue,ke,wt,ot),Rt=new uy(P,Qt),Ct=new Zx,rt=new Qx(ue),B=new u1(P,D,At,gt,m,l),St=new sy(P,gt,ke),Wt=new dy(q,Le,ke,At),Q=new f1(q,ue,Le),yt=new A1(q,ue,Le),Le.programs=ht.programs,P.capabilities=ke,P.extensions=ue,P.properties=Qt,P.renderLists=Ct,P.shadowMap=St,P.state=At,P.info=Le}x!==Bn&&(I=new L1(x,e.width,e.height,o,i,r));let xt=new Kh(P,q);this.xr=xt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(R){R!==void 0&&(C=R,this.setSize(kt,F,!1))},this.getSize=function(R){return R.set(kt,F)},this.setSize=function(R,G,A=!0){if(xt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=R,F=G,e.width=Math.floor(R*C),e.height=Math.floor(G*C),A===!0&&(e.style.width=R+"px",e.style.height=G+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(kt*C,F*C).floor()},this.setDrawingBufferSize=function(R,G,A){kt=R,F=G,C=A,e.width=Math.floor(R*A),e.height=Math.floor(G*A),this.setViewport(0,0,R,G)},this.setEffects=function(R){if(x===Bn){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let G=0;G<R.length;G++)if(R[G].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ft)},this.getViewport=function(R){return R.copy(ut)},this.setViewport=function(R,G,A,L){R.isVector4?ut.set(R.x,R.y,R.z,R.w):ut.set(R,G,A,L),At.viewport(ft.copy(ut).multiplyScalar(Oe()).round())},this.getScissor=function(R){return R.copy(Ft)},this.setScissor=function(R,G,A,L){R.isVector4?Ft.set(R.x,R.y,R.z,R.w):Ft.set(R,G,A,L),At.scissor(Dt.copy(Ft).multiplyScalar(Oe()).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(R){At.setScissorTest(Bt=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){nt=R},this.getClearColor=function(R){return R.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,A=!0){let L=0;if(R){let V=!1;if(et!==null){let ct=et.texture.format;V=g.has(ct)}if(V){let ct=et.texture.type,pt=y.has(ct),dt=B.getClearColor(),Et=B.getClearAlpha(),Nt=dt.r,Vt=dt.g,Zt=dt.b;pt?(b[0]=Nt,b[1]=Vt,b[2]=Zt,b[3]=Et,q.clearBufferuiv(q.COLOR,0,b)):(w[0]=Nt,w[1]=Vt,w[2]=Zt,w[3]=Et,q.clearBufferiv(q.COLOR,0,w))}else L|=q.COLOR_BUFFER_BIT}G&&(L|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),A&&(L|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L!==0&&q.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),k=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",It,!1),B.dispose(),Ct.dispose(),rt.dispose(),qt.dispose(),Qt.dispose(),D.dispose(),gt.dispose(),j.dispose(),wt.dispose(),Wt.dispose(),ht.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",yi),xt.removeEventListener("sessionend",Oi),Cn.stop()};function Xt(R){R.preventDefault(),ca("WebGLRenderer: Context Lost."),O=!0}function re(){ca("WebGLRenderer: Context Restored."),O=!1;let R=Le.autoReset,G=St.enabled,A=St.autoUpdate,L=St.needsUpdate,V=St.type;ae(),Le.autoReset=R,St.enabled=G,St.autoUpdate=A,St.needsUpdate=L,St.type=V}function It(R){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ge(R){let G=R.target;G.removeEventListener("dispose",ge),Ke(G)}function Ke(R){wn(R),Qt.remove(R)}function wn(R){let G=Qt.get(R).programs;G!==void 0&&(G.forEach(function(A){ht.releaseProgram(A)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,A,L,V,ct){G===null&&(G=$e);let pt=V.isMesh&&V.matrixWorld.determinantAffine()<0,dt=As(R,G,A,L,V);At.setMaterial(L,pt);let Et=A.index,Nt=1;if(L.wireframe===!0){if(Et=j.getWireframeAttribute(A),Et===void 0)return;Nt=2}let Vt=A.drawRange,Zt=A.attributes.position,Pt=Vt.start*Nt,se=(Vt.start+Vt.count)*Nt;ct!==null&&(Pt=Math.max(Pt,ct.start*Nt),se=Math.min(se,(ct.start+ct.count)*Nt)),Et!==null?(Pt=Math.max(Pt,0),se=Math.min(se,Et.count)):Zt!=null&&(Pt=Math.max(Pt,0),se=Math.min(se,Zt.count));let ve=se-Pt;if(ve<0||ve===1/0)return;wt.setup(V,L,dt,A,Et);let Re,we=Q;if(Et!==null&&(Re=T.get(Et),we=yt,we.setIndex(Re)),V.isMesh)L.wireframe===!0?(At.setLineWidth(L.wireframeLinewidth*Oe()),we.setMode(q.LINES)):we.setMode(q.TRIANGLES);else if(V.isLine){let je=L.linewidth;je===void 0&&(je=1),At.setLineWidth(je*Oe()),V.isLineSegments?we.setMode(q.LINES):V.isLineLoop?we.setMode(q.LINE_LOOP):we.setMode(q.LINE_STRIP)}else V.isPoints?we.setMode(q.POINTS):V.isSprite&&we.setMode(q.TRIANGLES);if(V.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))we.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let je=V._multiDrawStarts,Ht=V._multiDrawCounts,fn=V._multiDrawCount,Y=Et?T.get(Et).bytesPerElement:1,Lt=Qt.get(L).currentProgram.getUniforms();for(let Gt=0;Gt<fn;Gt++)Lt.setValue(q,"_gl_DrawID",Gt),we.render(je[Gt]/Y,Ht[Gt])}else if(V.isInstancedMesh)we.renderInstances(Pt,ve,V.count);else if(A.isInstancedBufferGeometry){let je=A._maxInstanceCount!==void 0?A._maxInstanceCount:1/0,Ht=Math.min(A.instanceCount,je);we.renderInstances(Pt,ve,Ht)}else we.render(Pt,ve)};function zn(R,G,A,L){k!==null&&R.isNodeMaterial&&k.setObject(L,R),pe===!0&&ot.setState(R,A,!1),R.transparent===!0&&R.side===ye&&R.forceSinglePass===!1?(R.side=An,R.needsUpdate=!0,zi(R,G,L),R.side=xs,R.needsUpdate=!0,zi(R,G,L),R.side=ye):zi(R,G,L)}this.compile=function(R,G,A=null){A===null&&(A=R),k!==null&&k.renderStart(R,G,A),E=rt.get(A),E.init(G),M.push(E),A.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),R!==A&&R.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),k!==null&&k.updateLights(E.state.lightsArray),Ie=this.localClippingEnabled,pe=ot.init(this.clippingPlanes,Ie),pe===!0&&ot.setGlobalState(this.clippingPlanes,G),k!==null&&St.render(E.state.shadowsArray,A,G);let L=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ct=V.material;if(ct)if(Array.isArray(ct))for(let pt=0;pt<ct.length;pt++){let dt=ct[pt];zn(dt,A,G,V),L.add(dt)}else zn(ct,A,G,V),L.add(ct)}),E=M.pop(),k!==null&&k.renderEnd(),L},this.compileAsync=function(R,G,A=null){let L=this.compile(R,G,A);return new Promise(V=>{function ct(){if(L.forEach(function(pt){let Et=Qt.get(pt).currentProgram;(Et===void 0||Et.isReady())&&L.delete(pt)}),L.size===0){V(R);return}setTimeout(ct,10)}ue.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let xi=null;function ri(R){xi&&xi(R)}function yi(){Cn.stop()}function Oi(){Cn.start()}let Cn=new rf;Cn.setAnimationLoop(ri),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(R){xi=R,xt.setAnimationLoop(R),R===null?Cn.stop():Cn.start()},xt.addEventListener("sessionstart",yi),xt.addEventListener("sessionend",Oi),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;k!==null&&k.renderStart(R,G);let A=xt.enabled===!0&&xt.isPresenting===!0,L=I!==null&&(et===null||A)&&I.begin(P,et);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(G),G=xt.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,G,et),E=rt.get(R,M.length),E.init(G),E.state.textureUnits=qt.getTextureUnits(),M.push(E),me.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?at.setFromArrayCamera(G):$t.setFromProjectionMatrix(me,ti,G.reversedDepth),Ie=this.localClippingEnabled,pe=ot.init(this.clippingPlanes,Ie),v=Ct.get(R,_.length),v.init(),_.push(v),this.info.render.frame++,xt.enabled===!0&&xt.isPresenting===!0){let pt=P.xr.getDepthSensingMesh();pt!==null&&vi(pt,G,-1/0,P.sortObjects)}vi(R,G,0,P.sortObjects),v.finish(),k!==null&&k.updateLights(E.state.lightsArray),P.sortObjects===!0&&v.sort(K,nt),Fe=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,Fe&&B.addToRenderList(v,R),this.info.autoReset===!0&&this.info.reset(),pe===!0&&ot.beginShadows();let V=E.state.shadowsArray;if(St.render(V,R,G),pe===!0&&ot.endShadows(),(L&&I.hasRenderPass())===!1){let pt=v.opaque,dt=v.transmissive;if(E.setupLights(),G.isArrayCamera){let Et=G.cameras;if(dt.length>0)for(let Nt=0,Vt=Et.length;Nt<Vt;Nt++){let Zt=Et[Nt];Es(pt,dt,R,Zt)}Fe&&B.render(R);for(let Nt=0,Vt=Et.length;Nt<Vt;Nt++){let Zt=Et[Nt];Kn(v,R,Zt,Zt.viewport)}}else dt.length>0&&Es(pt,dt,R,G),Fe&&B.render(R),Kn(v,R,G)}et!==null&&$===0&&(qt.updateMultisampleRenderTarget(et),qt.updateRenderTargetMipmap(et)),L&&I.end(P),R.isScene===!0&&R.onAfterRender(P,R,G),wt.resetDefaultState(),J=-1,st=null,M.pop(),M.length>0?(E=M[M.length-1],qt.setTextureUnits(E.state.textureUnits),pe===!0&&ot.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?v=_[_.length-1]:v=null,k!==null&&k.renderEnd()};function vi(R,G,A,L){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)A=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){let pt=G.isArrayCamera?at:$t;if(!R.frustumCulled||R.intersectsFrustum(pt)){L&&Se.setFromMatrixPosition(R.matrixWorld).applyMatrix4(me);let dt=gt.update(R),Et=R.material;Et.visible&&v.push(R,dt,Et,A,Se.z,null,G)}}else if(R.isMesh||R.isLine||R.isPoints){let pt=G.isArrayCamera?at:$t;if(!R.frustumCulled||R.intersectsFrustum(pt)){let dt=gt.update(R),Et=R.material;if(L&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Se.copy(R.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Se.copy(dt.boundingSphere.center)),Se.applyMatrix4(R.matrixWorld).applyMatrix4(me)),Array.isArray(Et)){let Nt=dt.groups;for(let Vt=0,Zt=Nt.length;Vt<Zt;Vt++){let Pt=Nt[Vt],se=Et[Pt.materialIndex];se&&se.visible&&v.push(R,dt,se,A,Se.z,Pt,G)}}else Et.visible&&v.push(R,dt,Et,A,Se.z,null,G)}}}let ct=R.children;for(let pt=0,dt=ct.length;pt<dt;pt++)vi(ct[pt],G,A,L)}function Kn(R,G,A,L){let{opaque:V,transmissive:ct,transparent:pt}=R;E.setupLightsView(A),pe===!0&&ot.setGlobalState(P.clippingPlanes,A),L&&At.viewport(ft.copy(L)),V.length>0&&Jn(V,G,A),ct.length>0&&Jn(ct,G,A),pt.length>0&&Jn(pt,G,A),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Es(R,G,A,L){if((A.isScene===!0?A.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[L.id]===void 0){let Pt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[L.id]=new Dn(1,1,{generateMipmaps:!0,type:Pt?Hn:Bn,minFilter:ji,samples:Math.max(4,ke.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let ct=E.state.transmissionRenderTarget[L.id],pt=L.viewport||ft;ct.setSize(pt.z*P.transmissionResolutionScale,pt.w*P.transmissionResolutionScale);let dt=P.getRenderTarget(),Et=P.getActiveCubeFace(),Nt=P.getActiveMipmapLevel();P.setRenderTarget(ct),P.getClearColor(it),Tt=P.getClearAlpha(),Tt<1&&P.setClearColor(16777215,.5),P.clear(),Fe&&B.render(A);let Vt=P.toneMapping;P.toneMapping=Di;let Zt=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),E.setupLightsView(L),pe===!0&&ot.setGlobalState(P.clippingPlanes,L),Jn(R,A,L),qt.updateMultisampleRenderTarget(ct),qt.updateRenderTargetMipmap(ct),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let se=0,ve=G.length;se<ve;se++){let Re=G[se],{object:we,geometry:je,material:Ht,group:fn}=Re;if(Ht.side===ye&&we.layers.test(L.layers)){let Y=Ht.side;Ht.side=An,Ht.needsUpdate=!0,_i(we,A,L,je,Ht,fn),Ht.side=Y,Ht.needsUpdate=!0,Pt=!0}}Pt===!0&&(qt.updateMultisampleRenderTarget(ct),qt.updateRenderTargetMipmap(ct))}P.setRenderTarget(dt,Et,Nt),P.setClearColor(it,Tt),Zt!==void 0&&(L.viewport=Zt),P.toneMapping=Vt}function Jn(R,G,A){let L=G.isScene===!0?G.overrideMaterial:null;for(let V=0,ct=R.length;V<ct;V++){let pt=R[V],{object:dt,geometry:Et,group:Nt}=pt,Vt=pt.material;Vt.allowOverride===!0&&L!==null&&(Vt=L),dt.layers.test(A.layers)&&_i(dt,G,A,Et,Vt,Nt)}}function _i(R,G,A,L,V,ct){k!==null&&V.isNodeMaterial&&k.setObject(R,V),R.onBeforeRender(P,G,A,L,V,ct),R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(P,G,A,L,R,ct),V.transparent===!0&&V.side===ye&&V.forceSinglePass===!1?(V.side=An,V.needsUpdate=!0,P.renderBufferDirect(A,G,L,V,R,ct),V.side=xs,V.needsUpdate=!0,P.renderBufferDirect(A,G,L,V,R,ct),V.side=ye):P.renderBufferDirect(A,G,L,V,R,ct),R.onAfterRender(P,G,A,L,V,ct)}function bi(R){let G=0;for(let A of R)A.texture!==null&&G++;return G}function zi(R,G,A){G.isScene!==!0&&(G=$e);let L=Qt.get(R),V=E.state.lights,ct=E.state.shadowsArray,pt=V.state.version,dt=ht.getParameters(R,V.state,ct,G,A,E.state.lightProbeGridArray),Et=ht.getProgramCacheKey(dt),Nt=L.programs;L.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,L.fog=G.fog;let Vt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;L.envMap=D.get(R.envMap||L.environment,Vt),L.envMapRotation=L.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Nt===void 0&&(R.addEventListener("dispose",ge),Nt=new Map,L.programs=Nt,L.programVariants=new Map);let Zt=Nt.get(Et);if(Zt!==void 0){if(L.currentProgram===Zt&&L.lightsStateVersion===pt)return Mi(R,dt),Zt}else dt.uniforms=ht.getUniforms(R),k!==null&&R.isNodeMaterial&&k.build(R,A,dt),R.onBeforeCompile(dt,P),Zt=ht.acquireProgram(dt,Et),Nt.set(Et,Zt),L.uniforms=dt.uniforms;let Pt=L.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pt.clippingPlanes=ot.uniform),Mi(R,dt),L.needsLights=Gn(R),L.lightsStateVersion=pt,L.needsLights&&(Pt.ambientLightColor.value=V.state.ambient,Pt.lightProbe.value=V.state.probe,Pt.sunLights.value=V.state.sun,Pt.sunLightShadows.value=V.state.sunShadow,Pt.directionalLights.value=V.state.directional,Pt.directionalLightShadows.value=V.state.directionalShadow,Pt.spotLights.value=V.state.spot,Pt.spotLightShadows.value=V.state.spotShadow,Pt.rectAreaLights.value=V.state.rectArea,Pt.ltc_1.value=V.state.rectAreaLTC1,Pt.ltc_2.value=V.state.rectAreaLTC2,Pt.pointLights.value=V.state.point,Pt.pointLightShadows.value=V.state.pointShadow,Pt.hemisphereLights.value=V.state.hemi,Pt.sunShadowMatrix.value=V.state.sunShadowMatrix,Pt.sunShadowCascade.value=V.state.sunShadowCascade,Pt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pt.spotLightMatrix.value=V.state.spotLightMatrix,Pt.spotLightMap.value=V.state.spotLightMap,Pt.pointShadowMatrix.value=V.state.pointShadowMatrix),L.numLightProbeGrids=bi(E.state.lightProbeGridArray),L.currentProgram=Zt,L.uniformsList=null,Zt}function Bi(R,G,A,L,V){let ct=Qt.get(R),pt=ct.currentProgram.id+","+L+","+V,dt=ct.programVariants.get(pt);return dt===void 0?(dt=zi(R,G,A),ct.programVariants.set(pt,dt)):(ct.currentProgram=dt,ct.uniformsList=null,ct.outputColorSpace=L,ct.toneMapping=V),dt}function Ts(R){if(R.uniformsList===null){let G=R.currentProgram.getUniforms();R.uniformsList=Fr.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Mi(R,G){let A=Qt.get(R);A.outputColorSpace=G.outputColorSpace,A.batching=G.batching,A.batchingColor=G.batchingColor,A.instancing=G.instancing,A.instancingColor=G.instancingColor,A.instancingMorph=G.instancingMorph,A.skinning=G.skinning,A.morphTargets=G.morphTargets,A.morphNormals=G.morphNormals,A.morphColors=G.morphColors,A.morphTargetsCount=G.morphTargetsCount,A.numClippingPlanes=G.numClippingPlanes,A.numIntersection=G.numClipIntersection,A.vertexAlphas=G.vertexAlphas,A.vertexTangents=G.vertexTangents,A.toneMapping=G.toneMapping}function As(R,G,A,L,V){G.isScene!==!0&&(G=$e),qt.resetTextureUnits();let ct=G.fog,pt=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?G.environment:null,dt=et===null?P.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:_e.workingColorSpace,Et=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,Nt=D.get(L.envMap||pt,Et),Vt=L.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,Zt=!!A.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Pt=!!A.morphAttributes.position,se=!!A.morphAttributes.normal,ve=!!A.morphAttributes.color,Re=Di;L.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Re=P.toneMapping);let we=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,je=we!==void 0?we.length:0,Ht=Qt.get(L),fn=E.state.lights;if(pe===!0&&(Ie===!0||R!==st)){let Qe=R===st&&L.id===J;ot.setState(L,R,Qe)}let Y=!1,Lt=!1;L.version===Ht.__version?Ht.needsLights&&Ht.lightsStateVersion!==fn.state.version||V.isBatchedMesh&&Ht.batching===!1||!V.isBatchedMesh&&Ht.batching===!0||V.isBatchedMesh&&Ht.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ht.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ht.instancing===!1||!V.isInstancedMesh&&Ht.instancing===!0||V.isSkinnedMesh&&Ht.skinning===!1||!V.isSkinnedMesh&&Ht.skinning===!0||V.isInstancedMesh&&Ht.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ht.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ht.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ht.instancingMorph===!1&&V.morphTexture!==null||Ht.envMap!==Nt||L.fog===!0&&Ht.fog!==ct||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ot.numPlanes||Ht.numIntersection!==ot.numIntersection)||Ht.vertexAlphas!==Vt||Ht.vertexTangents!==Zt||Ht.morphTargets!==Pt||Ht.morphNormals!==se||Ht.morphColors!==ve||Ht.morphTargetsCount!==je||Ht.numLightProbeGrids!==bi(E.state.lightProbeGridArray)?Y=!0:(Ht.outputColorSpace!==dt||Ht.toneMapping!==Re)&&(Lt=!0):(Y=!0,Ht.__version=L.version);let Gt=Ht.currentProgram;(Y===!0||Lt===!0)&&(Gt=Lt===!0?Bi(L,G,V,dt,Re):zi(L,G,V),k&&L.isNodeMaterial&&k.onUpdateProgram(L,Gt,Ht));let Ge=!1,pn=!1,jn=!1,Ee=Gt.getUniforms(),En=Ht.uniforms;if(At.useProgram(Gt.program)&&(Ge=!0,pn=!0,jn=!0),L.id!==J&&(J=L.id,pn=!0),Ge||st!==R){At.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ee.setValue(q,"projectionMatrix",R.projectionMatrix),Ee.setValue(q,"viewMatrix",R.matrixWorldInverse);let mn=Ee.map.cameraPosition;mn!==void 0&&mn.setValue(q,Ye.setFromMatrixPosition(R.matrixWorld)),ke.logarithmicDepthBuffer&&Ee.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&Ee.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),st!==R&&(st=R,pn=!0,jn=!0)}if(Ht.needsLights&&(fn.state.sunShadowMap.length>0&&Ee.setValue(q,"sunShadowMap",fn.state.sunShadowMap,qt),fn.state.directionalShadowMap.length>0&&Ee.setValue(q,"directionalShadowMap",fn.state.directionalShadowMap,qt),fn.state.spotShadowMap.length>0&&Ee.setValue(q,"spotShadowMap",fn.state.spotShadowMap,qt),fn.state.pointShadowMap.length>0&&Ee.setValue(q,"pointShadowMap",fn.state.pointShadowMap,qt)),V.isSkinnedMesh){Ee.setOptional(q,V,"bindMatrix"),Ee.setOptional(q,V,"bindMatrixInverse");let Qe=V.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Ee.setValue(q,"boneTexture",Qe.boneTexture,qt))}V.isBatchedMesh&&(Ee.setOptional(q,V,"batchingTexture"),Ee.setValue(q,"batchingTexture",V._matricesTexture,qt),Ee.setOptional(q,V,"batchingIdTexture"),Ee.setValue(q,"batchingIdTexture",V._indirectTexture,qt),Ee.setOptional(q,V,"batchingColorTexture"),V._colorsTexture!==null&&Ee.setValue(q,"batchingColorTexture",V._colorsTexture,qt));let ai=A.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&lt.update(V,A,Gt),(pn||Ht.receiveShadow!==V.receiveShadow)&&(Ht.receiveShadow=V.receiveShadow,Ee.setValue(q,"receiveShadow",V.receiveShadow)),(L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial)&&L.envMap===null&&G.environment!==null&&(En.envMapIntensity.value=G.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=py()),pn){if(Ee.setValue(q,"toneMappingExposure",P.toneMappingExposure),Ht.needsLights&&Hi(En,jn),ct&&L.fog===!0&&Rt.refreshFogUniforms(En,ct),Rt.refreshMaterialUniforms(En,L,C,F,E.state.transmissionRenderTarget[R.id]),Ht.needsLights&&Ht.numLightProbeGrids>0){let Qe=S,mn=0;for(let Gi of E.state.lightProbeGridArray)Gi.texture!==null&&(Qe.textures[mn]=Gi.texture,Qe.min[mn]=Gi.boundingBox.min,Qe.max[mn]=Gi.boundingBox.max,Qe.resolution[mn]=Gi.resolution,mn++);for(let Gi in Qe)Qe[Gi].length=mn;En.probesSH.value=Qe.textures,En.probesMin.value=Qe.min,En.probesMax.value=Qe.max,En.probesResolution.value=Qe.resolution}Fr.upload(q,Ts(Ht),En,qt)}if(L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Fr.upload(q,Ts(Ht),En,qt),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&Ee.setValue(q,"center",V.center),Ee.setValue(q,"modelViewMatrix",V.modelViewMatrix),Ee.setValue(q,"normalMatrix",V.normalMatrix),Ee.setValue(q,"modelMatrix",V.matrixWorld),L.uniformsGroups!==void 0){let Qe=L.uniformsGroups;for(let mn=0,Gi=Qe.length;mn<Gi;mn++){let hu=Qe[mn];Wt.update(hu,Gt),Wt.bind(hu,Gt)}}return Gt}function Hi(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.sunLights.needsUpdate=G,R.sunLightShadows.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Gn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(R,G,A){let L=Qt.get(R);L.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,L.__autoAllocateDepthBuffer===!1&&(L.__useRenderToTexture=!1),Qt.get(R.texture).__webglTexture=G,Qt.get(R.depthTexture).__webglTexture=L.__autoAllocateDepthBuffer?void 0:A,L.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){let A=Qt.get(R);A.__webglFramebuffer=G,A.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,A=0){et=R,Z=G,$=A;let L=null,V=!1,ct=!1;if(R){let dt=Qt.get(R);if(dt.__useDefaultFramebuffer!==void 0){At.bindFramebuffer(q.FRAMEBUFFER,dt.__webglFramebuffer),ft.copy(R.viewport),Dt.copy(R.scissor),zt=R.scissorTest,At.viewport(ft),At.scissor(Dt),At.setScissorTest(zt),J=-1;return}else if(dt.__webglFramebuffer===void 0)qt.setupRenderTarget(R);else if(dt.__hasExternalTextures)qt.rebindTextures(R,Qt.get(R.texture).__webglTexture,Qt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Vt=R.depthTexture;if(dt.__boundDepthTexture!==Vt){if(Vt!==null&&Qt.has(Vt)&&(R.width!==Vt.image.width||R.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qt.setupDepthRenderbuffer(R)}}let Et=R.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ct=!0);let Nt=Qt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Nt[G])?L=Nt[G][A]:L=Nt[G],V=!0):R.samples>0&&qt.useMultisampledRTT(R)===!1?L=Qt.get(R).__webglMultisampledFramebuffer:Array.isArray(Nt)?L=Nt[A]:L=Nt,ft.copy(R.viewport),Dt.copy(R.scissor),zt=R.scissorTest}else ft.copy(ut).multiplyScalar(C).floor(),Dt.copy(Ft).multiplyScalar(C).floor(),zt=Bt;if(A!==0&&(L=H),At.bindFramebuffer(q.FRAMEBUFFER,L)&&At.drawBuffers(R,L),At.viewport(ft),At.scissor(Dt),At.setScissorTest(zt),V){let dt=Qt.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+G,dt.__webglTexture,A)}else if(ct){let dt=G;for(let Et=0;Et<R.textures.length;Et++){let Nt=Qt.get(R.textures[Et]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Et,Nt.__webglTexture,A,dt)}}else if(R!==null&&A!==0){let dt=Qt.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,dt.__webglTexture,A)}J=-1};function Si(R){let G=Qt.get(R);return(G.__readFormat!==R.format||G.__readType!==R.type)&&(G.__readFormat=R.format,G.__readType=R.type,G.__formatReadable=ke.textureFormatReadable(R.format),G.__typeReadable=ke.textureTypeReadable(R.type)),G}this.readRenderTargetPixels=function(R,G,A,L,V,ct,pt,dt=0){if(!(R&&R.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Et=Et[pt],Array.isArray(Et)&&(Et=Et[0])),Et){At.bindFramebuffer(q.FRAMEBUFFER,Et);try{let Nt=R.textures[dt],Vt=Nt.format,Zt=Nt.type;R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+dt);let Pt=Si(Nt);if(Pt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-L&&A>=0&&A<=R.height-V&&q.readPixels(G,A,L,V,vt.convert(Vt),vt.convert(Zt),ct)}finally{let Nt=et!==null?Qt.get(et).__webglFramebuffer:null;At.bindFramebuffer(q.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(R,G,A,L,V,ct,pt,dt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Et=Et[pt],Array.isArray(Et)&&(Et=Et[0])),Et)if(G>=0&&G<=R.width-L&&A>=0&&A<=R.height-V){At.bindFramebuffer(q.FRAMEBUFFER,Et);let Nt=R.textures[dt],Vt=Nt.format,Zt=Nt.type;R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+dt);let Pt=Si(Nt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,se),q.bufferData(q.PIXEL_PACK_BUFFER,ct.byteLength,q.STREAM_READ),q.readPixels(G,A,L,V,vt.convert(Vt),vt.convert(Zt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let ve=et!==null?Qt.get(et).__webglFramebuffer:null;At.bindFramebuffer(q.FRAMEBUFFER,ve);let Re=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Ad(q,Re,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,se),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,ct),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(se),q.deleteSync(Re),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,A=0){let L=Math.pow(2,-A),V=Math.floor(R.image.width*L),ct=Math.floor(R.image.height*L),pt=G!==null?G.x:0,dt=G!==null?G.y:0;qt.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,A,0,0,pt,dt,V,ct),At.unbindTexture()},this.copyTextureToTexture=function(R,G,A=null,L=null,V=0,ct=0){let pt,dt,Et,Nt,Vt,Zt,Pt,se,ve,Re=R.isCompressedTexture?R.mipmaps[ct]:R.image;if(A!==null)pt=A.max.x-A.min.x,dt=A.max.y-A.min.y,Et=A.isBox3?A.max.z-A.min.z:1,Nt=A.min.x,Vt=A.min.y,Zt=A.isBox3?A.min.z:0;else{let Ee=Math.pow(2,-V);pt=Math.floor(Re.width*Ee),dt=Math.floor(Re.height*Ee),R.isDataArrayTexture?Et=Re.depth:R.isData3DTexture?Et=Math.floor(Re.depth*Ee):Et=1,Nt=0,Vt=0,Zt=0}L!==null?(Pt=L.x,se=L.y,ve=L.z):(Pt=0,se=0,ve=0);let we=vt.convert(G.format),je=vt.convert(G.type),Ht;G.isData3DTexture?(qt.setTexture3D(G,0),Ht=q.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(qt.setTexture2DArray(G,0),Ht=q.TEXTURE_2D_ARRAY):(qt.setTexture2D(G,0),Ht=q.TEXTURE_2D),At.activeTexture(q.TEXTURE0),At.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,G.flipY),At.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),At.pixelStorei(q.UNPACK_ALIGNMENT,G.unpackAlignment);let fn=At.getParameter(q.UNPACK_ROW_LENGTH),Y=At.getParameter(q.UNPACK_IMAGE_HEIGHT),Lt=At.getParameter(q.UNPACK_SKIP_PIXELS),Gt=At.getParameter(q.UNPACK_SKIP_ROWS),Ge=At.getParameter(q.UNPACK_SKIP_IMAGES);At.pixelStorei(q.UNPACK_ROW_LENGTH,Re.width),At.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Re.height),At.pixelStorei(q.UNPACK_SKIP_PIXELS,Nt),At.pixelStorei(q.UNPACK_SKIP_ROWS,Vt),At.pixelStorei(q.UNPACK_SKIP_IMAGES,Zt);let pn=R.isDataArrayTexture||R.isData3DTexture,jn=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){let Ee=Qt.get(R),En=Qt.get(G),ai=Qt.get(Ee.__renderTarget),Qe=Qt.get(En.__renderTarget);At.bindFramebuffer(q.READ_FRAMEBUFFER,ai.__webglFramebuffer),At.bindFramebuffer(q.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let mn=0;mn<Et;mn++)pn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Qt.get(R).__webglTexture,V,Zt+mn),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Qt.get(G).__webglTexture,ct,ve+mn)),q.blitFramebuffer(Nt,Vt,Nt+pt,Vt+dt,Pt,se,Pt+pt,se+dt,q.DEPTH_BUFFER_BIT,q.NEAREST);At.bindFramebuffer(q.READ_FRAMEBUFFER,null),At.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(V!==0||R.isRenderTargetTexture||Qt.has(R)){let Ee=Qt.get(R),En=Qt.get(G);At.bindFramebuffer(q.READ_FRAMEBUFFER,N),At.bindFramebuffer(q.DRAW_FRAMEBUFFER,X);for(let ai=0;ai<Et;ai++)pn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ee.__webglTexture,V,Zt+ai):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ee.__webglTexture,V),jn?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,En.__webglTexture,ct,ve+ai):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,En.__webglTexture,ct),V!==0?q.blitFramebuffer(Nt,Vt,Nt+pt,Vt+dt,Pt,se,Pt+pt,se+dt,q.COLOR_BUFFER_BIT,q.NEAREST):jn?q.copyTexSubImage3D(Ht,ct,Pt,se,ve+ai,Nt,Vt,pt,dt):q.copyTexSubImage2D(Ht,ct,Pt,se,Nt,Vt,pt,dt);At.bindFramebuffer(q.READ_FRAMEBUFFER,null),At.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else jn?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(Ht,ct,Pt,se,ve,pt,dt,Et,we,je,Re.data):G.isCompressedArrayTexture?q.compressedTexSubImage3D(Ht,ct,Pt,se,ve,pt,dt,Et,we,Re.data):q.texSubImage3D(Ht,ct,Pt,se,ve,pt,dt,Et,we,je,Re):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,ct,Pt,se,pt,dt,we,je,Re.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,ct,Pt,se,Re.width,Re.height,we,Re.data):q.texSubImage2D(q.TEXTURE_2D,ct,Pt,se,pt,dt,we,je,Re);At.pixelStorei(q.UNPACK_ROW_LENGTH,fn),At.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Y),At.pixelStorei(q.UNPACK_SKIP_PIXELS,Lt),At.pixelStorei(q.UNPACK_SKIP_ROWS,Gt),At.pixelStorei(q.UNPACK_SKIP_IMAGES,Ge),ct===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&q.generateMipmap(Ht),At.unbindTexture()},this.initRenderTarget=function(R){Qt.get(R).__webglFramebuffer===void 0&&qt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?qt.setTextureCube(R,0):R.isData3DTexture?qt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?qt.setTexture2DArray(R,0):qt.setTexture2D(R,0),At.unbindTexture()},this.resetState=function(){Z=0,$=0,et=null,At.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var h={scene:null,camera:null,renderer:null,world:null,player:null,audio:null,ui:null,story:null,post:null,time:0,dt:0,paused:!0,started:!1,flags:{},inv:new Set,objects:{},settings:{sens:1,scale:.75,grain:1,volume:.9,fov:70,bright:1,invertY:!1,keys:null},phone:{battery:31,charging:!1,network:!0,time:"01:43",dropped:!1,mapUnlocked:!1}},jl=()=>{if(/[?&]touch\b/.test(location.search))return!0;if(/[?&]desktop\b/.test(location.search))return!1;try{return matchMedia("(pointer: coarse)").matches&&navigator.maxTouchPoints>0}catch{return!1}};function gf(){let s=null;try{s=localStorage.getItem("lockruf_settings")}catch{}try{let t=JSON.parse(s||"{}");Object.assign(h.settings,t),t.v!==2&&(h.settings.v=2,h.settings.keys=null)}catch{}!s&&jl()&&Object.assign(h.settings,{scale:.6,quality:"low",grain:.7,sens:1.2})}function ts(){try{localStorage.setItem("lockruf_settings",JSON.stringify(h.settings))}catch{}}function xf(s){try{let t=+(localStorage.getItem("lockruf_progress")||0);s>t&&localStorage.setItem("lockruf_progress",String(s)),localStorage.setItem("lockruf_last",String(s))}catch{}}function yf(){try{return{max:+(localStorage.getItem("lockruf_progress")||0),last:+(localStorage.getItem("lockruf_last")||0)}}catch{return{max:0,last:0}}}function Ce(s=1){let t=s*2654435761>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}function es(s=1){let t=Ce(s),e=256,n=new Float32Array(e*e);for(let r=0;r<n.length;r++)n[r]=t();let i=(r,a)=>n[(a%e+e)%e*e+(r%e+e)%e];return function(a,o,l=0){let c=Math.floor(a),u=Math.floor(o),f=a-c,d=o-u,p=c+1,m=u+1;if(l){let v=E=>Math.floor((E%l+l)%l);c=v(c),p=v(p),u=v(u),m=v(m)}let x=f*f*(3-2*f),g=d*d*(3-2*d),y=i(c,u),b=i(p,u),w=i(c,m),S=i(p,m);return y+(b-y)*x+(w-y)*g+(y-b-w+S)*x*g}}function be(s,t,e,n=4,i=0){let r=0,a=.5,o=1,l=0;for(let c=0;c<n;c++)r+=a*s(t*o,e*o,i?i*o:0),l+=a,a*=.5,o*=2;return r/l}var Te=(s,t,e)=>Math.max(t,Math.min(e,s)),my=(s,t,e)=>s+(t-s)*e,zr=s=>s*s*(3-2*s),Rn=(s,t,e,n)=>my(s,t,1-Math.exp(-e*n));function Ys(s,t,e,n,i,r){let a=i-e,o=r-n,l=a*a+o*o||1e-9,c=((s-e)*a+(t-n)*o)/l;c=Te(c,0,1);let u=e+a*c,f=n+o*c;return{d:Math.hypot(s-u,t-f),cx:u,cz:f,t:c}}function pi(s,t){let e=t-s;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}var ni=4,Ql=class{constructor(){this.colliders=[],this.grid=new Map,this.floors=[],this.regions=[],this.interacts=[],this.zones=new Map,this.lamps=[],this.surfaces=[],this.updaters=[],this.terrain=null,this.fogZones=[],this.tag="",this.nextId=1}_meta(t,e){return t.id=this.nextId++,t.label||(t.label=e&&e.label||this.tag||""),t}_cells(t,e,n,i){let r=[];for(let a=Math.floor(t/ni);a<=Math.floor(e/ni);a++)for(let o=Math.floor(n/ni);o<=Math.floor(i/ni);o++)r.push(a+","+o);return r}_insert(t){let e=t.type==="box"?[t.minX,t.maxX,t.minZ,t.maxZ]:[t.x-t.r,t.x+t.r,t.z-t.r,t.z+t.r];t._cells=this._cells(...e);for(let n of t._cells)this.grid.has(n)||this.grid.set(n,[]),this.grid.get(n).push(t)}addBox(t,e,n,i,r=-50,a=50,o={}){let l=this._meta({type:"box",minX:t,maxX:e,minZ:n,maxZ:i,minY:r,maxY:a,enabled:!0,...o},o);return this.colliders.push(l),this._insert(l),l}addOBB(t,e,n,i,r,a=-50,o=50,l={}){let c=this._meta({type:"obb",cx:t,cz:e,hw:n,hd:i,rot:r,cos:Math.cos(r),sin:Math.sin(r),minY:a,maxY:o,enabled:!0,...l},l),u=Math.hypot(n,i);c.minX=t-u,c.maxX=t+u,c.minZ=e-u,c.maxZ=e+u,c._cells=this._cells(c.minX,c.maxX,c.minZ,c.maxZ);for(let f of c._cells)this.grid.has(f)||this.grid.set(f,[]),this.grid.get(f).push(c);return this.colliders.push(c),c}addCircle(t,e,n,i=-50,r=50,a={}){let o=this._meta({type:"circle",x:t,z:e,r:n,minY:i,maxY:r,enabled:!0,...a},a);return this.colliders.push(o),this._insert(o),o}nearby(t,e){let n=new Set;for(let i=Math.floor((t-1)/ni);i<=Math.floor((t+1)/ni);i++)for(let r=Math.floor((e-1)/ni);r<=Math.floor((e+1)/ni);r++){let a=this.grid.get(i+","+r);if(a)for(let o of a)n.add(o)}return n}resolve(t,e,n,i,r=null){for(let a=0;a<3;a++){let o=!1;for(let l of this.nearby(t.x,t.z)){if(!l.enabled||l.maxY<=n+.05||l.minY>=i)continue;let c=t.x,u=t.z;if(l.type==="circle"){let f=t.x-l.x,d=t.z-l.z,p=Math.hypot(f,d),m=e+l.r;p<m&&p>1e-6&&(t.x=l.x+f/p*m,t.z=l.z+d/p*m,o=!0)}else if(l.type==="box"){let f=Te(t.x,l.minX,l.maxX),d=Te(t.z,l.minZ,l.maxZ),p=t.x-f,m=t.z-d,x=Math.hypot(p,m);if(x<e){if(x>1e-6)t.x=f+p/x*e,t.z=d+m/x*e;else{let g=[t.x-l.minX,l.maxX-t.x,t.z-l.minZ,l.maxZ-t.z],y=g.indexOf(Math.min(...g));y===0?t.x=l.minX-e:y===1?t.x=l.maxX+e:y===2?t.z=l.minZ-e:t.z=l.maxZ+e}o=!0}}else if(l.type==="obb"){let f=t.x-l.cx,d=t.z-l.cz,p=f*l.cos+d*l.sin,m=-f*l.sin+d*l.cos,x=Te(p,-l.hw,l.hw),g=Te(m,-l.hd,l.hd),y=p-x,b=m-g,w=Math.hypot(y,b);if(w<e){let S,v;if(w>1e-6)S=x+y/w*e,v=g+b/w*e;else{let E=[p+l.hw,l.hw-p,m+l.hd,l.hd-m],_=E.indexOf(Math.min(...E));S=p,v=m,_===0?S=-l.hw-e:_===1?S=l.hw+e:_===2?v=-l.hd-e:v=l.hd+e}t.x=l.cx+S*l.cos-v*l.sin,t.z=l.cz+S*l.sin+v*l.cos,o=!0}}r&&(t.x!==c||t.z!==u)&&!r.includes(l)&&r.push(l)}if(!o)break}}segmentBlocked(t,e,n,i,r,a=null){let o=Math.min(t,n)-.5,l=Math.max(t,n)+.5,c=Math.min(e,i)-.5,u=Math.max(e,i)+.5,f=new Set;for(let d=Math.floor(o/ni);d<=Math.floor(l/ni);d++)for(let p=Math.floor(c/ni);p<=Math.floor(u/ni);p++){let m=this.grid.get(d+","+p);if(m)for(let x of m){if(f.has(x)||(f.add(x),!x.enabled||x===a||x.noSight||r<x.minY||r>x.maxY))continue;if(x.type==="circle"){if(Ys(x.x,x.z,t,e,n,i).d<x.r*.8)return x;continue}let g=t,y=e,b=n,w=i,S,v,E=0,_=0;if(x.type==="obb"){let H=t-x.cx,N=e-x.cz,X=n-x.cx,Z=i-x.cz;g=H*x.cos+N*x.sin,y=-H*x.sin+N*x.cos,b=X*x.cos+Z*x.sin,w=-X*x.sin+Z*x.cos,S=x.hw,v=x.hd}else S=(x.maxX-x.minX)/2,v=(x.maxZ-x.minZ)/2,E=(x.minX+x.maxX)/2,_=(x.minZ+x.maxZ)/2;let M=0,I=1,P=b-g,O=w-y,k=(H,N,X,Z)=>{if(Math.abs(N)<1e-9)return H>=X&&H<=Z;let $=(X-H)/N,et=(Z-H)/N;return $>et&&([$,et]=[et,$]),M=Math.max(M,$),I=Math.min(I,et),M<=I};if(k(g,P,E-S,E+S)&&k(y,O,_-v,_+v))return x}}return null}addFloor(t,e,n,i,r,a={}){let o={minX:t,maxX:e,minZ:n,maxZ:i,h:typeof r=="number"?()=>r:r,enabled:!0,...a};return this.floors.push(o),o}groundAt(t,e,n,i=.5){let r=-1/0,a=this.terrainHeight(t,e);a<=n+i&&!this.noTerrainAt(t,e,n)&&(r=a);for(let o of this.floors){if(!o.enabled||t<o.minX||t>o.maxX||e<o.minZ||e>o.maxZ||o.hole&&o.hole(t,e))continue;let l=o.h(t,e);l<=n+i&&l>r&&(r=l)}return r}noTerrainAt(t,e,n){for(let i of this.underground||[])if(t>i.minX&&t<i.maxX&&e>i.minZ&&e<i.maxZ&&n<i.top)return!0;return!1}terrainHeight(t,e){return this.terrain?this.terrain.height(t,e):0}addRegionBox(t,e,n,i,r={}){let a=this._rmeta({type:"box",minX:t,maxX:e,minZ:n,maxZ:i,enabled:!0,...r});return this.regions.push(a),a}addRegionPath(t,e,n={}){let i=this._rmeta({type:"path",points:t,radius:e,enabled:!0,...n});return this.regions.push(i),i}addRegionCircle(t,e,n,i={}){let r=this._rmeta({type:"circle",x:t,z:e,radius:n,enabled:!0,...i});return this.regions.push(r),r}_rmeta(t){return t.label||(t.label=t.id||this.tag||"Region"),t}regionContains(t,e,n,i=0){if(t.type==="box")return e>=t.minX+i&&e<=t.maxX-i&&n>=t.minZ+i&&n<=t.maxZ-i;if(t.type==="circle")return Math.hypot(e-t.x,n-t.z)<=t.radius-i;let r=t.points;for(let a=0;a<r.length-1;a++)if(Ys(e,n,r[a][0],r[a][1],r[a+1][0],r[a+1][1]).d<=t.radius-i)return!0;return!1}constrain(t,e=.3,n=!1){let i=1/0,r=t.x,a=t.z,o=null;for(let l of this.regions)if(l.enabled&&!(l.minY!==void 0&&(t.y<l.minY||t.y>l.maxY)))if(l.type==="box"){if(t.x>=l.minX+e&&t.x<=l.maxX-e&&t.z>=l.minZ+e&&t.z<=l.maxZ-e)return null;let u=Te(t.x,l.minX+e,l.maxX-e),f=Te(t.z,l.minZ+e,l.maxZ-e),d=Math.hypot(t.x-u,t.z-f);d<i&&(i=d,r=u,a=f,o=l)}else if(l.type==="circle"){let c=Math.hypot(t.x-l.x,t.z-l.z),u=l.radius-e;if(c<=u)return null;let f=u/c,d=l.x+(t.x-l.x)*f,p=l.z+(t.z-l.z)*f;c-u<i&&(i=c-u,r=d,a=p,o=l)}else{let c=l.points,u=l.radius-e;for(let f=0;f<c.length-1;f++){let d=Ys(t.x,t.z,c[f][0],c[f][1],c[f+1][0],c[f+1][1]);if(d.d<=u)return null;if(d.d-u<i){i=d.d-u;let p=u/d.d;r=d.cx+(t.x-d.cx)*p,a=d.cz+(t.z-d.cz)*p,o=l}}}if(i<1/0){let l=t.x,c=t.z;if(t.x=r,t.z=a,n&&(Math.abs(l-r)>1e-5||Math.abs(c-a)>1e-5)){let u=this.regions.find(f=>!f.enabled&&this.regionContains(f,l,c,e));return{region:!0,label:"Rand von \u201E"+(o.label||o.id||"Region")+"\u201C",disabled:u?u.label||u.id:null,r:o}}}return null}addInteract(t){let e={radius:.35,range:2.3,hold:0,enabled:()=>!0,once:!0,used:!1,...t};return Array.isArray(e.pos)&&(e.pos=new U(...e.pos)),this.interacts.push(e),e}getInteract(t){return this.interacts.find(e=>e.id===t)}findInteract(t,e){let n=null,i=1/0,r=new U;for(let a of this.interacts){if(a.once&&a.used||!a.enabled())continue;r.copy(a.pos).sub(t);let o=r.length();if(o>a.range)continue;r.divideScalar(o||1);let l=Math.acos(Te(r.dot(e),-1,1)),c=Math.atan2(a.radius,o)+.06;if(l>c)continue;let u=l/c+o*.05;u<i&&(i=u,n=a)}return n}addZone(t,e){return this.zones.set(t,e),e}inZone(t,e){let n=this.zones.get(t);return n?n.r!==void 0?Math.hypot(e.x-n.x,e.z-n.z)<n.r&&(n.y===void 0||Math.abs(e.y-n.y)<2.5):e.x>n.minX&&e.x<n.maxX&&e.z>n.minZ&&e.z<n.maxZ&&(n.minY===void 0||e.y>n.minY&&e.y<n.maxY):!1}addSurface(t,e,n,i,r,a=-50,o=50){this.surfaces.push({minX:t,maxX:e,minZ:n,maxZ:i,type:r,minY:a,maxY:o})}surfaceAt(t,e,n){for(let i=this.surfaces.length-1;i>=0;i--){let r=this.surfaces[i];if(t>r.minX&&t<r.maxX&&n>r.minZ&&n<r.maxZ&&e>r.minY&&e<r.maxY)return r.type}return"leaves"}initLightPool(t,e=8){this.pool=[];for(let n=0;n<e;n++){let i=new zs(16777215,0,10,2);t.add(i),this.pool.push(i)}}addLamp(t){let e={color:16762250,intensity:20,distance:14,enabled:!0,flicker:null,level:1,...t};return Array.isArray(e.pos)&&(e.pos=new U(...e.pos)),e.colorObj=new Jt(e.color),this.lamps.push(e),e}updateLights(t,e){if(!this.pool)return;let n=[];for(let i of this.lamps){if(!i.enabled||i.level<=.001)continue;let r=i.pos.distanceTo(t),a=i.visibleDist||45;r>a||n.push([r,i,a])}n.sort((i,r)=>i[0]-r[0]);for(let i=0;i<this.pool.length;i++){let r=this.pool[i],a=n[i];if(!a){r.intensity=0;continue}let[o,l,c]=a,u=Te((c-o)/10,0,1)*l.level;l.flicker&&(u*=l.flicker(e)),r.position.copy(l.pos),r.color.copy(l.colorObj),r.distance=l.distance,r.intensity=l.intensity*u,l.onLevel&&l.onLevel(u)}}update(t,e,n=!1){for(let i of this.updaters)n&&i.visual||i(t,e)}};var Ui=(s,t="")=>`<svg viewBox="0 0 24 24" aria-hidden="true" ${t}>${s}</svg>`,_n={use:Ui('<path d="M8 12.5V6a1.4 1.4 0 0 1 2.8 0v5.5"/><path d="M10.8 11V4.4a1.4 1.4 0 0 1 2.8 0V11"/><path d="M13.6 11V5.6a1.4 1.4 0 0 1 2.8 0V12"/><path d="M16.4 9.4a1.4 1.4 0 0 1 2.8 0V15a6.6 6.6 0 0 1-6.6 6.6h-.9a6.6 6.6 0 0 1-5.3-2.7l-3-4.1a1.5 1.5 0 0 1 2.3-1.9L8 15"/>'),jump:Ui('<path d="M12 18V5"/><path d="M6.5 10.5 12 5l5.5 5.5"/><path d="M5 21h14"/>'),crouch:Ui('<path d="M12 3v12"/><path d="M6.5 9.5 12 15l5.5-5.5"/><path d="M5 20h14"/>'),flash:Ui('<path d="M9.2 18h5.6M10.2 21h3.6"/><path d="M12 3a6 6 0 0 0-3.7 10.7c.8.7 1.2 1.5 1.2 2.5h5c0-1 .4-1.8 1.2-2.5A6 6 0 0 0 12 3z"/>'),phone:Ui('<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M10.8 18.5h2.4"/>'),map:Ui('<path d="M9 4.5 3.5 6.5v13L9 17.5l6 2 5.5-2v-13L15 6.5z"/><path d="M9 4.5v13M15 6.5v13"/>'),chat:Ui('<path d="M4.5 5h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H10l-4.5 3.5V16h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>'),menu:Ui('<path d="M4.5 7h15M4.5 12h15M4.5 17h15"/>'),close:Ui('<path d="M6 6l12 12M18 6 6 18"/>'),stick:Ui('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5"/>')};var $s={forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",sprint:"ShiftLeft",crouch:"KeyC",jump:"Space",use:"KeyE",flash:"KeyF",phone:"Tab",reply1:"Digit1",reply2:"Digit2",app:"KeyQ"},Mf={forward:"Vorw\xE4rts",back:"R\xFCckw\xE4rts",left:"Links",right:"Rechts",sprint:"Rennen",crouch:"Ducken",jump:"Springen",use:"Benutzen",flash:"Taschenlampe",phone:"Handy",reply1:"Antwort 1",reply2:"Antwort 2",app:"Handy: Chat/Karte"},Sf=["forward","back","left","right","sprint","crouch","jump","use","flash","phone","reply1","reply2","app","confirm"],za=Object.fromEntries(Sf.map((s,t)=>[s,1<<t])),vf={forward:"ArrowUp",back:"ArrowDown",left:"ArrowLeft",right:"ArrowRight"},_f={Space:"Leertaste",ShiftLeft:"Shift",ShiftRight:"Shift rechts",ControlLeft:"Strg",ControlRight:"Strg rechts",AltLeft:"Alt",Tab:"Tab",Enter:"Enter",CapsLock:"Feststell",Backspace:"R\xFCcktaste",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Mouse0:"Linke Maus",Mouse1:"Mittlere Maus",Mouse2:"Rechte Maus",Mouse3:"Maus 4",Mouse4:"Maus 5"};function Jh(s){return s?_f[s]?_f[s]:s.startsWith("Key")?s.slice(3):s.startsWith("Digit")?s.slice(5):s.startsWith("Numpad")?"Num "+s.slice(6):s:"\u2013"}var bf={use:_n.use,jump:_n.jump,crouch:_n.crouch,flash:_n.flash,phone:_n.phone,reply1:"1",reply2:"2",app:_n.map,sprint:"Stick ganz vor",forward:"Stick",back:"Stick",left:"Stick",right:"Stick",confirm:_n.use},He=s=>{if(h.touchOn&&bf[s])return bf[s];let t=(h.settings.keys||$s)[s];return s==="sprint"&&(t==="ShiftLeft"||t==="ShiftRight")?"Shift":Jh(t)},gy=s=>{let t=s.target;return!t||!t.tagName?!1:t.isContentEditable?!0:t.tagName==="TEXTAREA"||t.tagName==="INPUT"&&!["range","checkbox","button"].includes(t.type)},Ut={keys:new Set,pressed:new Set,mx:0,my:0,wheel:0,locked:!1,canvas:null,onLockChange:null,onLockFail:null,st:{held:0,hit:0,lx:0,ly:0,ax:0,az:0},ax:0,az:0,init(s){this.canvas=s,window.addEventListener("keydown",t=>{if(this.capture){t.preventDefault();let e=this.capture;this.capture=null,e(t.code);return}gy(t)||((["Tab","Space","ArrowUp","ArrowDown","F5","F1","F3","F7"].includes(t.code)||t.ctrlKey||t.altKey)&&t.preventDefault(),this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code))}),window.addEventListener("keyup",t=>{this.keys.delete(t.code)}),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("mousemove",t=>{this.locked&&(Math.abs(t.movementX)>300||Math.abs(t.movementY)>300||(this.mx+=t.movementX,this.my+=t.movementY))}),document.addEventListener("mousedown",t=>{if(this.capture&&t.button!==0){let e=this.capture;this.capture=null,e("Mouse"+t.button);return}this.locked&&this.pressed.add("Mouse"+t.button),this.keys.add("Mouse"+t.button)}),document.addEventListener("wheel",t=>{this.locked&&(this.wheel+=Math.sign(t.deltaY))},{passive:!0}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("mouseup",t=>{this.keys.delete("Mouse"+t.button)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.locked?this.lastLock=performance.now():this.lastUnlock=performance.now(),this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("pointerlockerror",()=>{!this.locked&&this.onLockFail&&this.onLockFail()})},lock(){if(this.locked)return Promise.resolve();if(!this.canvas)return Promise.reject(new Error("kein Canvas"));let s=t=>{try{let e=t?this.canvas.requestPointerLock(t):this.canvas.requestPointerLock();return e&&typeof e.then=="function"?e:new Promise((n,i)=>{let r=performance.now(),a=()=>{this.locked?n():performance.now()-r>600?i(new Error("pointer lock timeout")):requestAnimationFrame(a)};a()})}catch(e){return Promise.reject(e)}};return s({unadjustedMovement:!0}).catch(t=>{if(t&&/unadjusted|NotSupported/i.test(String(t.name||t.message)))return s();throw t}).then(()=>{this.lockFailed=!1}).catch(t=>{throw this.lockFailed=!0,this.onLockFail&&this.onLockFail(t),t})},unlock(){document.pointerLockElement&&document.exitPointerLock()},key(s){return(h.settings.keys||$s)[s]||$s[s]},_codesFor(s){let t=this.key(s),e=[t];return s==="sprint"&&(t==="ShiftLeft"||t==="ShiftRight")&&e.push(t==="ShiftLeft"?"ShiftRight":"ShiftLeft"),vf[s]&&e.push(vf[s]),s==="confirm"&&e.push("Enter","Escape","NumpadEnter","Touch_use"),e.push("Touch_"+s),e},sample(){let s=0,t=0;for(let i of Sf)for(let r of this._codesFor(i))this.keys.has(r)&&(s|=za[i]),this.pressed.has(r)&&(t|=za[i]);let e=h.settings,n=.0022*(e.sens||1);return Math.hypot(this.ax,this.az)>.9&&this.az<-.45&&(s|=za.sprint),this.st={held:s,hit:t,lx:this.mx*n,ly:this.my*n*(e.invertY?-1:1),ax:this.ax,az:this.az},this.st},apply(s){this.st={ax:0,az:0,...s}},consume(){this.st={held:this.st.held,hit:0,lx:0,ly:0,ax:this.st.ax,az:this.st.az}},act(s){return(this.st.held&za[s])!==0},actHit(s){return(this.st.hit&za[s])!==0},down(s){return this.keys.has(s)},hit(s){return this.pressed.has(s)},endFrame(){this.pressed.clear(),this.mx=0,this.my=0,this.wheel=0}};var mt={},Yn=es(7),mi=es(31);function de(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function fe(s,{repeat:t=[1,1],srgb:e=!0,wrap:n=!0}={}){let i=new en(s);return n&&(i.wrapS=i.wrapT=Ti),i.repeat.set(t[0],t[1]),e&&(i.colorSpace=rn),i.anisotropy=8,i.needsUpdate=!0,i}function an(s,t){let e=s.getContext("2d"),n=e.createImageData(s.width,s.height),i=n.data,r=0;for(let a=0;a<s.height;a++)for(let o=0;o<s.width;o++){let l=t(o,a);i[r++]=Te(l[0],0,255),i[r++]=Te(l[1],0,255),i[r++]=Te(l[2],0,255),i[r++]=l[3]===void 0?255:l[3]}return e.putImageData(n,0,0),e}function Br(s,t,e,n,i){let r=s.width,a=s.height;for(let o of[0,-r,r])for(let l of[0,-a,a]){let c=t+o,u=e+l;c+n<0||c-n>r||u+n<0||u-n>a||i(c,u)}}function tc(s,t,e){s.beginPath(),s.moveTo(-t,0),s.quadraticCurveTo(0,-e,t,0),s.quadraticCurveTo(0,e,-t,0),s.closePath()}var Ba=[[92,58,32],[120,74,38],[138,88,40],[105,66,36],[74,48,30],[150,98,46],[96,52,28],[128,64,30],[82,70,40],[60,44,30],[112,90,52],[140,70,34]];function Ha(s,t=1){return`rgb(${s[0]*t|0},${s[1]*t|0},${s[2]*t|0})`}function ec(){if(mt.leaves)return mt.leaves;let s=de(1024,1024),t=an(s,(n,i)=>{let a=28+be(Yn,n/64,i/64,5,16)*40;return[a*1.15,a*.85,a*.6]}),e=Ce(11);t.lineCap="round";for(let n=0;n<160;n++){let i=e()*1024,r=e()*1024,a=e()*Math.PI*2,o=20+e()*60;Br(s,i,r,o,(l,c)=>{t.strokeStyle=`rgba(${40+e()*20},${30+e()*12},20,0.9)`,t.lineWidth=1+e()*2.5,t.beginPath(),t.moveTo(l,c),t.lineTo(l+Math.cos(a)*o,c+Math.sin(a)*o),t.stroke()})}for(let n=0;n<3;n++){let i=[2600,2200,1500][n];for(let r=0;r<i;r++){let a=e()*1024,o=e()*1024,l=7+e()*13,c=l*(.35+e()*.3),u=Ba[e()*Ba.length|0],f=(.55+e()*.55)*(.75+n*.15),d=e()*Math.PI*2;Br(s,a,o,l,(p,m)=>{t.save(),t.translate(p,m),t.rotate(d),t.fillStyle="rgba(10,6,4,0.35)",t.save(),t.translate(2,2),tc(t,l,c),t.fill(),t.restore(),t.fillStyle=Ha(u,f),tc(t,l,c),t.fill(),t.strokeStyle=Ha(u,f*.6),t.lineWidth=.8,t.beginPath(),t.moveTo(-l,0),t.lineTo(l,0),t.stroke(),t.restore()})}}return mt.leaves=fe(s)}function wf(){if(mt.gravel)return mt.gravel;let s=de(512,512),t=an(s,(n,i)=>{let a=52+be(mi,n/40,i/40,4,12.8)*40;return[a*1.05,a*.95,a*.8]}),e=Ce(5);for(let n=0;n<2200;n++){let i=e()*512,r=e()*512,a=1+e()*3.5,o=60+e()*70;Br(s,i,r,a,(l,c)=>{t.fillStyle=`rgb(${o+6},${o},${o-8})`,t.beginPath(),t.ellipse(l,c,a,a*(.6+e()*.4),e()*3,0,7),t.fill(),t.fillStyle="rgba(0,0,0,0.3)",t.beginPath(),t.ellipse(l+1,c+1,a,a*.6,0,0,3.2),t.fill()})}for(let n=0;n<220;n++){let i=e()*512,r=e()*512,a=5+e()*7,o=Ba[e()*Ba.length|0];Br(s,i,r,a,(l,c)=>{t.save(),t.translate(l,c),t.rotate(e()*7),t.fillStyle=Ha(o,.7),tc(t,a,a*.45),t.fill(),t.restore()})}return mt.gravel=fe(s)}function ns(s="oak"){let t="bark_"+s;if(mt[t])return mt[t];let e=de(256,512),n=es(s==="pine"?77:s==="beech"?55:13);return an(e,(i,r)=>{if(s==="beech"){let u=be(n,i/24,r/24,4,10.67),f=Math.abs(n(i/30,r/6,8.53)-.5)<.04?.6:1,d=(52+u*30)*f;return[d*.95,d*.97,d*.93]}if(s==="pine"){let u=be(n,i/24,r/40,3,10.67),f=Math.abs(n(i/18,r/30,14.2)-.5)<.06?.4:1,d=(60+u*60)*f;return[d*1.2,d*.82,d*.62]}let a=be(n,i/30,r/90,3,8.53)*3.2,o=Math.pow(Math.abs(Math.sin(i/256*Math.PI*12+a)),.5),l=be(n,i/14,r/26,4,18.29),c=22+o*22+l*34;return[c*1,c*.92,c*.82]}),mt[t]=fe(e)}function vs(s="old"){let t="planks_"+s;if(mt[t])return mt[t];let e=de(512,512),n=Ce(s==="old"?3:s==="floor"?9:21),i=8,r=512/i,a=[];for(let l=0;l<i;l++)a.push(.75+n()*.4);let o=an(e,(l,c)=>{let u=Math.floor(c/r),f=c-u*r,d=Math.sin((c*.9+be(Yn,l/60,c/8+u*3,3,8.53)*30)*.8)*.5+.5,p=be(mi,l/30,c/30,3,17.07),m;s==="old"?m=[92,82,70]:s==="floor"?m=[118,82,52]:m=[120,90,62];let x=a[u]*(.82+d*.18)*(.85+p*.3),g=f<3||f>r-2?.35:1;return[m[0]*x*g,m[1]*x*g,m[2]*x*g]});for(let l=0;l<i;l++)for(let c of[20,492])o.fillStyle="rgba(30,25,22,0.9)",o.beginPath(),o.arc(c,l*r+r*.3,2.5,0,7),o.fill(),o.beginPath(),o.arc(c,l*r+r*.7,2.5,0,7),o.fill();if(s==="old")for(let l=0;l<30;l++)o.fillStyle=`rgba(20,24,18,${.1+n()*.2})`,o.beginPath(),o.ellipse(n()*512,n()*512,10+n()*40,6+n()*20,n()*3,0,7),o.fill();return mt[t]=fe(e)}function nc(){if(mt.concrete)return mt.concrete;let s=de(512,512),t=an(s,(n,i)=>{let r=be(Yn,n/50,i/50,5,10.24),a=be(mi,n/120,i/200,3,4.27),o=70+r*45-Math.max(0,a-.55)*120;return[o*.98,o,o*.98]}),e=Ce(8);t.strokeStyle="rgba(25,25,25,0.6)",t.lineWidth=1;for(let n=0;n<6;n++){let i=e()*512,r=e()*512;t.beginPath(),t.moveTo(i,r);for(let a=0;a<12;a++)i+=(e()-.5)*30,r+=e()*18,t.lineTo(i,r);t.stroke()}for(let n=0;n<8;n++){let i=e()*512,r=e()*512,a=10+e()*30,o=200+e()*250;for(let l of[0,-512]){let c=t.createLinearGradient(0,r+l,0,r+l+o);c.addColorStop(0,"rgba(20,22,20,0.22)"),c.addColorStop(1,"rgba(20,22,20,0)"),t.fillStyle=c,t.fillRect(i,r+l,a,o)}}return mt.concrete=fe(s)}function Ef(){if(mt.brick)return mt.brick;let s=de(512,512),t=Ce(4),e=64,n=32,i={};return an(s,(r,a)=>{let o=Math.floor(a/n),l=o%2?e/2:0,c=Math.floor((r+l)/e),u=o*100+c%8;i[u]===void 0&&(i[u]=.7+t()*.45);let f=(r+l)%e,d=a%n,p=f<3||d<3,m=be(Yn,r/16,a/16,3,32),x=be(mi,r/100,a/140,3,5.12);if(p){let y=58+m*24;return[y,y*.97,y*.92]}let g=i[u]*(.8+m*.35)*(1-Math.max(0,x-.5)*.9);return[120*g,58*g,42*g]}),mt.brick=fe(s)}function Tf(){if(mt.asphalt)return mt.asphalt;let s=de(512,512),t=Ce(12),e=an(s,(n,i)=>{let a=30+be(mi,n/8,i/8,3,64)*22+(t()<.02?30:0);return[a,a,a*1.03]});e.strokeStyle="rgba(12,12,12,0.7)",e.lineWidth=1.5;for(let n=0;n<4;n++){let i=t()*512,r=t()*512;e.beginPath(),e.moveTo(i,r);for(let a=0;a<10;a++)i+=(t()-.5)*40,r+=(t()-.5)*40,e.lineTo(i,r);e.stroke()}return mt.asphalt=fe(s)}function Af(){if(mt.sidewalk)return mt.sidewalk;let s=de(256,256),t=Ce(2);return an(s,(e,n)=>{let i=e%128<2||n%128<2,r=be(Yn,e/10,n/10,3,25.6),a=(Math.floor(e/128)*7+Math.floor(n/128)*13)%5*4,o=i?35:62+r*20+a;return[o,o,o*.98]}),mt.sidewalk=fe(s)}function ic(){if(mt.mulch)return mt.mulch;let s=de(512,512),t=an(s,(n,i)=>{let r=35+be(Yn,n/20,i/20,3,25.6)*30;return[r*1.2,r*.9,r*.65]}),e=Ce(19);for(let n=0;n<4200;n++){let i=e()*512,r=e()*512,a=1.5+e()*4,o=.45+e()*.6;Br(s,i,r,a,(l,c)=>{t.save(),t.translate(l,c),t.rotate(e()*7),t.fillStyle=`rgb(${72*o|0},${54*o|0},${40*o|0})`,t.fillRect(-a,-1,a*2,2),t.restore()})}return mt.mulch=fe(s)}function Rf(){if(mt.sand)return mt.sand;let s=de(256,256);return an(s,(t,e)=>{let n=78+be(mi,t/6,e/6,3,42.67)*30;return[n*1.05,n*.95,n*.75]}),mt.sand=fe(s)}function Cf(){if(mt.wallpaper)return mt.wallpaper;let s=de(256,256),t=an(s,(e,n)=>{let r=150+be(Yn,e/20,n/20,3,12.8)*20;return[r*.96,r*.95,r*.9]});t.strokeStyle="rgba(120,115,100,0.25)";for(let e=0;e<256;e+=32)t.beginPath(),t.moveTo(e,0),t.lineTo(e,256),t.stroke();return mt.wallpaper=fe(s)}function jh(s=[150,140,125]){let t="plaster"+s.join();if(mt[t])return mt[t];let e=de(256,256);return an(e,(n,i)=>{let a=.8+be(mi,n/30,i/30,4,8.53)*.3;return[s[0]*a,s[1]*a,s[2]*a]}),mt[t]=fe(e)}function Fi(s="oak"){let t="card_"+s;if(mt[t])return mt[t];let e=de(256,256),n=e.getContext("2d"),i=Ce(s.length*17+3);n.lineCap="round";let r=[];for(let l=0;l<9;l++){let c=i()*Math.PI*2,u=50+i()*70;r.push([128+Math.cos(c)*u,128+Math.sin(c)*u]),n.strokeStyle="rgb(36,28,22)",n.lineWidth=1.5+i()*2,n.beginPath(),n.moveTo(128,128),n.quadraticCurveTo(128+Math.cos(c+.3)*u*.5,128+Math.sin(c+.3)*u*.5,r[l][0],r[l][1]),n.stroke()}let a=Ba;s==="beech"&&(a=[[150,92,40],[168,104,46],[130,76,34],[180,120,56],[120,70,32]]),s==="bush"&&(a=[[70,62,34],[90,70,38],[60,56,30],[104,76,40],[50,48,28]]),s==="hedge"&&(a=[[34,52,30],[40,60,34],[28,44,26],[46,66,38]]);let o=s==="bush"?260:s==="hedge"?420:340;for(let l=0;l<o;l++){let c=r[i()*r.length|0],u=i(),f=128+(c[0]-128)*u+(i()-.5)*40,d=128+(c[1]-128)*u+(i()-.5)*40;if(Math.hypot(f-128,d-128)>122)continue;let p=5+i()*7,m=a[i()*a.length|0],x=.6+i()*.6;n.save(),n.translate(f,d),n.rotate(i()*7),n.fillStyle=Ha(m,x),tc(n,p,p*.5),n.fill(),n.restore()}return mt[t]=fe(e,{wrap:!1})}function Pf(){if(mt.pinecard)return mt.pinecard;let s=de(256,256),t=s.getContext("2d"),e=Ce(99);t.lineCap="round";for(let n=0;n<14;n++){let i=e()*Math.PI*2,r=40+e()*80,a=128+Math.cos(i)*r,o=128+Math.sin(i)*r;t.strokeStyle="rgb(40,30,22)",t.lineWidth=2,t.beginPath(),t.moveTo(128,128),t.lineTo(a,o),t.stroke();for(let l=0;l<60;l++){let c=e(),u=128+(a-128)*c,f=128+(o-128)*c,d=i+(e()-.5)*2.4,p=6+e()*10,m=34+e()*30;t.strokeStyle=`rgb(${m*.6},${m},${m*.55})`,t.lineWidth=1.2,t.beginPath(),t.moveTo(u,f),t.lineTo(u+Math.cos(d)*p,f+Math.sin(d)*p),t.stroke()}}return mt.pinecard=fe(s,{wrap:!1})}function If(){if(mt.fern)return mt.fern;let s=de(256,256),t=s.getContext("2d"),e=Ce(41);for(let n=0;n<7;n++){let i=-Math.PI/2+(n-3)*.32+(e()-.5)*.2,r=150+e()*80,a=[110+e()*40,70+e()*20,36];for(let o=0;o<1;o+=.04){let l=o*o*.9*(n<3?-1:1),c=128+Math.cos(i+l)*r*o,u=250+Math.sin(i+l)*r*o,f=(1-o)*22+4;t.strokeStyle=Ha(a,.7+e()*.4),t.lineWidth=2,t.beginPath(),t.moveTo(c,u),t.lineTo(c+Math.cos(i+l+1.4)*f,u+Math.sin(i+l+1.4)*f),t.stroke(),t.beginPath(),t.moveTo(c,u),t.lineTo(c+Math.cos(i+l-1.4)*f,u+Math.sin(i+l-1.4)*f),t.stroke()}}return mt.fern=fe(s,{wrap:!1})}function Lf(){if(mt.grass)return mt.grass;let s=de(256,128),t=s.getContext("2d"),e=Ce(61);for(let n=0;n<160;n++){let i=e()*256,r=40+e()*80,a=60+e()*50;t.strokeStyle=`rgb(${a*1.15},${a},${a*.55})`,t.lineWidth=1+e()*1.5,t.beginPath(),t.moveTo(i,128),t.quadraticCurveTo(i+(e()-.5)*20,128-r*.5,i+(e()-.5)*40,128-r),t.stroke()}return mt.grass=fe(s,{wrap:!1})}function Df(){if(mt.fwall)return mt.fwall;let s=de(1024,512),t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#05060a"),e.addColorStop(.6,"#0b0c10"),e.addColorStop(1,"#07070a"),t.fillStyle=e,t.fillRect(0,0,1024,512);let n=Ce(71),i=[[18,20,26,140],[12,13,17,90],[6,6,8,60]];for(let r of i)for(let a=0;a<r[3];a++){let o=n()*1024,l=4+n()*(r===i[2]?30:16);t.fillStyle=`rgb(${r[0]},${r[1]},${r[2]})`,Br(s,o,256,l,c=>t.fillRect(c-l/2,0,l,512))}return mt.fwall=fe(s)}function kf(){if(mt.wire)return mt.wire;let s=de(128,128),t=s.getContext("2d");t.strokeStyle="rgb(120,122,118)",t.lineWidth=2;for(let e=-128;e<256;e+=32)t.beginPath(),t.moveTo(e,0),t.lineTo(e+128,128),t.stroke(),t.beginPath(),t.moveTo(e+128,0),t.lineTo(e,128),t.stroke();return mt.wire=fe(s)}function Nf(){if(mt.bauzaun)return mt.bauzaun;let s=de(256,256),t=s.getContext("2d");t.strokeStyle="rgb(150,152,150)",t.lineWidth=2;for(let e=0;e<=256;e+=16)t.beginPath(),t.moveTo(e,0),t.lineTo(e,256),t.stroke();for(let e=0;e<=256;e+=32)t.beginPath(),t.moveTo(0,e),t.lineTo(256,e),t.stroke();return t.lineWidth=6,t.strokeRect(3,3,250,250),mt.bauzaun=fe(s,{wrap:!1})}function sc(){if(mt.tape)return mt.tape;let s=de(128,16),t=s.getContext("2d");for(let e=-16;e<144;e+=16)t.fillStyle=e/16%2?"#e8e8e2":"#c41a12",t.beginPath(),t.moveTo(e,16),t.lineTo(e+8,0),t.lineTo(e+24,0),t.lineTo(e+16,16),t.fill();return mt.tape=fe(s)}function Uf(){if(mt.stripes)return mt.stripes;let s=de(256,64),t=s.getContext("2d");for(let e=-64;e<320;e+=64)t.fillStyle="#d01c14",t.beginPath(),t.moveTo(e,64),t.lineTo(e+32,0),t.lineTo(e+64,0),t.lineTo(e+32,64),t.fill(),t.fillStyle="#ecece6",t.beginPath(),t.moveTo(e+32,64),t.lineTo(e+64,0),t.lineTo(e+96,0),t.lineTo(e+64,64),t.fill();return mt.stripes=fe(s)}function Ff(s,{w:t=512,h:e=256,bg:n="#e9e4d6",fg:i="#1d1d1d",border:r="#1d1d1d",font:a="bold 48px Arial",align:o="center",worn:l=!0}={}){let c=de(t,e),u=c.getContext("2d");u.fillStyle=n,u.fillRect(0,0,t,e),r&&(u.strokeStyle=r,u.lineWidth=10,u.strokeRect(8,8,t-16,e-16)),u.fillStyle=i,u.font=a,u.textAlign=o,u.textBaseline="middle";let f=e/(s.length+1);if(s.forEach((d,p)=>{typeof d=="object"?(u.save(),u.font=d.font||a,u.fillStyle=d.color||i,u.fillText(d.t,o==="center"?t/2:30,f*(p+1)),u.restore()):u.fillText(d,o==="center"?t/2:30,f*(p+1))}),l){let d=Ce(s.join().length);for(let p=0;p<40;p++)u.fillStyle=`rgba(60,50,30,${d()*.15})`,u.beginPath(),u.arc(d()*t,d()*e,3+d()*25,0,7),u.fill()}return fe(c,{wrap:!1})}function Of(s=0){let t="facade"+s;if(mt[t])return mt[t];let e=de(512,512),n=[[148,132,112],[128,120,116],[150,126,98],[110,108,104]],i=n[s%n.length],r=an(e,(o,l)=>{let u=.75+be(Yn,o/40,l/40,4,12.8)*.3;return[i[0]*u,i[1]*u,i[2]*u]}),a=Ce(s+40);for(let o=0;o<3;o++){r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(0,o*170+160,512,6);for(let l=0;l<3;l++){let c=50+l*160,u=o*170+28;r.fillStyle="rgba(40,36,30,0.9)",r.fillRect(c-6,u-6,92,128);let f=a()<.12;if(r.fillStyle=f?"#6b4a22":"#0d0f13",r.fillRect(c,u,80,116),f){let d=r.createRadialGradient(c+40,u+60,5,c+40,u+60,70);d.addColorStop(0,"rgba(255,190,110,0.8)"),d.addColorStop(1,"rgba(120,70,30,0.2)"),r.fillStyle=d,r.fillRect(c,u,80,116)}else r.fillStyle="rgba(80,90,110,0.12)",r.fillRect(c+4,u+4,30,50);if(r.fillStyle="rgb(200,196,186)",r.fillRect(c+38,u,4,116),r.fillRect(c,u+50,80,4),!f&&a()<.5){r.fillStyle="rgb(70,64,58)";let d=30+a()*80;r.fillRect(c,u,80,d);for(let p=0;p<d;p+=6)r.fillStyle="rgba(0,0,0,0.3)",r.fillRect(c,u+p,80,1)}r.fillStyle="rgb(170,166,156)",r.fillRect(c-8,u+116,96,8)}}return mt[t]=fe(e,{wrap:!1})}function zf(){if(mt.shutter)return mt.shutter;let s=de(256,256),t=an(s,(e,n)=>{let i=(n%16<2?45:95)+be(Yn,e/20,n/20,3,12.8)*30;return[i,i*.98,i*.95]});return t.fillStyle="rgba(30,30,30,0.8)",t.font="bold 34px Arial",t.save(),t.translate(60,140),t.rotate(-.15),t.fillText("GESCHLOSSEN",-20,0),t.restore(),mt.shutter=fe(s)}function Bf(){if(mt.roof)return mt.roof;let s=de(256,256);return an(s,(t,e)=>{let n=Math.floor(e/16),i=n%2?8:0,a=(e%16<2||(t+i)%16<1?22:48)+be(mi,t/16,e/16,3,16)*26;return[a*1.1,a*.7,a*.6]}),mt.roof=fe(s)}function Hf(){if(mt.felt)return mt.felt;let s=de(256,256);return an(s,(t,e)=>{let n=26+be(Yn,t/12,e/12,4,21.33)*24+(e%64<2?-10:0);return[n,n,n*.95]}),mt.felt=fe(s)}function Gf(){if(mt.cookie)return mt.cookie;let s=de(256,256);return an(s,(t,e)=>{let n=Math.hypot(t-128,e-128)/128,i=Math.max(0,1-n*n)**.7;i*=.94+.06*Math.cos(n*22),i+=Math.max(0,1-n*2.6)*.3;let r=Te(i*255,0,255);return[r,r*.98,r*.94]}),mt.cookie=fe(s,{wrap:!1,srgb:!1})}function Vf(){if(mt.glow)return mt.glow;let s=de(128,128),t=s.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.5)"),e.addColorStop(.5,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),mt.glow=fe(s,{wrap:!1})}function Wf(){if(mt.water)return mt.water;let s=de(256,256);return an(s,(t,e)=>{let i=10+be(mi,t/18,e/60,4,14.2)*22;return[i*.8,i,i*1.05]}),mt.water=fe(s)}function Xf(s){let t=de(128,152),e=t.getContext("2d"),n=Ce(s);e.fillStyle="#e8e4da",e.fillRect(0,0,128,152);let i=e.createRadialGradient(64,70,4,64,70,80);i.addColorStop(0,"#5a5c55"),i.addColorStop(1,"#0a0b0a"),e.fillStyle=i,e.fillRect(8,8,112,112);for(let l=0;l<9;l++){let c=8+n()*112;e.fillStyle=`rgba(20,18,16,${.6+n()*.4})`,e.fillRect(c,8,3+n()*9,112)}let r=40+n()*48,a=.7+n()*.5;e.fillStyle="#0c0c0c",e.beginPath(),e.arc(r,62-10*a,7*a,0,7),e.fill(),e.fillRect(r-9*a,62-4*a,18*a,30*a),e.fillRect(r-7*a,62+26*a,6*a,24*a),e.fillRect(r+1*a,62+26*a,6*a,24*a),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(8,8,112,112),e.fillStyle="#2a2a6a",e.font='13px "Comic Sans MS", cursive';let o=["14.09.","02.10.","17.10.","21.10.","26.10.","29.10.","30.10."];return e.fillText(o[s%o.length],12,140),fe(t,{wrap:!1})}function qf(){if(mt.map)return mt.map;let s=de(512,384),t=s.getContext("2d");t.fillStyle="#c9c7b0",t.fillRect(0,0,512,384);let e=Ce(3);for(let r=0;r<400;r++)t.fillStyle=`rgba(80,110,70,${.15+e()*.2})`,t.beginPath(),t.arc(e()*512,60+e()*324,4+e()*12,0,7),t.fill();t.fillStyle="#e2dfd0",t.fillRect(0,0,512,60),t.strokeStyle="#8a7a5a",t.lineWidth=3;let n=[[[256,60],[256,384]],[[0,200],[512,230]],[[80,60],[140,384]],[[380,60],[420,384]],[[0,300],[512,320]]];for(let r of n)t.beginPath(),t.moveTo(...r[0]),t.lineTo(...r[1]),t.stroke();t.fillStyle="#222",t.font="bold 14px Arial",t.fillText("STADTWALD",220,30),t.font="12px Arial",t.fillText("Goetheturm",262,76),t.fillText("H\xFCgelschneise",262,150),t.fillText("Maunzenweiher",300,300),t.fillText("Sachsenhausen",30,40),t.strokeStyle="#b01010",t.lineWidth=2;let i=[[256,72],[200,180],[150,230],[120,260],[320,250],[410,120]];for(let r of i)t.beginPath(),t.arc(r[0],r[1],9,0,7),t.stroke();return t.lineWidth=3,t.beginPath(),t.moveTo(110,275),t.lineTo(126,291),t.moveTo(126,275),t.lineTo(110,291),t.stroke(),t.setLineDash([4,4]),t.beginPath(),t.moveTo(256,160),t.quadraticCurveTo(180,200,118,283),t.stroke(),t.setLineDash([]),t.fillStyle="#b01010",t.font='13px "Comic Sans MS", cursive',t.fillText("RUF 1",196,196),t.fillText("RUF 2",140,248),t.fillText("RUF 3",330,262),mt.map=fe(s,{wrap:!1})}function Zf(){if(mt.news)return mt.news;let s=de(256,320),t=s.getContext("2d");t.fillStyle="#d8d2bf",t.fillRect(0,0,256,320),t.fillStyle="#1a1a1a",t.font="bold 22px Georgia",t.fillText("Joggerin im",14,36),t.fillText("Stadtwald vermisst",14,62),t.font="11px Georgia",t.fillText("Frankfurt (dpa) \u2013 Seit Sonntag wird eine",14,84),t.fillText("34-j\xE4hrige Frau aus Oberrad vermisst.",14,98),t.fillStyle="#555",t.fillRect(14,110,110,120),t.fillStyle="#1a1a1a";for(let e=116;e<300;e+=12)t.fillRect(132,e,100+Math.sin(e)*12,5);for(let e=240;e<300;e+=12)t.fillRect(14,e,108,5);return mt.news=fe(s,{wrap:!1})}function Yf(){if(mt.monitor)return mt.monitor;let s=de(256,160),t=s.getContext("2d"),e=t.createLinearGradient(0,0,256,160);return e.addColorStop(0,"#0e2440"),e.addColorStop(1,"#06101e"),t.fillStyle=e,t.fillRect(0,0,256,160),t.fillStyle="rgba(255,255,255,0.08)",t.fillRect(20,20,140,90),t.fillStyle="rgba(255,255,255,0.15)",t.fillRect(20,20,140,10),t.fillStyle="rgba(0,0,0,0.6)",t.fillRect(0,148,256,12),t.fillStyle="#fff",t.font="8px Arial",t.fillText("01:43",226,157),mt.monitor=fe(s,{wrap:!1})}function $f(){if(mt.poster)return mt.poster;let s=de(256,360),t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,360);e.addColorStop(0,"#2a1c3c"),e.addColorStop(1,"#0c0a14"),t.fillStyle=e,t.fillRect(0,0,256,360),t.fillStyle="#d24a2a",t.beginPath(),t.arc(128,150,70,0,7),t.fill(),t.fillStyle="#0c0a14";for(let n=0;n<6;n++)t.fillRect(0,120+n*14,256,5);return t.fillStyle="#e8e0d0",t.font="bold 30px Arial",t.textAlign="center",t.fillText("NIGHT DRIVE",128,290),t.font="14px Arial",t.fillText("TOUR 2025",128,315),mt.poster=fe(s,{wrap:!1})}function Kf(){if(mt.sack)return mt.sack;let s=de(256,256),t=an(s,(e,n)=>{let i=e%6<3^n%6<3?1:.88,r=(110+be(Yn,e/10,n/10,3,25.6)*40)*i;return[r*1.05,r*.9,r*.65]});t.fillStyle="#120c08",t.beginPath(),t.ellipse(88,110,16,20,.1,0,7),t.fill(),t.beginPath(),t.ellipse(168,108,16,22,-.1,0,7),t.fill(),t.strokeStyle="#120c08",t.lineWidth=6,t.beginPath(),t.moveTo(80,180);for(let e=80;e<=176;e+=12)t.lineTo(e,180+(e/12%2?8:-6));return t.stroke(),mt.sack=fe(s,{wrap:!1})}function Jf(){if(mt.ancient)return mt.ancient;let s=de(512,512),t=Ce(808),e=8,n=512/e,i=[];for(let o=0;o<e;o++)i.push(.7+t()*.45);let r=es(909),a=an(s,(o,l)=>{let c=Math.floor(l/n),u=l-c*n,f=Math.sin((l*1.1+be(Yn,o/50,l/6+c*5,3,10.24)*40)*.7)*.5+.5,d=be(mi,o/24,l/24,4,21.33),p=Math.max(0,be(r,o/70,l/70,4,7.31)-.52)*3.2,x=i[c]*(.78+f*.22)*(.8+d*.35)*(1-0*.6),g=[92,80,66],y=[g[0]*x,g[1]*x,g[2]*x];y=[y[0]*(1-p)+52*p,y[1]*(1-p)+66*p,y[2]*(1-p)+34*p];let b=u<4||u>n-3?.18:1,w=Math.abs(r(o/9,l/2.5+c*7,0)-.5)<.012?.45:1;return[y[0]*b*w,y[1]*b*w,y[2]*b*w]});for(let o=0;o<26;o++){let l=t()*512,c=3+t()*10,u=60+t()*260,f=t()*512;for(let d of[0,-512]){let p=a.createLinearGradient(0,f+d,0,f+d+u);p.addColorStop(0,"rgba(18,16,12,0.35)"),p.addColorStop(1,"rgba(18,16,12,0)"),a.fillStyle=p,a.fillRect(l,f+d,c,u)}}for(let o=0;o<e;o++)for(let l of[24,256,488])a.fillStyle="rgba(90,40,18,0.9)",a.beginPath(),a.arc(l+t()*6,o*n+n*.5,2.8,0,7),a.fill(),a.fillStyle="rgba(90,40,18,0.25)",a.fillRect(l,o*n+n*.5,3,18+t()*20);for(let o=0;o<9;o++)a.fillStyle="rgba(22,16,10,0.85)",a.beginPath(),a.ellipse(t()*512,t()*512,4+t()*7,3+t()*4,t(),0,7),a.fill();return mt.ancient=fe(s)}function jf(){if(mt.mossroof)return mt.mossroof;let s=de(512,512),t=es(4242);return an(s,(e,n)=>{let i=30+be(Yn,e/14,n/14,4,36.57)*26+(n%64<3?-12:0),r=Math.min(1,Math.max(0,be(t,e/60,n/60,5,8.53)-.42)*2.6),a=be(mi,e/4,n/4,2,128)*.4+.8;return[i*(1-r)+48*r*a,i*(1-r)+62*r*a,i*.95*(1-r)+30*r*a]}),mt.mossroof=fe(s)}function Qf(){if(mt.web)return mt.web;let s=de(256,256),t=s.getContext("2d"),e=Ce(66);t.strokeStyle="rgba(220,220,215,0.55)",t.lineWidth=1;let n=11;for(let i=0;i<n;i++){let r=i/n*Math.PI*.5;t.beginPath(),t.moveTo(0,0),t.lineTo(Math.cos(r)*250,Math.sin(r)*250),t.stroke()}for(let i=1;i<12;i++){t.beginPath();for(let r=0;r<=n;r++){let a=Math.min(r,n-1)/n*Math.PI*.5,o=i*20+e()*6,l=Math.cos(a)*o,c=Math.sin(a)*o;r?t.lineTo(l,c):t.moveTo(l,c)}t.stroke()}return mt.web=fe(s,{wrap:!1})}function tp(){if(mt.ivy)return mt.ivy;let s=de(256,512),t=s.getContext("2d"),e=Ce(515);t.lineCap="round";for(let n=0;n<6;n++){let i=30+e()*196,r=512;t.strokeStyle="rgb(46,34,22)",t.lineWidth=2.5,t.beginPath(),t.moveTo(i,r);let a=[];for(;r>60+e()*200;)i+=(e()-.5)*30,r-=12+e()*16,t.lineTo(i,r),a.push([i,r]);t.stroke();for(let[o,l]of a)for(let c=0;c<3;c++){let u=30+e()*40;t.fillStyle=`rgb(${u*.7},${u*1.05},${u*.5})`,t.save(),t.translate(o+(e()-.5)*18,l+(e()-.5)*18),t.rotate(e()*7),t.beginPath(),t.moveTo(0,-9),t.lineTo(7,0),t.lineTo(3,2),t.lineTo(6,8),t.lineTo(0,5),t.lineTo(-6,8),t.lineTo(-3,2),t.lineTo(-7,0),t.closePath(),t.fill(),t.restore()}}return mt.ivy=fe(s,{wrap:!1})}h.timers=[];function Qh(s,t){let e={t:h.time+s,fn:t};return h.timers.push(e),e}function Ks(s){return h.started?new Promise(t=>Qh(s,t)):new Promise(t=>setTimeout(t,s*1e3))}function ep(){if(!h.timers.length)return 0;let s=0;for(let t=0;t<h.timers.length;t++){let e=h.timers[t];if(h.time>=e.t){h.timers.splice(t,1),t--,s++;try{e.fn()}catch(n){console.error(n)}}}return s}var Va=1;function tu(s){Va=s>>>0}function np(){return Va}function bn(){Va=Va+1831565813>>>0;let s=Va;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}h.rand=bn;var Js={stand:{h:1.75,eye:1.62,speed:2.5},crouch:{h:1.15,eye:.98,speed:1.3},crawl:{h:.72,eye:.48,speed:.85}},xy=2.3,yy=30,vy=5,_y=3,by=.22,rc=class{constructor(t,e){this.cam=t,this.p=new U,this.vel=new U,this.vy=0,this.yaw=0,this.pitch=0,this.roll=0,this.stance="stand",this.forceStance=null,this.eyeY=1.62,this.bob=0,this.bobAmt=0,this.stepDist=0,this.stamina=1,this.exhausted=0,this.canMove=!0,this.canLook=!0,this.canSprint=!0,this.canInteract=!0,this.onGround=!0,this.shakeAmt=0,this.shakeT=0,this.extraPitch=0,this.extraRoll=0,this.eyeOffset=0,this.lookTarget=null,this.holding=null,this.holdT=0,this.current=null,this.radius=.3,this.flashOn=!1,this.speedMul=1,this.fovKick=0,this.blockedBy=[];let n=new Os(15921407,0,40,.5,.55,1.25);n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.near=.15,n.shadow.camera.far=38,n.shadow.bias=-4e-4,n.shadow.normalBias=.03,n.map=Gf(),this.flash=n,this.flashTarget=new We,e.add(n),e.add(this.flashTarget),n.target=this.flashTarget,this.flashDir=new U(0,0,-1),this.flashIntensity=15,this.flashFlicker=0,this.glow=new zs(10465488,0,4,2),e.add(this.glow)}teleport(t,e,n,i=this.yaw,r=0){this.p.set(t,e,n),this.vel.set(0,0,0),this.vy=0,this.stepDist=0,this.bob=0,this.bobAmt=0,this.stuckT=0,this.holding=null,this.holdT=0,this.shakeT=0,this.shakeAmt=0,this.flashFlicker=0,this.onGround=!0,this.sprinting=!1,this._breathT=0,this.yaw=i,this.pitch=r,this.eyeY=e+Js[this.stance].eye,this.lookTarget=null,this.trail=[],this.updateCamera(0),this.flashDir.copy(this.forward())}forward(){return new U(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}get height(){return Js[this.stance].h}get eyeHeight(){return Js[this.stance].eye}setFlash(t){let e=h.phone;t&&(e.battery<=0||e.dropped||h.flags.noFlash)&&(t=!1),t!==this.flashOn&&h.audio.click(),this.flashOn=t}shake(t=.5,e=.5){this.shakeAmt=Math.max(this.shakeAmt,t),this.shakeT=Math.max(this.shakeT,e)}tryStance(t){if(t===this.stance)return;let e=["crawl","crouch","stand"];if(e.indexOf(t)>e.indexOf(this.stance)){let n=this.p.clone();if(h.world.resolve(n,this.radius,this.p.y,this.p.y+Js[t].h),n.distanceToSquared(this.p)>4e-4||h.flags.lowCeiling&&h.flags.lowCeiling(this.p,Js[t].h))return}this.stance=t}emitStep(t,e){let n=e==="sprint"?1.35:e==="crouch"?.5:e==="crawl"?.45:.9;h.audio.footstep(t,n,null,e),h.noise&&h.noise.step(t,e,this.p),this.onStep&&this.onStep(t,e==="sprint",e)}update(t){let e=h.world,n=h.dev||{};if(this.canLook&&(this.yaw-=Ut.st.lx,this.pitch-=Ut.st.ly),this.lookTarget){let M=this.lookTarget,I=new U().subVectors(M.pos,this.cam.position),P=Math.atan2(-I.x,-I.z),O=Math.atan2(I.y,Math.hypot(I.x,I.z)),k=1-Math.exp(-(M.speed||4)*t);this.yaw+=pi(this.yaw,P)*k,this.pitch+=(O-this.pitch)*k}if(this.pitch=Te(this.pitch,-1.45,1.45),n.fly){this.updateFly(t,n);return}if(this.scripted){this.vel.set(0,0,0),this.vy=0,this.bobAmt=Rn(this.bobAmt,0,5,t),this.sprinting=!1,this.regen(t,!1),this.updateInteract(t),Ut.actHit("flash")&&!h.flags.lockFlash&&this.setFlash(!this.flashOn),this.updateCamera(t);return}let i="stand";Ut.act("crouch")&&(i="crouch"),this.forceStance&&(i=this.forceStance),this.tryStance(i);let r=Js[this.stance],a=0,o=0;this.canMove&&(Ut.st.ax||Ut.st.az?(a=Ut.st.ax,o=Ut.st.az):(Ut.act("forward")&&(o-=1),Ut.act("back")&&(o+=1),Ut.act("left")&&(a-=1),Ut.act("right")&&(a+=1)));let l=Math.hypot(a,o),c=Math.min(1,l);l>0&&(a/=l,o/=l);let u=Ut.act("sprint"),f=l>0&&o<-.25;this.exhausted>0&&this.stamina>=by&&(this.exhausted=0);let d=this.canSprint&&u&&f&&this.stance==="stand"&&this.exhausted<=0&&this.stamina>0;d&&h.phoneOpen&&!h.flags.keepPhone&&h.ui.togglePhone(!1);let p=r.speed*(d?xy:Math.max(.35,c))*this.speedMul;h.phoneOpen&&(p*=.75),d?(this.stamina=Math.max(0,this.stamina-t/yy),this.stamina<=0&&(this.exhausted=1,h.audio.breath(1.3))):this.regen(t,l>0),this.stamina<.4&&(this._breathT=(this._breathT||0)-t)<0&&(h.audio.breath(1-this.stamina),this._breathT=this.exhausted?.8:1.15);let m=Math.sin(this.yaw),x=Math.cos(this.yaw),g=(a*x+o*m)*p,y=(-a*m+o*x)*p,b=this.onGround?d?14:l>0?11:9:2.2;this.vel.x=Rn(this.vel.x,g,b,t),this.vel.z=Rn(this.vel.z,y,b,t);let w=this.p.clone();if(n.noclip)this.p.x+=this.vel.x*t,this.p.z+=this.vel.z*t,this.blockedBy=[];else{let M=Math.max(1,Math.ceil(t/.034)),I=t/M,P=n.on?[]:null,O=null;for(let k=0;k<M;k++)this.p.x+=this.vel.x*I,this.p.z+=this.vel.z*I,e.resolve(this.p,this.radius,this.p.y+.35,this.p.y+r.h,P),O=e.constrain(this.p,this.radius*.5,!!P)||O;P&&(this.blockedBy=P.concat(O?[O]:[]).map(k=>({c:k})))}this.canMove&&Ut.actHit("jump")&&this.onGround&&this.stance==="stand"&&(this.vy=4.3,this.onGround=!1,h.noise&&h.noise.add(.12,this.p,"Sprung"));let S=e.groundAt(this.p.x,this.p.z,this.p.y,.55);S===-1/0||(this.p.y>S+.02||this.vy>0?(this.vy-=17*t,this.p.y+=this.vy*t,this.p.y<=S?(this.vy<-5&&(h.audio.footstep(e.surfaceAt(this.p.x,this.p.y,this.p.z),1.4),this.shake(.15,.2),h.noise&&h.noise.add(Math.min(.6,-this.vy*.06),this.p,"Landung")),this.p.y=S,this.vy=0,this.onGround=!0):this.onGround=!1):(this.p.y=S,this.vy=0,this.onGround=!0));let v=Math.hypot(this.p.x-w.x,this.p.z-w.z);this.trail||(this.trail=[]);let E=this.trail[this.trail.length-1];if((!E||Math.hypot(E.x-this.p.x,E.z-this.p.z)>.8)&&(this.trail.push(this.p.clone()),this.trail.length>600&&this.trail.shift()),l>0&&this.canMove&&!n.noclip){if(v<.002?this.stuckT=(this.stuckT||0)+t:this.stuckT=0,this.stuckT>1.2){this.stuckT=0;let M=this.p.clone();M.x+=-Math.sin(this.yaw)*.4,M.z+=-Math.cos(this.yaw)*.4,e.resolve(M,this.radius,this.p.y+.35,this.p.y+r.h),e.constrain(M,this.radius*.5),M.distanceTo(this.p)>.05&&this.p.copy(M)}}else this.stuckT=0;let _=v/Math.max(t,1e-4);if(this.onGround&&_>.3){this.stepDist+=v,this.bob+=v*(d?2.4:this.stance==="stand"?3.4:4.5),this.bobAmt=Rn(this.bobAmt,d?1.6:this.stance==="stand"?1:.6,6,t);let M=this.stance==="crawl"?.45:d?1.1:this.stance==="crouch"?.55:.78;if(this.stepDist>M){this.stepDist=0;let I=this.stance==="crawl"?h.flags.inShaft?"metal":"crawl":e.surfaceAt(this.p.x,this.p.y,this.p.z);this.emitStep(I,this.stance==="crawl"?"crawl":this.stance==="crouch"?"crouch":d?"sprint":"walk")}}else this.bobAmt=Rn(this.bobAmt,0,5,t);this.sprinting=d,this.speedNow=_,this.updateInteract(t),Ut.actHit("flash")&&!h.flags.lockFlash&&this.setFlash(!this.flashOn),h.phone.battery<=0&&this.flashOn&&this.setFlash(!1),this.updateCamera(t)}regen(t,e){if(this.stamina>=1)return;let n=e?vy:_y;this.stamina=Math.min(1,this.stamina+t/(this.exhausted>0?n*1.25:n))}updateFly(t,e){let n=Ut.st.ax||0,i=Ut.st.az||0,r=0;Ut.act("forward")&&(i-=1),Ut.act("back")&&(i+=1),Ut.act("left")&&(n-=1),Ut.act("right")&&(n+=1),Ut.act("jump")&&(r+=1),Ut.act("crouch")&&(r-=1);let a=(e.flySpeed||8)*(Ut.act("sprint")?4:1),o=this.forward(),l=new U(Math.cos(this.yaw),0,-Math.sin(this.yaw)),c=new U().addScaledVector(o,-i).addScaledVector(l,n);c.y+=r,c.lengthSq()>1&&c.normalize(),c.multiplyScalar(a),this.vel.x=Rn(this.vel.x,c.x,8,t),this.vel.z=Rn(this.vel.z,c.z,8,t),this.vy=Rn(this.vy,c.y,8,t),this.p.x+=this.vel.x*t,this.p.z+=this.vel.z*t,this.p.y+=this.vy*t,this.stance="stand",this.onGround=!1,this.sprinting=!1,this.bobAmt=Rn(this.bobAmt,0,5,t),this.regen(t,!1),this.blockedBy=[],this.updateInteract(t),Ut.actHit("flash")&&this.setFlash(!this.flashOn),this.updateCamera(t)}updateInteract(t){let e=h.ui;if(!this.canInteract){e.prompt(null),this.current=null;return}let n=this.forward(),i=h.world.findInteract(this.cam.position,n);if(this.current=i,!i){e.prompt(null),this.holding=null;return}let r=typeof i.text=="function"?i.text():i.text;i.hold>0?Ut.act("use")?(this.holding!==i&&(this.holding=i,this.holdT=0,i.onHoldStart&&i.onHoldStart()),this.holdT+=t,i.onHold&&i.onHold(t,this.holdT/i.hold),e.prompt(r,Math.min(1,this.holdT/i.hold),!0),this.holdT>=i.hold&&(this.holding=null,this.use(i))):(this.holding=null,this.holdT=0,e.prompt(r,0,!0)):(e.prompt(r),Ut.actHit("use")&&this.use(i))}use(t){if(t.once&&(t.used=!0),h.ui.prompt(null),t.onUse&&t.onUse(t),t._resolvers){for(let e of t._resolvers)e();t._resolvers=[]}}updateCamera(t){let e=Js[this.stance];this.eyeY=Rn(this.eyeY,this.p.y+e.eye+this.eyeOffset,t>0?14:1e3,t||1);let n=Math.sin(this.bob*2)*.045*this.bobAmt,i=Math.cos(this.bob)*.03*this.bobAmt,r=0,a=0;if(this.shakeT>0&&t>0){this.shakeT-=t;let p=this.shakeAmt*Math.min(1,this.shakeT*3);r=(bn()-.5)*p*.12,a=(bn()-.5)*p*.12,this.shakeT<=0&&(this.shakeAmt=0)}let o=this.cam,l=new U(Math.cos(this.yaw),0,-Math.sin(this.yaw));o.position.set(this.p.x,this.eyeY+n,this.p.z).addScaledVector(l,i);let c=Math.sin(h.time*1.3)*.006;o.rotation.order="YXZ",o.rotation.y=this.yaw+r,o.rotation.x=this.pitch+this.extraPitch+a+c,o.rotation.z=this.roll+this.extraRoll+Math.sin(this.bob)*.006*this.bobAmt,t>0&&(this.fovKick=Rn(this.fovKick,this.sprinting?6:0,5,t)),o.fov=h.settings.fov+this.fovKick,o.updateProjectionMatrix(),o.updateMatrixWorld();let u=new U(0,0,-1).applyQuaternion(o.quaternion);t>0?this.flashDir.lerp(u,1-Math.exp(-12*t)).normalize():this.flashDir.copy(u);let f=new U(.16,-.17,-.1).applyQuaternion(o.quaternion).add(o.position);this.flash.position.copy(f),this.flashTarget.position.copy(f).addScaledVector(this.flashDir,5);let d=this.flashOn?this.flashIntensity:0;this.flashOn&&h.phone.battery<6&&(d*=.55+.45*(Math.sin(h.time*31)>-.92?1:.2)),this.flashFlicker>0&&(this.flashFlicker-=t,d*=Math.sin(h.time*97)>0?.1:1),this.flash.intensity=d,this.glow.position.copy(f),this.glow.intensity=h.phoneOpen&&!h.phone.dropped?.6:0}};var My=`
precision highp float;
uniform sampler2D tDiffuse;
uniform vec2 res;
uniform float time, grain, aberr, vignette, flash, vhs, exposure, fade, blurAmt, bloomAmt;
uniform sampler2D tBloom;
varying vec2 vUv;

float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }

vec3 aces(vec3 x){ const float a=2.51,b=0.03,c=2.43,d=0.59,e=0.14; return clamp((x*(a*x+b))/(x*(c*x+d)+e),0.0,1.0); }
vec3 toSRGB(vec3 c){ return mix(c*12.92, 1.055*pow(c, vec3(1.0/2.4))-0.055, step(0.0031308, c)); }

void main(){
  vec2 uv = vUv;
  // VHS: zeilenweises Zittern + gelegentliches Tracking-Band
  float row = floor(uv.y * res.y * 0.5);
  float tframe = floor(time * 24.0);
  float jit = (hash(vec2(row, tframe)) - 0.5) * 0.0016 * vhs;
  float bandPos = fract(time * 0.045);
  float band = smoothstep(0.035, 0.0, abs(uv.y - bandPos)) * vhs;
  jit += band * (hash(vec2(row, tframe + 3.0)) - 0.5) * 0.02;
  uv.x += jit;

  // leichte Linsenverzerrung (Kamera-Look)
  vec2 cc = uv - 0.5;
  float r2 = dot(cc, cc);
  uv = 0.5 + cc * (1.0 + 0.045 * r2) / 1.012;
  vec2 dir = uv - 0.5;
  float d = length(dir);
  float ca = aberr * (0.0012 + d * d * 0.012);
  vec3 col;
  col.r = texture2D(tDiffuse, uv + dir * ca).r;
  col.g = texture2D(tDiffuse, uv).g;
  col.b = texture2D(tDiffuse, uv - dir * ca).b;

  // Sch\xE4rfen (Unsharp Mask) \u2013 wirkt wie eine knackige Kamera
  vec2 px = 1.0 / res;
  vec3 b = texture2D(tDiffuse, uv + vec2(px.x, 0.0)).rgb + texture2D(tDiffuse, uv - vec2(px.x, 0.0)).rgb
         + texture2D(tDiffuse, uv + vec2(0.0, px.y)).rgb + texture2D(tDiffuse, uv - vec2(0.0, px.y)).rgb;
  col = max(col + (col - b * 0.25) * (0.55 - blurAmt), vec3(0.0));

  // Bloom
  col += texture2D(tBloom, uv).rgb * bloomAmt;

  col *= exposure;
  col = aces(col);

  // Grading: ents\xE4ttigt, Tiefen blau (Mondnacht), Lichter warm
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(lum), col, 0.78);
  col = mix(col * vec3(0.82, 0.96, 1.22), col * vec3(1.06, 1.0, 0.9), smoothstep(0.02, 0.45, lum));
  // Kontrast nur in Mitten/Lichtern, Tiefen bleiben lesbar
  col = mix(col, col * col * (3.0 - 2.0 * col), smoothstep(0.15, 0.6, lum) * 0.35);
  col = max(col, vec3(0.0));

  vec3 outc = toSRGB(col);
  // angehobene Schw\xE4rzen (Videolook)
  outc = outc * 0.965 + vec3(0.014, 0.017, 0.02);

  // Vignette
  outc *= mix(1.0, smoothstep(0.95, 0.28, d), vignette);
  // Filmkorn (st\xE4rker in dunklen Bereichen)
  float n = hash(vUv * res + fract(time * 13.7) * 91.0) - 0.5;
  outc += n * grain * (0.05 + 0.07 * (1.0 - lum));
  // feine Zeilen
  outc *= 0.975 + 0.025 * sin(vUv.y * res.y * 3.14159);
  // Band etwas heller und verrauscht
  outc += band * 0.05 * hash(vUv * 400.0 + time);

  outc += flash;
  outc *= fade;
  gl_FragColor = vec4(outc, 1.0);
}`,ac=class{constructor(t){this.r=t,this.rt=new Dn(4,4,{type:Hn,depthBuffer:!0,samples:0}),this.rt.texture.minFilter=cn,this.rt.texture.magFilter=cn,this.mat=new vn({uniforms:{tDiffuse:{value:this.rt.texture},res:{value:new Kt(1,1)},time:{value:0},grain:{value:1},aberr:{value:1},vignette:{value:.9},flash:{value:0},vhs:{value:.6},exposure:{value:1.25},fade:{value:1},blurAmt:{value:.18},tBloom:{value:null},bloomAmt:{value:.9}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:My,depthTest:!1,depthWrite:!1}),this.quad=new W(new Yt(2,2),this.mat),this.quad.frustumCulled=!1,this.scene=new Ls,this.scene.add(this.quad),this.cam=new Bs(-1,1,1,-1,0,1),this.scareT=0;let e=()=>{let i=new Dn(4,4,{type:Hn,depthBuffer:!1});return i.texture.minFilter=i.texture.magFilter=cn,i};this.bA=e(),this.bB=e(),this.mat.uniforms.tBloom.value=this.bA.texture;let n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";this.thr=new vn({uniforms:{tDiffuse:{value:this.rt.texture},thr:{value:.55}},vertexShader:n,depthTest:!1,depthWrite:!1,fragmentShader:"uniform sampler2D tDiffuse; uniform float thr; varying vec2 vUv; void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb; float l = max(c.r, max(c.g, c.b)); gl_FragColor = vec4(c * smoothstep(thr, thr * 2.5, l), 1.0); }"}),this.blur=new vn({uniforms:{tDiffuse:{value:null},dir:{value:new Kt}},vertexShader:n,depthTest:!1,depthWrite:!1,fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 dir; varying vec2 vUv;
        void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb * 0.227;
          c += (texture2D(tDiffuse, vUv + dir * 1.385).rgb + texture2D(tDiffuse, vUv - dir * 1.385).rgb) * 0.316;
          c += (texture2D(tDiffuse, vUv + dir * 3.23).rgb + texture2D(tDiffuse, vUv - dir * 3.23).rgb) * 0.07;
          gl_FragColor = vec4(c, 1.0); }`})}pass(t,e){this.quad.material=t,this.r.setRenderTarget(e),this.r.render(this.scene,this.cam)}resize(t,e){let n=h.settings.scale,i=Math.max(320,Math.floor(t*n)),r=Math.max(180,Math.floor(e*n));this.rt.setSize(i,r),this.mat.uniforms.res.value.set(i,r);let a=Math.max(64,i>>2),o=Math.max(36,r>>2);this.bA.setSize(a,o),this.bB.setSize(a,o),this.bw=a,this.bh=o}scare(t=1){this.scareT=Math.max(this.scareT,t)}render(t,e,n){let i=this.mat.uniforms;i.time.value=h.time,i.grain.value=h.settings.grain,this.scareT>0&&(this.scareT=Math.max(0,this.scareT-n*1.4));let r=this.scareT;i.aberr.value=1+r*7,i.vhs.value=.5+r*3+(h.flags.vhsBoost||0),i.flash.value=r>.85?(r-.85)*1.2:0,this.r.setRenderTarget(this.rt),this.r.render(t,e),this.pass(this.thr,this.bA);for(let a=0;a<2;a++)this.blur.uniforms.tDiffuse.value=this.bA.texture,this.blur.uniforms.dir.value.set((1+a)/this.bw,0),this.pass(this.blur,this.bB),this.blur.uniforms.tDiffuse.value=this.bB.texture,this.blur.uniforms.dir.value.set(0,(1+a)/this.bh),this.pass(this.blur,this.bA);this.quad.material=this.mat,this.r.setRenderTarget(null),this.r.render(this.scene,this.cam)}};var qe=s=>document.querySelector(s),oc=class{constructor(){this.el={fade:qe("#fade"),obj:qe("#objective"),objTxt:qe("#objective .txt"),sub:qe("#subtitle"),cross:qe("#crosshair"),prompt:qe("#prompt"),promptTxt:qe("#prompt .txt"),promptCirc:qe("#prompt circle"),hint:qe("#hint"),card:qe("#card"),narr:qe("#narration"),narrBox:qe("#narration .box"),phone:qe("#phone"),app:qe("#phone .app"),notif:qe("#notif"),note:qe("#note"),paper:qe("#note .paper"),menu:qe("#menu"),death:qe("#death"),clock:qe("#clock"),ptm:qe("#phone .tm"),pnet:qe("#phone .net"),ppct:qe("#phone .pct"),pbatt:qe("#phone .batt"),pdead:qe("#phone .dead")},this.subTimer=null,this.hintTimer=null,this.notifTimer=null,this.phoneTab="chat",h.chat=[],this.reply=null,this.mapCanvas=null}fade(t,e=1){let n=this.el.fade;return n.style.transition=`opacity ${e}s linear`,n.offsetWidth,n.style.opacity=t,this.fadeTarget=t,Ks(e+.03)}objective(t){let e=this.el.obj;if(!t){e.classList.remove("show"),this.currentObjective=null;return}this.el.objTxt.textContent===t&&e.classList.contains("show")||(e.classList.remove("show"),setTimeout(()=>{this.el.objTxt.textContent=t,e.classList.add("show"),e.classList.remove("flash"),e.offsetWidth,e.classList.add("flash")},350),this.currentObjective=t)}say(t,e=3.2,n=null,i=!0){let r=this.el.sub;if(clearTimeout(this.subTimer),!t){r.classList.remove("show");return}r.innerHTML=(n?`<span class="who">${n}:</span>`:"")+`<span class="${n?"":i?"thought":""}">${t}</span>`,r.classList.add("show"),this.subTimer=setTimeout(()=>r.classList.remove("show"),e*1e3)}prompt(t,e=0,n=!1){let i=this.el.prompt;if(!t){i.classList.remove("show"),this.el.cross.classList.remove("active");return}i.classList.add("show"),this.el.cross.classList.add("active");let r=i.querySelector(".key"),a=He("use");r.firstChild.nodeValue!==a&&(r.firstChild.nodeValue=a,r.style.width=Math.max(28,a.length*9+12)+"px"),this.el.promptTxt.textContent!==t&&(this.el.promptTxt.textContent=t+(n?" (halten)":"")),this.el.promptCirc.style.strokeDashoffset=113*(1-e)}hint(t,e=5){let n=this.el.hint;if(clearTimeout(this.hintTimer),!t){n.classList.remove("show");return}n.innerHTML=t,n.classList.add("show"),this.hintTimer=setTimeout(()=>n.classList.remove("show"),e*1e3)}crosshair(t){this.el.cross.classList.toggle("hide",!t)}async card(t,e,n=3){let i=this.el.card;i.querySelector(".t1").textContent=t,i.querySelector(".t2").textContent=e,i.classList.add("show"),await Ks(n),i.classList.remove("show"),await Ks(1.2)}async narration(t,{perPara:e=3.6,onSkip:n}={}){let i=this.el.narr,r=this.el.narrBox;r.innerHTML=t.map(u=>`<p>${u}</p>`).join(""),i.classList.add("show");let a=[...r.querySelectorAll("p")],o=!1,l=()=>h.started?Ut.actHit("jump")||Ut.actHit("confirm"):!1,c=u=>{!h.started&&(u.code==="Space"||u.code==="Enter"||u.code==="Escape")&&(o=!0)};window.addEventListener("keydown",c);for(let u of a){if(o)break;u.classList.add("on");let f=0,d=e+u.textContent.length*.022;for(;f<d&&!o;)await Ks(.05),f+=.05,l()&&(o=!0)}o||await Ks(1.2),a.forEach(u=>u.classList.remove("on")),await Ks(1.3),window.removeEventListener("keydown",c),i.classList.remove("show"),o&&n&&n()}note(t){return this.el.paper.textContent=t,this.el.note.querySelector(".close").textContent=h.touchOn?"Irgendwo tippen zum Schlie\xDFen":`[${He("use")}] schlie\xDFen`,this.el.note.classList.add("show"),h.noteOpen=!0,new Promise(e=>{this._noteRes=e})}closeNote(){h.noteOpen&&(this.el.note.classList.remove("show"),h.noteOpen=!1,this._noteRes&&(this._noteRes(),this._noteRes=null))}clockShow(t){this.el.clock.classList.toggle("show",t)}setTime(t){h.phone.time=t,this.refreshStatus()}refreshStatus(){let t=h.phone,e=Math.max(0,Math.round(t.battery));this.el.ptm.textContent=t.time,this.el.pnet.textContent=t.network?"LTE":"Kein Netz",this.el.ppct.textContent=e+"%",this.el.pbatt.querySelector("i").style.width=Math.max(4,e)+"%",this.el.pbatt.classList.toggle("low",e<=10&&!t.charging),this.el.pbatt.classList.toggle("chg",t.charging),this.el.clock.querySelector(".tm").textContent=t.time,this.el.clock.querySelector(".bat").textContent=(t.charging?"\u26A1 ":"")+"Akku "+e+"%",this.el.pdead.classList.toggle("on",e<=0)}addMsg(t,e,n){h.chat.push({from:t,text:e,time:n||h.phone.time}),h.phoneOpen&&this.renderPhone()}notify(t,e){let n=this.el.notif;n.querySelector(".from").innerHTML=`${t} <span>jetzt</span>`,n.querySelector(".body").textContent=e,n.querySelector(".hint").innerHTML=h.touchOn?"Handy-Button antippen":`[${He("phone")}] Handy`,n.classList.add("show"),clearTimeout(this.notifTimer),this.notifTimer=setTimeout(()=>n.classList.remove("show"),4200)}hideNotif(){this.el.notif.classList.remove("show")}setReply(t){return new Promise(e=>{this.reply={options:t,res:e},h.phoneOpen&&this.renderPhone()})}chooseReply(t){if(!this.reply||!h.phoneOpen||this.phoneTab!=="chat")return!1;let e=this.reply.options[t];if(!e)return!1;let n=this.reply;return this.reply=null,this.addMsg("me",e),h.audio.send(),this.renderPhone(),n.res(t),!0}togglePhone(t){let e=t!==void 0?t:!h.phoneOpen;if(e&&h.phone.dropped){this.say("Mein Handy liegt irgendwo am Boden.",2.6);return}if(e&&h.flags.noPhone){this.say("Das Handy l\xE4dt noch auf der Werkbank.",2.6);return}e&&!h.flags.hasPhone||(h.phoneOpen=e,this.el.phone.classList.toggle("open",e),document.body.classList.toggle("phoneopen",e),e&&(this.hideNotif(),this.renderPhone(),h.unread=0))}renderPhone(){this.refreshStatus();let t=this.el.app;if(this.phoneTab==="map"&&h.phone.mapUnlocked){if(!this.mapCanvas){t.innerHTML='<div class="head"><div class="av" style="background:#2b6e3d">\u2316</div><div><div class="name">Karten</div><div class="sub">Stadtwald, Frankfurt</div></div></div>',this.mapCanvas=document.createElement("canvas"),this.mapCanvas.width=250,this.mapCanvas.height=400,t.appendChild(this.mapCanvas);let r=document.createElement("div");r.className="tabs",r.innerHTML=`<span>[${He("app")}] Chat</span><span class="on">Karte</span>`,t.appendChild(r)}this.drawMap();return}this.mapCanvas=null;let e=h.chat.slice(-9).map(r=>r.from==="day"?`<div class="day">${r.text}</div>`:`<div class="msg ${r.from==="me"?"me":"them"}">${r.text}</div>`).join(""),n='<div class="ph">Nachricht \u2026</div>';this.reply&&(n=this.reply.options.map((r,a)=>`<div class="opt">${h.touchOn?"":`<b>[${He(a?"reply2":"reply1")}]</b>`}${r}</div>`).join(""));let i=h.phone.mapUnlocked?`<div class="tabs"><span class="on">Chat</span><span>${h.touchOn?"":`[${He("app")}] `}Karte</span></div>`:"";t.innerHTML=`<div class="head"><div class="av">D</div><div><div class="name">Deniz</div><div class="sub">${h.phone.network?"online":"zuletzt online 02:12"}</div></div></div>
      <div class="chat">${e}</div><div class="reply">${n}</div>${i}`}drawMap(){let t=this.mapCanvas;if(!t)return;let e=t.getContext("2d"),n=t.width,i=t.height;e.fillStyle="#1d2a1e",e.fillRect(0,0,n,i);let r=h.player.p,a=1.6,o=d=>n/2+(d-r.x)*a,l=d=>i/2+(d-r.z)*a,c=h.mapData||{lines:[],labels:[]};for(let d of c.lines)e.strokeStyle=d.color,e.lineWidth=d.width,e.setLineDash(d.dash||[]),e.beginPath(),d.pts.forEach((p,m)=>m?e.lineTo(o(p[0]),l(p[1])):e.moveTo(o(p[0]),l(p[1]))),e.stroke();e.setLineDash([]),e.font="10px Arial",e.fillStyle="#cfd8c8";for(let d of c.labels)e.fillText(d.t,o(d.x),l(d.z));let u=h.player.forward(),f=Math.atan2(u.x,-u.z);e.save(),e.translate(n/2,i/2),e.rotate(f),e.fillStyle="rgba(70,140,255,.25)",e.beginPath(),e.moveTo(0,0),e.arc(0,0,34,-Math.PI/2-.5,-Math.PI/2+.5),e.fill(),e.restore(),e.fillStyle="#fff",e.beginPath(),e.arc(n/2,i/2,7,0,7),e.fill(),e.fillStyle="#3d8bff",e.beginPath(),e.arc(n/2,i/2,5,0,7),e.fill()}switchTab(){!h.phoneOpen||!h.phone.mapUnlocked||(this.phoneTab=this.phoneTab==="chat"?"map":"chat",this.mapCanvas=null,this.renderPhone())}menu(t){let e=this.el.menu;if(!t){e.classList.remove("show"),e.innerHTML="";return}e.innerHTML=t,e.classList.add("show")}death(t,e="ER HAT DICH.",n="Checkpoint wird geladen \u2026"){let i=this.el.death;t&&(i.querySelector(".t").textContent=e,i.querySelector(".s").textContent=n),i.classList.toggle("show",t)}hud(t){let e=h.player;if(!e)return;this._st||(this._st=document.getElementById("stamina"),this._sti=this._st.querySelector("i"),this._nz=document.getElementById("noise"),this._nzi=this._nz.querySelector("i"),this._nzm=this._nz.querySelector(".mic"),this._stv=0);let n=h.started&&!h.paused&&(e.stamina<.995||e.sprinting);this._stv=n?Math.min(1,this._stv+t*4):Math.max(0,this._stv-t*1.2),this._st.style.opacity=this._stv.toFixed(2),this._sti.style.width=(e.stamina*100).toFixed(1)+"%",this._st.classList.toggle("ex",e.exhausted>0);let i=h.noise,r=h.started&&!h.paused&&i&&(i.listening||h.mic&&h.mic.on);if(this._nz.classList.toggle("show",!!r),r){let a=Math.min(1,Math.max(i.level||0,h.mic&&h.mic.on?h.mic.level:0));this._nzi.style.width=(a*100).toFixed(0)+"%",this._nz.classList.toggle("loud",a>.6),this._nzm.style.display=h.mic&&h.mic.on?"inline":"none"}}};function lc(){let s=innerWidth,t=innerHeight,e=t>s,n=Math.min(1,Math.max(.4,(t-26)/552)),i=e?(s-276*n)/2:h.touchOn?104:s*.06,r=s-i-276*n,a=document.documentElement.style;a.setProperty("--phz",n.toFixed(3)),a.setProperty("--phr",(i/n).toFixed(1)+"px"),a.setProperty("--phl",Math.max(0,r).toFixed(0)+"px"),a.setProperty("--rpr",Math.round(i+276*n+14)+"px")}var On=Ce(1234),Pe=(s,t)=>s+On()*(t-s),cc=class{constructor(){this.ready=!1,this.loops={},this.env="forest"}init(){if(this.ready)return;let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=h.settings.volume;let e=t.createDynamicsCompressor();e.threshold.value=-16,e.knee.value=12,e.ratio.value=5,e.attack.value=.004,e.release.value=.25,this.master.connect(e),e.connect(t.destination),this.white=this.makeNoiseBuffer("white",4),this.pink=this.makeNoiseBuffer("pink",6),this.brown=this.makeNoiseBuffer("brown",6),this.revForest=t.createConvolver(),this.revForest.buffer=this.makeIR(3.2,2.2,.35),this.revRoom=t.createConvolver(),this.revRoom.buffer=this.makeIR(.9,3.5,.6),this.revForestIn=t.createGain(),this.revRoomIn=t.createGain(),this.revForestIn.connect(this.revForest),this.revRoomIn.connect(this.revRoom);let n=t.createGain();n.gain.value=.8,this.revForest.connect(n),n.connect(this.master);let i=t.createGain();i.gain.value=.7,this.revRoom.connect(i),i.connect(this.master),this.sfx=t.createGain(),this.sfx.connect(this.master),this.amb=t.createGain(),this.amb.connect(this.master),this.ready=!0,this.renderScream()}setVolume(t){this.master&&this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}get now(){return this.ctx.currentTime}makeNoiseBuffer(t,e){let n=this.ctx,i=n.sampleRate*e,r=n.createBuffer(1,i,n.sampleRate),a=r.getChannelData(0),o=0,l=0,c=0,u=0,f=0,d=0,p=0,m=0;for(let x=0;x<i;x++){let g=Math.random()*2-1;t==="white"?a[x]=g:t==="pink"?(o=.99886*o+g*.0555179,l=.99332*l+g*.0750759,c=.969*c+g*.153852,u=.8665*u+g*.3104856,f=.55*f+g*.5329522,d=-.7616*d-g*.016898,a[x]=(o+l+c+u+f+d+p+g*.5362)*.11,p=g*.115926):(m=(m+.02*g)/1.02,a[x]=m*3.5)}return r}makeIR(t,e,n){let i=this.ctx,r=i.sampleRate*t,a=i.createBuffer(2,r,i.sampleRate);for(let o=0;o<2;o++){let l=a.getChannelData(o);for(let c=0;c<r;c++){let u=c/r;l[c]=(Math.random()*2-1)*Math.pow(1-u,e)*(c<200?c/200:1)*n}}return a}panner(t,e=2,n=1.2){let i=this.ctx.createPanner();return i.panningModel="HRTF",i.distanceModel="inverse",i.refDistance=e,i.rolloffFactor=n,i.maxDistance=300,this.setPos(i,t),i}setPos(t,e){t.positionX?(t.positionX.value=e.x,t.positionY.value=e.y,t.positionZ.value=e.z):t.setPosition(e.x,e.y,e.z)}out(t,{pos:e=null,ref:n=2,roll:i=1.2,rev:r=.3,bus:a=null}={}){let o=t;if(e){let l=this.panner(e,n,i);o.connect(l),o=l}if(o.connect(a||this.sfx),r>0){let l=this.ctx.createGain();l.gain.value=r,o.connect(l),l.connect(this.env==="room"||this.env==="cellar"?this.revRoomIn:this.revForestIn)}return o}noiseSrc(t=this.white,e=!1,n=1){let i=this.ctx.createBufferSource();return i.buffer=t,i.loop=e,i.playbackRate.value=n,i}filter(t,e,n=1,i=0){let r=this.ctx.createBiquadFilter();return r.type=t,r.frequency.value=e,r.Q.value=n,r.gain.value=i,r}gain(t=1){let e=this.ctx.createGain();return e.gain.value=t,e}osc(t,e){let n=this.ctx.createOscillator();return n.type=t,n.frequency.value=e,n}envl(t,e,n,i,r,a=0){t.cancelScheduledValues(e),t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(i,e+n),t.exponentialRampToValueAtTime(Math.max(1e-4,a||1e-4),e+n+r)}burst({buf:t,type:e="bandpass",f:n=1e3,q:i=1,a:r=.002,d:a=.1,peak:o=.5,t:l=0,pos:c,rev:u=.2,ref:f=2,rate:d=1,bus:p}){if(!this.ready||this.mute1)return;let m=this.now+l,x=this.noiseSrc(t||this.white,!1,d),g=this.filter(e,n,i),y=this.gain(0);x.connect(g),g.connect(y),this.envl(y.gain,m,r,o,a),this.out(y,{pos:c,rev:u,ref:f,bus:p}),x.start(m,On()*2),x.stop(m+r+a+.05)}tone({type:t="sine",f:e=440,f2:n,a:i=.005,d:r=.2,peak:a=.3,t:o=0,pos:l,rev:c=.2,ref:u=2,lp:f}){if(!this.ready||this.mute1)return;let d=this.now+o,p=this.osc(t,e);n&&p.frequency.exponentialRampToValueAtTime(n,d+i+r);let m=this.gain(0),x=p;if(f){let g=this.filter("lowpass",f,.7);p.connect(g),x=g}x.connect(m),this.envl(m.gain,d,i,a,r),this.out(m,{pos:l,rev:c,ref:u}),p.start(d),p.stop(d+i+r+.05)}updateListener(t){if(!this.ready)return;let e=this.ctx.listener,n=t.position,i=t.getWorldDirection(this._v||(this._v=t.position.clone())),r=this.now;e.positionX?(e.positionX.setTargetAtTime(n.x,r,.015),e.positionY.setTargetAtTime(n.y,r,.015),e.positionZ.setTargetAtTime(n.z,r,.015),e.forwardX.setTargetAtTime(i.x,r,.015),e.forwardY.setTargetAtTime(i.y,r,.015),e.forwardZ.setTargetAtTime(i.z,r,.015),e.upX.value=0,e.upY.value=1,e.upZ.value=0):(e.setPosition(n.x,n.y,n.z),e.setOrientation(i.x,i.y,i.z,0,1,0))}footstep(t,e=1,n=null,i="walk"){if(!this.ready||this.mute1)return;let r=e*(n?1.4:.55),a=i==="crouch"||i==="crawl",o=a?.06:i==="sprint"?.025:.045,l=a?1.5:i==="sprint"?.75:1,u=["woodfloor","stairs","tile","carpet","concrete","metal","wood"].includes(t)?.28:.12,f={pos:n,rev:u,ref:2},d=(p,m,x)=>this.tone({...f,f:p,f2:p*.7,d:m*l,peak:x*r,lp:300});switch(t){case"leaves":for(let p=0;p<9;p++)this.burst({...f,f:Pe(1800,5200),q:1.4,d:Pe(.008,.02),peak:.28*r*(.4+On()),t:On()*.13*l});this.burst({...f,f:Pe(700,1100),q:.9,d:Pe(.1,.18)*l,peak:.2*r,t:.01}),this.burst({...f,buf:this.pink,f:Pe(2500,3500),q:.6,d:.12*l,peak:.12*r,t:o}),d(70,.07,.24);break;case"gravel":for(let p=0;p<10;p++)this.burst({...f,f:Pe(1300,3800),q:1.6,d:Pe(.012,.025),peak:.27*r*(.4+On()),t:On()*.08+(p>5?o:0)});this.burst({...f,f:900,q:.8,d:.14*l,peak:.14*r}),d(75,.06,.2);break;case"asphalt":case"sidewalk":this.burst({...f,type:"highpass",f:2600,q:.7,d:.022,peak:.24*r}),this.burst({...f,f:1200,q:1,d:.07*l,peak:.11*r,t:o}),this.burst({...f,f:Pe(3500,5e3),q:2,d:.03,peak:.05*r,t:o+.02}),d(95,.05,.27);break;case"wood":case"woodfloor":case"stairs":{let p=t==="stairs"?Pe(80,100):Pe(95,125);d(p,.14,t==="stairs"?.5:.4),this.burst({...f,f:Pe(200,300),q:5,d:.16*l,peak:(t==="stairs"?.32:.25)*r}),this.burst({...f,type:"highpass",f:2e3,q:.7,d:.02,peak:.07*r,t:o}),t==="stairs"&&this.tone({...f,f:Pe(160,190),d:.25,peak:.08*r,lp:600,t:.01}),On()<(t==="stairs"?.25:.12)&&this.creak(n,.22*e);break}case"tile":this.burst({...f,type:"highpass",f:3200,q:.8,d:.018,peak:.3*r}),this.tone({...f,f:Pe(900,1300),d:.05,peak:.04*r}),d(110,.05,.24),this.burst({...f,type:"highpass",f:2500,d:.015,peak:.12*r,t:o});break;case"carpet":this.burst({...f,buf:this.pink,f:Pe(600,900),q:.6,d:.12*l,peak:.12*r}),d(65,.06,.18);break;case"concrete":this.burst({...f,type:"highpass",f:2800,q:.7,d:.03,peak:.28*r}),d(85,.06,.25),this.burst({...f,f:1600,q:1.5,d:.06,peak:.08*r,t:o});break;case"metal":this.burst({...f,f:Pe(1600,2200),q:9,d:.2,peak:.25*r}),this.burst({...f,f:800,q:6,d:.25,peak:.18*r}),d(110,.08,.25);break;case"water":this.burst({...f,buf:this.pink,f:Pe(700,1100),q:.7,d:.3,peak:.3*r}),this.burst({...f,f:Pe(2500,3500),q:1,d:.15,peak:.12*r,t:.04});break;case"sand":case"mulch":this.burst({...f,f:Pe(1200,2200),q:.6,d:.14*l,peak:.18*r}),d(70,.06,.16);break;case"crawl":this.burst({...f,f:Pe(900,1500),q:.8,d:.25,peak:.2*r}),this.tone({...f,f:140,d:.05,peak:.15*r});break;default:this.burst({...f,f:1500,q:.8,d:.1,peak:.2*r})}i==="sprint"&&!n&&On()<.7&&this.burst({buf:this.pink,f:Pe(1500,2600),q:.5,d:.09,peak:.05,rev:0,t:.03})}branchSnap(t){this.burst({pos:t,type:"highpass",f:2600,d:.012,peak:.6,rev:.6,ref:4}),this.burst({pos:t,f:1400,q:3,d:.04,peak:.35,t:.01,rev:.6,ref:4}),this.burst({pos:t,type:"highpass",f:3500,d:.008,peak:.3,t:.07,rev:.6,ref:4})}rustle(t,e=6){for(let n=0;n<e;n++)this.burst({pos:t.clone?t.clone().add({x:n*.6,y:0,z:0}):t,buf:this.pink,f:Pe(1800,3200),q:.6,d:.15,peak:.2,t:n*.22,rev:.5,ref:4})}knock(t){for(let e=0;e<3;e++)this.tone({pos:t,f:140,f2:90,d:.08,peak:.45,lp:500,t:e*.42,rev:.9,ref:6}),this.burst({pos:t,f:700,q:3,d:.05,peak:.25,t:e*.42,rev:.9,ref:6})}creak(t,e=1,n=Pe(.5,1.1)){if(!this.ready||this.mute1)return;let i=this.now,r=this.osc("sawtooth",Pe(70,110));r.frequency.linearRampToValueAtTime(Pe(120,180),i+n);let a=this.filter("bandpass",Pe(500,900),9);a.frequency.linearRampToValueAtTime(Pe(1100,1600),i+n);let o=this.gain(0),l=this.osc("square",Pe(18,35)),c=this.gain(.5);l.connect(c),c.connect(o.gain);let u=this.gain(0);r.connect(a),a.connect(o),o.connect(u),u.gain.setValueAtTime(1e-4,i),u.gain.linearRampToValueAtTime(.35*e,i+.08),u.gain.linearRampToValueAtTime(.25*e,i+n*.7),u.gain.linearRampToValueAtTime(1e-4,i+n),this.out(u,{pos:t,rev:.3}),r.start(i),l.start(i),r.stop(i+n+.05),l.stop(i+n+.05)}doorCreak(t){this.creak(t,1.1,1.4),this.burst({pos:t,f:300,q:2,d:.2,peak:.2})}doorOpen(t){this.burst({pos:t,type:"highpass",f:2e3,d:.04,peak:.3}),this.tone({pos:t,f:1800,d:.05,peak:.08})}slam(t,e=1){this.tone({pos:t,f:60,f2:40,d:.5,peak:.9*e,lp:300,rev:.5}),this.burst({pos:t,f:400,q:1,d:.3,peak:.6*e,rev:.5}),this.burst({pos:t,type:"highpass",f:2500,d:.05,peak:.3*e})}bolt(t){this.burst({pos:t,f:3200,q:4,d:.05,peak:.4}),this.burst({pos:t,f:1800,q:6,d:.18,peak:.25,t:.12}),this.tone({pos:t,f:2400,d:.3,peak:.06,t:.12}),this.burst({pos:t,f:4200,q:3,d:.03,peak:.35,t:.32})}drag(t,e=1.6){if(!this.ready||this.mute1)return;let n=this.now,i=this.noiseSrc(this.brown,!0),r=this.filter("lowpass",500,.8),a=this.gain(.5),o=this.osc("sawtooth",9),l=this.gain(.4);o.connect(l),l.connect(a.gain);let c=this.gain(0);i.connect(r),r.connect(a),a.connect(c),c.gain.linearRampToValueAtTime(.9,n+.1),c.gain.setValueAtTime(.9,n+e-.2),c.gain.linearRampToValueAtTime(1e-4,n+e),this.out(c,{pos:t,rev:.4}),i.start(n),o.start(n),i.stop(n+e),o.stop(n+e)}thud(t,e=1){this.tone({pos:t,f:55,f2:35,d:.35,peak:.8*e,lp:200,rev:.4}),this.burst({pos:t,type:"lowpass",f:300,d:.25,peak:.5*e,rev:.3})}pickup(){this.burst({f:2500,q:1,d:.06,peak:.12}),this.burst({f:900,q:1,d:.12,peak:.1,t:.03})}click(){this.burst({type:"highpass",f:3e3,d:.015,peak:.25,rev:.05})}switchClick(t){this.burst({pos:t,type:"highpass",f:2e3,d:.02,peak:.5}),this.tone({pos:t,f:900,d:.04,peak:.1})}keys(t){for(let e=0;e<5;e++)this.burst({pos:t,f:Pe(3500,6e3),q:8,d:.08,peak:.12,t:e*.05+On()*.03})}zip(){for(let t=0;t<18;t++)this.burst({f:3e3+t*80,q:3,d:.01,peak:.08,t:t*.018})}metalClang(t,e=1){for(let n of[520,1310,2270,3400])this.tone({pos:t,f:n,d:Pe(.4,.9),peak:.12*e,rev:.5});this.burst({pos:t,type:"highpass",f:1500,d:.08,peak:.5*e})}screw(t){for(let e=0;e<4;e++)this.burst({pos:t,f:2600,q:5,d:.04,peak:.12,t:e*.09})}fenceRattle(t,e=1){for(let n=0;n<12;n++)this.burst({pos:t,f:Pe(1800,4200),q:6,d:.06,peak:.25*e,t:n*.04+On()*.03,rev:.4})}padlock(t){this.keys(t),this.burst({pos:t,f:2400,q:6,d:.12,peak:.3,t:.4}),this.burst({pos:t,type:"highpass",f:3e3,d:.03,peak:.4,t:.7})}splash(t){this.burst({pos:t,f:1200,q:.6,d:.35,peak:.4}),this.burst({pos:t,f:400,q:1,d:.3,peak:.3})}bodyFall(){this.thud(null,1),this.burst({f:1600,q:.6,d:.35,peak:.4});for(let t=0;t<8;t++)this.burst({type:"highpass",f:3500,d:.008,peak:.3*On(),t:On()*.25})}phoneDrop(t){this.burst({pos:t,type:"highpass",f:2500,d:.03,peak:.4}),this.burst({pos:t,f:1800,q:1,d:.2,peak:.25,t:.03})}vibrate(t=null){if(!this.ready||this.mute1)return;let e=this.now;for(let n=0;n<2;n++){let i=e+n*.42,r=this.osc("square",165),a=this.filter("lowpass",t?700:450,1),o=this.gain(0);r.connect(a),a.connect(o),o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(t?.35:.22,i+.02),o.gain.setValueAtTime(t?.35:.22,i+.26),o.gain.linearRampToValueAtTime(1e-4,i+.3),this.out(o,{pos:t,rev:.05,ref:1}),r.start(i),r.stop(i+.32)}}ding(){this.tone({f:1318,d:.25,peak:.08,rev:.05}),this.tone({f:1975,d:.4,peak:.06,t:.09,rev:.05})}send(){this.tone({f:880,f2:1500,d:.12,peak:.06,rev:0})}owl(t){let e=(n,i,r)=>this.tone({pos:t,f:r,f2:r*.94,a:.05,d:i,peak:.18,t:n,rev:.8,ref:6,lp:900});e(0,.5,420),e(.9,.18,400),e(1.25,.9,410)}crow(t){for(let e=0;e<2;e++)this.burst({pos:t,f:1100,q:4,d:.22,peak:.12,t:e*.35,rev:.7,ref:6})}heavyStep(t,e=1){this.tone({pos:t,f:70,d:.15,peak:.6*e,lp:180,rev:.4}),this.burst({pos:t,type:"lowpass",f:400,d:.12,peak:.3*e,rev:.3}),On()<.35&&this.creak(t,.5*e,.6)}floodlight(t){this.burst({pos:t,type:"highpass",f:1500,d:.03,peak:.8}),this.tone({pos:t,f:100,d:1.2,peak:.08,lp:400})}sting(t="hard"){if(!this.ready||this.mute1)return;let e=this.now;if(t==="hard"){let n=[116.5,123.5,174.6,185,246.9,261.6,349.2,370];for(let i of n){let r=this.osc("sawtooth",i*Pe(.995,1.005));r.frequency.linearRampToValueAtTime(i*.97,e+2);let a=this.filter("lowpass",3e3,1);a.frequency.exponentialRampToValueAtTime(400,e+2.2);let o=this.gain(0);r.connect(a),a.connect(o),o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(.11,e+.015),o.gain.exponentialRampToValueAtTime(1e-4,e+2.4),this.out(o,{rev:.6}),r.start(e),r.stop(e+2.5)}this.burst({type:"highpass",f:1500,d:.6,peak:.6,rev:.6}),this.tone({f:48,f2:28,d:1.6,peak:1,lp:200,rev:.4})}else if(t==="soft"){let n=this.noiseSrc(this.pink,!1),i=this.filter("bandpass",400,2);i.frequency.exponentialRampToValueAtTime(2400,e+1.6);let r=this.gain(0);n.connect(i),i.connect(r),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.5,e+1.4),r.gain.linearRampToValueAtTime(1e-4,e+1.7),this.out(r,{rev:.7}),n.start(e),n.stop(e+1.8),this.tone({f:55,d:2.5,a:.8,peak:.4,lp:200,rev:.4}),this.tone({f:58.3,d:2.5,a:.8,peak:.3,lp:200,rev:.4})}else if(t==="reveal"){for(let n of[220,233,311])this.tone({type:"triangle",f:n,a:1.2,d:3.5,peak:.07,rev:.8});this.tone({f:41,a:1,d:4,peak:.5,lp:150,rev:.3})}}async renderScream(){let n=new OfflineAudioContext(1,Math.floor(145530),44100),i=n.createBuffer(1,44100*3.3,44100),r=i.getChannelData(0);for(let et=0;et<r.length;et++)r[et]=Math.random()*2-1;let a=n.createOscillator();a.type="sawtooth";let o=a.frequency,l=[[0,560],[.12,700],[.3,770],[.45,700],[.72,640],[.95,700],[1.15,880],[1.35,950],[1.75,1040],[2.2,1e3],[2.6,930],[3,760]];o.setValueAtTime(l[0][1],0);for(let[et,J]of l.slice(1))o.linearRampToValueAtTime(J,et);let c=n.createOscillator();c.frequency.value=5.6;let u=n.createGain();u.gain.value=0,u.gain.linearRampToValueAtTime(10,1.2),u.gain.linearRampToValueAtTime(34,2.2),c.connect(u),u.connect(o);let f=n.createBufferSource();f.buffer=i;let d=n.createBiquadFilter();d.type="lowpass",d.frequency.value=25;let p=n.createGain();p.gain.value=60,f.connect(d),d.connect(p),p.connect(o);let m=n.createGain();m.gain.value=0;let x=m.gain,g=[[.04,0],[.08,.85],[.28,.8],[.33,.02],[.43,.02],[.47,.9],[.68,.65],[.74,0],[.98,0],[1.03,1],[1.27,.95],[1.3,.05],[1.37,.05],[1.42,1],[2.4,.9],[2.9,.4],[3.15,0]];for(let[et,J]of g)x.linearRampToValueAtTime(J,et);let y=n.createBufferSource();y.buffer=i;let b=n.createGain();b.gain.value=.12,y.connect(b);let w=n.createGain();a.connect(w),b.connect(w),w.connect(m);let S=[[0,[820,2400,3100]],[.4,[860,2050,2900]],[.95,[840,2450,3100]],[1.38,[880,2100,2950]],[1.9,[1e3,1750,2900]],[3,[950,1650,2800]]],v=[1,.55,.3],E=n.createGain();for(let et=0;et<3;et++){let J=n.createBiquadFilter();J.type="bandpass",J.Q.value=[6,9,10][et],J.frequency.setValueAtTime(S[0][1][et],0);for(let[ft,Dt]of S.slice(1))J.frequency.linearRampToValueAtTime(Dt[et],ft);let st=n.createGain();st.gain.value=v[et]*3,m.connect(J),J.connect(st),st.connect(E)}let _=n.createBiquadFilter();_.type="lowpass",_.frequency.value=1300;let M=n.createGain();M.gain.value=.25,m.connect(_),_.connect(M),M.connect(E);let I=n.createBufferSource();I.buffer=i;let P=n.createBiquadFilter();P.type="highpass",P.frequency.value=1700;let O=n.createGain();O.gain.value=0;let k=[[0,0],[.02,.15],[.06,0],[.31,0],[.34,.5],[.44,.4],[.47,0],[.94,0],[.97,.2],[1.02,0],[1.29,0],[1.31,.55],[1.4,.45],[1.43,0]];for(let[et,J]of k)O.gain.linearRampToValueAtTime(J,et);I.connect(P),P.connect(O),O.connect(E);let H=n.createWaveShaper(),N=new Float32Array(1024);for(let et=0;et<1024;et++){let J=et/512-1;N[et]=Math.tanh(J*2.2)}H.curve=N,E.connect(H),H.connect(n.destination),a.start(0),c.start(0),f.start(0),y.start(0,1),I.start(0,2);let X=await n.startRendering(),Z=X.getChannelData(0),$=0;for(let et=0;et<Z.length;et++)$=Math.max($,Math.abs(Z[et]));for(let et=0;et<Z.length;et++)Z[et]/=$||1;this.screamBuf=X;for(let[et,J,st,ft]of this._pendingScream||[])this.now-ft<2&&this.scream(et,J,st);this._pendingScream=null}scream(t,e="distant",n=1){if(!this.ready||this.mute1)return;if(!this.screamBuf){(this._pendingScream=this._pendingScream||[]).push([t,e,n,this.now]);return}let i=this.now,r=this.ctx.createBufferSource();if(r.buffer=this.screamBuf,e==="distant"){let a=this.filter("lowpass",2600,.7),o=this.filter("highpass",250,.7),l=this.gain(.9*n);r.connect(o),o.connect(a),a.connect(l),this.out(l,{pos:t,ref:14,roll:1,rev:1.4})}else{let a=this.filter("highpass",380,.8),o=this.filter("peaking",2400,1,7),l=this.ctx.createWaveShaper(),c=new Float32Array(512);for(let f=0;f<512;f++){let d=f/256-1;c[f]=Math.tanh(d*4)*.9}l.curve=c;let u=this.gain(1.5*n);r.connect(a),a.connect(o),o.connect(l),l.connect(u),this.out(u,{pos:t,ref:1.5,rev:.6})}r.start(i)}loop(t,e,n=1){if(!this.ready)return null;if(this.loops[t])return this.loops[t];let i=this.gain(0),r=e(i);i.gain.setTargetAtTime(n,this.now,.5);let a={g:i,nodes:r,level:n,set:(o,l=.8)=>{a.level=o,i.gain.setTargetAtTime(o,this.now,l)}};return this.loops[t]=a,a}stopLoop(t,e=.5){let n=this.loops[t];n&&(n.g.gain.setTargetAtTime(0,this.now,e/3),setTimeout(()=>{for(let i of n.nodes||[])try{i.stop()}catch{}try{n.g.disconnect()}catch{}},e*1e3+300),delete this.loops[t])}setLoop(t,e,n){let i=this.loops[t];i&&i.set(e,n)}startAmbience(){this.loop("wind",t=>{let e=this.noiseSrc(this.brown,!0),n=this.filter("lowpass",380,.5),i=this.osc("sine",.07),r=this.gain(150);i.connect(r),r.connect(n.frequency);let a=this.gain(.6),o=this.osc("sine",.11),l=this.gain(.35);o.connect(l),l.connect(a.gain),e.connect(n),n.connect(a),a.connect(t),t.connect(this.amb);let c=this.noiseSrc(this.pink,!0),u=this.filter("bandpass",3200,.6),f=this.gain(0),d=this.osc("sine",.09),p=this.gain(.06);return d.connect(p),p.connect(f.gain),c.connect(u),u.connect(f),f.connect(t),e.start(),i.start(),o.start(),c.start(),d.start(),[e,i,o,c,d]},0),this.loop("drone",t=>{let e=this.osc("sine",46.2),n=this.osc("sine",49.1),i=this.osc("triangle",92.5),r=this.gain(.15),a=this.filter("lowpass",220,.5);e.connect(a),n.connect(a),i.connect(r),r.connect(a);let o=this.osc("sine",.05),l=this.gain(.3);o.connect(l);let c=this.gain(.5);return l.connect(c.gain),a.connect(c),c.connect(t),t.connect(this.amb),[e,n,i,o].forEach(u=>u.start()),[e,n,i,o]},0)}traffic(t){t?this.loop("traffic",e=>{let n=this.noiseSrc(this.brown,!0),i=this.filter("lowpass",160,.5);return n.connect(i),i.connect(e),e.connect(this.amb),n.start(),[n]},.25):this.stopLoop("traffic",2)}hum(t,e,n=1,i=!1){return this.loop(t,r=>{let a=this.osc("sawtooth",50),o=this.osc("sine",100),l=this.osc("square",150),c=this.osc("sine",1870),u=this.filter("lowpass",420,.7);a.connect(u);let f=this.gain(.32),d=this.gain(.35),p=this.gain(.05),m=this.gain(.012);u.connect(f),o.connect(d);let x=this.filter("lowpass",700,.7);l.connect(x),x.connect(p),c.connect(m);let g=this.osc("sine",.3),y=this.gain(6);g.connect(y),y.connect(c.frequency);let b=this.noiseSrc(this.pink,!0),w=this.filter("bandpass",650,.7),S=this.gain(.5),v=this.osc("sine",23),E=this.gain(.28);v.connect(E),E.connect(S.gain),b.connect(w),w.connect(S);let _=this.osc("sine",98),M=this.osc("sine",101.5),I=this.gain(.22);_.connect(I),M.connect(I);let P=this.osc("square",120),O=this.filter("bandpass",360,3),k=this.gain(0),H=this.osc("sine",31),N=this.gain(.09);H.connect(N),N.connect(k.gain);let X=this.osc("sine",.43),Z=this.gain(9);X.connect(Z),Z.connect(H.frequency),P.connect(O),O.connect(k);let $=this.gain(1);[f,d,p,m,S,I,k].forEach(Dt=>Dt.connect($)),this._humExtra=[_,M,P,H,X];let et=$;if(i){let Dt=this.filter("lowpass",500,.7);$.connect(Dt),et=Dt}et.connect(r);let J=this.panner(e,i?2.5:1.6,1.3);r.connect(J),J.connect(this.amb);let st=this.gain(.25);J.connect(st),st.connect(this.revRoomIn);let ft=[a,o,l,c,g,b,v,...this._humExtra];return ft.forEach(Dt=>Dt.start()),this.loops[t+"_osc"]={oscs:[a,o,l,c,this._humExtra[0],this._humExtra[1],this._humExtra[2]],noise:b},ft},n)}humWindDown(t,e=3.5){let n=this.loops[t+"_osc"],i=this.loops[t];if(!n||!i)return;let r=this.now;for(let a of n.oscs)a.frequency.exponentialRampToValueAtTime(Math.max(5,a.frequency.value*.12),r+e);n.noise.playbackRate.exponentialRampToValueAtTime(.1,r+e),i.g.gain.setTargetAtTime(0,r+e*.4,e*.3),setTimeout(()=>this.stopLoop(t,.2),e*1e3+600),delete this.loops[t+"_osc"]}tubeBuzz(t){return this.loop("tube",e=>{let n=this.osc("sawtooth",100),i=this.osc("square",200),r=this.filter("bandpass",2400,2),a=this.filter("lowpass",500,.7),o=this.gain(.05),l=this.gain(.025);n.connect(a),a.connect(o),i.connect(r),r.connect(l),o.connect(e),l.connect(e);let c=this.panner(t,1.2,1.5);return e.connect(c),c.connect(this.amb),n.start(),i.start(),[n,i]},1)}stream(t){return this.loop("stream",e=>{let n=this.noiseSrc(this.pink,!0),i=this.filter("bandpass",900,.8),r=this.osc("sine",3.3),a=this.gain(500);r.connect(a),a.connect(i.frequency);let o=this.noiseSrc(this.white,!0,.7),l=this.filter("bandpass",2600,3),c=this.gain(0),u=this.osc("square",7.1),f=this.gain(.15);u.connect(f),f.connect(c.gain),n.connect(i),i.connect(e),o.connect(l),l.connect(c),c.connect(e);let d=this.panner(t,3,1.3);return e.connect(d),d.connect(this.amb),[n,r,o,u].forEach(p=>p.start()),[n,r,o,u]},.6)}snore(t){return this.loop("snore",e=>{let n=this.noiseSrc(this.brown,!0),i=this.filter("bandpass",180,2),r=this.osc("sawtooth",62),a=this.gain(0),o=this.filter("lowpass",300,1);r.connect(o),o.connect(a);let l=this.gain(0),c=this.osc("sine",.22),u=this.gain(.6);c.connect(u),u.connect(l.gain),u.connect(a.gain),n.connect(i),i.connect(l),l.connect(e),a.connect(e);let f=this.panner(t,1.5,1.5);return e.connect(f),f.connect(this.amb),[n,r,c].forEach(d=>d.start()),[n,r,c]},.7)}heartbeat(t,e=1.2){if(!this.ready||(clearInterval(this._hb),!t))return;let n=()=>{this.tone({f:58,f2:40,d:.14,peak:.55,lp:160,rev:.05}),this.tone({f:52,f2:38,d:.16,peak:.4,lp:160,t:.22,rev:.05})};n(),this._hb=setInterval(()=>{h.paused||n()},1e3/e)}breath(t=1){this.burst({f:1100,q:.7,a:.12,d:.35,peak:.08*t,rev:.05,buf:this.pink}),this.burst({f:800,q:.7,a:.08,d:.3,peak:.06*t,t:.5,rev:.05,buf:this.pink})}branchFall(t,e){for(let n=0;n<9;n++)this.burst({pos:t,type:"highpass",f:2200,d:.012,peak:.9*(1-n/12),t:n*n*.006,rev:.6,ref:4});this.creak(t,1,.5),this.burst({pos:t,f:1800,q:.5,d:.6,peak:.5,t:.25,ref:4}),this.tone({pos:e,f:55,f2:32,d:.5,peak:1.2,lp:200,rev:.5,t:.55,ref:3}),this.burst({pos:e,type:"lowpass",f:400,d:.35,peak:.8,t:.55,rev:.4,ref:3}),this.burst({pos:e,f:1500,q:.6,d:.6,peak:.8,t:.56,rev:.6,ref:3});for(let n=0;n<10;n++)this.burst({pos:e,type:"highpass",f:3e3,d:.01,peak:.4*On(),t:.56+On()*.4,ref:3})}};function _s(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Ue;l.morphTargetsRelative=o;let c=0;for(let u=0;u<s.length;++u){let f=s[u],d=0,p=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==s[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(f.morphAttributes[m]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let m;if(e)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(e){let u=0,f=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let m=0;m<p.count;++m)f.push(p.getX(m)+u);u+=s[d].attributes.position.count}l.setIndex(f)}for(let u in r){let f=ip(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){let p=[];for(let x=0;x<a[u].length;++x)p.push(a[u][x][d]);let m=ip(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function ip(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new tn(a,e,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let f=l/e;for(let d=0,p=u.count;d<p;d++)for(let m=0;m<e;m++){let x=u.getComponent(d,m);o.setComponent(d+f,m,x)}}else a.set(u.array,l);l+=u.count*e}return i!==void 0&&(o.gpuType=i),o}var Hr={},eu=new Map;function fc(s,t=2.5){if(!s||!s.image||!s.image.getContext)return null;let e=s.uuid+"|"+t;if(eu.has(e))return eu.get(e);let n=s.image,i=n.width,r=n.height,a=n.getContext("2d").getImageData(0,0,i,r).data,o=new Float32Array(i*r);for(let m=0;m<i*r;m++)o[m]=(a[m*4]*.3+a[m*4+1]*.59+a[m*4+2]*.11)/255;let l=document.createElement("canvas");l.width=i,l.height=r;let c=l.getContext("2d"),u=c.createImageData(i,r),f=u.data,d=(m,x)=>o[(x+r)%r*i+(m+i)%i];for(let m=0;m<r;m++)for(let x=0;x<i;x++){let g=d(x+1,m-1)+2*d(x+1,m)+d(x+1,m+1)-(d(x-1,m-1)+2*d(x-1,m)+d(x-1,m+1)),y=d(x-1,m+1)+2*d(x,m+1)+d(x+1,m+1)-(d(x-1,m-1)+2*d(x,m-1)+d(x+1,m-1)),b=-g*t,w=-y*t,S=1,v=Math.hypot(b,w,S);b/=v,w/=v,S/=v;let E=(m*i+x)*4;f[E]=(b*.5+.5)*255,f[E+1]=(w*.5+.5)*255,f[E+2]=(S*.5+.5)*255,f[E+3]=255}c.putImageData(u,0,0);let p=new en(l);return p.wrapS=s.wrapS,p.wrapT=s.wrapT,p.repeat.copy(s.repeat),p.anisotropy=4,p.colorSpace=fi,eu.set(e,p),p}function nn(s,t,e=2.5){if(Hr[s])return Hr[s];let{roughness:n=.88,metalness:i=0,...r}=t,o=h.settings.quality==="low"?new xe({...r}):new Us({roughness:n,metalness:i,...r});return r.map&&e>0&&(o.normalMap=fc(r.map,e),o.normalScale=new Kt(1,1)),o.name=s,Hr[s]=o}function tt(s,t){if(Hr[s])return Hr[s];let e=new xe(t);return e.name=s,Hr[s]=e}function cp(){let s={leaves:tt("leaves",{map:ec()}),gravel:nn("gravel",{map:wf(),roughness:.9},3),barkOak:nn("barkOak",{map:ns("oak"),roughness:.92},4),barkBeech:nn("barkBeech",{map:ns("beech"),roughness:.8},2.5),barkPine:nn("barkPine",{map:ns("pine"),roughness:.9},4),planksOld:nn("planksOld",{map:vs("old"),roughness:.85},2),planksTower:nn("planksTower",{map:vs("tower"),roughness:.85},2),floor:nn("floor",{map:vs("floor"),roughness:.55},1.5),concrete:nn("concrete",{map:nc(),roughness:.9},2),brick:nn("brick",{map:Ef(),roughness:.88},3),asphalt:nn("asphalt",{map:Tf(),roughness:.62},2),sidewalk:nn("sidewalk",{map:Af(),roughness:.75},2),mulch:tt("mulch",{map:ic()}),sand:tt("sand",{map:Rf()}),wallpaper:tt("wallpaper",{map:Cf()}),plaster:tt("plaster",{map:jh()}),plasterW:tt("plasterW",{map:jh([175,170,160])}),roof:nn("roof",{map:Bf(),roughness:.8},2.5),felt:tt("felt",{map:Hf()}),shutter:tt("shutter",{map:zf()}),fwall:tt("fwall",{map:Df(),fog:!0}),wire:tt("wire",{map:kf(),transparent:!1,alphaTest:.4,side:ye}),bauzaun:tt("bauzaun",{map:Nf(),alphaTest:.4,side:ye}),tape:tt("tape",{map:sc(),side:ye,emissive:2098180}),stripes:tt("stripes",{map:Uf()}),metal:nn("metal",{color:6975090,roughness:.42,metalness:.75}),darkMetal:nn("darkMetal",{color:3816510,roughness:.5,metalness:.7}),rust:nn("rust",{color:5913126,roughness:.75,metalness:.3}),black:tt("black",{color:723724}),white:tt("white",{color:12104874}),wood:tt("wood",{color:6178352}),darkWood:tt("darkWood",{color:3811870}),paintedWood:tt("paintedWood",{color:4872764}),red:tt("red",{color:8002582}),glass:nn("glass",{color:658706,roughness:.08,metalness:.2}),water:new fs({map:Wf(),color:6978176,specular:8952234,shininess:80}),leafOak:tt("leafOak",{map:Fi("oak"),alphaTest:.45,side:ye}),leafBeech:tt("leafBeech",{map:Fi("beech"),alphaTest:.45,side:ye}),leafBush:tt("leafBush",{map:Fi("bush"),alphaTest:.45,side:ye}),hedge:tt("hedge",{map:Fi("hedge"),alphaTest:.4,side:ye}),hedgeBox:tt("hedgeBox",{color:1845784}),pine:tt("pineCard",{map:Pf(),alphaTest:.45,side:ye}),fern:tt("fern",{map:If(),alphaTest:.4,side:ye}),grass:tt("grass",{map:Lf(),alphaTest:.4,side:ye}),planksAncient:nn("planksAncient",{map:Jf(),roughness:.9},3),mossRoof:nn("mossRoof",{map:jf(),roughness:.95},3),mossStone:nn("mossStone",{map:nc(),color:5925448,roughness:.9},3),cobweb:new Be({map:Qf(),transparent:!0,depthWrite:!1,side:ye,opacity:.5}),ivy:tt("ivy",{map:tp(),alphaTest:.45,side:ye}),litter:tt("litter",{map:Fi("oak"),alphaTest:.5,side:ye}),rock:nn("rock",{map:nc(),color:6978138,roughness:.7},3.5)};s.barkOakT=nn("barkOakT",{map:ns("oak"),vertexColors:!0,roughness:.92},4),s.barkBeechT=nn("barkBeechT",{map:ns("beech"),vertexColors:!0,roughness:.8},2.5),s.barkPineT=nn("barkPineT",{map:ns("pine"),vertexColors:!0,roughness:.9},4);for(let e of["mulch","felt"])s[e]&&(s[e].bumpMap=s[e].map,s[e].bumpScale=e.startsWith("bark")?2.2:e==="concrete"?.7:1.4);let t={planksAncient:1.15,mossRoof:1.5,mossStone:1.3,ivy:1.4,leaves:2,gravel:1.7,barkOak:1.9,barkBeech:1.4,barkPine:1.7,barkOakT:2.1,barkBeechT:1.6,barkPineT:1.9,litter:1.4,rock:1.3,mulch:1.8,planksOld:1.5,planksTower:1.5,concrete:1.4,leafOak:1.35,leafBeech:1.2,leafBush:1.5,pine:1.6,fern:1.6,grass:1.5,brick:1.4,asphalt:1.5,sidewalk:1.3,hedge:1.5,roof:1.3,felt:1.4,floor:1.2,wallpaper:1.1};for(let[e,n]of Object.entries(t))s[e]&&s[e].color.setScalar(n);return s}function z(s,t,e,n=1){let i=new Xe(s,t,e);if(n){let r=i.attributes.uv,a=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]/n,r.getY(c)*a[o][1]/n)}}return i}function _t(s,t,e,n=8,i=1,r=!1){let a=new Ne(s,t,e,n,1,r);if(i){let o=a.attributes.uv,l=Math.PI*2*Math.max(s,t);for(let c=0;c<o.count;c++)o.setXY(c,o.getX(c)*l/i,o.getY(c)*e/i)}return a}function Ze(s,t,e=1){let n=new Yt(s,t);if(e){let i=n.attributes.uv;for(let r=0;r<i.count;r++)i.setXY(r,i.getX(r)*s/e,i.getY(r)*t/e)}return n}var sp=new ce,rp=new Ln,ap=new yn,op=new U(1,1,1),lp=new U,Gr=class{constructor(t=48){this.groups=new Map,this.chunk=t}add(t,e,n=0,i=0,r=0,a=0,o=0,l=0,c=1,u=1,f=1,d={}){return ap.set(a,o,l,"YXZ"),rp.setFromEuler(ap),lp.set(n,i,r),op.set(c,u,f),sp.compose(lp,rp,op),this.addM(t,e,sp,d)}addM(t,e,n,i={}){let r=t.index?t.toNonIndexed():t.clone();r.applyMatrix4(n),r.attributes.uv||r.setAttribute("uv",new le(new Float32Array(r.attributes.position.count*2),2));for(let c of Object.keys(r.attributes))["position","normal","uv"].includes(c)||r.deleteAttribute(c);r.computeBoundingSphere();let a=r.boundingSphere.center,o=Math.floor(a.x/this.chunk)+","+Math.floor(a.z/this.chunk),l=e.uuid+"|"+o+"|"+(i.cast===!1?0:1)+(i.receive===!1?0:1);return this.groups.has(l)||this.groups.set(l,{mat:e,list:[],cast:i.cast!==!1,receive:i.receive!==!1}),this.groups.get(l).list.push(r),r}build(t){let e=[];for(let{mat:n,list:i,cast:r,receive:a}of this.groups.values()){let o=_s(i,!1),l=new W(o,n);l.castShadow=r,l.receiveShadow=a,l.matrixAutoUpdate=!1,l.updateMatrix(),t.add(l),e.push(l)}return this.groups.clear(),e}};function hp(s){let t=s.attributes.position,e=new Float32Array(t.count*3);for(let n=0;n<t.count;n++){let i=t.getY(n),r=Math.min(1,Math.max(0,i/2.4)),a=.32+.68*r*r*(3-2*r),o=Math.max(0,1-i/1.4)*.55;e[n*3]=a*(1-o*.35),e[n*3+1]=a*(1+o*.18),e[n*3+2]=a*(1-o*.4)}return s.setAttribute("color",new tn(e,3)),s}function hc(s,t,e={}){let n=Ce(t),i=[],r=9,a=e.radius??.4,o=_t(a*.55,a,s,r,1.2),l=o.attributes.position;for(let f=0;f<l.count;f++){let d=l.getY(f),p=Math.atan2(l.getZ(f),l.getX(f)),m=1+Math.sin(p*3+t)*.06+Math.sin(d*.7+t)*.05;if(l.setX(f,l.getX(f)*m),l.setZ(f,l.getZ(f)*m),d<-s/2+.6){let x=1+(1-(d+s/2)/.6)*.45;l.setX(f,l.getX(f)*x),l.setZ(f,l.getZ(f)*x)}}o.translate(0,s/2,0),o.computeVertexNormals(),i.push(o);let c=[],u=e.branches??6;for(let f=0;f<u;f++){let d=s*(e.branchStart??.45)+n()*s*(1-(e.branchStart??.45))*.85,p=(e.branchLen??3.5)*(.6+n()*.6),m=n()*Math.PI*2,x=.6+n()*.5,g=_t(a*.18,a*.45,p,5,1.2);g.translate(0,p/2,0);let y=new ce().makeRotationFromEuler(new yn(x,m,0,"YXZ"));y.setPosition(0,d,0),g.applyMatrix4(y),i.push(g);let b=new U(0,p,0).applyMatrix4(y);if(c.push(b),p>2){let w=p*.45,S=_t(a*.06,a*.14,w,4,1.2);S.translate(0,w/2,0);let v=new ce().makeRotationFromEuler(new yn(x+.5,m+(n()-.5)*1.6,0,"YXZ")),E=new U(0,p*.6,0).applyMatrix4(y);v.setPosition(E),S.applyMatrix4(v),i.push(S),c.push(new U(0,w,0).applyMatrix4(v))}}return{geo:hp(_s(i.map(f=>f.toNonIndexed()),!1)),ends:c}}function uc(s,t,e,n={}){let i=Ce(e+100),r=[],a=n.cardSize??3.2,o=[...s];for(let l=0;l<(n.extra??5);l++)o.push(new U((i()-.5)*3,t*(.75+i()*.25),(i()-.5)*3));for(let l of o)for(let c=0;c<(n.perEnd??2);c++){let u=new Yt(a*(.7+i()*.6),a*(.7+i()*.6)),f=new ce().makeRotationFromEuler(new yn((i()-.5)*1.2,i()*Math.PI,(i()-.5)*.8));f.setPosition(l.x+(i()-.5)*1.2,l.y+(i()-.5)*.8,l.z+(i()-.5)*1.2),u.applyMatrix4(f),r.push(u.toNonIndexed())}return _s(r,!1)}function up(s){let t=[];for(let e=0;e<3;e++){let n=[15,18,21][e],i=hc(n,10+e,{branches:10,branchStart:.38,branchLen:4.4,radius:.45});t.push({kind:"oak",trunk:i.geo,crown:uc(i.ends,n,10+e,{cardSize:3.4,perEnd:3,extra:8}),trunkMat:s.barkOakT,crownMat:s.leafOak,R:.45})}for(let e=0;e<2;e++){let n=[17,22][e],i=hc(n,30+e,{branches:9,branchStart:.5,branchLen:3.8,radius:.34});t.push({kind:"beech",trunk:i.geo,crown:uc(i.ends,n,30+e,{cardSize:3.2,perEnd:3,extra:8}),trunkMat:s.barkBeechT,crownMat:s.leafBeech,R:.34})}for(let e=0;e<2;e++){let n=[22,25][e],i=hc(n,50+e,{branches:5,branchStart:.78,branchLen:2.6,radius:.3});t.push({kind:"pine",trunk:i.geo,crown:uc(i.ends,n,50+e,{cardSize:3.2,perEnd:3,extra:4}),trunkMat:s.barkPineT,crownMat:s.pine,R:.3})}{let n=hc(4,70,{branches:5,branchStart:.25,branchLen:1.4,radius:.06});t.push({kind:"sapling",trunk:n.geo,crown:uc(n.ends,4,70,{cardSize:1.6,perEnd:2,extra:3}),trunkMat:s.barkBeechT,crownMat:s.leafBeech,R:.06,small:!0})}{let n=[],i=_t(.4,.75,9,8,1.2);i.translate(0,9/2,0);let r=_t(.12,.35,5,6,1.2);r.translate(0,2.5,0),r.rotateZ(.55),r.translate(.4,9-1.5,0);let a=_t(.12,.35,5,6,1.2);a.translate(0,2.5,0),a.rotateZ(-.6),a.translate(-.4,9-1.8,0);let o=_t(.06,.15,3,5,1.2);o.translate(0,1.5,0),o.rotateX(.9),o.translate(0,4,.3);for(let l of[i,r,a,o])n.push(l.toNonIndexed());t.push({kind:"dead",trunk:hp(_s(n,!1)),crown:null,trunkMat:s.barkOakT,crownMat:null,R:.6})}return t}var dc=class{constructor(t,e=36){this.V=t,this.chunk=e,this.items=new Map}add(t,e,n,i,r=1,a=0){let o=Math.floor(e/this.chunk)+","+Math.floor(i/this.chunk)+"|"+t;return this.items.has(o)||this.items.set(o,[]),this.items.get(o).push({x:e,y:n,z:i,scale:r,rotY:a}),this.V[t].R*r}build(t){let e=new ce,n=new Ln,i=new U,r=new U,a=new yn;for(let[o,l]of this.items){let c=+o.split("|")[1],u=this.V[c],f=new Ns(u.trunk,u.trunkMat,l.length),d=u.crown?new Ns(u.crown,u.crownMat,l.length):null;l.forEach((p,m)=>{a.set(0,p.rotY,0),n.setFromEuler(a),r.set(p.x,p.y-.15,p.z),i.set(p.scale,p.scale,p.scale),e.compose(r,n,i),f.setMatrixAt(m,e),d&&d.setMatrixAt(m,e)}),f.castShadow=!0,f.receiveShadow=!0,f.computeBoundingSphere(),t.add(f),d&&(d.castShadow=!0,d.receiveShadow=!1,d.computeBoundingSphere(),t.add(d))}}};function ss(s,t,e=3){let n=[];for(let i=0;i<e;i++){let r=new Yt(s,t);r.translate(0,t/2,0),r.rotateY(i/e*Math.PI),n.push(r.toNonIndexed())}return _s(n,!1)}var is=class{constructor(t,e,n=36,i=!0){this.geo=t,this.mat=e,this.chunk=n,this.items=new Map,this.cast=i}add(t,e,n,i=1,r=0,a=i){let o=Math.floor(t/this.chunk)+","+Math.floor(n/this.chunk);this.items.has(o)||this.items.set(o,[]),this.items.get(o).push([t,e,n,i,r,a])}build(t){let e=new ce,n=new Ln,i=new U,r=new U,a=new yn;for(let o of this.items.values()){let l=new Ns(this.geo,this.mat,o.length);o.forEach((c,u)=>{a.set(0,c[4],0),n.setFromEuler(a),r.set(c[0],c[1],c[2]),i.set(c[3],c[5],c[3]),e.compose(r,n,i),l.setMatrixAt(u,e)}),l.castShadow=this.cast,l.receiveShadow=!0,l.computeBoundingSphere(),t.add(l)}}};function bs({coat:s=1711386,pants:t=1184274,skin:e=6967876,hood:n=!0,cap:i=!1,height:r=1.85,coatTex:a=null,longCoat:o=!1}={}){let l=r/1.8,c={},u=new xe({color:s,map:a||null}),f=new xe({color:t}),d=new xe({color:e}),p=new xe({color:723723}),m=new ee,x=new ee;x.position.y=.95*l,m.add(x);let g=new W(new Pi(.2*l,.42*l,4,10),u);g.position.y=.36*l,g.scale.set(1.1,1,.75),x.add(g);let y=new ee;y.position.y=.62*l,x.add(y);let b=new ee;b.position.y=.1*l,y.add(b);let w=new W(new Ae(.115*l,12,10),d);if(w.position.y=.13*l,w.scale.set(.9,1.08,1),b.add(w),n){let k=new W(new Ae(.15*l,12,10,0,Math.PI*2,0,Math.PI*.62),u);k.position.set(0,.15*l,.025*l),k.rotation.x=.35,b.add(k);let H=new W(new Ii(.09*l,12),new Be({color:197379}));H.position.set(0,.12*l,-.105*l),H.rotation.y=Math.PI,b.add(H)}if(i){let k=new W(new Ae(.125*l,12,8,0,Math.PI*2,0,Math.PI*.5),u);k.position.y=.16*l,b.add(k)}if(o){let k=new W(new Ne(.23*l,.31*l,.62*l,12,1,!0),new xe({color:s,side:ye}));k.position.y=-.22*l,x.add(k),c.skirt=k,g.scale.set(1.22,1,.82);let H=new W(new Ne(.17*l,.24*l,.12*l,12,1,!0),new xe({color:s,side:ye}));H.position.y=.66*l,x.add(H)}let S=(k,H,N)=>{let X=new Pi(k,H,3,8);return X.translate(0,-H/2-k*.5,0),new W(X,N)},v=k=>{let H=new ee;H.position.set(.25*k*l,.02*l,0),y.add(H);let N=S(.065*l,.26*l,u);H.add(N);let X=new ee;X.position.y=-.33*l,H.add(X);let Z=S(.055*l,.24*l,u);X.add(Z);let $=new W(new Ae(.05*l,8,6),d);return $.position.y=-.33*l,X.add($),{sh:H,el:X,hand:$}},E=k=>{let H=new ee;H.position.set(.1*k*l,0,0),x.add(H);let N=S(.085*l,.36*l,f);H.add(N);let X=new ee;X.position.y=-.45*l,H.add(X);let Z=S(.07*l,.36*l,f);X.add(Z);let $=new W(new Xe(.11*l,.08*l,.26*l),p);return $.position.set(0,-.46*l,-.05*l),X.add($),{hp:H,kn:X}},_=v(-1),M=v(1),I=E(-1),P=E(1);m.traverse(k=>{k.isMesh&&(k.castShadow=!0,k.receiveShadow=!0)});let O={root:m,hips:x,chest:y,neck:b,head:w,armL:_,armR:M,legL:I,legR:P,phase:0,...c};return O.walk=(k,H)=>{O.phase+=k*H*3.3;let N=Math.sin(O.phase),X=Math.min(1,H/1.5),Z=H>3;I.hp.rotation.x=N*.6*X,P.hp.rotation.x=-N*.6*X,I.kn.rotation.x=-Math.max(0,-Math.cos(O.phase))*.9*X,P.kn.rotation.x=-Math.max(0,Math.cos(O.phase))*.9*X,_.sh.rotation.x=-N*(Z?.9:.4)*X,M.sh.rotation.x=N*(Z?.9:.4)*X,_.el.rotation.x=Z?1.2:.25,M.el.rotation.x=Z?1.2:.25,x.position.y=.95*l+Math.abs(Math.cos(O.phase))*.04*X,y.rotation.x=Z?-.25:-.05,O.skirt&&(O.skirt.rotation.x=-Math.abs(N)*.12*X-(Z?.18:0))},O.sit=()=>{x.position.y=.48*l,I.hp.rotation.set(1.45,0,.12),P.hp.rotation.set(1.38,0,-.1),I.kn.rotation.x=-1.4,P.kn.rotation.x=-1.3,y.rotation.x=-.32,b.rotation.x=-.45,_.sh.rotation.set(.75,0,.12),M.sh.rotation.set(.7,0,-.12),_.el.rotation.x=.55,M.el.rotation.x=.6},O.stand=()=>{x.position.y=.95*l;for(let k of[I,P])k.hp.rotation.set(0,0,0),k.kn.rotation.set(0,0,0);for(let k of[_,M])k.sh.rotation.set(0,0,0),k.el.rotation.set(.1,0,0);_.sh.rotation.z=-.08,M.sh.rotation.z=.08,y.rotation.set(0,0,0),b.rotation.set(0,0,0)},O.stand(),O}var dp=es(202),pc={minX:-150,maxX:60,minZ:-170,maxZ:180,step:2};function Sy(s,t){let e=(be(dp,s/38,t/38,4)-.5)*2;e+=(be(dp,s/9+50,t/9,2)-.5)*.35;let n=Te((-t-26)/8,0,1);if(e*=1-zr(n),t>-32&&t<66){let r=Te(1-(Math.abs(s)-3)/5,0,1);e*=1-r*.7}let i=Math.hypot(s+63,t+-140);if(i<13&&(e=e*zr(Te((i-7)/6,0,1))),s<-79){let r=zr(Te((-79-s)/2.5,0,1));e*=1-r;let a=Math.abs(s+83.2);a<1.6&&(e-=Math.cos(a/1.6*Math.PI/2)*.75*zr(Te((t-60)/8,0,1))*zr(Te((160-t)/8,0,1)))}return e}var mc=class{constructor(){let t=pc;this.nx=Math.round((t.maxX-t.minX)/t.step)+1,this.nz=Math.round((t.maxZ-t.minZ)/t.step)+1,this.h=new Float32Array(this.nx*this.nz);for(let e=0;e<this.nz;e++)for(let n=0;n<this.nx;n++){let i=t.minX+n*t.step,r=t.minZ+e*t.step;this.h[e*this.nx+n]=Sy(i,r)}this.holes=[]}dig(t,e,n,i,r){let a=pc;for(let o=0;o<this.nz;o++)for(let l=0;l<this.nx;l++){let c=a.minX+l*a.step,u=a.minZ+o*a.step;c>=t&&c<=e&&u>=n&&u<=i&&(this.h[o*this.nx+l]=r)}}hole(t,e,n,i){this.holes.push([t,e,n,i])}hv(t,e){return t=Te(t,0,this.nx-1),e=Te(e,0,this.nz-1),this.h[e*this.nx+t]}height(t,e){let n=pc,i=(t-n.minX)/n.step,r=(e-n.minZ)/n.step,a=Math.floor(i),o=Math.floor(r),l=i-a,c=r-o,u=this.hv(a,o),f=this.hv(a+1,o),d=this.hv(a,o+1),p=this.hv(a+1,o+1);return l+c<=1?u+(f-u)*l+(d-u)*c:p+(d-p)*(1-l)+(f-p)*(1-c)}mesh(t){let e=pc,n=this.nx,i=this.nz,r=new Float32Array(n*i*3),a=new Float32Array(n*i*2),o=new Float32Array(n*i*3),l=es(77);for(let p=0;p<i;p++)for(let m=0;m<n;m++){let x=p*n+m,g=e.minX+m*e.step,y=e.minZ+p*e.step;r[x*3]=g,r[x*3+1]=this.h[x],r[x*3+2]=y,a[x*2]=g/6,a[x*2+1]=y/6;let b=be(l,g/14,y/14,3),w=be(l,g/4+9,y/4,2),S=.62+b*.55+(w-.5)*.2,v=Te((.5-this.h[x])*.15,0,.12);o[x*3]=S*(1-v),o[x*3+1]=S*(1+v*.6),o[x*3+2]=S*(.92-v*.3)}let c=[],u=(p,m)=>this.holes.some(x=>p>x[0]&&p<x[1]&&m>x[2]&&m<x[3]);for(let p=0;p<i-1;p++)for(let m=0;m<n-1;m++){let x=p*n+m,g=p*n+m+1,y=(p+1)*n+m,b=(p+1)*n+m+1,w=e.minX+(m+.5)*e.step,S=e.minZ+(p+.5)*e.step;u(w,S)||c.push(x,y,g,y,b,g)}let f=new Ue;f.setAttribute("position",new tn(r,3)),f.setAttribute("uv",new tn(a,2)),f.setAttribute("color",new tn(o,3)),f.setIndex(c),f.computeVertexNormals();let d=new W(f,t);return d.receiveShadow=!0,d}};function Vr(s,t,e,n=1,i=.035,r=3){let a=[],o=[],l=[],c=0,u=0;for(let m=0;m<t.length-1;m++){let[x,g]=t[m],[y,b]=t[m+1],w=Math.hypot(y-x,b-g),S=Math.max(1,Math.ceil(w/n)),v=(y-x)/w,_=-((b-g)/w),M=v;for(let I=m===0?0:1;I<=S;I++){let P=I/S,O=x+(y-x)*P,k=g+(b-g)*P,H=4;for(let N=0;N<=H;N++){let X=(N/H-.5)*e,Z=O+_*X,$=k+M*X;a.push(Z,s.height(Z,$)+i,$),o.push(N/H*e/r,(c+w*P)/r)}if(u>0)for(let N=0;N<H;N++){let X=(u-1)*(H+1)+N,Z=X+1,$=u*(H+1)+N,et=$+1;l.push(X,Z,$,Z,et,$)}u++}c+=w}let f=new Ue;f.setAttribute("position",new le(a,3)),f.setAttribute("uv",new le(o,2)),f.setIndex(l),f.computeVertexNormals();let d=f.attributes.normal,p=0;for(let m=0;m<d.count;m++)p+=d.getY(m);if(p<0){for(let m=0;m<l.length;m+=3){let x=l[m];l[m]=l[m+1],l[m+1]=x}f.setIndex(l),f.computeVertexNormals()}return f}var wy=new U,fp=new Ln,pp=new ce,Ey=new U(0,1,0);function Mn(s,t,e,n,i=.2,r=i){let a=new U(...e),o=new U(...n),l=wy.subVectors(o,a),c=l.length(),u=z(i,c,r,1);fp.setFromUnitVectors(Ey,l.clone().normalize()),pp.compose(a.clone().add(o).multiplyScalar(.5),fp,new U(1,1,1)),s.addM(u,t,pp)}function Ms(s,t,e,n=1){let i=s/2,r=e/2,a=Math.hypot(i,t),o=[-i,0,-r,-i,0,r,0,t,r,-i,0,-r,0,t,r,0,t,-r,i,0,r,i,0,-r,0,t,-r,i,0,r,0,t,-r,0,t,r,-i,0,r,i,0,r,0,t,r,i,0,-r,-i,0,-r,0,t,-r],l=[0,0,e/n,0,e/n,a/n,0,0,e/n,a/n,0,a/n,0,0,e/n,0,e/n,a/n,0,0,e/n,a/n,0,a/n,0,0,s/n,0,s/n/2,t/n,0,0,s/n,0,s/n/2,t/n],c=new Ue;return c.setAttribute("position",new le(o,3)),c.setAttribute("uv",new le(l,2)),c.computeVertexNormals(),c}function gc(s,t,e,n,i,r=0){let a=Math.cos(r),o=Math.sin(r),l=(c,u,f)=>[e+c*a+f*o,n+u,i-c*o+f*a];for(let c=0;c<3;c++){let u=l(0,.45,-.18+c*.13);s.add(z(1.8,.04,.11,.5),t.wood,...u,0,r,0)}for(let c=0;c<2;c++){let u=l(0,.62+c*.14,.27);s.add(z(1.8,.1,.03,.5),t.wood,...u,-.15,r,0)}for(let c of[-.75,.75]){let u=l(c,.22,0);s.add(z(.06,.44,.5),t.darkMetal,...u,0,r,0);let f=l(c,.65,.26);s.add(z(.05,.45,.05),t.darkMetal,...f,-.15,r,0)}}function mp(s,t,e,n,i){s.add(_t(.25,.22,.8,10,1),t.darkMetal,e,n+.5,i),s.add(_t(.04,.04,.6,6,1),t.darkMetal,e,n+.3,i)}function Wr(s,t,e,n,i,r){let a=tt("car"+r,{color:r}),o=Math.cos(i),l=Math.sin(i),c=(u,f,d)=>[e+u*o+d*l,f,n-u*l+d*o];s.add(z(1.78,.62,4.2,1),a,...c(0,.62,0),0,i,0),s.add(z(1.6,.5,2.1,1),a,...c(0,1.17,.15),0,i,0),s.add(z(1.62,.42,2,1),t.glass,...c(0,1.16,.15),0,i,0);for(let u of[-.82,.82])for(let f of[-1.35,1.35])s.add(_t(.32,.32,.22,12,1),t.black,...c(u,.32,f),0,i,Math.PI/2);s.add(z(1.5,.12,.05,1),tt("tail",{color:3803142,emissive:1179648}),...c(0,.78,2.1),0,i,0)}function dn(s=16756848,t=2.5,e=.5,n=!0){let i=new Ds(new us({map:Vf(),color:s,transparent:!0,opacity:e,blending:Li,depthWrite:!1,fog:n}));return i.scale.set(t,t,1),i}function $n(s){return new Be({color:s})}function Sn(s,t,e,n={}){let i=Ff(s,n),r=new W(new Yt(t,e),new xe({map:i,side:ye}));return r.castShadow=!0,r.receiveShadow=!0,r}function gp(s,t,e,n,i=0){let r=new ee,a=new W(new Ae(.22,14,10),new xe({color:10504720}));a.scale.set(1.15,.85,1.15),a.position.y=.19,r.add(a);let o=new W(new Ne(.02,.03,.08,6),new xe({color:3815960}));o.position.y=.38,r.add(o);let l=document.createElement("canvas");l.width=l.height=128;let c=l.getContext("2d");c.fillStyle="#ffb040",c.beginPath(),c.moveTo(30,50),c.lineTo(50,30),c.lineTo(56,56),c.fill(),c.beginPath(),c.moveTo(98,50),c.lineTo(78,30),c.lineTo(72,56),c.fill(),c.beginPath(),c.moveTo(24,76);for(let d=0;d<=8;d++)c.lineTo(24+d*10,d%2?86:98);c.lineTo(104,76),c.quadraticCurveTo(64,112,24,76),c.fill();let u=new en(l);u.colorSpace=rn;let f=new W(new Yt(.34,.34),new Be({map:u,transparent:!0,blending:Li,depthWrite:!1}));return f.position.set(0,.2,.235),r.add(f),r.position.set(t,e,n),r.rotation.y=i,a.castShadow=!0,s.add(r),{g:r,face:f}}function xp(s,t,e,n){let i=new ee,r=new W(new Ne(.05,.045,.13,10),new Be({color:9048072,transparent:!0,opacity:.9}));r.position.y=.07,i.add(r);let a=new W(new Ne(.035,.05,.03,10),new xe({color:7829367}));a.position.y=.15,i.add(a);let o=dn(16723992,.8,.7);return o.position.y=.1,i.add(o),i.position.set(t,e,n),s.add(i),{g:i,halo:o}}function Ty(s,t){if(t<=s[0][1])return s[0][0];for(let e=0;e<s.length-1;e++){let[n,i]=s[e],[r,a]=s[e+1];if(t>=i&&t<=a)return n+(r-n)*((t-i)/(a-i||1))}return s[s.length-1][0]}var xc=s=>Ty(Mt.schneise,s),Mt={homeDoor:new U(-7.97,0,-131),homeSpawn:[-6.6,0,-131],deniz:[-7.55,.3,-130.55],canBench:[-3,-55],tower:[13,-50],schneiseStart:[0,-31],schneise:[[0,-31],[0,-23],[-2.6,-13],[-3.4,-3],[-.6,7],[3,16],[3.8,24.5],[1.2,33],[-1.6,41],[-.4,48],[0,52.5],[0,59.6]],branches:[[[-2.6,-13],[-8.5,-16.5],[-14,-15.2],[-19.5,-18.6]],[[3.8,24.5],[7,27.2],[9.4,28.4]],[[-1.6,41],[-7.5,43.8],[-11.6,47.2]]],barrier:[0,57.5],squeeze:[-3.3,54.4],pile:[-7,54.6],corridor:[[-7.8,54.6],[-13,60],[-20,68],[-27,77],[-36,84],[-46,83],[-55,86],[-60,94],[-62,102],[-69,104.5],[-75,106],[-75.5,118],[-72,128],[-67,133.5]],escape:[[-71.5,142.5],[-74,131],[-75.5,118],[-75.5,106]],dropAt:[-61,98],fenceX:-79,gateZ:106,hut:[-62,140],clearing:[-63,140],ventExit:[-71.8,142.4],speaker:new U(-56,5,150),streamX:-83.2};function _p(s,t,e){let n=new Gr(48),i=new mc;t.terrain=i,i.hole(-64,-60,138,142),t.underground=[{minX:-64,maxX:-60,minZ:138,maxZ:142,top:1},{minX:400,maxX:700,minZ:-100,maxZ:100,top:100}],h.terrain=i;let r=ec(),a=h.settings.quality==="low"?new xe({map:r,normalMap:fc(r,3.2),vertexColors:!0,color:new Jt(2.1,2.1,2.1)}):new Us({map:r,normalMap:fc(r,3.2),roughness:.74,metalness:0,vertexColors:!0,color:new Jt(2.2,2.2,2.2)});s.add(i.mesh(a));let o=(F,C)=>i.height(F,C),l=Ce(4242);Ay(s),t.tag="Stra\xDFe";let c=new W(Ze(7,80,6),e.asphalt);c.rotation.x=-Math.PI/2,c.position.set(0,.012,-112),c.receiveShadow=!0,s.add(c);for(let F of[-1,1])n.add(z(3,.12,80,2),e.sidewalk,F*5,.06,-112),n.add(z(.18,.16,80,1),e.concrete,F*3.5,.08,-112),n.add(z(2,.03,80,2),e.sidewalk,F*7.5,.015,-112),t.addFloor(F>0?3.5:-6.5,F>0?6.5:-3.5,-152,-72,.12);t.addSurface(-3.5,3.5,-155,-71,"asphalt"),t.addSurface(-9,-3.5,-155,-71,"sidewalk"),t.addSurface(3.5,9,-155,-71,"sidewalk"),t.addRegionBox(-6.6,6.6,-150,-70),t.addRegionBox(-8.4,-6.4,-132.3,-129.7),t.addRegionBox(-8,-6,-150,-72),t.addRegionBox(6,8,-150,-72);for(let F=0;F<5;F++){let C=-6.6+F*3.3;n.add(Ze(3.3,2,0),e.bauzaun,C,1.12,-150.3,0,0,0,1,1,1,{cast:!1}),n.add(z(.6,.15,.25,1),e.concrete,C-1.65,.08,-150.3)}n.add(z(.6,.15,.25,1),e.concrete,9.9,.08,-150.3),t.addBox(-8.3,8.3,-150.45,-150.15,-50,50,{label:"Bauzaun Stra\xDFenende"});{let F=Sn([{t:"DURCHGANG",font:"bold 44px Arial",color:"#b01010"},{t:"GESPERRT",font:"bold 44px Arial",color:"#b01010"}],.6,.4,{w:256,h:170,bg:"#f4f0e0"});F.position.set(-1.2,1.4,-150.25),s.add(F)}t.tag="H\xE4user/Stra\xDFenrand";let u=[-145,-131,-117,-103,-89];u.forEach((F,C)=>{nu(n,e,s,t,-14,F,11,12,C%4,"east",C===1),nu(n,e,s,t,14,F+4,11,12,(C+2)%4,"west",!1)});for(let F=-20;F<=20;F+=13)nu(n,e,s,t,F,-161,12,10,(F+40)%4,"south",!1);t.addBox(-30,30,-156,-152);for(let F of[-138,-124,-110,-96,-82])t.addBox(-20,-8.4,F-1,F+1),t.addBox(8.4,20,F+3,F+5);for(let F of[-138,-124,-110,-96])n.add(z(.1,1.8,2,1),e.planksTower,-8.6,.9,F),n.add(z(.1,1.8,2,1),e.planksTower,8.6,.9,F+4);for(let F of u)for(let C of[-1,1]){let K=C<0?F:F+4;for(let nt of[-4,3.2])n.add(z(.6,.8,2.6,1),e.hedgeBox,C*7.6,.4,K+nt,0,0,0,1,1,1),t.addBox(C*7.6-.3,C*7.6+.3,K+nt-1.3,K+nt+1.3,-1,.8)}let f=[[-5.9,-146],[-5.9,-121],[-5.9,-96],[5.9,-133],[5.9,-108],[5.9,-83]];for(let[F,C]of f)bp(n,e,s,t,F,C,F<0?1:-1);Wr(n,e,2.35,-141,0,2766144),Wr(n,e,2.35,-119,0,5905432),Wr(n,e,2.35,-98,Math.PI,3947578),Wr(n,e,-2.35,-126,Math.PI,1976866),Wr(n,e,-2.35,-106,0,6974054);for(let[F,C]of[[2.35,-141],[2.35,-119],[2.35,-98],[-2.35,-126],[-2.35,-106]])t.addBox(F-.95,F+.95,C-2.15,C+2.15,-1,1.5);for(let[F,C]of[[-7.2,-128],[-7.2,-127.2],[7.2,-100],[7.2,-113]])n.add(z(.6,1,.7,1),tt("bin"+(F>0?1:0),{color:F>0?2767442:3815994}),F,.5,C),t.addBox(F-.3,F+.3,C-.35,C+.35,-1,1);gp(s,7.25,.15,-98.45,-Math.PI/2),t.addLamp({pos:[6.9,.55,-98.45],color:16747056,intensity:1.8,distance:5,flicker:F=>.75+Math.sin(F*13)*.12+Math.sin(F*31.7)*.1});{let F=dn(16747056,.9,.35);F.position.set(7,.38,-98.45),s.add(F)}let d=Sn([{t:"Wendelsweg",font:"bold 64px Arial"}],1.2,.3,{w:512,h:128,bg:"#f2f2ec",border:"#222"});d.position.set(-5.9,2.6,-149),d.rotation.y=Math.PI/2,s.add(d),n.add(_t(.04,.04,2.8,6),e.metal,-5.9,1.4,-149);let p=Sn(["Waldspielpark",{t:"Goetheturm  \u2192",font:"bold 56px Arial"}],1.4,.7,{bg:"#5a3a20",fg:"#f0e6cc",border:"#e8dcc0"});p.position.set(5.6,2.1,-76),p.rotation.y=-Math.PI/2,s.add(p),n.add(_t(.05,.05,2.2,6),e.wood,5.6,1.1,-76),n.add(_t(.06,.06,1,8),e.white,-3.8,.5,-73),n.add(z(5.5,.1,.1,1),e.stripes,-1,.95,-73);for(let F of[-140,-114,-90])Ry(n,e,s,t,-7.4,F);t.tag="Spielplatz Goetheturm";let m=new W(Ze(56,44,2.5),e.mulch);m.rotation.x=-Math.PI/2,m.position.set(0,.02,-51),m.receiveShadow=!0,s.add(m);let x=new W(Vr(i,[[0,-72],[0,-60],[-2,-50],[0,-38],[0,-29]],3.6,1,.045),e.gravel);x.receiveShadow=!0,s.add(x),t.addRegionBox(-27,27,-72.5,-29.5),t.addSurface(-28,28,-72,-29,"mulch"),t.addSurface(-2,2,-72,-29,"gravel"),Cy(n,e,s,t,Mt.tower[0],Mt.tower[1]),Py(n,e,s,t,-18,-65),Iy(n,e,t,-12,-47),h.objects.swing=Ly(n,e,s,t,-17,-37);for(let[F,C,K,nt]of[[-4,-40,4.4,.3],[-4,-36,4.4,.3],[-6.05,-38,.3,4.4],[-1.95,-38,.3,4.4]])n.add(z(K,.3,nt,1),e.wood,F,.15,C);{let F=new W(Ze(3.8,3.8,2),e.sand);F.rotation.x=-Math.PI/2,F.position.set(-4,.12,-38),F.receiveShadow=!0,s.add(F),t.addFloor(-6,-2,-40,-36,.12),t.addSurface(-6,-2,-40,-36,"sand")}Dy(n,e,t,12,-66),gc(n,e,-3.6,0,-55,Math.PI/2),t.addBox(-3.9,-3.3,-55.9,-54.1,-1,.9),gc(n,e,8,0,-34.5,Math.PI),t.addBox(7.1,8.9,-34.8,-34.2,-1,.9),mp(n,e,-3.6,0,-53.2);let g=new W(new Ne(.033,.033,.16,12),new xe({color:2046496,emissive:132098}));g.position.set(-3.55,.54,-55.35),g.castShadow=!0,s.add(g),h.objects.can=g;for(let F=0;F<5;F++){let C=-39+F*2,K=6-F%2*2.2,nt=22+F%2*1.1;n.add(z(K,1.3,.7,1),e.hedgeBox,nt,.65,C),t.addBox(nt-K/2,nt+K/2,C-.35,C+.35,-1,1.3)}iu(n,e,s,t,1.6,-69,null),h.objects.flickerLamp=iu(n,e,s,t,-7,-52,F=>Math.sin(F*2.1)>.75&&Math.random()<.35?.05:1),iu(n,e,s,t,3,-33.5,()=>0,!0);let y=Sn([{t:"WALDSPIELPARK",font:"bold 54px Georgia"},{t:"GOETHETURM",font:"bold 62px Georgia"}],3.2,1.2,{bg:"#4a3220",fg:"#ecdcb8",border:"#2a1a10"});y.position.set(-5,2.3,-71.2),s.add(y),n.add(_t(.12,.12,3,8),e.wood,-6.5,1.5,-71.2),n.add(_t(.12,.12,3,8),e.wood,-3.5,1.5,-71.2),t.addCircle(-6.5,-71.2,.15),t.addCircle(-3.5,-71.2,.15);let b=[[-22,-58],[-20,-44],[18,-66],[22,-58],[-14,-68],[24,-34],[-24,-33],[10,-38]];t.tag="H\xFCgelschneise";let w=new W(Vr(i,[...Mt.schneise.slice(0,-1),[0,63]],5.2,.5,.09,3),e.gravel);w.receiveShadow=!0,s.add(w),t.addRegionPath(Mt.schneise,2.6,{label:"H\xFCgelschneise"});for(let F=0;F<Mt.schneise.length-1;F++){let[C,K]=Mt.schneise[F],[nt,ut]=Mt.schneise[F+1];t.addSurface(Math.min(C,nt)-2.8,Math.max(C,nt)+2.8,K-.5,ut+.5,"gravel")}t.addSurface(-2.8,2.8,52,64,"gravel"),Mt.branches.forEach((F,C)=>t.addRegionPath(F,1.25,{label:"Abzweigung "+(C+1)}));{n.add(_t(.07,.07,2.4,8),e.wood,2.9,o(2.9,-27)+1.2,-27),t.addCircle(2.9,-27,.12);let F=Sn([{t:"H\xFCgelschneise",font:"bold 60px Georgia"}],1.1,.28,{w:512,h:128,bg:"#e8e0c8",fg:"#2a2a1a",border:"#3a2a1a"});F.position.set(2.9,o(2.9,-27)+2.1,-27),F.rotation.y=-.3,s.add(F);let C=Sn([{t:"Maunzenweiher 1,8 km",font:"bold 44px Georgia"}],1,.22,{w:512,h:112,bg:"#e8e0c8",fg:"#2a2a1a",border:"#3a2a1a"});C.position.set(2.9,o(2.9,-27)+1.75,-27),C.rotation.y=.4,s.add(C)}{let F=xc(12)+3.3;gc(n,e,F,o(F,12),12,-Math.PI/2)}ky(n,e,11.2,o(11.2,31),31),t.tag="Sperrung Forstarbeiten";{n.add(_t(.42,.55,17,10,1.2),e.barkOak,1,o(1,60.5)+.55,60.5,0,0,Math.PI/2);let C=_t(1.6,1.6,.6,12,1);n.add(C,tt("rootdirt",{color:2760212}),9.6,o(9.6,60.5)+1.2,60.5,0,0,Math.PI/2);for(let nt=0;nt<7;nt++)n.add(_t(.04,.1,2.5,5,1),e.barkOak,-4+nt*1.8,o(0,60.5)+1.4,60.5+(nt%2?.6:-.6),nt%2?.9:-.9,0,.2);t.addBox(-8,10,60.5-.7,60.5+.7);for(let nt of[-2.3,2.3])n.add(_t(.06,.06,1.2,8),e.white,nt,o(nt,57.5)+.6,57.5);n.add(z(4.6,.25,.04,1),e.stripes,0,o(0,57.5)+1,57.5),n.add(z(4.6,.25,.04,1),e.stripes,0,o(0,57.5)+.45,57.5),t.addBox(-2.6,2.6,57.3,57.7);let K=Sn([{t:"FORSTARBEITEN",font:"bold 50px Arial",color:"#b01010"},{t:"Lebensgefahr!",font:"bold 40px Arial"},{t:"Weg gesperrt",font:"36px Arial"}],.9,.6,{w:384,h:256,bg:"#f4f0e0"});K.position.set(.6,o(0,57.4)+1.45,57.4),K.rotation.y=Math.PI,s.add(K),n.add(_t(.035,.035,1.4,6),e.metal,.6,o(0,57.4)+.7,57.45)}t.tag="Durchschlupf",t.addRegionPath([[-2.2,54.4],[-7.8,54.6]],.75);{let[F,C]=Mt.squeeze;h.squeezeTrees=[[F,C-1.25],[F,C+1.25]];let K=o(F,C);n.add(_t(.08,.17,3.4,6,1.2),e.barkOak,F-.2,K+1.32,C,Math.PI/2-.06,0,0),t.addOBB(F-.2,C,.22,1.7,0,K+1.2,K+1.55),t.addBox(F-1.8,F+1,C-2.6,C-.75),t.addBox(F-1.8,F+1,C+.75,C+2.6)}h.objects.pile=Uy(s,t,Mt.pile[0],o(...Mt.pile),Mt.pile[1]),t.addBox(-7.6,-6.4,50.8,53.25,-50,50,{label:"Gestr\xFCpp am Durchschlupf"}),t.addBox(-7.6,-6.4,55.95,58.6,-50,50,{label:"Gestr\xFCpp am Durchschlupf"});let S=[[-7,52.2],[-6.9,51.1],[-7.1,57.1],[-6.9,58.1],[-7.4,53],[-7.3,56.3]];{let[F,C]=Mt.branches[0][Mt.branches[0].length-1];n.add(_t(.3,.38,5.4,9,1.2),e.barkOak,F-.9,o(F,C)+.32,C-.7,0,.55,Math.PI/2),t.addOBB(F-.9,C-.7,2.7,.38,-.55,-50,o(F,C)+.75,{label:"Umgest\xFCrzter Baum (Sackgasse)"}),n.add(_t(.05,.05,1.5,6),e.wood,F+.9,o(F+.9,C+.6)+.75,C+.6);let K=Sn([{t:"PRIVATWEG",font:"bold 46px Georgia"},{t:"Betreten verboten",font:"30px Georgia"}],.8,.36,{w:384,h:172,bg:"#d8d0b8",fg:"#2a1a10",border:"#3a2a1a"});K.position.set(F+.9,o(F+.9,C+.6)+1.35,C+.6),K.rotation.y=.9,s.add(K)}{let[F,C]=Mt.branches[2][Mt.branches[2].length-1],K=o(F,C);for(let nt=0;nt<3;nt++)for(let ut=0;ut<4-nt;ut++)n.add(_t(.26,.28,4.2,9,1.2),e.barkOak,F-1+ut*.52+nt*.26,K+.27+nt*.46,C+.4,Math.PI/2,.75,0);t.addOBB(F-.2,C+.4,1.3,2.2,-.75,-50,K+1.5,{label:"Holzpolter (Sackgasse)"})}t.tag="Wald-Korridor",t.addRegionPath(Mt.corridor,3),t.addRegionPath(Mt.escape,3),t.addRegionCircle(Mt.clearing[0],Mt.clearing[1],9.5);{let F=document.createElement("canvas");F.width=64,F.height=256;let C=F.getContext("2d"),K=C.createImageData(64,256);for(let Ft=0;Ft<256;Ft++)for(let Bt=0;Bt<64;Bt++){let $t=Bt/63,at=1-Math.abs($t-.5)*2,pe=(Math.sin(Bt*1.7+Ft*.31)+Math.sin(Ft*.73+Bt*.4)*.6)*.16+(l()-.5)*.4,Ie=Math.max(0,Math.min(1,at*1.7-.3+pe)),me=(Ft*64+Bt)*4;K.data[me]=K.data[me+1]=K.data[me+2]=Ie*255,K.data[me+3]=255}C.putImageData(K,0,0);let nt=new en(F);nt.wrapS=nt.wrapT=Ti;let ut=tt("trodden",{map:ic(),alphaMap:nt,alphaTest:.5,color:new Jt(2,1.8,1.55)});for(let Ft of[[[-2.4,54.4],[-7.8,54.6],...Mt.corridor.slice(1)],Mt.escape,...Mt.branches]){let Bt=new W(Vr(i,Ft,1.6,1,.05,1.6),ut);Bt.receiveShadow=!0,s.add(Bt)}}{let K=o(-75.15,121);n.add(_t(.2,.24,6.8,9,1.2),e.barkOak,-75.15,K+.2,121,0,.15,Math.PI/2);for(let nt=0;nt<4;nt++)n.add(_t(.03,.06,1.1,5,1),e.barkOak,-75.15-2.4+nt*1.5,K+.45,121+(nt%2?.25:-.25),nt%2?.7:-.7,0,.3);t.addOBB(-75.15,121,3.4,.24,.15,-50,K+.42,{label:"Stamm auf dem Fluchtweg (springen)"})}let v=[[-24.6,73.2,.2],[-58,90.4,.2]];h.markerTrees=v;let E=[[-11.2,58.2],[-18.5,64.6],[-24.6,73.2],[-32.2,82.6],[-41.5,86.2],[-50.5,82.3],[-58,90.4],[-64.2,100],[-72.5,103.2],[-77.2,112.4],[-74.8,123.6],[-69.9,131.6]],_=[];for(let[F,C]of E)_.push(Ny(s,F,o(F,C)+1.5,C,l()*6));h.objects.tapes=_;let M=xp(s,-76.6,o(-76.6,115.5)+.02,115.5);t.addLamp({pos:[-76.6,o(-76.6,115.5)+.25,115.5],color:16726560,intensity:1.2,distance:5,flicker:F=>.7+Math.sin(F*9)*.15+Math.sin(F*23)*.1}),t.tag="Wald (B\xE4ume)";let I=up(e),P=new dc(I,36),O=[{t:"box",minX:-28,maxX:28,minZ:-76,maxZ:-29},{t:"path",pts:[...Mt.schneise.slice(0,-1),[0,64]],r:2.6},...Mt.branches.map(F=>({t:"path",pts:F,r:1.25})),{t:"path",pts:Mt.corridor,r:3},{t:"path",pts:Mt.escape,r:3},{t:"path",pts:[[-2.2,54.4],[-7.8,54.6]],r:1.1},{t:"circle",x:Mt.clearing[0],z:Mt.clearing[1],r:9.5}],k=(F,C)=>{let K=1/0;for(let nt of O){let ut;if(nt.t==="box"){let Ft=Math.max(nt.minX-F,0,F-nt.maxX),Bt=Math.max(nt.minZ-C,0,C-nt.maxZ);ut=Ft||Bt?Math.hypot(Ft,Bt):-Math.min(F-nt.minX,nt.maxX-F,C-nt.minZ,nt.maxZ-C)}else if(nt.t==="circle")ut=Math.hypot(F-nt.x,C-nt.z)-nt.r;else{let Ft=1/0;for(let Bt=0;Bt<nt.pts.length-1;Bt++)Ft=Math.min(Ft,Ys(F,C,...nt.pts[Bt],...nt.pts[Bt+1]).d);ut=Ft-nt.r}ut<K&&(K=ut)}return K};h.walkSD=k;let H=[],N=(F,C,K)=>{for(let nt of H)if(Math.hypot(nt[0]-F,nt[1]-C)<nt[2]+K)return!0;return!1};for(let[F,C]of v)P.add(I.length-1,F,o(F,C),C,1,.4),t.addCircle(F,C,.62),H.push([F,C,1.2]);for(let[F,C]of h.squeezeTrees)P.add(0,F,o(F,C),C,1.2,l()*6),t.addCircle(F,C,.55),H.push([F,C,1]);for(let[F,C]of b)P.add(l()*3|0,F,o(F,C),C,1.25,l()*6),t.addCircle(F,C,.55),H.push([F,C,1.5]);H.push([11.2,31,3.2]);{let C=-1/0;for(let ut=-79;ut<=-69;ut+=2.5)C=Math.max(C,o(ut,126.5));n.add(_t(.19,.24,10.6,9,1.2),e.barkOak,-74,C+1.43,126.5,0,.04,Math.PI/2);for(let ut of[-79.6,-68.5])n.add(_t(.34,.42,2.4,9,1.2),e.barkOak,ut,o(ut,126.5)+1,126.5),t.addCircle(ut,126.5,.42),H.push([ut,126.5,1]);for(let ut=0;ut<5;ut++)n.add(_t(.03,.05,1.3,5,1),e.barkOak,-77.5+ut*1.7,C+1.2,126.5+(ut%2?.2:-.2),ut%2?.5:-.5,0,.2);t.addOBB(-74,126.5,5.3,.26,-.04,C+1.2,C+1.7,{label:"H\xE4ngender Baum (ducken)"}),h.duckTrunk=[-74,126.5];for(let[ut,Ft]of[[-76.9,117.6],[-73.8,116]])n.add(_t(.34,.44,7,9,1.2),e.barkOak,ut,o(ut,Ft)+3.4,Ft),t.addCircle(ut,Ft,.44),H.push([ut,Ft,1.1]);let K=110.6,nt=o(-75.4,K);n.add(_t(.2,.24,6.6,9,1.2),e.barkOak,-75.4,nt+.2,K,0,-.05,Math.PI/2),t.addOBB(-75.4,K,3.3,.24,.05,-50,nt+.42,{label:"Stamm vor dem Tor (springen)"}),H.push([-75.4,K,1])}P.add(1,-69.6,o(-69.6,136.4),136.4,1.15,.7),t.addCircle(-69.6,136.4,.52),H.push([-69.6,136.4,1.2]),h.branchTree=[-69.6,136.4];for(let[F,C]of E){if(v.some(ut=>ut[0]===F&&ut[1]===C))continue;let K=[0,3,5][l()*3|0],nt=P.add(K,F,o(F,C),C,.9,l()*6);t.addCircle(F,C,nt),H.push([F,C,1])}let X=2.5;for(let F=-112;F<44;F+=X)for(let C=-82;C<176;C+=X){let K=F+(l()-.5)*X*.9,nt=C+(l()-.5)*X*.9;if(K<-78.6||nt<-72&&Math.abs(K)<34||nt<-76)continue;let ut=k(K,nt);if(ut<.9||ut>30||l()>(ut<7?.85:.62)||N(K,nt,.9))continue;let Ft,Bt=l();Bt<.36?Ft=l()*3|0:Bt<.66?Ft=3+(l()*2|0):Ft=5+(l()*2|0);let $t=.75+l()*.5,at=P.add(Ft,K,o(K,nt),nt,$t,l()*6.28);ut<9&&t.addCircle(K,nt,at),H.push([K,nt,.8])}for(let F=-112;F<44;F+=1.35)for(let C=-80;C<176;C+=1.35){let K=F+(l()-.5)*1.1,nt=C+(l()-.5)*1.1;if(K<-78.6||nt<-74)continue;let ut=k(K,nt);if(!(ut<.5||ut>4.5)&&!(l()>.55)&&!N(K,nt,.35)){if(l()<.6)P.add(I.length-2,K,o(K,nt),nt,.6+l()*.7,l()*6);else{let Ft=P.add(3+(l()*4|0),K,o(K,nt),nt,.55+l()*.35,l()*6);ut<6&&t.addCircle(K,nt,Ft)}H.push([K,nt,.35])}}P.build(s);let Z=new is(ss(2.2,1.6,3),e.leafBush),$=new is(ss(1.2,.8,3),e.fern,36,!1),et=new is(ss(1,.45,2),e.grass,36,!1);{let F=(nt,ut)=>{for(let Ft=0;Ft<nt.length-1;Ft++){let[Bt,$t]=nt[Ft],[at,pe]=nt[Ft+1],Ie=Math.hypot(at-Bt,pe-$t);if(Ie<.01)continue;let me=-(pe-$t)/Ie,Ye=(at-Bt)/Ie;for(let Se=0;Se<Ie;Se+=.9)for(let $e of[-1,1])for(let Fe of[0,1]){if(Fe&&l()<.45)continue;let Oe=ut+(Fe?1.7+l()*.8:.85+l()*.6),q=Bt+(at-Bt)*Se/Ie+me*Oe*$e+(l()-.5)*.4,ze=$t+(pe-$t)*Se/Ie+Ye*Oe*$e+(l()-.5)*.4;k(q,ze)<.45||q<-78.7||Z.add(q,o(q,ze)-.05,ze,1+l()*.55,l()*6)}}};F(Mt.schneise,2.6),Mt.branches.forEach(nt=>F(nt,1.25)),F(Mt.corridor,3),F(Mt.escape,3),F([[-27,-72.5],[-27,-29.5],[27,-29.5],[27,-72.5]],0);let[C,K]=Mt.clearing;for(let nt=0;nt<Math.PI*2;nt+=.09){let ut=10.4+l()*.8,Ft=C+Math.cos(nt)*ut,Bt=K+Math.sin(nt)*ut;k(Ft,Bt)>.45&&Z.add(Ft,o(Ft,Bt)-.05,Bt,1+l()*.5,l()*6)}for(let[nt,ut]of S)Z.add(nt,o(nt,ut)-.05,ut,1.3,l()*6)}for(let F=0;F<26e3;F++){let C=-105+l()*148,K=-78+l()*254;if(C<-78.6||K<-72&&Math.abs(C)<34)continue;let nt=k(C,K);nt>24||(nt>.3&&l()<.22?Z.add(C,o(C,K)-.05,K,.7+l()*.8,l()*6):nt>-.6&&l()<.5?$.add(C,o(C,K)-.02,K,.6+l()*.8,l()*6):nt>-1.2&&nt<2&&l()<.3&&et.add(C,o(C,K),K,.8+l()*.6,l()*6))}for(let F=0;F<70;F++){let C=(l()-.5)*60,K=-73+l()*2.5;Z.add(C,0,K,.8+l()*.5,l()*6)}Z.build(s),$.build(s),et.build(s);let J=new Yt(1,1);J.rotateX(-Math.PI/2),J.translate(0,.03,0);let st=new is(J,e.litter,36,!1),ft=_t(.012,.02,1,4,1);ft.rotateZ(Math.PI/2);let Dt=new is(ft,e.barkOak,36,!1);for(let F=0;F<16e3;F++){let C=-80+l()*115,K=-76+l()*225,nt=k(C,K);nt>3||nt<-3.2||(l()<.6?st.add(C,o(C,K),K,.5+l()*.9,l()*6):l()<.18&&Dt.add(C,o(C,K)+.02,K,.4+l()*.9,l()*6))}st.build(s),Dt.build(s);for(let F=0;F<90;F++){let C=-80+l()*115,K=-28+l()*200,nt=k(C,K);if(nt<.4||nt>8)continue;let ut=.15+l()*.4;n.add(new Cr(ut,1),e.rock,C,o(C,K)+ut*.3,K,l(),l(),l(),1,.6,1)}t.tag="Totholz";for(let F=0;F<160;F++){let C=-78+l()*120,K=-28+l()*200,nt=k(C,K);if(nt<.6||nt>16)continue;let ut=2+l()*6,Ft=.12+l()*.25;n.add(_t(Ft*.8,Ft,ut,7,1.2),e.barkOak,C,o(C,K)+Ft*.8,K,0,l()*6,Math.PI/2)}for(let[F,C,K]of[[-31,80.6,.4],[-52.5,84.3,1.4],[-68,104.2,.1]])n.add(_t(.2,.26,4.2,8,1.2),e.barkOak,F,o(F,C)+.2,C,0,K,Math.PI/2),t.addOBB(F,C,2.1,.25,-K,-50,o(F,C)+.42);t.tag="Wildzaun";let zt=Mt.fenceX;for(let F=70;F<=170;F+=3)n.add(_t(.07,.08,2.5,7,1),e.wood,zt,o(zt,F)+1.15,F);for(let F=70;F<170;F+=3){if(F+3>Mt.gateZ-.8&&F<Mt.gateZ+.8)continue;let C=(o(zt,F)+o(zt,F+3))/2;n.add(Ze(3,2.2,.5),e.wire,zt,C+1.1,F+1.5,0,Math.PI/2,0,1,1,1,{cast:!1})}t.addBox(zt-.12,zt+.12,60,Mt.gateZ-.8),t.addBox(zt-.12,zt+.12,Mt.gateZ+.8,175);for(let[F,C]of[[Mt.gateZ-2,Mt.gateZ-.8],[Mt.gateZ+.8,Mt.gateZ+1]]){let K=o(zt,F);n.add(Ze(C-F,2.2,.5),e.wire,zt,K+1.1,(F+C)/2,0,Math.PI/2,0,1,1,1,{cast:!1})}for(let F of[Mt.gateZ-.85,Mt.gateZ+.85])n.add(_t(.1,.11,2.7,8,1),e.darkWood,zt,o(zt,F)+1.3,F);h.objects.gate=Fy(s,t,zt,o(zt,Mt.gateZ),Mt.gateZ);for(let[F,C,K]of[[-120,96,3],[-128,118,2.5],[-140,108,4],[-112,132,2]]){let nt=dn(16756848,K,.35,!1);nt.position.set(F,3+l()*3,C),s.add(nt)}t.tag="Bach/Gasse/G\xE4rten",Oy(n,e,s,t,i),t.tag="Weltgrenze (Waldwand)";let it={minX:-110,maxX:44,minZ:-80,maxZ:178},Tt=26,kt=(F,C,K,nt)=>{let ut=new W(Ze(K,Tt,26),e.fwall);ut.position.set(F,Tt/2-2,C),ut.rotation.y=nt,s.add(ut)};return kt((it.minX+it.maxX)/2,it.maxZ,it.maxX-it.minX,Math.PI),kt(it.maxX,(it.minZ+it.maxZ)/2,it.maxZ-it.minZ,-Math.PI/2),kt(-79.3,170,30,Math.PI/2),t.addBox(it.minX-5,it.maxX+5,it.maxZ,it.maxZ+3),t.addBox(it.maxX,it.maxX+3,it.minZ,it.maxZ),n.build(s),h.objects.fogPuffs=By(s),h.mapData={lines:[{pts:[[0,-72],...Mt.schneise],color:"#c9b88a",width:5},{pts:[[-30,-40],[-60,20],[-90,60],[-90,180]],color:"#7a6a4a",width:2,dash:[3,4]},{pts:[[-85.5,40],[-85.5,180]],color:"#b8a678",width:3},{pts:[[-83.2,40],[-83.2,180]],color:"#3a6ea8",width:3},{pts:[[-79,60],[-79,180]],color:"#888",width:1.5,dash:[2,2]},{pts:[[-87,106],[-126,106]],color:"#b8a678",width:3},{pts:[[-126,106],[-126,40],[-60,-60],[0,-150]],color:"#d8d0b8",width:4},{pts:[[-12,-152],[12,-152]],color:"#d8d0b8",width:4},{pts:[[0,-152],[0,-72]],color:"#d8d0b8",width:4}],labels:[{t:"Goetheturm",x:15,z:-50},{t:"H\xFCgelschneise",x:3,z:20},{t:"Tor",x:-78,z:104},{t:"Kleing\xE4rten",x:-120,z:100},{t:"Bach",x:-82,z:80},{t:"Wendelsweg",x:3,z:-120}]},{terrain:i,sd:k}}function Ay(s){let t=new Ae(900,32,16),e=new vn({side:An,depthWrite:!1,fog:!1,uniforms:{time:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
      void main(){
        float y = max(vP.y, 0.0);
        vec3 zen = vec3(0.006,0.008,0.014), hor = vec3(0.02,0.022,0.03);
        vec3 c = mix(hor, zen, pow(y, 0.45));
        // Stadtgl\xFChen im Norden
        float north = max(0.0, -vP.z);
        c += vec3(0.09,0.05,0.025) * pow(north, 1.6) * pow(1.0 - y, 4.0);
        // Wolken
        vec2 q = vP.xz / (vP.y + 0.25) * 2.0;
        float cl = n(q) * 0.6 + n(q * 2.3) * 0.3 + n(q*5.1)*0.1;
        // Mond hinter d\xFCnnen Wolken
        vec3 md = normalize(vec3(-0.5, 0.42, 0.62));
        float mdot = max(dot(normalize(vP), md), 0.0);
        float cover = smoothstep(0.5, 0.85, cl);
        c += vec3(0.85, 0.88, 0.95) * smoothstep(0.99935, 0.99965, mdot) * (1.0 - cover * 0.75);
        c += vec3(0.1, 0.13, 0.2) * (pow(mdot, 220.0) * 1.2 + pow(mdot, 14.0) * 0.12) * (1.0 - cover * 0.4);
        // vom Mond angeleuchtete Wolkenr\xE4nder
        c += vec3(0.05, 0.06, 0.08) * cover * pow(mdot, 6.0);
        c += vec3(0.02,0.019,0.022) * smoothstep(0.45, 0.85, cl) * smoothstep(0.0, 0.3, y) + vec3(0.03,0.018,0.01) * smoothstep(0.45, 0.85, cl) * pow(north, 2.0) * (1.0 - y);
        gl_FragColor = vec4(c, 1.0);
      }`}),n=new W(t,e);n.renderOrder=-10,n.frustumCulled=!1,s.add(n),h.objects.sky=n}function nu(s,t,e,n,i,r,a,o,l,c,u){let d=a,p=o,m,x,g;(c==="east"||c==="west")&&(d=o,p=a),s.add(z(d,10,p,3),t.plaster,i,10/2,r);let y=Ms(c==="south"?d:p,3.6,c==="south"?p:d,2);c==="south"?s.add(y,t.roof,i,10,r):s.add(y,t.roof,i,10,r,0,Math.PI/2,0);let b=Of(l),w=new xe({map:b}),S=new W(new Yt(a,10-.6),w);c==="east"?(m=i+d/2+.02,x=r,g=Math.PI/2):c==="west"?(m=i-d/2-.02,x=r,g=-Math.PI/2):(m=i,x=r+p/2+.02,g=0),S.position.set(m,10/2+.4,x),S.rotation.y=g,S.receiveShadow=!0,e.add(S);{let E=c==="east"?1:c==="west"?-1:0,_=c==="south"?1:0,M=_?1:0,I=_?0:1,P=c==="south"?0:Math.PI/2,O=(k,H,N)=>[m+M*k+E*N,H,x+I*k+_*N];for(let k=0;k<3;k++){let H=.4+9.4*((2-k)*170+28+116+4)/512*-1+4.7+5-4.7;for(let N=0;N<3;N++){let X=-a/2+a*((50+N*160+40)/512);s.add(z(a*96/512,.06,.16,1),t.concrete,...O(X,.7+(10-.6)*(1-(k*170+28+120)/512),.08),0,P,0)}s.add(z(a,.1,.1,1),t.plaster,...O(0,.7+(10-.6)*(1-(k*170+163)/512),.05),0,P,0)}s.add(z(a+.1,.5,.08,1),t.concrete,...O(0,.25,.04),0,P,0),s.add(_t(.05,.05,10,8,1),t.darkMetal,...O(a/2-.25,10/2,.1))}n.addBox(i-d/2,i+d/2,r-p/2,r+p/2);let v=c==="east"?1:c==="west"?-1:0;if(v){let E=i+v*(d/2+.03);if(s.add(z(.1,2.25,1.15,1),t.darkWood,E,1.42,r),s.add(z(.6,.15,1.6,1),t.concrete,E+v*.3,.22,r),s.add(z(.6,.15,1.6,1),t.concrete,E+v*.9,.08,r),s.add(z(.9,.06,1.6,1),t.darkWood,E+v*.4,2.8,r),u){n.addFloor(Math.min(E,E+v*.6),Math.max(E,E+v*.6),r-.8,r+.8,.3),n.addFloor(Math.min(E+v*.6,E+v*1.2),Math.max(E+v*.6,E+v*1.2),r-.8,r+.8,.15);let _=Sn([{t:"17",font:"bold 90px Arial"}],.22,.16,{w:128,h:96,bg:"#1a2a4a",fg:"#eee",border:"#eee",worn:!1});_.position.set(E+v*.02,2.5,r+.85),_.rotation.y=v>0?Math.PI/2:-Math.PI/2,e.add(_);let M=new W(new Xe(.12,.18,.12),$n(16769200));M.position.set(E+v*.1,2.55,r-.75),e.add(M);let I=dn(16767136,1.2,.5);I.position.copy(M.position),e.add(I),h.objects.porch=n.addLamp({pos:[E+v*.6,2.4,r-.6],color:16765088,intensity:7,distance:9}),h.objects.porchMeshes=[M,I]}}}function bp(s,t,e,n,i,r,a){s.add(_t(.07,.1,6,8,1),t.darkMetal,i,3,r),s.add(z(1.4,.08,.08,1),t.darkMetal,i+a*.6,5.95,r),s.add(z(.6,.15,.32,1),t.darkMetal,i+a*1.2,5.9,r);let o=new W(new Yt(.5,.25),$n(16765594));o.rotation.x=Math.PI/2,o.position.set(i+a*1.2,5.81,r),e.add(o);let l=dn(16756848,3.4,.45);l.position.set(i+a*1.2,5.6,r),e.add(l),n.addLamp({pos:[i+a*1.2,5.6,r],color:16757882,intensity:75,distance:22,visibleDist:60}),n.addCircle(i,r,.15)}function Ry(s,t,e,n,i,r){s.add(_t(.15,.22,4,8,1.2),t.barkOak,i,2,r);for(let o=0;o<6;o++){let l=o/6*Math.PI*2;s.add(_t(.04,.08,2.4,5,1),t.barkOak,i+Math.cos(l)*.6,4.6,r+Math.sin(l)*.6,Math.cos(l)*.6,0,-Math.sin(l)*.6)}let a=new is(ss(3,3,3),t.leafOak);a.add(i,3.4,r,1,.3),a.build(e),n.addCircle(i,r,.25)}function iu(s,t,e,n,i,r,a,o=!1){s.add(_t(.06,.08,3.8,8,1),t.darkMetal,i,1.9,r),s.add(_t(.22,.12,.45,6,1),t.darkMetal,i,4,r);let l=new W(new Ae(.12,8,6),$n(o?2236962:16773328));l.position.set(i,3.8,r),e.add(l);let c=dn(16769200,2.4,o?0:.4);if(c.position.set(i,3.8,r),e.add(c),n.addCircle(i,r,.12),o)return null;let u=n.addLamp({pos:[i,3.7,r],color:16769720,intensity:32,distance:16,flicker:a});return u.meshes=[l,c],a&&h.world.updaters.push((f,d)=>{let p=a(d);l.material.color.setScalar(p>.5?1:.15),c.material.opacity=.4*p}),u}function Cy(s,t,e,n,i,r){let u=b=>6.2+-2.9000000000000004*(b/40),f=(b,w)=>{let S=b/8*Math.PI*2+Math.PI/8;return[i+Math.cos(S)*u(w),w,r+Math.sin(S)*u(w)]},d=t.planksTower;for(let b=0;b<10;b++){let w=b/10*40,S=(b+1)/10*40;for(let v=0;v<8;v++){Mn(s,d,f(v,w),f(v,S),.32);let E=(v+1)%8;Mn(s,d,f(v,S),f(E,S),.22),Mn(s,d,f(v,w),f(E,S),.14),Mn(s,d,f(E,w),f(v,S),.14)}}for(let b=1;b<10;b++){let w=b*4;s.add(_t(1.8,1.8,.12,8,1),d,i,w,r),Mn(s,d,[i-1.4,w-4,r-.8],[i+1.4,w,r-.8],.25,.9)}s.add(_t(3.3+.6,3.3+.6,.25,8,1),d,i,40,r,0,Math.PI/8,0);for(let b=0;b<8;b++){let w=f(b,40);Mn(s,d,w,[w[0],40+2.4,w[2]],.2)}s.add(_t(.2,3.3+1.2,2.4,8,2),t.felt,i,40+3.4,r,0,Math.PI/8,0);let p=new W(new Ne(3.3+.15,u(26)+.15,14+1.1,8,1,!0),t.wire);p.position.set(i,(66+1.1)/2,r),p.rotation.y=Math.PI/8,e.add(p);for(let b=0;b<8;b++){let w=f(b,0);s.add(z(.9,.5,.9,1),t.concrete,w[0],.2,w[2]),n.addCircle(w[0],w[2],.5)}let m=18,x=9;for(let b=0;b<m;b++){let w=b/m*Math.PI*2,S=(b+1)/m*Math.PI*2,v=i+Math.cos(w)*x,E=r+Math.sin(w)*x,_=i+Math.cos(S)*x,M=r+Math.sin(S)*x,I=(v+_)/2,P=(E+M)/2,O=Math.hypot(_-v,M-E),k=-Math.atan2(M-E,_-v);s.add(Ze(O,2,0),t.bauzaun,I,1.12,P,0,k,0,1,1,1,{cast:!1}),s.add(z(.6,.15,.25,1),t.concrete,v,.08,E,0,k,0),n.addOBB(I,P,O/2,.12,-k)}let g=Sn([{t:"GOETHETURM",font:"bold 50px Georgia"},{t:"Vom 01.11. bis 31.03.",font:"34px Arial"},{t:"GESCHLOSSEN",font:"bold 44px Arial",color:"#b01010"}],1.2,.8,{w:384,h:256}),y=Math.PI*.72;g.position.set(i+Math.cos(y)*(x-.06),1.3,r+Math.sin(y)*(x-.06)),g.rotation.y=-y-Math.PI/2,e.add(g),h.towerSign=g.position.clone()}function Py(s,t,e,n,i,r){s.add(z(7,3.2,4.5,2),t.plasterW,i,1.6,r),s.add(z(8,.25,5.5,2),t.darkWood,i,3.3,r);let a=new W(Ze(5,1.6,2),t.shutter);a.position.set(i+.4,1.7,r+2.26),e.add(a),n.addBox(i-3.5,i+3.5,r-2.25,r+2.25);for(let[o,l]of[[-12,-60],[-16,-58.5],[-20,-60]]){s.add(z(2.2,.06,.7,1),t.wood,o,.75,l);for(let c of[-.65,.65])s.add(z(2.2,.05,.28,1),t.wood,o,.45,l+c);for(let c of[-.9,.9])s.add(z(.06,.75,1.6,1),t.darkMetal,o+c,.37,l);n.addBox(o-1.1,o+1.1,l-.8,l+.8,-1,.8)}}function Iy(s,t,e,n,i){for(let[a,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])s.add(z(.14,3.6,.14,1),t.planksTower,n+a,1.8,i+o),e.addCircle(n+a,i+o,.12);s.add(z(2.1,.1,2.1,1),t.planksTower,n,1.5,i);for(let a of[-1,1])s.add(z(2.1,.5,.06,1),t.planksTower,n,1.85,i+a*1.02);s.add(Ms(2.4,1,2.4,1),t.felt,n,3.6,i);let r=3.4;Mn(s,tt("slide",{color:8006174}),[n+1.05,1.5,i],[n+1.05+2.8,.25,i],.06,.6);for(let a=0;a<5;a++)s.add(z(.5,.05,.06,1),t.wood,n-1.05-a*.13,.3+a*.3,i,.4,Math.PI/2,0)}function Ly(s,t,e,n,i,r){for(let o of[-1,1])Mn(s,t.planksTower,[i+o*1.8,0,r-.8],[i+o*1.8,2.6,r],.14),Mn(s,t.planksTower,[i+o*1.8,0,r+.8],[i+o*1.8,2.6,r],.14),n.addCircle(i+o*1.8,r-.8,.12),n.addCircle(i+o*1.8,r+.8,.12);Mn(s,t.planksTower,[i-1.9,2.6,r],[i+1.9,2.6,r],.16);let a=[];for(let o of[-.8,.8]){let l=new ee;l.position.set(i+o,2.55,r);for(let u of[-.22,.22]){let f=new W(new Ne(.01,.01,2,4),t.metal);f.position.set(u,-1,0),l.add(f)}let c=new W(new Xe(.5,.05,.2),tt("seat",{color:2236962}));c.position.y=-2,c.castShadow=!0,l.add(c),e.add(l),a.push(l)}return h.world.updaters.push((o,l)=>{a[0].rotation.x=Math.sin(l*1.1)*.12+Math.sin(l*.37)*.05,a[1].rotation.x=Math.sin(l*.8+1)*.03}),a}function Dy(s,t,e,n,i){s.add(z(1.2,.5,1.2,1),t.concrete,n,.25,i),s.add(_t(.12,.14,1.2,8,1),t.rust,n,1.1,i),Mn(s,t.rust,[n,1.6,i],[n+.7,1.9,i],.05),Mn(s,t.rust,[n-.15,1.5,i],[n-.35,1.45,i],.07);for(let r=0;r<3;r++){let a=n-1.2-r*1.5,o=.6-r*.12,l=i+r%2*.4;s.add(z(1.6,.18,.3,1),t.planksTower,a,o,l),s.add(z(.12,o,.12,1),t.planksTower,a,o/2,l)}s.add(z(1.6,.3,1.6,1),t.concrete,n-5.6,.15,i+.3),e.addBox(n-.6,n+.6,i-.6,i+.6,-1,1.5),e.addBox(n-6.4,n-.6,i-.4,i+1.1,-1,.7)}function ky(s,t,e,n,i){for(let[r,a]of[[-.9,-.9],[.9,-.9],[-.7,.7],[.7,.7]])Mn(s,t.barkPine,[e+r*1.3,n,i+a*1.3],[e+r,n+4.5,i+a],.16);s.add(z(1.9,.08,1.9,1),t.planksOld,e,n+4,i),s.add(z(1.9,1,.06,1),t.planksOld,e,n+4.5,i-.95),s.add(z(.06,1,1.9,1),t.planksOld,e-.95,n+4.5,i),s.add(z(.06,1,1.9,1),t.planksOld,e+.95,n+4.5,i),s.add(Ms(2.3,.7,2.3,1),t.felt,e,n+5.5,i);for(let r=0;r<9;r++)s.add(z(.6,.05,.08,1),t.barkPine,e-1.6+r*.05,n+.4+r*.42,i,0,Math.PI/2,0);Mn(s,t.barkPine,[e-2,n,i-.3],[e-1.1,n+4,i-.3],.08),Mn(s,t.barkPine,[e-2,n,i+.3],[e-1.1,n+4,i+.3],.08)}function Ny(s,t,e,n,i){let r=new ee,a=new W(new qn(.42,.03,4,18),tt("tapeKnot",{color:11149336,emissive:1049090}));a.rotation.x=Math.PI/2,a.scale.set(1,1,3),r.add(a);let o=[];for(let l of[-1,1]){let c=new W(new Yt(.07,.75),tt("tapeEnd",{map:sc(),side:ye,emissive:1573892}));c.geometry.translate(0,-.37,0),c.position.set(.44,0,l*.05),c.rotation.z=l*.2,r.add(c),o.push(c)}return r.position.set(t,e,n),r.rotation.y=i,s.add(r),h.world.updaters.push((l,c)=>{o[0].rotation.x=Math.sin(c*2.3+t)*.35,o[1].rotation.x=Math.sin(c*1.9+n)*.3}),r}function Uy(s,t,e,n,i){let r=new ee,a=Ce(5),o=[];for(let f=0;f<9;f++){let d=1.6+a()*1.6,p=new W(new Ne(.03,.07,d,5),tt("barkOakD",{map:ns("oak")}));p.position.set((a()-.5)*.6,.3+a()*.9,(a()-.5)*1.6),p.rotation.set(a()*.8,a()*3,Math.PI/2-.3+a()*.6),p.castShadow=!0,r.add(p),o.push(p);let m=new W(ss(1,.8,2),new xe({map:Fi("bush"),alphaTest:.45,side:ye}));m.position.copy(p.position),m.position.y-=.3,r.add(m),o.push(m)}r.position.set(e,n,i),s.add(r);let l=t.addBox(e-.5,e+.5,i-1.4,i+1.4),c=-1,u={g:r,col:l,clear(f=!1){if(l.enabled=!1,f){r.visible=!1;return}c=0},reset(){l.enabled=!0,r.visible=!0,c=-1,o.forEach((f,d)=>{f.userData.o=f.userData.o||f.position.clone(),f.position.copy(f.userData.o)})}};return o.forEach(f=>{f.userData.o=f.position.clone(),f.userData.v=new U((a()-.5)*.8,0,(a()>.5?1:-1)*(1.2+a()))}),h.world.updaters.push(f=>{if(!(c<0||c>1.2)){c+=f;for(let d of o)d.position.addScaledVector(d.userData.v,f*1.1),d.position.y=Math.max(.05,d.position.y-f*.6)}}),u}function Fy(s,t,e,n,i){let r=new ee;r.position.set(e,n,i-.8);let a=tt("gateWood",{map:vs("old")}),o=(x,g,y,b,w,S,v=a)=>{let E=new W(z(x,g,y,.5),v);return E.position.set(b,w,S),E.castShadow=!0,r.add(E),E};o(.08,.1,1.6,0,.3,.8),o(.08,.1,1.6,0,1.9,.8),o(.08,1.7,.1,0,1.1,.05),o(.08,1.7,.1,0,1.1,1.55);let l=new W(Ze(1.5,1.6,.5),tt("wire",{}));l.material=h.M.wire,l.position.set(0,1.1,.8),l.rotation.y=Math.PI/2,r.add(l);let c=tt("chain",{color:6974052});for(let x=0;x<6;x++){let g=new W(new qn(.03,.008,4,8),c);g.position.set(.05,1.15-x*.04,1.58+x%2*.01),g.rotation.y=x%2*Math.PI/2,r.add(g)}let u=new W(new Xe(.06,.08,.035),tt("brass",{color:9072688}));u.position.set(.06,.9,1.6),r.add(u),s.add(r);let f=t.addBox(e-.12,e+.12,i-.85,i+.85),d=t.addRegionBox(-82.5,-78.2,i-.85,i+.85,{enabled:!1}),p=0,m=0;return h.world.updaters.push(x=>{m+=(p-m)*(1-Math.exp(-4*x)),r.rotation.y=m}),{hinge:r,lock:u,col:f,reg:d,lockPos:new U(e+.1,n+.95,i+.8),open(){p=-1.75,f.enabled=!1,d.enabled=!0,u.visible=!1},close(){p=0,f.enabled=!0},reset(){p=0,m=0,f.enabled=!0,d.enabled=!1,u.visible=!0}}}function Oy(s,t,e,n,i){let r=(M,I)=>i.height(M,I),a=Mt.streamX,o=new W(Ze(2.2,140,3),t.water);o.rotation.x=-Math.PI/2,o.position.set(a,-.42,110),e.add(o),h.world.updaters.push((M,I)=>{t.water.map.offset.y=I*.25});for(let M=0;M<40;M++){let I=70+Math.random()*80;s.add(new Cr(.15+Math.random()*.2,0),t.concrete,a+(Math.random()-.5)*1.6,-.45,I,Math.random(),Math.random(),0)}let l=Math.max(r(a+.9,Mt.gateZ),r(a-.9,Mt.gateZ));n.addBox(a-.5,a+.5,60,170,-5,l+.55,{label:"Bach (mit Anlauf springen)"}),n.addRegionBox(-82.3,-78.3,Mt.gateZ-1.3,Mt.gateZ+1.3,{enabled:!1,id:"bank"}),n.addRegionBox(-87.6,-81.8,Mt.gateZ-2.2,Mt.gateZ+2.2,{enabled:!1,id:"stream"}),n.addRegionBox(-105,-86,104.7,107.3,{enabled:!1,id:"alley"}),n.addRegionBox(-127.5,-104,104.7,107.3,{enabled:!1,id:"gardens"});let c=new W(Vr(i,[[-85.6,60],[-85.6,160]],2.4,1,.03),t.gravel);c.receiveShadow=!0,e.add(c);let u=new W(Vr(i,[[-86.5,106],[-127,106]],2.6,1,.03),t.gravel);u.receiveShadow=!0,e.add(u),n.addSurface(-130,-84.3,100,112,"gravel");for(let M of[104.4,107.6])s.add(z(18,3.4,.4,2.5),t.brick,-95.5,1.7,M),n.addBox(-104.5,-86.5,M-.2,M+.2);for(let[M,I,P]of[[-91,110.5,7],[-99.5,110.5,8],[-95,101.4,10]]){s.add(z(P,8,5.6,2.5),t.brick,M,4,I),s.add(Ms(P,2.8,5.6,2),t.roof,M,8,I);for(let O=0;O<Math.floor(P/2.4);O++)for(let k of[4.2,6.6]){let H=new W(new Yt(.9,1.3),t.glass),N=I>106?I-2.81:I+2.81;H.position.set(M-P/2+1.4+O*2.4,k,N),H.rotation.y=I>106?Math.PI:0,e.add(H)}}for(let[M,I,P]of[[-87.48,4.2,109.2],[-87.48,6.6,111.6]]){let O=new W(new Yt(.9,1.3),$n(9067050));O.position.set(M,I,P),O.rotation.y=Math.PI/2,e.add(O);let k=dn(16754784,2.2,.25);k.position.set(M+.3,I,P),e.add(k)}let f=new W(new Xe(.2,.25,.15),$n(16764040));f.position.set(-96,2.6,107.35),e.add(f);let d=dn(16755296,1.3,.45);d.position.copy(f.position),e.add(d),n.addLamp({pos:[-96,2.4,107],color:16756848,intensity:6,distance:9,flicker:M=>Math.sin(M*7.3)>.97?.2:1});let p=Ce(77);for(let M=-106;M>-127;M-=3)for(let I of[104.4,107.6])I===104.4&&M<=-109&&M>=-118||yp(s,t,M,I,3);for(let[M,I]of[[-110,111.5],[-120,112],[-104.5,99.5],[-124,99.5]])vp(s,t,M,I,p);for(let[M,I,P]of[[-108,109.5,4],[-116,109.2,5],[-123,109.6,3],[-106,102,3],[-121,102,5]])s.add(z(P,1.8,.9,1),t.hedgeBox,M,.9,I);n.addBox(-128,-104,107.5,108),n.addBox(-128,-104,104,104.5);for(let M=-118;M<-109;M+=3)yp(s,t,M+3,104.4,3,.9);let m=new ee,x=new W(new Rr(.12,.3,8),tt("gnomeB",{color:2771578}));x.position.y=.15,m.add(x);let g=new W(new Ae(.07,8,6),tt("gnomeF",{color:13146746}));g.position.y=.34,m.add(g);let y=new W(new Rr(.07,.2,8),tt("gnomeH",{color:10099220}));y.position.y=.48,m.add(y),m.position.set(-107.2,0,105),m.rotation.y=.5,e.add(m);let b=new ee,w=new W(new Xe(.3,.22,.12),tt("flood",{color:2236962}));b.add(w);let S=new W(new Yt(.26,.18),new Be({color:1118481}));S.position.z=.065,b.add(S),b.position.set(-113,2.6,100.32),b.rotation.x=-.4,e.add(b),vp(s,t,-113,99,p,!0);let v=n.addLamp({pos:[-113,2.4,101.4],color:16054015,intensity:0,distance:16,enabled:!0,level:0}),E=dn(16777215,2.2,0);E.position.set(-113,2.6,100.5),e.add(E);let _=zy(e,-114.4,0,103.3);h.objects.flood={on(){S.material.color.set(16777215),v.intensity=120,v.level=1,E.material.opacity=.9},off(){S.material.color.set(1118481),v.intensity=0,v.level=0,E.material.opacity=0},scarecrow:_};{let M=tt("binGreen",{color:2046506});s.add(z(1.15,.62,.66,1),M,-92,.33,105.35,.05,.1,Math.PI/2*0),s.add(z(.06,.66,.7,1),M,-91.4,.33,105.1,0,.5,0),n.addBox(-92.6,-91.4,104.6,106,-50,.75,{label:"Umgekippte Tonne"});for(let k=0;k<6;k++)s.add(z(1.2,.14,.95,1),t.planksTower,-97,.08+k*.17,106.75,0,k%2*.12,0);n.addBox(-97.7,-96.3,106.15,107.4,-50,1.2,{label:"Paletten"});let I=t.brick;for(let k=0;k<18;k++)s.add(z(.24,.08,.12,1),I,-101.5+(p()-.5)*.7,.05+p()*.22,104.8+p()*2.4,p(),p()*3,p());s.add(z(.25,.3,2.6,1),tt("rubble",{color:4866104}),-101.5,.15,106,0,0,.12),n.addBox(-101.75,-101.25,104.6,107.4,-50,.36,{label:"Schutt (springen)"});let P=tt("wheelbarrow",{color:4872762});s.add(z(.62,.26,.9,1),P,-106.45,.34,105.55,0,0,-.08),s.add(z(.5,.04,.78,1),t.black,-106.45,.47,105.55,0,0,-.08);for(let k of[-.24,.24])s.add(_t(.022,.022,1,6,1),t.metal,-106.1,.38,105.55+k,0,0,Math.PI/2-.22),s.add(_t(.02,.02,.3,6,1),t.metal,-105.95,.15,105.55+k);s.add(_t(.16,.16,.08,12,1),t.black,-106.95,.16,105.55,Math.PI/2,0,0);let O=tt("terracotta",{color:10113590});for(let k=0;k<6;k++)s.add(_t(.13,.095,.22,8,1),O,-106.55+(p()-.5)*.45,.11,106.35+k*.19,0,0,k%3===2?1.45:0);s.add(z(.5,.3,.4,1),tt("crate",{color:6967858}),-106.5,.15,104.85),n.addBox(-107,-105.7,104.5,107.5,-50,.45,{label:"Schubkarre (springen)"});for(let k of[104.55,107.45])s.add(_t(.03,.03,2.1,6,1),t.metal,-109.4,1.05,k);s.add(_t(.006,.006,2.9,4,1),t.white,-109.4,2,106,Math.PI/2,0,0);for(let[k,H,N]of[[105,.9,14210248],[105.95,.8,9083568],[106.85,.85,13154472]]){let X=new W(new Yt(H,.75),new xe({color:N,side:ye}));X.position.set(-109.4,1.6,k),X.rotation.y=Math.PI/2,e.add(X)}n.addBox(-109.6,-109.2,104.5,107.5,1.22,2,{label:"W\xE4scheleine (ducken)"})}{let M=ss(1.2,1.3,2);for(let I=-87.4;I<-78.8;I+=.9)for(let P of[103.5-p()*.4,108.5+p()*.4])s.add(M,t.grass,I+(p()-.5)*.4,r(I,P)-.05,P,0,p()*6,0,1+p()*.6,1+p()*.8,1,{cast:!1})}bp(s,t,e,n,-126.2,108.2,1)}function yp(s,t,e,n,i,r=1.1){let a=t.planksTower;s.add(z(.08,r+.2,.08,1),a,e,(r+.2)/2,n);for(let o=0;o<4;o++){let l=[e-o*i/4,.1,n],c=[e-(o+1)*i/4,r,n];Mn(s,a,l,c,.05,.02),Mn(s,a,[l[0],r,n],[c[0],.1,n],.05,.02)}}function vp(s,t,e,n,i,r=!1){s.add(z(3,2.3,2.4,1),t.planksOld,e,1.15,n),s.add(Ms(3.4,.9,2.8,1),t.felt,e,2.3,n,0,Math.PI/2,0),s.add(z(.06,.6,.8,1),t.glass,e+1.52,1.4,n),r?s.add(_t(.35,.3,.9,10,1),tt("barrel",{color:1718826}),e-2,.45,n+1.4):s.add(z(1.5,1,.6,1),tt("compost",{color:3811866}),e+2.4,.5,n+.6)}function zy(s,t,e,n){let i=new ee,r=tt("scWood",{color:4864552}),a=new W(new Ne(.04,.05,2,6),r);a.position.y=1,i.add(a);let o=new W(new Ne(.03,.03,1.5,6),r);o.rotation.z=Math.PI/2,o.position.y=1.45,i.add(o);let l=new W(new Ne(.28,.42,1,8,1,!0),new xe({color:2894370,side:ye}));l.position.y=1.1,i.add(l);for(let f of[-1,1]){let d=new W(new Ne(.09,.13,.6,6,1,!0),l.material);d.rotation.z=f*(Math.PI/2-.15),d.position.set(f*.45,1.42,0),i.add(d)}let c=new W(new Ae(.17,12,10),new xe({map:Kf()}));c.position.y=1.82,c.rotation.y=-Math.PI/2,c.scale.set(1,1.15,1),i.add(c);let u=new W(new Ne(.12,.3,.2,10),new xe({color:1709586}));return u.position.y=2.02,i.add(u),i.position.set(t,e,n),i.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),s.add(i),i}function By(s){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255,255,255,0.55)"),n.addColorStop(.6,"rgba(255,255,255,0.15)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);let i=new en(t),r=new xe({map:i,transparent:!0,opacity:.13,depthWrite:!1,color:10133672}),a=new Yt(1,1),o=[];for(let c=0;c<46;c++){let u=new W(a,r);u.renderOrder=2,s.add(u),o.push({m:u,life:0,sz:0})}let l={enabled:!0,mat:r};return h.world.updaters.push((c,u)=>{let f=h.camera,d=h.player.p,p=l.enabled&&d.y>-1&&d.x<400;for(let m of o){if(m.m.visible=p,!p)continue;let x=m.m.position.x-d.x,g=m.m.position.z-d.z;if(m.life<=0||x*x+g*g>484){let b=Math.random()*Math.PI*2,w=3+Math.random()*18,S=d.x+Math.cos(b)*w,v=d.z+Math.sin(b)*w;m.m.position.set(S,(h.terrain?h.terrain.height(S,v):0)+.3+Math.random()*1.6,v),m.sz=2.5+Math.random()*4,m.life=8+Math.random()*10,m.age=0,m.v=new U((Math.random()-.5)*.2,0,(Math.random()-.5)*.2)}m.age+=c,m.life-=c,m.m.position.addScaledVector(m.v,c);let y=Math.min(1,m.age/2,m.life/2);m.m.scale.setScalar(m.sz*(.6+y*.4)),m.m.quaternion.copy(f.quaternion)}}),l}var sn={cx:-62,cz:140,hole:{minX:-63.9,maxX:-62.6,minZ:138.4,maxZ:140.6},room:{minX:-64.4,maxX:-58.6,minZ:141.6,maxZ:146.8},floorY:-3.2,ceilY:-.6,shaft:{minX:-70.4,maxX:-64.4,minZ:143.8,maxZ:144.6,y:-2.95,top:-2.2},coldOpen:[-63.25,-3.2,142.25],ventExit:[-71.9,0,142.2]};function Mp(s,t,e,n){let i=sn,r=.3,a=(Y,Lt)=>h.terrain.height(Y,Lt);t.tag="H\xFCtte";let o=e.planksAncient,l=[[-62.6,-59.5,138,142],[-64.5,-62.6,138,138.4],[-64.5,-62.6,140.6,142],[-64.5,-63.9,138.4,140.6]];for(let[Y,Lt,Gt,Ge]of l)n.add(z(Lt-Y,.3,Ge-Gt,1.2),e.floor,(Y+Lt)/2,.15,(Gt+Ge)/2);for(let[Y,Lt,Gt,Ge]of[[-64.6,-59.4,137.9,138.05],[-64.6,-59.4,141.95,142.1],[-64.6,-64.45,137.9,142.1],[-59.55,-59.4,137.9,142.1]])n.add(z(Lt-Y,1.4,Ge-Gt,1),e.mossStone,(Y+Lt)/2,-.55,(Gt+Ge)/2);let c=2.5;n.add(z(.12,c,4,1.2),o,-64.44,r+c/2,140),n.add(z(5,c,.12,1.2),o,-62,r+c/2,138.06),n.add(z(3.3,c,.12,1.2),o,-62.85,r+c/2,141.94),n.add(z(.7,c,.12,1.2),o,-59.85,r+c/2,141.94),n.add(z(1,1,.12,1.2),o,-60.7,r+.5,141.94),n.add(z(1,.8,.12,1.2),o,-60.7,r+2.1,141.94);let u=new W(new Yt(1,.7),new xe({color:658446,transparent:!0,opacity:.6}));u.position.set(-60.7,r+1.35,141.94),s.add(u),n.add(z(1.25,.12,.03,.6),o,-60.7,r+1.5,142.03,0,0,.35),n.add(z(1.25,.12,.03,.6),o,-60.7,r+1.2,142.03,0,0,-.25);for(let[Y,Lt,Gt,Ge]of[[-63.8,142.06,0,1],[-62.6,142.06,0,.8],[-59.8,142.06,0,.9],[-64.56,141.2,Math.PI/2,1],[-64.56,138.8,Math.PI/2,.85]]){let pn=new W(new Yt(.9*Ge,1.9*Ge),e.ivy);pn.position.set(Y,.95*Ge,Lt),pn.rotation.y=Gt,pn.castShadow=!0,s.add(pn)}for(let Y=0;Y<4;Y++)for(let Lt=0;Lt<7-Y;Lt++)n.add(_t(.11,.11,.9,8,.6),e.barkOak,-62.9+Lt*.23+Y*.11,.12+Y*.2,137.35,Math.PI/2,0,0);t.addBox(-63.05,-61.15,136.85,137.85,-1,1),n.add(_t(.28,.3,.5,10,.6),e.barkOak,-60.4,.25,137.1),n.add(z(.04,.7,.04,1),e.darkWood,-60.4,.75,137.1,0,0,.5),n.add(z(.16,.1,.03,1),e.rust,-60.25,1.05,137.1,0,0,.5),t.addCircle(-60.4,137.1,.32,-1,.6);for(let Y=0;Y<3;Y++)n.add(z(.2,2,.03,.6),e.planksAncient,-64.75,.95,140.6-Y*.28,-.08*Y,0,.32+Y*.03);n.add(_t(.14,.11,.28,10,1),e.rust,-59,.14,141.6),n.add(z(.12,c,1.5,1.2),o,-59.56,r+c/2,138.75),n.add(z(.12,c,1.5,1.2),o,-59.56,r+c/2,141.25),n.add(z(.12,.45,1,1.2),o,-59.56,r+2.27,140),n.add(Ms(4.9,1.3,5.8,1.6),e.mossRoof,-62,r+c-.02,140,0,Math.PI/2,.018),n.add(z(.9,.03,.7,.6),e.planksAncient,-61.2,r+c+.62,138.9,.49,0,.1),n.add(z(.6,.03,.5,.6),e.rust,-63.1,r+c+.5,141.25,-.5,0,-.05),n.add(z(.12,.02,1.1,.6),e.planksAncient,-64.7,r+c-.35,139.6,.6,0,.3),n.add(z(5.8,.1,4.9,1.2),e.planksOld,-62,r+c-.05,140,0,0,0,1,1,1,{cast:!1}),n.add(_t(.08,.08,1.6,8,1),e.rust,-60.2,r+c+.6,138.6),n.add(z(.6,.2,1.1,1),e.concrete,-59.1,.1,140),t.addFloor(-59.45,-58.8,139.45,140.55,.15);let f=0,d=3.2;t.addBox(-64.55,-64.38,137.95,142.05,f,d),t.addBox(-64.55,-59.45,137.95,138.12,f,d),t.addBox(-64.55,-59.45,141.88,142.05,f,d),t.addBox(-59.62,-59.45,137.95,139.5,f,d),t.addBox(-59.62,-59.45,140.5,142.05,f,d),t.addRegionBox(-64.4,-59.4,138.1,141.9),t.addSurface(-64.5,-58.8,137.9,142.1,"wood",-.2,3);let p=i.hole,m={open:!0};t.addFloor(-64.4,-59.4,138.1,141.9,r,{hole:(Y,Lt)=>m.open&&Y>p.minX&&Y<p.maxX&&Lt>p.minZ&&Lt<p.maxZ}),t.tag="H\xFCttent\xFCr";let x=new ee;x.position.set(-59.53,r,139.5);let g=new W(z(.06,2.02,.97,.7),e.planksAncient);g.position.set(0,1.02,.5),g.rotation.x=.012,g.castShadow=!0,x.add(g);for(let Y of[.35,1.7]){let Lt=new W(z(.03,.12,.95,.7),e.planksAncient);Lt.position.set(.04,Y,.5),x.add(Lt)}let y=new W(z(.03,1.5,.12,.7),e.planksAncient);y.position.set(.04,1.02,.5),y.rotation.x=.62,x.add(y);let b=new W(new Ae(.035,8,6),e.rust);b.position.set(.06,1,.88),x.add(b),s.add(x);let w=t.addBox(-59.62,-59.45,139.5,140.5,0,3),S=0,v=0;t.updaters.push(Y=>{v+=(S-v)*(1-Math.exp(-5*Y)),x.rotation.y=v,w.enabled=v<1}),h.objects.hutDoor={pos:new U(-59.5,1.3,140),open(Y){S=1.9,Y||h.audio.doorCreak(this.pos)},close(Y){S=0,Y||h.audio.slam(this.pos,.6)},set(Y){S=v=Y?1.9:0,w.enabled=!Y}},t.tag="Luke";let E=new ee;E.position.set((p.minX+p.maxX)/2,r,p.maxZ);let _=new W(z(1.32,.06,2.22,1),e.planksOld);_.position.set(0,.03,-1.1),_.castShadow=!0,E.add(_);let M=new W(new qn(.06,.012,6,12),e.rust);M.position.set(0,.07,-1.9),M.rotation.x=Math.PI/2,E.add(M),s.add(E);let I=t.addBox(p.minX,p.maxX,p.minZ,p.maxZ,-.05,.32,{enabled:!1}),P=t.addBox(p.minX,p.maxX,p.maxZ-.05,p.maxZ+.2,.3,2.6),O=1.75,k=1.75;t.updaters.push(Y=>{k+=(O-k)*(1-Math.exp(-(O===0?14:4)*Y)),E.rotation.x=k}),h.objects.hatch={state:m,pos:new U(-63.25,.3,139.5),close(){O=0,m.open=!1,I.enabled=!0,P.enabled=!1},open(){O=1.75,m.open=!0,I.enabled=!1,P.enabled=!0},set(Y){Y?this.open():this.close(),k=O}},t.tag="H\xFCtte innen",n.add(z(1.3,.05,.8,1),e.darkWood,-60.8,r+.75,141.3);for(let[Y,Lt]of[[-61.35,140.95],[-60.25,140.95],[-61.35,141.65],[-60.25,141.65]])n.add(z(.05,.75,.05,1),e.darkWood,Y,r+.37,Lt);t.addBox(-61.5,-60.1,140.85,141.75,0,1.1),n.add(z(.4,.04,.4,1),e.darkWood,-61.1,r+.45,140.4),n.add(z(.4,.45,.04,1),e.darkWood,-61.1,r+.7,140.2),n.add(z(.6,.8,.5,1),e.darkMetal,-60.2,r+.4,138.5),t.addBox(-60.5,-59.9,138.2,138.8,0,1.2),n.add(z(1.9,.18,.85,1),tt("mattress",{color:4867126}),-63.3,r+.09,141.4),n.add(z(1.4,1.6,.35,1),e.darkWood,-62.2,r+.8,138.3),t.addBox(-62.9,-61.5,138.1,138.5,0,2);for(let Y=0;Y<6;Y++)n.add(_t(.05,.05,.12,8,1),tt("jar",{color:[4872762,6965802,3815994][Y%3]}),-62.7+Y*.2,r+1.15,138.3);let H=new W(new Ae(.11,12,8,0,Math.PI*2,0,Math.PI*.55),tt("beanie",{color:11569696}));H.position.set(-60.55,r+.79,141.25),H.scale.set(1,.8,1.1),H.rotation.z=.3,s.add(H);let N=new W(new qn(.105,.025,6,16),H.material);N.rotation.x=Math.PI/2,N.position.set(0,0,0),H.add(N),h.objects.beanie=H,n.add(_t(.07,.08,.22,8,1),e.rust,-61.2,r+.88,141.4);let X=Sn([{t:"OKTOBER",font:"bold 40px Arial"},{t:"2017",font:"30px Arial"}],.35,.45,{w:256,h:320,bg:"#d8d2c0"});X.position.set(-59.7,r+1.6,141.2),X.rotation.y=-Math.PI/2,s.add(X);let Z=(Y,Lt,Gt,Ge,pn=.6)=>{let jn=new W(new Yt(pn,pn),e.cobweb);jn.geometry.translate(pn/2,-pn/2,0),jn.position.set(Y,Lt,Gt),jn.rotation.y=Ge,s.add(jn)};Z(-64.37,r+2.45,138.13,Math.PI/4),Z(-59.63,r+2.45,138.13,-Math.PI/4-Math.PI/2+Math.PI),Z(-64.37,r+2.45,141.87,-Math.PI/4+Math.PI/2),Z(-58.62,-.62,146.78,-Math.PI*.75,.8),Z(-64.38,-.62,146.78,Math.PI*.75-Math.PI/2,.7),Z(-58.62,-.62,141.62,-Math.PI/4,.6);let $=t.addLamp({pos:[-63.25,-.4,139.9],color:14215423,intensity:3.2,distance:6,visibleDist:30});t.tag="Kellertreppe";let et=-63.93,J=-62.57,st=138.4,ft=141.5,Dt=r,zt=i.floorY,it=Y=>Math.max(zt,Math.min(Dt,Dt-(Y-st)/(ft-st)*(Dt-zt)));t.addFloor(et,J,138.15,141.62,(Y,Lt)=>it(Lt));let Tt=14;for(let Y=0;Y<Tt;Y++){let Lt=st+(Y+.5)*(ft-st)/Tt,Gt=it(Lt);n.add(z(J-et,.06,(ft-st)/Tt+.04,1),e.darkWood,(et+J)/2,Gt-.03,Lt),n.add(z(J-et,(Dt-zt)/Tt,.03,1),e.darkWood,(et+J)/2,Gt+.06,Lt-(ft-st)/Tt/2)}for(let Y of[et+.03,J-.03]){let Lt=Math.hypot(ft-st,Dt-zt),Gt=new W(z(.05,.25,Lt,1),e.darkWood);Gt.position.set(Y,(Dt+zt)/2-.05,(st+ft)/2),Gt.rotation.x=Math.atan2(Dt-zt,ft-st),s.add(Gt)}let kt=-3.35,F=0;n.add(z(.2,F-kt,3.5,1.5),e.concrete,-64.03,(kt+F)/2,139.9),n.add(z(.2,F-kt,3.5,1.5),e.concrete,-62.47,(kt+F)/2,139.9),n.add(z(1.8,F-kt,.2,1.5),e.concrete,-63.25,(kt+F)/2,138.1),t.addBox(-64.2,-63.93,138,141.65,kt,-.02),t.addBox(-62.57,-62.35,138,141.65,kt,-.02),t.addBox(-64.15,-62.35,137.9,138.18,kt,-.02),n.add(z(1.4,.6,.2,1.5),e.concrete,-63.25,-.3,141.6),t.tag="Keller";let C=i.room,K=i.floorY,nt=i.ceilY,ut=new W(Ze(C.maxX-C.minX,C.maxZ-C.minZ,2),e.concrete);ut.rotation.x=-Math.PI/2,ut.position.set((C.minX+C.maxX)/2,K,(C.minZ+C.maxZ)/2),ut.receiveShadow=!0,s.add(ut);let Ft=new W(Ze(C.maxX-C.minX,C.maxZ-C.minZ,2),e.concrete);Ft.rotation.x=Math.PI/2,Ft.position.set((C.minX+C.maxX)/2,nt,(C.minZ+C.maxZ)/2),s.add(Ft),t.addFloor(C.minX,C.maxX,C.minZ-.1,C.maxZ,K),t.addSurface(C.minX-.3,C.maxX,138,C.maxZ,"concrete",-3.5,-.5),t.addSurface(et,J,138.15,141.55,"wood",-3.5,.5);let Bt=nt-K+.2,$t=(K+nt)/2;n.add(z(C.maxX- -62.55,Bt,.2,1.5),e.concrete,(C.maxX+-62.55)/2,$t,C.minZ-.1),t.addBox(-62.55,C.maxX,C.minZ-.25,C.minZ,-3.4,-.5),n.add(z(.5,Bt,.2,1.5),e.concrete,-64.2,$t,C.minZ-.1),t.addBox(-64.6,-63.95,C.minZ-.25,C.minZ,-3.4,-.5),n.add(z(.2,Bt,C.maxZ-C.minZ,1.5),e.concrete,C.maxX+.1,$t,(C.minZ+C.maxZ)/2),n.add(z(C.maxX-C.minX+.4,Bt,.2,1.5),e.concrete,(C.minX+C.maxX)/2,$t,C.maxZ+.1),t.addBox(C.maxX,C.maxX+.3,C.minZ-.3,C.maxZ+.3,-3.4,-.5),t.addBox(C.minX-.3,C.maxX+.3,C.maxZ,C.maxZ+.3,-3.4,-.5);let at=i.shaft;n.add(z(.2,Bt,at.minZ-C.minZ,1.5),e.concrete,C.minX-.1,$t,(C.minZ+at.minZ)/2),n.add(z(.2,Bt,C.maxZ-at.maxZ,1.5),e.concrete,C.minX-.1,$t,(at.maxZ+C.maxZ)/2),n.add(z(.2,nt-at.top+.1,at.maxZ-at.minZ,1),e.concrete,C.minX-.1,(at.top+nt+.1)/2,(at.minZ+at.maxZ)/2),n.add(z(.2,at.y-K,at.maxZ-at.minZ,1),e.concrete,C.minX-.1,(at.y+K)/2,(at.minZ+at.maxZ)/2),t.addBox(C.minX-.3,C.minX,C.minZ-.3,at.minZ,-3.4,-.5),t.addBox(C.minX-.3,C.minX,at.maxZ,C.maxZ+.3,-3.4,-.5),t.addBox(C.minX-.3,C.minX,at.minZ,at.maxZ,at.top,-.5),t.addRegionBox(C.minX,C.maxX,C.minZ-.05,C.maxZ),t.tag="L\xFCftungsschacht";let pe=at.maxZ-at.minZ,Ie=at.top-at.y,me=new W(Ze(at.maxX-at.minX+1.2,pe,1),e.metal);me.rotation.x=-Math.PI/2,me.position.set((at.minX+at.maxX)/2-.6,at.y,(at.minZ+at.maxZ)/2),s.add(me),n.add(z(at.maxX-at.minX+.1,.05,pe+.1,1),e.metal,(at.minX+at.maxX)/2-.05,at.top+.025,(at.minZ+at.maxZ)/2);for(let Y of[at.minZ-.03,at.maxZ+.03])n.add(z(at.maxX-at.minX+1.2,Ie+.1,.05,1),e.metal,(at.minX+at.maxX)/2-.6,(at.y+at.top)/2,Y);t.addFloor(at.minX-1,at.maxX+.05,at.minZ,at.maxZ,at.y),t.addBox(at.minX-1,at.maxX,at.minZ-.25,at.minZ,-3.4,-1),t.addBox(at.minX-1,at.maxX,at.maxZ,at.maxZ+.25,-3.4,-1),t.addBox(at.minX-.1,at.maxX,at.minZ,at.maxZ,at.top,-.9),t.addBox(at.minX-1.3,at.minX-.9,at.minZ,at.maxZ,-3.4,-.5),t.addRegionBox(at.minX-.9,at.maxX+.05,at.minZ,at.maxZ),t.addSurface(at.minX-1.2,at.maxX,at.minZ,at.maxZ,"metal",-3.2,-1.5),n.add(z(.9,3.2,.05,1),e.concrete,at.minX-.55,-1.4,at.minZ-.05),n.add(z(.9,3.2,.05,1),e.concrete,at.minX-.55,-1.4,at.maxZ+.05),n.add(z(.05,3.2,.9,1),e.concrete,at.minX-1,-1.4,(at.minZ+at.maxZ)/2);for(let Y=0;Y<9;Y++)n.add(_t(.015,.015,.5,6,1),e.rust,at.minX-.93,at.y+.3+Y*.33,(at.minZ+at.maxZ)/2,Math.PI/2,0,0);let Ye=at.minX-.55,Se=(at.minZ+at.maxZ)/2,$e=a(Ye,Se);n.add(z(1.1,.7,1.1,1),e.concrete,Ye,$e+.25,Se);let Fe=new W(z(.95,.04,.95,.5),e.bauzaun);Fe.position.set(Ye,$e+.62,Se),s.add(Fe),t.addBox(Ye-.55,Ye+.55,Se-.55,Se+.55,-.9,$e+.6),h.objects.ventTop={pos:new U(Ye,$e+.5,Se),grate:Fe};let Oe=new ee;Oe.position.set(C.minX+.12,(at.y+at.top)/2,(at.minZ+at.maxZ)/2);let q=new W(z(.25,.85,.95,.5),e.darkMetal);q.position.x=0,Oe.add(q);let ze=new W(new Ii(.33,20),new Be({color:328965}));ze.position.x=.13,ze.rotation.y=Math.PI/2,Oe.add(ze);let ue=new ee;ue.position.x=.14,Oe.add(ue);for(let Y=0;Y<5;Y++){let Lt=new W(new Xe(.02,.3,.1),e.metal);Lt.position.y=.15;let Gt=new ee;Gt.rotation.x=Y/5*Math.PI*2,Lt.rotation.y=.5,Gt.add(Lt),ue.add(Gt)}let ke=new W(new Ne(.06,.06,.06,10),e.darkMetal);ke.rotation.z=Math.PI/2,ue.add(ke);let At=document.createElement("canvas");At.width=At.height=128;let Le=At.getContext("2d");Le.fillStyle="#666";for(let Y=0;Y<128;Y+=12)Le.fillRect(0,Y,128,6);Le.fillRect(0,0,6,128),Le.fillRect(122,0,6,128);let Qt=new en(At),qt=new W(new Yt(.78,.78),new xe({map:Qt,alphaTest:.4,transparent:!1,side:ye}));qt.material.onBeforeCompile=Y=>{Y.fragmentShader=Y.fragmentShader.replace("#include <alphatest_fragment>","if (diffuseColor.r < 0.1) discard;")},qt.position.set(.2,0,0),qt.rotation.y=Math.PI/2,Oe.add(qt);let D=[];for(let[Y,Lt]of[[.36,.36],[.36,-.36],[-.36,.36],[-.36,-.36]]){let Gt=new W(new Ne(.018,.018,.02,8),e.metal);Gt.rotation.z=Math.PI/2,Gt.position.set(.21,Y,Lt),Oe.add(Gt),D.push(Gt)}s.add(Oe);let T=t.addBox(C.minX-.25,C.minX+.35,at.minZ-.1,at.maxZ+.1,-3.4,at.top+.15),j=0,gt=1;t.updaters.push(Y=>{j+=(gt-j)*(1-Math.exp(-(gt>0?3:.7)*Y)),ue.rotation.x+=j*22*Y}),h.objects.fan={group:Oe,grille:qt,screws:D,housing:q,blades:ue,ventCol:T,pos:new U(C.minX+.3,(at.y+at.top)/2,(at.minZ+at.maxZ)/2),setOn(Y){gt=Y?1:0},get running(){return gt>0},removeGrille(){qt.visible=!1,D.forEach(Y=>Y.visible=!1)},removeFan(){q.visible=!1,ue.visible=!1,ze.visible=!1,T.enabled=!1},reset(Y=!0){gt=Y?1:0,j=gt,qt.visible=!0,D.forEach(Lt=>Lt.visible=!0),q.visible=!0,ue.visible=!0,ze.visible=!0,T.enabled=!0}};let ht=new ee;ht.position.set(-61.4,nt-.08,144.2);let Rt=new W(new Xe(.16,.06,1.3),e.darkMetal);ht.add(Rt);let Ct=new Be({color:15266047}),rt=new W(new Ne(.025,.025,1.2,8),Ct);rt.rotation.x=Math.PI/2,rt.position.y=-.05,ht.add(rt),s.add(ht);let ot=dn(14215423,1.6,.35);ot.position.set(-61.4,nt-.15,144.2),s.add(ot);let St={on:!0,k:1},B=Y=>{if(!St.on)return 0;let Lt=Y%7.3,Gt=1;return Lt<.35?Gt=Math.random()<.5?.15:1:Lt>4.1&&Lt<4.25&&(Gt=.25),Math.random()<.006&&(Gt=.3),Gt},lt=t.addLamp({pos:[-61.4,nt-.3,144.2],color:14674687,intensity:9,distance:9,visibleDist:25});t.updaters.push((Y,Lt)=>{let Gt=B(Lt);St.k=Gt,lt.level=Gt,$.level=Gt*(h.objects.hatch.state.open?1:0),Ct.color.setScalar(.15+.85*Gt),ot.material.opacity=.35*Gt,h.audio.loops.tube&&h.audio.setLoop("tube",Gt>.5?1:.2,.02)}),h.objects.tube={state:St,pos:new U(-61.4,nt-.1,144.2),set(Y){St.on=Y}};let Q=C.maxX-.35,yt=K+.9;n.add(z(.65,.06,3.2,1),e.darkWood,Q,yt,143.8);for(let Y of[142.3,145.3])for(let Lt of[Q-.28,Q+.28])n.add(z(.06,.9,.06,1),e.darkWood,Lt,K+.45,Y);t.addBox(Q-.35,C.maxX,142.1,145.5,-3.4,yt+.1);let vt=new ee;vt.position.set(Q-.3,yt-.12,143);let wt=new W(z(.5,.14,.6,1),e.darkWood);wt.position.x=.22,vt.add(wt);let Wt=new W(z(.03,.16,.64,1),e.wood);vt.add(Wt);let ae=new W(z(.03,.02,.16,1),e.metal);ae.position.x=-.03,vt.add(ae);let xt=new ee,Xt=new W(new Ne(.018,.02,.1,8),tt("sdh",{color:13148184}));Xt.rotation.x=Math.PI/2,xt.add(Xt);let re=new W(new Ne(.005,.005,.12,6),e.metal);re.rotation.x=Math.PI/2,re.position.z=.11,xt.add(re),xt.position.set(.18,.08,.05),xt.rotation.y=.4,vt.add(xt),s.add(vt);let It=0,ge=0;t.updaters.push(Y=>{ge+=(It-ge)*(1-Math.exp(-8*Y)),vt.position.x=Q-.3-ge}),h.objects.drawer={open(){It=.38},set(Y){It=ge=Y?.38:0},screwdriver:xt,pos:new U(Q-.4,yt-.1,143)};let Ke=new W(z(.22,.02,.3,1),tt("notebook",{color:2763322}));Ke.position.set(Q-.05,yt+.04,142.75),Ke.rotation.y=.2,s.add(Ke);let wn=new W(new Yt(.2,.28),tt("pages",{color:13617332}));wn.rotation.x=-Math.PI/2,wn.position.set(Q-.05,yt+.052,142.75),wn.rotation.z=.2,s.add(wn);let zn=new ee,xi=new W(z(.28,.16,.42,1),tt("recorder",{color:1842206}));zn.add(xi);let ri=new W(new Ii(.06,16),tt("spk",{color:526344}));ri.position.set(-.141,0,.1),ri.rotation.y=-Math.PI/2,zn.add(ri);let yi=new W(new Ae(.01,6,4),$n(16719888));yi.position.set(-.141,.05,-.12),zn.add(yi);let Oi=Sn([{t:"RUF 2",font:'bold 72px "Comic Sans MS"',color:"#111"}],.16,.06,{w:256,h:96,bg:"#e8e4d0",border:null,worn:!1});Oi.position.set(-.142,-.04,-.05),Oi.rotation.y=-Math.PI/2,zn.add(Oi),zn.position.set(Q+.05,yt+.11,144.5),s.add(zn);for(let Y=0;Y<3;Y++)n.add(_t(.05,.05,.16,10,1),tt("spkCyl",{color:2236966}),Q+.05,yt+.11,145.05+Y*.13);n.add(z(.12,.05,.08,1),tt("batt",{color:6965786}),Q-.1,yt+.05,143.6);let Cn=new W(z(.06,.04,.32,1),e.white);Cn.position.set(Q+.15,yt+.05,142.45),s.add(Cn);let vi=new W(new Ae(.007,6,4),$n(16724e3));vi.position.set(Q+.12,yt+.075,142.33),s.add(vi),h.objects.strip={pos:new U(Q,yt+.06,142.45),led:vi};let Kn=new ee,Es=new W(z(.075,.01,.155,1),tt("phoneBody",{color:1118481}));Kn.add(Es);let Jn=new W(new Yt(.068,.145),new Be({color:2241365}));Jn.rotation.x=-Math.PI/2,Jn.position.y=.0055,Kn.add(Jn),Kn.position.set(Q-.08,yt+.04,142.45),Kn.rotation.y=.15,Kn.visible=!1,s.add(Kn),h.objects.chargingPhone={mesh:Kn,screen:Jn},h.objects.recorder={group:zn,pos:new U(Q+0,yt+.12,144.5),led:yi},h.objects.notebook={pos:new U(Q-.05,yt+.05,142.75)},n.add(z(.42,.04,.42,1),e.darkWood,Q-.7,K+.45,143.6),n.add(z(.04,.45,.42,1),e.darkWood,Q-.9,K+.7,143.6),t.addBox(Q-.95,Q-.5,143.35,143.85,-3.4,K+1);let _i=C.maxX-.01,bi=new W(new Yt(1.1,.82),new xe({map:qf()}));bi.position.set(_i,K+1.75,143.7),bi.rotation.y=-Math.PI/2,s.add(bi),h.objects.map={pos:bi.position.clone()},[[142.6,1.95],[142.75,1.55],[144.6,2],[144.85,1.6],[142.5,1.2],[144.7,1.2],[143.4,2.3]].forEach(([Y,Lt],Gt)=>{let Ge=new W(new Yt(.16,.19),new xe({map:Xf(Gt+3)}));Ge.position.set(_i-.002*Gt,K+Lt,Y),Ge.rotation.set(0,-Math.PI/2,(Math.random()-.5)*.2),s.add(Ge)}),h.objects.polaroids={pos:new U(_i,K+1.6,142.7)};let Bi=new W(new Yt(.34,.42),new xe({map:Zf()}));Bi.position.set(_i,K+1.55,145.4),Bi.rotation.set(0,-Math.PI/2,.05),s.add(Bi),h.objects.news={pos:Bi.position.clone()},n.add(_t(.008,.008,1.6,4,1),e.black,_i-.02,K+1.9,145.9),n.add(_t(.05,.05,5.6,8,1),e.rust,-61.5,-.78,142,0,0,Math.PI/2),n.add(_t(.035,.035,5,8,1),e.darkMetal,-62.2,-.72,144.2,Math.PI/2,0,0);for(let Y of[-63.5,-60.5])n.add(z(.04,.12,.08,1),e.darkMetal,Y,-.68,142);for(let[Y,Lt,Gt,Ge]of[[-60.2,-3,146.3,.6],[-60.25,-2.62,146.35,.5],[-59.4,-3.02,146.4,.5]])n.add(z(Ge,.4,.45,1),tt("cardboard",{color:6967864}),Y,Lt,Gt,0,.1,0);t.addBox(-60.55,-59.1,146.1,146.8,-3.4,-2.3),n.add(z(2.2,1.9,.42,1),e.darkWood,-62.5,K+.95,C.maxZ-.22),t.addBox(-63.65,-61.35,C.maxZ-.45,C.maxZ,-3.4,-1);let Ts=tt("shelfItems",{color:3814960});for(let Y=0;Y<9;Y++)n.add(z(.18+Y%3*.05,.2,.25,1),[Ts,tt("cans",{color:5917232}),tt("spkC",{color:1710620})][Y%3],-63.4+Y*.22,K+.5+Math.floor(Y/3)*.55,C.maxZ-.22);n.add(z(.3,.45,.18,1),tt("canister",{color:6953490}),-64,K+.22,146.3),n.add(_t(.16,.13,.32,10,1),e.metal,-63.9,K+.16,142.4),t.addCircle(-63.9,142.4,.18,-3.4,-2.7),n.add(z(.5,.25,.03,1),e.wood,-60.4,K+1.55,C.maxZ-.02);let Mi=tt("key",{color:10127952}),As=[];for(let Y=0;Y<4;Y++){let Lt=new ee,Gt=new W(new Xe(.015,.06,.004),Mi);Gt.position.y=-.04,Lt.add(Gt);let Ge=new W(new Xe(.035,.05,.004),tt("tag"+Y,{color:Y===2?10492432:9079418}));Ge.position.y=-.1,Lt.add(Ge),Lt.position.set(-60.58+Y*.12,K+1.6,C.maxZ-.045),s.add(Lt),As.push(Lt)}h.objects.keys={pos:new U(-60.34,K+1.52,C.maxZ-.05),torKey:As[2]};let Hi=-59.25,Gn=K+1.55,Si=C.maxZ-.06;n.add(z(.42,.52,.1,1),tt("fusebox",{color:9079942}),Hi,Gn,Si);let R=Sn([{t:"1 LICHT",font:"bold 36px Arial"},{t:"2 ______",font:"bold 36px Arial"},{t:"3 STECKD.",font:"bold 36px Arial"}],.3,.18,{w:256,h:160,bg:"#ddd8c8",border:null});R.position.set(Hi,Gn+.14,Si-.052),R.rotation.y=Math.PI,s.add(R);let G=[];for(let Y=0;Y<3;Y++){let Lt=new W(new Xe(.05,.08,.04),tt("sw",{color:2105376}));Lt.position.set(Hi+.12-Y*.12,Gn-.1,Si-.065),s.add(Lt),G.push(Lt)}h.objects.fuse={switches:G,pos:Y=>new U(Hi+.12-Y*.12,Gn-.1,Si-.08),setVisual(Y,Lt){G[Y].rotation.x=Lt?0:.6,G[Y].position.y=Gn-.1-(Lt?0:.015)},label:R};let A=bs({coat:1711130,pants:789518,hood:!0,height:1.93,longCoat:!0});A.root.position.set(0,-500,0),s.add(A.root);let L=new Os(16774368,0,30,.36,.5,2);L.position.set(.24,.05,-.42),A.chest.add(L);let V=new We;V.position.set(.15,-1.6,-8),A.chest.add(V),L.target=V;let ct=dn(16773336,.7,.9);ct.position.copy(L.position),A.chest.add(ct);let pt=new W(new Ne(.025,.03,.2,8),e.black);pt.rotation.x=Math.PI/2,pt.position.set(.24,.05,-.32),A.chest.add(pt),h.objects.man={H:A,torch:L,glow:ct,show(Y){Y||A.root.position.set(0,-500,0),L.intensity=Y?26:0,ct.visible=Y}};let dt=bs({coat:921360,pants:657930,hood:!0,height:1.93,longCoat:!0});dt.root.visible=!1,s.add(dt.root),h.objects.silhouette=dt;let Et=bs({coat:5921374,pants:2766160,hood:!1,height:1.78,skin:9071188});Et.sit(),Et.root.visible=!1,s.add(Et.root);let Nt=new W(new Ae(.122,12,8,0,Math.PI*2,0,Math.PI*.55),tt("hair",{color:1380364}));Nt.position.y=.14,Et.neck.add(Nt);let Vt=new W(new qn(.13,.05,6,14),tt("hoodie",{color:5921374}));Vt.rotation.x=Math.PI/2+.3,Vt.position.set(0,.02,.04),Et.neck.add(Vt);let Zt=new W(new Xe(.26,.12,.03),tt("hoodiePocket",{color:5131858}));Zt.position.set(0,.22,-.16),Et.hips.add(Zt),Et.root.traverse(Y=>{Y.isMesh&&Y.geometry.type==="BoxGeometry"&&Y.material.color.getHex()===723723&&(Y.material=tt("sneaker",{color:14211282}))}),h.objects.deniz=Et;let Pt=new ee,se=new W(z(.075,.01,.155,1),tt("phoneBody2",{color:1118481}));Pt.add(se);let ve=new W(new Yt(.068,.145),new Be({color:9087231}));ve.rotation.x=-Math.PI/2,ve.position.y=.006,Pt.add(ve);let Re=dn(10137855,.9,.6);Re.position.y=.08,Pt.add(Re),Pt.visible=!1,s.add(Pt);let we=t.addLamp({pos:[0,0,0],color:10137855,intensity:1.2,distance:3.5,enabled:!1});h.objects.groundPhone={group:Pt,lamp:we,screen:ve,halo:Re,place(Y,Lt,Gt){Pt.position.set(Y,Lt+.01,Gt),Pt.rotation.y=1.2,Pt.visible=!0,we.pos.set(Y,Lt+.15,Gt),we.enabled=!0},hide(){Pt.visible=!1,we.enabled=!1},pulse(Y){let Lt=.5+.5*Math.max(0,Math.sin(Y*3));ve.material.color.setRGB(.3+Lt*.4,.4+Lt*.4,.7+Lt*.3),Re.material.opacity=.3+Lt*.5,we.intensity=.6+Lt*1.2}};let je=new ee,Ht=new W(_t(.1,.22,4.6,7,1.2),e.barkOak);Ht.position.y=2.3,je.add(Ht);for(let Y=0;Y<4;Y++){let Lt=new W(_t(.03,.07,1.6,5,1.2),e.barkOak);Lt.position.set(0,1.2+Y*.8,0),Lt.rotation.set(.7*(Y%2?1:-1),Y,.4),Lt.translateY(.7),je.add(Lt)}let fn=new W(ss(2.2,1.8,3),e.leafOak);return fn.position.y=3.2,je.add(fn),je.traverse(Y=>{Y.isMesh&&(Y.castShadow=!0)}),s.add(je),h.objects.branch={group:je},{}}function Sp(s,t){let e=new Yt(s,t);e.translate(0,t/2,0);let n=e.clone();return n.rotateY(Math.PI/2),_s([e.toNonIndexed(),n.toNonIndexed()])}var te=3,wp=2.85,on=5.6,bt={x0:504.3,x1:505.4,zTop:7.2,zBot:11.2,n:14};bt.run=(bt.zBot-bt.zTop)/bt.n;bt.rise=te/bt.n;var Ep=s=>{if(s<=bt.zTop)return te;if(s>=bt.zBot)return 0;let t=Math.floor((bt.zBot-s)/bt.run);return Math.min(te,(t+1)*bt.rise)},Ss={ox:500,spawn:[500.9,te,2.9],ogSpawn:[502.65,te,3.7],egSpawn:[504.85,0,11.95],frontDoor:new U(503.6,1.1,15.35),stairs:bt};function Hy(){let s=document.createElement("canvas");s.width=s.height=256;let t=s.getContext("2d");t.fillStyle="#6d6a62",t.fillRect(0,0,256,256);for(let n=0;n<4;n++)for(let i=0;i<4;i++){let r=150+(n*7+i*3)%5*6;t.fillStyle=`rgb(${r},${r-4},${r-12})`,t.fillRect(n*64+2,i*64+2,60,60);for(let a=0;a<40;a++)t.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,t.fillRect(n*64+2+Math.random()*58,i*64+2+Math.random()*58,3,3)}let e=new en(s);return e.wrapS=e.wrapT=Ti,e.colorSpace=rn,e.anisotropy=4,e}function Gy(){let s=document.createElement("canvas");s.width=64,s.height=64;let t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,64);return e.addColorStop(0,"rgba(255,190,120,1)"),e.addColorStop(.35,"rgba(255,170,100,.45)"),e.addColorStop(1,"rgba(255,150,80,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new en(s)}function Tp(s=!0){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(40,18,2,40,18,60);return n.addColorStop(0,s?"#b07a40":"#5a6a8a"),n.addColorStop(.4,s?"#2a1c14":"#161b26"),n.addColorStop(1,"#07080b"),e.fillStyle=n,e.fillRect(0,0,64,64),new en(t)}function Ap(s,t,e,n){t.tag="Zuhause";let i=e.plasterW,r=(A,L,V,ct,pt,dt,Et,Nt=0)=>n.add(z(A,L,V,1.5),ct,pt,dt,Et,0,Nt,0),a=(A,L,V,ct,pt,dt,Et=i,Nt=!0)=>{r(L-A,dt-pt,ct-V,Et,(A+L)/2,(pt+dt)/2,(V+ct)/2),Nt&&t.addBox(A,L,V,ct,pt-(pt<1?1:.1),dt+.1)},o=(A,L,V,ct,pt,dt)=>t.addBox(A,L,V,ct,pt,dt),l=(A,L,V,ct,pt,dt,Et=[],Nt=i)=>{let Vt=V;for(let[Zt,Pt,se,ve=0]of Et)Zt>Vt&&a(A,L,Vt,Zt,pt,dt,Nt),se<dt-pt&&r(L-A,dt-pt-se,Pt-Zt,Nt,(A+L)/2,pt+se+(dt-pt-se)/2,(Zt+Pt)/2),ve>0&&(r(L-A,ve,Pt-Zt,Nt,(A+L)/2,pt+ve/2,(Zt+Pt)/2),t.addBox(A,L,Zt,Pt,pt-.5,pt+ve)),Vt=Pt;Vt<ct&&a(A,L,Vt,ct,pt,dt,Nt)},c=(A,L,V,ct,pt,dt,Et=[],Nt=i)=>{let Vt=A;for(let[Zt,Pt,se,ve=0]of Et)Zt>Vt&&a(Vt,Zt,V,ct,pt,dt,Nt),se<dt-pt&&r(Pt-Zt,dt-pt-se,ct-V,Nt,(Zt+Pt)/2,pt+se+(dt-pt-se)/2,(V+ct)/2),ve>0&&(r(Pt-Zt,ve,ct-V,Nt,(Zt+Pt)/2,pt+ve/2,(V+ct)/2),t.addBox(Zt,Pt,V,ct,pt-.5,pt+ve)),Vt=Pt;Vt<L&&a(Vt,L,V,ct,pt,dt,Nt)},u=tt("doorWhite",{color:12235942}),f=(A,L,V=u)=>{let ct=new ee,pt=new W(z(A,L,.04,1),V);pt.position.set(A/2,L/2,0),pt.castShadow=!0,ct.add(pt);let dt=new W(z(.12,.02,.06,1),e.metal);return dt.position.set(A-.1,1,0),ct.add(dt),ct.userData.handle=dt,ct},d=(A,L,V,ct,pt,dt,Et=!0)=>{let Nt=new W(new Yt(ct,pt),new Be({map:Tp(Et)}));Nt.position.set(A,L,V),Nt.rotation.y=dt,s.add(Nt);let Vt=new W(z(.05,pt,.04,1),e.white);Vt.position.set(A,L,V),Vt.rotation.y=dt,s.add(Vt);let Zt=new W(z(ct,.04,.04,1),e.white);return Zt.position.set(A,L,V),Zt.rotation.y=dt,s.add(Zt),Nt},p=tt("kitchenTile",{map:Hy()});p.map.repeat.set(1,1);let m=tt("carpet",{color:4208175}),x=tt("stairWood",{map:vs("floor"),color:10127992}),g=new W(Ze(9.6,13.4,1.5),e.floor);g.rotation.x=-Math.PI/2,g.position.set(500.7,.001,8.7),g.receiveShadow=!0,s.add(g);let y=new W(Ze(4.4,4,.6),p);y.rotation.x=-Math.PI/2,y.position.set(503.2,.004,4),y.receiveShadow=!0,s.add(y),t.addFloor(495.8,505.6,1.8,15.6,0,{label:"Boden EG"}),t.addSurface(495.8,505.6,1.8,15.6,"woodfloor",-.5,1.4),t.addSurface(501,505.4,2,6,"tile",-.5,1.4);let b=(A,L,V,ct)=>{let pt=new W(Ze(L-A,ct-V,2),e.plasterW);pt.rotation.x=Math.PI/2,pt.position.set((A+L)/2,wp,(V+ct)/2),s.add(pt)};b(495.8,bt.x0,1.8,15.6),b(bt.x0,505.6,1.8,bt.zTop),b(bt.x0,505.6,bt.zBot,15.6);let w=(A,L,V,ct)=>{let pt=new W(Ze(L-A,ct-V,1.5),e.floor);pt.rotation.x=-Math.PI/2,pt.position.set((A+L)/2,te+.001,(V+ct)/2),pt.receiveShadow=!0,s.add(pt)};w(497.5,bt.x0,-.1,11.2),w(bt.x0,505.6,4.4,bt.zTop),t.addFloor(499.8,504.2,-.2,4.5,te,{label:"Boden Leons Zimmer"}),t.addFloor(497.5,504.32,4.4,9.7,te,{label:"Boden OG Flur"}),t.addFloor(bt.x0-.02,505.5,4.4,bt.zTop,te,{label:"Treppenpodest"}),t.addFloor(bt.x0,bt.x1,bt.zTop,bt.zBot,(A,L)=>Ep(L),{label:"Treppe"}),t.addSurface(499.5,505.6,-.5,11.2,"woodfloor",2.5,4.5),t.addSurface(bt.x0,bt.x1,bt.zTop-.05,bt.zBot,"stairs",-.2,3.3);let S=new W(Ze(8.2,11.8,2),e.plasterW);S.rotation.x=Math.PI/2,S.position.set(501.5,on,5.6),s.add(S),t.tag="Leons Zimmer";let v=te;a(499.9,500,0,4.4,v,on,e.wallpaper),a(499.9,504.1,-.1,0,v,on,e.wallpaper),l(504,504.1,0,4.4,v,on,[[1.4,2.8,2.1,.9]],e.wallpaper),c(499.9,505.4,4.4,4.5,v,on,[[502.2,503.1,2.1]],e.wallpaper);for(let A of[502.2,503.1])n.add(z(.06,2.1,.14,1),e.white,A,v+1.05,4.45);let E=f(.88,2.05);E.position.set(502.21,v,4.45),s.add(E);let _=t.addBox(502.2,503.1,4.4,4.5,v-.1,v+2.2,{label:"Zimmert\xFCr"}),M={v:0,target:0};t.updaters.push(A=>{M.v+=(M.target-M.v)*(1-Math.exp(-1.8*A)),E.rotation.y=M.v*1.45,_.enabled=M.v<.2}),t.addRegionBox(500,504,0,4.4,{label:"Leons Zimmer",minY:2,maxY:9}),t.addRegionBox(502.2,503.1,3.8,5.1,{label:"Zimmert\xFCr",minY:2,maxY:9}),n.add(z(1,.32,2.1,1),e.darkWood,500.55,v+.16,1.15),n.add(z(.96,.16,2,1),tt("mattressW",{color:13157560}),500.55,v+.4,1.15);let I=new W(z(1,.12,1.4,1),tt("duvet",{color:3820126}));I.position.set(500.58,v+.52,1.55),I.rotation.set(.02,.06,-.03),I.castShadow=!0,s.add(I),n.add(z(.6,.12,.35,1),tt("pillow",{color:13683904}),500.55,v+.54,.35),o(500,501.1,0,2.25,v-.1,v+.6);let P=new W(new Yt(.6,.85),new xe({map:$f()}));P.position.set(500.02,v+1.6,1.3),P.rotation.y=Math.PI/2,s.add(P),n.add(z(1.7,.05,.7,1),e.wood,502.45,v+.75,.4);for(let A of[501.65,503.25])n.add(z(.05,.75,.66,1),e.wood,A,v+.375,.4);o(501.6,503.3,0,.78,v-.1,v+.85),n.add(z(.62,.38,.04,1),e.black,502.4,v+1.07,.2),n.add(z(.05,.2,.05,1),e.black,502.4,v+.86,.22);let O=new W(new Yt(.58,.34),new Be({map:Yf()}));O.position.set(502.4,v+1.07,.225),s.add(O),t.addLamp({pos:[502.4,v+1.1,.6],color:6982360,intensity:.9,distance:3.2,visibleDist:30}),n.add(z(.45,.02,.15,1),e.black,502.35,v+.785,.55),n.add(z(.06,.02,.1,1),e.black,502.75,v+.785,.55),n.add(_t(.07,.08,.02,10,1),e.black,501.85,v+.78,.2),n.add(_t(.012,.012,.4,6,1),e.black,501.85,v+.98,.2),n.add(_t(.06,.1,.12,10,1),e.black,501.9,v+1.17,.27);let k=new ee,H=new W(z(.075,.01,.155,1),tt("pbody",{color:1118481}));k.add(H);let N=new W(new Yt(.068,.145),new Be({color:657930}));N.rotation.x=-Math.PI/2,N.position.y=.006,k.add(N),k.position.set(503,v+.78,.5),k.rotation.y=-.3,s.add(k);let X=dn(10137855,.5,0);X.position.set(503,v+.83,.5),s.add(X),h.objects.homePhone={group:k,pos:new U(503,v+.8,.5),light(A){N.material.color.set(A?9086184:657930),X.material.opacity=A?.6:0}},n.add(z(.45,.05,.45,1),e.black,502.4,v+.47,1.25),n.add(z(.45,.5,.05,1),e.black,502.4,v+.78,1.47),n.add(_t(.03,.03,.45,6,1),e.metal,502.4,v+.23,1.25),o(502.15,502.65,1,1.5,v-.1,v+.9);let Z=new ee,$=new W(z(.5,.55,.12,1),tt("jacket",{color:1976862}));$.position.set(0,.8,1.5),$.rotation.x=.15,Z.add($);let et=new W(z(.12,.45,.12,1),$.material);et.position.set(-.28,.72,1.45),et.rotation.z=.2,Z.add(et);let J=et.clone();J.position.x=.28,J.rotation.z=-.2,Z.add(J),Z.position.set(502.4,v,0),Z.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),s.add(Z),h.objects.jacket={group:Z,pos:new U(502.4,v+.9,1.5)},n.add(z(.62,2.1,1.3,1),e.wood,500.36,v+1.05,3.75),n.add(z(.01,1.9,.01,1),e.black,500.68,v+1.05,3.75),o(500,500.7,3.05,4.4,v-.1,v+2.2),n.add(z(.4,.15,.35,1),tt("laundry",{color:3816006}),501,v+.08,3.9,0,.4,0),n.add(z(.3,1.8,.9,1),e.wood,503.83,v+.9,3.6);for(let A=0;A<4;A++){n.add(z(.3,.03,.9,1),e.darkWood,503.83,v+.25+A*.45,3.6);for(let L=0;L<7;L++)(L+A)%5!==0&&n.add(z(.2,.2+(L*7+A)%4*.03,.06,1),tt("book"+(L+A)%5,{color:[6957602,2767450,3824186,8022592,3815994][(L+A)%5]}),503.86,v+.37+A*.45,3.25+L*.1)}o(503.65,504,3.1,4.1,v-.1,v+2),n.add(z(.4,.5,.4,1),e.wood,500.3,v+.25,2.55),o(500,500.5,2.33,2.77,v-.1,v+.6),n.add(_t(.06,.08,.03,10,1),e.black,500.3,v+.52,2.5),n.add(_t(.012,.012,.25,6,1),e.black,500.3,v+.65,2.5),n.add(_t(.07,.11,.13,12,1),tt("lampShade",{color:14208180}),500.3,v+.82,2.5),n.add(z(.35,.45,.2,1),tt("backpack",{color:1976890}),501.5,v+.22,3.95,.1,.3,0);for(let A of[0,.14])n.add(z(.11,.09,.29,1),tt("sneakerW",{color:14079696}),502+A,v+.045,3.75,0,.15,0);let st=new W(new qn(.09,.015,6,16,Math.PI),e.black);st.position.set(502.85,v+.84,.35),st.rotation.set(0,.4,0),s.add(st),n.add(_t(.1,.08,.2,10,1),tt("pot",{color:9062960}),503.85,v+1.02,1.7);let ft=new W(Sp(.5,.45),e.hedge);ft.position.set(503.85,v+1.1,1.7),s.add(ft),n.add(_t(.18,.22,.12,14,1),tt("ceilLamp",{color:13156528}),502,on-.06,2.2),n.add(_t(.15,.15,.02,14,1),tt("ceilLampG",{color:15261904}),502,on-.125,2.2),n.add(_t(.006,.006,.8,4,1),e.black,502.5,v+.4,.1);let Dt=new W(new Yt(1.6,1.1),tt("rug",{color:4864564}));Dt.rotation.x=-Math.PI/2,Dt.position.set(501.9,v+.005,2.6),Dt.receiveShadow=!0,s.add(Dt),d(504.04,v+1.5,2.1,1.4,1.2,-Math.PI/2);for(let A of[1.25,2.95]){let L=new W(z(.04,1.8,.4,1),tt("curtain",{color:4860458}));L.position.set(503.92,v+1.55,A),s.add(L)}n.add(z(.2,.04,1.5,1),e.white,503.9,v+.9,2.1),t.addLamp({pos:[503.4,v+2.3,2.1],color:16754784,intensity:3.5,distance:6,visibleDist:30}),t.tag="OG Flur",l(501.95,502.05,4.5,9.7,v,on,[[6.4,7.3,2.1]]);for(let A of[6.4,7.3])n.add(z(.14,2.1,.06,1),e.white,502,v+1.05,A);c(501.95,bt.x0,9.6,9.7,v,on,[[502.6,503.5,2.1]]);let zt=f(.88,2.05);zt.position.set(502.61,v,9.65),s.add(zt);let it=t.addBox(502.6,503.5,9.6,9.7,v-.1,v+2.2,{label:"Badt\xFCr"}),Tt={v:0,target:0};t.updaters.push(A=>{Tt.v+=(Tt.target-Tt.v)*(1-Math.exp(-2.2*A)),zt.rotation.y=-Tt.v*1.4,it.enabled=Tt.v<.2}),l(505.4,505.6,4.4,15.6,1.5,on,[[8.5,9.9,1.8,.5]]),d(505.38,2.65,9.2,1.3,1.25,-Math.PI/2,!1),t.addLamp({pos:[504.9,2.6,9.2],color:9083592,intensity:1.6,distance:5,visibleDist:30}),n.add(z(.06,.06,2.45,1),e.darkWood,bt.x0,v+.95,8.42);for(let A=7.3;A<9.6;A+=.18)n.add(z(.03,.92,.03,1),e.white,bt.x0,v+.46,A);o(bt.x0-.05,bt.x0+.05,bt.zTop-.02,9.7,2.9,v+1,{label:"Gel\xE4nder"}),a(bt.x0,505.4,11.15,11.25,v,on),a(bt.x0-.05,bt.x0+.05,9.7,11.2,v,on),t.tag="Bad",a(bt.x0-.05,bt.x0+.05,11.2,12.7,v,on),a(501.95,502.05,9.7,12.7,v,on,e.white),a(501.95,bt.x0+.05,12.6,12.7,v,on,e.white);let kt=new W(Ze(2.3,3,.6),p);kt.rotation.x=-Math.PI/2,kt.position.set(503.15,v+.004,11.15),kt.receiveShadow=!0,s.add(kt);let F=new W(Ze(2.4,1.4,2),e.plasterW);F.rotation.x=Math.PI/2,F.position.set(503.15,on-.002,12),s.add(F),t.addFloor(502,bt.x0,9.6,12.65,te,{label:"Boden Bad"}),t.addSurface(502,bt.x0,9.7,12.6,"tile",2.5,4.5),t.addRegionBox(502.05,bt.x0-.05,9.55,11.86,{label:"Bad",minY:2,maxY:9}),t.addRegionBox(502.62,503.48,9.2,10.1,{label:"Badt\xFCr",minY:2,maxY:9}),n.add(z(1.74,.56,.7,1),e.white,502.98,v+.28,12.24),n.add(z(1.56,.02,.54,1),tt("tubIn",{color:10133670}),502.98,v+.565,12.24),t.addBox(502.1,503.86,11.88,12.6,v-.1,v+.56,{label:"Badewanne"}),n.add(_t(.012,.012,1.78,6,1),e.metal,502.98,v+2.02,11.88,0,0,Math.PI/2);let C=new W(z(1,1.85,.02,1),tt("curtainB",{color:12108470}));C.geometry.translate(-.5,0,0),C.position.set(503.84,v+1.08,11.87),C.scale.x=.35,s.add(C),n.add(z(.48,.38,.38,1),e.white,503.86,v+.19,10.2),n.add(z(.46,.04,.38,1),e.white,503.86,v+.4,10.2),n.add(z(.17,.42,.42,1),e.white,504.15,v+.62,10.2),o(503.55,bt.x0,9.95,10.45,v-.1,v+.85),n.add(z(.44,.16,.52,1),e.white,502.3,v+.84,10.75),n.add(_t(.07,.08,.76,8,1),e.white,502.3,v+.38,10.75),n.add(_t(.012,.012,.16,6,1),e.metal,502.12,v+1,10.75,0,0,1.2),o(502.05,502.55,10.45,11.05,v-.1,v+.95);let K=new W(new Yt(.5,.7),new fs({color:1711652,specular:6715272,shininess:90}));K.position.set(502.07,v+1.5,10.75),K.rotation.y=Math.PI/2,s.add(K),n.add(z(.04,.6,.35,1),tt("towel",{color:5925498}),502.08,v+1.25,11.5),d(503,v+1.85,12.58,.7,.5,Math.PI,!1);let nt=new W(new Yt(.8,.5),tt("bathmat",{color:6969930}));nt.rotation.x=-Math.PI/2,nt.position.set(503,v+.008,11.5),s.add(nt),t.addLamp({pos:[503,v+1.7,12.1],color:8228544,intensity:1.1,distance:3.4,visibleDist:30});{let A=Math.hypot(bt.zBot-bt.zTop,te),L=new W(_t(.025,.025,A,8,1),e.darkWood);L.position.set(bt.x1-.06,te/2+.92,(bt.zTop+bt.zBot)/2),L.rotation.x=Math.atan2(bt.zBot-bt.zTop,te),s.add(L)}t.addRegionBox(502,bt.x0+.1,4.4,9.6,{label:"OG Flur",minY:2,maxY:9}),t.addRegionBox(503.8,505.4,4.4,bt.zTop+.4,{label:"Treppenpodest",minY:2,maxY:9}),t.addRegionBox(bt.x0,505.4,bt.zTop-.4,bt.zBot+.6,{label:"Treppe"});let ut=new W(new Yt(.8,4.4),tt("runner",{color:5910568}));ut.rotation.x=-Math.PI/2,ut.position.set(503.15,v+.006,7.1),ut.receiveShadow=!0,s.add(ut);for(let[A,L]of[[5.2,5925498],[8.4,8022602]]){n.add(z(.03,.42,.34,1),e.darkWood,502.07,v+1.6,A);let V=new W(new Yt(.3,.36),tt("pic"+A,{color:L}));V.position.set(502.09,v+1.6,A),V.rotation.y=Math.PI/2,s.add(V)}let Ft=new W(z(.04,.08,.06,1),$n(16756832));Ft.position.set(502.07,v+.3,8.9),s.add(Ft);let Bt=dn(16752720,.6,.5);Bt.position.set(502.12,v+.3,8.9),s.add(Bt),t.addLamp({pos:[502.4,v+.4,8.9],color:16751168,intensity:1.2,distance:4.2,visibleDist:30}),n.add(z(.4,.8,.9,1),e.wood,504,v+.4,5.3),o(503.75,504.3,4.8,5.8,v-.1,v+.85),n.add(_t(.07,.06,.2,10,1),tt("vase",{color:4872810}),504,v+.9,5.1);let $t=Sn([{t:"Bitte leise :)",font:'40px "Comic Sans MS"'}],.3,.12,{w:256,h:100,bg:"#e8e0c8",border:null});$t.position.set(502.08,v+1.5,6.85),$t.rotation.y=Math.PI/2,s.add($t),t.tag="Elternschlafzimmer",a(497.5,497.6,4.4,9.7,v,on),a(497.5,501.95,4.4,4.5,v,on),a(497.5,501.95,9.6,9.7,v,on),d(497.62,v+1.5,7,1,1,Math.PI/2);for(let A of[6.35,7.65]){let L=new W(z(.04,1.5,.45,1),tt("curtainP",{color:3816008}));L.position.set(497.68,v+1.5,A),s.add(L)}n.add(z(2,.34,1.8,1),e.darkWood,498.7,v+.17,6.9),n.add(z(.08,.9,1.84,1),e.darkWood,497.66,v+.45,6.9),n.add(z(1.94,.16,1.74,1),tt("mattressP",{color:12894388}),498.7,v+.42,6.9),n.add(z(.45,.12,.6,1),tt("pillow",{}),497.95,v+.56,6.45),n.add(z(.45,.12,.6,1),tt("pillow",{}),497.95,v+.56,7.35);let at=new W(z(1.5,.1,1.76,1),tt("duvetP",{color:5918276}));at.position.set(498.95,v+.54,6.9),at.castShadow=!0,s.add(at);let pe=new ee,Ie=new W(new Pi(.22,1.1,4,10),tt("duvetP",{}));Ie.rotation.z=Math.PI/2,Ie.scale.set(.72,1,1.45),Ie.position.set(.15,.1,0),pe.add(Ie);let me=new W(new Ae(.2,10,8),tt("duvetP",{}));me.scale.set(1,.75,1.3),me.position.set(-.42,.12,.02),pe.add(me);let Ye=new W(new Pi(.045,.42,3,8),tt("dadSkin",{color:9268826}));Ye.rotation.z=Math.PI/2-.12,Ye.rotation.y=.35,Ye.position.set(-.12,.24,.27),pe.add(Ye);let Se=new W(new Ae(.11,10,8),tt("dadSkin",{color:9268826}));Se.position.set(-.68,.14,.05),pe.add(Se);let $e=new W(new Ae(.115,10,8,0,Math.PI*2,0,Math.PI*.55),tt("dadHair",{color:2761760}));$e.position.copy(Se.position),$e.rotation.z=Math.PI/2,pe.add($e),pe.position.set(498.6,v+.56,6.55),pe.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),s.add(pe),o(497.6,499.7,6,7.8,v-.1,v+.65);for(let A of[5.7,8.1])n.add(z(.45,.5,.4,1),e.wood,497.85,v+.25,A);o(497.6,498.1,5.48,5.92,v-.1,v+.55),o(497.6,498.1,7.88,8.32,v-.1,v+.55),t.addRegionBox(497.65,501.95,4.5,9,{label:"Elternschlafzimmer",minY:2,maxY:9}),t.addRegionBox(501.3,502.7,6.45,7.25,{label:"Elternt\xFCr",minY:2,maxY:9});let Fe=new ee;{let A=new W(new Pi(.2,1,4,10),tt("duvetP",{}));A.rotation.z=Math.PI/2,A.scale.set(.7,1,1.4),A.position.set(.12,.08,0),Fe.add(A);let L=new W(new Ae(.105,10,8),tt("momSkin",{color:10846310}));L.position.set(-.66,.13,0),Fe.add(L);let V=new W(new Ae(.13,10,8),tt("momHair",{color:3811874}));V.scale.set(1.1,.8,1.25),V.position.set(-.7,.12,.02),Fe.add(V)}Fe.position.set(498.6,v+.56,7.3),Fe.visible=!1,s.add(Fe),n.add(_t(.08,.13,.16,12,1),tt("lampShade",{}),497.85,v+.72,8.1);let Oe=t.addLamp({pos:[498.2,v+.9,8],color:16756848,intensity:4.5,distance:6,visibleDist:30,enabled:!1}),q=dn(16756848,.6,0);q.position.set(497.85,v+.75,8.1),s.add(q),n.add(z(1.6,2.1,.6,1),e.wood,499.4,v+1.05,9.3),o(498.6,500.2,9,9.6,v-.1,v+2.2);let ze=new ee;for(let A of[0,.15]){let L=new W(z(.1,.05,.26,1),tt("slipper",{color:3816018}));L.position.set(A,.025,0),ze.add(L)}ze.position.set(499.9,v,6.7),ze.rotation.y=.3,s.add(ze);let ue=f(.88,2.05);ue.position.set(502,v,6.42),ue.rotation.y=-Math.PI/2,s.add(ue);let ke=t.addBox(501.93,502.07,6.4,7.3,v-.1,v+2.2,{label:"Elternt\xFCr"}),At={v:0,target:0};t.updaters.push(A=>{At.v+=(At.target-At.v)*(1-Math.exp(-2.6*A)),ue.rotation.y=-Math.PI/2-At.v*1.45,ke.enabled=At.v<.15});let Le=new W(new Yt(.85,.32),new Be({map:Gy(),transparent:!0,opacity:0,depthWrite:!1,blending:Li}));Le.rotation.x=-Math.PI/2,Le.rotation.z=Math.PI/2,Le.position.set(502.21,v+.008,6.85),s.add(Le);let Qt=t.addLamp({pos:[502.3,v+.12,6.85],color:16755302,intensity:1.2,distance:2.2,visibleDist:30,enabled:!1}),qt=new W(new Yt(.3,.2),new Be({color:0,transparent:!0,opacity:.85,depthWrite:!1}));qt.rotation.x=-Math.PI/2,qt.position.set(502.12,v+.01,6.85),qt.visible=!1,s.add(qt),t.tag="Treppe";for(let A=0;A<bt.n;A++){let L=bt.zBot-A*bt.run,V=L-bt.run,ct=(A+1)*bt.rise;n.add(z(bt.x1-bt.x0,.04,bt.run+.03,1),x,(bt.x0+bt.x1)/2,ct-.02,(V+L)/2),n.add(z(bt.x1-bt.x0,bt.rise,.02,1),e.white,(bt.x0+bt.x1)/2,ct-bt.rise/2,L-.01)}{let A=Math.hypot(bt.zBot-bt.zTop,te),L=new W(z(.05,.3,A,1),e.white);L.position.set(bt.x0-.02,te/2+.05,(bt.zTop+bt.zBot)/2),L.rotation.x=Math.atan2(te,bt.zBot-bt.zTop),s.add(L)}t.tag="EG Au\xDFenw\xE4nde";let D=0,T=wp;l(495.8,496,1.8,15.6,D,T,[[8.4,10.4,2.2,.9]]),d(496.02,1.55,9.4,2,1.3,Math.PI/2),l(505.4,505.6,1.8,15.6,D,1.5),a(505.4,505.6,1.8,4.4,1.5,T),c(495.8,505.6,1.8,2,D,T,[[497.4,498.9,2.2,.9],[502.6,503.9,2.2,1.1]]),d(498.15,1.55,2.02,1.5,1.3,0),d(503.25,1.65,2.02,1.3,1.1,0),c(495.8,505.6,15.4,15.6,D,T,[[497.4,499.4,2.2,.9],[503.1,504.1,2.1]]),d(498.4,1.55,15.38,2,1.3,Math.PI),t.addLamp({pos:[498.3,1.6,15],color:16754784,intensity:1.8,distance:5.5,visibleDist:30}),t.addLamp({pos:[496.4,1.6,9.4],color:16754784,intensity:2.2,distance:6,visibleDist:30}),t.addLamp({pos:[503.25,1.7,2.4],color:9347272,intensity:1.5,distance:4.5,visibleDist:30}),t.tag="K\xFCche",l(500.95,501.05,2,6,D,T,[[3.4,4.4,2.1]]),c(500.95,505.4,5.95,6.05,D,T,[[502.3,503.4,2.1]]),n.add(z(3.4,.9,.62,1),tt("kCab",{color:9077878}),502.9,.45,2.31),o(501.05,504.65,2,2.65,-1,.95),n.add(z(3.42,.04,.64,1),tt("kTop",{color:3814962}),502.9,.92,2.32),n.add(z(.5,.05,.38,1),e.metal,503.3,.93,2.3),n.add(z(.6,.02,.5,1),e.black,501.9,.95,2.3);for(let A of[501.75,502.05])for(let L of[2.18,2.42])n.add(_t(.08,.08,.005,14,1),e.darkMetal,A,.962,L);n.add(z(1.6,.7,.35,1),tt("kCab",{}),501.85,1.95,2.18),n.add(z(.9,.7,.35,1),tt("kCab",{}),504.2,1.95,2.18),n.add(_t(.07,.08,.2,12,1),e.metal,504.4,1.04,2.35);for(let A=0;A<4;A++){let L=new W(new Ae(.045,8,6),tt("fruit"+A%2,{color:A%2?9054746:11569706}));L.position.set(502.55+A%2*.07,.98+Math.floor(A/2)*.05,2.45+(A>>1)*.06),s.add(L)}n.add(_t(.12,.08,.06,14,1),tt("bowl",{color:10130568}),502.6,.96,2.5),n.add(z(.66,1.85,.66,1),tt("fridge",{color:13158080}),505.05,.925,3.15),o(504.7,505.4,2.8,3.5,-1,1.9);let j=new ee,gt=new W(z(.05,1.82,.66,1),tt("fridgeD",{color:13816010}));gt.position.set(0,.91,.33),j.add(gt),j.position.set(504.7,.02,2.82),s.add(j);let ht=t.addLamp({pos:[504.4,1.2,3.15],color:14543103,intensity:5,distance:5,visibleDist:30,enabled:!1}),Rt={v:0,t:0};t.updaters.push(A=>{Rt.v+=(Rt.t-Rt.v)*(1-Math.exp(-4*A)),j.rotation.y=-Rt.v*1.6});let Ct=Sn([{t:"LEON:",font:'bold 30px "Comic Sans MS"'},{t:"M\xFCll raus!!",font:'30px "Comic Sans MS"'},{t:"\u2013 Papa",font:'26px "Comic Sans MS"'}],.16,.16,{w:200,h:200,bg:"#e6e0a8",border:null});Ct.position.set(504.69,1.35,3),Ct.rotation.y=-Math.PI/2,s.add(Ct),n.add(z(.8,.04,.8,1),e.wood,502.9,.74,4.5);for(let[A,L]of[[-.35,-.35],[.35,-.35],[-.35,.35],[.35,.35]])n.add(z(.04,.74,.04,1),e.wood,502.9+A,.37,4.5+L);o(502.5,503.3,4.1,4.9,-1,.78);for(let A of[-.62,.62])n.add(z(.4,.04,.4,1),e.wood,502.9,.45,4.5+A),n.add(z(.4,.45,.04,1),e.wood,502.9,.7,4.5+A*1.32);let rt=new W(_t(.14,.14,.03,20,1),tt("clockF",{color:14736592}));rt.rotation.z=Math.PI/2,rt.position.set(501.07,2.1,5),s.add(rt);let ot=t.addLamp({pos:[503.2,2.6,4.1],color:16773336,intensity:6,distance:7,visibleDist:30,enabled:!1});n.add(_t(.2,.25,.1,14,1),tt("ceilLamp",{}),503.2,T-.05,4.1);let St=new ee;for(let A=0;A<2;A++){let L=new W(new Xe(.015,.004,.06),tt("hkey",{color:11573840}));L.position.set(A*.025,0,0),L.rotation.y=A*.4,St.add(L)}let B=new W(new qn(.02,.004,4,10),tt("hkey",{}));B.rotation.x=Math.PI/2,B.position.set(.01,0,-.04),St.add(B);let lt=new W(new Xe(.03,.01,.045),tt("fobG",{color:2779706}));lt.position.set(.04,.003,-.07),St.add(lt),St.position.set(497.9,te+.505,5.62),St.rotation.y=.6,s.add(St),h.objects.homeKeys={group:St,pos:new U(497.9,te+.52,5.62)},t.addRegionBox(501.05,505.4,2.65,5.95,{label:"K\xFCche",minY:-1,maxY:1.6}),t.tag="EG Flur",l(501.95,502.05,6,15.4,D,T,[[11.6,13.2,2.1]]);for(let A of[11.6,13.2])n.add(z(.14,2.1,.06,1),e.white,502,1.05,A);l(bt.x0-.05,bt.x0+.05,bt.zTop,bt.zBot,D,T,[[7.6,8.4,2]]);{let A=Ep(9.9)-.08;r(505.4-(bt.x0+.05),A,.1,i,(bt.x0+.05+505.4)/2,A/2,9.9),t.addBox(bt.x0+.05,505.4,9.85,9.95,-1,A-.02,{label:"Kammer-R\xFCckwand"})}a(bt.x0+.05,505.4,bt.zTop-.05,bt.zTop+.05,D,T);let Q=new ee,yt=tt("closetDoor",{color:11051668});for(let A=0;A<16;A++){let L=new W(z(.03,.06,.78,1),yt);L.position.set(0,.15+A*.115,.39),L.rotation.z=.5,Q.add(L)}for(let A of[.02,.76]){let L=new W(z(.04,1.98,.04,1),yt);L.position.set(0,.99,A),Q.add(L)}Q.position.set(bt.x0-.02,0,7.6),Q.rotation.y=.35,s.add(Q),n.add(z(.4,.5,.35,1),tt("box2",{color:6969920}),505.1,.25,9.55),n.add(z(.35,.3,.3,1),tt("box2",{}),505.1,.65,9.55),n.add(_t(.015,.015,1.3,6,1),e.wood,505.3,.65,7.5,0,0,.12),n.add(z(.9,.9,.38,1),e.white,504.85,.45,6.25),o(504.35,505.4,6,6.45,-1,.95);let vt=new W(new Yt(.8,4.6),tt("runner",{}));vt.rotation.x=-Math.PI/2,vt.position.set(503.15,.006,8.6),vt.receiveShadow=!0,s.add(vt),t.addRegionBox(502.05,bt.x0+.05,5.95,11.8,{label:"EG Flur",minY:-1,maxY:1.6}),t.addRegionBox(502.3,503.4,5.3,6.7,{label:"K\xFCchent\xFCr",minY:-1,maxY:1.6}),t.addRegionBox(503.8,505.4,5.95,7.2,{label:"Nische",minY:-1,maxY:1.6}),t.tag="Diele",t.addRegionBox(502.05,505.4,11.2,15.4,{label:"Diele",minY:-1,maxY:1.6}),t.addRegionBox(501.3,502.8,11.65,13.15,{label:"Durchgang Wohnzimmer",minY:-1,maxY:1.6});let wt=new ee,Wt=new W(z(1,2.1,.06,1),tt("frontDoor",{color:4863014}));Wt.position.set(.5,1.05,0),wt.add(Wt);let ae=new W(z(.14,.03,.08,1),e.metal);ae.position.set(.88,1.05,-.04),wt.add(ae);let xt=new W(new Ii(.012,8),$n(3351057));xt.position.set(.5,1.55,-.035),xt.rotation.y=Math.PI,wt.add(xt);let Xt=new W(_t(.006,.006,.22,4,1),e.metal);Xt.rotation.z=Math.PI/2,Xt.position.set(.86,1.45,-.05),wt.add(Xt),wt.position.set(503.1,0,15.43),s.add(wt);let re=t.addBox(503.1,504.1,15.38,15.5,-1,2.2,{label:"Haust\xFCr"}),It={v:0,t:0};t.updaters.push(A=>{It.v+=(It.t-It.v)*(1-Math.exp(-1.8*A)),wt.rotation.y=It.v*1.25});let ge=new W(new Yt(3,3),new Be({map:Tp(!0)}));ge.position.set(503.6,1.4,16.4),ge.rotation.y=Math.PI,s.add(ge);let Ke=t.addLamp({pos:[503.6,1.8,15.8],color:16756848,intensity:4,distance:6,visibleDist:30,enabled:!1});n.add(z(.35,.45,1,1),e.wood,505.2,.22,12.6),o(504.95,505.4,12.1,13.1,-1,.5);for(let A=0;A<4;A++)n.add(z(.12,.08,.28,1),tt("shoe"+A%2,{color:A%2?2763306:6969930}),505.15-A%2*.05,.49,12.2+A*.24,0,.2*(A%2),0);for(let A=0;A<3;A++)n.add(z(.12,.8,.35,1),tt("coat"+A,{color:[2764864,4864554,3815994][A]}),505.32,1.3,13.4+A*.4,0,0,-.03);o(505.15,505.4,13.2,14.4,-1,1.8),n.add(z(.04,.05,1.3,1),e.wood,505.37,1.78,13.8),n.add(z(.03,.18,.4,1),e.wood,505.37,1.45,14.85);let wn=new W(new Yt(.5,.9),new fs({color:1711652,specular:6715272,shininess:90}));wn.position.set(502.07,1.4,14.2),wn.rotation.y=Math.PI/2,s.add(wn);let zn=new W(new Yt(.9,.55),tt("doormat",{color:4865582}));zn.rotation.x=-Math.PI/2,zn.position.set(503.6,.006,14.95),s.add(zn),n.add(_t(.1,.1,.5,10,1),e.darkMetal,502.3,.25,15.1),t.tag="Wohnzimmer",t.addRegionBox(496,501.95,5.5,15.4,{label:"Wohnzimmer",minY:-1,maxY:1.6}),t.addRegionBox(496,500.95,2,6.6,{label:"Essbereich",minY:-1,maxY:1.6}),t.addRegionBox(500.3,501.7,3.45,4.35,{label:"Durchgang K\xFCche",minY:-1,maxY:1.6});let xi=new W(new Yt(3.2,3.6),m);xi.rotation.x=-Math.PI/2,xi.position.set(499.6,.006,9.2),xi.receiveShadow=!0,s.add(xi),t.addSurface(498,501.2,7.4,11,"carpet",-.5,1.4);let ri=tt("sofa",{color:3949648});n.add(z(.9,.42,2.3,1),ri,498.75,.21,9),n.add(z(.25,.85,2.3,1),ri,498.35,.43,9);for(let A of[7.78,10.22])n.add(z(.9,.6,.18,1),ri,498.75,.3,A);for(let A of[8.45,9.55])n.add(z(.62,.12,1,1),tt("sofaC",{color:4607580}),498.95,.48,A);o(498.2,499.2,7.7,10.3,-1,.9),n.add(z(.6,.04,1.1,1),e.darkWood,500.25,.42,9);for(let[A,L]of[[-.25,-.5],[.25,-.5],[-.25,.5],[.25,.5]])n.add(z(.04,.4,.04,1),e.darkWood,500.25+A,.2,9+L);o(499.9,500.6,8.4,9.6,-1,.46),n.add(z(.45,.5,1.8,1),e.darkWood,501.7,.25,9),o(501.45,501.95,8.1,9.9,-1,.55),n.add(z(.06,.68,1.2,1),e.black,501.82,.92,9);let yi=new W(new Ae(.008,6,4),$n(16722458));yi.position.set(501.78,.6,9.45),s.add(yi);let Oi=dn(16722458,.12,.6);Oi.position.copy(yi.position),s.add(Oi);let Cn=new W(new Yt(1.12,.62),new Be({color:0}));Cn.position.set(501.785,.92,9),Cn.rotation.y=-Math.PI/2,s.add(Cn);let vi=A=>.55+.45*Math.abs(Math.sin(A*7.3)*Math.sin(A*2.1+1.3)),Kn=t.addLamp({pos:[500.95,1,9],color:9087231,intensity:5.5,distance:7,visibleDist:30,enabled:!1,flicker:vi}),Es=!1,Jn=A=>{if(!Es)return;let L=vi(h.time);Cn.material.color.setRGB(.22*L,.27*L,.4*L)};Jn.visual=!0,t.updaters.push(Jn);let _i=(()=>{let A=document.createElement("canvas");A.width=64,A.height=128;let L=A.getContext("2d");L.fillStyle="#000",L.filter="blur(1.5px)",L.beginPath(),L.ellipse(32,22,11,13,0,0,Math.PI*2),L.fill(),L.beginPath(),L.moveTo(8,128),L.quadraticCurveTo(6,50,22,40),L.lineTo(42,40),L.quadraticCurveTo(58,50,56,128),L.fill();let V=new en(A);return V.colorSpace=rn,V})(),bi=(A,L,V,ct,pt)=>{let dt=new W(new Yt(pt*.5,pt),new Be({map:_i,transparent:!0,opacity:.92,depthWrite:!1}));return dt.position.set(A,L,V),dt.rotation.y=ct,dt.visible=!1,s.add(dt),dt},zi=bi(503.45,1.5,2.035,0,.9),Bi=bi(496.035,1.35,8.95,Math.PI/2,1.1);n.add(z(.8,.45,.8,1),ri,499.2,.22,12.9),n.add(z(.8,.8,.2,1),ri,499.2,.5,13.3),o(498.8,499.6,12.5,13.4,-1,.9),n.add(_t(.015,.015,1.5,6,1),e.black,500.3,.75,13.6),n.add(_t(.12,.2,.25,12,1),tt("lampShade",{}),500.3,1.55,13.6),n.add(z(1.8,2,.35,1),e.wood,500.6,1,15.2),o(499.7,501.5,15,15.4,-1,2.1);for(let A=0;A<4;A++)for(let L=0;L<9;L++)(L*3+A)%4&&n.add(z(.08,.24,.2,1),tt("book"+(L+A)%5,{}),499.85+L*.18,.32+A*.45,15.15);n.add(_t(.14,.11,.3,10,1),tt("pot",{}),496.4,.15,14.9);let Ts=new W(Sp(.7,1),e.hedge);Ts.position.set(496.4,.3,14.9),s.add(Ts);for(let A of[8.2,10.6]){let L=new W(z(.04,2,.5,1),tt("curtainL",{color:5917242}));L.position.set(496.06,1.4,A),s.add(L)}n.add(z(1.6,.05,.9,1),e.wood,498.4,.75,4);for(let[A,L]of[[-.7,-.38],[.7,-.38],[-.7,.38],[.7,.38]])n.add(z(.05,.75,.05,1),e.wood,498.4+A,.37,4+L);o(497.6,499.2,3.55,4.45,-1,.8);for(let[A,L,V]of[[497.9,3.3,0],[498.9,3.3,0],[497.9,4.7,Math.PI],[498.9,4.7,Math.PI]])n.add(z(.42,.04,.42,1),e.wood,A,.46,L),n.add(z(.42,.5,.04,1),e.wood,A,.72,L+(V?.2:-.2));n.add(z(.45,.85,1.6,1),e.darkWood,496.25,.42,4.8),o(496,496.5,4,5.6,-1,.9),t.tag="Vater";let Mi=bs({coat:5661294,pants:2830392,skin:9268826,hood:!1,height:1.84}),As=new W(new Ae(.122,12,8,0,Math.PI*2,0,Math.PI*.5),tt("dadHair",{}));As.position.set(0,.145,.01),Mi.neck.add(As);let Hi=new W(new Ae(.108,10,8,0,Math.PI*2,Math.PI*.55,Math.PI*.3),tt("stubble",{color:4864560}));Hi.position.set(0,.13,-.004),Mi.neck.add(Hi),Mi.root.visible=!1,s.add(Mi.root);let Gn=bs({coat:8019046,pants:5128264,skin:10846310,hood:!1,height:1.68,longCoat:!0});{let A=tt("momHair",{}),L=new W(new Ae(.118,12,8,0,Math.PI*2,0,Math.PI*.56),A);L.position.set(0,.135,.008),Gn.neck.add(L);let V=new W(z(.23,.34,.07,1),A);V.position.set(0,.02,.085),Gn.neck.add(V)}Gn.root.visible=!1,s.add(Gn.root);let Si=t.addLamp({pos:[503.15,on-.3,6.9],color:16769720,intensity:7,distance:8,visibleDist:40,enabled:!1});n.add(_t(.18,.22,.12,14,1),tt("ceilLamp",{}),503.15,on-.06,6.9);let R=(A,L,V,ct,pt,dt,Et)=>A.x>L&&A.x<V&&A.z>ct&&A.z<pt&&A.y>dt&&A.y<Et,G={dad:Mi,lump:pe,bedPos:[498.7,te,6.9],snorePos:new U(498.6,te+.6,6.6),doorPos:new U(502,te+1,6.85),feet:qt,feetZ:6.85,route:{bedside:[499.95,te,6.95],doorIn:[501.45,te,6.85],doorOut:[502.75,te,6.85],hall:[503.35,te,6.6],landing:[504.85,te,6.4],stairTop:[504.85,te,7.05],stairBot:[504.85,0,11.6],diele:[503.9,0,12.4],corrN:[503.15,0,8.9],kitchenDoor:[502.85,0,6.2],fridge:[504.2,0,3.15],lookLiving:[498.9,1,12],fridgeLook:[505.2,1.2,3.15],lookHall:[503.7,te+1.2,4.9],closet:[504.9,1,8.2],leonDoor:[502.65,te,5.05],leonLook:[501.6,te+.7,2],frontDoor:[503.6,0,14.4],lookFront:[503.6,1.2,15.6],bathLook:[503,te+1,11]},momRoute:[[499.6,0,9],[499.75,0,10.9],[501.2,0,12.35],[502.7,0,12.4],[503.9,0,12.2],[504.85,0,11.7],[504.85,te,7.05],[504.85,te,6.4],[503.35,te,6.6],[502.75,te,6.85],[501.45,te,6.85],[500.25,te,7.85]],mom:Gn,momLump:Fe,sofaSeat:[498.88,0,8.95],spots:{kammer:{id:"kammer",name:"In der Abstellkammer verstecken",pos:new U(bt.x0,.9,8),inside:[504.85,0,8],yaw:Math.PI/2,out:[503.55,0,8],overlay:"slats"},schrank:{id:"schrank",name:"Im Kleiderschrank verstecken",pos:new U(500.7,te+1.1,3.75),inside:[500.38,te,3.75],yaw:-Math.PI/2,out:[501.2,te,3.75],overlay:"slats"},bett:{id:"bett",name:"Ins Bett legen, schlafend stellen",pos:new U(500.55,te+.55,1.2),inside:[500.55,te+.42,1.35],yaw:Math.atan2(-2.1,-3.9),lying:!0,out:[501.45,te,1.5],overlay:"blanket"},dusche:{id:"dusche",name:"Hinter den Duschvorhang",pos:new U(503,te+1.1,11.86),inside:[502.7,te+.08,12.26],yaw:0,out:[502.95,te,11.25],overlay:"curtain"},elternschrank:{id:"elternschrank",name:"Im Schrank verstecken",pos:new U(499.4,te+1.1,9),inside:[499.4,te,9.3],yaw:0,out:[499.4,te,8.5],overlay:"slats"}},hideZones:[{minX:496.6,maxX:498.25,minZ:7.5,maxZ:10.5,y:0,name:"hinter dem Sofa"},{minX:496,maxX:497.4,minZ:2,maxZ:3.4,y:0,name:"Ecke im Essbereich"},{minX:501.1,maxX:502.2,minZ:0,maxZ:1,y:te,name:"unter dem Schreibtisch"}],closet:{door:new U(bt.x0,.9,8),inside:[504.85,0,8],out:[503.55,0,8]},parentsDoor:{set(A,L=!1){At.target=A,L||(At.v=A)}},gapLight(A){Le.material.opacity=A*.9,Qt.enabled=A>0},handle(){let A=ue.userData.handle;A.rotation.z=-.5,setTimeout(()=>{A.rotation.z=0},450)},bedLamp(A){Oe.enabled=A,q.material.opacity=A?.6:0},hallLamp(A){Si.enabled=A},roomDoor:{set(A,L=!1){M.target=A,L||(M.v=A)},get open(){return M.target>.1},pos:new U(502.65,te+1,4.45)},bathDoor:{set(A,L=!1){Tt.target=A,L||(Tt.v=A)},get open(){return Tt.target>.1},pos:new U(503.05,te+1,9.65)},curtain(A){C.scale.x=A?1.72:.35},tv(A){Es=A,Kn.enabled=A,A||Cn.material.color.set(0)},figure(A,L){(A==="kitchen"?zi:Bi).visible=L},figureMesh(A){return A==="kitchen"?zi:Bi},kitchenLamp(A){ot.enabled=A},fridge(A){Rt.t=A?1:0,ht.enabled=A},frontDoor:{set(A,L=!1){It.t=A,L||(It.v=A),re.enabled=A<.1,Ke.enabled=A>0},pos:new U(503.6,1.1,15.35),chainPos:new U(503.96,1.45,15.37)},isLit(A){return!!(Si.enabled&&(R(A,501.9,505.5,4.4,9.7,2.5,6)||R(A,bt.x0,bt.x1,bt.zTop,bt.zBot+.8,-.5,6))||(ot.enabled||ht.enabled)&&(R(A,501,505.4,2,6.4,-.5,2.5)||R(A,502,504.3,6,8,-.5,2.5))||Oe.enabled&&At.v>.3&&R(A,502,504.3,6,7.8,2.5,6))}};h.objects.home=G,h.objects.parentsDoor=G.snorePos,t.tag=""}var Xr=(s,t)=>Math.atan2(-s,-t),yc=class{constructor(t){this.H=t,this.man=t.dad,this.reset()}reset(t="sleep"){let e=this.H;this.mode=t,this.alert=0,this.stage=0,this.sus=0,this.t=0,this.route=null,this.ri=0,this.pause=0,this.lookYaw=null,this.caught=!1,this.say=null,this.stepT=0,this._huh=!1,this._fridgeOpen=!1,this.snoreAt=0,this.onBack=null,this.man.root.visible=!1,this.pos=new U(...e.bedPos),this.yaw=Math.PI/2,e.lump.visible=t!=="off",e.parentsDoor.set(0),e.gapLight(0),e.feet.visible=!1,e.bedLamp(!1),e.hallLamp(!1),e.kitchenLamp(!1),e.fridge(!1),this.snoring=t==="sleep",h.audio.ready&&(t==="off"?h.audio.stopLoop("snore",.2):(h.audio.loops.snore||h.audio.snore(e.snorePos),h.audio.setLoop("snore",.7,.3)))}hear(t,e,n){if(this.mode==="off"||h.dev&&h.dev.ignore)return;if(this.mode!=="sleep"){t>.15&&this.man.root.visible&&this.pos.distanceTo(e)<7&&(this.lookYaw=Xr(e.x-this.pos.x,e.z-this.pos.z),this.pause=Math.max(this.pause,1.2),this.sus=Math.min(.9,this.sus+t*.6));return}let i=this.H.bedPos,r=Math.hypot(e.x-i[0],e.z-i[2]),o=(Math.abs(e.y-i[1])>1.5?.3:1)/(1+(r/3.2)**2);this.alert=Math.min(1.3,this.alert+t*o*2.4)}wakeAndPatrol(){if(this.mode==="off")return;let t=this.H.route;this.mode="patrol",this.alert=1,this.route=[{p:t.bedside},{p:t.doorIn,door:1},{p:t.hall,lamp:"hall"},{p:t.landing},{p:t.stairTop},{p:t.stairBot},{p:t.diele,pause:1.3,look:t.lookLiving,say:"Leon \u2026?"},{p:t.corrN},{p:t.kitchenDoor,lamp:"kitchen"},{p:t.fridge,pause:4.2,fridge:!0,look:t.fridgeLook},{p:t.kitchenDoor,lampOff:"kitchen"},{p:t.corrN,closet:!0},{p:t.diele,pause:2,look:t.lookLiving,say:"Bist du wach?"},{p:t.stairBot},{p:t.stairTop},{p:t.landing},{p:t.hall,lampOff:"hall"},{p:t.doorIn,door:0},{p:t.bedside,end:!0}],this.ri=0,this.beginWalk()}beginWalk(){let t=this.H;this.snoring=!1,h.audio.setLoop("snore",0,.2),h.audio.creak(new U(...t.bedPos),1,.9),t.lump.visible=!1,t.bedLamp(!0),this.man.root.visible=!0,this.pos.set(...this.route[0].p),this.man.stand()}searchPatrol(){if(this.mode==="off")return;let t=this.H.route;this.mode="patrol",this.alert=1,this.route=[{p:t.bedside},{p:t.doorIn,door:1},{p:t.doorOut,pause:1.4,look:t.lookHall,say:"Wer ist da?"},{p:t.hall,lamp:"hall"},{p:t.leonDoor,pause:2.6,look:t.leonLook,leonCheck:!0},{p:t.hall,pause:1.2,look:t.bathLook},{p:t.landing},{p:t.stairTop},{p:t.stairBot},{p:t.diele,pause:1,look:t.lookLiving},{p:t.frontDoor,pause:2.2,look:t.lookFront,say:"Hm. Zu."},{p:t.diele},{p:t.corrN,closet:!0},{p:t.kitchenDoor,lamp:"kitchen"},{p:t.fridge,pause:4,fridge:!0,look:t.fridgeLook},{p:t.kitchenDoor,lampOff:"kitchen"},{p:t.corrN},{p:t.diele,pause:1.6,look:t.lookLiving,say:"Ich h\xF6r doch was \u2026"},{p:t.stairBot},{p:t.stairTop},{p:t.landing},{p:t.hall,lampOff:"hall"},{p:t.doorIn,door:0},{p:t.bedside,end:!0}],this.ri=0,this.beginWalk()}check(){let t=this.H.route;this.mode="check",this.route=[{p:t.bedside},{p:t.doorIn,door:1},{p:t.doorOut,pause:3.6,look:t.lookHall,say:"Leon? Bist du das?"},{p:t.doorIn,door:0},{p:t.bedside,end:!0}],this.ri=0,this.beginWalk()}backToBed(){let t=this.H;if(this.mode="sleep",this.route=null,this.man.root.visible=!1,t.lump.visible=!0,t.bedLamp(!1),t.gapLight(0),t.feet.visible=!1,this.alert=.3,this.stage=1,this.sus=0,this.snoreAt=h.time+9,h.audio.creak(new U(...t.bedPos),.7,.8),this.onBack){let e=this.onBack;this.onBack=null,e()}}update(t){if(this.mode==="off")return;let e=this.H,n=h.audio;if(this.t+=t,this.mode==="sleep"){this.alert=Math.max(0,this.alert-t*(this.alert>.6?.035:.06));let i=this.alert>=1?4:this.alert>.72?3:this.alert>.5?2:this.alert>.25?1:0;i!==this.stage&&this.enterStage(i,this.stage),this.stage=i,this.stage===0&&!this.snoring&&h.time>(this.snoreAt||0)&&(this.snoring=!0,n.setLoop("snore",.7,2)),this.stage>=3&&(e.feet.visible=!0,e.feet.position.z=e.feetZ+Math.sin(h.time*.9)*.25);let r=h.player;this.stage>=3&&!r.hidden&&r.p.y>2&&r.p.x<501.9&&r.p.z>4.4&&r.p.z<9.7&&!(h.dev&&h.dev.ignore)&&(this.sus+=t*1.6,this.sus>.3&&!this._huh&&(this._huh=!0,this.mumble("\u2026Leon?!")),this.sus>=1&&!this.caught&&(this.caught=!0,this.pos.set(...this.H.route.bedside),this.man.root.visible=!0,this.H.lump.visible=!1,this.man.stand(),h.story&&h.story.caughtByDad&&h.story.caughtByDad(this)));return}this.walk(t),this.spot(t)}enterStage(t,e){let n=this.H,i=h.audio;t>e?(t>=1&&this.snoring&&(this.snoring=!1,i.setLoop("snore",0,.15)),t===2&&(i.creak(new U(...n.bedPos),.9,1.1),this.mumble("Mmh \u2026?")),t===3&&(n.bedLamp(!0),n.gapLight(1),i.heavyStep(new U(...n.bedPos),.45),i.creak(n.doorPos,.4,.6)),t===4&&(n.handle(),i.burst({pos:n.doorPos,f:2400,q:5,d:.08,peak:.35}),this.check()),h.story&&h.story.onDadStage&&h.story.onDadStage(t)):(t<=2&&(n.gapLight(0),n.feet.visible=!1,n.bedLamp(!1)),t===0&&(this.snoreAt=h.time+5))}mumble(t){h.ui.say(t,2.2,"Papa (ged\xE4mpft)")}walk(t){let e=this.H,n=this.man;if(!this.route)return;let i=this.route[this.ri];if(this.pause>0){this.pause-=t,n.stand(),this.lookYaw!==null&&(this.yaw+=pi(this.yaw,this.lookYaw)*(1-Math.exp(-3*t))),this.apply();return}let r=new U(...i.p),a=r.x-this.pos.x,o=r.z-this.pos.z,l=Math.hypot(a,o),c=1.25;if(l>.08){let f=Math.min(1,c*t/l);this.pos.x+=a*f,this.pos.z+=o*f,this.yaw+=pi(this.yaw,Xr(a,o))*(1-Math.exp(-6*t)),n.walk(t,c),this.stepT=(this.stepT||0)-t,this.stepT<0&&(this.stepT=.55,h.audio.footstep(this.pos.y>1.5&&this.pos.z>7.2&&this.pos.z<11.2?"stairs":"woodfloor",.75,this.pos.clone().add(new U(0,.05,0))))}else{if(i.door!==void 0&&e.parentsDoor.set(i.door,!0),i.lamp==="hall"&&e.hallLamp(!0),i.lamp==="kitchen"&&e.kitchenLamp(!0),i.lampOff==="hall"&&e.hallLamp(!1),i.lampOff==="kitchen"&&e.kitchenLamp(!1),i.fridge?(e.fridge(!0),this._fridgeOpen=!0):this._fridgeOpen&&(e.fridge(!1),this._fridgeOpen=!1),i.say&&this.mumble(i.say),this.lookYaw=i.look?Xr(i.look[0]-this.pos.x,i.look[2]-this.pos.z):null,this.pause=i.pause||(i.door!==void 0?1.1:0),i.leonCheck){let f=h.story&&h.story._hideSpot;this.mumble(h.player.hidden&&f&&f.id==="bett"?"\u2026Schl\xE4ft.":"Leon \u2026?"),h.story&&h.story.mark("Papa schaut in Leons Zimmer")}if(i.closet&&h.player.hidden&&h.story&&h.story._hideSpot&&h.story._hideSpot.id==="kammer"){let f=e.route.closet;this.lookYaw=Xr(f[0]-this.pos.x,f[2]-this.pos.z),this.pause=2.6,h.audio.heartbeat(!0,2.6),h.story&&h.story.mark("Papa vor der Kammer")}if(i.end){this.backToBed();return}this.ri=Math.min(this.route.length-1,this.ri+1),i.fridge&&h.audio.burst({pos:this.pos,f:300,q:1,d:.3,peak:.3})}let u=h.world.groundAt(this.pos.x,this.pos.z,this.pos.y+.4,.5);isFinite(u)&&(this.pos.y=Rn(this.pos.y,u,18,t)),this.apply()}apply(){this.man.root.position.copy(this.pos),this.man.root.rotation.y=this.yaw,this.lookYaw!==null&&this.pause>0?this.man.neck.rotation.y=Te(pi(this.yaw,this.lookYaw),-.7,.7):this.man.neck.rotation.y=0}spot(t){if(this.caught||h.dev&&h.dev.ignore){this.sus=0;return}let e=h.player;if(e.hidden){this.sus=Math.max(0,this.sus-t);return}let n=new U(this.pos.x,this.pos.y+1.66,this.pos.z),i=h.camera.position,r=i.x-n.x,a=i.z-n.z,o=Math.hypot(r,a);if(Math.abs(i.y-n.y)>2.6){this.sus=Math.max(0,this.sus-t*.5);return}let l=this.H.isLit(e.p)||e.flashOn,c=e.flashOn?14:l?9:5.2,u=0;if(o<c&&(Math.abs(pi(this.yaw+this.man.neck.rotation.y,Xr(r,a)))<1||o<1.4)&&!h.world.segmentBlocked(n.x,n.z,i.x,i.z,(n.y+i.y)/2-this.pos.y+this.pos.y)){let p=this.H.hideZones.find(x=>e.p.x>x.minX&&e.p.x<x.maxX&&e.p.z>x.minZ&&e.p.z<x.maxZ&&Math.abs(e.p.y-x.y)<1),m=e.stance!=="stand";p&&m&&o>1.8?u=0:u=(1-o/c)*(m?1.1:2)*(e.flashOn?2:1)+(o<2.5?1.5:0)}u>0?(this.sus+=t*u*1.25,this.sus>.35&&!this._huh&&(this._huh=!0,this.mumble("Hm?"),this.pause=Math.max(this.pause,.9),this.lookYaw=Xr(r,a))):(this.sus=Math.max(0,this.sus-t*.6),this.sus<.1&&(this._huh=!1)),(this.sus>=1||o<1)&&(this.caught=!0,h.story&&h.story.caughtByDad&&h.story.caughtByDad(this))}get visible(){return this.man.root.visible}};var gi=class extends Error{},si=[{id:0,name:"Prolog",sub:"Der Keller"},{id:1,name:"01:43",sub:"Zuhause"},{id:2,name:"01:52",sub:"Wendelsweg"},{id:3,name:"02:08",sub:"H\xFCgelschneise"},{id:4,name:"02:17",sub:"Abseits"},{id:5,name:"02:39",sub:"Die H\xFCtte"},{id:6,name:"03:14",sub:"Flucht"},{id:7,name:"03:24",sub:"Kleing\xE4rten"},{id:8,name:"03:31",sub:"Zuhause"}],Rp={1:[["start","Zimmer"],["og","Obergeschoss"],["eg","Erdgeschoss"],["mama","Schl\xFCssel holen"]],6:[["start","Schacht-Ausgang"],["tor","Am Tor"]]},ii=(s,t)=>Math.atan2(-s,-t),jt=(s,t,e)=>new U(s,t,e),vc=class{constructor(){this.token=0,this.waiters=[],this.chapter=-1,this.ups=[],this.chase=null,this.resolved=0}_w(t){let e=this.token;return new Promise((n,i)=>this.waiters.push({fn:t,res:n,rej:i,tok:e}))}wait(t){let e=h.time+t;return this._w(()=>h.time>=e)}until(t){return this._w(t)}reach(t,e,n=3){return this._w(()=>Math.hypot(h.player.p.x-t,h.player.p.z-e)<n)}use(t){return this._w(()=>t.used)}async say(t,e=3.4,n=null){h.ui.say(t,e,n,!n),await this.wait(e*.92)}obj(t){h.ui.objective(t)}after(t,e){let n=this.token;return Qh(t,()=>{n===this.token&&e()})}look(t,e=4,n=1.2){return h.player.lookTarget={pos:t.clone?t.clone():jt(...t),speed:e},this.after(n,()=>{h.player.lookTarget=null}),this.wait(n)}async fade(t,e){let n=this.token;if(await h.ui.fade(t,e),n!==this.token)throw new gi}async card(t,e,n){let i=this.token;if(await h.ui.card(t,e,n),i!==this.token)throw new gi}async narr(t,e){let n=this.token;if(await h.ui.narration(t,e),n!==this.token)throw new gi}sayLines(t,e=3.3){(async()=>{for(let n of t)h.ui.say(n,3.4),await this.wait(e)})().catch(()=>{})}mark(t){h.dev&&h.dev.mark(t)}msg(t,e={}){h.ui.addMsg("them",t),h.phone.dropped||(h.phone.charging?h.audio.vibrate(h.objects.chargingPhone.mesh.position):h.audio.vibrate(),!h.phoneOpen&&!e.silent&&h.ui.notify("Deniz",t),h.phoneOpen&&h.audio.ding())}async reply(t){return h.phoneOpen||h.ui.hint(`<b>${He("phone")}</b> Handy \xF6ffnen &nbsp; <b>${He("reply1")}</b>/<b>${He("reply2")}</b> antworten`,6),await this.raceAbort(h.ui.setReply(t))}raceAbort(t){let e=this.token;return Promise.race([t,this._w(()=>!1)]).then(n=>{if(e!==this.token)throw new gi;return n})}setClock(t){let[e,n]=t.split(":").map(Number);h.phone.clockBase=e*60+n,h.phone.clockAcc=0,this.updateClock()}updateClock(){let t=h.phone.clockBase+Math.floor(h.phone.clockAcc/40),e=String(Math.floor(t/60)%24).padStart(2,"0")+":"+String(t%60).padStart(2,"0");e!==h.phone.time&&h.ui.setTime(e)}addUp(t){let e=this.token;this.ups.push({fn:t,tok:e})}interact(t){return h.world.addInteract(t)}update(t){let e=0;for(let i=this.waiters.length-1;i>=0;i--){let r=this.waiters[i];if(r.tok!==this.token){this.waiters.splice(i,1),r.rej(new gi),e++;continue}let a=!1;try{a=r.fn()}catch{a=!1}a&&(this.waiters.splice(i,1),r.res(),e++)}this.resolved+=e,this.ups=this.ups.filter(i=>i.tok===this.token);for(let i of this.ups)i.fn(t);h.noise&&h.noise.update(t),this.dad&&this.dad.update(t);let n=h.phone;return n.charging?n.battery=Math.min(100,n.battery+t/3.2):h.flags.hasPhone&&!n.dropped&&(n.battery=Math.max(n.minBattery||0,n.battery-t/(h.player.flashOn?10:70))),n.clockAcc=(n.clockAcc||0)+t,this.updateClock(),Math.floor(h.time*2)!==this._lastRefresh&&(this._lastRefresh=Math.floor(h.time*2),h.ui.refreshStatus()),this.chase&&this.updateChase(t),e}async run(t,e=!0,n=null,i=!1){if(e&&!h.replaying&&!this.directRun){h.pendingRun=[t,e,n,i];return}e&&h.dev&&!h.replaying&&h.dev.beginSegment(t,n),this.token++;for(let a of this.waiters)a.rej(new gi);this.waiters=[],this.ups=[],i||(this.chase=null);for(let a of Object.keys(this))a.startsWith("_")&&a!=="_lastRefresh"&&delete this[a];h.world.interacts=h.world.interacts.filter(a=>!a.story),this.chapter=t,!h.replaying&&!(h.dev&&h.dev.everOn)&&xf(t),h.ui.say(null),h.ui.prompt(null),h.ui.hint(null),h.ui.hideNotif(),this.mark(si[t].name+" "+si[t].sub+(n&&n!=="start"?" \xB7 "+n.toUpperCase():"")),e&&await this.setup(t,n);let r=this["ch"+t];try{await r.call(this,e,n)}catch(a){a instanceof gi||console.error(a)}}async setup(t,e=null){let n=h.objects,i=h.player,r=h.audio,a=n.home;h.ui.togglePhone(!1),h.ui.closeNote(),h.ui.reply=null,h.flags={},i.canMove=!0,i.canLook=!0,i.canSprint=!0,i.canInteract=!0,i.scripted=!1,i.hidden=!1,i.forceStance=null,i.stance="stand",i.extraPitch=0,i.extraRoll=0,i.eyeOffset=0,i.speedMul=1,i.stamina=1,i.exhausted=0,i.onStep=null,i.lookTarget=null,document.getElementById("slats").classList.remove("show"),h.inv=new Set,t>=2&&["phone","jacket","homeKeys"].forEach(f=>h.inv.add(f)),t===1&&e&&e!=="start"&&["phone","jacket"].forEach(f=>h.inv.add(f)),t>=6&&["torKey","screwdriver"].forEach(f=>h.inv.add(f)),h.flags.hasPhone=t>=2||t===0||t===1&&e&&e!=="start";let o=[12,31,30,26,19,3,15,13,12][t];Object.assign(h.phone,{battery:o,charging:!1,network:![4,5].includes(t),dropped:!1,mapUnlocked:t>=6,minBattery:t<=5?2:1}),h.chat=Wy(t,e),h.ui.phoneTab="chat",this.setClock(t===1&&e==="mama"?"01:57":t===1&&e==="eg"?"01:51":t===1&&e==="og"?"01:48":["03:12","01:43","01:52","02:08","02:17","02:39","03:14","03:24","03:31"][t]),h.ui.clockShow(h.flags.hasPhone),n.pile.reset(),t>=4&&n.pile.clear(!0),n.hutDoor.set(!1),n.hatch.set(t===5),n.fan.reset(t<=5),n.tube.set(!0),n.drawer.set(!1),n.drawer.screwdriver.visible=!0,n.fuseState=[!0,t<=5,!0];for(let f=0;f<3;f++)n.fuse.setVisual(f,n.fuseState[f]);n.gate.reset();for(let f of h.world.regions)["bank","stream","alley","gardens"].includes(f.id)&&(f.enabled=t>=7);n.man.show(!1),n.silhouette.root.visible=!1,n.deniz.root.visible=t===8,n.groundPhone.hide(),n.chargingPhone.mesh.visible=!1,n.flood.off(),n.keys.torKey.visible=t<6,n.homePhone.group.visible=t===1&&(!e||e==="start"),n.homePhone.light(!1),n.jacket.group.visible=t===1&&(!e||e==="start"),n.homeKeys.group.visible=t===1,n.beanie.visible=t<=5,n.ventTop.grate.position.x=n.ventTop.pos.x,n.ventTop.grate.rotation.z=0,this.resetBranch(t>=7),n.fogPuffs.enabled=!0,a.frontDoor.set(0),a.roomDoor.set(t===1&&e&&e!=="start"?1:0),a.bathDoor.set(0),a.curtain(!1),a.figure("kitchen",!1),a.figure("living",!1);let l=t===1&&e!=="mama";a.momLump.visible=t===1&&e==="mama",a.mom.root.visible=l,a.tv(l),l&&(a.mom.root.position.set(...a.sofaSeat),a.mom.root.rotation.y=-Math.PI/2,a.mom.sit(),a.mom.neck.rotation.y=0),this._hideSpot=null,document.getElementById("veil").className="";for(let f of["humIn","humOut","tube","snore","stream","traffic","fridge"])r.stopLoop(f,.3);if(r.heartbeat(!1),(t===0||t===5)&&(r.hum("humIn",n.fan.pos,1),r.hum("humOut",n.ventTop.pos,.7,!0),r.tubeBuzz(n.tube.pos)),t>=6&&r.stream(new U(Mt.streamX,-.3,Mt.gateZ)),(t===2||t===8)&&r.traffic(!0),this.dad||(this.dad=new yc(a)),h.noise.reset(),t===1){this.dad.reset("sleep"),h.noise.listen((d,p,m)=>this.dad.hear(d,p,m));let f=Ss.stairs;for(let[d,p,m]of[[502.6,6.85,.45],[503.55,7.75,.4],[502.95,5.5,.35],[503.6,14.55,.4]])h.noise.addCreak(d,p,m,p>10?0:3,1);for(let d of[11,7,3]){let p=f.zBot-(d+.5)*f.run;h.noise.addCreak(504.85,p,.32,(d+1)*f.rise,1.2)}r.loop("fridge",d=>{let p=r.osc("sawtooth",50),m=r.filter("lowpass",160,.7);p.connect(m),m.connect(d);let x=r.panner(jt(505,1,3.2),1.2,1.6);return d.connect(x),x.connect(r.amb),p.start(),[p]},.07)}else this.dad.reset("off");let c={0:[...sn.coldOpen,0,.35],1:e==="mama"?[504.85,0,11.95,ii(0,-1),.05]:e==="eg"?[...Ss.egSpawn,ii(-.4,1),0]:e==="og"?[...Ss.ogSpawn,ii(0,1),-.05]:[...Ss.spawn,ii(.5,-1),-.1],2:[...Mt.homeSpawn,-Math.PI/2,0],3:[0,0,-31,Math.PI,0],4:[-9.5,0,55.5,ii(-.7,.6),0],5:[-67.5,0,133.2,ii(.6,.8),0],6:[...sn.ventExit,0,0],7:[-85.5,0,Mt.gateZ,-Math.PI/2*-1+Math.PI,0],8:[1.2,0,-110,0,0]}[t],u=c[1];t>=2&&t!==8&&t!==0&&(u=h.world.groundAt(c[0],c[2],50)),(t===8||t===2)&&(u=h.world.groundAt(c[0],c[2],5)),i.teleport(c[0],u,c[2],c[3],c[4]),i.setFlash(!1),i.flashOn=[3,4,5].includes(t)||t===6,t===7&&(i.yaw=Math.PI/2),h.ui.objective(null),h.ui.crosshair(!0)}unstuck(){let t=h.player;t.canMove=!0,t.scripted=!1,t.lookTarget=null,t.forceStance=null,t.hidden&&this.unhide();let e=(t.trail||[]).slice(-12),n=e.length>6?e[0]:null;if(!n){let r=h.world.regions.find(a=>a.enabled&&a.type==="box"&&t.p.x>a.minX-30&&t.p.x<a.maxX+30&&t.p.z>a.minZ-30&&t.p.z<a.maxZ+30);n=r?jt((r.minX+r.maxX)/2,t.p.y,(r.minZ+r.maxZ)/2):t.p.clone()}let i=h.world.groundAt(n.x,n.z,t.p.y+2);t.teleport(n.x,isFinite(i)?i:t.p.y,n.z,t.yaw,0)}resetBranch(t){let e=h.objects.branch.group,[n,i]=h.branchTree,r=h.terrain.height(n-2.4,i);t?(e.position.set(n-.3,r+.25,i),e.rotation.set(0,0,Math.PI/2)):(e.position.set(n-.3,r+6.4,i),e.rotation.set(0,0,1.78)),this.branchCol?this.branchCol.enabled=t:this.branchCol=h.world.addOBB(n-2.6,i,2.3,.35,0,-50,r+.5,{enabled:t,label:"Umgest\xFCrzter Ast"})}async transition(t,e){h.player.canMove=!1,await this.fade(1,1.2),e&&await this.card("",e,2.4),this.run(t,!0)}hide(t=h.objects.home.spots.kammer){let e=h.player,n=h.objects.home;if(e.hidden)return;e.hidden=!0,e.scripted=!0,this._hideSpot=t,e.forceStance=t.lying?"crawl":"crouch",e.stance=e.forceStance,h.audio.creak(t.pos,.45,.6),e.teleport(t.inside[0],t.inside[1],t.inside[2],t.yaw,t.lying?.25:-.05),e.setFlash(!1),t.id==="dusche"&&n.curtain(!0),t.overlay==="slats"?document.getElementById("slats").classList.add("show"):document.getElementById("veil").className="show "+t.overlay;let i=e.forward();this._outIt=this.interact({story:!0,pos:h.camera.position.clone().addScaledVector(i,.9),radius:1.2,range:2.4,once:!0,text:"Rauskommen",onUse:()=>this.unhide()}),h.ui.hint(h.touchOn?"Benutzen: rauskommen":`<b>${He("use")}</b> rauskommen`,4)}unhide(){let t=h.player,e=h.objects.home,n=this._hideSpot||e.spots.kammer;t.hidden&&(t.hidden=!1,t.scripted=!1,t.forceStance=null,h.audio.creak(n.pos,.55,.5),h.noise&&h.noise.add(.08,jt(...n.out),"Versteck"),t.teleport(n.out[0],n.out[1],n.out[2],n.yaw,0),n.id==="dusche"&&e.curtain(!1),document.getElementById("slats").classList.remove("show"),document.getElementById("veil").className="",this._outIt&&(this._outIt.used=!0,this._outIt=null),this._hideSpot=null)}offerHideSpots(){let t=h.player,e=h.objects.home;for(let n of Object.values(e.spots))this.interact({story:!0,pos:n.pos,radius:n.id==="bett"?.6:.5,range:2.3,once:!1,text:n.name,enabled:()=>!t.hidden,onUse:()=>this.hide(n)});this.interact({story:!0,pos:e.bathDoor.pos,radius:.5,range:2.2,once:!1,text:()=>e.bathDoor.open?"Badt\xFCr zumachen":"Badt\xFCr \xF6ffnen",onUse:()=>{let n=!e.bathDoor.open;e.bathDoor.set(n?1:0,!0),h.audio.creak(e.bathDoor.pos,.25,.5),h.noise.add(.05,e.bathDoor.pos,"Badt\xFCr")}})}looksAt(t,e){let n=new U().subVectors(t,h.camera.position),i=n.length()||1;return h.player.forward().dot(n.divideScalar(i))>e}async npcWalk(t,e,n=1.1,i=null){let r=0,a=!1,o=0,l=jt(...e[0]);t.root.position.copy(l),t.stand(),t.root.visible=!0;let c=t.root.rotation.y;this.addUp(u=>{if(a)return;let f=jt(...e[r]),d=f.x-l.x,p=f.z-l.z,m=Math.hypot(d,p);if(m<.06){i&&i(r),r++,r>=e.length&&(a=!0,t.stand());return}let x=Math.min(1,n*u/m);l.x+=d*x,l.z+=p*x,c+=pi(c,ii(d,p))*(1-Math.exp(-6*u)),t.root.rotation.y=c;let g=h.world.groundAt(l.x,l.z,l.y+.4,.5);isFinite(g)&&(l.y+=(g-l.y)*(1-Math.exp(-18*u))),t.root.position.copy(l),t.walk(u,n),o-=u,o<0&&(o=.62,h.audio.footstep(l.y>.2&&l.y<2.8?"stairs":"woodfloor",.45,l.clone().add(jt(0,.05,0))))}),await this.until(()=>a)}windowGlimpse(t,e=6.5){let n=h.objects.home,i=n.figureMesh(t),r=h.player,a=0,o=0;this.addUp(()=>{if(a===2)return;let l=i.position.distanceTo(h.camera.position),c=r.forward().dot(i.position.clone().sub(h.camera.position).divideScalar(l||1));a===0?l<e&&l>2.2&&c>.5&&c<.88&&r.p.y<1.5&&(a=1,o=h.time,n.figure(t,!0),this.mark("Schatten am Fenster")):(c>.975||l<2||h.time-o>1.1)&&(a=2,n.figure(t,!1))})}glimpse(t,e,{yaw:n=null,walk:i=null,minD:r=9,maxD:a=32,show:o=.45,gone:l=.965,dur:c=1.4,when:u=()=>!0,label:f="Schatten"}={}){let d=h.objects.silhouette,p=h.player,m=0,x=0,g=jt(t,h.terrain.height(t,e),e);this.addUp(y=>{if(m===2)return;if(m===0){if(!u())return;let v=Math.hypot(g.x-p.p.x,g.z-p.p.z),E=jt(g.x-h.camera.position.x,g.y+1.2-h.camera.position.y,g.z-h.camera.position.z).normalize(),_=p.forward().dot(E);v>r&&v<a&&_>o&&_<l&&(m=1,x=h.time,d.root.position.copy(g),d.root.rotation.y=n??ii(p.p.x-g.x,p.p.z-g.z),d.stand(),d.root.visible=!0,this.mark(f));return}let b=d.root.position;if(i){let[v,E,_]=i,M=v-b.x,I=E-b.z,P=Math.hypot(M,I);if(P>.1){let O=Math.min(1,_*y/P);b.x+=M*O,b.z+=I*O,b.y=h.terrain.height(b.x,b.z),d.root.rotation.y=ii(M,I),d.walk(y,_)}}let w=jt(b.x-h.camera.position.x,b.y+1.2-h.camera.position.y,b.z-h.camera.position.z),S=w.length();w.divideScalar(S),(!i&&p.forward().dot(w)>l||h.time-x>c||S<r*.6)&&(m=2,d.root.visible=!1)})}async ch0(){let t=h.objects,e=h.player,n=h.audio;h.ui.fade(0,2.2),e.canMove=!1,await this.wait(1.6),this.mark("Luke knallt zu"),n.slam(t.hatch.pos,1.3),e.shake(.8,.5),h.post.scare(.4),await this.wait(.5),n.bolt(t.hatch.pos),await this.wait(.7),n.drag(t.hatch.pos,1.8),e.canMove=!0,await this.say("Nein. Nein, nein, nein \u2026",2.6),this.obj("Raus hier."),this.interact({story:!0,pos:[-63.25,-.2,139],radius:.7,range:3.2,text:"Luke aufdr\xFCcken",once:!1,onUse:()=>{n.burst({pos:t.hatch.pos,type:"lowpass",f:300,d:.2,peak:.6}),n.creak(t.hatch.pos,.6,.4),h.ui.say("Sie geht nicht auf. Er hat was draufgestellt.",3,null,!0),this._triedHatch=!0}}),this.addUp(r=>{this._stepT=(this._stepT||2)-r,this._stepT<0&&(this._stepT=.9+bn()*.6,n.heavyStep(jt(-62+Math.sin(h.time*.7)*1.5,.4,140+Math.cos(h.time*.5)),.9))});let i=h.time;await this.until(()=>this._triedHatch||h.time-i>16),await this.wait(1.5),this.mark("Licht aus, Schrei"),t.tube.set(!1),n.burst({type:"highpass",f:2e3,d:.05,peak:.4,pos:t.tube.pos}),n.stopLoop("humIn",3),n.stopLoop("tube",.1),e.canMove=!1,await this.wait(2.2),n.scream(jt(-62,.6,140),"distant",.9),await this.wait(2.6),await this.fade(1,.05),n.stopLoop("humOut",.2),await this.wait(1.2),await this.card("","Drei Stunden vorher.",2.6),await this.narr(["Ich hei\xDFe Leon. Das ist letztes Jahr passiert, in der Halloween-Nacht.","Wir wohnen in Sachsenhausen, zehn Minuten vom Stadtwald.","Mein bester Freund Deniz hatte in der Nacht Stress zuhause und wollte bei mir pennen.","Wir wollten nur kurz zum Goetheturm. Eine Mutprobe.","Ich erz\xE4hl das, weil ich bis heute nicht wei\xDF, wer mir in dieser Nacht geschrieben hat."]),this.run(1,!0)}async ch1(t,e){let n=h.objects,i=h.player,r=h.audio,a=n.home,o=this.dad;if(h.noise.listening=!0,this._cp=e||"start",this._cp==="start"){h.ui.clockShow(!1),h.ui.fade(0,2.5),h.ui.card("01:43","Sachsenhausen",3),await this.wait(1.5);let w=!0;this.addUp(M=>{w&&(this._bz=(this._bz??.2)-M,this._bz<0&&(this._bz=3.2,r.vibrate(n.homePhone.pos),n.homePhone.light(!0),this.after(2.6,()=>n.homePhone.light(!1))))}),await this.say("\u2026Wer schreibt mir um die Uhrzeit?",3),this.obj("Geh an dein Handy");let S=this.interact({story:!0,pos:n.homePhone.pos,radius:.15,text:"Handy nehmen",onUse:()=>{r.pickup(),w=!1,n.homePhone.light(!1),n.homePhone.group.visible=!1,h.inv.add("phone"),h.flags.hasPhone=!0,h.ui.clockShow(!0)}});await this.use(S),this.mark("Handy genommen"),h.ui.hint(h.touchOn?`<b>${He("phone")}</b> Handy &nbsp;&nbsp; <b>${He("flash")}</b> Licht`:`<b>${He("phone")}</b> Handy &nbsp;&nbsp; <b>${He("flash")}</b> Taschenlampe`,7),h.ui.addMsg("them","bist du noch wach","01:41"),h.ui.togglePhone(!0),await this.wait(1.4),this.msg("hab stress mit meinem vater"),await this.wait(1.6),this.msg("kann ich heute bei dir schlafen?"),await this.say("Deniz. Schon wieder Stress mit seinem Vater.",3.2);let v=await this.reply(["klar, komm vorbei","was ist passiert?"]);await this.wait(1.4),v===1&&(this.msg("erz\xE4hl ich dir gleich"),await this.wait(1.2),this.msg("geht das klar?"),v=await this.reply(["ja klar, komm"]),await this.wait(1.2)),this.msg("danke"),await this.wait(2.2),this.msg("bin eh grad am goetheturm"),await this.wait(1.6),this.msg("komm kurz hin, ist halloween \u{1F383} wir drehen ne runde durch den wald"),await this.wait(1.6),this.msg("aber ohne maps, nur mit taschenlampe"),await this.say("Er ist schon unterwegs. Nat\xFCrlich ist er das.",3.2),await this.reply(["ok, bin in 10 min da","es ist 2 uhr nachts \u2026 ok, ich komm"]),await this.wait(1.3),this.msg("bis gleich"),await this.wait(1.5),h.ui.togglePhone(!1),this.obj("Zieh deine Jacke an");let E=this.interact({story:!0,pos:n.jacket.pos,radius:.3,text:"Jacke anziehen",onUse:()=>{r.zip(),n.jacket.group.visible=!1,h.inv.add("jacket")}});await this.use(E),this.mark("Jacke an"),await this.say("Okay. Leise jetzt. Papa schl\xE4ft.",3),this.obj("Mach leise deine T\xFCr auf");let _=this.interact({story:!0,pos:a.roomDoor.pos,radius:.55,range:2.4,hold:1.2,text:"T\xFCr langsam \xF6ffnen",onHoldStart:()=>r.creak(a.roomDoor.pos,.2,.35),onHold:M=>{bn()<M*1.4&&r.creak(a.roomDoor.pos,.1,.25)},onUse:()=>{a.roomDoor.set(1,!0),h.noise.add(.05,a.roomDoor.pos,"Zimmert\xFCr")}});await this.use(_),this.mark("Zimmert\xFCr auf"),this._cp="og"}else{h.ui.fade(0,1.4);let w={og:["01:48","Zuhause"],eg:["01:51","Erdgeschoss"],mama:["01:57","Der Schl\xFCssel"]}[e]||["01:48","Zuhause"];h.ui.card(w[0],w[1],2.2),await this.wait(.8)}this.offerHideSpots(),this._cp==="og"&&(this.obj("Schleich dich runter"),h.ui.hint(`<b>${He("crouch")}</b> ducken = leiser &nbsp;&nbsp; nicht rennen`,7),this.addUp(()=>{!this._creakSaid&&h.noise.lastCreak&&h.time-h.noise.lastCreak<.1&&i.p.y>1&&(this._creakSaid=!0,h.ui.say("Die Dielen \u2026 Ducken, leiser gehen.",3))}),this.onDadStage=w=>{w===1&&!this._s1&&(this._s1=!0,h.ui.say("\u2026Er schnarcht nicht mehr.",2.6)),w===3&&!this._s3&&(this._s3=!0,h.ui.say("Licht. Er ist wach. Weg von der T\xFCr!",3)),w===4&&(this.mark("Papa schaut in den Flur"),this.obj("Versteck dich! In dein Zimmer oder runter"),o.onBack=()=>{h.ui.say("\u2026Puh.",2),this.obj("Schleich dich runter")})},await this.until(()=>i.p.y<.5&&i.p.z>11.3&&o.mode==="sleep"),this.mark("Unten angekommen"),this._cp="eg");let l=!1,c=this._cp==="mama";if(this.interact({story:!0,pos:a.frontDoor.pos,radius:.45,once:!1,text:"T\xFCr \xF6ffnen",enabled:()=>!h.inv.has("homeKeys"),onUse:()=>{r.burst({pos:a.frontDoor.pos,f:600,q:2,d:.1,peak:.3}),c?h.ui.say("Zu. Der Schl\xFCssel liegt oben bei ihm.",2.8):l?h.ui.say("Zu. Ohne Schl\xFCssel komm ich hier nicht raus.",2.8):(l=!0,h.ui.say("Abgeschlossen. \u2026Und der Schl\xFCssel h\xE4ngt nicht am Brett.",3.6),this.obj("Such den Hausschl\xFCssel"))}}),this.interact({story:!0,pos:jt(505.36,1.45,14.85),radius:.25,range:2.2,once:!1,text:"Schl\xFCsselbrett ansehen",onUse:()=>h.ui.say(c?"Leer. Er hat ihn oben.":"Leer. Wo ist der Schl\xFCssel?",2.6)}),this.interact({story:!0,pos:jt(504.69,1.35,3),radius:.15,range:2.2,text:"Zettel lesen",onUse:()=>this.sayLines(["\u201ELEON: M\xFCll raus!! \u2013 Papa\u201C","Nat\xFCrlich."])}),this._cp==="eg"){this.onDadStage=null,await this.say("Unten. Jetzt raus, bevor er was merkt.",3),this.obj("Geh zur Haust\xFCr"),this.windowGlimpse("kitchen");let w=jt(a.sofaSeat[0],1.05,a.sofaSeat[2]);await this.until(()=>{if(i.p.y>1||i.p.x>501.9||i.p.z<5.6)return!1;let S=Math.hypot(i.p.x-w.x,i.p.z-w.z);return S<3.3||S<6.2&&this.looksAt(w,.93)}),await this.momScene(w),c=!0,this._cp="mama"}this.windowGlimpse("living",7.5),this.obj("Hol den Schl\xFCssel aus dem Schlafzimmer"),h.ui.hint("Geduckt und langsam. Im Schlafzimmer h\xF6rt er jeden Schritt.",6),this.onDadStage=w=>{w===1&&!this._s1&&(this._s1=!0,h.ui.say("\u2026Er schnarcht nicht mehr.",2.6)),w===2&&!this._s2&&(this._s2=!0,h.ui.say("Nicht bewegen \u2026",2)),w===3&&!this._s3&&(this._s3=!0,h.ui.say("Licht! Er wird wach!",2.6)),w===4&&(this.mark("Papa schaut in den Flur"),this.obj("Versteck dich!"),o.onBack=()=>{h.ui.say("\u2026Puh.",2),this.obj(h.inv.has("homeKeys")?"Raus. Leise.":"Hol den Schl\xFCssel aus dem Schlafzimmer")})},this.addUp(()=>{!this._momWarn&&o.mode==="sleep"&&o.alert>.42&&i.p.y>2&&i.p.x<502.2&&i.p.z>4.4&&(this._momWarn=!0,h.ui.say("\u2026Leon? Bist du verr\xFCckt? Raus hier \u2026",3,"Mama (fl\xFCstert)"))});let u=!1;this.interact({story:!0,pos:a.doorPos,radius:.5,range:2.2,hold:1.6,text:"T\xFCr ganz langsam \xF6ffnen",enabled:()=>!u&&o.mode==="sleep",onHoldStart:()=>r.creak(a.doorPos,.16,.35),onHold:w=>{bn()<w*1.2&&r.creak(a.doorPos,.09,.25)},onUse:()=>{u=!0,a.parentsDoor.set(.6,!0),h.noise.add(.05,a.doorPos,"Elternt\xFCr"),this.mark("Elternt\xFCr auf")}});let f=!1,d=!1,p=0,m=this.interact({story:!0,pos:n.homeKeys.pos,radius:.16,range:1.9,hold:2,text:"Schl\xFCssel ganz vorsichtig nehmen",onHoldStart:()=>{d=!0,p=0},onHold:(w,S)=>{p=S,bn()<w*2&&r.burst({pos:n.homeKeys.pos,f:5200,q:8,d:.03,peak:.05})},onUse:()=>{d=!1,f=!0,this.onDadStage=null,n.homeKeys.group.visible=!1,h.inv.add("homeKeys"),r.pickup()}});this.addUp(()=>{d&&i.holding!==m&&!f&&(d=!1,p>.05&&(r.keys(n.homeKeys.pos),h.noise.add(.34,n.homeKeys.pos,"Schl\xFCssel"),h.ui.say("Shit \u2026",1.2)))}),await this.until(()=>f||m.used),this.mark("Schl\xFCssel genommen"),this.onDadStage=null,await this.wait(1),o.alert=Math.max(o.alert,.3),r.setLoop("snore",0,.2),o.snoring=!1,r.creak(jt(...a.bedPos),.8,1),this.obj("Raus hier!"),await this.wait(2.2),o.mumble("Hm \u2026 wer \u2026?"),r.heartbeat(!0,1.4),await this.wait(3.4),await this.until(()=>o.mode==="sleep"),this.mark("Papa sucht"),o.searchPatrol();let x=!1;o.onBack=()=>{x=!0},this.obj("Versteck dich!"),h.ui.hint("Kleiderschrank \xB7 dein Bett \xB7 Duschvorhang im Bad \xB7 Abstellkammer \xB7 hinter dem Sofa",8),await this.until(()=>x),r.heartbeat(!1),this.mark("Papa wieder im Bett"),await this.wait(2.5),await this.say("\u2026Er liegt wieder.",2.4),await this.wait(2),i.hidden&&h.ui.hint(h.touchOn?"Benutzen: rauskommen":`<b>${He("use")}</b> rauskommen`,4),this.obj("Raus. Leise.");let g=!1,y=this.interact({story:!0,pos:a.frontDoor.chainPos,radius:.25,range:2.2,hold:1.1,text:"Kette l\xF6sen",enabled:()=>!g,onHold:w=>{bn()<w*3&&r.burst({pos:a.frontDoor.chainPos,f:4200,q:6,d:.04,peak:.12})}}),b=this.interact({story:!0,pos:a.frontDoor.pos,radius:.45,range:2.3,hold:1.8,text:"T\xFCr leise aufschlie\xDFen",enabled:()=>g,onHold:w=>{bn()<w*4&&r.keys(a.frontDoor.pos)}});await this.use(y),g=!0,r.burst({pos:a.frontDoor.chainPos,f:3600,q:5,d:.12,peak:.25}),await this.use(b),this.mark("Haust\xFCr auf"),i.scripted=!0,h.flags.lockFlash=!0,r.bolt(a.frontDoor.pos),await this.wait(.5),i.lookTarget={pos:jt(503.6,1.5,16.5),speed:3},a.frontDoor.set(1,!0),r.doorCreak(a.frontDoor.pos),r.setLoop("wind",.5,1.2),r.traffic(!0),await this.wait(1.6),await this.fade(1,1),r.stopLoop("fridge",.3),this.run(2,!0)}async momScene(t){let e=h.player,n=h.audio,i=h.objects.home,r=i.mom;this.mark("Mama auf dem Sofa"),n.sting("soft"),h.post.scare(.5),e.shake(.45,.3),r.neck.rotation.y=Te(pi(r.root.rotation.y,ii(e.p.x-t.x,e.p.z-t.z)),-1.2,1.2),e.canMove=!1,e.lookTarget={pos:t,speed:6},h.ui.say("Leon?!",1.6,"Mama"),await this.wait(1.6),e.lookTarget=null,await this.say("Mama! \u2026Was machst du hier im Dunkeln?",2.8,"Leon"),await this.say("Ich konnte nicht schlafen.",2.2,"Mama"),await this.say("Und du? Es ist zwei Uhr nachts.",2.6,"Mama"),await this.say("Ich \u2026 wollte nur was trinken.",2.4,"Leon"),await this.wait(.5),await this.say("Mit Jacke?",1.8,"Mama"),await this.wait(1),await this.say("\u2026Ich will es gar nicht wissen. Pass blo\xDF auf, dein Vater ist heute nicht gut drauf.",4.2,"Mama"),await this.say("Den Hausschl\xFCssel hat er mit hochgenommen. Wie immer, wenn er sauer ist.",4,"Mama"),await this.say("Ich geh ins Bett. Mach keinen \xC4rger, okay?",3,"Mama"),e.canMove=!0,n.switchClick(jt(501.7,.9,9)),i.tv(!1),r.neck.rotation.y=0;let a=i.momRoute;await this.npcWalk(r,[[499.25,0,8.95],...a],1,o=>{o===10&&(i.parentsDoor.set(1,!0),n.creak(i.doorPos,.3,.5))}),r.root.visible=!1,i.momLump.visible=!0,i.parentsDoor.set(0,!0),n.creak(jt(...i.bedPos),.5,.7),n.burst({pos:i.doorPos,f:2400,q:5,d:.06,peak:.2}),await this.say("\u2026Also oben. Bei ihm. Super.",2.6)}caughtByDad(t){if(this._dying)return;let e=h.player,n=h.audio,i=h.objects.home;if(h.dev&&h.dev.god){n.sting("hard"),h.post.scare(.7),e.shake(.8,.4),h.ui.say("LEON?! \u2026 (Godmode: nicht erwischt)",2.2,"Papa"),t.sus=0,this.after(2.5,()=>{t.caught=!1});return}this._dying=!0,e.canMove=!1,e.scripted=!0,this.mark("Von Papa erwischt");let r=jt(t.pos.x,t.pos.y+1.62,t.pos.z);e.lookTarget={pos:r,speed:10},t.pause=99,t.lookYaw=ii(e.p.x-t.pos.x,e.p.z-t.pos.z),t.yaw=t.lookYaw;let a=jt(e.p.x-t.pos.x,0,e.p.z-t.pos.z),o=a.length();o>.8&&t.pos.addScaledVector(a.normalize(),o-.75),t.apply(),t.pos.y>1.5?i.hallLamp(!0):i.kitchenLamp(!0),n.sting("hard"),h.post.scare(1),e.shake(1.3,.6),h.ui.say("LEON! WAS MACHST DU DA?!",2.4,"Papa"),this.after(1.7,()=>h.ui.death(!0,"PAPA HAT DICH ERWISCHT.","Checkpoint wird geladen \u2026")),this.after(4.4,()=>{h.ui.death(!1),this._dying=!1,this.run(1,!0,this._cp==="start"?"og":this._cp)})}async ch2(){let t=h.objects,e=h.audio,n=h.player;h.ui.fade(0,1.6),e.slam(jt(Mt.homeSpawn[0]-1.2,1,Mt.homeSpawn[2]),.25),h.ui.card("01:52","Wendelsweg",2.6),this.obj("Geh zum Goetheturm"),this.glimpse(7.4,-84.5,{minD:12,maxD:36,when:()=>n.p.z>-120&&n.p.z<-92,label:"Schatten an der Stra\xDFe"}),await this.wait(2.5),await this.say("Halloween. Und die ganze Stra\xDFe schl\xE4ft.",3.2),await this.until(()=>n.p.z>-102),await this.say("Der K\xFCrbis brennt noch.",2.6),await this.until(()=>n.p.z>-73),this.setClock("02:01"),this.mark("Am Spielplatz"),await this.say("Der Goetheturm. Nachts sieht der noch h\xF6her aus.",3.4),this.obj("Finde Deniz am Turm"),this.glimpse(19.5,-43.5,{minD:10,maxD:30,when:()=>n.p.z>-68,label:"Schatten hinter dem Turm"});let i=!1;this.interact({story:!0,pos:t.can.position,radius:.12,range:2.2,text:"Dose ansehen",onUse:()=>{i=!0,h.ui.say("Deniz' Energy. Noch kalt. Er war hier.",3.6)}}),this.interact({story:!0,pos:h.towerSign,radius:.5,range:3,text:"Schild lesen",onUse:()=>h.ui.say("\u201EVom 01.11. bis 31.03. geschlossen.\u201C Also ab morgen.",3.6)}),await this.until(()=>Math.hypot(n.p.x-Mt.tower[0],n.p.z-Mt.tower[1])<13||i),await this.say("Deniz?",1.8,"Leon"),await this.wait(1.2),e.owl(jt(-30,12,-20)),await this.say("Keiner da.",2.2);let r=h.time;await this.until(()=>i||Math.hypot(n.p.x-Mt.canBench[0],n.p.z-Mt.canBench[1])<4||h.time-r>10),await this.wait(4),this.mark("Deniz schreibt: im Wald"),this.msg("bin schon im wald"),await this.wait(1.6),this.msg("nimm den kiesweg hinterm spielplatz, einfach geradeaus"),await this.say("Der wartet nicht mal auf mich.",3),await this.reply(["warum wartest du nicht?","ernsthaft?"]),await this.wait(1.4),this.msg("komm einfach"),this.obj("Folge der H\xFCgelschneise in den Wald"),await this.until(()=>n.p.z>-30.5),this.run(3,!1)}async ch3(t){let e=h.objects,n=h.player,i=h.audio;t&&h.ui.fade(0,1.6),h.ui.card("02:08","H\xFCgelschneise",2.6),this.setClock("02:08"),this.obj("Geh die Schneise entlang"),this.glimpse(10.5,22,{walk:[-3.5,22.8,3.4],minD:12,maxD:28,show:.6,dur:4.2,when:()=>n.p.z>-4&&n.p.z<9,label:"Gestalt kreuzt den Weg"}),this.addUp(()=>{this._ch3end||n.p.x>-8.4||n.p.z<50||(this._ch3end=!0,e.pile.clear(!0),h.ui.reply=null,h.ui.renderPhone(),h.ui.hint(null),this.mark("Abk\xFCrzung durchs Geb\xFCsch"),this.run(4,!1))});let r=this.interact({story:!0,pos:[Mt.pile[0]+.4,h.terrain.height(...Mt.pile)+.7,Mt.pile[1]],radius:.9,range:2.6,hold:2,text:"\xC4ste wegr\xE4umen",onHold:u=>{bn()<u*6&&i.burst({f:1500,q:.6,d:.2,peak:.25})},onUse:()=>{e.pile.clear(),i.burst({f:900,q:.5,d:.6,peak:.5})}});n.p.z<-20&&await this.wait(3),n.flashOn||(await this.say("Ich seh fast nichts. Taschenlampe an.",3),h.ui.hint(`<b>${He("flash")}</b> Taschenlampe`,5)),await this.until(()=>n.p.z>8),i.owl(jt(14,10,30)),await this.say("Eulen. Nur Eulen.",2.6),await this.until(()=>n.p.z>19),this.msg("ich seh dein licht"),await this.say("Wo ist er?",2),await this.until(()=>n.p.z>26),this.msg("bleib mal kurz stehen"),await this.wait(3),this.mark("Da steht wer hinter dir"),this.msg("da steht wer hinter dir");let a=e.silhouette,o=Math.max(-25,n.p.z-24);a.root.position.set(xc(o)+.6,h.terrain.height(xc(o)+.6,o),o),a.root.rotation.y=Math.PI,a.stand(),a.root.visible=!0;let l=h.time;if(await this.until(()=>{let u=new U().subVectors(a.root.position,h.camera.position).normalize();return n.forward().dot(u)>.94||h.time-l>14}),h.time-l<=14){i.sting("soft"),h.post.scare(.35),n.flashFlicker=.5,await this.wait(.9);let u=a.root.position.clone(),f=0;this.addUp(d=>{if(f>=1){a.root.visible=!1;return}f+=d/1.1,a.root.position.x=u.x-f*5,a.root.rotation.y=-Math.PI/2,a.walk(d,2.8)}),await this.wait(1.3),a.root.visible=!1,await this.say("Da war \u2026 da war doch was.",3)}else a.root.visible=!1;await this.wait(1.5),this.msg("spa\xDF"),await this.say("Ich h\xE4tte fast nen Herzinfarkt gekriegt.",3.4),await this.reply(["nicht lustig","alter, lass das"]),await this.wait(1.4),this.msg("sorry \u{1F602}"),this.obj("Geh weiter"),await this.until(()=>n.p.z>51),this.mark("Sperrung"),await this.say("Gesperrt. Forstarbeiten.",2.6),this.msg("der weg ist gesperrt oder? geh links durchs geb\xFCsch, da kommst du durch"),this.obj("Zw\xE4ng dich links durchs Geb\xFCsch"),n.p.x>-2&&(n.lookTarget={pos:jt(Mt.pile[0]+1.5,1,Mt.pile[1]),speed:2.2},this.after(1.1,()=>{n.lookTarget=null})),await this.until(()=>n.p.x<-2.4&&n.p.z>52),h.ui.hint(`<b>${He("crouch")}</b> ducken`,5),await this.use(r),this._ch3end=!0,await this.until(()=>n.p.x<-9),this.run(4,!1)}async ch4(t){let e=h.objects,n=h.player,i=h.audio;t&&h.ui.fade(0,1.6),h.ui.card("02:17","Abseits",2.6),this.setClock("02:17"),h.phone.battery>19&&(h.phone.battery=19),this.msg("ich hab band an die b\xE4ume gemacht. geh dem einfach nach"),this.obj("Folge den Markierungen"),this.addUp(()=>{this._ch4end||Math.hypot(n.p.x+67,n.p.z-133.5)>4.5||(this._ch4end=!0,this.mark("Abk\xFCrzung zur H\xFCtte"),h.phone.dropped&&(e.groundPhone.hide(),h.phone.dropped=!1,h.phone.battery=Math.min(h.phone.battery,6)),h.ui.reply=null,h.ui.renderPhone(),h.phone.network=!1,h.flags.ambient=!1,i.heartbeat(!1),this.run(5,!1))}),h.flags.ambient=!0,await this.until(()=>n.p.x<-13.5),await this.say("Flatterband. Hat Deniz das hingemacht?",3.2),await this.until(()=>n.p.z>66),h.phone.network=!1,h.ui.refreshStatus(),await this.say("Kein Netz. Super.",2.4),await this.until(()=>Math.hypot(n.p.x+24.6,n.p.z-73.2)<5),await this.say("Komischer Baum. Gespalten, wie vom Blitz.",3.2);{let p=e.silhouette,m=jt(-33.5,0,79);m.y=h.terrain.height(m.x,m.z),p.root.position.copy(m),p.root.rotation.y=ii(n.p.x-m.x,n.p.z-m.z),p.stand(),p.root.visible=!0,this.mark("Gestalt zwischen den B\xE4umen");let x=h.time;await this.until(()=>{let g=new U().subVectors(m,h.camera.position),y=g.length();return y<26&&n.forward().dot(g.divideScalar(y))>.985||h.time-x>9||y<6}),h.time-x<=9&&(i.sting("soft"),n.flashFlicker=.4,await this.wait(.4)),p.root.visible=!1}await this.until(()=>n.p.x<-35),this.mark("Schrei 1"),i.scream(Mt.speaker,"distant",1);let r=h.time;await this.wait(2.2),i.sting("soft"),await this.say("Was war das?!",2.2),await this.say("Eine Frau? \u2026Nein. Ein Fuchs. F\xFCchse schreien so. Glaub ich.",4),this.obj("Weiter. Folge dem Band"),await this.reply(["deniz?? war das du"]),await this.wait(.8),h.chat.push({from:"day",text:"Nicht zugestellt"}),h.ui.renderPhone(),await this.say("Nicht zugestellt.",2.2),await this.until(()=>Math.hypot(n.p.x+58,n.p.z-90.4)<6),await this.say("Moment. Den Baum hatte ich doch schon.",3),await this.say("\u2026Lauf ich im Kreis?",2.4),await this.until(()=>h.time-r>48&&n.p.z>91),this.mark("Schrei 2"),i.scream(Mt.speaker,"distant",1.2),await this.wait(1.8),i.heartbeat(!0,1.6),await this.say("Derselbe Schrei. Genau derselbe.",3),this.obj("Lauf!");let a=n.p.clone();await this.until(()=>n.p.distanceTo(a)>5||n.p.z>99),this.mark("Sturz, Handy f\xE4llt"),n.canMove=!1;let o=n.forward();o.y=0,o.normalize(),i.bodyFall(),n.shake(1,.4);let l=0;this.addUp(p=>{l>1||(l+=p,n.extraPitch=-Math.sin(Math.min(1,l*2.5)*Math.PI/2)*.55,n.extraRoll=Math.sin(Math.min(1,l*2.5)*Math.PI/2)*.35,n.eyeOffset=-Math.min(1,l*3)*1.15)}),n.setFlash(!1),h.phone.dropped=!0,h.ui.togglePhone(!1);let c=n.p.clone().addScaledVector(o,2.4).add(jt(o.z,0,-o.x).multiplyScalar(.8));h.world.constrain(c,.6),i.phoneDrop(c),e.groundPhone.place(c.x,h.terrain.height(c.x,c.z),c.z),await this.wait(1.6),await this.say("Schei\xDFe! Das Handy!",2.4);let u=0;this.addUp(p=>{if(u>1)return;u+=p*.9;let m=1-Math.min(1,u);n.extraPitch=-.55*m,n.extraRoll=.35*m,n.eyeOffset=-1.15*m}),await this.wait(1.1),n.canMove=!0,this.obj("Finde dein Handy"),this.addUp(p=>{h.phone.dropped&&(e.groundPhone.pulse(h.time),this._gv=(this._gv??2)-p,this._gv<0&&(this._gv=3.5,i.vibrate(e.groundPhone.group.position)))});let f=this.interact({story:!0,pos:e.groundPhone.group.position.clone().add(jt(0,.05,0)),radius:.35,range:2.6,text:"Handy aufheben",onUse:()=>{i.pickup(),e.groundPhone.hide(),h.phone.dropped=!1,h.phone.battery=6,n.setFlash(!0)}});await this.use(f),i.heartbeat(!0,1.2),await this.say("Sechs Prozent. Bitte nicht ausgehen.",3),this.obj("Weiter. Weg von dem Schrei"),await this.until(()=>n.p.x<-70&&n.p.z>102),i.heartbeat(!1),await this.say("Ein Zaun.",2),await this.say("Da hinten sind Lichter. H\xE4user!",3),this.obj("Komm irgendwie \xFCber den Zaun");let d=this.interact({story:!0,pos:e.gate.lockPos,radius:.35,range:2.6,text:"Tor \xF6ffnen",onUse:()=>{i.padlock(e.gate.lockPos),i.fenceRattle(e.gate.lockPos,.8)}});this.interact({story:!0,pos:[-79,1.4,109],radius:1.2,range:2.2,text:"Hochklettern",once:!1,onUse:()=>{i.fenceRattle(jt(-79,1.5,109),.7),h.ui.say("Zu hoch. Und oben Stacheldraht.",2.6)}}),await this.until(()=>d.used||n.p.z>112),d.used&&(await this.wait(.8),await this.say("Abgeschlossen. Kette mit Schloss.",3)),this.obj("Folge dem Zaun"),h.phone.battery=Math.min(h.phone.battery,5),await this.until(()=>n.p.z>117),i.scream(Mt.speaker,"distant",1.5),await this.wait(2),await this.say("Er kommt von da vorne. Ganz nah.",3),this._ch4end=!0,await this.until(()=>Math.hypot(n.p.x+67,n.p.z-133.5)<4),h.flags.ambient=!1,this.run(5,!1)}async ch5(t){let e=h.objects,n=h.player,i=h.audio;t&&h.ui.fade(0,1.6),h.ui.card("02:39","Die H\xFCtte",2.6),this.setClock("02:39"),h.phone.battery=Math.min(h.phone.battery,3),h.phone.minBattery=2,i.loops.humIn||(i.hum("humIn",e.fan.pos,1),i.hum("humOut",e.ventTop.pos,.7,!0),i.tubeBuzz(e.tube.pos)),e.hatch.state.open||e.hatch.set(!0),await this.say("Eine H\xFCtte. Hier drau\xDFen?",2.8),this.obj("Untersuch die H\xFCtte"),this.addUp(()=>{!this._ventSaid&&n.p.y>-.5&&e.ventTop.pos.distanceTo(n.p)<3&&(this._ventSaid=!0,h.ui.say("Da brummt was. Wie ne alte Mikrowelle.",3.2))});let r=this.interact({story:!0,pos:e.hutDoor.pos,radius:.45,text:"T\xFCr \xF6ffnen",onUse:()=>e.hutDoor.open()});await this.use(r),await this.wait(1.2),await this.say("Hallo?",1.6,"Leon");let a=this.interact({story:!0,pos:e.beanie.position,radius:.15,text:"M\xFCtze ansehen"});await this.until(()=>n.p.x<-59.6&&n.p.x>-64.4&&n.p.z<142&&n.p.y>0),await this.say("Licht. Da unten. Und es brummt.",3),this.obj("Sieh dich in der H\xFCtte um"),await this.use(a),this.mark("Deniz' M\xFCtze"),i.sting("soft"),await this.say("Das ist Deniz' M\xFCtze.",2.4),await this.say("DENIZ?!",1.8,"Leon"),await this.wait(1.4),await this.say("Da unten ist Strom. Mein Handy \u2026",3),this.obj("Geh runter in den Keller"),await this.until(()=>n.p.y<-2.6&&n.p.z>141.4),this.mark("Im Keller"),await this.say("Hallo \u2026?",2,"Leon"),this.obj("Lade dein Handy");let o=this.interact({story:!0,pos:e.strip.pos,radius:.18,text:"Handy anschlie\xDFen"}),l=!1;this.interact({story:!0,pos:e.strip.pos.clone().add(jt(-.08,0,0)),radius:.15,text:"Handy nehmen",once:!1,enabled:()=>l,onUse:()=>{l=!1,e.chargingPhone.mesh.visible=!1,h.phone.charging=!1,h.flags.noPhone=!1,h.flags.noFlash=!1,i.pickup()}}),await this.use(o),i.click(),l=!0,e.chargingPhone.mesh.visible=!0,h.phone.charging=!!e.fuseState[2],h.flags.noPhone=!0,h.flags.noFlash=!0,n.setFlash(!1),h.ui.togglePhone(!1),this.addUp(()=>{l&&(h.phone.charging=!!e.fuseState[2],e.chargingPhone.screen.material.color.set(h.phone.charging?3364232:657930),e.strip.led.visible=!!e.fuseState[2])}),await this.say("L\xE4dt. Okay. Okay \u2026",2.4),this.obj("Sieh dich um");let c=[[e.map.pos,.45,"Karte ansehen",["Der Stadtwald. Alles markiert.","\u201ERUF 1\u201C, \u201ERUF 2\u201C, \u201ERUF 3\u201C \u2026 Und ein Kreuz. Genau hier."]],[e.polaroids.pos,.35,"Fotos ansehen",["Fotos. Von Leuten im Wald. Nachts. Von hinten.","Die wissen nicht mal, dass sie fotografiert werden."]],[e.news.pos,.2,"Zeitung lesen",["\u201EJoggerin im Stadtwald vermisst.\u201C","\u2026Warum h\xE4ngt das hier?"]]];for(let[E,_,M,I]of c)this.interact({story:!0,pos:E,radius:_,text:M,onUse:()=>this.sayLines(I)});this.interact({story:!0,pos:e.notebook.pos,radius:.15,text:"Notizbuch lesen",once:!1,onUse:()=>{h.ui.note(`31.10.

01:58  Turm. Junge allein.
Handy auf der Bank liegen lassen.
Keine Sperre. Chat offen.

Freund kommt um halb drei.

RUF 2 l\xE4uft.

02:30  Er kommt.`),this._readNote=!0}}),this.interact({story:!0,pos:e.keys.pos,radius:.2,text:"Schl\xFCssel \u201ETOR 3\u201C nehmen",onUse:()=>{i.keys(e.keys.pos),e.keys.torKey.visible=!1,h.inv.add("torKey"),h.ui.say("TOR 3. Das Tor am Zaun!",3)}});let u=this.interact({story:!0,pos:e.recorder.pos,radius:.18,text:"Ger\xE4t \u201ERUF 2\u201C \u2013 abspielen"});await this.use(u),this.mark("RUF 2 \u2013 Jumpscare"),i.scream(e.recorder.pos,"speaker",1.4),i.sting("hard"),h.post.scare(1),n.shake(1.2,.6),await this.wait(3.4),i.sting("reveal"),await this.say("Das \u2026 das ist eine Aufnahme.",3),await this.say("Der Schrei. Die ganze Zeit. Das war kein Fuchs.",3.6),await this.wait(1);for(let E=0;E<5;E++)i.heavyStep(jt(-60-E*.8,.4,139.6+E%2*.3),1),await this.wait(.55);await this.say("Da ist jemand.",2.2),this.mark("Luke zu \u2013 eingesperrt"),e.hatch.close(),i.slam(e.hatch.pos,1.4),n.shake(1,.5),h.post.scare(.5),await this.wait(.5),i.bolt(e.hatch.pos),await this.wait(.8),i.drag(e.hatch.pos,1.8),i.heartbeat(!0,1.5),this.obj("Raus hier!"),await this.wait(3),h.phone.network=!0,this.msg("hast du was gefunden \u{1F642}"),await this.wait(2.4),this.msg("du h\xE4ttest auf dem weg bleiben sollen"),await this.wait(1.5),await this.say("\u2026Das ist nicht Deniz.",2.8),await this.say("Das war die ganze Zeit nicht Deniz.",3.2),i.heartbeat(!0,1.1),this.interact({story:!0,pos:[-63.25,-.25,139],radius:.7,range:3.2,text:"Luke aufdr\xFCcken",once:!1,enabled:()=>!e.hatch.state.open,onUse:()=>{i.burst({pos:e.hatch.pos,type:"lowpass",f:300,d:.2,peak:.6}),h.ui.say("Keine Chance. Er hat was draufgestellt.",3)}}),this.obj("Finde einen anderen Weg raus"),this.addUp(()=>{h.micLvl>.6&&!this._micHeard&&(this._micHeard=!0,i.heavyStep(jt(-62,.4,140),1.2),i.fenceRattle(e.hatch.pos,.5),this.msg("ich h\xF6r dich"))});let f=!1;this.interact({story:!0,pos:e.fan.pos,radius:.4,range:2.2,once:!1,text:()=>e.fan.running?"L\xFCftung ansehen":h.inv.has("screwdriver")?"Gitter abschrauben":"Gitter ansehen",enabled:()=>e.fan.grille.visible&&(e.fan.running||!h.inv.has("screwdriver")),hold:0,onUse:()=>{if(e.fan.running){f?h.ui.say("Da greif ich nicht rein, solange der l\xE4uft.",3):(f=!0,h.ui.say("Die Luft muss irgendwo rausgehen. Nach drau\xDFen. \u2026Aber der L\xFCfter dreht.",4.2),this.obj("Schalte die L\xFCftung ab"));return}h.inv.has("screwdriver")||(h.ui.say("Festgeschraubt. Ich brauch nen Schraubendreher.",3.2),this.obj("Finde einen Schraubendreher"))}});let d=this.interact({story:!0,pos:e.fan.pos,radius:.45,range:2.2,hold:3.2,text:"Gitter abschrauben",enabled:()=>!e.fan.running&&h.inv.has("screwdriver")&&e.fan.grille.visible,onHoldStart:()=>{this._unscrewing=!0},onHold:E=>{bn()<E*3&&i.screw(e.fan.pos)}}),p=["Schalter 1 \u201ELICHT\u201C","Schalter 2","Schalter 3 \u201ESTECKD.\u201C"];for(let E=0;E<3;E++)this.interact({story:!0,pos:e.fuse.pos(E),radius:.045,range:1.8,once:!1,text:()=>p[E]+(e.fuseState[E]?" \u2013 aus":" \u2013 an"),onUse:()=>{if(E===1&&!e.fan.grille.visible){h.ui.say("Blo\xDF nicht. Der Schacht ist offen.",2.6);return}e.fuseState[E]=!e.fuseState[E],e.fuse.setVisual(E,e.fuseState[E]),i.switchClick(e.fuse.pos(E)),E===0&&(e.tube.set(e.fuseState[0]),e.fuseState[0]||(i.setLoop("tube",0,.05),this._s1||(this._s1=!0,h.ui.say("Falscher. Licht.",2.2)))),E===1&&(e.fan.setOn(e.fuseState[1]),e.fuseState[1]?(i.hum("humIn",e.fan.pos,1),i.hum("humOut",e.ventTop.pos,.7,!0)):(i.humWindDown("humIn",3.5),i.humWindDown("humOut",3.5),this._s2||(this._s2=!0,this.mark("L\xFCftung aus"),this.fanOff()))),E===2&&!this._s3&&(this._s3=!0,h.ui.say("Steckdose. Das Handy l\xE4dt nicht mehr.",2.8))}});let m=!1;this.interact({story:!0,pos:e.drawer.pos,radius:.25,text:"Schublade \xF6ffnen",onUse:()=>{m=!0,e.drawer.open(),i.burst({pos:e.drawer.pos,f:500,q:1,d:.3,peak:.3})}}),this.interact({story:!0,pos:e.drawer.pos.clone().add(jt(-.15,.05,0)),radius:.12,text:"Schraubendreher nehmen",enabled:()=>m&&h.objects.drawer.screwdriver.visible,onUse:()=>{i.pickup(),e.drawer.screwdriver.visible=!1,h.inv.add("screwdriver"),e.fan.running||this.obj("Schraub das Gitter ab")}}),await this.use(d),this._unscrewing=!1,e.fan.removeGrille(),i.metalClang(e.fan.pos,1.3),this._stepsAbove=!1,await this.wait(1.2),await this.say("\u2026Er hat's geh\xF6rt.",2.4);let x=this.interact({story:!0,pos:e.fan.pos,radius:.45,range:2.2,hold:1,text:"L\xFCfter rausziehen"});await this.use(x),e.fan.removeFan(),i.metalClang(e.fan.pos,1.6),i.thud(e.fan.pos,.7),await this.wait(.6),i.drag(e.hatch.pos,2.2),i.heartbeat(!0,1.7),this.mark("Er r\xE4umt die Luke frei"),this.obj("In den Schacht! Schnell!");let g=h.world.addBox(sn.room.minX-.3,sn.room.minX+.05,sn.shaft.minZ,sn.shaft.maxZ,-3.4,-1.5,{label:"Schacht (erst mit Handy + Schl\xFCssel)"});this.addUp(()=>{let E=n.p.y<-1.5&&n.p.x<sn.room.minX+.9&&Math.abs(n.p.z-144.2)<.8,_=h.inv.has("torKey")&&!l;g.enabled=!_,E&&!_&&!this._gateMsgT&&(this._gateMsgT=h.time,h.ui.say(l?"Mein Handy! Das liegt noch auf der Werkbank.":"Warte. Der Schl\xFCssel. \u201ETOR 3\u201C \u2013 f\xFCrs Tor am Zaun.",3.4)),this._gateMsgT&&h.time-this._gateMsgT>5&&(this._gateMsgT=0);let M=n.p.y<-1.5&&n.p.x<sn.room.minX+.75&&n.p.x>sn.shaft.minX-.1&&Math.abs(n.p.z-144.2)<.75;n.forceStance=M?"crawl":null,h.flags.inShaft=M&&n.p.x<sn.room.minX}),await this.wait(2.3),e.hatch.open(),i.slam(e.hatch.pos,.7);for(let E=0;E<4;E++)this.after(.9+E*.6,()=>i.heavyStep(jt(-63.25,-.6-E*.7,138.8+E*.6),1.1));this.addUp(E=>{this._manT=(this._manT||0)+E,this._manT>7&&n.p.x>sn.room.minX-.3&&!this._manDown&&(this._manDown=!0,i.heavyStep(jt(-63.25,-3,141.4),1.4),h.ui.say("Er ist unten. ER IST UNTEN!",2.4),i.heartbeat(!0,2.4))}),await this.until(()=>n.p.x<sn.shaft.minX+.4),await this.say("Eine Leiter \u2026",1.8);let y=this.interact({story:!0,pos:[sn.shaft.minX-.9,sn.shaft.y+1,144.2],radius:.5,range:2,text:"Hochklettern"});await this.use(y),n.scripted=!0,n.forceStance="stand",n.stance="stand";let b=sn.shaft.minX-.55,w=144.2;n.p.set(b,sn.shaft.y,w),n.lookTarget={pos:jt(b-.4,2,w),speed:3};let S=h.objects.ventTop.pos.y-2;for(let E=sn.shaft.y;E<S;E+=.33)n.p.y=E,i.footstep("metal",.8),await this.wait(.36);n.lookTarget={pos:h.objects.ventTop.pos.clone().add(jt(-.05,1,0)),speed:3};let v=this.interact({story:!0,pos:h.objects.ventTop.pos.clone().add(jt(0,.12,0)),radius:.6,range:3.5,hold:1.5,text:"Gitter aufdr\xFCcken",onHold:E=>{bn()<E*4&&i.fenceRattle(h.objects.ventTop.pos,.3)}});await this.use(v),i.metalClang(h.objects.ventTop.pos,1),h.objects.ventTop.grate.position.x+=.9,h.objects.ventTop.grate.rotation.z=.4,await this.fade(1,.5),n.lookTarget=null,n.scripted=!1,n.forceStance=null,i.stopLoop("humIn",.2),i.stopLoop("humOut",.2),i.stopLoop("tube",.2),n.teleport(sn.ventExit[0],h.terrain.height(sn.ventExit[0],sn.ventExit[2]),sn.ventExit[2],0,0),h.phone.battery=Math.max(h.phone.battery,15),await this.wait(.4),h.ui.fade(0,.8),this.run(6,!1)}async fanOff(){let t=h.audio;await this.wait(3.5),this._stepsAbove=!0;let e=this.token;(async()=>{for(;this._stepsAbove&&e===this.token;)t.heavyStep(jt(-62+Math.sin(h.time)*1.8,.4,140+Math.cos(h.time*.6)*1.4),1.1),await this.wait(.8+bn()*.9)})().catch(()=>{}),h.ui.say("Stille. \u2026Er ist noch da oben. Er l\xE4uft rum.",3.6),await this.wait(2),this.msg("ich h\xF6r dich"),this.obj(h.inv.has("screwdriver")?"Schraub das Gitter ab":"Finde was, um das Gitter abzuschrauben")}die(){let t=h.player,e=h.audio;if(this._dying)return;this._dying=!0,t.canMove=!1,this.mark("Gefangen"),e.sting("hard"),h.post.scare(1),t.shake(1.5,.6),this.chase=null,e.heartbeat(!1),this.after(.35,()=>h.ui.death(!0));let n=this.chapter===5?5:this.chapter===7?7:6,i=n===6&&this._cp6==="tor"?"tor":null;this.after(3.2,()=>{h.ui.death(!1),this._dying=!1,this.run(n,!0,i)})}async ch6(t,e){let n=h.objects,i=h.player,r=h.audio;if(t&&(h.ui.fade(0,1.4),h.ui.card("03:14","Flucht",2.2)),this.setClock("03:14"),h.phone.network=!0,h.phone.mapUnlocked=!0,h.phone.minBattery=1,n.hatch.set(!1),n.hutDoor.set(!1),n.fan.setOn(!1),r.loops.stream||r.stream(jt(Mt.streamX,-.3,Mt.gateZ)),i.setFlash(!0),this._cp6=e||"start",e!=="tor"){r.heartbeat(!0,1.3),await this.say("Drau\xDFen. Ich bin drau\xDFen.",2.4),h.ui.hint(`<b>${He("phone")}</b> Handy &nbsp; <b>${He("app")}</b> Karte`,6),await this.say(Math.round(h.phone.battery)+" Prozent. Und Netz. Karten \u2026",3),this.obj("Zum Tor am Zaun. Leise."),await this.until(()=>i.p.z<138.6),this.mark("Ast f\xE4llt");let a=n.branch.group,[o,l]=h.branchTree,c=h.terrain.height(o-2.4,l);r.branchFall(a.position.clone(),jt(o-2.4,c,l)),h.post.scare(.9),r.sting("hard"),i.shake(1.3,.7);let u=0,f=a.position.y,d=a.rotation.z;this.addUp(y=>{if(u>=1)return;u=Math.min(1,u+y/.55);let b=u*u;a.position.y=f+(c+.25-f)*b,a.rotation.z=d+(Math.PI/2-d)*b,a.rotation.x=b*.15}),await this.wait(.6),await this.until(()=>!(i.p.x>-75&&i.p.x<-69.4&&i.p.z>135.6&&i.p.z<137.2)),this.branchCol.enabled=!0,i.shake(.6,.3),h.ui.say("\u2026Das war laut.",1.8),await this.wait(1.2),n.hutDoor.open(),r.doorCreak(n.hutDoor.pos),await this.wait(.7),this.mark("Er kommt raus \u2013 Jagd"),n.man.show(!0);let p=n.man.H,m=jt(-58.6,.3,140),x=i.trail||[];if(Math.hypot(i.p.x-m.x,i.p.z-m.z)>16&&x.length>6){let y=0,b=x.length-1;for(;b>0&&y<15;)y+=x[b].distanceTo(x[b-1]),b--;m=x[b].clone()}m.y=h.world.groundAt(m.x,m.z,m.y+2),p.root.position.copy(m),p.stand(),r.heartbeat(!0,2.2),h.ui.say("LAUF!",1.2),this.obj("LAUF ZUM TOR!"),h.ui.hint(`<b>${He("sprint")}</b> rennen &nbsp; <b>${He("jump")}</b> \xFCber Hindernisse springen`,5),this.startChase({pos:m,path:m.x>-60?void 0:[]});let g=this.interact({story:!0,pos:n.gate.lockPos,radius:.4,range:2.6,hold:2,text:"Tor aufschlie\xDFen",onHold:y=>{bn()<y*5&&r.keys(n.gate.lockPos)}});await this.use(g),this.mark("Tor auf"),this._cp6="tor",r.padlock(n.gate.lockPos),n.gate.open();for(let y of h.world.regions)["bank","stream"].includes(y.id)&&(y.enabled=!0);await this.until(()=>i.p.x<-80.4),n.gate.close(),r.fenceRattle(jt(-79,1,Mt.gateZ),1),h.ui.say("Zu. Das Tor ist zu.",1.8)}else{h.ui.fade(0,1),n.gate.close();for(let o of h.world.regions)["bank","stream"].includes(o.id)&&(o.enabled=!0);i.teleport(-80.9,h.world.groundAt(-80.9,Mt.gateZ,3),Mt.gateZ,Math.PI/2,0),n.man.show(!0);let a=jt(-78.2,h.terrain.height(-78.2,Mt.gateZ+.6),Mt.gateZ+.6);n.man.H.root.position.copy(a),n.man.H.stand(),this.startChase({pos:a,path:[],state:"unlock"}),this.chase.stateT=-2.5,r.heartbeat(!0,2)}this.obj("Spring \xFCber den Bach!"),h.ui.hint(`<b>${He("sprint")}</b> Anlauf &nbsp; <b>${He("jump")}</b> springen`,6),await this.until(()=>i.p.x<-84.4),r.splash(jt(Mt.streamX,-.4,i.p.z)),this.run(7,!1,null,!0)}startChase(t={}){let e=h.objects.man.H;this.chase={pos:(t.pos||e.root.position).clone(),idx:0,trailIdx:-1,t:0,stepT:0,state:t.state||"run",stateT:0,path:(t.path||[[-58.6,140],[-58.7,137],[-64.5,136.6],[-70.8,138.6]]).map(([n,i])=>jt(n,0,i)),hbT:0,godT:0}}updateChase(t){let e=this.chase,n=h.player,i=h.objects.man,r=i.H,a=h.audio,o=h.objects,l=h.dev||{};if(e.t+=t,e.stateT+=t,e.state==="gone")return;let c=Math.hypot(n.p.x-e.pos.x,n.p.z-e.pos.z),u=(w,S)=>{r.root.rotation.y=Math.atan2(-(w-e.pos.x),-(S-e.pos.z))},f=o.gate.col.enabled;if(e.hbT-=t,e.hbT<0&&(e.hbT=1.5,a.heartbeat(!0,1.3+1.3*(1-Te(c/22,0,1)))),e.state==="retreat"){let w=jt(-92,0,106),S=jt(w.x-e.pos.x,0,w.z-e.pos.z),v=S.length();e.stateT<1.2?(r.stand(),r.armR.sh.rotation.x=-1.9,r.armR.el.rotation.x=.6,u(n.p.x,n.p.z)):v>.3&&(S.divideScalar(v),e.pos.addScaledVector(S,Math.min(v,2.2*t)),r.root.rotation.y=Math.atan2(-S.x,-S.z),r.walk(t,2.2)),e.stateT>1.2&&e.stateT<1.4&&(i.torch.intensity=0),e.stateT>4.5&&(e.state="gone",i.show(!1),a.heartbeat(!1)),e.pos.y=h.world.groundAt(e.pos.x,e.pos.z,e.pos.y+.6),isFinite(e.pos.y)||(e.pos.y=h.terrain.height(e.pos.x,e.pos.z)),r.root.position.copy(e.pos);return}if(e.state==="unlock"){r.stand(),u(n.p.x,n.p.z),!e.rattled&&e.stateT>.2&&(e.rattled=!0,a.fenceRattle(o.gate.lockPos,1.2)),e.stateT>1.2&&e.stateT<3&&(e.kT=(e.kT||0)-t)<0&&(e.kT=.35,a.keys(o.gate.lockPos)),e.stateT>3&&(a.padlock(o.gate.lockPos),o.gate.open(),e.state="run",e.stateT=0,e.trailIdx=-1,this._manGate||(this._manGate=!0,this.mark("Er schlie\xDFt das Tor auf"),h.ui.say("Er hat \u2026 einen Schl\xFCssel.",2.4))),r.root.position.copy(e.pos);return}if(l.ignore){r.stand(),r.root.position.copy(e.pos);return}let d,p=Math.abs(n.p.y-e.pos.y)<2,m=c<8&&p&&!h.world.segmentBlocked(e.pos.x,e.pos.z,n.p.x,n.p.z,e.pos.y+1);if(f&&e.pos.x>-79.4&&n.p.x<-79.2){if(d=jt(-78.35,0,Mt.gateZ),Math.hypot(d.x-e.pos.x,d.z-e.pos.z)<.5){e.state="unlock",e.stateT=0,e.rattled=!1;return}}else if(m)d=n.p.clone();else if(e.idx<e.path.length)d=e.path[e.idx],Math.hypot(d.x-e.pos.x,d.z-e.pos.z)<.6&&e.idx++;else{let w=n.trail||[];if(e.trailIdx<0){let S=0,v=1/0;w.forEach((E,_)=>{let M=Math.hypot(E.x-e.pos.x,E.z-e.pos.z);M<v&&(v=M,S=_)}),e.trailIdx=S}for(;e.trailIdx<w.length-1&&Math.hypot(w[e.trailIdx].x-e.pos.x,w[e.trailIdx].z-e.pos.z)<.7;)e.trailIdx++;d=w[e.trailIdx]||n.p}let g=4.5+1.6*Te((c-7)/11,0,1);e.t<1&&(g*=.4+.6*e.t);for(let w of Vy)Math.abs(e.pos.x-w[0])<w[2]&&Math.abs(e.pos.z-w[1])<w[3]&&(g=Math.min(g,w[4]));let y=jt(d.x-e.pos.x,0,d.z-e.pos.z),b=y.length();if(b>.01){y.divideScalar(b),e.pos.addScaledVector(y,Math.min(b,g*t));let w=Math.atan2(-y.x,-y.z);r.root.rotation.y+=pi(r.root.rotation.y,w)*(1-Math.exp(-10*t))}if(f&&e.pos.x>-79.4&&(e.pos.x=Math.max(e.pos.x,-78.4)),e.pos.y=h.world.groundAt(e.pos.x,e.pos.z,e.pos.y+.6),isFinite(e.pos.y)||(e.pos.y=h.terrain.height(e.pos.x,e.pos.z)),r.root.position.copy(e.pos),r.walk(t,g),e.stepT-=t,e.stepT<0&&(e.stepT=3.2/Math.max(2,g)*.42,a.footstep(e.pos.x<-84.5?"gravel":"leaves",1.5,e.pos.clone().add(jt(0,.1,0))),bn()<.12&&a.breath(.6)),c<3&&n.shake(.12,.2),e.godT-=t,c<1.15&&e.godT<=0)if(l.god){e.godT=3,a.sting("hard"),h.post.scare(.8),n.shake(1,.4);let w=n.trail||[],S=w[Math.max(0,w.length-12)];S&&(e.pos.copy(S),e.trailIdx=-1)}else this.die()}async ch7(t){let e=h.objects,n=h.player,i=h.audio;t&&h.ui.fade(0,1.4),h.ui.card("03:24","Kleing\xE4rten",2.4),this.setClock("03:24");for(let r of h.world.regions)["bank","stream","alley","gardens"].includes(r.id)&&(r.enabled=!0);if(t||!this.chase){e.man.show(!0);let r=jt(-78.2,h.terrain.height(-78.2,Mt.gateZ+.6),Mt.gateZ+.6);e.man.H.root.position.copy(r),e.man.H.stand(),e.man.H.root.rotation.y=Math.PI/2,e.gate.close(),this.startChase({pos:r,path:[],state:"unlock"}),this.chase.stateT=-2.5}this.obj("Weiter! Zu den H\xE4usern"),await this.until(()=>n.p.x<-88),await this.say("Die Gasse. Blo\xDF nicht stehen bleiben.",2.6),await this.until(()=>n.p.x<-97),this.mark("Gasse"),await this.until(()=>n.p.x<-111.5),this.mark("Flutlicht"),e.flood.on(),i.floodlight(jt(-113,2.6,100.4)),i.sting("hard"),h.post.scare(1),n.shake(1,.5),this.chase&&this.chase.state!=="gone"&&(this.chase.state="retreat",this.chase.stateT=0),await this.wait(1.6),await this.say("\u2026Eine Vogelscheuche.",2.2),await this.say("Nur ne beschissene Vogelscheuche.",2.8),await this.wait(1.2),this.chase&&await this.say("Und er \u2026 er geht. Er bleibt im Dunkeln.",3),await this.wait(2.4),this.msg("bis bald leon \u{1F642}"),await this.wait(2.2),i.heartbeat(!1),this.chase=null,e.man.show(!1),e.flood.off(),i.switchClick(jt(-113,2.6,100.4)),this.obj("Nach Hause"),await this.until(()=>n.p.x<-124),n.canMove=!1,i.heartbeat(!0,1.9),await this.fade(1,1.6),await this.narr(["Ich bin den ganzen Weg nach Hause gerannt. Ohne mich einmal umzudrehen."],{perPara:2.5}),i.heartbeat(!1),this.run(8,!0)}async ch8(){let t=h.objects,e=h.player,n=h.audio,i=t.deniz;i.root.position.set(Mt.deniz[0]-.05,-.05,Mt.deniz[2]),i.root.rotation.y=-Math.PI/2,i.root.visible=!0,h.ui.fade(0,2.2),h.ui.card("03:31","Wendelsweg",2.4),this.obj("Nach Hause"),n.breath(1.4),await this.wait(2),await this.say("Da sitzt jemand. Vor unserer T\xFCr.",3),await this.until(()=>Math.hypot(e.p.x-Mt.deniz[0],e.p.z-Mt.deniz[2])<4.2),this.mark("Deniz vor der T\xFCr"),e.canMove=!1,this.obj(null),await this.look(jt(Mt.deniz[0],1,Mt.deniz[2]),3,1.2),e.lookTarget={pos:jt(Mt.deniz[0],1,Mt.deniz[2]),speed:2},i.neck.rotation.x=-.1,await this.say("Alter! Wo warst du?! Ich sitz hier seit ner Stunde.",3.6,"Deniz"),await this.say("Du \u2026 du hast mir doch die ganze Zeit geschrieben.",3.6,"Leon"),await this.say("H\xE4? Mein Handy ist weg, Bro. Hab's am Turm auf der Bank liegen lassen.",4,"Deniz"),await this.say("Mit meiner M\xFCtze. Als ich zur\xFCck bin, war beides weg.",3.8,"Deniz"),await this.wait(1.2),h.ui.addMsg("them","\u{1F642}"),n.vibrate(),await this.wait(1.4),e.lookTarget=null,h.ui.togglePhone(!0),await this.wait(3.2),await this.say("\u2026Leon? Was ist?",2.6,"Deniz"),await this.wait(.8),h.ui.togglePhone(!1),await this.fade(1,.05),n.sting("reveal"),await this.wait(2),await this.narr(["Wir sind am n\xE4chsten Morgen mit meinem Vater zur Polizei.","Sie haben die H\xFCtte gefunden. Und den Keller.","Er war leer. Keine Fotos, keine Karte, kein Ger\xE4t. Nur die L\xFCftung lief noch.","Deniz' Handy wurde nie gefunden.","Alle meinten, der Schrei war bestimmt ein Fuchs.","F\xFCchse schreien in der Ranzzeit. Im Januar.","Nicht im Oktober."],{perPara:3.2}),h.ui.clockShow(!1),await this.card("LOCKRUF","Danke f\xFCrs Spielen.",4),h.onEnd&&h.onEnd()}},Vy=[[-72.2,136.4,2.4,2.4,3],[-75.2,121,3.4,.9,3.2],[-74,126.5,5,1.1,1.5],[-75.4,110.6,3.4,.9,3.2],[-92,105.4,1.2,1.2,3],[-97,106.6,1.2,1.2,3],[-101.5,106,1,1,3],[-106.5,106,.9,1.6,3.2],[-109.4,106,.8,1.6,1.6]];function Wy(s,t){let e=[{from:"day",text:"Gestern"},{from:"me",text:"mach mal ne pin rein, jeder kann an dein handy"},{from:"them",text:"wer soll das schon klauen"},{from:"day",text:"Heute"}];return s===0?(e.push({from:"them",text:"hast du was gefunden \u{1F642}"}),e):((s>=2||s===1&&t&&t!=="start")&&e.push({from:"them",text:"bist du noch wach"},{from:"them",text:"hab stress mit meinem vater"},{from:"them",text:"kann ich heute bei dir schlafen?"},{from:"me",text:"klar, komm vorbei"},{from:"them",text:"danke"},{from:"them",text:"bin eh grad am goetheturm"},{from:"them",text:"komm kurz hin, ist halloween \u{1F383} wir drehen ne runde durch den wald"},{from:"them",text:"aber ohne maps, nur mit taschenlampe"},{from:"me",text:"ok, bin in 10 min da"},{from:"them",text:"bis gleich"}),s>=3&&e.push({from:"them",text:"bin schon im wald"},{from:"them",text:"nimm den kiesweg hinterm spielplatz, einfach geradeaus"},{from:"me",text:"ernsthaft?"},{from:"them",text:"komm einfach"}),s>=4&&e.push({from:"them",text:"da steht wer hinter dir"},{from:"them",text:"spa\xDF"},{from:"me",text:"alter, lass das"},{from:"them",text:"der weg ist gesperrt oder? geh links durchs geb\xFCsch, da kommst du durch"}),s>=5&&e.push({from:"them",text:"ich hab band an die b\xE4ume gemacht. geh dem einfach nach"},{from:"me",text:"deniz?? war das du"},{from:"day",text:"Nicht zugestellt"}),s>=6&&e.push({from:"them",text:"hast du was gefunden \u{1F642}"},{from:"them",text:"du h\xE4ttest auf dem weg bleiben sollen"},{from:"them",text:"ich h\xF6r dich"}),s>=8&&e.push({from:"them",text:"bis bald leon \u{1F642}"}),e)}function Cp(s){let e=new Float32Array(2100),n=new Float32Array(700);for(let o=0;o<700;o++)e[o*3]=Math.random()*10,e[o*3+1]=Math.random()*10,e[o*3+2]=Math.random()*10,n[o]=Math.random();let i=new Ue;i.setAttribute("position",new tn(e,3)),i.setAttribute("rnd",new tn(n,1));let r=new vn({transparent:!0,depthWrite:!1,blending:Li,uniforms:{camPos:{value:new U},lPos:{value:new U},lDir:{value:new U(0,0,-1)},lOn:{value:0},time:{value:0},cosA:{value:.88},amount:{value:1},pxScale:{value:1}},vertexShader:`uniform vec3 camPos, lPos, lDir; uniform float lOn, time, cosA, pxScale; attribute float rnd; varying float vB;
      void main(){
        vec3 o = position + vec3(sin(time*0.31+rnd*6.3), sin(time*0.17+rnd*9.1)*0.6 - time*0.04, cos(time*0.23+rnd*3.7)) * 0.45;
        vec3 w = camPos + mod(o - camPos + 5.0, 10.0) - 5.0;
        vec3 d = w - lPos; float L = length(d);
        float cone = smoothstep(cosA, cosA + 0.05, dot(d / L, lDir));
        vB = cone * lOn * clamp(1.0 - L / 8.0, 0.0, 1.0) * smoothstep(0.25, 0.8, L) * (0.45 + 0.55 * sin(time * 1.7 + rnd * 40.0));
        vec4 mv = viewMatrix * vec4(w, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(5.0 * pxScale / max(0.3, -mv.z), 1.0, 4.0);
      }`,fragmentShader:"uniform float amount; varying float vB; void main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.1, length(c)); gl_FragColor = vec4(vec3(0.85, 0.88, 0.95) * vB * a * 0.55 * amount, 1.0); }"}),a=new ya(i,r);return a.frustumCulled=!1,s.add(a),o=>{let l=r.uniforms,c=h.player;l.time.value=h.time,l.camPos.value.copy(h.camera.position),l.lPos.value.copy(c.flash.position),l.lDir.value.copy(c.flashDir),l.lOn.value=c.flash.intensity/Math.max(1,c.flashIntensity),l.pxScale.value=(h.post?h.post.rt.height:540)/540;let u=c.p.y<-1||c.p.x>400||c.p.x>-64.6&&c.p.x<-59.4&&c.p.z>137.9&&c.p.z<142.1;l.amount.value+=((u?1.6:.6)-l.amount.value)*Math.min(1,o*2)}}function Pp(s){let t=(()=>{let r=document.createElement("canvas");r.width=32,r.height=32;let a=r.getContext("2d");a.fillStyle="#7a4a22",a.beginPath(),a.moveTo(2,16),a.quadraticCurveTo(16,2,30,16),a.quadraticCurveTo(16,30,2,16),a.fill(),a.strokeStyle="#4a2a12",a.beginPath(),a.moveTo(2,16),a.lineTo(30,16),a.stroke();let o=new en(r);return o.colorSpace=rn,o})(),e=new xe({map:t,alphaTest:.5,side:ye,color:new Jt(1.6,1.6,1.6)}),n=new Yt(.09,.09),i=[];for(let r=0;r<45;r++){let a=new W(n,e);a.visible=!1,s.add(a),i.push({m:a,y:0,v:new U,spin:new U,alive:!1})}return r=>{let a=h.player.p,o=a.x<400&&a.y>-1&&a.z>-74&&a.x>-86;for(let l of i){if(!o){l.m.visible=!1,l.alive=!1;continue}if(!l.alive){if(Math.random()>r*1.5)continue;let f=Math.random()*Math.PI*2,d=1.5+Math.random()*10;l.m.position.set(a.x+Math.cos(f)*d,a.y+5+Math.random()*4,a.z+Math.sin(f)*d),l.v.set((Math.random()-.5)*.4,-.55-Math.random()*.35,(Math.random()-.5)*.4),l.spin.set(Math.random()*3,Math.random()*3,Math.random()*3),l.alive=!0,l.m.visible=!0}let c=h.time;l.m.position.x+=(l.v.x+Math.sin(c*1.3+l.spin.x)*.35)*r,l.m.position.z+=(l.v.z+Math.cos(c*1.1+l.spin.y)*.35)*r,l.m.position.y+=l.v.y*r,l.m.rotation.x+=l.spin.x*r,l.m.rotation.y+=l.spin.y*r,l.m.rotation.z+=l.spin.z*r;let u=h.terrain?h.terrain.height(l.m.position.x,l.m.position.z):0;l.m.position.y<u+.03&&(l.alive=!1,l.m.visible=!1)}}}var Xy={walk:.085,sprint:.26,crouch:.018,crawl:.015},qy={woodfloor:1,stairs:1.15,tile:1.1,carpet:.45,rug:.45,concrete:.8,asphalt:.7,sidewalk:.7,gravel:1,leaves:.9,wood:1,metal:1.3},_c=class{constructor(){this.level=0,this.listeners=[],this.creaks=[],this.listening=!1,this.lastSrc=""}reset(){this.listeners=[],this.creaks=[],this.listening=!1,this.level=0}listen(t){return this.listeners.push(t),t}addCreak(t,e,n,i,r=1){this.creaks.push({x:t,z:e,r:n,y:i,k:r,last:-9})}add(t,e,n=""){if(t<=0)return;this.level=Math.min(1,Math.max(this.level,t*1.6)),this.lastSrc=n;let i=e?e.clone?e.clone():new U(e.x,e.y,e.z):h.player.p.clone();for(let r of this.listeners)r(t,i,n)}step(t,e,n){let i=(Xy[e]||.08)*(qy[t]??.9);for(let r of this.creaks){if(Math.abs(n.y-r.y)>.6||Math.hypot(n.x-r.x,n.z-r.z)>r.r||h.time-r.last<.6)continue;r.last=h.time;let a=e==="sprint"?1.4:e==="walk"?.9:.35;h.audio.creak(new U(n.x,n.y+.05,n.z),.55*a*r.k,e==="sprint"?.45:.75),i+=.2*a*r.k,this.lastCreak=h.time}this.add(i,n,e==="sprint"?"Rennen":"Schritte")}update(t){let e=h.micLvl||0;e>.15&&this.add((e-.15)*t*3.2,h.player.p,"Mikrofon"),this.level=Math.max(0,this.level-t*.9)}};var bc=class{constructor(){this.on=!1,this.level=0,this.status="aus",this.floorDb=-62}get available(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}async enable(){if(this.on)return!0;if(!this.available)return this.status="nicht verf\xFCgbar",!1;h.audio.init();try{this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!1,autoGainControl:!1},video:!1})}catch(e){return this.status=e&&e.name==="NotAllowedError"?"Zugriff verweigert":"nicht verf\xFCgbar",this.on=!1,!1}let t=h.audio.ctx;return this.src=t.createMediaStreamSource(this.stream),this.an=t.createAnalyser(),this.an.fftSize=1024,this.an.smoothingTimeConstant=.1,this.src.connect(this.an),this.buf=new Float32Array(this.an.fftSize),this.on=!0,this.status="an",this.level=0,this.floorDb=-62,!0}disable(){if(this.stream)for(let t of this.stream.getTracks())t.stop();try{this.src&&this.src.disconnect()}catch{}this.stream=null,this.src=null,this.an=null,this.buf=null,this.on=!1,this.level=0,this.status="aus"}sample(t){if(!this.on||!this.an)return this.level=0,0;this.an.getFloatTimeDomainData(this.buf);let e=0;for(let a=0;a<this.buf.length;a++)e+=this.buf[a]*this.buf[a];let n=Math.sqrt(e/this.buf.length),i=20*Math.log10(n+1e-7);this.floorDb=i<this.floorDb?this.floorDb+(i-this.floorDb)*Math.min(1,t*2):this.floorDb+(i-this.floorDb)*Math.min(1,t*.05);let r=Math.max(0,Math.min(1,(i-Math.max(this.floorDb,-70)-8)/32));return this.level+=(r-this.level)*Math.min(1,t*(r>this.level?20:4)),this.level}};var Lp=new MessageChannel,Dp=[];Lp.port1.onmessage=()=>{let s=Dp.shift();s&&s()};var su=()=>new Promise(s=>{Dp.push(s),Lp.port2.postMessage(0)}),ru=(s,t,e)=>new U(s,t,e),js=s=>String(s).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),Ip=[["Zimmer",()=>[...Ss.spawn]],["OG Flur",()=>[503.2,3,6]],["Treppe unten",()=>[...Ss.egSpawn]],["K\xFCche",()=>[503.2,0,4.4]],["Stra\xDFe",()=>[...Mt.homeSpawn]],["Goetheturm",()=>[6,0,-55]],["Schneise",()=>[0,0,10]],["Sperrung",()=>[0,0,50]],["Durchschlupf",()=>[-3.2,0,54.4]],["Pfad",()=>[-36,0,84]],["Zaun/Tor",()=>[-76,0,106]],["H\xFCtte",()=>[-67.5,0,133.2]],["Keller",()=>[-62,-3.2,145]],["Schacht-Ausgang",()=>[-71.9,0,142.2]],["Bach",()=>[-82.6,0,106]],["Gasse",()=>[-95,0,106]],["G\xE4rten",()=>[-112,0,106]]],Mc=class{constructor(){this.on=!1,this.everOn=!1,this.panelOpen=!1,this.god=!1,this.ignore=!1,this.noclip=!1,this.fly=!1,this.flySpeed=10,this.showCol=!1,this.showReg=!0,this.showLabels=!0,this.timeScale=1,this.stepOnce=!1,this.seg=null,this.el=document.getElementById("dev"),this.hud=document.getElementById("devhud"),this.rep=document.getElementById("replay"),this.vizT=0,this.uiT=0,this.viz=null,this.labels=[],this.initKeys()}beginSegment(t,e){let n=Math.floor(h.time*1e3)*2654435761+t*97>>>0;tu(n),this.seg={ch:t,cp:e,t0:h.time,seed:n,dev0:this.flags(),frames:[],events:[],marks:[],checks:[]}}flags(){return{god:this.god,ignore:this.ignore,noclip:this.noclip,fly:this.fly,flySpeed:this.flySpeed}}get frame(){return this.seg?this.seg.frames.length:0}record(t,e){let n=this.seg;if(!n||h.replaying)return;let i=Ut.st;if(n.frames.push([t,i.held,i.hit,i.lx,i.ly,h.micLvl||0,e?1:0,i.ax||0,i.az||0]),n.frames.length%30===0){let r=h.player.p;n.checks.push([n.frames.length,+r.x.toFixed(3),+r.y.toFixed(3),+r.z.toFixed(3),h.story.chapter])}}mark(t){let e=this.seg;!e||h.replaying||e.marks.push({f:e.frames.length,label:t,t:h.time-e.t0,ch:h.story.chapter})}ev(t,e,n){this.seg&&!h.replaying&&this.seg.events.push({f:this.seg.frames.length,type:t,a:e,b:n}),this.apply({type:t,a:e,b:n})}apply(t){if(t.type==="set")this[t.a]=t.b,t.a==="fly"&&t.b&&(this.noclip=!0);else if(t.type==="trig"){let e=this.triggers().find(n=>n[1]===t.a);e&&e[2]()}else if(t.type==="tp")h.player.teleport(t.a[0],t.a[1],t.a[2],h.player.yaw,h.player.pitch);else if(t.type==="unstuck")h.story.unstuck();else if(t.type==="use"){let e=h.world.interacts.find(n=>!(n.once&&n.used)&&n.enabled()&&String(typeof n.text=="function"?n.text():n.text).includes(t.a));e&&h.player.use(e)}else t.type==="reply"?(h.ui.togglePhone(!0),h.ui.chooseReply(t.a)):t.type==="look"&&(h.player.yaw=t.a[0],h.player.pitch=t.a[1])}plan(t){if(!this.on)return[t];if(this.timeScale===0)return this.stepOnce?(this.stepOnce=!1,[1/60]):[];if(this.timeScale<1)return[t*this.timeScale];let e=Math.max(1,Math.round(this.timeScale));return new Array(e).fill(t)}frameBack(t,e){let n=this.seg.frames,i=0,r=Math.min(t,n.length);for(;r>0&&i<e;)r--,i+=n[r][0];return r}rewind(t){return this.seg?this.rewindTo(this.frameBack(this.seg.frames.length,t)):Promise.resolve()}async rewindTo(t){let e=this.seg;if(!e||this.busy||!h.simStep)return;this.busy=!0;let n=this.flags();t=Math.max(0,Math.min(t,e.frames.length));let i=e.frames,r=e.events;h.replaying=!0,this.rep.classList.add("show"),this.rep.textContent="SPULE ZUR\xDCCK \u2026";let a=h.audio;a.mute1=!0,h.timers.length=0,h.ui.say(null),h.ui.hint(null),h.ui.death(!1),h.ui.closeNote();for(let d of["card","narration"])document.getElementById(d).classList.remove("show");h.ui.el.fade.style.transition="none",h.ui.el.fade.style.opacity=0,h.time=e.t0,tu(e.seed),Object.assign(this,e.dev0),Ut.apply({held:0,hit:0,lx:0,ly:0}),h.pendingRun=null,h.story.run(e.ch,!0,e.cp);let o=0,l=h.story.resolved,c=1,u=performance.now();for(let d=0;d<t;d++){let p=!1;for(;o<r.length&&r[o].f===d;)this.apply(r[o]),o++,p=!0;p&&await su();let m=i[d];Ut.apply({held:m[1],hit:m[2],lx:m[3],ly:m[4],ax:m[7]||0,az:m[8]||0}),h.micLvl=m[5],c+=h.simStep(m[0],!0),m[6]&&(c||h.story.resolved!==l||m[2])&&(c=0,await su(),l=h.story.resolved),(d&511)===511&&(this.rep.textContent=`SPULE ZUR\xDCCK \u2026 ${Math.round(d/t*100)} %`,await su())}i.length=t,e.events=r.filter(d=>d.f<t),e.marks=e.marks.filter(d=>d.f<=t),e.checks=e.checks.filter(d=>d[0]<=t),h.replaying=!1;for(let[d,p]of Object.entries(n))this[d]!==p&&this.ev("set",d,p);a.mute1=!1,Ut.apply({held:0,hit:0,lx:0,ly:0});let f=e.checks[e.checks.length-1];this.lastCheck=f&&f[0]===t?Math.hypot(f[1]-h.player.p.x,f[3]-h.player.p.z):null,this.lastReplayMs=Math.round(performance.now()-u),this.rep.classList.remove("show"),this.busy=!1,this.renderPanel(!0)}triggers(){if(this._trig)return this._trig;let t=()=>h.objects,e=()=>h.audio,n=()=>h.player,i=(o,l=0)=>{let c=n().forward();return c.y=0,c.normalize(),n().p.clone().addScaledVector(c,o).add(ru(0,l,0))},r=(o,l=0)=>i(-o,l),a=o=>{let l=h.world.groundAt(o.x,o.z,o.y+3);return isFinite(l)?l:o.y};return this._trig=[["Jumpscares","branch","Ast f\xE4llt (am Baum bei der H\xFCtte)",()=>{let o=h.story;o.resetBranch(!1);let l=t().branch.group,[c,u]=h.branchTree,f=h.terrain.height(c-2.4,u);e().branchFall(l.position.clone(),ru(c-2.4,f,u)),e().sting("hard"),h.post.scare(.9);let d=0,p=l.position.y,m=l.rotation.z;o.addUp(x=>{if(d>=1)return;d=Math.min(1,d+x/.55);let g=d*d;l.position.y=p+(f+.25-p)*g,l.rotation.z=m+(Math.PI/2-m)*g}),o.after(.6,()=>{o.branchCol.enabled=!0})}],["Jumpscares","silhouette","Silhouette vor dir",()=>{let o=t().silhouette,l=i(12);o.root.position.set(l.x,a(l),l.z),o.root.rotation.y=n().yaw,o.stand(),o.root.visible=!0,e().sting("soft"),h.story.after(4,()=>{o.root.visible=!1})}],["Jumpscares","flood","Flutlicht + Vogelscheuche",()=>{t().flood.on(),e().floodlight(ru(-113,2.6,100.4)),e().sting("hard"),h.post.scare(1),h.story.after(5,()=>t().flood.off())}],["Jumpscares","ruf2","RUF 2 (Lautsprecher-Schrei, nah)",()=>{e().scream(i(1.5,1),"speaker",1.4),e().sting("hard"),h.post.scare(1),n().shake(1.2,.6)}],["Jumpscares","manscare","Mann direkt vor dir",()=>{let o=t().man;o.show(!0);let l=i(2.2);o.H.root.position.set(l.x,a(l),l.z),o.H.root.rotation.y=n().yaw+Math.PI,o.H.stand(),e().sting("hard"),h.post.scare(1),n().shake(1,.5)}],["Jumpscares","dadcatch","Vater erwischt dich",()=>{let o=h.story;if(!o.dad||!h.objects.home)return;let l=o.dad;l.man.root.visible=!0;let c=i(1);l.pos.set(c.x,n().p.y,c.z),l.yaw=n().yaw+Math.PI,l.apply(),e().sting("hard"),h.post.scare(1),h.ui.say("LEON! WAS MACHST DU DA?!",2.4,"Papa"),o.after(2.5,()=>{l.mode!=="patrol"&&l.mode!=="check"&&(l.man.root.visible=!1)})}],["Sounds","screamFar","Schrei (fern)",()=>e().scream(Mt.speaker,"distant",1.2)],["Sounds","steps","Schwere Schritte hinter dir",()=>{for(let o=0;o<4;o++)h.story.after(o*.5,()=>e().heavyStep(r(4-o*.6,.2),1))}],["Sounds","twig","Ast knackt hinter dir",()=>e().branchSnap(r(6,.2))],["Sounds","owl","Eule",()=>e().owl(i(20,10))],["Sounds","crow","Kr\xE4he",()=>e().crow(i(15,8))],["Sounds","creak","Knarzen",()=>e().creak(i(2,.3),1,1)],["Sounds","slam","T\xFCr knallt",()=>e().slam(i(5,1),1)],["Sounds","fence","Zaun rasselt",()=>e().fenceRattle(r(5,1),1)],["Sounds","vibrate","Handy vibriert",()=>e().vibrate()],["Sounds","stingH","Stinger hart",()=>e().sting("hard")],["Sounds","stingS","Stinger weich",()=>e().sting("soft")],["Sounds","hbOn","Herzschlag an",()=>e().heartbeat(!0,1.8)],["Sounds","hbOff","Herzschlag aus",()=>e().heartbeat(!1)],["Gegner","manShow","Mann zeigen (10 m vor dir)",()=>{let o=t().man;o.show(!0);let l=i(10);o.H.root.position.set(l.x,a(l),l.z),o.H.root.rotation.y=n().yaw+Math.PI,o.H.stand()}],["Gegner","manHide","Mann verstecken / Jagd stoppen",()=>{h.story.chase=null,t().man.show(!1),e().heartbeat(!1)}],["Gegner","chase","Mann jagt dich (14 m hinter dir)",()=>{let o=t().man;o.show(!0);let l=r(14);l.y=a(l),o.H.root.position.copy(l),h.story.startChase({pos:l,path:[]})}],["Gegner","dadWake","Vater: Runde in die K\xFCche",()=>{let o=h.story.dad;o&&o.mode!=="off"&&o.wakeAndPatrol()}],["Gegner","dadCheck","Vater: T\xFCr auf, schaut in den Flur",()=>{let o=h.story.dad;o&&o.mode==="sleep"&&(o.alert=1.05)}],["Gegner","dadSleep","Vater: zur\xFCck ins Bett",()=>{let o=h.story.dad;o&&o.mode!=="off"&&(o.backToBed(),o.alert=0)}],["T\xFCren","hutDoor","H\xFCttent\xFCr auf/zu",()=>{let o=t().hutDoor;o._open=!o._open,o._open?o.open():o.close()}],["T\xFCren","hatch","Luke auf/zu",()=>{let o=t().hatch;o.state.open?(o.close(),e().slam(o.pos,1)):o.open()}],["T\xFCren","gate","Tor auf/zu",()=>{let o=t().gate;o.col.enabled?o.open():o.close()}],["T\xFCren","front","Haust\xFCr auf/zu",()=>{let o=t().home.frontDoor;o.set(o._open?0:1,!0),o._open=!o._open}],["T\xFCren","pdoor","Elternt\xFCr auf/zu",()=>{let o=t().home;o._pd=!o._pd,o.parentsDoor.set(o._pd?1:0,!0)}],["T\xFCren","fan","L\xFCftung an/aus",()=>{let o=t().fan;o.setOn(!o.running)}],["T\xFCren","tube","Neonr\xF6hre an/aus",()=>{let o=t().tube;o.set(!o.state.on)}]],this._trig}initKeys(){window.addEventListener("keydown",t=>{let e=t.target;if(e&&(e.tagName==="TEXTAREA"||e.tagName==="INPUT"&&!["range","checkbox","button"].includes(e.type)||e.isContentEditable)||Ut.capture)return;if(t.key==="+"||t.code==="NumpadAdd"){t.preventDefault(),t.repeat||this.toggle();return}if(!this.on||t.repeat)return;let i={KeyV:()=>this.ev("set","fly",!this.fly),KeyN:()=>this.ev("set","noclip",!this.noclip),KeyB:()=>{this.showCol=!this.showCol,this.vizT=0},KeyR:()=>this.rewind(5),KeyT:()=>{let r=[1,.25,.5,2,4];this.timeScale=r[(r.indexOf(this.timeScale)+1)%r.length]},KeyP:()=>{this.timeScale=this.timeScale===0?1:0},KeyO:()=>{this.timeScale=0,this.stepOnce=!0}};i[t.code]&&h.started&&(i[t.code](),this.renderPanel(!0))}),window.addEventListener("wheel",t=>{this.on&&this.fly&&Ut.locked&&this.ev("set","flySpeed",Math.max(1,Math.min(80,this.flySpeed*(t.deltaY>0?.85:1.18))))},{passive:!0})}toggle(){h.started&&(document.body.classList.toggle("devtouch",!!h.touchOn),this.on||(this.on=!0,this.everOn=!0,this.exposeHooks()),this.panelOpen=!this.panelOpen,this.el.classList.toggle("show",this.panelOpen),document.body.classList.toggle("devopen",this.panelOpen),this.panelOpen?(this.renderPanel(!0),h.touchOn||Ut.unlock()):h.started&&!h.paused&&!h.touchOn&&Ut.lock().catch(()=>{}))}disable(){this.on=!1,this.panelOpen=!1,this.el.classList.remove("show"),document.body.classList.remove("devopen");for(let t of["god","ignore","noclip","fly"])this[t]&&this.ev("set",t,!1);this.timeScale=1,this.showCol=!1,this.clearViz(),h.started&&!h.paused&&!h.touchOn&&Ut.lock().catch(()=>{})}exposeHooks(){h.exposeHooks&&h.exposeHooks()}renderPanel(t=!1){this.panelOpen&&((!this.built||t)&&this.build(),this.updateStatus())}build(){this.built=!0;let t=(o,l)=>`<button data-t="${o}" class="${this[o]?"on":""}">${l}</button>`,e=this.seg,n=e?e.marks.slice(-24).map(o=>`<div class="mk"><span>${js(o.label)}</span><span>${o.t.toFixed(1)} s <button data-mark="${o.f}">\u21BA davor</button></span></div>`).join(""):"",i={};for(let[o,l,c]of this.triggers())(i[o]=i[o]||[]).push(`<button data-trig="${l}">${js(c)}</button>`);let r=Object.entries(Rp).flatMap(([o,l])=>l.map(([c,u])=>`<button data-cp="${o}:${c}">${o}: ${u}</button>`)).join("");this.el.innerHTML=`<div class="hd"><b>GODMODE</b><span><button data-a="close">schlie\xDFen (+)</button> <button data-a="off">aus</button></span></div>
      <div class="bd">
      <div class="stat" id="devstat"></div>
      <h4>SPIELER</h4>${t("god","Unverwundbar")}${t("ignore","Gegner ignorieren mich")}${t("noclip","Noclip")}${t("fly","Fliegen")}
      <div>Fluggeschwindigkeit <input type="range" id="devfs" min="1" max="80" step="1" value="${Math.round(this.flySpeed)}"> <span id="devfsv">${Math.round(this.flySpeed)}</span> m/s</div>
      <h4>ANZEIGE</h4><button data-v="showCol" class="${this.showCol?"on":""}">Kollisionen</button><button data-v="showReg" class="${this.showReg?"on":""}">Regionen</button><button data-v="showLabels" class="${this.showLabels?"on":""}">Beschriftung</button>
      <h4>ZEIT</h4>
      ${[0,.25,.5,1,2,4].map(o=>`<button data-ts="${o}" class="${this.timeScale===o?"on":""}">${o===0?"\u23F8 Pause":o+"\xD7"}</button>`).join("")}<button data-a="step">Einzelbild</button><br>
      <button data-rw="5">\u23EA 5 s</button><button data-rw="10">\u23EA 10 s</button><button data-rw="30">\u23EA 30 s</button><button data-a="segstart">\u23EE Segmentstart</button>
      <h4>STORY-MARKER (AKTUELLES SEGMENT)</h4>${n||'<span class="keys">noch keine</span>'}
      ${Object.entries(i).map(([o,l])=>`<h4>${o.toUpperCase()}</h4>${l.join("")}`).join("")}
      <h4>KAPITEL</h4>${si.map(o=>`<button data-ch="${o.id}">${o.id}: ${o.sub}</button>`).join("")}
      <h4>CHECKPOINTS</h4>${r}
      <h4>TELEPORT</h4>${Ip.map(([o],l)=>`<button data-tp="${l}">${o}</button>`).join("")}
      <h4>${h.touchOn?"HANDY":"TASTEN (GODMODE AKTIV)"}</h4>${h.touchOn?'<div class="keys">Fliegen: Stick + Kamera, \u2912 hoch, \u2913 runter. Panel schlie\xDFen: \u201Eschlie\xDFen\u201C oben.</div>':""}<div class="keys">+ Panel \xB7 V Fliegen \xB7 N Noclip \xB7 B Kollisionen \xB7 R 5 s zur\xFCck \xB7 T Zeitfaktor \xB7 P Zeit anhalten \xB7 O Einzelbild<br>Fliegen: WASD + Maus, Leertaste hoch, ${js(String(Ut.key("crouch")).replace("Key",""))} runter, Shift \xD74, Mausrad Tempo</div>
      </div>`,this.el.onclick=o=>{let l=o.target.closest("button");if(!l)return;let c=l.dataset;if(c.t)this.ev("set",c.t,!this[c.t]);else if(c.v)this[c.v]=!this[c.v],this.vizT=0,this.showCol||this.clearViz();else if(c.ts!==void 0)this.timeScale=+c.ts;else if(c.rw)this.rewind(+c.rw);else if(c.mark)this.rewindTo(this.frameBack(+c.mark,1.5));else if(c.trig)this.ev("trig",c.trig);else if(c.ch!==void 0)h.story.run(+c.ch,!0);else if(c.cp){let[u,f]=c.cp.split(":");h.story.run(+u,!0,f)}else if(c.tp!==void 0){let u=Ip[+c.tp][1](),f=h.world.groundAt(u[0],u[2],u[1]+2);this.ev("tp",[u[0],isFinite(f)?f:u[1],u[2]])}else c.a==="step"?(this.timeScale=0,this.stepOnce=!0):c.a==="segstart"?this.rewindTo(0):c.a==="close"?this.toggle():c.a==="off"&&this.disable();this.build(),this.updateStatus()};let a=this.el.querySelector("#devfs");a.oninput=()=>{this.ev("set","flySpeed",+a.value),this.el.querySelector("#devfsv").textContent=a.value}}updateStatus(){let t=this.el.querySelector("#devstat");if(!t)return;let e=h.player.p,n=this.seg,i=h.world.regions.filter(o=>o.enabled&&h.world.regionContains(o,e.x,e.z)).map(o=>o.label).join(", ")||"\u2013",r=(h.player.blockedBy||[]).map(o=>o.c.region?`${o.c.label}${o.c.disabled?" (w\xE4re frei: \u201E"+o.c.disabled+"\u201C deaktiviert)":""}`:`#${o.c.id} ${o.c.label||o.c.type}`).join(" \xB7 "),a=h.story.dad;t.innerHTML=`Kapitel ${h.story.chapter} ${js(si[h.story.chapter]?si[h.story.chapter].sub:"")} \xB7 Zeit im Segment ${n?(h.time-n.t0).toFixed(1):"\u2013"} s \xB7 Frames ${n?n.frames.length:0}
Pos ${e.x.toFixed(2)} ${e.y.toFixed(2)} ${e.z.toFixed(2)} \xB7 Blick ${(h.player.yaw*57.3%360).toFixed(0)}\xB0
Region: ${js(i)}
Ziel: ${js(h.ui.currentObjective||"\u2013")}
Ausdauer ${(h.player.stamina*100).toFixed(0)} % \xB7 Zeitfaktor ${this.timeScale}\xD7 \xB7 Seed ${np()}
${a&&a.mode!=="off"?`Vater: ${a.mode} \xB7 Alarm ${a.alert.toFixed(2)} \xB7 Stufe ${a.stage} \xB7 Verdacht ${a.sus.toFixed(2)}
`:""}${h.story.chase?`Jagd: ${h.story.chase.state} \xB7 Abstand ${Math.hypot(e.x-h.story.chase.pos.x,e.z-h.story.chase.pos.z).toFixed(1)} m
`:""}${this.lastReplayMs!==void 0?`Letztes R\xFCckspulen: ${this.lastReplayMs} ms${this.lastCheck!==null&&this.lastCheck!==void 0?" \xB7 Abweichung "+this.lastCheck.toFixed(3)+" m":""}
`:""}<span class="blk">${r?"Blockiert durch: "+js(r):""}</span>`}update(t){if(!this.on){this.hud.classList.remove("show");return}if(this.uiT-=t,this.uiT<0){this.uiT=.25,this.panelOpen&&this.updateStatus();let e=[this.god&&"UNVERWUNDBAR",this.ignore&&"UNSICHTBAR",this.fly?"FLUG "+Math.round(this.flySpeed)+" m/s":this.noclip&&"NOCLIP",this.timeScale!==1&&(this.timeScale===0?"ZEIT ANGEHALTEN":this.timeScale+"\xD7"),this.showCol&&"KOLLISION"].filter(Boolean),n=(h.player.blockedBy||[]).map(i=>i.c.region?i.c.label:`#${i.c.id} ${i.c.label||i.c.type}`).join(" \xB7 ");this.hud.textContent="GODMODE "+(e.length?"\xB7 "+e.join(" \xB7 "):"")+(n?`
blockiert: `+n:""),this.hud.classList.add("show")}this.showCol&&(this.vizT-=t,this.vizT<0&&(this.vizT=.4,this.buildViz()))}clearViz(){this.viz&&(h.scene.remove(this.viz),this.viz.geometry.dispose(),this.viz=null);for(let t of this.labels)h.scene.remove(t),t.material.map.dispose(),t.material.dispose();this.labels=[]}buildViz(){this.clearViz();let t=h.player.p,e=26,n=h.world,i=[],r=[],a=[1,.25,.2],o=[.45,.45,.45],l=[.3,1,.4],c=[.25,.45,.3],u=(x,g,y)=>{i.push(x[0],x[1],x[2],g[0],g[1],g[2]),r.push(...y,...y)},f=(x,g,y,b,w,S,v)=>{let E=[[x,w,y],[g,w,y],[g,w,b],[x,w,b],[x,S,y],[g,S,y],[g,S,b],[x,S,b]];for(let[_,M]of[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]])u(E[_],E[M],v)},d=[],p=x=>[Math.max(x.minY,t.y-.5),Math.min(x.maxY,t.y+2.6)];for(let x of n.colliders){let g=x.type==="box"?(x.minX+x.maxX)/2:x.type==="obb"?x.cx:x.x,y=x.type==="box"?(x.minZ+x.maxZ)/2:x.type==="obb"?x.cz:x.z,b=Math.hypot(g-t.x,y-t.z);if(b>e+6)continue;let[w,S]=p(x);if(S<=w)continue;let v=x.enabled?a:o;if(x.type==="box")f(x.minX,x.maxX,x.minZ,x.maxZ,w,S,v);else if(x.type==="circle"){for(let _=0;_<12;_++){let M=_/12*6.283,I=(_+1)/12*6.283;for(let P of[w,S])u([x.x+Math.cos(M)*x.r,P,x.z+Math.sin(M)*x.r],[x.x+Math.cos(I)*x.r,P,x.z+Math.sin(I)*x.r],v)}u([x.x+x.r,w,x.z],[x.x+x.r,S,x.z],v)}else{let E=[[-x.hw,-x.hd],[x.hw,-x.hd],[x.hw,x.hd],[-x.hw,x.hd]].map(([_,M])=>[x.cx+_*x.cos-M*x.sin,x.cz+_*x.sin+M*x.cos]);for(let _=0;_<4;_++){let M=E[_],I=E[(_+1)%4];u([M[0],w,M[1]],[I[0],w,I[1]],v),u([M[0],S,M[1]],[I[0],S,I[1]],v),u([M[0],w,M[1]],[M[0],S,M[1]],v)}}d.push({d:b,c:x,x:g,z:y,y:S+.1,t:`#${x.id} ${x.label||x.type}${x.enabled?"":" (aus)"}`})}if(this.showReg){let x=(g,y)=>{let b=n.groundAt(g,y,t.y+1.5);return(isFinite(b)?b:t.y)+.06};for(let g of n.regions){let y=g.enabled?l:c;if(g.type==="box"){if(Math.max(Math.abs(t.x-(g.minX+g.maxX)/2)-(g.maxX-g.minX)/2,Math.abs(t.z-(g.minZ+g.maxZ)/2)-(g.maxZ-g.minZ)/2)>e)continue;let b=(w,S,v,E)=>{let _=Math.max(1,Math.ceil(Math.hypot(v-w,E-S)/2));for(let M=0;M<_;M++){let I=w+(v-w)*M/_,P=S+(E-S)*M/_,O=w+(v-w)*(M+1)/_,k=S+(E-S)*(M+1)/_;u([I,x(I,P),P],[O,x(O,k),k],y)}};b(g.minX,g.minZ,g.maxX,g.minZ),b(g.maxX,g.minZ,g.maxX,g.maxZ),b(g.maxX,g.maxZ,g.minX,g.maxZ),b(g.minX,g.maxZ,g.minX,g.minZ),d.push({d:Math.hypot((g.minX+g.maxX)/2-t.x,(g.minZ+g.maxZ)/2-t.z),x:(g.minX+g.maxX)/2,z:(g.minZ+g.maxZ)/2,y:t.y+.3,t:"Region "+g.label+(g.enabled?"":" (aus)"),reg:!0})}else if(g.type==="circle"){if(Math.hypot(g.x-t.x,g.z-t.z)-g.radius>e)continue;let b=32;for(let w=0;w<b;w++){let S=w/b*6.283,v=(w+1)/b*6.283,E=g.x+Math.cos(S)*g.radius,_=g.z+Math.sin(S)*g.radius,M=g.x+Math.cos(v)*g.radius,I=g.z+Math.sin(v)*g.radius;u([E,x(E,_),_],[M,x(M,I),I],y)}}else{let b=g.points;for(let w=0;w<b.length-1;w++){let[S,v]=b[w],[E,_]=b[w+1];if(Math.min(Math.hypot(S-t.x,v-t.z),Math.hypot(E-t.x,_-t.z))>e+10)continue;let M=E-S,I=_-v,P=Math.hypot(M,I)||1,O=-I/P*g.radius,k=M/P*g.radius,H=Math.max(1,Math.ceil(P/2));for(let N of[1,-1])for(let X=0;X<H;X++){let Z=S+M*X/H+O*N,$=v+I*X/H+k*N,et=S+M*(X+1)/H+O*N,J=v+I*(X+1)/H+k*N;u([Z,x(Z,$),$],[et,x(et,J),J],y)}}}}}let m=new Ue;if(m.setAttribute("position",new le(i,3)),m.setAttribute("color",new le(r,3)),this.viz=new xa(m,new Ar({vertexColors:!0,depthTest:!1,transparent:!0,opacity:.85,fog:!1})),this.viz.renderOrder=999,this.viz.frustumCulled=!1,h.scene.add(this.viz),this.showLabels){d.sort((x,g)=>x.d-g.d);for(let x of d.slice(0,16))this.labels.push(this.label(x.t,x.x,x.y,x.z,x.reg))}}label(t,e,n,i,r){let a=document.createElement("canvas");a.width=512,a.height=64;let o=a.getContext("2d");o.font="26px Consolas, monospace";let l=Math.min(510,o.measureText(t).width+16);o.fillStyle="rgba(0,0,0,.65)",o.fillRect(0,8,l,46),o.fillStyle=r?"#7dff8a":"#ffb0a0",o.fillText(t,8,40);let c=new en(a),u=new Ds(new us({map:c,depthTest:!1,transparent:!0,fog:!1}));return u.scale.set(2.4,.3,1),u.center.set(0,.5),u.position.set(e,n,i),u.renderOrder=1e3,h.scene.add(u),u}};var Wa=58,kp=2.3,Sc=class{constructor(){this.root=document.getElementById("touch"),this.ptr=new Map,this.crouchOn=!1,this.on=!1,this.build()}enable(t){this.on=t,h.touchOn=t,document.body.classList.toggle("touch",t),h.layoutPhone&&h.layoutPhone(),t?document.pointerLockElement&&document.exitPointerLock():(this.releaseAll(),document.body.classList.remove("phoneopen"))}build(){this.root.innerHTML=`
      <div class="tjoy"><div class="base"></div><div class="knob"></div></div>
      <button class="tb pause" data-act="pause" aria-label="Pause">${_n.menu}</button>
      <div class="tcol">
        <button class="tb" data-k="flash">${_n.flash}<span>Licht</span></button>
        <button class="tb" data-k="phone">${_n.phone}<span>Handy</span></button>
        <button class="tb ctx" data-k="app"><i class="ic">${_n.map}</i><span>Karte</span></button>
      </div>
      <div class="tbtns">
        <button class="tb tog" data-k="crouch">${_n.crouch}<span>Ducken</span></button>
        <button class="tb" data-k="jump">${_n.jump}<span>Springen</span></button>
        <button class="tb big" data-k="use">${_n.use}<span>Benutzen</span></button>
      </div>
      <div class="treply"><button class="tb rp" data-k="reply1"></button><button class="tb rp" data-k="reply2"></button></div>`,this.joyEl=this.root.querySelector(".tjoy"),this.knob=this.root.querySelector(".knob"),this.btn={};for(let i of this.root.querySelectorAll("[data-k]"))this.btn[i.dataset.k]=i;let t=this.root;t.addEventListener("pointerdown",i=>this.down(i),{passive:!1}),t.addEventListener("pointermove",i=>this.move(i),{passive:!1});for(let i of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(i,r=>this.up(r));t.addEventListener("contextmenu",i=>i.preventDefault());let e=i=>{i.target&&i.target.closest&&i.target.closest("#dev, #menu")||this.on&&h.started&&!h.paused&&i.preventDefault()};document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("gesturestart",e,{passive:!1}),document.addEventListener("dblclick",e,{passive:!1});let n=document.querySelector("#rotate .go");n&&n.addEventListener("click",()=>document.body.classList.add("portraitok"))}press(t){let e="Touch_"+t;Ut.keys.has(e)||Ut.pressed.add(e),Ut.keys.add(e)}release(t){Ut.keys.delete("Touch_"+t)}releaseAll(){for(let t of Object.keys(this.btn))(t!=="crouch"||!this.crouchOn)&&this.release(t);this.ptr.clear(),Ut.ax=0,Ut.az=0,this.showJoy(null)}down(t){if(!this.on)return;t.preventDefault();let e=t.target.closest("button");try{this.root.setPointerCapture(t.pointerId)}catch{}if(h.noteOpen&&!(e&&e.dataset.act==="pause")){this.press("use"),this.btn.use.classList.add("down"),this.ptr.set(t.pointerId,{kind:"btn",k:"use",el:this.btn.use});return}if(e){if(e.dataset.act==="pause"){h.pauseGame&&h.pauseGame();return}let n=e.dataset.k;if(n==="crouch"){this.crouchOn=!this.crouchOn,this.crouchOn?this.press("crouch"):this.release("crouch"),e.classList.toggle("on",this.crouchOn);return}this.press(n),e.classList.add("down"),this.ptr.set(t.pointerId,{kind:"btn",k:n,el:e});return}if(h.phoneOpen){let n=document.elementsFromPoint(t.clientX,t.clientY).find(i=>i.closest&&i.closest("#phone .reply .opt"));if(n){let i=n.closest(".opt"),r=[...document.querySelectorAll("#phone .reply .opt")].indexOf(i);if(r===0||r===1){let a="reply"+(r+1);this.press(a),i.classList.add("down"),this.ptr.set(t.pointerId,{kind:"btn",k:a,el:i});return}}}if(t.clientX<innerWidth*.42){for(let n of this.ptr.values())if(n.kind==="joy")return;this.ptr.set(t.pointerId,{kind:"joy",cx:t.clientX,cy:t.clientY}),this.showJoy(t.clientX,t.clientY),this.setStick(0,0)}else this.ptr.set(t.pointerId,{kind:"look",x:t.clientX,y:t.clientY})}move(t){let e=this.ptr.get(t.pointerId);if(e)if(t.preventDefault(),e.kind==="joy"){let n=t.clientX-e.cx,i=t.clientY-e.cy,r=Math.hypot(n,i);if(r>Wa*1.6){let a=(r-Wa*1.6)/r;e.cx+=n*a,e.cy+=i*a,n=t.clientX-e.cx,i=t.clientY-e.cy,this.showJoy(e.cx,e.cy)}this.setStick(n,i)}else e.kind==="look"&&(Ut.mx+=(t.clientX-e.x)*kp,Ut.my+=(t.clientY-e.y)*kp,e.x=t.clientX,e.y=t.clientY)}up(t){let e=this.ptr.get(t.pointerId);e&&(this.ptr.delete(t.pointerId),e.kind==="btn"&&(this.release(e.k),e.el.classList.remove("down")),e.kind==="joy"&&(Ut.ax=0,Ut.az=0,this.showJoy(null)))}setStick(t,e){let n=Math.hypot(t,e),i=Math.min(Wa,n),r=n>0?t/n*i:0,a=n>0?e/n*i:0;this.knob.style.transform=`translate(${r}px, ${a}px)`;let o=r/Wa,l=a/Wa,c=Math.hypot(o,l);if(c<.14)o=0,l=0;else{let u=(c-.14)/.86/c;o*=u,l*=u}Ut.ax=o,Ut.az=l,this.joyEl.classList.toggle("run",Math.hypot(o,l)>.9&&l<-.45)}showJoy(t,e){let n=this.joyEl;if(t===null){n.classList.remove("act"),n.style.left="",n.style.top="",this.knob.style.transform="",n.classList.remove("run");return}n.classList.add("act"),n.style.left=t+"px",n.style.top=e+"px"}update(){if(!this.on)return;let t=h.ui,e=this.btn,n=t.reply&&h.phoneOpen&&t.phoneTab==="chat";for(let a=0;a<2;a++){let o=e["reply"+(a+1)],l=n?t.reply.options[a]:null;o.style.display=l?"block":"none",l&&o.dataset.t!==l&&(o.dataset.t=l,o.textContent=a+1+"  "+l)}e.app.style.display=h.phoneOpen&&h.phone.mapUnlocked?"":"none";let i=t.phoneTab==="map";e.app.dataset.mode!==String(i)&&(e.app.dataset.mode=String(i),e.app.querySelector(".ic").innerHTML=i?_n.chat:_n.map,e.app.querySelector("span").textContent=i?"Chat":"Karte"),e.phone.classList.toggle("attn",!!t.reply&&!h.phoneOpen),e.phone.classList.toggle("on",!!h.phoneOpen),document.body.classList.toggle("phoneopen",!!h.phoneOpen),e.flash.classList.toggle("on",!!h.player.flashOn),e.use.classList.toggle("hot",!!h.player.current||!!h.noteOpen),e.use.querySelector("span").textContent=h.noteOpen?"Schlie\xDFen":"Benutzen";let r=document.getElementById("narration").classList.contains("show");this.root.classList.toggle("narr",r),e.jump.querySelector("span").textContent=r?"Weiter":"Springen",this.crouchOn!==e.crouch.classList.contains("on")&&e.crouch.classList.toggle("on",this.crouchOn)}};var Ec,qa,au=performance.now(),Za=()=>document.getElementById("clickstart");function Zy(){gf();let s=new $l({antialias:!1,powerPreference:"high-performance"});s.setPixelRatio(1),s.setSize(innerWidth,innerHeight),s.shadowMap.enabled=!0,s.shadowMap.type=Hs,s.domElement.id="game",document.body.prepend(s.domElement),h.renderer=s;let t=new Ls;t.fog=new da(1382173,.05),t.background=new Jt(131587),h.scene=t;let e=new Tn(h.settings.fov,innerWidth/innerHeight,.04,1500);h.camera=e,Ec=new Sa(8229828,2763312,.5),t.add(Ec),qa=new Ea(10794204,.3),qa.position.set(-50,42,62),t.add(qa);let n=new Ql;h.world=n,n.initLightPool(t,8),h.audio=new cc,h.ui=new oc,h.noise=new _c,h.mic=new bc;let i=cp();h.M=i,_p(t,n,i);let r=new Gr(48);Mp(t,n,i,r),Ap(t,n,i,r),r.build(t),h.player=new rc(e,t);let a=Cp(t),o=Pp(t);a.visual=!0,o.visual=!0,n.updaters.push(a,o),h.post=new ac(s),h.post.resize(innerWidth,innerHeight),h.story=new vc,h.dev=new Mc,h.simStep=zp,h.touch=new Sc,h.touch.enable(h.settings.touch==="on"||h.settings.touch!=="off"&&jl()),h.pauseGame=()=>{h.started&&!h.paused&&wc()},h.layoutPhone=lc,lc(),document.getElementById("note").addEventListener("click",()=>{!h.noteOpen||h.touchOn||(Ut.keys.add("Touch_use"),Ut.pressed.add("Touch_use"),setTimeout(()=>Ut.keys.delete("Touch_use"),90))}),addEventListener("pointerdown",l=>{l.pointerType==="touch"&&!h.touchOn&&h.settings.touch!=="off"&&h.touch.enable(!0)},!0),document.addEventListener("visibilitychange",()=>{document.hidden&&h.started&&!h.paused&&wc()}),Ut.init(s.domElement),Ut.onLockChange=l=>{if(l){h.waitLock=!1,Za().classList.remove("show");return}h.started&&!h.paused&&!h.dev.panelOpen&&!h.waitLock&&performance.now()>(h.lockGrace||0)&&wc()},Ut.onLockFail=()=>{h.started&&!h.paused&&!h.dev.panelOpen&&!h.noLock&&!h.touchOn&&Yy()},Za().addEventListener("click",()=>{Ut.lock().then(()=>{h.waitLock=!1,Za().classList.remove("show")}).catch(()=>{})}),h.player.teleport(-7,0,-66,0,0);try{s.compile(t,e)}catch{}addEventListener("keydown",l=>{l.code==="F11"&&(l.preventDefault(),Op())}),addEventListener("resize",()=>{s.setSize(innerWidth,innerHeight),e.aspect=innerWidth/innerHeight,e.updateProjectionMatrix(),h.post.resize(innerWidth,innerHeight),lc()}),document.getElementById("loading").style.display="none",h.ui.el.fade.style.opacity=0,h.onEnd=()=>{h.started=!1,h.paused=!0,Ut.unlock(),Zr()},Zr(),requestAnimationFrame(Bp)}function Yy(){h.waitLock=!0;let s=Za();s.textContent="KLICKEN ZUM WEITERSPIELEN",s.classList.add("show")}function Np(){return h.touchOn?Promise.resolve():Ut.lock().catch(()=>{})}var $y=/Electron/i.test(navigator.userAgent);function Up(){if(!h.touchOn||document.fullscreenElement)return;let s=document.documentElement;try{let t=s.requestFullscreen?s.requestFullscreen({navigationUI:"hide"}):null;t&&t.then&&t.then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}catch{}}function Qs(s){for(let t of document.querySelectorAll("#menu [data-a]"))t.addEventListener("click",e=>{h.audio.ready&&h.audio.click(),s[t.dataset.a]&&s[t.dataset.a](t,e)})}function Zr(){document.body.classList.remove("ingame"),h.ui.objective(null),h.ui.clockShow(!1),h.ui.togglePhone(!1),h.ui.say(null),h.ui.prompt(null);let s=yf();h.ui.menu(`<div class="inner">
    <h1>LOCKRUF</h1><div class="tag">INSPIRIERT VON EINER WAHREN BEGEBENHEIT</div>
    <button class="item" data-a="new">Neues Spiel</button>
    ${s.last>0?`<button class="item" data-a="continue">Fortsetzen \u2013 ${si[s.last].name} ${si[s.last].sub}</button>`:""}
    <button class="item" data-a="chapters">Kapitel w\xE4hlen</button>
    <button class="item" data-a="settings">Einstellungen</button>
    <button class="item" data-a="controls">Steuerung</button>
    ${$y?'<button class="item" data-a="quit">Beenden</button>':""}
    <div class="small">Kopfh\xF6rer empfohlen. ${h.touchOn?"Handy quer halten.":"Vollbild: F11."}<br>Stadtwald Frankfurt \xB7 31. Oktober</div></div>`),Qs({new:()=>Ya(0),continue:()=>Ya(s.last),chapters:()=>Fp(Zr),settings:()=>ws(Zr),controls:()=>Tc(Zr),quit:()=>window.close()})}function Fp(s){h.ui.menu(`<div class="inner"><h1 style="font-size:40px">KAPITEL</h1><div class="tag">ALLE FREIGESCHALTET</div><div class="chapters">
    ${si.map(t=>`<button class="item" data-a="ch" data-ch="${t.id}"><span>${t.name}</span>${t.sub}</button>`).join("")}
    </div><button class="item" data-a="back" style="margin-top:24px">\u2190 Zur\xFCck</button></div>`),Qs({ch:t=>Ya(+t.dataset.ch),back:s})}function Ky(){let s=h.mic;return s.on?"Mikrofon: AN \u2013 nur Pegelmessung, nichts wird aufgenommen":"Mikrofon: aus"+(s.status!=="aus"?" ("+s.status+")":"")}function Jy(s){h.ui.menu(`<div class="inner" style="max-width:560px"><h1 style="font-size:36px">MIKROFON</h1><div class="tag">OPTIONAL</div>
    <div class="controls" style="line-height:1.7">Wenn du laut bist (reden, husten, schreien), h\xF6rt dich der Vater im Haus \u2013 und sp\xE4ter nicht nur der.<br><br>
    Das Spiel misst daf\xFCr nur die Lautst\xE4rke, direkt auf deinem PC. Es wird <b style="min-width:0">nichts aufgenommen, gespeichert oder \xFCbertragen</b>.
    Du kannst das Mikrofon jederzeit hier oder im Pausenmen\xFC wieder ausschalten. Ohne Mikrofon l\xE4uft das Spiel ganz normal.</div>
    <button class="item" data-a="yes" style="margin-top:20px">Mikrofon aktivieren</button>
    <button class="item" data-a="no">Abbrechen</button></div>`),Qs({yes:async()=>{await h.mic.enable(),s()},no:s})}function ws(s){let t=h.settings,e=(n,i,r,a,o,l)=>`<div class="row"><label>${i}</label><input type="range" id="${n}" min="${r}" max="${a}" step="${o}" value="${l}"><span id="${n}v">${l}</span></div>`;h.ui.menu(`<div class="inner"><h1 style="font-size:40px">EINSTELLUNGEN</h1><div class="tag">&nbsp;</div>
    ${e("sens","Mausempfindlichkeit",.3,2.5,.05,t.sens)}
    ${e("bright","Helligkeit",.6,2.2,.05,t.bright??1)}
    ${e("scale","Render-Aufl\xF6sung",.4,1,.05,t.scale)}
    ${e("grain","Filmkorn",0,1.6,.05,t.grain)}
    ${e("fov","Sichtfeld",60,90,1,t.fov)}
    ${e("volume","Lautst\xE4rke",0,1,.05,t.volume)}
    <button class="item" data-a="invert">Maus invertieren: ${t.invertY?"an":"aus"}</button>
    <button class="item" data-a="quality">Grafikqualit\xE4t: ${t.quality==="low"?"niedrig (schneller)":"hoch"} \u2013 gilt ab dem n\xE4chsten Start</button>
    <button class="item" data-a="mic">${Ky()}</button>
    <button class="item" data-a="touch">Touch-Steuerung: ${t.touch==="on"?"an":t.touch==="off"?"aus":"automatisch"}${h.touchOn?" (aktiv)":""}</button>
    ${h.touchOn?`<button class="item" data-a="autos">Aufl\xF6sung automatisch senken, wenn es ruckelt: ${t.autoScale===!1?"aus":"an"}</button>`:""}
    <button class="item" data-a="full">Vollbild an/aus${h.touchOn?"":" (F11)"}</button>
    <button class="item" data-a="back" style="margin-top:24px">\u2190 Zur\xFCck</button></div>`);for(let n of["sens","bright","scale","grain","fov","volume"]){let i=document.getElementById(n);i.addEventListener("input",()=>{t[n]=+i.value,document.getElementById(n+"v").textContent=i.value,n==="scale"&&h.post.resize(innerWidth,innerHeight),n==="volume"&&h.audio.setVolume(t.volume),ts()})}Qs({back:s,invert:()=>{t.invertY=!t.invertY,ts(),ws(s)},full:Op,mic:()=>{h.mic.on?(h.mic.disable(),ws(s)):Jy(()=>ws(s))},quality:()=>{t.quality=t.quality==="low"?"high":"low",ts(),ws(s)},autos:()=>{t.autoScale=t.autoScale===!1,ts(),ws(s)},touch:()=>{t.touch=t.touch==="on"?"off":t.touch==="off"?void 0:"on",ts(),h.touch.enable(t.touch==="on"||t.touch!=="off"&&jl()),ws(s)}})}function Op(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}function Tc(s){let t=h.settings;if(h.touchOn){h.ui.menu(`<div class="inner" style="max-height:92vh;overflow:auto"><h1 style="font-size:36px">STEUERUNG</h1><div class="tag">HANDY</div>
      <div class="controls" style="line-height:1.9">
      <b>Linker Daumen</b> irgendwo links aufsetzen = Stick. Ganz nach vorne schieben = rennen.<br>
      <b>Rechter Daumen</b> wischen = umsehen.<br>
      <b>\u270B</b> benutzen (f\xFCr T\xFCren und Schl\xF6sser gedr\xFCckt halten) \xB7 <b>\u2912</b> springen \xB7 <b>\u2913</b> ducken an/aus<br>
      <b>\u2600</b> Taschenlampe \xB7 <b>\u25AF</b> Handy \xB7 <b>\u21C4</b> Chat/Karte \xB7 Antworten erscheinen als Buttons<br>
      <b>\u2630</b> Pause, dort auch Godmode und \u201EIch stecke fest\u201C.</div>
      <button class="item" data-a="back" style="margin-top:18px">\u2190 Zur\xFCck</button></div>`),Qs({back:s});return}t.keys||(t.keys={...$s});let e=Object.keys($s).map(n=>`<div class="row"><label>${Mf[n]}</label><button class="item bind" data-a="bind" data-k="${n}" style="font-size:15px;padding:4px 12px;border:1px solid rgba(255,255,255,.25);border-radius:6px;min-width:150px;text-align:center">${Jh(t.keys[n])}${n==="sprint"&&/^Shift/.test(t.keys[n])?" (links + rechts)":""}</button></div>`).join("");h.ui.menu(`<div class="inner" style="max-height:92vh;overflow:auto;padding-right:20px"><h1 style="font-size:40px">STEUERUNG</h1><div class="tag">KLICK AUF EINE TASTE ZUM \xC4NDERN \xB7 ESC BRICHT AB</div>
    ${e}
    <div class="controls" style="margin-top:12px"><b>Maus</b> Umsehen &nbsp; <b>Esc</b> Pause &nbsp; <b>F11</b> Vollbild &nbsp; <b>+</b> Godmode</div>
    <button class="item" data-a="reset" style="margin-top:14px">Standard wiederherstellen</button>
    <button class="item" data-a="back">\u2190 Zur\xFCck</button></div>`),Qs({bind:n=>{n.textContent="Taste dr\xFCcken \u2026",Ut.capture=i=>{if(i!=="Escape"){let r=Object.keys(t.keys).find(a=>t.keys[a]===i&&a!==n.dataset.k);r&&(t.keys[r]=t.keys[n.dataset.k]),t.keys[n.dataset.k]=i,ts()}setTimeout(()=>Tc(s),30)}},reset:()=>{t.keys={...$s},ts(),Tc(s)},back:()=>{Ut.capture=null,s()}})}function Xa(){h.ui.menu(`<div class="inner"><h1 style="font-size:46px">PAUSE</h1><div class="tag">${si[h.story.chapter]?.name||""} \xB7 ${si[h.story.chapter]?.sub||""}</div>
    <button class="item" data-a="resume">Weiter</button>
    <button class="item" data-a="unstuck">Ich stecke fest</button>
    <button class="item" data-a="restart">Kapitel neu starten</button>
    <button class="item" data-a="chapters">Kapitel w\xE4hlen</button>
    <button class="item" data-a="settings">Einstellungen</button>
    <button class="item" data-a="controls">Steuerung</button>
    ${h.mic.on?'<button class="item" data-a="micoff" style="color:#e0553f">\u25CF Mikrofon ist an \u2013 ausschalten</button>':""}
    ${h.touchOn?'<button class="item" data-a="god">Godmode-Panel</button>':""}
    <button class="item" data-a="title">Hauptmen\xFC</button></div>`),Qs({resume:ou,restart:()=>Ya(h.story.chapter),god:()=>{ou(),h.dev.panelOpen||h.dev.toggle()},unstuck:()=>{h.dev.seg?h.dev.ev("unstuck"):h.story.unstuck(),ou()},chapters:()=>Fp(Xa),settings:()=>ws(Xa),controls:()=>Tc(Xa),micoff:()=>{h.mic.disable(),Xa()},title:()=>{h.started=!1,h.story.token++,h.audio.heartbeat(!1),h.story.chase=null;for(let s of Object.keys(h.audio.loops))!["wind","drone"].includes(s)&&!s.endsWith("_osc")&&h.audio.stopLoop(s,.3);h.dev.on&&h.dev.disable(),h.player.teleport(-7,0,-66,0,0),h.ui.fade(0,.5),Zr()}})}function wc(){h.paused=!0,document.body.classList.remove("ingame"),Za().classList.remove("show"),h.waitLock=!1,h.audio.ctx&&h.audio.ctx.suspend(),Xa()}function ou(){h.lockGrace=performance.now()+1500,h.ui.menu(null),document.body.classList.add("ingame"),h.audio.ctx&&h.audio.ctx.resume(),h.paused=!1,Np(),Up()}function Ya(s){h.audio.init(),h.audio.ctx.state!=="running"&&h.audio.ctx.resume(),h.audio.loops.wind||h.audio.startAmbience(),h.ui.menu(null),document.body.classList.add("ingame"),h.started=!0,h.paused=!1,h.lockGrace=performance.now()+1500,Np(),Up(),h.ui.el.fade.style.transition="none",h.ui.el.fade.style.opacity=1,h.story.run(s,!0)}var qr={fog:.05,hemi:.55,wind:0,drone:0};function jy(s){let t=h.player.p,e=.058,n=.5,i=.28,r="forest",a=.62,o=.42,l=t.x>-64.5&&t.x<-59.5&&t.z>138&&t.z<142&&t.y>-.5;t.x>400?(e=0,n=.035,i=.07,r="room",a=.1,o=0):t.y<-1?(e=0,n=.02,i=.16,r="cellar",a=.04,o=0):l?(e=.02,n=.16,i=.2,r="room",a=.14,o=.04):t.z<-72?(e=.026,n=.18,i=.05,r="street",a=.4,o=.25):t.z<-29?(e=.038,n=.3,i=.12):t.x<-86?(e=.045,n=.22,i=.12,r=t.x>-104.5?"room":"forest"):Math.abs(t.x)<3&&t.z<62&&(e=.052,n=.4,i=.2),h.story&&h.story.chapter===0&&(i=.3),qr.fog=Rn(qr.fog,e,1.5,s),qr.hemi=Rn(qr.hemi,a,2,s),h.scene.fog.density=qr.fog,Ec.intensity=qr.hemi*(h.settings.bright??1)**.5,qa.intensity=o;let c=h.audio;c.ready&&(c.env=r,c.setLoop("wind",n,1.5),c.setLoop("drone",i,2))}var lu=14;function Qy(s){let t=h.story.chapter,e=h.player.p;if(!(h.flags.ambient||t===3&&e.z>14||t===6&&!h.story.chase)||e.x>400||e.y<-1||(lu-=s,lu>0))return;lu=9+Math.random()*13;let i=h.audio,r=h.player.forward();r.y=0,r.normalize();let a=new U(r.z,0,-r.x),o=Math.random(),l=(c,u,f)=>e.clone().addScaledVector(r,c).addScaledVector(a,u).setY(e.y+f);o<.5?i.branchSnap(l(-(6+Math.random()*7),(Math.random()-.5)*8,.2)):o<.7?i.rustle(l(Math.random()*6,Math.random()<.5?-12:12,.3),7):o<.82?i.knock(l(28,(Math.random()-.5)*30,2)):i.crow(l(5,20,12))}function tv(s){let t=h.camera,e=s*.03;t.position.set(-14+Math.sin(e)*2,1.6,-38+Math.cos(e)*1.5),t.lookAt(-2,15+Math.sin(s*.1)*1.5,-60),h.scene.fog.density=.03,Ec.intensity=.5,qa.intensity=.35}function zp(s,t=!1){h.time+=s,h.dt=s;let e=ep(),n=h.ui;return h.noteOpen?((Ut.actHit("use")||Ut.actHit("confirm"))&&n.closeNote(),h.player.updateCamera(s)):(Ut.actHit("phone")&&n.togglePhone(),Ut.actHit("reply1")&&n.chooseReply(0),Ut.actHit("reply2")&&n.chooseReply(1),Ut.actHit("app")&&n.switchTab(),h.player.update(s)),h.world.update(s,h.time,t),e+=h.story.update(s),t||(jy(s),Qy(s)),e}var rs={t:0,n:0};function ev(s){if(!h.touchOn||h.settings.autoScale===!1||!h.started||h.paused||h.waitLock||h.replaying||window.__norender||window.__fast||/[?&]test/.test(location.search)&&!window.__autoScaleTest||s>2){rs.t=rs.n=0;return}if(rs.t+=s,rs.n++,rs.t<4)return;let e=rs.n/rs.t;rs.t=rs.n=0,!(e>=24||h.settings.scale<=.4)&&(h.settings.scale=Math.max(.4,Math.round((h.settings.scale-.1)*20)/20),h.post.resize(innerWidth,innerHeight),ts(),h.ui.el.hint.classList.contains("show")||h.ui.hint(`Ruckelt \u2013 Aufl\xF6sung auf ${Math.round(h.settings.scale*100)} % gesenkt`,3))}function Bp(s){requestAnimationFrame(Bp),ev((s-au)/1e3);let t=Math.min(window.__fast?.2:.05,(s-au)/1e3)*(window.__speed||1);au=s;let e=h.ui;if(h.replaying){Ut.endFrame();return}if(h.pendingRun&&h.started){let n=h.pendingRun;h.pendingRun=null,h.story.directRun=!0,h.story.run(...n),h.story.directRun=!1}if(h.started&&!h.paused&&!h.waitLock){Ut.sample(),h.micLvl=h.mic.sample(t);let n=h.dev.plan(t);for(let i=0;i<n.length;i++)h.dev.record(n[i],i===n.length-1),zp(n[i]),i===0&&Ut.consume();n.length||h.player.updateCamera(0),h.phoneOpen&&e.phoneTab==="map"&&e.drawMap()}else h.started?h.player.updateCamera(0):(h.time+=t,tv(h.time),h.world.update(t,h.time));h.dev.update(t),h.started&&h.touch.update(),e.hud(t),h.post.mat.uniforms.exposure.value=1.45*(h.settings.bright??1),h.world.updateLights(h.camera.position,h.time),h.audio.ready&&h.audio.updateListener(h.camera),window.__norender||h.post.render(h.scene,h.camera,t),Ut.endFrame()}var cu=document.createElement("div");cu.style.cssText="position:fixed;left:10px;bottom:10px;max-width:60vw;font:12px monospace;color:#ff6a5a;z-index:99;pointer-events:none;white-space:pre-wrap;text-shadow:0 0 4px #000";document.body.appendChild(cu);var Hp=/pointer ?lock|exited the lock|requestPointerLock|WrongDocument|The user has exited|AbortError|play\(\) request/i,Gp=s=>{Hp.test(s)||(cu.textContent="FEHLER (bitte Screenshot an Claude): "+s)};window.addEventListener("error",s=>Gp(String(s.message)+" @ "+(s.filename||"").split("/").pop()+":"+s.lineno));window.addEventListener("unhandledrejection",s=>{if(s.reason instanceof gi){s.preventDefault();return}let t=String(s.reason&&(s.reason.stack||s.reason.message)||s.reason);if(Hp.test(t)){s.preventDefault();return}Gp(t.slice(0,400))});h.exposeHooks=()=>{window.__G||(window.__G=h,window.__start=(s,t)=>{Ya(s),t&&h.story.run(s,!0,t)},window.__pause=()=>wc(),window.__pick=(s=0,t=0)=>{let e=new Ta;return e.setFromCamera(new Kt(s,t),h.camera),e.intersectObjects(h.scene.children,!0).slice(0,4).map(i=>`${i.object.type}|${i.object.material&&(i.object.material.name||i.object.material.type)}|d=${i.distance.toFixed(2)}|p=${i.point.toArray().map(r=>r.toFixed(1)).join(",")}|par=${i.object.parent&&i.object.parent.type}`).join(`
`)},window.__use=s=>h.world.interacts.find(e=>!(e.once&&e.used)&&e.enabled()&&String(typeof e.text=="function"?e.text():e.text).includes(s))?(h.dev.ev("use",s),"ok "+s):"NICHT GEFUNDEN: "+s,window.__tp=(s,t,e)=>(h.dev.ev("tp",[s,e??h.world.groundAt(s,t,60),t]),h.player.p.toArray().map(n=>n.toFixed(2)).join(",")),window.__reply=s=>h.dev.ev("reply",s),window.__look=(s,t=0)=>h.dev.ev("look",[s,t]),window.__state=()=>JSON.stringify({ch:h.story.chapter,t:+h.time.toFixed(1),obj:h.ui.currentObjective,sub:document.getElementById("subtitle").textContent,bat:Math.round(h.phone.battery),p:h.player.p.toArray().map(s=>+s.toFixed(2)),inv:[...h.inv],chat:(h.chat[h.chat.length-1]||{}).text,reply:!!h.ui.reply,dad:h.story.dad?h.story.dad.mode:null,chase:h.story.chase?h.story.chase.state:null,stam:+h.player.stamina.toFixed(3)}))};/[?&](dev|test)\b/.test(location.search)&&(h.noLock=/[?&]test\b/.test(location.search));try{Zy()}catch(s){console.error(s),document.getElementById("loading").textContent="FEHLER: "+s.message}/[?&](dev|test)\b/.test(location.search)&&h.exposeHooks();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
