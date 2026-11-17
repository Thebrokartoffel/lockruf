(()=>{var Vu=0,sh=1,Wu=2;var Is=1,Xu=2,Ar=3,ls=0,Nn=1,Se=2,Ls=0,Rr=1,Ai=2,rh=3,ah=4,qu=5;var Ds=100,Zu=101,Yu=102,$u=103,Ku=104,Ju=200,ju=201,Qu=202,td=203,oh=204,lh=205,ed=206,nd=207,id=208,sd=209,rd=210,ad=211,od=212,ld=213,cd=214,wo=0,Eo=1,To=2,pr=3,Ao=4,Ro=5,Co=6,Po=7,Ma=0,hd=1,ud=2,Ri=0,ch=1,hh=2,uh=3,dh=4,fh=5,ph=6,mh=7;var gh=300,ks=301,Cr=302,il=303,sl=304,Mi=1e3,bi=1001,Io=1002,Rn=1003,dd=1004;var Sa=1005;var vn=1006,rl=1007;var Gi=1008;var $n=1009,xh=1010,yh=1011,Pr=1012,al=1013,mi=1014,oi=1015,Kn=1016,ol=1017,ll=1018,Ns=1020,vh=35902,_h=35899,bh=1021,Mh=1022,gi=1023,zi=1026,Vi=1027,cl=1028,hl=1029,cs=1030,ul=1031;var dl=1033,wa=33776,Ea=33777,Ta=33778,Aa=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,yl=37492,vl=37496,_l=37488,bl=37489,Ra=37490,Ml=37491,Sl=37808,wl=37809,El=37810,Tl=37811,Al=37812,Rl=37813,Cl=37814,Pl=37815,Il=37816,Ll=37817,Dl=37818,kl=37819,Nl=37820,Ul=37821,Fl=36492,Ol=36494,Bl=36495,zl=36283,Hl=36284,Ca=36285,Gl=36286;var ta=2300,Lo=2301,Mo=2302,Zc=2303,Yc=2400,$c=2401,Kc=2402;var fd=3200;var Ir=0,pd=1,xi="",mn="srgb",ea="srgb-linear",na="linear",Ne="srgb";var So=7680;var md=519,gd=512,xd=513,yd=514,Sh=515,vd=516,_d=517,wh=518,Eh=519,Th=35044;var Ah="300 es",ai=2e3,mr=2001;function Op(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Bp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ia(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bd(){let s=ia("canvas");return s.style.display="block",s}var ou={},gr=null;function sa(...s){let t="THREE."+s.shift();gr?gr("log",t,...s):console.log(t,...s)}function Md(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function jt(...s){s=Md(s);let t="THREE."+s.shift();if(gr)gr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ee(...s){s=Md(s);let t="THREE."+s.shift();if(gr)gr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Qr(...s){let t=s.join(" ");t in ou||(ou[t]=!0,jt(...s))}function Sd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var wd={[wo]:wo,[To]:Co,[Ao]:Ao,[pr]:Ro,[Eo]:Eo,[Co]:To,[Po]:Po,[Ro]:pr},Si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sc=Math.PI/180,ra=180/Math.PI;function Us(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[e&63|128]+Bn[e>>8&255]+"-"+Bn[e>>16&255]+Bn[e>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function Ee(s,t,e){return Math.max(t,Math.min(e,s))}function zp(s,t){return(s%t+t)%t}function wc(s,t,e){return(1-e)*s+e*t}function Ed(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vl(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Td(s,t){if(t.constructor===Float32Array)return s;let e=Vl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Ad(s,t){if(t.constructor===Float32Array)return s;let e=Vl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Lh=class Lh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lh.prototype.isVector2=!0;var Yt=Lh,Hn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],d=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(f!==x||l!==d||c!==p||u!==m){let g=l*d+c*p+u*m+f*x;g<0&&(d=-d,p=-p,m=-m,x=-x,g=-g);let y=1-o;if(g<.9995){let b=Math.acos(g),E=Math.sin(b);y=Math.sin(y*b)/E,o=Math.sin(o*b)/E,l=l*y+d*o,c=c*y+p*o,u=u*y+m*o,f=f*y+x*o}else{l=l*y+d*o,c=c*y+p*o,u=u*y+m*o,f=f*y+x*o;let b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+u*f+l*p-c*d,t[e+1]=l*m+u*d+c*f-o*p,t[e+2]=c*m+u*p+o*d-l*f,t[e+3]=u*m-o*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(r/2),d=l(n/2),p=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f-d*p*m;break;case"YXZ":this._x=d*u*f+c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f+d*p*m;break;case"ZXY":this._x=d*u*f-c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f-d*p*m;break;case"ZYX":this._x=d*u*f-c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f+d*p*m;break;case"YZX":this._x=d*u*f+c*p*m,this._y=c*p*f+d*u*m,this._z=c*u*m-d*p*f,this._w=c*u*f-d*p*m;break;case"XZY":this._x=d*u*f-c*p*m,this._y=c*p*f-d*u*m,this._z=c*u*m+d*p*f,this._w=c*u*f+d*p*m;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dh=class Dh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=i+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ec.copy(this).projectOnVector(t),this.sub(Ec)}reflect(t){return this.sub(Ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dh.prototype.isVector3=!0;var L=Dh,Ec=new L,lu=new Hn,kh=class kh{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],p=n[5],m=n[8],x=i[0],g=i[3],y=i[6],b=i[1],E=i[4],S=i[7],_=i[2],w=i[5],v=i[8];return r[0]=a*x+o*b+l*_,r[3]=a*g+o*E+l*w,r[6]=a*y+o*S+l*v,r[1]=c*x+u*b+f*_,r[4]=c*g+u*E+f*w,r[7]=c*y+u*S+f*v,r[2]=d*x+p*b+m*_,r[5]=d*g+p*E+m*w,r[8]=d*y+p*S+m*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*r,p=c*r-a*l,m=e*f+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=f*x,t[1]=(i*c-u*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(u*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return Qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return Qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};kh.prototype.isMatrix3=!0;var ae=kh,Tc=new ae,cu=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hp(){let s={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ne&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ne&&(i.r=fr(i.r),i.g=fr(i.g),i.b=fr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?na:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ea]:{primaries:t,whitePoint:n,transfer:na,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:t,whitePoint:n,transfer:Ne,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),s}var be=Hp();function Bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var $s,Do=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$s===void 0&&($s=ia("canvas")),$s.width=t.width,$s.height=t.height;let i=$s.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=$s}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ia("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gp=0,xr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ac(i[a].image)):r.push(Ac(i[a]))}else r=Ac(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ac(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Do.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var Vp=0,Rc=new L,qn=class s extends Si{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=bi,i=bi,r=vn,a=Gi,o=gi,l=$n,c=s.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Us(),this.name="",this.source=new xr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rc).x}get height(){return this.source.getSize(Rc).y}get depth(){return this.source.getSize(Rc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mi:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mi:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=gh;qn.DEFAULT_ANISOTROPY=1;var Nh=class Nh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],m=l[9],x=l[2],g=l[6],y=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,S=(p+1)/2,_=(y+1)/2,w=(u+d)/4,v=(f+x)/4,M=(m+g)/4;return E>S&&E>_?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=w/n,r=v/n):S>_?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=w/i,r=M/i):_<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=v/r,i=M/r),this.set(n,i,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(f-x)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this.w=Ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this.w=Ee(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nh.prototype.isVector4=!0;var tn=Nh,ko=class extends Si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new tn(0,0,t,e),this.scissorTest=!1,this.viewport=new tn(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new qn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new xr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends ko{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},aa=class extends qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var No=class extends qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var nl=class nl{constructor(t,e,n,i,r,a,o,l,c,u,f,d,p,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,u,f,d,p,m,x,g)}set(t,e,n,i,r,a,o,l,c,u,f,d,p,m,x,g){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=i,y[1]=r,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=u,y[10]=f,y[14]=d,y[3]=p,y[7]=m,y[11]=x,y[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ks.setFromMatrixColumn(t,0).length(),r=1/Ks.setFromMatrixColumn(t,1).length(),a=1/Ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*u,p=a*f,m=o*u,x=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+m*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,p=l*f,m=c*u,x=c*f;e[0]=d+x*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-m,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,p=l*f,m=c*u,x=c*f;e[0]=d-x*o,e[4]=-a*f,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,p=a*f,m=o*u,x=o*f;e[0]=l*u,e[4]=m*c-p,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,m=o*l,x=o*c;e[0]=l*u,e[4]=x-d*f,e[8]=m*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+m,e[10]=d-x*f}else if(t.order==="XZY"){let d=a*l,p=a*c,m=o*l,x=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+x,e[5]=a*u,e[9]=p*f-m,e[2]=m*f-p,e[6]=o*u,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wp,t,Xp)}lookAt(t,e,n){let i=this.elements;return Jn.subVectors(t,e),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ji.crossVectors(n,Jn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ji.crossVectors(n,Jn)),Ji.normalize(),Za.crossVectors(Jn,Ji),i[0]=Ji.x,i[4]=Za.x,i[8]=Jn.x,i[1]=Ji.y,i[5]=Za.y,i[9]=Jn.y,i[2]=Ji.z,i[6]=Za.z,i[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],p=n[13],m=n[2],x=n[6],g=n[10],y=n[14],b=n[3],E=n[7],S=n[11],_=n[15],w=i[0],v=i[4],M=i[8],R=i[12],C=i[1],k=i[5],D=i[9],B=i[13],I=i[2],H=i[6],Y=i[10],Z=i[14],nt=i[3],K=i[7],st=i[11],ut=i[15];return r[0]=a*w+o*C+l*I+c*nt,r[4]=a*v+o*k+l*H+c*K,r[8]=a*M+o*D+l*Y+c*st,r[12]=a*R+o*B+l*Z+c*ut,r[1]=u*w+f*C+d*I+p*nt,r[5]=u*v+f*k+d*H+p*K,r[9]=u*M+f*D+d*Y+p*st,r[13]=u*R+f*B+d*Z+p*ut,r[2]=m*w+x*C+g*I+y*nt,r[6]=m*v+x*k+g*H+y*K,r[10]=m*M+x*D+g*Y+y*st,r[14]=m*R+x*B+g*Z+y*ut,r[3]=b*w+E*C+S*I+_*nt,r[7]=b*v+E*k+S*H+_*K,r[11]=b*M+E*D+S*Y+_*st,r[15]=b*R+E*B+S*Z+_*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],p=t[14],m=t[3],x=t[7],g=t[11],y=t[15],b=l*p-c*d,E=o*p-c*f,S=o*d-l*f,_=a*p-c*u,w=a*d-l*u,v=a*f-o*u;return e*(x*b-g*E+y*S)-n*(m*b-g*_+y*w)+i*(m*E-x*_+y*v)-r*(m*S-x*w+g*v)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],p=t[11],m=t[12],x=t[13],g=t[14],y=t[15],b=e*o-n*a,E=e*l-i*a,S=e*c-r*a,_=n*l-i*o,w=n*c-r*o,v=i*c-r*l,M=u*x-f*m,R=u*g-d*m,C=u*y-p*m,k=f*g-d*x,D=f*y-p*x,B=d*y-p*g,I=b*B-E*D+S*k+_*C-w*R+v*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/I;return t[0]=(o*B-l*D+c*k)*H,t[1]=(i*D-n*B-r*k)*H,t[2]=(x*v-g*w+y*_)*H,t[3]=(d*w-f*v-p*_)*H,t[4]=(l*C-a*B-c*R)*H,t[5]=(e*B-i*C+r*R)*H,t[6]=(g*S-m*v-y*E)*H,t[7]=(u*v-d*S+p*E)*H,t[8]=(a*D-o*C+c*M)*H,t[9]=(n*C-e*D-r*M)*H,t[10]=(m*w-x*S+y*b)*H,t[11]=(f*S-u*w-p*b)*H,t[12]=(o*R-a*k-l*M)*H,t[13]=(e*k-n*R+i*M)*H,t[14]=(x*E-m*_-g*b)*H,t[15]=(u*_-f*E+d*b)*H,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,d=r*c,p=r*u,m=r*f,x=a*u,g=a*f,y=o*f,b=l*c,E=l*u,S=l*f,_=n.x,w=n.y,v=n.z;return i[0]=(1-(x+y))*_,i[1]=(p+S)*_,i[2]=(m-E)*_,i[3]=0,i[4]=(p-S)*w,i[5]=(1-(d+y))*w,i[6]=(g+b)*w,i[7]=0,i[8]=(m+E)*v,i[9]=(g-b)*v,i[10]=(1-(d+x))*v,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ks.set(i[0],i[1],i[2]).length(),o=Ks.set(i[4],i[5],i[6]).length(),l=Ks.set(i[8],i[9],i[10]).length();r<0&&(a=-a),ui.copy(this);let c=1/a,u=1/o,f=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=f,ui.elements[9]*=f,ui.elements[10]*=f,e.setFromRotationMatrix(ui),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=ai,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===ai)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===mr)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=ai,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-i),d=-(e+t)/(e-t),p=-(n+i)/(n-i),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===ai)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===mr)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};nl.prototype.isMatrix4=!0;var de=nl,Ks=new L,ui=new de,Wp=new L(0,0,0),Xp=new L(1,1,1),Ji=new L,Za=new L,Jn=new L,uu=new de,du=new Hn,Cn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return du.setFromEuler(this),this.setFromQuaternion(du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qp=0,fu=new L,Js=new Hn,Di=new de,Ya=new L,Vr=new L,Zp=new L,Yp=new Hn,pu=new L(1,0,0),mu=new L(0,1,0),gu=new L(0,0,1),xu={type:"added"},$p={type:"removed"},js={type:"childadded",child:null},Cc={type:"childremoved",child:null},Ye=class s extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Cn,n=new Hn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new ae}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(pu,t)}rotateY(t){return this.rotateOnAxis(mu,t)}rotateZ(t){return this.rotateOnAxis(gu,t)}translateOnAxis(t,e){return fu.copy(t).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pu,t)}translateY(t){return this.translateOnAxis(mu,t)}translateZ(t){return this.translateOnAxis(gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ya.copy(t):Ya.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Vr,Ya,this.up):Di.lookAt(Ya,Vr,this.up),this.quaternion.setFromRotationMatrix(Di),i&&(Di.extractRotation(i.matrixWorld),Js.setFromRotationMatrix(Di),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xu),js.child=t,this.dispatchEvent(js),js.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($p),Cc.child=t,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xu),js.child=t,this.dispatchEvent(js),js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,t,Zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new L(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kp={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),y=this._getHandJoint(c,x);g!==null&&(y.matrix.fromArray(g.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=g.radius),y.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Pc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=be.workingColorSpace){if(t=zp(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Pc(a,r,t+1/3),this.g=Pc(a,r,t),this.b=Pc(a,r,t-1/3)}return be.colorSpaceToWorking(this,i),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){let n=Rd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return be.workingToColorSpace(zn.copy(this),t),Math.round(Ee(zn.r*255,0,255))*65536+Math.round(Ee(zn.g*255,0,255))*256+Math.round(Ee(zn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.workingToColorSpace(zn.copy(this),e);let n=zn.r,i=zn.g,r=zn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=be.workingColorSpace){return be.workingToColorSpace(zn.copy(this),e),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=mn){be.workingToColorSpace(zn.copy(this),t);let e=zn.r,n=zn.g,i=zn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL($a);let n=wc(ji.h,$a.h,e),i=wc(ji.s,$a.s,e),r=wc(ji.l,$a.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new $t;$t.NAMES=Rd;var oa=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var bs=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},di=new L,ki=new L,Ic=new L,Ni=new L,Qs=new L,tr=new L,yu=new L,Lc=new L,Dc=new L,kc=new L,Nc=new tn,Uc=new tn,Fc=new tn,Oi=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),di.subVectors(t,e),i.cross(di);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){di.subVectors(i,e),ki.subVectors(n,e),Ic.subVectors(t,e);let a=di.dot(di),o=di.dot(ki),l=di.dot(Ic),c=ki.dot(ki),u=ki.dot(Ic),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Nc.setScalar(0),Uc.setScalar(0),Fc.setScalar(0),Nc.fromBufferAttribute(t,e),Uc.fromBufferAttribute(t,n),Fc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Nc,r.x),a.addScaledVector(Uc,r.y),a.addScaledVector(Fc,r.z),a}static isFrontFacing(t,e,n,i){return di.subVectors(n,e),ki.subVectors(t,e),di.cross(ki).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),di.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Qs.subVectors(i,n),tr.subVectors(r,n),Lc.subVectors(t,n);let l=Qs.dot(Lc),c=tr.dot(Lc);if(l<=0&&c<=0)return e.copy(n);Dc.subVectors(t,i);let u=Qs.dot(Dc),f=tr.dot(Dc);if(u>=0&&f<=u)return e.copy(i);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(Qs,a);kc.subVectors(t,r);let p=Qs.dot(kc),m=tr.dot(kc);if(m>=0&&p<=m)return e.copy(r);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(tr,o);let g=u*m-p*f;if(g<=0&&f-u>=0&&p-m>=0)return yu.subVectors(r,i),o=(f-u)/(f-u+(p-m)),e.copy(i).addScaledVector(yu,o);let y=1/(g+x+d);return a=x*y,o=d*y,e.copy(n).addScaledVector(Qs,a).addScaledVector(tr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ka.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(t.matrixWorld),this.union(Ka)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wr),Ja.subVectors(this.max,Wr),er.subVectors(t.a,Wr),nr.subVectors(t.b,Wr),ir.subVectors(t.c,Wr),Qi.subVectors(nr,er),ts.subVectors(ir,nr),xs.subVectors(er,ir);let e=[0,-Qi.z,Qi.y,0,-ts.z,ts.y,0,-xs.z,xs.y,Qi.z,0,-Qi.x,ts.z,0,-ts.x,xs.z,0,-xs.x,-Qi.y,Qi.x,0,-ts.y,ts.x,0,-xs.y,xs.x,0];return!Oc(e,er,nr,ir,Ja)||(e=[1,0,0,0,1,0,0,0,1],!Oc(e,er,nr,ir,Ja))?!1:(ja.crossVectors(Qi,ts),e=[ja.x,ja.y,ja.z],Oc(e,er,nr,ir,Ja))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ui=[new L,new L,new L,new L,new L,new L,new L,new L],fi=new L,Ka=new wi,er=new L,nr=new L,ir=new L,Qi=new L,ts=new L,xs=new L,Wr=new L,Ja=new L,ja=new L,ys=new L;function Oc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ys.fromArray(s,r);let o=i.x*Math.abs(ys.x)+i.y*Math.abs(ys.y)+i.z*Math.abs(ys.z),l=t.dot(ys),c=e.dot(ys),u=n.dot(ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var xn=new L,Qa=new Yt,Jp=0,an=class extends Si{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Th,this.updateRanges=[],this.gpuType=oi,this.version=0,this._normalizationScale=t!==void 0?Vl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qa.fromBufferAttribute(this,e),Qa.applyMatrix3(t),this.setXY(e,Qa.x,Qa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix3(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Td(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ad(t,this.array)}};var la=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ca=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},jp=new wi,Xr=new L,Bc=new L,Ei=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xr.subVectors(t,this.center);let e=Xr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xr.copy(t.center).add(Bc)),this.expandByPoint(Xr.copy(t.center).sub(Bc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qp=0,ri=new de,zc=new Ye,sr=new L,jn=new wi,qr=new wi,An=new L,Be=class s extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Op(t)?ca:la)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,n){return ri.makeTranslation(t,e,n),this.applyMatrix4(ri),this}scale(t,e,n){return ri.makeScale(t,e,n),this.applyMatrix4(ri),this}lookAt(t){return zc.lookAt(t),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(jn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qr.setFromBufferAttribute(o),this.morphTargetsRelative?(An.addVectors(jn.min,qr.min),jn.expandByPoint(An),An.addVectors(jn.max,qr.max),jn.expandByPoint(An)):(jn.expandByPoint(qr.min),jn.expandByPoint(qr.max))}jn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)An.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(An));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)An.fromBufferAttribute(o,c),l&&(sr.fromBufferAttribute(t,c),An.add(sr)),i=Math.max(i,n.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new L,l[R]=new L;let u=new L,f=new L,d=new L,p=new Yt,m=new Yt,x=new Yt,g=new L,y=new L;function b(R,C,k){c[R]=c[C]=c[k]=1,u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,C),d.fromBufferAttribute(n,k),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,C),x.fromBufferAttribute(r,k),f.sub(u),d.sub(u),m.sub(p),x.sub(p);let D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(g.copy(f).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(D),y.copy(d).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(D),o[R].add(g),o[C].add(g),o[k].add(g),l[R].add(y),l[C].add(y),l[k].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,C=E.length;R<C;++R){let k=E[R],D=k.start,B=k.count;for(let I=D,H=D+B;I<H;I+=3)b(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let S=new L,_=new L,w=new L,v=new L;function M(R){w.fromBufferAttribute(i,R),v.copy(w);let C=o[R];S.copy(C),S.sub(w.multiplyScalar(w.dot(C))).normalize(),_.crossVectors(v,C);let D=_.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,D)}for(let R=0,C=n.count;R<C;++R)c[R]&&M(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,f=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)An.fromBufferAttribute(t,e),An.normalize(),t.setXYZ(e,An.x,An.y,An.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u),p=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let y=0;y<u;y++)d[m++]=c[p++]}return new an(d,u,f)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ha=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=Us()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=vu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=vu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function vu(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Us()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Xn=new L,_r=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?Vl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.applyMatrix4(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.applyNormalMatrix(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.transformDirection(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){sa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){sa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Td(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ad(t,this.data.array)}},Hc=new L,t0=new L,e0=new ae,pi=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Hc.subVectors(n,e).cross(t0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Hc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||e0.getNormalMatrix(t),i=this.coplanarPoint(Hc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},n0=0,Qn=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Rr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new pi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Yt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Yt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ns=class extends Qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rr,Zr=new L,ar=new L,or=new L,lr=new Yt,Yr=new Yt,Cd=new de,to=new L,$r=new L,eo=new L,_u=new Yt,Gc=new Yt,bu=new Yt,Ms=class extends Ye{constructor(t=new ns){if(super(),this.isSprite=!0,this.type="Sprite",rr===void 0){rr=new Be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ha(e,5);rr.setIndex([0,1,2,0,2,3]),rr.setAttribute("position",new _r(n,3,0,!1)),rr.setAttribute("uv",new _r(n,2,3,!1))}this.geometry=rr,this.material=t,this.center=new Yt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),Cd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-or.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;no(to.set(-.5,-.5,0),or,a,ar,i,r),no($r.set(.5,-.5,0),or,a,ar,i,r),no(eo.set(.5,.5,0),or,a,ar,i,r),_u.set(0,0),Gc.set(1,0),bu.set(1,1);let o=t.ray.intersectTriangle(to,$r,eo,!1,Zr);if(o===null&&(no($r.set(-.5,.5,0),or,a,ar,i,r),Gc.set(0,1),o=t.ray.intersectTriangle(to,eo,$r,!1,Zr),o===null))return;let l=t.ray.origin.distanceTo(Zr);l<t.near||l>t.far||e.push({distance:l,point:Zr.clone(),uv:Oi.getInterpolation(Zr,to,$r,eo,_u,Gc,bu,new Yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function no(s,t,e,n,i,r){lr.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Yr.x=r*lr.x-i*lr.y,Yr.y=i*lr.x+r*lr.y):Yr.copy(lr),s.copy(t),s.x+=Yr.x,s.y+=Yr.y,s.applyMatrix4(Cd)}var Fi=new L,Vc=new L,io=new L,so=new L,Ss=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vc.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),so.copy(this.origin).sub(Vc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(io),o=so.dot(this.direction),l=-so.dot(io),c=so.lengthSq(),u=Math.abs(1-a*a),f,d,p,m;if(u>0)if(f=a*l-o,d=a*o-l,m=r*u,f>=0)if(d>=-m)if(d<=m){let x=1/u;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Vc).addScaledVector(io,d),p}intersectSphere(t,e){if(t.radius<0)return null;Fi.subVectors(t.center,this.origin);let n=Fi.dot(this.direction),i=Fi.dot(Fi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,d=t.y-a.y,p=t.z-a.z,m=e.x-a.x,x=e.y-a.y,g=e.z-a.z,y=n.x-a.x,b=n.y-a.y,E=n.z-a.z,S=Math.abs(l),_=Math.abs(c),w=Math.abs(u),v,M,R,C,k,D,B,I,H,Y,Z,nt;if(S>=_&&S>=w?(R=l,D=f,H=m,nt=y,l>=0?(v=c,M=u,C=d,k=p,B=x,I=g,Y=b,Z=E):(v=u,M=c,C=p,k=d,B=g,I=x,Y=E,Z=b)):_>=w?(R=c,D=d,H=x,nt=b,c>=0?(v=u,M=l,C=p,k=f,B=g,I=m,Y=E,Z=y):(v=l,M=u,C=f,k=p,B=m,I=g,Y=y,Z=E)):(R=u,D=p,H=g,nt=E,u>=0?(v=l,M=c,C=f,k=d,B=m,I=x,Y=y,Z=b):(v=c,M=l,C=d,k=f,B=x,I=m,Y=b,Z=y)),R===0)return null;let K=v/R,st=M/R,ut=1/R,yt=C-K*D,Ft=k-st*D,ot=B-K*H,wt=I-st*H,N=Y-K*nt,W=Z-st*nt,U=N*wt-W*ot,j=yt*W-Ft*N,Gt=ot*Ft-wt*yt;if(i){if(U<0||j<0||Gt<0)return null}else if((U<0||j<0||Gt<0)&&(U>0||j>0||Gt>0))return null;let Ct=U+j+Gt;if(Ct===0)return null;let Xt=ut*(U*D+j*H+Gt*nt);return(Ct>0?Xt<0:Xt>0)?null:this.at(Xt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mu=new de,vs=new Ss,ro=new Ei,Su=new L,ao=new L,oo=new L,lo=new L,Wc=new L,co=new L,wu=new L,ho=new L,X=class extends Ye{constructor(t=new Be,e=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Wc.fromBufferAttribute(f,t),a?co.addScaledVector(Wc,u):co.addScaledVector(Wc.sub(e),u))}e.add(co)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(ro.containsPoint(vs.origin)===!1&&(vs.intersectSphere(ro,Su)===null||vs.origin.distanceToSquared(Su)>(t.far-t.near)**2))&&(Mu.copy(r).invert(),vs.copy(t.ray).applyMatrix4(Mu),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],y=a[g.materialIndex],b=Math.max(g.start,p.start),E=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=b,_=E;S<_;S+=3){let w=o.getX(S),v=o.getX(S+1),M=o.getX(S+2);i=uo(this,y,t,n,c,u,f,w,v,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,y=x;g<y;g+=3){let b=o.getX(g),E=o.getX(g+1),S=o.getX(g+2);i=uo(this,a,t,n,c,u,f,b,E,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],y=a[g.materialIndex],b=Math.max(g.start,p.start),E=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=b,_=E;S<_;S+=3){let w=S,v=S+1,M=S+2;i=uo(this,y,t,n,c,u,f,w,v,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,y=x;g<y;g+=3){let b=g,E=g+1,S=g+2;i=uo(this,a,t,n,c,u,f,b,E,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function i0(s,t,e,n,i,r,a,o){let l;if(t.side===Nn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ls,o),l===null)return null;ho.copy(o),ho.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ho);return c<e.near||c>e.far?null:{distance:c,point:ho.clone(),object:s}}function uo(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ao),s.getVertexPosition(l,oo),s.getVertexPosition(c,lo);let u=i0(s,t,e,n,ao,oo,lo,wu);if(u){let f=new L;Oi.getBarycoord(wu,ao,oo,lo,f),i&&(u.uv=Oi.getInterpolatedAttribute(i,o,l,c,f,new Yt)),r&&(u.uv1=Oi.getInterpolatedAttribute(r,o,l,c,f,new Yt)),a&&(u.normal=Oi.getInterpolatedAttribute(a,o,l,c,f,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};Oi.getNormal(ao,oo,lo,d.normal),u.face=d,u.barycoord=f}return u}var ua=class extends qn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Rn,u=Rn,f,d){super(null,a,o,l,c,u,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var br=class extends an{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cr=new de,Eu=new de,fo=[],Tu=new wi,s0=new de,Kr=new X,Jr=new Ei,ws=class extends X{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new br(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,s0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cr),Tu.copy(t.boundingBox).applyMatrix4(cr),this.boundingBox.union(Tu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cr),Jr.copy(t.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(Jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(n),t.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,cr),Eu.multiplyMatrices(n,cr),Kr.matrixWorld=Eu,Kr.raycast(t,fo);for(let a=0,o=fo.length;a<o;a++){let l=fo[a];l.instanceId=r,l.object=this,e.push(l)}fo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new br(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ua(new Float32Array(i*this.count),i,this.count,cl,oi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_s=new Ei,r0=new Yt(.5,.5),po=new L,is=class{constructor(t=new pi,e=new pi,n=new pi,i=new pi,r=new pi,a=new pi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ai,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],p=r[7],m=r[8],x=r[9],g=r[10],y=r[11],b=r[12],E=r[13],S=r[14],_=r[15];if(i[0].setComponents(c-a,p-u,y-m,_-b).normalize(),i[1].setComponents(c+a,p+u,y+m,_+b).normalize(),i[2].setComponents(c+o,p+f,y+x,_+E).normalize(),i[3].setComponents(c-o,p-f,y-x,_-E).normalize(),n)i[4].setComponents(l,d,g,S).normalize(),i[5].setComponents(c-l,p-d,y-g,_-S).normalize();else if(i[4].setComponents(c-l,p-d,y-g,_-S).normalize(),e===ai)i[5].setComponents(c+l,p+d,y+g,_+S).normalize();else if(e===mr)i[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){_s.center.set(0,0,0);let e=r0.distanceTo(t.center);return _s.radius=.7071067811865476+e,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(po.x=i.normal.x>0?t.max.x:t.min.x,po.y=i.normal.y>0?t.max.y:t.min.y,po.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Au=new de,Uo=class s{constructor(){this.coordinateSystem=ai,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Au.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new is),n[i].setFromProjectionMatrix(Au,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new is),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Mr=class extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fo=new L,Oo=new L,Ru=new de,jr=new Ss,mo=new Ei,Xc=new L,Cu=new L,Bo=class extends Ye{constructor(t=new Be,e=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Fo.fromBufferAttribute(e,i-1),Oo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Fo.distanceTo(Oo);t.setAttribute("lineDistance",new ce(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(i),mo.radius+=r,t.ray.intersectsSphere(mo)===!1)return;Ru.copy(i).invert(),jr.copy(t.ray).applyMatrix4(Ru);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=c){let y=u.getX(x),b=u.getX(x+1),E=go(this,t,jr,l,y,b,x);E&&e.push(E)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(p),y=go(this,t,jr,l,x,g,m-1);y&&e.push(y)}}else{let p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=c){let y=go(this,t,jr,l,x,x+1,x);y&&e.push(y)}if(this.isLineLoop){let x=go(this,t,jr,l,m-1,p,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function go(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(Fo.fromBufferAttribute(o,i),Oo.fromBufferAttribute(o,r),e.distanceSqToSegment(Fo,Oo,Xc,Cu)>n)return;Xc.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Xc);if(!(c<t.near||c>t.far))return{distance:c,point:Cu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Pu=new L,Iu=new L,da=class extends Bo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Pu.fromBufferAttribute(e,i),Iu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pu.distanceTo(Iu);t.setAttribute("lineDistance",new ce(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zo=class extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Lu=new de,Jc=new Ss,xo=new Ei,yo=new L,fa=class extends Ye{constructor(t=new Be,e=new zo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;Lu.copy(i).invert(),Jc.copy(t.ray).applyMatrix4(Lu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=d,x=p;m<x;m++){let g=c.getX(m);yo.fromBufferAttribute(f,g),Du(yo,g,l,i,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let m=d,x=p;m<x;m++)yo.fromBufferAttribute(f,m),Du(yo,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Du(s,t,e,n,i,r,a){let o=Jc.distanceSqToPoint(s);if(o<e){let l=new L;Jc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var pa=class extends qn{constructor(t=[],e=ks,n,i,r,a,o,l,c,u){super(t,e,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pn=class extends qn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends qn{constructor(t,e,n=mi,i,r,a,o=Rn,l=Rn,c,u=zi,f=1){if(u!==zi&&u!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ma=class extends Hi{constructor(t,e=mi,n=ks,i,r,a=Rn,o=Rn,l,c=zi){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ga=class extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ke=class s extends Be{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function m(x,g,y,b,E,S,_,w,v,M,R){let C=S/v,k=_/M,D=S/2,B=_/2,I=w/2,H=v+1,Y=M+1,Z=0,nt=0,K=new L;for(let st=0;st<Y;st++){let ut=st*k-B;for(let yt=0;yt<H;yt++){let Ft=yt*C-D;K[x]=Ft*b,K[g]=ut*E,K[y]=I,c.push(K.x,K.y,K.z),K[x]=0,K[g]=0,K[y]=w>0?1:-1,u.push(K.x,K.y,K.z),f.push(yt/v),f.push(1-st/M),Z+=1}}for(let st=0;st<M;st++)for(let ut=0;ut<v;ut++){let yt=d+ut+H*st,Ft=d+ut+H*(st+1),ot=d+(ut+1)+H*(st+1),wt=d+(ut+1)+H*st;l.push(yt,Ft,wt),l.push(Ft,ot,wt),nt+=6}o.addGroup(p,nt,R),p+=nt,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ss=class s extends Be{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,f=Math.PI/2*t,d=e,p=2*f+d,m=n*2+r,x=i+1,g=new L,y=new L;for(let b=0;b<=m;b++){let E=0,S=0,_=0,w=0;if(b<=n){let R=b/n,C=R*Math.PI/2;S=-u-t*Math.cos(C),_=t*Math.sin(C),w=-t*Math.cos(C),E=R*f}else if(b<=n+r){let R=(b-n)/r;S=-u+R*e,_=t,w=0,E=f+R*d}else{let R=(b-n-r)/n,C=R*Math.PI/2;S=u+t*Math.sin(C),_=t*Math.cos(C),w=t*Math.sin(C),E=f+d+R*f}let v=Math.max(0,Math.min(1,E/p)),M=0;b===0?M=.5/i:b===m&&(M=-.5/i);for(let R=0;R<=i;R++){let C=R/i,k=C*Math.PI*2,D=Math.sin(k),B=Math.cos(k);y.x=-_*B,y.y=S,y.z=_*D,o.push(y.x,y.y,y.z),g.set(-_*B,w,_*D),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+M,v)}if(b>0){let R=(b-1)*x;for(let C=0;C<i;C++){let k=R+C,D=R+C+1,B=b*x+C,I=b*x+C+1;a.push(k,D,B),a.push(D,I,B)}}}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ti=class s extends Be{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,u=new Yt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let p=n+f/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ue=class s extends Be{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],f=[],d=[],p=[],m=0,x=[],g=n/2,y=0;b(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(p,2));function b(){let S=new L,_=new L,w=0,v=(e-t)/n;for(let M=0;M<=r;M++){let R=[],C=M/r,k=C*(e-t)+t;for(let D=0;D<=i;D++){let B=D/i,I=B*l+o,H=Math.sin(I),Y=Math.cos(I);_.x=k*H,_.y=-C*n+g,_.z=k*Y,f.push(_.x,_.y,_.z),S.set(H,v,Y).normalize(),d.push(S.x,S.y,S.z),p.push(B,1-C),R.push(m++)}x.push(R)}for(let M=0;M<i;M++)for(let R=0;R<r;R++){let C=x[R][M],k=x[R+1][M],D=x[R+1][M+1],B=x[R][M+1];(t>0||R!==0)&&(u.push(C,k,B),w+=3),(e>0||R!==r-1)&&(u.push(k,D,B),w+=3)}c.addGroup(y,w,0),y+=w}function E(S){let _=m,w=new Yt,v=new L,M=0,R=S===!0?t:e,C=S===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,g*C,0),d.push(0,C,0),p.push(.5,.5),m++;let k=m;for(let D=0;D<=i;D++){let I=D/i*l+o,H=Math.cos(I),Y=Math.sin(I);v.x=R*Y,v.y=g*C,v.z=R*H,f.push(v.x,v.y,v.z),d.push(0,C,0),w.x=H*.5+.5,w.y=Y*.5*C+.5,p.push(w.x,w.y),m++}for(let D=0;D<i;D++){let B=_+D,I=k+D;S===!0?u.push(I,I+1,B):u.push(I+1,I,B),M+=3}c.addGroup(y,M,S===!0?1:2),y+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sr=class s extends Ue{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ho=class s extends Be{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let E=new L,S=new L,_=new L;for(let w=0;w<e.length;w+=3)p(e[w+0],E),p(e[w+1],S),p(e[w+2],_),l(E,S,_,b)}function l(b,E,S,_){let w=_+1,v=[];for(let M=0;M<=w;M++){v[M]=[];let R=b.clone().lerp(S,M/w),C=E.clone().lerp(S,M/w),k=w-M;for(let D=0;D<=k;D++)D===0&&M===w?v[M][D]=R:v[M][D]=R.clone().lerp(C,D/k)}for(let M=0;M<w;M++)for(let R=0;R<2*(w-M)-1;R++){let C=Math.floor(R/2);R%2===0?(d(v[M][C+1]),d(v[M+1][C]),d(v[M][C])):(d(v[M][C+1]),d(v[M+1][C+1]),d(v[M+1][C]))}}function c(b){let E=new L;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(b),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function u(){let b=new L;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];let S=g(b)/2/Math.PI+.5,_=y(b)/Math.PI+.5;a.push(S,1-_)}m(),f()}function f(){for(let b=0;b<a.length;b+=6){let E=a[b+0],S=a[b+2],_=a[b+4],w=Math.max(E,S,_),v=Math.min(E,S,_);w>.9&&v<.1&&(E<.2&&(a[b+0]+=1),S<.2&&(a[b+2]+=1),_<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,E){let S=b*3;E.x=t[S+0],E.y=t[S+1],E.z=t[S+2]}function m(){let b=new L,E=new L,S=new L,_=new L,w=new Yt,v=new Yt,M=new Yt;for(let R=0,C=0;R<r.length;R+=9,C+=6){b.set(r[R+0],r[R+1],r[R+2]),E.set(r[R+3],r[R+4],r[R+5]),S.set(r[R+6],r[R+7],r[R+8]),w.set(a[C+0],a[C+1]),v.set(a[C+2],a[C+3]),M.set(a[C+4],a[C+5]),_.copy(b).add(E).add(S).divideScalar(3);let k=g(_);x(w,C+0,b,k),x(v,C+2,E,k),x(M,C+4,S,k)}}function x(b,E,S,_){_<0&&b.x===1&&(a[E]=b.x-1),S.x===0&&S.z===0&&(a[E]=_/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function y(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}},wr=class s extends Ho{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Jt=class s extends Be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=t/o,d=e/l,p=[],m=[],x=[],g=[];for(let y=0;y<u;y++){let b=y*d-a;for(let E=0;E<c;E++){let S=E*f-r;m.push(S,-b,0),x.push(0,0,1),g.push(E/o),g.push(1-y/l)}}for(let y=0;y<l;y++)for(let b=0;b<o;b++){let E=b+c*y,S=b+c*(y+1),_=b+1+c*(y+1),w=b+1+c*y;p.push(E,S,w),p.push(S,_,w)}this.setIndex(p),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var ze=class s extends Be{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new L,d=new L,p=[],m=[],x=[],g=[];for(let y=0;y<=n;y++){let b=[],E=y/n,S=a+E*o,_=t*Math.cos(S),w=Math.sqrt(t*t-_*_),v=0;y===0&&a===0?v=.5/e:y===n&&l===Math.PI&&(v=-.5/e);for(let M=0;M<=e;M++){let R=M/e,C=i+R*r;f.x=-w*Math.cos(C),f.y=_,f.z=w*Math.sin(C),m.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),g.push(R+v,1-E),b.push(c++)}u.push(b)}for(let y=0;y<n;y++)for(let b=0;b<e;b++){let E=u[y][b+1],S=u[y][b],_=u[y+1][b],w=u[y+1][b+1];(y!==0||a>0)&&p.push(E,S,w),(y!==n-1||l<Math.PI)&&p.push(S,_,w)}this.setIndex(p),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ti=class s extends Be{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],f=[],d=new L,p=new L,m=new L;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let y=0;y<=i;y++){let b=y/i*r;p.x=(t+e*Math.cos(g))*Math.cos(b),p.y=(t+e*Math.cos(g))*Math.sin(b),p.z=e*Math.sin(g),c.push(p.x,p.y,p.z),d.x=t*Math.cos(b),d.y=t*Math.sin(b),m.subVectors(p,d).normalize(),u.push(m.x,m.y,m.z),f.push(y/i),f.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let y=(i+1)*x+g-1,b=(i+1)*(x-1)+g-1,E=(i+1)*(x-1)+g,S=(i+1)*x+g;l.push(y,b,S),l.push(b,E,S)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Fs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(ku(i))i.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(ku(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Vn(s){let t={};for(let e=0;e<s.length;e++){let n=Fs(s[e]);for(let i in n)t[i]=n[i]}return t}function ku(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function a0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Rh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var Pd={clone:Fs,merge:Vn},o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=a0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new $t().setHex(i.value);break;case"v2":this.uniforms[n].value=new Yt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new tn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ae().fromArray(i.value);break;case"m4":this.uniforms[n].value=new de().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Go=class extends Pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Es=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ts=class extends Qn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $t(16777215),this.specular=new $t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ma,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Me=class extends Qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ma,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vo=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wo=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function hr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function vo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var rs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xo=class extends rs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case $c:r=t,o=2*e-n;break;case Kc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $c:a=t,l=2*n-e;break;case Kc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,y=-d*g+2*d*x-d*m,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,E=(-1-p)*g+(1.5+p)*x+.5*m,S=p*g-p*x;for(let _=0;_!==o;++_)r[_]=y*a[u+_]+b*a[c+_]+E*a[l+_]+S*a[f+_];return r}},qo=class extends rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),f=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*u;return r}},Zo=class extends rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Yo=class extends rs{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(n-e)/(i-e),x=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*m;return r}let d=o*2,p=t-1;for(let m=0;m!==o;++m){let x=a[c+m],g=a[l+m],y=p*d+m*2,b=f[y],E=f[y+1],S=t*d+m*2,_=u[S],w=u[S+1],v=h0(n,e,b,_,i);r[m]=Id(v,x,E,w,g)}return r}};function Id(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function c0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function h0(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Id(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=c0(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ei=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hr(e,this.TimeBufferType),this.values=hr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:hr(t.times,Array),values:hr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),vo(t.settings)&&(n.settings={inTangents:hr(t.settings.inTangents,Array),outTangents:hr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Yo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ta:e=this.InterpolantFactoryMethodDiscrete;break;case Lo:e=this.InterpolantFactoryMethodLinear;break;case Mo:e=this.InterpolantFactoryMethodSmooth;break;case Zc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return Lo;case this.InterpolantFactoryMethodSmooth:return Mo;case this.InterpolantFactoryMethodBezier:return Zc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;vo(this.settings)&&(Nu(this.settings.inTangents,t),Nu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;vo(this.settings)&&(Uu(this.settings.inTangents,t),Uu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ee("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Bp(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{let f=o*n,d=f-n,p=f+n;for(let m=0;m!==n;++m){let x=e[f+m];if(x!==e[d+m]||x!==e[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,vo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Nu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Uu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Lo;var as=class extends ei{constructor(t,e,n){super(t,e,n)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=ta;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends ei{constructor(t,e,n,i){super(t,e,n,i)}};$o.prototype.ValueTypeName="color";var Ko=class extends ei{constructor(t,e,n,i){super(t,e,n,i)}};Ko.prototype.ValueTypeName="number";var Jo=class extends rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let u=c+o;c!==u;c+=4)Hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},xa=class extends ei{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Jo(this.times,this.values,this.getValueSize(),t)}};xa.prototype.ValueTypeName="quaternion";xa.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends ei{constructor(t,e,n){super(t,e,n)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=ta;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends ei{constructor(t,e,n,i){super(t,e,n,i)}};jo.prototype.ValueTypeName="vector";var Qo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],m=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ld=new Qo,tl=class{constructor(t){this.manager=t!==void 0?t:Ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var As=class extends Ye{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ya=class extends As{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},qc=new de,Fu=new L,Ou=new L,Er=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fu),Ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ou),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(qc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===mr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(qc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_o=new L,bo=new Hn,_i=new L,va=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_o,bo,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,bo,_i.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(_o,bo,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,bo,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new L,Bu=new Yt,zu=new Yt,kn=class extends va{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,Bu,zu),e.subVectors(zu,Bu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Sc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},jc=class extends Er{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ra*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Rs=class extends As{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Qc=class extends Er{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}},Cs=class extends As{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ps=class extends va{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},th=class extends Er{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_a=class extends As{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new th}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ur=-90,dr=1,Tr=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new kn(ur,dr,t,e);i.layers=this.layers,this.add(i);let r=new kn(ur,dr,t,e);r.layers=this.layers,this.add(r);let a=new kn(ur,dr,t,e);a.layers=this.layers,this.add(a);let o=new kn(ur,dr,t,e);o.layers=this.layers,this.add(o);let l=new kn(ur,dr,t,e);l.layers=this.layers,this.add(l);let c=new kn(ur,dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},el=class extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ch="\\[\\]\\.:\\/",u0=new RegExp("["+Ch+"]","g"),Ph="[^"+Ch+"]",d0="[^"+Ch.replace("\\.","")+"]",f0=/((?:WC+[\/:])*)/.source.replace("WC",Ph),p0=/(WCOD+)?/.source.replace("WCOD",d0),m0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),g0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),x0=new RegExp("^"+f0+p0+m0+g0+"$"),y0=["material","materials","bones","map"],eh=class{constructor(t,e,n){let i=n||Ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ze=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(u0,"")}static parseTrackName(t){let e=x0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);y0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ze.Composite=eh;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jy=new Float32Array(1);var Hu=new de,ba=class{constructor(t,e,n=0,i=1/0){this.ray=new Ss(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hu),this}intersectObject(t,e=!0,n=[]){return nh(t,this,n,e),n.sort(Gu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)nh(t[i],this,n,e);return n.sort(Gu),n}};function Gu(s,t){return s.distance-t.distance}function nh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)nh(r[a],t,e,!0)}}var Uh=class Uh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Uh.prototype.isMatrix2=!0;var ih=Uh;function Ih(s,t,e,n){let i=v0(n);switch(e){case bh:return s*t;case cl:return s*t/i.components*i.byteLength;case hl:return s*t/i.components*i.byteLength;case cs:return s*t*2/i.components*i.byteLength;case ul:return s*t*2/i.components*i.byteLength;case Mh:return s*t*3/i.components*i.byteLength;case gi:return s*t*4/i.components*i.byteLength;case dl:return s*t*4/i.components*i.byteLength;case wa:case Ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ta:case Aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(s,16)*Math.max(t,8)/4;case fl:case ml:return Math.max(s,8)*Math.max(t,8)/2;case xl:case yl:case _l:case bl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case vl:case Ra:case Ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case El:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Il:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case kl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fl:case Ol:case Bl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case zl:case Hl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ca:case Gl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function v0(s){switch(s){case $n:case xh:return{byteLength:1,components:1};case Pr:case yh:case Kn:return{byteLength:2,components:1};case ol:case ll:return{byteLength:2,components:4};case mi:case al:case oi:return{byteLength:4,components:1};case vh:case _h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function tf(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function E0(s){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,u);else{f.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<f.length;p++){let m=f[d],x=f[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,m=f.length;p<m;p++){let x=f[p];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
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
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
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
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$0=`#define PI 3.141592653589793
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
} // validated`,K0=`vec3 transformedNormal = objectNormal;
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
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
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
}`,fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xm=`#ifdef USE_ENVMAP
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
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
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
#endif`,Sm=`uniform sampler2D dfgLUT;
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
}`,wm=`
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nm=`#if defined( USE_POINTS_UV )
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
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bm=`#if defined( USE_MORPHCOLORS )
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
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform float backgroundBlurriness;
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
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
}`,Lg=`#if DEPTH_PACKING == 3200
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
}`,Dg=`#define DISTANCE
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
}`,kg=`#define DISTANCE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`uniform float scale;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Bg=`#include <common>
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
}`,zg=`uniform vec3 diffuse;
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
}`,Hg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define NORMAL
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
}`,Zg=`#define PHONG
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
}`,Yg=`#define PHONG
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
}`,$g=`#define STANDARD
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
}`,Kg=`#define STANDARD
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
}`,Jg=`#define TOON
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
}`,jg=`#define TOON
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
}`,Qg=`uniform float size;
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
}`,t1=`uniform vec3 diffuse;
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
}`,e1=`#include <common>
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
}`,n1=`uniform vec3 color;
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
}`,i1=`uniform float rotation;
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
}`,s1=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:T0,alphahash_pars_fragment:A0,alphamap_fragment:R0,alphamap_pars_fragment:C0,alphatest_fragment:P0,alphatest_pars_fragment:I0,aomap_fragment:L0,aomap_pars_fragment:D0,batching_pars_vertex:k0,batching_vertex:N0,begin_vertex:U0,beginnormal_vertex:F0,bsdfs:O0,iridescence_fragment:B0,bumpmap_pars_fragment:z0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:Z0,color_vertex:Y0,common:$0,defaultnormal_vertex:K0,displacementmap_pars_vertex:J0,displacementmap_vertex:j0,emissivemap_fragment:Q0,emissivemap_pars_fragment:tm,colorspace_fragment:em,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:rm,envmap_pars_vertex:am,envmap_physical_pars_fragment:xm,envmap_vertex:om,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:hm,fog_pars_fragment:um,gradientmap_pars_fragment:dm,lightmap_pars_fragment:fm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:ym,lights_toon_pars_fragment:vm,lights_phong_fragment:_m,lights_phong_pars_fragment:bm,lights_physical_fragment:Mm,lights_physical_pars_fragment:Sm,lights_fragment_begin:wm,lights_fragment_maps:Em,lights_fragment_end:Tm,lightprobes_pars_fragment:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Im,map_fragment:Lm,map_pars_fragment:Dm,map_particle_fragment:km,map_particle_pars_fragment:Nm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Om,morphcolor_vertex:Bm,morphnormal_vertex:zm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Gm,normal_fragment_begin:Vm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Zm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:jm,opaque_fragment:Qm,packing:tg,premultiplied_alpha_fragment:eg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:sg,roughnessmap_fragment:rg,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:og,shadowmap_pars_vertex:lg,shadowmap_vertex:cg,shadowmask_pars_fragment:hg,skinbase_vertex:ug,skinning_pars_vertex:dg,skinning_vertex:fg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:xg,tonemapping_pars_fragment:yg,transmission_fragment:vg,transmission_pars_fragment:_g,uv_pars_fragment:bg,uv_pars_vertex:Mg,uv_vertex:Sg,worldpos_vertex:wg,background_vert:Eg,background_frag:Tg,backgroundCube_vert:Ag,backgroundCube_frag:Rg,cube_vert:Cg,cube_frag:Pg,depth_vert:Ig,depth_frag:Lg,distance_vert:Dg,distance_frag:kg,equirect_vert:Ng,equirect_frag:Ug,linedashed_vert:Fg,linedashed_frag:Og,meshbasic_vert:Bg,meshbasic_frag:zg,meshlambert_vert:Hg,meshlambert_frag:Gg,meshmatcap_vert:Vg,meshmatcap_frag:Wg,meshnormal_vert:Xg,meshnormal_frag:qg,meshphong_vert:Zg,meshphong_frag:Yg,meshphysical_vert:$g,meshphysical_frag:Kg,meshtoon_vert:Jg,meshtoon_frag:jg,points_vert:Qg,points_frag:t1,shadow_vert:e1,shadow_frag:n1,sprite_vert:i1,sprite_frag:s1},kt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Pi={basic:{uniforms:Vn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Vn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Vn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Vn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Vn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new $t(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Vn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Vn([kt.points,kt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Vn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Vn([kt.common,kt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Vn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Vn([kt.sprite,kt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Vn([kt.common,kt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Vn([kt.lights,kt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Pi.physical={uniforms:Vn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var Wl={r:0,b:0,g:0},r1=new de,ef=new ae;ef.set(-1,0,0,0,1,0,0,0,1);function a1(s,t,e,n,i,r){let a=new $t(0),o=i===!0?0:1,l,c,u=null,f=0,d=null;function p(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let S=b.backgroundBlurriness>0;E=t.get(E,S)}return E}function m(b){let E=!1,S=p(b);S===null?g(a,o):S&&S.isColor&&(g(S,1),E=!0);let _=s.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(b,E){let S=p(E);S&&S.isCubeTexture?(c===void 0&&(c=new X(new Ke(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Fs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(r1.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ef),c.material.toneMapped=be.getTransfer(S.colorSpace)!==Ne,(u!==S||f!==S.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new X(new Jt(2,2),new Pn({name:"BackgroundMaterial",uniforms:Fs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=be.getTransfer(S.colorSpace)!==Ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,E){b.getRGB(Wl,Rh(s)),e.buffers.color.setClear(Wl.r,Wl.g,Wl.b,E,r)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:m,addToRenderList:x,dispose:y}}function o1(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(k,D,B,I,H){let Y=!1,Z=f(k,I,B,D);r!==Z&&(r=Z,c(r.object)),Y=p(k,I,B,H),Y&&m(k,I,B,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(k,D,B,I),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(k){return s.bindVertexArray(k)}function u(k){return s.deleteVertexArray(k)}function f(k,D,B,I){let H=I.wireframe===!0,Y=n[D.id];Y===void 0&&(Y={},n[D.id]=Y);let Z=k.isInstancedMesh===!0?k.id:0,nt=Y[Z];nt===void 0&&(nt={},Y[Z]=nt);let K=nt[B.id];K===void 0&&(K={},nt[B.id]=K);let st=K[H];return st===void 0&&(st=d(l()),K[H]=st),st}function d(k){let D=[],B=[],I=[];for(let H=0;H<e;H++)D[H]=0,B[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:I,object:k,attributes:{},index:null}}function p(k,D,B,I){let H=r.attributes,Y=D.attributes,Z=0,nt=B.getAttributes();for(let K in nt)if(nt[K].location>=0){let ut=H[K],yt=Y[K];if(yt===void 0&&(K==="instanceMatrix"&&k.instanceMatrix&&(yt=k.instanceMatrix),K==="instanceColor"&&k.instanceColor&&(yt=k.instanceColor)),ut===void 0||ut.attribute!==yt||yt&&ut.data!==yt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==I}function m(k,D,B,I){let H={},Y=D.attributes,Z=0,nt=B.getAttributes();for(let K in nt)if(nt[K].location>=0){let ut=Y[K];ut===void 0&&(K==="instanceMatrix"&&k.instanceMatrix&&(ut=k.instanceMatrix),K==="instanceColor"&&k.instanceColor&&(ut=k.instanceColor));let yt={};yt.attribute=ut,ut&&ut.data&&(yt.data=ut.data),H[K]=yt,Z++}r.attributes=H,r.attributesNum=Z,r.index=I}function x(){let k=r.newAttributes;for(let D=0,B=k.length;D<B;D++)k[D]=0}function g(k){y(k,0)}function y(k,D){let B=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;B[k]=1,I[k]===0&&(s.enableVertexAttribArray(k),I[k]=1),H[k]!==D&&(s.vertexAttribDivisor(k,D),H[k]=D)}function b(){let k=r.newAttributes,D=r.enabledAttributes;for(let B=0,I=D.length;B<I;B++)D[B]!==k[B]&&(s.disableVertexAttribArray(B),D[B]=0)}function E(k,D,B,I,H,Y,Z){Z===!0?s.vertexAttribIPointer(k,D,B,H,Y):s.vertexAttribPointer(k,D,B,I,H,Y)}function S(k,D,B,I){x();let H=I.attributes,Y=B.getAttributes(),Z=D.defaultAttributeValues;for(let nt in Y){let K=Y[nt];if(K.location>=0){let st=H[nt];if(st===void 0&&(nt==="instanceMatrix"&&k.instanceMatrix&&(st=k.instanceMatrix),nt==="instanceColor"&&k.instanceColor&&(st=k.instanceColor)),st!==void 0){let ut=st.normalized,yt=st.itemSize,Ft=t.get(st);if(Ft===void 0)continue;let ot=Ft.buffer,wt=Ft.type,N=Ft.bytesPerElement,W=wt===s.INT||wt===s.UNSIGNED_INT||st.gpuType===al;if(st.isInterleavedBufferAttribute){let U=st.data,j=U.isInterleavedBuffer===!0?U.stride:U.itemSize,Gt=st.offset;if(U.isInstancedInterleavedBuffer||U.isInstancedBufferAttribute){for(let Ct=0;Ct<K.locationSize;Ct++)y(K.location+Ct,U.meshPerAttribute);k.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Ct=0;Ct<K.locationSize;Ct++)g(K.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let Ct=0;Ct<K.locationSize;Ct++)E(K.location+Ct,yt/K.locationSize,wt,ut,j*N,(Gt+yt/K.locationSize*Ct)*N,W)}else{if(st.isInstancedBufferAttribute){for(let U=0;U<K.locationSize;U++)y(K.location+U,st.meshPerAttribute);k.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let U=0;U<K.locationSize;U++)g(K.location+U);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let U=0;U<K.locationSize;U++)E(K.location+U,yt/K.locationSize,wt,ut,yt*N,yt/K.locationSize*U*N,W)}}else if(Z!==void 0){let ut=Z[nt];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(K.location,ut);break;case 3:s.vertexAttrib3fv(K.location,ut);break;case 4:s.vertexAttrib4fv(K.location,ut);break;default:s.vertexAttrib1fv(K.location,ut)}}}}b()}function _(){R();for(let k in n){let D=n[k];for(let B in D){let I=D[B];for(let H in I){let Y=I[H];for(let Z in Y)u(Y[Z].object),delete Y[Z];delete I[H]}}delete n[k]}}function w(k){if(n[k.id]===void 0)return;let D=n[k.id];for(let B in D){let I=D[B];for(let H in I){let Y=I[H];for(let Z in Y)u(Y[Z].object),delete Y[Z];delete I[H]}}delete n[k.id]}function v(k){for(let D in n){let B=n[D];for(let I in B){let H=B[I];if(H[k.id]===void 0)continue;let Y=H[k.id];for(let Z in Y)u(Y[Z].object),delete Y[Z];delete H[k.id]}}}function M(k){for(let D in n){let B=n[D],I=k.isInstancedMesh===!0?k.id:0,H=B[I];if(H!==void 0){for(let Y in H){let Z=H[Y];for(let nt in Z)u(Z[nt].object),delete Z[nt];delete H[Y]}delete B[I],Object.keys(B).length===0&&delete n[D]}}}function R(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:C,dispose:_,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function l1(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function c1(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(v){return!(v!==gi&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let M=v===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==$n&&v!==oi&&!M&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(jt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:S,maxSamples:_,samples:w}}function h1(s){let t=this,e=null,n=0,i=!1,r=!1,a=new pi,o=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||i;return i=d,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){let m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,y=s.get(f);if(!i||m===null||m.length===0||r&&!g)r?u(null):c();else{let b=r?0:n,E=b*4,S=y.clippingState||null;l.value=S,S=u(m,d,E,p);for(let _=0;_!==E;++_)S[_]=e[_];y.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,p,m){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let y=p+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<y)&&(g=new Float32Array(y));for(let E=0,S=p;E!==x;++E,S+=4)a.copy(f[E]).applyMatrix4(b,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var La=class extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new pa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ke(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:Ls});r.uniforms.tEquirect.value=e;let a=new X(i,r),o=e.minFilter;return e.minFilter===Gi&&(e.minFilter=vn),new Tr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Dd=256,u1=3,d1=20,nf=256,sf=16,f1=3,p1=new L,m1=new $t,ql=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Tr(1,10,null),this._boxMesh=new X(new Ke(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=p1}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,m=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(m1));let g=new Tr(n,i,u);return g.position.copy(o),g.update(l,t),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=m,t.background=x,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Dd,Ed(t))}_fromTexture(t,e){t.mapping===ks||t.mapping===Cr?this._setSize(t.image.length===0?Dd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=kd(t,!1,!1),n=Math.log2(t)-u1;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=kd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ks||t.mapping===Cr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ud()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Nd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=g1(),this._integrationMaterial=x1());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/sf);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-f1)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(nf*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=y1());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function kd(s,t,e){return new La(s,{minFilter:Gi,generateMipmaps:t,type:Kn,colorSpace:ea,depthBuffer:e})}function Da(s,t,e){return new Pn({name:s,uniforms:t,vertexShader:fe.cube_vert,fragmentShader:e,side:Nn,blending:Ls,depthTest:!1,depthWrite:!1})}function g1(){return Da("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${nf}u

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
	`)}function x1(){return Da("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:sf}},`

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
	`)}function y1(){return Da("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${d1}
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
	`)}function Nd(){return Da("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ud(){return Da("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function v1(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===il||p===sl)if(t.has(d)){let m=t.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new La(m.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,m=p===il||p===sl,x=p===ks||p===Cr;if(m||x){let g=e.get(d),y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new ql(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let b=d.image;return m&&b&&b.height>0||x&&b&&l(b)?(n===null&&(n=new ql(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,p){return p===il?d.mapping=ks:p===sl&&(d.mapping=Cr),d}function l(d){let p=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&p++;return p===m}function c(d){let p=d.target;p.removeEventListener("dispose",c);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(d){let p=d.target;p.removeEventListener("dispose",u);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function _1(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Qr("WebGLRenderer: "+n+" extension not supported."),i}}}function b1(s,t,e,n){let i={},r=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);let x=r.get(m);x&&(t.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function u(m){let x=m.attributes;for(let g in x)t.update(x[g],s.ARRAY_BUFFER)}function f(m){let x=m.index,g=m.attributes.position,y=0;if(g===void 0)return;let b=x!==null?x.array.length:g.array.length/3-1,E=g.count>=65535?ca:la,S=new E(Math.ceil(b/3)*6,1),_=S.array;if(x!==null){let v=x.array;y=x.version;for(let M=0,R=0;M<b;M+=3){let C=v[M+0],k=v[M+1],D=v[M+2];_[R++]=C,_[R++]=k,_[R++]=k,_[R++]=D,_[R++]=D,_[R++]=C}}else{y=g.version;for(let v=0,M=0;v<b;v+=3){let R=v+0,C=v+1,k=v+2;_[M++]=R,_[M++]=C,_[M++]=C,_[M++]=k,_[M++]=k,_[M++]=R}}S.version=y;let w=r.get(m);w&&t.remove(w),r.set(m,S)}function d(m){let x=r.get(m);if(x){let g=m.index;g!==null&&x.version<g.version&&f(m)}else f(m);return r.get(m)}function p(){for(let m in i){let x=i[m].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:d,dispose:p}}function M1(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*a,p),e.update(d,n,p))}function u(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let x=0;for(let g=0;g<p;g++)x+=d[g];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function S1(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:ee("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function w1(s,t,e){let n=new WeakMap,i=new tn;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==f){let R=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;p===!0&&(E=1),m===!0&&(E=2),x===!0&&(E=3);let S=o.attributes.position.count*E,_=1;S>t.maxTextureSize&&(_=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*_*4*f),v=new aa(w,S,_,f);v.type=oi,v.needsUpdate=!0;let M=E*4;for(let C=0;C<f;C++){let k=g[C],D=y[C],B=b[C],I=S*_*4*C;for(let H=0;H<k.count;H++){let Y=H*M;p===!0&&(i.fromBufferAttribute(k,H),w[I+Y+0]=i.x,w[I+Y+1]=i.y,w[I+Y+2]=i.z,w[I+Y+3]=0),m===!0&&(i.fromBufferAttribute(D,H),w[I+Y+4]=i.x,w[I+Y+5]=i.y,w[I+Y+6]=i.z,w[I+Y+7]=0),x===!0&&(i.fromBufferAttribute(B,H),w[I+Y+8]=i.x,w[I+Y+9]=i.y,w[I+Y+10]=i.z,w[I+Y+11]=B.itemSize===4?i.w:1)}}d={count:f,texture:v,size:new Yt(S,_)},n.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function E1(s,t,e,n,i){let r=new WeakMap;function a(c){let u=i.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var T1={[ch]:"LINEAR_TONE_MAPPING",[hh]:"REINHARD_TONE_MAPPING",[uh]:"CINEON_TONE_MAPPING",[dh]:"ACES_FILMIC_TONE_MAPPING",[ph]:"AGX_TONE_MAPPING",[mh]:"NEUTRAL_TONE_MAPPING",[fh]:"CUSTOM_TONE_MAPPING"};function A1(s,t,e,n,i,r){let a=new Gn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Be;u.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ce([0,2,0,0,2,0],2));let f=new Go({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new X(u,f),p=new Ps(-1,1,1,-1,0,1),m=null,x=null,g=!1,y,b=null,E=[],S=!1;this.setSize=function(_,w){a.setSize(_,w),o!==null&&o.setSize(_,w),l!==null&&l.setSize(_,w);for(let v=0;v<E.length;v++){let M=E[v];M.setSize&&M.setSize(_,w)}},this.setEffects=function(_){E=_,S=E.length>0&&E[0].isRenderPass===!0;let w=a.width,v=a.height;E.length>0&&o===null&&(o=new Gn(w,v,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new Gn(w,v,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&E.some(R=>R.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Hi(w,v),r===!0&&(c.format=Vi,c.type=Ns)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let R=0;R<E.length;R++){let C=E[R];C.setSize&&C.setSize(w,v),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(_,w){if(g||_.toneMapping===Ri&&E.length===0)return!1;if(b=w,w!==null){let v=w.width,M=w.height;(a.width!==v||a.height!==M)&&this.setSize(v,M)}return S===!1&&_.setRenderTarget(a),y=_.toneMapping,_.toneMapping=Ri,!0},this.hasRenderPass=function(){return S},this.end=function(_,w){_.toneMapping=y,g=!0;let v=a,M=o;for(let R=0;R<E.length;R++){let C=E[R];C.enabled!==!1&&(C.render(_,M,v,w),C.needsSwap!==!1&&(v=M,M=M===o?l:o))}if(m!==_.outputColorSpace||x!==_.toneMapping){m=_.outputColorSpace,x=_.toneMapping,f.defines={},be.getTransfer(m)===Ne&&(f.defines.SRGB_TRANSFER="");let R=T1[x];R&&(f.defines[R]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,_.setRenderTarget(b),_.render(d,p),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var rf=new qn,af=new Hi(1,1),of=new ma(1),lf=new aa,cf=new No,hf=new pa,Fd=[],Od=[],Bd=new Float32Array(16),zd=new Float32Array(9),Hd=new Float32Array(4);function Dr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Fd[i];if(r===void 0&&(r=new Float32Array(i),Fd[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function _n(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function bn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Yl(s,t){let e=Od[t];e===void 0&&(e=new Int32Array(t),Od[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function R1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function C1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;s.uniform2fv(this.addr,t),bn(e,t)}}function P1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_n(e,t))return;s.uniform3fv(this.addr,t),bn(e,t)}}function I1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;s.uniform4fv(this.addr,t),bn(e,t)}}function L1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),bn(e,t)}else{if(_n(e,n))return;Hd.set(n),s.uniformMatrix2fv(this.addr,!1,Hd),bn(e,n)}}function D1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),bn(e,t)}else{if(_n(e,n))return;zd.set(n),s.uniformMatrix3fv(this.addr,!1,zd),bn(e,n)}}function k1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),bn(e,t)}else{if(_n(e,n))return;Bd.set(n),s.uniformMatrix4fv(this.addr,!1,Bd),bn(e,n)}}function N1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function U1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;s.uniform2iv(this.addr,t),bn(e,t)}}function F1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;s.uniform3iv(this.addr,t),bn(e,t)}}function O1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;s.uniform4iv(this.addr,t),bn(e,t)}}function B1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function z1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;s.uniform2uiv(this.addr,t),bn(e,t)}}function H1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;s.uniform3uiv(this.addr,t),bn(e,t)}}function G1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;s.uniform4uiv(this.addr,t),bn(e,t)}}function $l(s){return s.version===0&&(s.compareFunction=Eh,s.needsUpdate=!0),s}function V1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=$l(af):r=rf,e.setTexture2D(t||r,i)}function W1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cf,i)}function X1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=$l(of):r=hf,e.setTextureCube(t||r,i)}function q1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lf,i)}function Z1(s){switch(s){case 5126:return R1;case 35664:return C1;case 35665:return P1;case 35666:return I1;case 35674:return L1;case 35675:return D1;case 35676:return k1;case 5124:case 35670:return N1;case 35667:case 35671:return U1;case 35668:case 35672:return F1;case 35669:case 35673:return O1;case 5125:return B1;case 36294:return z1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return q1}}function Y1(s,t){s.uniform1fv(this.addr,t)}function $1(s,t){let e=Dr(t,this.size,2);s.uniform2fv(this.addr,e)}function K1(s,t){let e=Dr(t,this.size,3);s.uniform3fv(this.addr,e)}function J1(s,t){let e=Dr(t,this.size,4);s.uniform4fv(this.addr,e)}function j1(s,t){let e=Dr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Q1(s,t){let e=Dr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function tx(s,t){let e=Dr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ex(s,t){s.uniform1iv(this.addr,t)}function nx(s,t){s.uniform2iv(this.addr,t)}function ix(s,t){s.uniform3iv(this.addr,t)}function sx(s,t){s.uniform4iv(this.addr,t)}function rx(s,t){s.uniform1uiv(this.addr,t)}function ax(s,t){s.uniform2uiv(this.addr,t)}function ox(s,t){s.uniform3uiv(this.addr,t)}function lx(s,t){s.uniform4uiv(this.addr,t)}function cx(s,t,e){let n=this.cache,i=t.length,r=Yl(e,i);_n(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=$l(af):a=rf;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function hx(s,t,e){let n=this.cache,i=t.length,r=Yl(e,i);_n(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||cf,r[a])}function ux(s,t,e){let n=this.cache,i=t.length,r=Yl(e,i);_n(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=$l(of):a=hf;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,r[o])}function dx(s,t,e){let n=this.cache,i=t.length,r=Yl(e,i);_n(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||lf,r[a])}function fx(s){switch(s){case 5126:return Y1;case 35664:return $1;case 35665:return K1;case 35666:return J1;case 35674:return j1;case 35675:return Q1;case 35676:return tx;case 5124:case 35670:return ex;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return sx;case 5125:return rx;case 36294:return ax;case 36295:return ox;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return dx}}var Bh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Z1(e.type)}},zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fx(e.type)}},Hh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Fh=/(\w+)(\])?(\[|\.)?/g;function Gd(s,t){s.seq.push(t),s.map[t.id]=t}function px(s,t,e){let n=s.name,i=n.length;for(Fh.lastIndex=0;;){let r=Fh.exec(n),a=Fh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Gd(e,c===void 0?new Bh(o,s,t):new zh(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new Hh(o),Gd(e,f)),e=f}}}var Lr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);px(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Vd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var mx=37297,gx=0;function xx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Wd=new ae;function yx(s){be._getMatrix(Wd,be.workingColorSpace,s);let t=`mat3( ${Wd.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(s)){case na:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Xd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+xx(s.getShaderSource(t),o)}else return r}function vx(s,t){let e=yx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var _x={[ch]:"Linear",[hh]:"Reinhard",[uh]:"Cineon",[dh]:"ACESFilmic",[ph]:"AgX",[mh]:"Neutral",[fh]:"Custom"};function bx(s,t){let e=_x[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xl=new L;function Mx(){be.getLuminanceCoefficients(Xl);let s=Xl.x.toFixed(4),t=Xl.y.toFixed(4),e=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function wx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ex(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ia(s){return s!==""}function qd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Zd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(s){return s.replace(Tx,Ax)}function Ax(s,t){let e=fe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Gh(e)}var Rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yd(s){return s.replace(Rx,Cx)}function Cx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $d(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Px={[Is]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function Ix(s){return Px[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lx={[Cr]:"ENVMAP_MODE_REFRACTION"};function Dx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Lx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kx={[Ma]:"ENVMAP_BLENDING_MULTIPLY",[hd]:"ENVMAP_BLENDING_MIX",[ud]:"ENVMAP_BLENDING_ADD"};function Nx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":kx[s.combine]||"ENVMAP_BLENDING_NONE"}function Ux(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ix(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Dx(e),f=Nx(e),d=Sx(e),p=wx(r),m=i.createProgram(),x,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ia).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ia).join(`
`),g.length>0&&(g+=`
`)):(x=[$d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),g=[$d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?fe.tonemapping_pars_fragment:"",e.toneMapping!==Ri?bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,vx("linearToOutputTexel",e.outputColorSpace),Mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ia).join(`
`)),a=Gh(a),a=qd(a,e),a=Zd(a,e),o=Gh(o),o=qd(o,e),o=Zd(o,e),a=Yd(a),o=Yd(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=y+x+a,E=y+g+o,S=Vd(i,i.VERTEX_SHADER,b),_=Vd(i,i.FRAGMENT_SHADER,E);i.attachShader(m,S),i.attachShader(m,_),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function w(C){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(m)||"",D=i.getShaderInfoLog(S)||"",B=i.getShaderInfoLog(_)||"",I=k.trim(),H=D.trim(),Y=B.trim(),Z=!0,nt=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,S,_);else{let K=Xd(i,S,"vertex"),st=Xd(i,_,"fragment");ee("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+K+`
`+st)}else I!==""?jt("WebGLProgram: Program Info Log:",I):(H===""||Y==="")&&(nt=!1);nt&&(C.diagnostics={runnable:Z,programLog:I,vertexShader:{log:H,prefix:x},fragmentShader:{log:Y,prefix:g}})}i.deleteShader(S),i.deleteShader(_),v=new Lr(i,m),M=Ex(i,m)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(m,mx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=_,this}var Fx=0,Vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wh(t),e.set(t,n)),n}},Wh=class{constructor(t){this.id=Fx++,this.code=t,this.usedTimes=0}};function Ox(s){return s===cs||s===Ra||s===Ca}function Bx(s,t,e,n,i,r){let a=new yr,o=new Vh,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,M,R,C,k,D){let B=C.fog,I=k.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=t.get(v.envMap||H,Y),nt=d[v.type],K=n.precision;v.precision!==null&&(K=n.getMaxPrecision(v.precision),K!==v.precision&&jt("WebGLProgram.getParameters:",v.precision,"not supported, using",K,"instead."));let st=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ut=st!==void 0?st.length:0,yt=0;I.morphAttributes.position!==void 0&&(yt=1),I.morphAttributes.normal!==void 0&&(yt=2),I.morphAttributes.color!==void 0&&(yt=3);let Ft,ot,wt,N;if(nt){let It=Pi[nt];Ft=It.vertexShader,ot=It.fragmentShader}else{Ft=v.vertexShader,ot=v.fragmentShader;let It=o.getVertexShaderStage(v),ue=o.getFragmentShaderStage(v);o.update(v,It,ue),wt=It.id,N=ue.id}let W=s.getRenderTarget(),U=s.state.buffers.depth.getReversed(),j=k.isInstancedMesh===!0,Gt=k.isBatchedMesh===!0,Ct=!!v.map,Xt=!!v.matcap,le=!!Z,te=le&&Z.isPMREMTexture===!0,lt=!!v.aoMap,De=!!v.lightMap,en=!!v.bumpMap&&v.wireframe===!1,Te=!!v.normalMap,Fe=!!v.displacementMap,ye=!!v.emissiveMap,un=!!v.metalnessMap,yn=!!v.roughnessMap,je=v.anisotropy>0,V=v.clearcoat>0,dn=v.diffuseRoughness>0,ve=v.dispersion>0,ke=v.retroreflectivity>0,bt=v.iridescence>0,Oe=v.sheen>0,Zt=v.transmission>0,qt=je&&!!v.anisotropyMap,P=V&&!!v.clearcoatMap,T=V&&!!v.clearcoatNormalMap,$=V&&!!v.clearcoatRoughnessMap,pt=dn&&!!v.diffuseRoughnessMap,ht=bt&&!!v.iridescenceMap,Mt=bt&&!!v.iridescenceThicknessMap,Et=Oe&&!!v.sheenColorMap,at=Oe&&!!v.sheenRoughnessMap,rt=!!v.specularMap,vt=!!v.specularColorMap,O=!!v.specularIntensityMap,ct=Zt&&!!v.transmissionMap,tt=Zt&&!!v.thicknessMap,gt=!!v.gradientMap,xt=!!v.alphaMap,_t=v.alphaTest>0,Vt=!!v.alphaHash,re=!!v.extensions,mt=Ri;v.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(mt=s.toneMapping);let Wt=te?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,ne={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:Ft,fragmentShader:ot,defines:v.defines,customVertexShaderID:wt,customFragmentShaderID:N,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:K,batching:Gt,batchingColor:Gt&&k._colorsTexture!==null,instancing:j,instancingColor:j&&k.instanceColor!==null,instancingMorph:j&&k.morphTexture!==null,outputColorSpace:W===null?s.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ct,matcap:Xt,envMap:le,envMapMode:le&&Z.mapping,envMapPMREM:te,envMapMaxLod:te?Wt.length-1:null,envMapSize:te?Wt[0].width:null,aoMap:lt,lightMap:De,bumpMap:en,normalMap:Te,displacementMap:Fe,emissiveMap:ye,normalMapObjectSpace:Te&&v.normalMapType===pd,normalMapTangentSpace:Te&&v.normalMapType===Ir,packedNormalMap:Te&&v.normalMapType===Ir&&Ox(v.normalMap.format),metalnessMap:un,roughnessMap:yn,anisotropy:je,anisotropyMap:qt,clearcoat:V,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:$,diffuseRoughness:dn,diffuseRoughnessMap:pt,dispersion:ve,retroreflection:ke,iridescence:bt,iridescenceMap:ht,iridescenceThicknessMap:Mt,sheen:Oe,sheenColorMap:Et,sheenRoughnessMap:at,specularMap:rt,specularColorMap:vt,specularIntensityMap:O,transmission:Zt,transmissionMap:ct,thicknessMap:tt,gradientMap:gt,opaque:v.transparent===!1&&v.blending===Rr&&v.alphaToCoverage===!1,alphaMap:xt,alphaTest:_t,alphaHash:Vt,combine:v.combine,mapUv:Ct&&p(v.map.channel),aoMapUv:lt&&p(v.aoMap.channel),lightMapUv:De&&p(v.lightMap.channel),bumpMapUv:en&&p(v.bumpMap.channel),normalMapUv:Te&&p(v.normalMap.channel),displacementMapUv:Fe&&p(v.displacementMap.channel),emissiveMapUv:ye&&p(v.emissiveMap.channel),metalnessMapUv:un&&p(v.metalnessMap.channel),roughnessMapUv:yn&&p(v.roughnessMap.channel),anisotropyMapUv:qt&&p(v.anisotropyMap.channel),clearcoatMapUv:P&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:T&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pt&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:ht&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:at&&p(v.sheenRoughnessMap.channel),specularMapUv:rt&&p(v.specularMap.channel),specularColorMapUv:vt&&p(v.specularColorMap.channel),specularIntensityMapUv:O&&p(v.specularIntensityMap.channel),transmissionMapUv:ct&&p(v.transmissionMap.channel),thicknessMapUv:tt&&p(v.thicknessMap.channel),alphaMapUv:xt&&p(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Te||je),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!I.attributes.uv&&(Ct||xt),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&Te===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:U,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:yt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(It=>It.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:mt,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&be.getTransfer(v.map.colorSpace)===Ne,decodeVideoTextureEmissive:ye&&v.emissiveMap.isVideoTexture===!0&&be.getTransfer(v.emissiveMap.colorSpace)===Ne,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Se,flipSided:v.side===Nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||Gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function x(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)M.push(R),M.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(g(M,v),y(M,v),M.push(s.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function g(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapPMREM),v.push(M.envMapMaxLod),v.push(M.envMapSize),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.diffuseRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.numLightProbeGrids),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function y(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){let M=d[v.type],R;if(M){let C=Pi[M];R=Pd.clone(C.uniforms)}else R=v.uniforms;return R}function E(v,M){let R=u.get(M);return R!==void 0?++R.usedTimes:(R=new Ux(s,M,v,i),c.push(R),u.set(M,R)),R}function S(v){if(--v.usedTimes===0){let M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function _(v){o.remove(v)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:b,acquireProgram:E,releaseProgram:S,releaseShaderCache:_,programs:c,dispose:w}}function zx(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Hx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Kd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Jd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,m,x,g,y){let b=s[t];return b===void 0?(b={id:d.id,object:d,geometry:p,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:y},s[t]=b):(b.id=d.id,b.object=d,b.geometry=p,b.material=m,b.materialVariant=a(d),b.groupOrder=x,b.renderOrder=d.renderOrder,b.z=g,b.group=y),t++,b}function l(d,p,m,x,g,y,b){b.reversedDepth===!0&&(g=-g);let E=o(d,p,m,x,g,y);m.transmission>0?n.push(E):m.transparent===!0?i.push(E):e.push(E)}function c(d,p,m,x,g,y){let b=o(d,p,m,x,g,y);m.transmission>0?n.unshift(b):m.transparent===!0?i.unshift(b):e.unshift(b)}function u(d,p){e.length>1&&e.sort(d||Hx),n.length>1&&n.sort(p||Kd),i.length>1&&i.sort(p||Kd)}function f(){for(let d=t,p=s.length;d<p;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:u}}function Gx(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Jd,s.set(n,[a])):i>=r.length?(a=new Jd,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Vx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new $t};break;case"SpotLight":e={position:new L,direction:new L,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Wx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Xx=0;function qx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Zx(s){let t=new Vx,e=Wx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new de,a=new de;function o(c){let u=0,f=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,m=0,x=0,g=0,y=0,b=0,E=0,S=0,_=0,w=0,v=0,M=0,R=0,C=0;c.sort(qx);for(let D=0,B=c.length;D<B;D++){let I=c[D],H=I.color,Y=I.intensity,Z=I.distance,nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===cs?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=H.r*Y,f+=H.g*Y,d+=H.b*Y;else if(I.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(I.sh.coefficients[K],Y);C++}else if(I.isSunLight){let K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let st=I.shadow,ut=e.get(I);ut.shadowIntensity=st.intensity,ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[m]=ut,n.sunShadowMap[m]=nt;let yt=st.getViewportCount();for(let Ft=0;Ft<yt;Ft++)n.sunShadowMatrix[x+Ft]=st.getMatrix(Ft),n.sunShadowCascade[x+Ft]=st._cascadeData[Ft];x+=yt,m++}n.sun[p]=K,p++}else if(I.isDirectionalLight){let K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let st=I.shadow,ut=e.get(I);ut.shadowIntensity=st.intensity,ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,n.directionalShadow[g]=ut,n.directionalShadowMap[g]=nt,n.directionalShadowMatrix[g]=I.shadow.matrix,_++}n.directional[g]=K,g++}else if(I.isSpotLight){let K=t.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(H).multiplyScalar(Y),K.distance=Z,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,n.spot[b]=K;let st=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,st.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[b]=st.matrix,I.castShadow){let ut=e.get(I);ut.shadowIntensity=st.intensity,ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,n.spotShadow[b]=ut,n.spotShadowMap[b]=nt,v++}b++}else if(I.isRectAreaLight){let K=t.get(I);K.color.copy(H).multiplyScalar(Y),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=K,E++}else if(I.isPointLight){let K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){let st=I.shadow,ut=e.get(I);ut.shadowIntensity=st.intensity,ut.shadowBias=st.bias,ut.shadowNormalBias=st.normalBias,ut.shadowRadius=st.radius,ut.shadowMapSize=st.mapSize,ut.shadowCameraNear=st.camera.near,ut.shadowCameraFar=st.camera.far,n.pointShadow[y]=ut,n.pointShadowMap[y]=nt,n.pointShadowMatrix[y]=I.shadow.matrix,w++}n.point[y]=K,y++}else if(I.isHemisphereLight){let K=t.get(I);K.skyColor.copy(I.color).multiplyScalar(Y),K.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[S]=K,S++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=kt.LTC_FLOAT_1,n.rectAreaLTC2=kt.LTC_FLOAT_2):(n.rectAreaLTC1=kt.LTC_HALF_1,n.rectAreaLTC2=kt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let k=n.hash;(k.sunLength!==p||k.directionalLength!==g||k.pointLength!==y||k.spotLength!==b||k.rectAreaLength!==E||k.hemiLength!==S||k.numSunShadows!==m||k.numDirectionalShadows!==_||k.numPointShadows!==w||k.numSpotShadows!==v||k.numSpotMaps!==M||k.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=g,n.spot.length=b,n.rectArea.length=E,n.point.length=y,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+M-R,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,k.sunLength=p,k.directionalLength=g,k.pointLength=y,k.spotLength=b,k.rectAreaLength=E,k.hemiLength=S,k.numSunShadows=m,k.numDirectionalShadows=_,k.numPointShadows=w,k.numSpotShadows=v,k.numSpotMaps=M,k.numLightProbes=C,n.version=Xx++)}function l(c,u){let f=0,d=0,p=0,m=0,x=0,g=0,y=u.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let S=c[b];if(S.isSunLight){let _=n.sun[f];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(y),f++}else if(S.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(y),d++}else if(S.isSpotLight){let _=n.spot[m];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(y),_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(y),m++}else if(S.isRectAreaLight){let _=n.rectArea[x];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(y),a.identity(),r.copy(S.matrixWorld),r.premultiply(y),a.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let _=n.point[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(y),p++}else if(S.isHemisphereLight){let _=n.hemi[g];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(y),g++}}}return{setup:o,setupView:l,state:n}}function jd(s){let t=new Zx(s),e=[],n=[],i=[];function r(f){u.camera=f,e.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),i.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Yx(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new jd(s),t.set(i,[o])):r>=a.length?(o=new jd(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var $x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kx=`uniform sampler2D shadow_pass;
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
}`,Jx=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],jx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Qd=new de,Pa=new L,Oh=new L;function Qx(s,t,e){let n=new is,i=new Yt,r=new Yt,a=new tn,o=new Vo,l=new Wo,c={},u=e.maxTextureSize,f={[ls]:Nn,[Nn]:ls,[Se]:Se},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:$x,fragmentShader:Kx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Be;m.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new X(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let y=this.type;this.render=function(w,v,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Xu&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);let R=s.getRenderTarget(),C=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Ls),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=y!==this.type;B&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=w.length;I<H;I++){let Y=w[I],Z=Y.shadow;if(Z===void 0){jt("WebGLShadowMap:",Y,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let nt=Z.getFrameExtents();i.multiply(nt),r.copy(Z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/nt.x),i.x=r.x*nt.x,Z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/nt.y),i.y=r.y*nt.y,Z.mapSize.y=r.y));let K=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=K,Z.map===null||B===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Ar){if(Y.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Gn(i.x,i.y,{format:cs,type:Kn,minFilter:vn,magFilter:vn,generateMipmaps:!1}),Z.map.texture.name=Y.name+".shadowMap",Z.map.depthTexture=new Hi(i.x,i.y,oi),Z.map.depthTexture.name=Y.name+".shadowMapDepth",Z.map.depthTexture.format=zi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Rn,Z.map.depthTexture.magFilter=Rn}else Y.isPointLight?(Z.map=new La(i.x),Z.map.depthTexture=new ma(i.x,mi)):(Z.map=new Gn(i.x,i.y),Z.map.depthTexture=new Hi(i.x,i.y,mi)),Z.map.depthTexture.name=Y.name+".shadowMap",Z.map.depthTexture.format=zi,this.type===Is?(Z.map.depthTexture.compareFunction=K?wh:Sh,Z.map.depthTexture.minFilter=vn,Z.map.depthTexture.magFilter=vn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Rn,Z.map.depthTexture.magFilter=Rn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==i.x||Z.map.height!==i.y)&&Z.map.setSize(i.x,i.y);let st=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();Y.isPointLight!==!0&&Z.updateMatrices(Y,M);let ut=(Z.camera.layers.mask&4294967294)!==0?Z.camera.layers:M.layers;for(let yt=0;yt<st;yt++){let Ft=Z.getCamera(yt);if(Y.isPointLight){let ot=Z.camera,wt=Z.matrix,N=Y.distance||ot.far;N!==ot.far&&(ot.far=N,ot.updateProjectionMatrix()),Pa.setFromMatrixPosition(Y.matrixWorld),ot.position.copy(Pa),Oh.copy(ot.position),Oh.add(Jx[yt]),ot.up.copy(jx[yt]),ot.lookAt(Oh),ot.updateMatrixWorld(),wt.makeTranslation(-Pa.x,-Pa.y,-Pa.z),Qd.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Qd,ot.coordinateSystem,ot.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,yt),s.clear();else{yt===0&&(s.setRenderTarget(Z.map),s.clear());let ot=Z.getViewport(yt);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),D.viewport(a)}n=Z.getFrustum(yt),S(v,M,Ft,Y,ut,this.type)}Z.isPointLightShadow!==!0&&this.type===Ar&&b(Z,M),Z.needsUpdate=!1}y=this.type,g.needsUpdate=!1,s.setRenderTarget(R,C,k)};function b(w,v){let M=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Gn(i.x,i.y,{format:cs,type:Kn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(v,null,M,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(v,null,M,p,x,null)}function E(w,v,M,R){let C=null,k=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)C=k;else if(C=M.isPointLight===!0?l:o,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let D=C.uuid,B=v.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let H=I[B];H===void 0&&(H=C.clone(),I[B]=H,v.addEventListener("dispose",_)),C=H}if(C.visible=v.visible,C.wireframe=v.wireframe,R===Ar?C.side=v.shadowSide!==null?v.shadowSide:v.side:C.side=v.shadowSide!==null?v.shadowSide:f[v.side],C.alphaMap=v.alphaMap,C.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,C.map=v.map,C.clipShadows=v.clipShadows,C.clippingPlanes=v.clippingPlanes,C.clipIntersection=v.clipIntersection,C.displacementMap=v.displacementMap,C.displacementScale=v.displacementScale,C.displacementBias=v.displacementBias,C.wireframeLinewidth=v.wireframeLinewidth,C.linewidth=v.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=s.properties.get(C);D.light=M}return C}function S(w,v,M,R,C,k){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&k===Ar)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let I=t.update(w),H=w.material;if(Array.isArray(H)){let Y=I.groups;for(let Z=0,nt=Y.length;Z<nt;Z++){let K=Y[Z],st=H[K.materialIndex];if(st&&st.visible){let ut=E(w,st,R,k);w.onBeforeShadow(s,w,v,M,I,ut,K),s.renderBufferDirect(M,null,I,ut,w,K),w.onAfterShadow(s,w,v,M,I,ut,K)}}}else if(H.visible){let Y=E(w,H,R,k);w.onBeforeShadow(s,w,v,M,I,Y,null),s.renderBufferDirect(M,null,I,Y,w,null),w.onAfterShadow(s,w,v,M,I,Y,null)}}let B=w.children;for(let I=0,H=B.length;I<H;I++)S(B[I],v,M,R,C,k)}function _(w){w.target.removeEventListener("dispose",_);for(let M in c){let R=c[M],C=w.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function ty(s,t){function e(){let O=!1,ct=new tn,tt=null,gt=new tn(0,0,0,0);return{setMask:function(xt){tt!==xt&&!O&&(s.colorMask(xt,xt,xt,xt),tt=xt)},setLocked:function(xt){O=xt},setClear:function(xt,_t,Vt,re,mt){mt===!0&&(xt*=re,_t*=re,Vt*=re),ct.set(xt,_t,Vt,re),gt.equals(ct)===!1&&(s.clearColor(xt,_t,Vt,re),gt.copy(ct))},reset:function(){O=!1,tt=null,gt.set(-1,0,0,0)}}}function n(){let O=!1,ct=!1,tt=null,gt=null,xt=null;return{setReversed:function(_t){if(ct!==_t){let Vt=t.get("EXT_clip_control");_t?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),ct=_t;let re=xt;xt=null,this.setClear(re)}},getReversed:function(){return ct},setTest:function(_t){_t?U(s.DEPTH_TEST):j(s.DEPTH_TEST)},setMask:function(_t){tt!==_t&&!O&&(s.depthMask(_t),tt=_t)},setFunc:function(_t){if(ct&&(_t=wd[_t]),gt!==_t){switch(_t){case wo:s.depthFunc(s.NEVER);break;case Eo:s.depthFunc(s.ALWAYS);break;case To:s.depthFunc(s.LESS);break;case pr:s.depthFunc(s.LEQUAL);break;case Ao:s.depthFunc(s.EQUAL);break;case Ro:s.depthFunc(s.GEQUAL);break;case Co:s.depthFunc(s.GREATER);break;case Po:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=_t}},setLocked:function(_t){O=_t},setClear:function(_t){xt!==_t&&(xt=_t,ct&&(_t=1-_t),s.clearDepth(_t))},reset:function(){O=!1,tt=null,gt=null,xt=null,ct=!1}}}function i(){let O=!1,ct=null,tt=null,gt=null,xt=null,_t=null,Vt=null,re=null,mt=null;return{setTest:function(Wt){O||(Wt?U(s.STENCIL_TEST):j(s.STENCIL_TEST))},setMask:function(Wt){ct!==Wt&&!O&&(s.stencilMask(Wt),ct=Wt)},setFunc:function(Wt,ne,It){(tt!==Wt||gt!==ne||xt!==It)&&(s.stencilFunc(Wt,ne,It),tt=Wt,gt=ne,xt=It)},setOp:function(Wt,ne,It){(_t!==Wt||Vt!==ne||re!==It)&&(s.stencilOp(Wt,ne,It),_t=Wt,Vt=ne,re=It)},setLocked:function(Wt){O=Wt},setClear:function(Wt){mt!==Wt&&(s.clearStencil(Wt),mt=Wt)},reset:function(){O=!1,ct=null,tt=null,gt=null,xt=null,_t=null,Vt=null,re=null,mt=null}}}let r=new e,a=new n,o=new i,l={},c=new WeakMap,u={},f={},d={},p=new WeakMap,m=[],x=null,g=!1,y=null,b=null,E=null,S=null,_=null,w=null,v=null,M=new $t(0,0,0),R=0,C=!1,k=null,D=null,B=null,I=null,H=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,nt=0,K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=nt>=1):K.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=nt>=2);let st=null,ut={},yt=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),ot=new tn().fromArray(yt),wt=new tn().fromArray(Ft);function N(O,ct,tt,gt){let xt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(O,_t),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<tt;Vt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(ct+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return _t}let W={};W[s.TEXTURE_2D]=N(s.TEXTURE_2D,s.TEXTURE_2D,1),W[s.TEXTURE_CUBE_MAP]=N(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[s.TEXTURE_2D_ARRAY]=N(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),W[s.TEXTURE_3D]=N(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),U(s.DEPTH_TEST),a.setFunc(pr),en(!1),Te(sh),U(s.CULL_FACE),lt(Ls);function U(O){u[O]!==!0&&(s.enable(O),u[O]=!0)}function j(O){u[O]!==!1&&(s.disable(O),u[O]=!1)}function Gt(O,ct){return d[O]!==ct?(s.bindFramebuffer(O,ct),d[O]=ct,O===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ct),O===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ct(O,ct){let tt=m,gt=!1;if(O){tt=p.get(ct),tt===void 0&&(tt=[],p.set(ct,tt));let xt=O.textures;if(tt.length!==xt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Vt=xt.length;_t<Vt;_t++)tt[_t]=s.COLOR_ATTACHMENT0+_t;tt.length=xt.length,gt=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,gt=!0);gt&&s.drawBuffers(tt)}function Xt(O){return x!==O?(s.useProgram(O),x=O,!0):!1}let le={[Ds]:s.FUNC_ADD,[Zu]:s.FUNC_SUBTRACT,[Yu]:s.FUNC_REVERSE_SUBTRACT};le[$u]=s.MIN,le[Ku]=s.MAX;let te={[Ju]:s.ZERO,[ju]:s.ONE,[Qu]:s.SRC_COLOR,[oh]:s.SRC_ALPHA,[rd]:s.SRC_ALPHA_SATURATE,[id]:s.DST_COLOR,[ed]:s.DST_ALPHA,[td]:s.ONE_MINUS_SRC_COLOR,[lh]:s.ONE_MINUS_SRC_ALPHA,[sd]:s.ONE_MINUS_DST_COLOR,[nd]:s.ONE_MINUS_DST_ALPHA,[ad]:s.CONSTANT_COLOR,[od]:s.ONE_MINUS_CONSTANT_COLOR,[ld]:s.CONSTANT_ALPHA,[cd]:s.ONE_MINUS_CONSTANT_ALPHA};function lt(O,ct,tt,gt,xt,_t,Vt,re,mt,Wt){if(O===Ls){g===!0&&(j(s.BLEND),g=!1);return}if(g===!1&&(U(s.BLEND),g=!0),O!==qu){if(O!==y||Wt!==C){if((b!==Ds||_!==Ds)&&(s.blendEquation(s.FUNC_ADD),b=Ds,_=Ds),Wt)switch(O){case Rr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ai:s.blendFunc(s.ONE,s.ONE);break;case rh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ah:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ee("WebGLState: Invalid blending: ",O);break}else switch(O){case Rr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case rh:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ah:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",O);break}E=null,S=null,w=null,v=null,M.set(0,0,0),R=0,y=O,C=Wt}return}xt=xt||ct,_t=_t||tt,Vt=Vt||gt,(ct!==b||xt!==_)&&(s.blendEquationSeparate(le[ct],le[xt]),b=ct,_=xt),(tt!==E||gt!==S||_t!==w||Vt!==v)&&(s.blendFuncSeparate(te[tt],te[gt],te[_t],te[Vt]),E=tt,S=gt,w=_t,v=Vt),(re.equals(M)===!1||mt!==R)&&(s.blendColor(re.r,re.g,re.b,mt),M.copy(re),R=mt),y=O,C=!1}function De(O,ct){O.side===Se?j(s.CULL_FACE):U(s.CULL_FACE);let tt=O.side===Nn;ct&&(tt=!tt),en(tt),O.blending===Rr&&O.transparent===!1?lt(Ls):lt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let gt=O.stencilWrite;o.setTest(gt),gt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ye(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?U(s.SAMPLE_ALPHA_TO_COVERAGE):j(s.SAMPLE_ALPHA_TO_COVERAGE)}function en(O){k!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),k=O)}function Te(O){O!==Vu?(U(s.CULL_FACE),O!==D&&(O===sh?s.cullFace(s.BACK):O===Wu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):j(s.CULL_FACE),D=O}function Fe(O){O!==B&&(Z&&s.lineWidth(O),B=O)}function ye(O,ct,tt){O?(U(s.POLYGON_OFFSET_FILL),(I!==ct||H!==tt)&&(I=ct,H=tt,a.getReversed()&&(ct=-ct,tt=-tt),s.polygonOffset(ct,tt))):j(s.POLYGON_OFFSET_FILL)}function un(O){O?U(s.SCISSOR_TEST):j(s.SCISSOR_TEST)}function yn(O){O===void 0&&(O=s.TEXTURE0+Y-1),st!==O&&(s.activeTexture(O),st=O)}function je(O,ct,tt){tt===void 0&&(st===null?tt=s.TEXTURE0+Y-1:tt=st);let gt=ut[tt];gt===void 0&&(gt={type:void 0,texture:void 0},ut[tt]=gt),(gt.type!==O||gt.texture!==ct)&&(st!==tt&&(s.activeTexture(tt),st=tt),s.bindTexture(O,ct||W[O]),gt.type=O,gt.texture=ct)}function V(){let O=ut[st];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function dn(){try{s.compressedTexImage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function ve(){try{s.compressedTexImage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function ke(){try{s.texSubImage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function bt(){try{s.texSubImage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function Oe(){try{s.compressedTexSubImage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function Zt(){try{s.compressedTexSubImage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function qt(){try{s.texStorage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function P(){try{s.texStorage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function T(){try{s.texImage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function $(){try{s.texImage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function pt(O){return f[O]!==void 0?f[O]:s.getParameter(O)}function ht(O,ct){f[O]!==ct&&(s.pixelStorei(O,ct),f[O]=ct)}function Mt(O){ot.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ot.copy(O))}function Et(O){wt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),wt.copy(O))}function at(O,ct){let tt=c.get(ct);tt===void 0&&(tt=new WeakMap,c.set(ct,tt));let gt=tt.get(O);gt===void 0&&(gt=s.getUniformBlockIndex(ct,O.name),s.uniformBlockBinding(ct,gt,gt),tt.set(O,gt))}function rt(O,ct,tt){let xt=c.get(ct).get(O);l[xt]!==tt&&(s.bindBufferBase(s.UNIFORM_BUFFER,xt,tt),l[xt]=tt)}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},f={},st=null,ut={},d={},l={},p=new WeakMap,m=[],x=null,g=!1,y=null,b=null,E=null,S=null,_=null,w=null,v=null,M=new $t(0,0,0),R=0,C=!1,k=null,D=null,B=null,I=null,H=null,ot.set(0,0,s.canvas.width,s.canvas.height),wt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:U,disable:j,bindFramebuffer:Gt,drawBuffers:Ct,useProgram:Xt,setBlending:lt,setMaterial:De,setFlipSided:en,setCullFace:Te,setLineWidth:Fe,setPolygonOffset:ye,setScissorTest:un,activeTexture:yn,bindTexture:je,unbindTexture:V,compressedTexImage2D:dn,compressedTexImage3D:ve,texImage2D:T,texImage3D:$,pixelStorei:ht,getParameter:pt,updateUBOMapping:at,uniformBlockBinding:rt,texStorage2D:qt,texStorage3D:P,texSubImage2D:ke,texSubImage3D:bt,compressedTexSubImage2D:Oe,compressedTexSubImage3D:Zt,scissor:Mt,viewport:Et,reset:vt}}function ey(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,u=new WeakMap,f=new Set,d,p=new WeakMap,m=new Set,x=new FinalizationRegistry(P=>m.delete(P)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,T){return g?new OffscreenCanvas(P,T):ia("canvas")}function b(P,T,$){let pt=1,ht=qt(P);if((ht.width>$||ht.height>$)&&(pt=$/Math.max(ht.width,ht.height)),pt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Mt=Math.floor(pt*ht.width),Et=Math.floor(pt*ht.height);d===void 0&&(d=y(Mt,Et));let at=T?y(Mt,Et):d;return at.width=Mt,at.height=Et,at.getContext("2d").drawImage(P,0,0,Mt,Et),jt("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+Mt+"x"+Et+")."),at}else return"data"in P&&jt("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),P;return P}function E(P){return P.generateMipmaps}function S(P){s.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(P,T,$,pt,ht,Mt=!1){if(P!==null){if(s[P]!==void 0)return s[P];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Et;pt&&(Et=t.get("EXT_texture_norm16"),Et||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=T;if(T===s.RED&&($===s.FLOAT&&(at=s.R32F),$===s.HALF_FLOAT&&(at=s.R16F),$===s.UNSIGNED_BYTE&&(at=s.R8),$===s.UNSIGNED_SHORT&&Et&&(at=Et.R16_EXT),$===s.SHORT&&Et&&(at=Et.R16_SNORM_EXT)),T===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(at=s.R8UI),$===s.UNSIGNED_SHORT&&(at=s.R16UI),$===s.UNSIGNED_INT&&(at=s.R32UI),$===s.BYTE&&(at=s.R8I),$===s.SHORT&&(at=s.R16I),$===s.INT&&(at=s.R32I)),T===s.RG&&($===s.FLOAT&&(at=s.RG32F),$===s.HALF_FLOAT&&(at=s.RG16F),$===s.UNSIGNED_BYTE&&(at=s.RG8),$===s.UNSIGNED_SHORT&&Et&&(at=Et.RG16_EXT),$===s.SHORT&&Et&&(at=Et.RG16_SNORM_EXT)),T===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(at=s.RG8UI),$===s.UNSIGNED_SHORT&&(at=s.RG16UI),$===s.UNSIGNED_INT&&(at=s.RG32UI),$===s.BYTE&&(at=s.RG8I),$===s.SHORT&&(at=s.RG16I),$===s.INT&&(at=s.RG32I)),T===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(at=s.RGB8UI),$===s.UNSIGNED_SHORT&&(at=s.RGB16UI),$===s.UNSIGNED_INT&&(at=s.RGB32UI),$===s.BYTE&&(at=s.RGB8I),$===s.SHORT&&(at=s.RGB16I),$===s.INT&&(at=s.RGB32I)),T===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(at=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(at=s.RGBA16UI),$===s.UNSIGNED_INT&&(at=s.RGBA32UI),$===s.BYTE&&(at=s.RGBA8I),$===s.SHORT&&(at=s.RGBA16I),$===s.INT&&(at=s.RGBA32I)),T===s.RGB&&($===s.UNSIGNED_SHORT&&Et&&(at=Et.RGB16_EXT),$===s.SHORT&&Et&&(at=Et.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(at=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(at=s.R11F_G11F_B10F)),T===s.RGBA){let rt=Mt?na:be.getTransfer(ht);$===s.FLOAT&&(at=s.RGBA32F),$===s.HALF_FLOAT&&(at=s.RGBA16F),$===s.UNSIGNED_BYTE&&(at=rt===Ne?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Et&&(at=Et.RGBA16_EXT),$===s.SHORT&&Et&&(at=Et.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function v(P,T){let $;return P?T===null||T===mi||T===Ns?$=s.DEPTH24_STENCIL8:T===oi?$=s.DEPTH32F_STENCIL8:T===Pr&&($=s.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===mi||T===Ns?$=s.DEPTH_COMPONENT24:T===oi?$=s.DEPTH_COMPONENT32F:T===Pr&&($=s.DEPTH_COMPONENT16),$}function M(P,T){return E(P)===!0||P.isFramebufferTexture&&P.minFilter!==Rn&&P.minFilter!==vn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function R(P){let T=new WeakRef(P);n.get(P).__ref=T,m.add(T),x.register(P,T,T)}function C(P){let T=n.get(P).__ref;T!==void 0&&(m.delete(T),x.unregister(T))}function k(P){B(P.target)}function D(P){I(P.target)}function B(P){P.removeEventListener("dispose",k),C(P),Y(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&f.delete(P)}function I(P){P.removeEventListener("dispose",D),C(P),nt(P)}function H(){for(let P of m){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?I(T):B(T))}m.clear(),f.clear()}function Y(P){let T=n.get(P);if(T.__webglInit===void 0)return;let $=P.source,pt=p.get($);if(pt){let ht=pt[T.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&Z(P),Object.keys(pt).length===0&&p.delete($)}n.remove(P)}function Z(P){let T=n.get(P);s.deleteTexture(T.__webglTexture);let $=P.source,pt=p.get($);delete pt[T.__cacheKey],a.memory.textures--}function nt(P){let T=n.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let $=P.depthTexture;if($&&$.renderTarget===P&&B($),P.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let Mt=0;Mt<T.__webglFramebuffer[ht].length;Mt++)s.deleteFramebuffer(T.__webglFramebuffer[ht][Mt]);else s.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)s.deleteFramebuffer(T.__webglFramebuffer[ht]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let pt=P.textures;for(let ht=0,Mt=pt.length;ht<Mt;ht++){let Et=n.get(pt[ht]);Et.__webglTexture&&(s.deleteTexture(Et.__webglTexture),a.memory.textures--),n.remove(pt[ht])}n.remove(P)}let K=0;function st(){K=0}function ut(){return K}function yt(P){K=P}function Ft(){let P=K;return P>=i.maxTextures&&jt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),K+=1,P}function ot(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function wt(P,T){let $=n.get(P);if(P.isVideoTexture&&Oe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){let pt=P.image;if(pt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{De($,P,T);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+T)}function N(P,T){let $=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){De($,P,T);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+T)}function W(P,T){let $=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){De($,P,T);return}e.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+T)}function U(P,T){let $=n.get(P);if(P.version>0&&$.__version!==P.version){en($,P,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+T)}let j={[Mi]:s.REPEAT,[bi]:s.CLAMP_TO_EDGE,[Io]:s.MIRRORED_REPEAT},Gt={[Rn]:s.NEAREST,[dd]:s.NEAREST_MIPMAP_NEAREST,[Sa]:s.NEAREST_MIPMAP_LINEAR,[vn]:s.LINEAR,[rl]:s.LINEAR_MIPMAP_NEAREST,[Gi]:s.LINEAR_MIPMAP_LINEAR},Ct={[gd]:s.NEVER,[Eh]:s.ALWAYS,[xd]:s.LESS,[Sh]:s.LEQUAL,[yd]:s.EQUAL,[wh]:s.GEQUAL,[vd]:s.GREATER,[_d]:s.NOTEQUAL};function Xt(P,T){if(T.type===oi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===vn||T.magFilter===rl||T.magFilter===Sa||T.magFilter===Gi||T.minFilter===vn||T.minFilter===rl||T.minFilter===Sa||T.minFilter===Gi)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,j[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,j[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,j[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Gt[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Gt[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ct[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Rn||T.minFilter!==Sa&&T.minFilter!==Gi||T.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function le(P,T){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",k),R(T));let pt=T.source,ht=p.get(pt);ht===void 0&&(ht={},p.set(pt,ht));let Mt=ot(T);if(Mt!==P.__cacheKey){ht[Mt]===void 0&&(ht[Mt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,$=!0),ht[Mt].usedTimes++;let Et=ht[P.__cacheKey];Et!==void 0&&(ht[P.__cacheKey].usedTimes--,Et.usedTimes===0&&Z(T)),P.__cacheKey=Mt,P.__webglTexture=ht[Mt].texture}return $}function te(P,T,$){return Math.floor(Math.floor(P/$)/T)}function lt(P,T,$,pt){let Mt=P.updateRanges;if(Mt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,$,pt,T.data);else{Mt.sort((O,ct)=>O.start-ct.start);let Et=0;for(let O=1;O<Mt.length;O++){let ct=Mt[Et],tt=Mt[O],gt=ct.start+ct.count,xt=te(tt.start,T.width,4),_t=te(ct.start,T.width,4);tt.start<=gt+1&&xt===_t&&te(tt.start+tt.count-1,T.width,4)===xt?ct.count=Math.max(ct.count,tt.start+tt.count-ct.start):(++Et,Mt[Et]=tt)}Mt.length=Et+1;let at=e.getParameter(s.UNPACK_ROW_LENGTH),rt=e.getParameter(s.UNPACK_SKIP_PIXELS),vt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let O=0,ct=Mt.length;O<ct;O++){let tt=Mt[O],gt=Math.floor(tt.start/4),xt=Math.ceil(tt.count/4),_t=gt%T.width,Vt=Math.floor(gt/T.width),re=xt,mt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(s.UNPACK_SKIP_ROWS,Vt),e.texSubImage2D(s.TEXTURE_2D,0,_t,Vt,re,mt,$,pt,T.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,at),e.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function De(P,T,$){let pt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=s.TEXTURE_3D);let ht=le(P,T),Mt=T.source;e.bindTexture(pt,P.__webglTexture,s.TEXTURE0+$);let Et=n.get(Mt);if(Mt.version!==Et.__version||ht===!0){if(e.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let mt=be.getPrimaries(be.workingColorSpace),Wt=T.colorSpace===xi?null:be.getPrimaries(T.colorSpace),ne=T.colorSpace===xi||mt===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let rt=b(T.image,!1,i.maxTextureSize);rt=Zt(T,rt);let vt=r.convert(T.format,T.colorSpace),O=r.convert(T.type),ct=w(T.internalFormat,vt,O,T.normalized,T.colorSpace,T.isVideoTexture);Xt(pt,T);let tt,gt=T.mipmaps,xt=T.isVideoTexture!==!0,_t=Et.__version===void 0||ht===!0,Vt=Mt.dataReady,re=M(T,rt);if(T.isDepthTexture)ct=v(T.format===Vi,T.type),_t&&(xt?e.texStorage2D(s.TEXTURE_2D,1,ct,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,ct,rt.width,rt.height,0,vt,O,null));else if(T.isDataTexture)if(gt.length>0){xt&&_t&&e.texStorage2D(s.TEXTURE_2D,re,ct,gt[0].width,gt[0].height);for(let mt=0,Wt=gt.length;mt<Wt;mt++)tt=gt[mt],xt?Vt&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,tt.width,tt.height,vt,O,tt.data):e.texImage2D(s.TEXTURE_2D,mt,ct,tt.width,tt.height,0,vt,O,tt.data);T.generateMipmaps=!1}else xt?(_t&&e.texStorage2D(s.TEXTURE_2D,re,ct,rt.width,rt.height),Vt&&lt(T,rt,vt,O)):e.texImage2D(s.TEXTURE_2D,0,ct,rt.width,rt.height,0,vt,O,rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){xt&&_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,re,ct,gt[0].width,gt[0].height,rt.depth);for(let mt=0,Wt=gt.length;mt<Wt;mt++)if(tt=gt[mt],T.format!==gi)if(vt!==null)if(xt){if(Vt)if(T.layerUpdates.size>0){let ne=Ih(tt.width,tt.height,T.format,T.type);for(let It of T.layerUpdates){let ue=tt.data.subarray(It*ne/tt.data.BYTES_PER_ELEMENT,(It+1)*ne/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,It,tt.width,tt.height,1,vt,ue)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,tt.width,tt.height,rt.depth,vt,tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,mt,ct,tt.width,tt.height,rt.depth,0,tt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?Vt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,tt.width,tt.height,rt.depth,vt,O,tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,mt,ct,tt.width,tt.height,rt.depth,0,vt,O,tt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{xt&&_t&&e.texStorage2D(s.TEXTURE_2D,re,ct,gt[0].width,gt[0].height);for(let mt=0,Wt=gt.length;mt<Wt;mt++)tt=gt[mt],T.format!==gi?vt!==null?xt?Vt&&e.compressedTexSubImage2D(s.TEXTURE_2D,mt,0,0,tt.width,tt.height,vt,tt.data):e.compressedTexImage2D(s.TEXTURE_2D,mt,ct,tt.width,tt.height,0,tt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?Vt&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,tt.width,tt.height,vt,O,tt.data):e.texImage2D(s.TEXTURE_2D,mt,ct,tt.width,tt.height,0,vt,O,tt.data)}else if(T.isDataArrayTexture)if(xt){if(_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,re,ct,rt.width,rt.height,rt.depth),Vt)if(T.layerUpdates.size>0){let mt=Ih(rt.width,rt.height,T.format,T.type);for(let Wt of T.layerUpdates){let ne=rt.data.subarray(Wt*mt/rt.data.BYTES_PER_ELEMENT,(Wt+1)*mt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Wt,rt.width,rt.height,1,vt,O,ne)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,vt,O,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ct,rt.width,rt.height,rt.depth,0,vt,O,rt.data);else if(T.isData3DTexture)xt?(_t&&e.texStorage3D(s.TEXTURE_3D,re,ct,rt.width,rt.height,rt.depth),Vt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,vt,O,rt.data)):e.texImage3D(s.TEXTURE_3D,0,ct,rt.width,rt.height,rt.depth,0,vt,O,rt.data);else if(T.isFramebufferTexture){if(_t)if(xt)e.texStorage2D(s.TEXTURE_2D,re,ct,rt.width,rt.height);else{let mt=rt.width,Wt=rt.height;for(let ne=0;ne<re;ne++)e.texImage2D(s.TEXTURE_2D,ne,ct,mt,Wt,0,vt,O,null),mt>>=1,Wt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let mt=s.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),rt.parentNode!==mt){mt.appendChild(rt),f.add(T),mt.onpaint=Wt=>{let ne=Wt.changedElements;for(let It of f)ne.includes(It.image)&&(It.needsUpdate=!0)},mt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,rt);else{let ne=s.RGBA,It=s.RGBA,ue=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ne,It,ue,rt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(gt.length>0){if(xt&&_t){let mt=qt(gt[0]);e.texStorage2D(s.TEXTURE_2D,re,ct,mt.width,mt.height)}for(let mt=0,Wt=gt.length;mt<Wt;mt++)tt=gt[mt],xt?Vt&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,vt,O,tt):e.texImage2D(s.TEXTURE_2D,mt,ct,vt,O,tt);T.generateMipmaps=!1}else if(xt){if(_t){let mt=qt(rt);e.texStorage2D(s.TEXTURE_2D,re,ct,mt.width,mt.height)}Vt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,O,rt)}else e.texImage2D(s.TEXTURE_2D,0,ct,vt,O,rt);E(T)&&T.mipmapsAutoUpdate===!0&&S(pt),Et.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function en(P,T,$){if(T.image.length!==6)return;let pt=le(P,T),ht=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+$);let Mt=n.get(ht);if(ht.version!==Mt.__version||pt===!0){e.activeTexture(s.TEXTURE0+$);let Et=be.getPrimaries(be.workingColorSpace),at=T.colorSpace===xi?null:be.getPrimaries(T.colorSpace),rt=T.colorSpace===xi||Et===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let vt=T.isCompressedTexture||T.image[0].isCompressedTexture,O=T.image[0]&&T.image[0].isDataTexture,ct=[];for(let It=0;It<6;It++)!vt&&!O?ct[It]=b(T.image[It],!0,i.maxCubemapSize):ct[It]=O?T.image[It].image:T.image[It],ct[It]=Zt(T,ct[It]);let tt=ct[0],gt=r.convert(T.format,T.colorSpace),xt=r.convert(T.type),_t=w(T.internalFormat,gt,xt,T.normalized,T.colorSpace),Vt=T.isVideoTexture!==!0,re=Mt.__version===void 0||pt===!0,mt=ht.dataReady,Wt=M(T,tt);Xt(s.TEXTURE_CUBE_MAP,T);let ne;if(T.isDepthTexture){if(_t=v(T.format===Vi,T.type),re)if(Vt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,_t,tt.width,tt.height);else for(let It=0;It<6;It++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,_t,tt.width,tt.height,0,gt,xt,null)}else if(vt){Vt&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,_t,tt.width,tt.height);for(let It=0;It<6;It++){ne=ct[It].mipmaps;for(let ue=0;ue<ne.length;ue++){let Xe=ne[ue];T.format!==gi?gt!==null?Vt?mt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ue,0,0,Xe.width,Xe.height,gt,Xe.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ue,_t,Xe.width,Xe.height,0,Xe.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ue,0,0,Xe.width,Xe.height,gt,xt,Xe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ue,_t,Xe.width,Xe.height,0,gt,xt,Xe.data)}}}else{if(ne=T.mipmaps,Vt&&re){ne.length>0&&Wt++;let It=qt(ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,_t,It.width,It.height)}for(let It=0;It<6;It++)if(O){Vt?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,ct[It].width,ct[It].height,gt,xt,ct[It].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,_t,ct[It].width,ct[It].height,0,gt,xt,ct[It].data);for(let ue=0;ue<ne.length;ue++){let G=ne[ue].image[It].image;Vt?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ue+1,0,0,G.width,G.height,gt,xt,G.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ue+1,_t,G.width,G.height,0,gt,xt,G.data)}}else{Vt?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,gt,xt,ct[It]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,_t,gt,xt,ct[It]);for(let ue=0;ue<ne.length;ue++){let Xe=ne[ue];Vt?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ue+1,0,0,gt,xt,Xe.image[It]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ue+1,_t,gt,xt,Xe.image[It])}}}E(T)&&T.mipmapsAutoUpdate===!0&&S(s.TEXTURE_CUBE_MAP),Mt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Te(P,T,$,pt,ht,Mt){let Et=r.convert($.format,$.colorSpace),at=r.convert($.type),rt=w($.internalFormat,Et,at,$.normalized,$.colorSpace),vt=n.get(T),O=n.get($);if(O.__renderTarget=T,!vt.__hasExternalTextures){let ct=Math.max(1,T.width>>Mt),tt=Math.max(1,T.height>>Mt);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?e.texImage3D(ht,Mt,rt,ct,tt,T.depth,0,Et,at,null):e.texImage2D(ht,Mt,rt,ct,tt,0,Et,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),bt(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,ht,O.__webglTexture,0,ke(T)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,ht,O.__webglTexture,Mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(P,T,$){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){let pt=T.depthTexture,ht=pt&&pt.isDepthTexture?pt.type:null,Mt=v(T.stencilBuffer,ht),Et=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;bt(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke(T),Mt,T.width,T.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke(T),Mt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,P)}else{let pt=T.textures;for(let ht=0;ht<pt.length;ht++){let Mt=pt[ht],Et=r.convert(Mt.format,Mt.colorSpace),at=r.convert(Mt.type),rt=w(Mt.internalFormat,Et,at,Mt.normalized,Mt.colorSpace);bt(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke(T),rt,T.width,T.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke(T),rt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,rt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(P,T,$){let pt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ht=n.get(T.depthTexture);ht.__renderTarget=T;let Mt=pt?T.depthTexture.image[0]:T.depthTexture.image;(!ht.__webglTexture||Mt.width!==T.width||Mt.height!==T.height)&&(Mt.width=T.width,Mt.height=T.height,T.depthTexture.needsUpdate=!0),pt?U(T.depthTexture,0):wt(T.depthTexture,0);let Et=ht.__webglTexture,at=ke(T),rt=pt?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,vt=T.depthTexture.format===Vi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===zi)bt(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,rt,Et,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,vt,rt,Et,0);else if(T.depthTexture.format===Vi)bt(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,rt,Et,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,vt,rt,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function un(P){let T=n.get(P),$=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let pt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){let ht=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",ht)};pt.addEventListener("dispose",ht),T.__depthDisposeCallback=ht}T.__boundDepthTexture=pt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let pt=0;pt<6;pt++)ye(T.__webglFramebuffer[pt],P,pt);else P.texture.mipmaps.length>0?ye(T.__webglFramebuffer[0],P,0):ye(T.__webglFramebuffer,P,0);else if($){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=s.createRenderbuffer(),Fe(T.__webglDepthbuffer[pt],P,!1);else{let ht=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,Mt)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Fe(T.__webglDepthbuffer,P,!1);else{let ht=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,Mt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function yn(P,T,$){let pt=n.get(P);T!==void 0&&Te(pt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&un(P)}function je(P){let T=P.texture,$=n.get(P),pt=n.get(T);P.addEventListener("dispose",D),R(P);let ht=P.textures,Mt=P.isWebGLCubeRenderTarget===!0,Et=ht.length>1;if(Et||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=T.version,a.memory.textures++),Mt){$.__webglFramebuffer=[];for(let at=0;at<6;at++)if(T.mipmaps.length>0){$.__webglFramebuffer[at]=[];for(let rt=0;rt<T.mipmaps.length;rt++)$.__webglFramebuffer[at][rt]=s.createFramebuffer()}else $.__webglFramebuffer[at]=s.createFramebuffer()}else{if(T.mipmaps.length>0){$.__webglFramebuffer=[];for(let at=0;at<T.mipmaps.length;at++)$.__webglFramebuffer[at]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Et)for(let at=0,rt=ht.length;at<rt;at++){let vt=n.get(ht[at]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&bt(P)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let at=0;at<ht.length;at++){let rt=ht[at];$.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[at]);let vt=r.convert(rt.format,rt.colorSpace),O=r.convert(rt.type),ct=w(rt.internalFormat,vt,O,rt.normalized,rt.colorSpace,P.isXRRenderTarget===!0),tt=ke(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,ct,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,$.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe($.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),Xt(s.TEXTURE_CUBE_MAP,T);for(let at=0;at<6;at++)if(T.mipmaps.length>0)for(let rt=0;rt<T.mipmaps.length;rt++)Te($.__webglFramebuffer[at][rt],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,rt);else Te($.__webglFramebuffer[at],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);E(T)?S(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(Et){for(let at=0,rt=ht.length;at<rt;at++){let vt=ht[at],O=n.get(vt),ct=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ct=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,O.__webglTexture),Xt(ct,vt),Te($.__webglFramebuffer,P,vt,s.COLOR_ATTACHMENT0+at,ct,0),E(vt)&&S(ct)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,pt.__webglTexture),Xt(at,T),T.mipmaps.length>0)for(let rt=0;rt<T.mipmaps.length;rt++)Te($.__webglFramebuffer[rt],P,T,s.COLOR_ATTACHMENT0,at,rt);else Te($.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,at,0);E(T)?S(at):T.mipmaps.length>0&&s.texParameteri(at,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&un(P)}function V(P){let T=P.textures;for(let $=0,pt=T.length;$<pt;$++){let ht=T[$];if(E(ht)&&ht.mipmapsAutoUpdate===!0){let Mt=_(P),Et=n.get(ht).__webglTexture;e.bindTexture(Mt,Et),S(Mt),e.unbindTexture()}}}let dn=[];function ve(P){if(P.samples>0){if(bt(P)===!1){let T=P.textures,$=P.width,pt=P.height,ht=s.COLOR_BUFFER_BIT,Mt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(P),at=T.length>1;if(at)for(let vt=0;vt<T.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vt=0;vt<T.length;vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);let O=n.get(T[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,O,0)}s.blitFramebuffer(0,0,$,pt,0,0,$,pt,ht,s.NEAREST),l===!0&&(dn.length=0,dn.push(s.COLOR_ATTACHMENT0+vt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&dn.push(Mt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dn))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let vt=0;vt<T.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);let O=n.get(T[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,O,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ke(P){return Math.min(i.maxSamples,P.samples)}function bt(P){let T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Oe(P){let T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Zt(P,T){let $=P.colorSpace,pt=P.format,ht=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==ea&&$!==xi&&(be.getTransfer($)===Ne?(pt!==gi||ht!==$n)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",$)),T}function qt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Ft,this.resetTextureUnits=st,this.getTextureUnits=ut,this.setTextureUnits=yt,this.setTexture2D=wt,this.setTexture2DArray=N,this.setTexture3D=W,this.setTextureCube=U,this.rebindTextures=yn,this.setupRenderTarget=je,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=un,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=bt,this.dispose=H}function ny(s,t){function e(n,i=xi){let r,a=be.getTransfer(i);if(n===$n)return s.UNSIGNED_BYTE;if(n===ol)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return s.UNSIGNED_SHORT_5_5_5_1;if(n===vh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===_h)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===xh)return s.BYTE;if(n===yh)return s.SHORT;if(n===Pr)return s.UNSIGNED_SHORT;if(n===al)return s.INT;if(n===mi)return s.UNSIGNED_INT;if(n===oi)return s.FLOAT;if(n===Kn)return s.HALF_FLOAT;if(n===bh)return s.ALPHA;if(n===Mh)return s.RGB;if(n===gi)return s.RGBA;if(n===zi)return s.DEPTH_COMPONENT;if(n===Vi)return s.DEPTH_STENCIL;if(n===cl)return s.RED;if(n===hl)return s.RED_INTEGER;if(n===cs)return s.RG;if(n===ul)return s.RG_INTEGER;if(n===dl)return s.RGBA_INTEGER;if(n===wa||n===Ea||n===Ta||n===Aa)if(a===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===yl||n===vl||n===_l||n===bl||n===Ra||n===Ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xl||n===yl)return a===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===_l)return r.COMPRESSED_R11_EAC;if(n===bl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ra)return r.COMPRESSED_RG11_EAC;if(n===Ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sl||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===kl||n===Nl||n===Ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===El)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fl||n===Ol||n===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fl)return a===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zl||n===Hl||n===Ca||n===Gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var iy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sy=`
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

}`,Xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ga(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pn({vertexShader:iy,fragmentShader:sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new X(new Jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qh=class extends Si{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,m=null,x=typeof XRWebGLBinding<"u",g=new Xh,y={},b=e.getContextAttributes(),E=null,S=null,_=[],w=[],v=new Yt,M=null,R=null,C=new kn;C.viewport=new tn;let k=new kn;k.viewport=new tn;let D=[C,k],B=new el,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let wt=_[ot];return wt===void 0&&(wt=new vr,_[ot]=wt),wt.getTargetRaySpace()},this.getControllerGrip=function(ot){let wt=_[ot];return wt===void 0&&(wt=new vr,_[ot]=wt),wt.getGripSpace()},this.getHand=function(ot){let wt=_[ot];return wt===void 0&&(wt=new vr,_[ot]=wt),wt.getHandSpace()};function Y(ot){let wt=w.indexOf(ot.inputSource);if(wt===-1)return;let N=_[wt];N!==void 0&&(N.update(ot.inputSource,ot.frame,c||a),N.dispatchEvent({type:ot.type,data:ot.inputSource}))}function Z(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",nt);for(let ot=0;ot<_.length;ot++){let wt=w[ot];wt!==null&&(w[ot]=null,_[ot].disconnect(wt))}I=null,H=null,g.reset();for(let ot in y)delete y[ot];if(t.setRenderTarget(E),p=null,d=null,f=null,i=null,S=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(v.width,v.height,!1),R!==null){let ot=R.camera;ot.fov=R.fov,ot.zoom=R.zoom,ot.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){o=ot,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ot){if(i=ot,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",nt),b.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let N=null,W=null,U=null;b.depth&&(U=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,N=b.stencil?Vi:zi,W=b.stencil?Ns:mi);let j={colorFormat:e.RGBA8,depthFormat:U,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(j),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Gn(d.textureWidth,d.textureHeight,{format:gi,type:$n,depthTexture:new Hi(d.textureWidth,d.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let N={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,N),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Gn(p.framebufferWidth,p.framebufferHeight,{format:gi,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ft.setContext(i),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(ot){for(let wt=0;wt<ot.removed.length;wt++){let N=ot.removed[wt],W=w.indexOf(N);W>=0&&(w[W]=null,_[W].disconnect(N))}for(let wt=0;wt<ot.added.length;wt++){let N=ot.added[wt],W=w.indexOf(N);if(W===-1){for(let j=0;j<_.length;j++)if(j>=w.length){w.push(N),W=j;break}else if(w[j]===null){w[j]=N,W=j;break}if(W===-1)break}let U=_[W];U&&U.connect(N)}}function K(ot,wt){wt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(wt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(i===null)return;let wt=ot.near,N=ot.far;g.texture!==null&&(g.depthNear>0&&(wt=g.depthNear),g.depthFar>0&&(N=g.depthFar)),B.near=k.near=C.near=wt,B.far=k.far=C.far=N,(I!==B.near||H!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,H=B.far),B.layers.mask=ot.layers.mask|6,C.layers.mask=B.layers.mask&-5,k.layers.mask=B.layers.mask&-3;let W=ot.parent,U=B.cameras;K(B,W);for(let j=0;j<U.length;j++)K(U[j],W);B.projectionMatrix.copy(C.projectionMatrix),B.projectionMatrixInverse.copy(C.projectionMatrixInverse),R===null&&ot.isPerspectiveCamera&&(R={camera:ot,fov:ot.fov,zoom:ot.zoom}),st(ot,B,W)};function st(ot,wt,N){N===null?ot.matrix.copy(wt.matrixWorld):(ot.matrix.copy(N.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(wt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(wt.projectionMatrix),ot.projectionMatrixInverse.copy(wt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=ra*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ot){l=ot,d!==null&&(d.fixedFoveation=ot),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ot)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(ot){return y[ot]};let ut=null;function yt(ot,wt){if(u=wt.getViewerPose(c||a),m=wt,u!==null){let N=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let W=!1;N.length!==B.cameras.length&&(B.cameras.length=0,W=!0);for(let Ct=0;Ct<N.length;Ct++){let Xt=N[Ct],le=null;if(p!==null)le=p.getViewport(Xt);else{let lt=f.getViewSubImage(d,Xt);le=lt.viewport,Ct===0&&(t.setRenderTargetTextures(S,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(S))}let te=D[Ct];te===void 0&&(te=new kn,te.layers.enable(Ct),te.viewport=new tn,D[Ct]=te),te.matrix.fromArray(Xt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Xt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(le.x,le.y,le.width,le.height),Ct===0&&(B.matrix.copy(te.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),W===!0&&B.cameras.push(te)}let U=i.enabledFeatures;if(U&&U.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Ct=f.getDepthInformation(N[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(Ct,i.renderState)}if(U&&U.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let Ct=0;Ct<N.length;Ct++){let Xt=N[Ct].camera;if(Xt){let le=y[Xt];le||(le=new ga,y[Xt]=le);let te=f.getCameraImage(Xt);le.sourceTexture=te}}}}for(let N=0;N<_.length;N++){let W=w[N],U=_[N];W!==null&&U!==void 0&&U.update(W,wt,c||a)}ut&&ut(ot,wt),wt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:wt}),m=null}let Ft=new tf;Ft.setAnimationLoop(yt),this.setAnimationLoop=function(ot){ut=ot},this.dispose=function(){}}},ry=new de,uf=new ae;uf.set(-1,0,0,0,1,0,0,0,1);function ay(s,t){function e(g,y){g.matrixAutoUpdate===!0&&g.updateMatrix(),y.value.copy(g.matrix)}function n(g,y){y.color.getRGB(g.fogColor.value,Rh(s)),y.isFog?(g.fogNear.value=y.near,g.fogFar.value=y.far):y.isFogExp2&&(g.fogDensity.value=y.density)}function i(g,y,b,E,S){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?r(g,y):y.isMeshLambertMaterial?(r(g,y),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(r(g,y),f(g,y)):y.isMeshPhongMaterial?(r(g,y),u(g,y),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(r(g,y),d(g,y),y.isMeshPhysicalMaterial&&p(g,y,S)):y.isMeshMatcapMaterial?(r(g,y),m(g,y)):y.isMeshDepthMaterial?r(g,y):y.isMeshDistanceMaterial?(r(g,y),x(g,y)):y.isMeshNormalMaterial?r(g,y):y.isLineBasicMaterial?(a(g,y),y.isLineDashedMaterial&&o(g,y)):y.isPointsMaterial?l(g,y,b,E):y.isSpriteMaterial?c(g,y):y.isShadowMaterial?(g.color.value.copy(y.color),g.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function r(g,y){g.opacity.value=y.opacity,y.color&&g.diffuse.value.copy(y.color),y.emissive&&g.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(g.map.value=y.map,e(y.map,g.mapTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,e(y.alphaMap,g.alphaMapTransform)),y.bumpMap&&(g.bumpMap.value=y.bumpMap,e(y.bumpMap,g.bumpMapTransform),g.bumpScale.value=y.bumpScale,y.side===Nn&&(g.bumpScale.value*=-1)),y.normalMap&&(g.normalMap.value=y.normalMap,e(y.normalMap,g.normalMapTransform),g.normalScale.value.copy(y.normalScale),y.side===Nn&&g.normalScale.value.negate()),y.displacementMap&&(g.displacementMap.value=y.displacementMap,e(y.displacementMap,g.displacementMapTransform),g.displacementScale.value=y.displacementScale,g.displacementBias.value=y.displacementBias),y.emissiveMap&&(g.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,g.emissiveMapTransform)),y.specularMap&&(g.specularMap.value=y.specularMap,e(y.specularMap,g.specularMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest);let b=t.get(y),E=b.envMap,S=b.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(ry.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(uf),g.reflectivity.value=y.reflectivity,g.ior.value=y.ior,g.refractionRatio.value=y.refractionRatio),y.lightMap&&(g.lightMap.value=y.lightMap,g.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,g.lightMapTransform)),y.aoMap&&(g.aoMap.value=y.aoMap,g.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,g.aoMapTransform))}function a(g,y){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,y.map&&(g.map.value=y.map,e(y.map,g.mapTransform))}function o(g,y){g.dashSize.value=y.dashSize,g.totalSize.value=y.dashSize+y.gapSize,g.scale.value=y.scale}function l(g,y,b,E){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,g.size.value=y.size*b,g.scale.value=E*.5,y.map&&(g.map.value=y.map,e(y.map,g.uvTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,e(y.alphaMap,g.alphaMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest)}function c(g,y){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,g.rotation.value=y.rotation,y.map&&(g.map.value=y.map,e(y.map,g.mapTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,e(y.alphaMap,g.alphaMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest)}function u(g,y){g.specular.value.copy(y.specular),g.shininess.value=Math.max(y.shininess,1e-4)}function f(g,y){y.gradientMap&&(g.gradientMap.value=y.gradientMap)}function d(g,y){g.metalness.value=y.metalness,y.metalnessMap&&(g.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,g.metalnessMapTransform)),g.roughness.value=y.roughness,y.roughnessMap&&(g.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,g.roughnessMapTransform)),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)}function p(g,y,b){g.ior.value=y.ior,y.diffuseRoughness>0&&(g.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=y.diffuseRoughnessMap,e(y.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),y.sheen>0&&(g.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),g.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(g.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,g.sheenColorMapTransform)),y.sheenRoughnessMap&&(g.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,g.sheenRoughnessMapTransform))),y.clearcoat>0&&(g.clearcoat.value=y.clearcoat,g.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(g.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,g.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(g.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Nn&&g.clearcoatNormalScale.value.negate())),y.dispersion>0&&(g.dispersion.value=y.dispersion),y.retroreflectivity>0&&(g.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(g.iridescence.value=y.iridescence,g.iridescenceIOR.value=y.iridescenceIOR,g.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(g.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,g.iridescenceMapTransform)),y.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),y.transmission>0&&(g.transmission.value=y.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),y.transmissionMap&&(g.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,g.transmissionMapTransform)),g.thickness.value=y.thickness,y.thicknessMap&&(g.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=y.attenuationDistance,g.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(g.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(g.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=y.specularIntensity,g.specularColor.value.copy(y.specularColor),y.specularColorMap&&(g.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,g.specularColorMapTransform)),y.specularIntensityMap&&(g.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,y){y.matcap&&(g.matcap.value=y.matcap)}function x(g,y){let b=t.get(y).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oy(s,t,e,n){let i={},r={};function a(b,E){let S=E.program;n.uniformBlockBinding(b,S,i[b.id])}function o(b,E){let S=i[b.id];S===void 0&&(m(b),S=l(b),i[b.id]=S,b.addEventListener("dispose",g));let _=E.program;n.updateUBOMapping(b,_);let w=t.render.frame;r[b.id]!==w&&(c(b),r[b.id]=w)}function l(b){let E=s.createBuffer(),S=b.__size,_=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,S,_),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(b){let E=i[b.id],S=b.uniforms,_=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let w=0,v=S.length;w<v;w++){let M=S[w];if(Array.isArray(M))for(let R=0,C=M.length;R<C;R++)u(M[R],w,R,_);else u(M,w,0,_)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(b,E,S,_){if(d(b,E,S,_)===!0){let w=b.__offset,v=b.value;if(Array.isArray(v)){let M=0;for(let R=0;R<v.length;R++){let C=v[R],k=x(C,!0);f(C,b.__data,M),M+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,b.__data)}}function f(b,E,S){typeof b=="number"||typeof b=="boolean"?E[S]=b:b.isMatrix3?(E[S]=b.elements[0],E[S+1]=b.elements[1],E[S+2]=b.elements[2],E[S+3]=0,E[S+4]=b.elements[3],E[S+5]=b.elements[4],E[S+6]=b.elements[5],E[S+7]=0,E[S+8]=b.elements[6],E[S+9]=b.elements[7],E[S+10]=b.elements[8],E[S+11]=0):ArrayBuffer.isView(b)?E.set(b.subarray(0,E.length-S),S):b.toArray(E,S)}function d(b,E,S,_){let w=b.value,v=E+"_"+S;if(Array.isArray(w)){_[v]===void 0&&(_[v]=[]);let M=_[v],R=!1;for(let C=0;C<w.length;C++)p(w[C],M,C)===!0&&(R=!0);return R}return p(w,_,v)}function p(b,E,S){if(E[S]===void 0)return typeof b=="number"||typeof b=="boolean"?E[S]=b:ArrayBuffer.isView(b)?E[S]=b.slice():E[S]=b.clone(),!0;{let _=E[S];if(typeof b=="number"||typeof b=="boolean"){if(_!==b)return E[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(_.equals(b)===!1)return _.copy(b),!0}}return!1}function m(b){let E=b.uniforms,S=0,_=16;for(let v=0,M=E.length;v<M;v++){let R=Array.isArray(E[v])?E[v]:[E[v]];for(let C=0,k=R.length;C<k;C++){let D=R[C],B=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(E[v])||Array.isArray(D.value),H=S;for(let Z=0,nt=B.length;Z<nt;Z++){let K=B[Z],st=x(K,I),ut=S%_,yt=ut%st.boundary,Ft=ut+yt;S+=yt,Ft!==0&&_-Ft<st.storage&&(S+=_-Ft),Z===0&&(H=S),S+=st.storage}let Y=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new Y((S-H)/Float32Array.BYTES_PER_ELEMENT),D.__offset=H}}let w=S%_;return w>0&&(S+=_-w),b.__size=S,b.__cache={},this}function x(b,E){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=16,S.storage=48):b.isMatrix4?(S.boundary=16,S.storage=64):b.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",b),E===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(b){let E=b.target;E.removeEventListener("dispose",g),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function y(){for(let b in i)s.deleteBuffer(i[b]);i={},r={}}return{bind:a,update:o,dispose:y}}var ly=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function cy(){return Ci===null&&(Ci=new ua(ly,16,16,cs,Kn),Ci.name="DFG_LUT",Ci.minFilter=vn,Ci.magFilter=vn,Ci.wrapS=bi,Ci.wrapT=bi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var Zl=class{constructor(t={}){let{canvas:e=bd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=$n}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=p,g=new Set([dl,ul,hl]),y=new Set([$n,mi,Pr,Ns,ol,ll]),b=new Uint32Array(4),E=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},_=null,w=null,v=[],M=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,k=!1,D=null,B=null,I=null,H=null;this._outputColorSpace=mn;let Y=0,Z=0,nt=null,K=-1,st=null,ut=new tn,yt=new tn,Ft=null,ot=new $t(0),wt=0,N=e.width,W=e.height,U=1,j=null,Gt=null,Ct=new tn(0,0,N,W),Xt=new tn(0,0,N,W),le=!1,te=new is,lt=new Uo,De=!1,en=!1,Te=new de,Fe=new L,ye=new tn,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yn=!1;function je(){return nt===null?U:1}let V=n;function dn(A,z){return e.getContext(A,z)}let ve,ke,bt,Oe,Zt,qt,P,T,$,pt,ht,Mt,Et,at,rt,vt,O,ct,tt,gt,xt,_t,Vt;try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Wt,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",It,!1),V===null){let z="webgl2";if(V=dn(z,A),V===null)throw dn(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(A){throw e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",It,!1),ee("WebGLRenderer: "+A.message),A}function re(){ve=new _1(V),ve.init(),xt=new ny(V,ve),ke=new c1(V,ve,t,xt),bt=new ty(V,ve),ke.reversedDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),B=V.createFramebuffer(),I=V.createFramebuffer(),H=V.createFramebuffer(),Oe=new S1(V),Zt=new zx,qt=new ey(V,ve,bt,Zt,ke,xt,Oe),P=new v1(C),T=new E0(V),_t=new o1(V,T),$=new b1(V,T,Oe,_t),pt=new E1(V,$,T,_t,Oe),ct=new w1(V,ke,qt),rt=new h1(Zt),ht=new Bx(C,P,ve,ke,_t,rt),Mt=new ay(C,Zt),Et=new Gx,at=new Yx(ve),O=new a1(C,P,bt,pt,m,l),vt=new Qx(C,pt,ke),Vt=new oy(V,Oe,ke,bt),tt=new l1(V,ve,Oe),gt=new M1(V,ve,Oe),Oe.programs=ht.programs,C.capabilities=ke,C.extensions=ve,C.properties=Zt,C.renderLists=Et,C.shadowMap=vt,C.state=bt,C.info=Oe}x!==$n&&(R=new A1(x,e.width,e.height,o,i,r));let mt=new qh(C,V);this.xr=mt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let A=ve.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ve.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(A){A!==void 0&&(U=A,this.setSize(N,W,!1))},this.getSize=function(A){return A.set(N,W)},this.setSize=function(A,z,et=!0){if(mt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,W=z,e.width=Math.floor(A*U),e.height=Math.floor(z*U),et===!0&&(e.style.width=A+"px",e.style.height=z+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(N*U,W*U).floor()},this.setDrawingBufferSize=function(A,z,et){N=A,W=z,U=et,e.width=Math.floor(A*et),e.height=Math.floor(z*et),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(x===$n){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ut)},this.getViewport=function(A){return A.copy(Ct)},this.setViewport=function(A,z,et,J){A.isVector4?Ct.set(A.x,A.y,A.z,A.w):Ct.set(A,z,et,J),bt.viewport(ut.copy(Ct).multiplyScalar(je()).round())},this.getScissor=function(A){return A.copy(Xt)},this.setScissor=function(A,z,et,J){A.isVector4?Xt.set(A.x,A.y,A.z,A.w):Xt.set(A,z,et,J),bt.scissor(yt.copy(Xt).multiplyScalar(je()).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(A){bt.setScissorTest(le=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){Gt=A},this.getClearColor=function(A){return A.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,et=!0){let J=0;if(A){let Q=!1;if(nt!==null){let Tt=nt.texture.format;Q=g.has(Tt)}if(Q){let Tt=nt.texture.type,Ot=y.has(Tt),At=O.getClearColor(),Lt=O.getClearAlpha(),Ht=At.r,ie=At.g,pe=At.b;Ot?(b[0]=Ht,b[1]=ie,b[2]=pe,b[3]=Lt,V.clearBufferuiv(V.COLOR,0,b)):(E[0]=Ht,E[1]=ie,E[2]=pe,E[3]=Lt,V.clearBufferiv(V.COLOR,0,E))}else J|=V.COLOR_BUFFER_BIT}z&&(J|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",It,!1),O.dispose(),Et.dispose(),at.dispose(),qt.dispose(),Zt.dispose(),P.dispose(),pt.dispose(),$.dispose(),_t.dispose(),Vt.dispose(),ht.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Kt),mt.removeEventListener("sessionend",_e),fn.stop()};function Wt(A){A.preventDefault(),sa("WebGLRenderer: Context Lost."),k=!0}function ne(){sa("WebGLRenderer: Context Restored."),k=!1;let A=Oe.autoReset,z=vt.enabled,et=vt.autoUpdate,J=vt.needsUpdate,Q=vt.type;re(),Oe.autoReset=A,vt.enabled=z,vt.autoUpdate=et,vt.needsUpdate=J,vt.type=Q}function It(A){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ue(A){let z=A.target;z.removeEventListener("dispose",ue),Xe(z)}function Xe(A){G(A),Zt.remove(A)}function G(A){let z=Zt.get(A).programs;z!==void 0&&(z.forEach(function(et){ht.releaseProgram(et)}),A.isShaderMaterial&&ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,et,J,Q,Tt){z===null&&(z=un);let Ot=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,At=qa(A,z,et,J,Q);bt.setMaterial(J,Ot);let Lt=et.index,Ht=1;if(J.wireframe===!0){if(Lt=$.getWireframeAttribute(et),Lt===void 0)return;Ht=2}let ie=et.drawRange,pe=et.attributes.position,Nt=ie.start*Ht,xe=(ie.start+ie.count)*Ht;Tt!==null&&(Nt=Math.max(Nt,Tt.start*Ht),xe=Math.min(xe,(Tt.start+Tt.count)*Ht)),Lt!==null?(Nt=Math.max(Nt,0),xe=Math.min(xe,Lt.count)):pe!=null&&(Nt=Math.max(Nt,0),xe=Math.min(xe,pe.count));let We=xe-Nt;if(We<0||We===1/0)return;_t.setup(Q,J,At,et,Lt);let Pe,Ae=tt;if(Lt!==null&&(Pe=T.get(Lt),Ae=gt,Ae.setIndex(Pe)),Q.isMesh)J.wireframe===!0?(bt.setLineWidth(J.wireframeLinewidth*je()),Ae.setMode(V.LINES)):Ae.setMode(V.TRIANGLES);else if(Q.isLine){let sn=J.linewidth;sn===void 0&&(sn=1),bt.setLineWidth(sn*je()),Q.isLineSegments?Ae.setMode(V.LINES):Q.isLineLoop?Ae.setMode(V.LINE_LOOP):Ae.setMode(V.LINE_STRIP)}else Q.isPoints?Ae.setMode(V.POINTS):Q.isSprite&&Ae.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))Ae.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let sn=Q._multiDrawStarts,Bt=Q._multiDrawCounts,wn=Q._multiDrawCount,q=Lt?T.get(Lt).bytesPerElement:1,Rt=Zt.get(J).currentProgram.getUniforms();for(let zt=0;zt<wn;zt++)Rt.setValue(V,"_gl_DrawID",zt),Ae.render(sn[zt]/q,Bt[zt])}else if(Q.isInstancedMesh)Ae.renderInstances(Nt,We,Q.count);else if(et.isInstancedBufferGeometry){let sn=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Bt=Math.min(et.instanceCount,sn);Ae.renderInstances(Nt,We,Bt)}else Ae.render(Nt,We)};function dt(A,z,et,J){D!==null&&A.isNodeMaterial&&D.setObject(J,A),De===!0&&rt.setState(A,et,!1),A.transparent===!0&&A.side===Se&&A.forceSinglePass===!1?(A.side=Nn,A.needsUpdate=!0,qs(A,z,J),A.side=ls,A.needsUpdate=!0,qs(A,z,J),A.side=Se):qs(A,z,J)}this.compile=function(A,z,et=null){et===null&&(et=A),D!==null&&D.renderStart(A,z,et),w=at.get(et),w.init(z),M.push(w),et.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),A!==et&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),en=this.localClippingEnabled,De=rt.init(this.clippingPlanes,en),De===!0&&rt.setGlobalState(this.clippingPlanes,z),D!==null&&vt.render(w.state.shadowsArray,et,z);let J=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Ot=0;Ot<Tt.length;Ot++){let At=Tt[Ot];dt(At,et,z,Q),J.add(At)}else dt(Tt,et,z,Q),J.add(Tt)}),w=M.pop(),D!==null&&D.renderEnd(),J},this.compileAsync=function(A,z,et=null){let J=this.compile(A,z,et);return new Promise(Q=>{function Tt(){if(J.forEach(function(Ot){let Lt=Zt.get(Ot).currentProgram;(Lt===void 0||Lt.isReady())&&J.delete(Ot)}),J.size===0){Q(A);return}setTimeout(Tt,10)}ve.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let oe=null;function he(A){oe&&oe(A)}function Kt(){fn.stop()}function _e(){fn.start()}let fn=new tf;fn.setAnimationLoop(he),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(A){oe=A,mt.setAnimationLoop(A),A===null?fn.stop():fn.start()},mt.addEventListener("sessionstart",Kt),mt.addEventListener("sessionend",_e),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;D!==null&&D.renderStart(A,z);let et=mt.enabled===!0&&mt.isPresenting===!0,J=R!==null&&(nt===null||et)&&R.begin(C,nt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(z),z=mt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,z,nt),w=at.get(A,M.length),w.init(z),w.state.textureUnits=qt.getTextureUnits(),M.push(w),Te.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?lt.setFromArrayCamera(z):te.setFromProjectionMatrix(Te,ai,z.reversedDepth),en=this.localClippingEnabled,De=rt.init(this.clippingPlanes,en),_=Et.get(A,v.length),_.init(),v.push(_),this.info.render.frame++,mt.enabled===!0&&mt.isPresenting===!0){let Ot=C.xr.getDepthSensingMesh();Ot!==null&&Ge(Ot,z,-1/0,C.sortObjects)}Ge(A,z,0,C.sortObjects),_.finish(),D!==null&&D.updateLights(w.state.lightsArray),C.sortObjects===!0&&_.sort(j,Gt),yn=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,yn&&O.addToRenderList(_,A),this.info.autoReset===!0&&this.info.reset(),De===!0&&rt.beginShadows();let Q=w.state.shadowsArray;if(vt.render(Q,A,z),De===!0&&rt.endShadows(),(J&&R.hasRenderPass())===!1){let Ot=_.opaque,At=_.transmissive;if(w.setupLights(),z.isArrayCamera){let Lt=z.cameras;if(At.length>0)for(let Ht=0,ie=Lt.length;Ht<ie;Ht++){let pe=Lt[Ht];Qe(Ot,At,A,pe)}yn&&O.render(A);for(let Ht=0,ie=Lt.length;Ht<ie;Ht++){let pe=Lt[Ht];Ve(_,A,pe,pe.viewport)}}else At.length>0&&Qe(Ot,At,A,z),yn&&O.render(A),Ve(_,A,z)}nt!==null&&Z===0&&(qt.updateMultisampleRenderTarget(nt),qt.updateRenderTargetMipmap(nt)),J&&R.end(C),A.isScene===!0&&A.onAfterRender(C,A,z),_t.resetDefaultState(),K=-1,st=null,M.pop(),M.length>0?(w=M[M.length-1],qt.setTextureUnits(w.state.textureUnits),De===!0&&rt.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?_=v[v.length-1]:_=null,D!==null&&D.renderEnd()};function Ge(A,z,et,J){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)et=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){let Ot=z.isArrayCamera?lt:te;if(!A.frustumCulled||A.intersectsFrustum(Ot)){J&&ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);let At=pt.update(A),Lt=A.material;Lt.visible&&_.push(A,At,Lt,et,ye.z,null,z)}}else if(A.isMesh||A.isLine||A.isPoints){let Ot=z.isArrayCamera?lt:te;if(!A.frustumCulled||A.intersectsFrustum(Ot)){let At=pt.update(A),Lt=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ye.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),ye.copy(At.boundingSphere.center)),ye.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(Lt)){let Ht=At.groups;for(let ie=0,pe=Ht.length;ie<pe;ie++){let Nt=Ht[ie],xe=Lt[Nt.materialIndex];xe&&xe.visible&&_.push(A,At,xe,et,ye.z,Nt,z)}}else Lt.visible&&_.push(A,At,Lt,et,ye.z,null,z)}}}let Tt=A.children;for(let Ot=0,At=Tt.length;Ot<At;Ot++)Ge(Tt[Ot],z,et,J)}function Ve(A,z,et,J){let{opaque:Q,transmissive:Tt,transparent:Ot}=A;w.setupLightsView(et),De===!0&&rt.setGlobalState(C.clippingPlanes,et),J&&bt.viewport(ut.copy(J)),Q.length>0&&nn(Q,z,et),Tt.length>0&&nn(Tt,z,et),Ot.length>0&&nn(Ot,z,et),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Qe(A,z,et,J){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[J.id]===void 0){let Nt=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[J.id]=new Gn(1,1,{generateMipmaps:!0,type:Nt?Kn:$n,minFilter:Gi,samples:Math.max(4,ke.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:be.workingColorSpace})}let Tt=w.state.transmissionRenderTarget[J.id],Ot=J.viewport||ut;Tt.setSize(Ot.z*C.transmissionResolutionScale,Ot.w*C.transmissionResolutionScale);let At=C.getRenderTarget(),Lt=C.getActiveCubeFace(),Ht=C.getActiveMipmapLevel();C.setRenderTarget(Tt),C.getClearColor(ot),wt=C.getClearAlpha(),wt<1&&C.setClearColor(16777215,.5),C.clear(),yn&&O.render(et);let ie=C.toneMapping;C.toneMapping=Ri;let pe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),w.setupLightsView(J),De===!0&&rt.setGlobalState(C.clippingPlanes,J),nn(A,et,J),qt.updateMultisampleRenderTarget(Tt),qt.updateRenderTargetMipmap(Tt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let xe=0,We=z.length;xe<We;xe++){let Pe=z[xe],{object:Ae,geometry:sn,material:Bt,group:wn}=Pe;if(Bt.side===Se&&Ae.layers.test(J.layers)){let q=Bt.side;Bt.side=Nn,Bt.needsUpdate=!0,Sn(Ae,et,J,sn,Bt,wn),Bt.side=q,Bt.needsUpdate=!0,Nt=!0}}Nt===!0&&(qt.updateMultisampleRenderTarget(Tt),qt.updateRenderTargetMipmap(Tt))}C.setRenderTarget(At,Lt,Ht),C.setClearColor(ot,wt),pe!==void 0&&(J.viewport=pe),C.toneMapping=ie}function nn(A,z,et){let J=z.isScene===!0?z.overrideMaterial:null;for(let Q=0,Tt=A.length;Q<Tt;Q++){let Ot=A[Q],{object:At,geometry:Lt,group:Ht}=Ot,ie=Ot.material;ie.allowOverride===!0&&J!==null&&(ie=J),At.layers.test(et.layers)&&Sn(At,z,et,Lt,ie,Ht)}}function Sn(A,z,et,J,Q,Tt){D!==null&&Q.isNodeMaterial&&D.setObject(A,Q),A.onBeforeRender(C,z,et,J,Q,Tt),A.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(C,z,et,J,A,Tt),Q.transparent===!0&&Q.side===Se&&Q.forceSinglePass===!1?(Q.side=Nn,Q.needsUpdate=!0,C.renderBufferDirect(et,z,J,Q,A,Tt),Q.side=ls,Q.needsUpdate=!0,C.renderBufferDirect(et,z,J,Q,A,Tt),Q.side=Se):C.renderBufferDirect(et,z,J,Q,A,Tt),A.onAfterRender(C,z,et,J,Q,Tt)}function Ln(A){let z=0;for(let et of A)et.texture!==null&&z++;return z}function qs(A,z,et){z.isScene!==!0&&(z=un);let J=Zt.get(A),Q=w.state.lights,Tt=w.state.shadowsArray,Ot=Q.state.version,At=ht.getParameters(A,Q.state,Tt,z,et,w.state.lightProbeGridArray),Lt=ht.getProgramCacheKey(At),Ht=J.programs;J.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,J.fog=z.fog;let ie=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;J.envMap=P.get(A.envMap||J.environment,ie),J.envMapRotation=J.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",ue),Ht=new Map,J.programs=Ht,J.programVariants=new Map);let pe=Ht.get(Lt);if(pe!==void 0){if(J.currentProgram===pe&&J.lightsStateVersion===Ot)return Xa(A,At),pe}else At.uniforms=ht.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,et,At),A.onBeforeCompile(At,C),pe=ht.acquireProgram(At,Lt),Ht.set(Lt,pe),J.uniforms=At.uniforms;let Nt=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Nt.clippingPlanes=rt.uniform),Xa(A,At),J.needsLights=ms(A),J.lightsStateVersion=Ot,J.needsLights&&(Nt.ambientLightColor.value=Q.state.ambient,Nt.lightProbe.value=Q.state.probe,Nt.sunLights.value=Q.state.sun,Nt.sunLightShadows.value=Q.state.sunShadow,Nt.directionalLights.value=Q.state.directional,Nt.directionalLightShadows.value=Q.state.directionalShadow,Nt.spotLights.value=Q.state.spot,Nt.spotLightShadows.value=Q.state.spotShadow,Nt.rectAreaLights.value=Q.state.rectArea,Nt.ltc_1.value=Q.state.rectAreaLTC1,Nt.ltc_2.value=Q.state.rectAreaLTC2,Nt.pointLights.value=Q.state.point,Nt.pointLightShadows.value=Q.state.pointShadow,Nt.hemisphereLights.value=Q.state.hemi,Nt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Nt.sunShadowCascade.value=Q.state.sunShadowCascade,Nt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Nt.spotLightMatrix.value=Q.state.spotLightMatrix,Nt.spotLightMap.value=Q.state.spotLightMap,Nt.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.numLightProbeGrids=Ln(w.state.lightProbeGridArray),J.currentProgram=pe,J.uniformsList=null,pe}function Zs(A,z,et,J,Q){let Tt=Zt.get(A),Ot=Tt.currentProgram.id+","+J+","+Q,At=Tt.programVariants.get(Ot);return At===void 0?(At=qs(A,z,et),Tt.programVariants.set(Ot,At)):(Tt.currentProgram=At,Tt.uniformsList=null,Tt.outputColorSpace=J,Tt.toneMapping=Q),At}function Wa(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Lr.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Xa(A,z){let et=Zt.get(A);et.outputColorSpace=z.outputColorSpace,et.batching=z.batching,et.batchingColor=z.batchingColor,et.instancing=z.instancing,et.instancingColor=z.instancingColor,et.instancingMorph=z.instancingMorph,et.skinning=z.skinning,et.morphTargets=z.morphTargets,et.morphNormals=z.morphNormals,et.morphColors=z.morphColors,et.morphTargetsCount=z.morphTargetsCount,et.numClippingPlanes=z.numClippingPlanes,et.numIntersection=z.numClipIntersection,et.vertexAlphas=z.vertexAlphas,et.vertexTangents=z.vertexTangents,et.toneMapping=z.toneMapping}function qa(A,z,et,J,Q){z.isScene!==!0&&(z=un),qt.resetTextureUnits();let Tt=z.fog,Ot=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?z.environment:null,At=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:be.workingColorSpace,Lt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ht=P.get(J.envMap||Ot,Lt),ie=J.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pe=!!et.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Nt=!!et.morphAttributes.position,xe=!!et.morphAttributes.normal,We=!!et.morphAttributes.color,Pe=Ri;J.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Pe=C.toneMapping);let Ae=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,sn=Ae!==void 0?Ae.length:0,Bt=Zt.get(J),wn=w.state.lights;if(De===!0&&(en===!0||A!==st)){let rn=A===st&&J.id===K;rt.setState(J,A,rn)}let q=!1,Rt=!1;J.version===Bt.__version?Bt.needsLights&&Bt.lightsStateVersion!==wn.state.version||Q.isBatchedMesh&&Bt.batching===!1||!Q.isBatchedMesh&&Bt.batching===!0||Q.isBatchedMesh&&Bt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Bt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Bt.instancing===!1||!Q.isInstancedMesh&&Bt.instancing===!0||Q.isSkinnedMesh&&Bt.skinning===!1||!Q.isSkinnedMesh&&Bt.skinning===!0||Q.isInstancedMesh&&Bt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Bt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Bt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Bt.instancingMorph===!1&&Q.morphTexture!==null||Bt.envMap!==Ht||J.fog===!0&&Bt.fog!==Tt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==rt.numPlanes||Bt.numIntersection!==rt.numIntersection)||Bt.vertexAlphas!==ie||Bt.vertexTangents!==pe||Bt.morphTargets!==Nt||Bt.morphNormals!==xe||Bt.morphColors!==We||Bt.morphTargetsCount!==sn||Bt.numLightProbeGrids!==Ln(w.state.lightProbeGridArray)?q=!0:(Bt.outputColorSpace!==At||Bt.toneMapping!==Pe)&&(Rt=!0):(q=!0,Bt.__version=J.version);let zt=Bt.currentProgram;(q===!0||Rt===!0)&&(zt=Rt===!0?Zs(J,z,Q,At,Pe):qs(J,z,Q),D&&J.isNodeMaterial&&D.onUpdateProgram(J,zt,Bt));let qe=!1,En=!1,si=!1,Re=zt.getUniforms(),Dn=Bt.uniforms;if(bt.useProgram(zt.program)&&(qe=!0,En=!0,si=!0),J.id!==K&&(K=J.id,En=!0),qe||st!==A){bt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Re.setValue(V,"projectionMatrix",A.projectionMatrix),Re.setValue(V,"viewMatrix",A.matrixWorldInverse);let Tn=Re.map.cameraPosition;Tn!==void 0&&Tn.setValue(V,Fe.setFromMatrixPosition(A.matrixWorld)),ke.logarithmicDepthBuffer&&Re.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Re.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),st!==A&&(st=A,En=!0,si=!0)}if(Bt.needsLights&&(wn.state.sunShadowMap.length>0&&Re.setValue(V,"sunShadowMap",wn.state.sunShadowMap,qt),wn.state.directionalShadowMap.length>0&&Re.setValue(V,"directionalShadowMap",wn.state.directionalShadowMap,qt),wn.state.spotShadowMap.length>0&&Re.setValue(V,"spotShadowMap",wn.state.spotShadowMap,qt),wn.state.pointShadowMap.length>0&&Re.setValue(V,"pointShadowMap",wn.state.pointShadowMap,qt)),Q.isSkinnedMesh){Re.setOptional(V,Q,"bindMatrix"),Re.setOptional(V,Q,"bindMatrixInverse");let rn=Q.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Re.setValue(V,"boneTexture",rn.boneTexture,qt))}Q.isBatchedMesh&&(Re.setOptional(V,Q,"batchingTexture"),Re.setValue(V,"batchingTexture",Q._matricesTexture,qt),Re.setOptional(V,Q,"batchingIdTexture"),Re.setValue(V,"batchingIdTexture",Q._indirectTexture,qt),Re.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Re.setValue(V,"batchingColorTexture",Q._colorsTexture,qt));let hi=et.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&ct.update(Q,et,zt),(En||Bt.receiveShadow!==Q.receiveShadow)&&(Bt.receiveShadow=Q.receiveShadow,Re.setValue(V,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&z.environment!==null&&(Dn.envMapIntensity.value=z.environmentIntensity),Dn.dfgLUT!==void 0&&(Dn.dfgLUT.value=cy()),En){if(Re.setValue(V,"toneMappingExposure",C.toneMappingExposure),Bt.needsLights&&Ys(Dn,si),Tt&&J.fog===!0&&Mt.refreshFogUniforms(Dn,Tt),Mt.refreshMaterialUniforms(Dn,J,U,W,w.state.transmissionRenderTarget[A.id]),Bt.needsLights&&Bt.numLightProbeGrids>0){let rn=S,Tn=0;for(let Li of w.state.lightProbeGridArray)Li.texture!==null&&(rn.textures[Tn]=Li.texture,rn.min[Tn]=Li.boundingBox.min,rn.max[Tn]=Li.boundingBox.max,rn.resolution[Tn]=Li.resolution,Tn++);for(let Li in rn)rn[Li].length=Tn;Dn.probesSH.value=rn.textures,Dn.probesMin.value=rn.min,Dn.probesMax.value=rn.max,Dn.probesResolution.value=rn.resolution}Lr.upload(V,Wa(Bt),Dn,qt)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Lr.upload(V,Wa(Bt),Dn,qt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Re.setValue(V,"center",Q.center),Re.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Re.setValue(V,"normalMatrix",Q.normalMatrix),Re.setValue(V,"modelMatrix",Q.matrixWorld),J.uniformsGroups!==void 0){let rn=J.uniformsGroups;for(let Tn=0,Li=rn.length;Tn<Li;Tn++){let au=rn[Tn];Vt.update(au,zt),Vt.bind(au,zt)}}return zt}function Ys(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function ms(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(A,z,et){let J=Zt.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Zt.get(A.texture).__webglTexture=z,Zt.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:et,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let et=Zt.get(A);et.__webglFramebuffer=z,et.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,et=0){nt=A,Y=z,Z=et;let J=null,Q=!1,Tt=!1;if(A){let At=Zt.get(A);if(At.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(V.FRAMEBUFFER,At.__webglFramebuffer),ut.copy(A.viewport),yt.copy(A.scissor),Ft=A.scissorTest,bt.viewport(ut),bt.scissor(yt),bt.setScissorTest(Ft),K=-1;return}else if(At.__webglFramebuffer===void 0)qt.setupRenderTarget(A);else if(At.__hasExternalTextures)qt.rebindTextures(A,Zt.get(A.texture).__webglTexture,Zt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ie=A.depthTexture;if(At.__boundDepthTexture!==ie){if(ie!==null&&Zt.has(ie)&&(A.width!==ie.image.width||A.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qt.setupDepthRenderbuffer(A)}}let Lt=A.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Tt=!0);let Ht=Zt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[z])?J=Ht[z][et]:J=Ht[z],Q=!0):A.samples>0&&qt.useMultisampledRTT(A)===!1?J=Zt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?J=Ht[et]:J=Ht,ut.copy(A.viewport),yt.copy(A.scissor),Ft=A.scissorTest}else ut.copy(Ct).multiplyScalar(U).floor(),yt.copy(Xt).multiplyScalar(U).floor(),Ft=le;if(et!==0&&(J=B),bt.bindFramebuffer(V.FRAMEBUFFER,J)&&bt.drawBuffers(A,J),bt.viewport(ut),bt.scissor(yt),bt.setScissorTest(Ft),Q){let At=Zt.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,At.__webglTexture,et)}else if(Tt){let At=z;for(let Lt=0;Lt<A.textures.length;Lt++){let Ht=Zt.get(A.textures[Lt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Lt,Ht.__webglTexture,et,At)}}else if(A!==null&&et!==0){let At=Zt.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,At.__webglTexture,et)}K=-1};function gs(A){let z=Zt.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=ke.textureFormatReadable(A.format),z.__typeReadable=ke.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,et,J,Q,Tt,Ot,At=0){if(!(A&&A.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Zt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(Lt=Lt[Ot],Array.isArray(Lt)&&(Lt=Lt[0])),Lt){bt.bindFramebuffer(V.FRAMEBUFFER,Lt);try{let Ht=A.textures[At],ie=Ht.format,pe=Ht.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+At);let Nt=gs(Ht);if(Nt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-J&&et>=0&&et<=A.height-Q&&V.readPixels(z,et,J,Q,xt.convert(ie),xt.convert(pe),Tt)}finally{let Ht=nt!==null?Zt.get(nt).__webglFramebuffer:null;bt.bindFramebuffer(V.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,z,et,J,Q,Tt,Ot,At=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Zt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(Lt=Lt[Ot],Array.isArray(Lt)&&(Lt=Lt[0])),Lt)if(z>=0&&z<=A.width-J&&et>=0&&et<=A.height-Q){bt.bindFramebuffer(V.FRAMEBUFFER,Lt);let Ht=A.textures[At],ie=Ht.format,pe=Ht.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+At);let Nt=gs(Ht);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,xe),V.bufferData(V.PIXEL_PACK_BUFFER,Tt.byteLength,V.STREAM_READ),V.readPixels(z,et,J,Q,xt.convert(ie),xt.convert(pe),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let We=nt!==null?Zt.get(nt).__webglFramebuffer:null;bt.bindFramebuffer(V.FRAMEBUFFER,We);let Pe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Sd(V,Pe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,xe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Tt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(xe),V.deleteSync(Pe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,et=0){let J=Math.pow(2,-et),Q=Math.floor(A.image.width*J),Tt=Math.floor(A.image.height*J),Ot=z!==null?z.x:0,At=z!==null?z.y:0;qt.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,et,0,0,Ot,At,Q,Tt),bt.unbindTexture()},this.copyTextureToTexture=function(A,z,et=null,J=null,Q=0,Tt=0){let Ot,At,Lt,Ht,ie,pe,Nt,xe,We,Pe=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(et!==null)Ot=et.max.x-et.min.x,At=et.max.y-et.min.y,Lt=et.isBox3?et.max.z-et.min.z:1,Ht=et.min.x,ie=et.min.y,pe=et.isBox3?et.min.z:0;else{let Re=Math.pow(2,-Q);Ot=Math.floor(Pe.width*Re),At=Math.floor(Pe.height*Re),A.isDataArrayTexture?Lt=Pe.depth:A.isData3DTexture?Lt=Math.floor(Pe.depth*Re):Lt=1,Ht=0,ie=0,pe=0}J!==null?(Nt=J.x,xe=J.y,We=J.z):(Nt=0,xe=0,We=0);let Ae=xt.convert(z.format),sn=xt.convert(z.type),Bt;z.isData3DTexture?(qt.setTexture3D(z,0),Bt=V.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(qt.setTexture2DArray(z,0),Bt=V.TEXTURE_2D_ARRAY):(qt.setTexture2D(z,0),Bt=V.TEXTURE_2D),bt.activeTexture(V.TEXTURE0),bt.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),bt.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),bt.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);let wn=bt.getParameter(V.UNPACK_ROW_LENGTH),q=bt.getParameter(V.UNPACK_IMAGE_HEIGHT),Rt=bt.getParameter(V.UNPACK_SKIP_PIXELS),zt=bt.getParameter(V.UNPACK_SKIP_ROWS),qe=bt.getParameter(V.UNPACK_SKIP_IMAGES);bt.pixelStorei(V.UNPACK_ROW_LENGTH,Pe.width),bt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Pe.height),bt.pixelStorei(V.UNPACK_SKIP_PIXELS,Ht),bt.pixelStorei(V.UNPACK_SKIP_ROWS,ie),bt.pixelStorei(V.UNPACK_SKIP_IMAGES,pe);let En=A.isDataArrayTexture||A.isData3DTexture,si=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let Re=Zt.get(A),Dn=Zt.get(z),hi=Zt.get(Re.__renderTarget),rn=Zt.get(Dn.__renderTarget);bt.bindFramebuffer(V.READ_FRAMEBUFFER,hi.__webglFramebuffer),bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,rn.__webglFramebuffer);for(let Tn=0;Tn<Lt;Tn++)En&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Zt.get(A).__webglTexture,Q,pe+Tn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Zt.get(z).__webglTexture,Tt,We+Tn)),V.blitFramebuffer(Ht,ie,Ht+Ot,ie+At,Nt,xe,Nt+Ot,xe+At,V.DEPTH_BUFFER_BIT,V.NEAREST);bt.bindFramebuffer(V.READ_FRAMEBUFFER,null),bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||Zt.has(A)){let Re=Zt.get(A),Dn=Zt.get(z);bt.bindFramebuffer(V.READ_FRAMEBUFFER,I),bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,H);for(let hi=0;hi<Lt;hi++)En?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Re.__webglTexture,Q,pe+hi):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Re.__webglTexture,Q),si?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Dn.__webglTexture,Tt,We+hi):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Dn.__webglTexture,Tt),Q!==0?V.blitFramebuffer(Ht,ie,Ht+Ot,ie+At,Nt,xe,Nt+Ot,xe+At,V.COLOR_BUFFER_BIT,V.NEAREST):si?V.copyTexSubImage3D(Bt,Tt,Nt,xe,We+hi,Ht,ie,Ot,At):V.copyTexSubImage2D(Bt,Tt,Nt,xe,Ht,ie,Ot,At);bt.bindFramebuffer(V.READ_FRAMEBUFFER,null),bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else si?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Bt,Tt,Nt,xe,We,Ot,At,Lt,Ae,sn,Pe.data):z.isCompressedArrayTexture?V.compressedTexSubImage3D(Bt,Tt,Nt,xe,We,Ot,At,Lt,Ae,Pe.data):V.texSubImage3D(Bt,Tt,Nt,xe,We,Ot,At,Lt,Ae,sn,Pe):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Tt,Nt,xe,Ot,At,Ae,sn,Pe.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Tt,Nt,xe,Pe.width,Pe.height,Ae,Pe.data):V.texSubImage2D(V.TEXTURE_2D,Tt,Nt,xe,Ot,At,Ae,sn,Pe);bt.pixelStorei(V.UNPACK_ROW_LENGTH,wn),bt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,q),bt.pixelStorei(V.UNPACK_SKIP_PIXELS,Rt),bt.pixelStorei(V.UNPACK_SKIP_ROWS,zt),bt.pixelStorei(V.UNPACK_SKIP_IMAGES,qe),Tt===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&V.generateMipmap(Bt),bt.unbindTexture()},this.initRenderTarget=function(A){Zt.get(A).__webglFramebuffer===void 0&&qt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?qt.setTextureCube(A,0):A.isData3DTexture?qt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?qt.setTexture2DArray(A,0):qt.setTexture2D(A,0),bt.unbindTexture()},this.resetState=function(){Y=0,Z=0,nt=null,bt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};var h={scene:null,camera:null,renderer:null,world:null,player:null,audio:null,ui:null,story:null,post:null,time:0,dt:0,paused:!0,started:!1,flags:{},inv:new Set,objects:{},settings:{sens:1,scale:.75,grain:1,volume:.9,fov:70,bright:1,invertY:!1,keys:null},phone:{battery:31,charging:!1,network:!0,time:"01:43",dropped:!1,mapUnlocked:!1}},Kl=()=>{if(/[?&]touch\b/.test(location.search))return!0;if(/[?&]desktop\b/.test(location.search))return!1;try{return matchMedia("(pointer: coarse)").matches&&navigator.maxTouchPoints>0}catch{return!1}};function df(){let s=null;try{s=localStorage.getItem("lockruf_settings")}catch{}try{let t=JSON.parse(s||"{}");Object.assign(h.settings,t),t.v!==2&&(h.settings.v=2,h.settings.keys=null)}catch{}!s&&Kl()&&Object.assign(h.settings,{scale:.6,quality:"low",grain:.7,sens:1.2})}function Wi(){try{localStorage.setItem("lockruf_settings",JSON.stringify(h.settings))}catch{}}function ff(s){try{let t=+(localStorage.getItem("lockruf_progress")||0);s>t&&localStorage.setItem("lockruf_progress",String(s)),localStorage.setItem("lockruf_last",String(s))}catch{}}function pf(){try{return{max:+(localStorage.getItem("lockruf_progress")||0),last:+(localStorage.getItem("lockruf_last")||0)}}catch{return{max:0,last:0}}}function Ie(s=1){let t=s*2654435761>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}function Xi(s=1){let t=Ie(s),e=256,n=new Float32Array(e*e);for(let r=0;r<n.length;r++)n[r]=t();let i=(r,a)=>n[(a%e+e)%e*e+(r%e+e)%e];return function(a,o,l=0){let c=Math.floor(a),u=Math.floor(o),f=a-c,d=o-u,p=c+1,m=u+1;if(l){let _=w=>Math.floor((w%l+l)%l);c=_(c),p=_(p),u=_(u),m=_(m)}let x=f*f*(3-2*f),g=d*d*(3-2*d),y=i(c,u),b=i(p,u),E=i(c,m),S=i(p,m);return y+(b-y)*x+(E-y)*g+(y-b-E+S)*x*g}}function we(s,t,e,n=4,i=0){let r=0,a=.5,o=1,l=0;for(let c=0;c<n;c++)r+=a*s(t*o,e*o,i?i*o:0),l+=a,a*=.5,o*=2;return r/l}var Ce=(s,t,e)=>Math.max(t,Math.min(e,s)),hy=(s,t,e)=>s+(t-s)*e,kr=s=>s*s*(3-2*s),Un=(s,t,e,n)=>hy(s,t,1-Math.exp(-e*n));function Os(s,t,e,n,i,r){let a=i-e,o=r-n,l=a*a+o*o||1e-9,c=((s-e)*a+(t-n)*o)/l;c=Ce(c,0,1);let u=e+a*c,f=n+o*c;return{d:Math.hypot(s-u,t-f),cx:u,cz:f,t:c}}function qi(s,t){let e=t-s;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}var li=4,Jl=class{constructor(){this.colliders=[],this.grid=new Map,this.floors=[],this.regions=[],this.interacts=[],this.zones=new Map,this.lamps=[],this.surfaces=[],this.updaters=[],this.terrain=null,this.fogZones=[],this.tag="",this.nextId=1}_meta(t,e){return t.id=this.nextId++,t.label||(t.label=e&&e.label||this.tag||""),t}_cells(t,e,n,i){let r=[];for(let a=Math.floor(t/li);a<=Math.floor(e/li);a++)for(let o=Math.floor(n/li);o<=Math.floor(i/li);o++)r.push(a+","+o);return r}_insert(t){let e=t.type==="box"?[t.minX,t.maxX,t.minZ,t.maxZ]:[t.x-t.r,t.x+t.r,t.z-t.r,t.z+t.r];t._cells=this._cells(...e);for(let n of t._cells)this.grid.has(n)||this.grid.set(n,[]),this.grid.get(n).push(t)}addBox(t,e,n,i,r=-50,a=50,o={}){let l=this._meta({type:"box",minX:t,maxX:e,minZ:n,maxZ:i,minY:r,maxY:a,enabled:!0,...o},o);return this.colliders.push(l),this._insert(l),l}addOBB(t,e,n,i,r,a=-50,o=50,l={}){let c=this._meta({type:"obb",cx:t,cz:e,hw:n,hd:i,rot:r,cos:Math.cos(r),sin:Math.sin(r),minY:a,maxY:o,enabled:!0,...l},l),u=Math.hypot(n,i);c.minX=t-u,c.maxX=t+u,c.minZ=e-u,c.maxZ=e+u,c._cells=this._cells(c.minX,c.maxX,c.minZ,c.maxZ);for(let f of c._cells)this.grid.has(f)||this.grid.set(f,[]),this.grid.get(f).push(c);return this.colliders.push(c),c}addCircle(t,e,n,i=-50,r=50,a={}){let o=this._meta({type:"circle",x:t,z:e,r:n,minY:i,maxY:r,enabled:!0,...a},a);return this.colliders.push(o),this._insert(o),o}nearby(t,e){let n=new Set;for(let i=Math.floor((t-1)/li);i<=Math.floor((t+1)/li);i++)for(let r=Math.floor((e-1)/li);r<=Math.floor((e+1)/li);r++){let a=this.grid.get(i+","+r);if(a)for(let o of a)n.add(o)}return n}resolve(t,e,n,i,r=null){for(let a=0;a<3;a++){let o=!1;for(let l of this.nearby(t.x,t.z)){if(!l.enabled||l.maxY<=n+.05||l.minY>=i)continue;let c=t.x,u=t.z;if(l.type==="circle"){let f=t.x-l.x,d=t.z-l.z,p=Math.hypot(f,d),m=e+l.r;p<m&&p>1e-6&&(t.x=l.x+f/p*m,t.z=l.z+d/p*m,o=!0)}else if(l.type==="box"){let f=Ce(t.x,l.minX,l.maxX),d=Ce(t.z,l.minZ,l.maxZ),p=t.x-f,m=t.z-d,x=Math.hypot(p,m);if(x<e){if(x>1e-6)t.x=f+p/x*e,t.z=d+m/x*e;else{let g=[t.x-l.minX,l.maxX-t.x,t.z-l.minZ,l.maxZ-t.z],y=g.indexOf(Math.min(...g));y===0?t.x=l.minX-e:y===1?t.x=l.maxX+e:y===2?t.z=l.minZ-e:t.z=l.maxZ+e}o=!0}}else if(l.type==="obb"){let f=t.x-l.cx,d=t.z-l.cz,p=f*l.cos+d*l.sin,m=-f*l.sin+d*l.cos,x=Ce(p,-l.hw,l.hw),g=Ce(m,-l.hd,l.hd),y=p-x,b=m-g,E=Math.hypot(y,b);if(E<e){let S,_;if(E>1e-6)S=x+y/E*e,_=g+b/E*e;else{let w=[p+l.hw,l.hw-p,m+l.hd,l.hd-m],v=w.indexOf(Math.min(...w));S=p,_=m,v===0?S=-l.hw-e:v===1?S=l.hw+e:v===2?_=-l.hd-e:_=l.hd+e}t.x=l.cx+S*l.cos-_*l.sin,t.z=l.cz+S*l.sin+_*l.cos,o=!0}}r&&(t.x!==c||t.z!==u)&&!r.includes(l)&&r.push(l)}if(!o)break}}segmentBlocked(t,e,n,i,r,a=null){let o=Math.min(t,n)-.5,l=Math.max(t,n)+.5,c=Math.min(e,i)-.5,u=Math.max(e,i)+.5,f=new Set;for(let d=Math.floor(o/li);d<=Math.floor(l/li);d++)for(let p=Math.floor(c/li);p<=Math.floor(u/li);p++){let m=this.grid.get(d+","+p);if(m)for(let x of m){if(f.has(x)||(f.add(x),!x.enabled||x===a||x.noSight||r<x.minY||r>x.maxY))continue;if(x.type==="circle"){if(Os(x.x,x.z,t,e,n,i).d<x.r*.8)return x;continue}let g=t,y=e,b=n,E=i,S,_,w=0,v=0;if(x.type==="obb"){let B=t-x.cx,I=e-x.cz,H=n-x.cx,Y=i-x.cz;g=B*x.cos+I*x.sin,y=-B*x.sin+I*x.cos,b=H*x.cos+Y*x.sin,E=-H*x.sin+Y*x.cos,S=x.hw,_=x.hd}else S=(x.maxX-x.minX)/2,_=(x.maxZ-x.minZ)/2,w=(x.minX+x.maxX)/2,v=(x.minZ+x.maxZ)/2;let M=0,R=1,C=b-g,k=E-y,D=(B,I,H,Y)=>{if(Math.abs(I)<1e-9)return B>=H&&B<=Y;let Z=(H-B)/I,nt=(Y-B)/I;return Z>nt&&([Z,nt]=[nt,Z]),M=Math.max(M,Z),R=Math.min(R,nt),M<=R};if(D(g,C,w-S,w+S)&&D(y,k,v-_,v+_))return x}}return null}addFloor(t,e,n,i,r,a={}){let o={minX:t,maxX:e,minZ:n,maxZ:i,h:typeof r=="number"?()=>r:r,enabled:!0,...a};return this.floors.push(o),o}groundAt(t,e,n,i=.5){let r=-1/0,a=this.terrainHeight(t,e);a<=n+i&&!this.noTerrainAt(t,e,n)&&(r=a);for(let o of this.floors){if(!o.enabled||t<o.minX||t>o.maxX||e<o.minZ||e>o.maxZ||o.hole&&o.hole(t,e))continue;let l=o.h(t,e);l<=n+i&&l>r&&(r=l)}return r}noTerrainAt(t,e,n){for(let i of this.underground||[])if(t>i.minX&&t<i.maxX&&e>i.minZ&&e<i.maxZ&&n<i.top)return!0;return!1}terrainHeight(t,e){return this.terrain?this.terrain.height(t,e):0}addRegionBox(t,e,n,i,r={}){let a=this._rmeta({type:"box",minX:t,maxX:e,minZ:n,maxZ:i,enabled:!0,...r});return this.regions.push(a),a}addRegionPath(t,e,n={}){let i=this._rmeta({type:"path",points:t,radius:e,enabled:!0,...n});return this.regions.push(i),i}addRegionCircle(t,e,n,i={}){let r=this._rmeta({type:"circle",x:t,z:e,radius:n,enabled:!0,...i});return this.regions.push(r),r}_rmeta(t){return t.label||(t.label=t.id||this.tag||"Region"),t}regionContains(t,e,n,i=0){if(t.type==="box")return e>=t.minX+i&&e<=t.maxX-i&&n>=t.minZ+i&&n<=t.maxZ-i;if(t.type==="circle")return Math.hypot(e-t.x,n-t.z)<=t.radius-i;let r=t.points;for(let a=0;a<r.length-1;a++)if(Os(e,n,r[a][0],r[a][1],r[a+1][0],r[a+1][1]).d<=t.radius-i)return!0;return!1}constrain(t,e=.3,n=!1){let i=1/0,r=t.x,a=t.z,o=null;for(let l of this.regions)if(l.enabled&&!(l.minY!==void 0&&(t.y<l.minY||t.y>l.maxY)))if(l.type==="box"){if(t.x>=l.minX+e&&t.x<=l.maxX-e&&t.z>=l.minZ+e&&t.z<=l.maxZ-e)return null;let u=Ce(t.x,l.minX+e,l.maxX-e),f=Ce(t.z,l.minZ+e,l.maxZ-e),d=Math.hypot(t.x-u,t.z-f);d<i&&(i=d,r=u,a=f,o=l)}else if(l.type==="circle"){let c=Math.hypot(t.x-l.x,t.z-l.z),u=l.radius-e;if(c<=u)return null;let f=u/c,d=l.x+(t.x-l.x)*f,p=l.z+(t.z-l.z)*f;c-u<i&&(i=c-u,r=d,a=p,o=l)}else{let c=l.points,u=l.radius-e;for(let f=0;f<c.length-1;f++){let d=Os(t.x,t.z,c[f][0],c[f][1],c[f+1][0],c[f+1][1]);if(d.d<=u)return null;if(d.d-u<i){i=d.d-u;let p=u/d.d;r=d.cx+(t.x-d.cx)*p,a=d.cz+(t.z-d.cz)*p,o=l}}}if(i<1/0){let l=t.x,c=t.z;if(t.x=r,t.z=a,n&&(Math.abs(l-r)>1e-5||Math.abs(c-a)>1e-5)){let u=this.regions.find(f=>!f.enabled&&this.regionContains(f,l,c,e));return{region:!0,label:"Rand von \u201E"+(o.label||o.id||"Region")+"\u201C",disabled:u?u.label||u.id:null,r:o}}}return null}addInteract(t){let e={radius:.35,range:2.3,hold:0,enabled:()=>!0,once:!0,used:!1,...t};return Array.isArray(e.pos)&&(e.pos=new L(...e.pos)),this.interacts.push(e),e}getInteract(t){return this.interacts.find(e=>e.id===t)}findInteract(t,e){let n=null,i=1/0,r=new L;for(let a of this.interacts){if(a.once&&a.used||!a.enabled())continue;r.copy(a.pos).sub(t);let o=r.length();if(o>a.range)continue;r.divideScalar(o||1);let l=Math.acos(Ce(r.dot(e),-1,1)),c=Math.atan2(a.radius,o)+.06;if(l>c)continue;let u=l/c+o*.05;u<i&&(i=u,n=a)}return n}addZone(t,e){return this.zones.set(t,e),e}inZone(t,e){let n=this.zones.get(t);return n?n.r!==void 0?Math.hypot(e.x-n.x,e.z-n.z)<n.r&&(n.y===void 0||Math.abs(e.y-n.y)<2.5):e.x>n.minX&&e.x<n.maxX&&e.z>n.minZ&&e.z<n.maxZ&&(n.minY===void 0||e.y>n.minY&&e.y<n.maxY):!1}addSurface(t,e,n,i,r,a=-50,o=50){this.surfaces.push({minX:t,maxX:e,minZ:n,maxZ:i,type:r,minY:a,maxY:o})}surfaceAt(t,e,n){for(let i=this.surfaces.length-1;i>=0;i--){let r=this.surfaces[i];if(t>r.minX&&t<r.maxX&&n>r.minZ&&n<r.maxZ&&e>r.minY&&e<r.maxY)return r.type}return"leaves"}initLightPool(t,e=8){this.pool=[];for(let n=0;n<e;n++){let i=new Cs(16777215,0,10,2);t.add(i),this.pool.push(i)}}addLamp(t){let e={color:16762250,intensity:20,distance:14,enabled:!0,flicker:null,level:1,...t};return Array.isArray(e.pos)&&(e.pos=new L(...e.pos)),e.colorObj=new $t(e.color),this.lamps.push(e),e}updateLights(t,e){if(!this.pool)return;let n=[];for(let i of this.lamps){if(!i.enabled||i.level<=.001)continue;let r=i.pos.distanceTo(t),a=i.visibleDist||45;r>a||n.push([r,i,a])}n.sort((i,r)=>i[0]-r[0]);for(let i=0;i<this.pool.length;i++){let r=this.pool[i],a=n[i];if(!a){r.intensity=0;continue}let[o,l,c]=a,u=Ce((c-o)/10,0,1)*l.level;l.flicker&&(u*=l.flicker(e)),r.position.copy(l.pos),r.color.copy(l.colorObj),r.distance=l.distance,r.intensity=l.intensity*u,l.onLevel&&l.onLevel(u)}}update(t,e,n=!1){for(let i of this.updaters)n&&i.visual||i(t,e)}};var Bs={forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",sprint:"ShiftLeft",crouch:"KeyC",jump:"Space",use:"KeyE",flash:"KeyF",phone:"Tab",reply1:"Digit1",reply2:"Digit2",app:"KeyQ"},yf={forward:"Vorw\xE4rts",back:"R\xFCckw\xE4rts",left:"Links",right:"Rechts",sprint:"Rennen",crouch:"Ducken",jump:"Springen",use:"Benutzen",flash:"Taschenlampe",phone:"Handy",reply1:"Antwort 1",reply2:"Antwort 2",app:"Handy: Chat/Karte"},vf=["forward","back","left","right","sprint","crouch","jump","use","flash","phone","reply1","reply2","app","confirm"],ka=Object.fromEntries(vf.map((s,t)=>[s,1<<t])),mf={forward:"ArrowUp",back:"ArrowDown",left:"ArrowLeft",right:"ArrowRight"},gf={Space:"Leertaste",ShiftLeft:"Shift",ShiftRight:"Shift rechts",ControlLeft:"Strg",ControlRight:"Strg rechts",AltLeft:"Alt",Tab:"Tab",Enter:"Enter",CapsLock:"Feststell",Backspace:"R\xFCcktaste",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Mouse0:"Linke Maus",Mouse1:"Mittlere Maus",Mouse2:"Rechte Maus",Mouse3:"Maus 4",Mouse4:"Maus 5"};function Zh(s){return s?gf[s]?gf[s]:s.startsWith("Key")?s.slice(3):s.startsWith("Digit")?s.slice(5):s.startsWith("Numpad")?"Num "+s.slice(6):s:"\u2013"}var xf={use:"\u270B",jump:"\u2912",crouch:"\u2913",flash:"\u2600",phone:"\u25AF",reply1:"1",reply2:"2",app:"\u21C4",sprint:"Stick ganz vor",forward:"Stick",back:"Stick",left:"Stick",right:"Stick",confirm:"\u270B"},on=s=>{if(h.touchOn&&xf[s])return xf[s];let t=(h.settings.keys||Bs)[s];return s==="sprint"&&(t==="ShiftLeft"||t==="ShiftRight")?"Shift":Zh(t)},uy=s=>{let t=s.target;return!t||!t.tagName?!1:t.isContentEditable?!0:t.tagName==="TEXTAREA"||t.tagName==="INPUT"&&!["range","checkbox","button"].includes(t.type)},Ut={keys:new Set,pressed:new Set,mx:0,my:0,wheel:0,locked:!1,canvas:null,onLockChange:null,onLockFail:null,st:{held:0,hit:0,lx:0,ly:0,ax:0,az:0},ax:0,az:0,init(s){this.canvas=s,window.addEventListener("keydown",t=>{if(this.capture){t.preventDefault();let e=this.capture;this.capture=null,e(t.code);return}uy(t)||((["Tab","Space","ArrowUp","ArrowDown","F5","F1","F3","F7"].includes(t.code)||t.ctrlKey||t.altKey)&&t.preventDefault(),this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code))}),window.addEventListener("keyup",t=>{this.keys.delete(t.code)}),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("mousemove",t=>{this.locked&&(Math.abs(t.movementX)>300||Math.abs(t.movementY)>300||(this.mx+=t.movementX,this.my+=t.movementY))}),document.addEventListener("mousedown",t=>{if(this.capture&&t.button!==0){let e=this.capture;this.capture=null,e("Mouse"+t.button);return}this.locked&&this.pressed.add("Mouse"+t.button),this.keys.add("Mouse"+t.button)}),document.addEventListener("wheel",t=>{this.locked&&(this.wheel+=Math.sign(t.deltaY))},{passive:!0}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("mouseup",t=>{this.keys.delete("Mouse"+t.button)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.locked?this.lastLock=performance.now():this.lastUnlock=performance.now(),this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("pointerlockerror",()=>{!this.locked&&this.onLockFail&&this.onLockFail()})},lock(){if(this.locked)return Promise.resolve();if(!this.canvas)return Promise.reject(new Error("kein Canvas"));let s=t=>{try{let e=t?this.canvas.requestPointerLock(t):this.canvas.requestPointerLock();return e&&typeof e.then=="function"?e:new Promise((n,i)=>{let r=performance.now(),a=()=>{this.locked?n():performance.now()-r>600?i(new Error("pointer lock timeout")):requestAnimationFrame(a)};a()})}catch(e){return Promise.reject(e)}};return s({unadjustedMovement:!0}).catch(t=>{if(t&&/unadjusted|NotSupported/i.test(String(t.name||t.message)))return s();throw t}).then(()=>{this.lockFailed=!1}).catch(t=>{throw this.lockFailed=!0,this.onLockFail&&this.onLockFail(t),t})},unlock(){document.pointerLockElement&&document.exitPointerLock()},key(s){return(h.settings.keys||Bs)[s]||Bs[s]},_codesFor(s){let t=this.key(s),e=[t];return s==="sprint"&&(t==="ShiftLeft"||t==="ShiftRight")&&e.push(t==="ShiftLeft"?"ShiftRight":"ShiftLeft"),mf[s]&&e.push(mf[s]),s==="confirm"&&e.push("Enter","Escape","NumpadEnter","Touch_use"),e.push("Touch_"+s),e},sample(){let s=0,t=0;for(let i of vf)for(let r of this._codesFor(i))this.keys.has(r)&&(s|=ka[i]),this.pressed.has(r)&&(t|=ka[i]);let e=h.settings,n=.0022*(e.sens||1);return Math.hypot(this.ax,this.az)>.9&&this.az<-.45&&(s|=ka.sprint),this.st={held:s,hit:t,lx:this.mx*n,ly:this.my*n*(e.invertY?-1:1),ax:this.ax,az:this.az},this.st},apply(s){this.st={ax:0,az:0,...s}},consume(){this.st={held:this.st.held,hit:0,lx:0,ly:0,ax:this.st.ax,az:this.st.az}},act(s){return(this.st.held&ka[s])!==0},actHit(s){return(this.st.hit&ka[s])!==0},down(s){return this.keys.has(s)},hit(s){return this.pressed.has(s)},endFrame(){this.pressed.clear(),this.mx=0,this.my=0,this.wheel=0}};var ft={},ni=Xi(7),yi=Xi(31);function me(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function ge(s,{repeat:t=[1,1],srgb:e=!0,wrap:n=!0}={}){let i=new pn(s);return n&&(i.wrapS=i.wrapT=Mi),i.repeat.set(t[0],t[1]),e&&(i.colorSpace=mn),i.anisotropy=8,i.needsUpdate=!0,i}function gn(s,t){let e=s.getContext("2d"),n=e.createImageData(s.width,s.height),i=n.data,r=0;for(let a=0;a<s.height;a++)for(let o=0;o<s.width;o++){let l=t(o,a);i[r++]=Ce(l[0],0,255),i[r++]=Ce(l[1],0,255),i[r++]=Ce(l[2],0,255),i[r++]=l[3]===void 0?255:l[3]}return e.putImageData(n,0,0),e}function Nr(s,t,e,n,i){let r=s.width,a=s.height;for(let o of[0,-r,r])for(let l of[0,-a,a]){let c=t+o,u=e+l;c+n<0||c-n>r||u+n<0||u-n>a||i(c,u)}}function jl(s,t,e){s.beginPath(),s.moveTo(-t,0),s.quadraticCurveTo(0,-e,t,0),s.quadraticCurveTo(0,e,-t,0),s.closePath()}var Na=[[92,58,32],[120,74,38],[138,88,40],[105,66,36],[74,48,30],[150,98,46],[96,52,28],[128,64,30],[82,70,40],[60,44,30],[112,90,52],[140,70,34]];function Ua(s,t=1){return`rgb(${s[0]*t|0},${s[1]*t|0},${s[2]*t|0})`}function Ql(){if(ft.leaves)return ft.leaves;let s=me(1024,1024),t=gn(s,(n,i)=>{let a=28+we(ni,n/64,i/64,5,16)*40;return[a*1.15,a*.85,a*.6]}),e=Ie(11);t.lineCap="round";for(let n=0;n<160;n++){let i=e()*1024,r=e()*1024,a=e()*Math.PI*2,o=20+e()*60;Nr(s,i,r,o,(l,c)=>{t.strokeStyle=`rgba(${40+e()*20},${30+e()*12},20,0.9)`,t.lineWidth=1+e()*2.5,t.beginPath(),t.moveTo(l,c),t.lineTo(l+Math.cos(a)*o,c+Math.sin(a)*o),t.stroke()})}for(let n=0;n<3;n++){let i=[2600,2200,1500][n];for(let r=0;r<i;r++){let a=e()*1024,o=e()*1024,l=7+e()*13,c=l*(.35+e()*.3),u=Na[e()*Na.length|0],f=(.55+e()*.55)*(.75+n*.15),d=e()*Math.PI*2;Nr(s,a,o,l,(p,m)=>{t.save(),t.translate(p,m),t.rotate(d),t.fillStyle="rgba(10,6,4,0.35)",t.save(),t.translate(2,2),jl(t,l,c),t.fill(),t.restore(),t.fillStyle=Ua(u,f),jl(t,l,c),t.fill(),t.strokeStyle=Ua(u,f*.6),t.lineWidth=.8,t.beginPath(),t.moveTo(-l,0),t.lineTo(l,0),t.stroke(),t.restore()})}}return ft.leaves=ge(s)}function _f(){if(ft.gravel)return ft.gravel;let s=me(512,512),t=gn(s,(n,i)=>{let a=52+we(yi,n/40,i/40,4,12.8)*40;return[a*1.05,a*.95,a*.8]}),e=Ie(5);for(let n=0;n<2200;n++){let i=e()*512,r=e()*512,a=1+e()*3.5,o=60+e()*70;Nr(s,i,r,a,(l,c)=>{t.fillStyle=`rgb(${o+6},${o},${o-8})`,t.beginPath(),t.ellipse(l,c,a,a*(.6+e()*.4),e()*3,0,7),t.fill(),t.fillStyle="rgba(0,0,0,0.3)",t.beginPath(),t.ellipse(l+1,c+1,a,a*.6,0,0,3.2),t.fill()})}for(let n=0;n<220;n++){let i=e()*512,r=e()*512,a=5+e()*7,o=Na[e()*Na.length|0];Nr(s,i,r,a,(l,c)=>{t.save(),t.translate(l,c),t.rotate(e()*7),t.fillStyle=Ua(o,.7),jl(t,a,a*.45),t.fill(),t.restore()})}return ft.gravel=ge(s)}function Zi(s="oak"){let t="bark_"+s;if(ft[t])return ft[t];let e=me(256,512),n=Xi(s==="pine"?77:s==="beech"?55:13);return gn(e,(i,r)=>{if(s==="beech"){let u=we(n,i/24,r/24,4,10.67),f=Math.abs(n(i/30,r/6,8.53)-.5)<.04?.6:1,d=(52+u*30)*f;return[d*.95,d*.97,d*.93]}if(s==="pine"){let u=we(n,i/24,r/40,3,10.67),f=Math.abs(n(i/18,r/30,14.2)-.5)<.06?.4:1,d=(60+u*60)*f;return[d*1.2,d*.82,d*.62]}let a=we(n,i/30,r/90,3,8.53)*3.2,o=Math.pow(Math.abs(Math.sin(i/256*Math.PI*12+a)),.5),l=we(n,i/14,r/26,4,18.29),c=22+o*22+l*34;return[c*1,c*.92,c*.82]}),ft[t]=ge(e)}function hs(s="old"){let t="planks_"+s;if(ft[t])return ft[t];let e=me(512,512),n=Ie(s==="old"?3:s==="floor"?9:21),i=8,r=512/i,a=[];for(let l=0;l<i;l++)a.push(.75+n()*.4);let o=gn(e,(l,c)=>{let u=Math.floor(c/r),f=c-u*r,d=Math.sin((c*.9+we(ni,l/60,c/8+u*3,3,8.53)*30)*.8)*.5+.5,p=we(yi,l/30,c/30,3,17.07),m;s==="old"?m=[92,82,70]:s==="floor"?m=[118,82,52]:m=[120,90,62];let x=a[u]*(.82+d*.18)*(.85+p*.3),g=f<3||f>r-2?.35:1;return[m[0]*x*g,m[1]*x*g,m[2]*x*g]});for(let l=0;l<i;l++)for(let c of[20,492])o.fillStyle="rgba(30,25,22,0.9)",o.beginPath(),o.arc(c,l*r+r*.3,2.5,0,7),o.fill(),o.beginPath(),o.arc(c,l*r+r*.7,2.5,0,7),o.fill();if(s==="old")for(let l=0;l<30;l++)o.fillStyle=`rgba(20,24,18,${.1+n()*.2})`,o.beginPath(),o.ellipse(n()*512,n()*512,10+n()*40,6+n()*20,n()*3,0,7),o.fill();return ft[t]=ge(e)}function tc(){if(ft.concrete)return ft.concrete;let s=me(512,512),t=gn(s,(n,i)=>{let r=we(ni,n/50,i/50,5,10.24),a=we(yi,n/120,i/200,3,4.27),o=70+r*45-Math.max(0,a-.55)*120;return[o*.98,o,o*.98]}),e=Ie(8);t.strokeStyle="rgba(25,25,25,0.6)",t.lineWidth=1;for(let n=0;n<6;n++){let i=e()*512,r=e()*512;t.beginPath(),t.moveTo(i,r);for(let a=0;a<12;a++)i+=(e()-.5)*30,r+=e()*18,t.lineTo(i,r);t.stroke()}for(let n=0;n<8;n++){let i=e()*512,r=e()*512,a=10+e()*30,o=200+e()*250;for(let l of[0,-512]){let c=t.createLinearGradient(0,r+l,0,r+l+o);c.addColorStop(0,"rgba(20,22,20,0.22)"),c.addColorStop(1,"rgba(20,22,20,0)"),t.fillStyle=c,t.fillRect(i,r+l,a,o)}}return ft.concrete=ge(s)}function bf(){if(ft.brick)return ft.brick;let s=me(512,512),t=Ie(4),e=64,n=32,i={};return gn(s,(r,a)=>{let o=Math.floor(a/n),l=o%2?e/2:0,c=Math.floor((r+l)/e),u=o*100+c%8;i[u]===void 0&&(i[u]=.7+t()*.45);let f=(r+l)%e,d=a%n,p=f<3||d<3,m=we(ni,r/16,a/16,3,32),x=we(yi,r/100,a/140,3,5.12);if(p){let y=58+m*24;return[y,y*.97,y*.92]}let g=i[u]*(.8+m*.35)*(1-Math.max(0,x-.5)*.9);return[120*g,58*g,42*g]}),ft.brick=ge(s)}function Mf(){if(ft.asphalt)return ft.asphalt;let s=me(512,512),t=Ie(12),e=gn(s,(n,i)=>{let a=30+we(yi,n/8,i/8,3,64)*22+(t()<.02?30:0);return[a,a,a*1.03]});e.strokeStyle="rgba(12,12,12,0.7)",e.lineWidth=1.5;for(let n=0;n<4;n++){let i=t()*512,r=t()*512;e.beginPath(),e.moveTo(i,r);for(let a=0;a<10;a++)i+=(t()-.5)*40,r+=(t()-.5)*40,e.lineTo(i,r);e.stroke()}return ft.asphalt=ge(s)}function Sf(){if(ft.sidewalk)return ft.sidewalk;let s=me(256,256),t=Ie(2);return gn(s,(e,n)=>{let i=e%128<2||n%128<2,r=we(ni,e/10,n/10,3,25.6),a=(Math.floor(e/128)*7+Math.floor(n/128)*13)%5*4,o=i?35:62+r*20+a;return[o,o,o*.98]}),ft.sidewalk=ge(s)}function ec(){if(ft.mulch)return ft.mulch;let s=me(512,512),t=gn(s,(n,i)=>{let r=35+we(ni,n/20,i/20,3,25.6)*30;return[r*1.2,r*.9,r*.65]}),e=Ie(19);for(let n=0;n<4200;n++){let i=e()*512,r=e()*512,a=1.5+e()*4,o=.45+e()*.6;Nr(s,i,r,a,(l,c)=>{t.save(),t.translate(l,c),t.rotate(e()*7),t.fillStyle=`rgb(${72*o|0},${54*o|0},${40*o|0})`,t.fillRect(-a,-1,a*2,2),t.restore()})}return ft.mulch=ge(s)}function wf(){if(ft.sand)return ft.sand;let s=me(256,256);return gn(s,(t,e)=>{let n=78+we(yi,t/6,e/6,3,42.67)*30;return[n*1.05,n*.95,n*.75]}),ft.sand=ge(s)}function Ef(){if(ft.wallpaper)return ft.wallpaper;let s=me(256,256),t=gn(s,(e,n)=>{let r=150+we(ni,e/20,n/20,3,12.8)*20;return[r*.96,r*.95,r*.9]});t.strokeStyle="rgba(120,115,100,0.25)";for(let e=0;e<256;e+=32)t.beginPath(),t.moveTo(e,0),t.lineTo(e,256),t.stroke();return ft.wallpaper=ge(s)}function Yh(s=[150,140,125]){let t="plaster"+s.join();if(ft[t])return ft[t];let e=me(256,256);return gn(e,(n,i)=>{let a=.8+we(yi,n/30,i/30,4,8.53)*.3;return[s[0]*a,s[1]*a,s[2]*a]}),ft[t]=ge(e)}function Ii(s="oak"){let t="card_"+s;if(ft[t])return ft[t];let e=me(256,256),n=e.getContext("2d"),i=Ie(s.length*17+3);n.lineCap="round";let r=[];for(let l=0;l<9;l++){let c=i()*Math.PI*2,u=50+i()*70;r.push([128+Math.cos(c)*u,128+Math.sin(c)*u]),n.strokeStyle="rgb(36,28,22)",n.lineWidth=1.5+i()*2,n.beginPath(),n.moveTo(128,128),n.quadraticCurveTo(128+Math.cos(c+.3)*u*.5,128+Math.sin(c+.3)*u*.5,r[l][0],r[l][1]),n.stroke()}let a=Na;s==="beech"&&(a=[[150,92,40],[168,104,46],[130,76,34],[180,120,56],[120,70,32]]),s==="bush"&&(a=[[70,62,34],[90,70,38],[60,56,30],[104,76,40],[50,48,28]]),s==="hedge"&&(a=[[34,52,30],[40,60,34],[28,44,26],[46,66,38]]);let o=s==="bush"?260:s==="hedge"?420:340;for(let l=0;l<o;l++){let c=r[i()*r.length|0],u=i(),f=128+(c[0]-128)*u+(i()-.5)*40,d=128+(c[1]-128)*u+(i()-.5)*40;if(Math.hypot(f-128,d-128)>122)continue;let p=5+i()*7,m=a[i()*a.length|0],x=.6+i()*.6;n.save(),n.translate(f,d),n.rotate(i()*7),n.fillStyle=Ua(m,x),jl(n,p,p*.5),n.fill(),n.restore()}return ft[t]=ge(e,{wrap:!1})}function Tf(){if(ft.pinecard)return ft.pinecard;let s=me(256,256),t=s.getContext("2d"),e=Ie(99);t.lineCap="round";for(let n=0;n<14;n++){let i=e()*Math.PI*2,r=40+e()*80,a=128+Math.cos(i)*r,o=128+Math.sin(i)*r;t.strokeStyle="rgb(40,30,22)",t.lineWidth=2,t.beginPath(),t.moveTo(128,128),t.lineTo(a,o),t.stroke();for(let l=0;l<60;l++){let c=e(),u=128+(a-128)*c,f=128+(o-128)*c,d=i+(e()-.5)*2.4,p=6+e()*10,m=34+e()*30;t.strokeStyle=`rgb(${m*.6},${m},${m*.55})`,t.lineWidth=1.2,t.beginPath(),t.moveTo(u,f),t.lineTo(u+Math.cos(d)*p,f+Math.sin(d)*p),t.stroke()}}return ft.pinecard=ge(s,{wrap:!1})}function Af(){if(ft.fern)return ft.fern;let s=me(256,256),t=s.getContext("2d"),e=Ie(41);for(let n=0;n<7;n++){let i=-Math.PI/2+(n-3)*.32+(e()-.5)*.2,r=150+e()*80,a=[110+e()*40,70+e()*20,36];for(let o=0;o<1;o+=.04){let l=o*o*.9*(n<3?-1:1),c=128+Math.cos(i+l)*r*o,u=250+Math.sin(i+l)*r*o,f=(1-o)*22+4;t.strokeStyle=Ua(a,.7+e()*.4),t.lineWidth=2,t.beginPath(),t.moveTo(c,u),t.lineTo(c+Math.cos(i+l+1.4)*f,u+Math.sin(i+l+1.4)*f),t.stroke(),t.beginPath(),t.moveTo(c,u),t.lineTo(c+Math.cos(i+l-1.4)*f,u+Math.sin(i+l-1.4)*f),t.stroke()}}return ft.fern=ge(s,{wrap:!1})}function Rf(){if(ft.grass)return ft.grass;let s=me(256,128),t=s.getContext("2d"),e=Ie(61);for(let n=0;n<160;n++){let i=e()*256,r=40+e()*80,a=60+e()*50;t.strokeStyle=`rgb(${a*1.15},${a},${a*.55})`,t.lineWidth=1+e()*1.5,t.beginPath(),t.moveTo(i,128),t.quadraticCurveTo(i+(e()-.5)*20,128-r*.5,i+(e()-.5)*40,128-r),t.stroke()}return ft.grass=ge(s,{wrap:!1})}function Cf(){if(ft.fwall)return ft.fwall;let s=me(1024,512),t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#05060a"),e.addColorStop(.6,"#0b0c10"),e.addColorStop(1,"#07070a"),t.fillStyle=e,t.fillRect(0,0,1024,512);let n=Ie(71),i=[[18,20,26,140],[12,13,17,90],[6,6,8,60]];for(let r of i)for(let a=0;a<r[3];a++){let o=n()*1024,l=4+n()*(r===i[2]?30:16);t.fillStyle=`rgb(${r[0]},${r[1]},${r[2]})`,Nr(s,o,256,l,c=>t.fillRect(c-l/2,0,l,512))}return ft.fwall=ge(s)}function Pf(){if(ft.wire)return ft.wire;let s=me(128,128),t=s.getContext("2d");t.strokeStyle="rgb(120,122,118)",t.lineWidth=2;for(let e=-128;e<256;e+=32)t.beginPath(),t.moveTo(e,0),t.lineTo(e+128,128),t.stroke(),t.beginPath(),t.moveTo(e+128,0),t.lineTo(e,128),t.stroke();return ft.wire=ge(s)}function If(){if(ft.bauzaun)return ft.bauzaun;let s=me(256,256),t=s.getContext("2d");t.strokeStyle="rgb(150,152,150)",t.lineWidth=2;for(let e=0;e<=256;e+=16)t.beginPath(),t.moveTo(e,0),t.lineTo(e,256),t.stroke();for(let e=0;e<=256;e+=32)t.beginPath(),t.moveTo(0,e),t.lineTo(256,e),t.stroke();return t.lineWidth=6,t.strokeRect(3,3,250,250),ft.bauzaun=ge(s,{wrap:!1})}function nc(){if(ft.tape)return ft.tape;let s=me(128,16),t=s.getContext("2d");for(let e=-16;e<144;e+=16)t.fillStyle=e/16%2?"#e8e8e2":"#c41a12",t.beginPath(),t.moveTo(e,16),t.lineTo(e+8,0),t.lineTo(e+24,0),t.lineTo(e+16,16),t.fill();return ft.tape=ge(s)}function Lf(){if(ft.stripes)return ft.stripes;let s=me(256,64),t=s.getContext("2d");for(let e=-64;e<320;e+=64)t.fillStyle="#d01c14",t.beginPath(),t.moveTo(e,64),t.lineTo(e+32,0),t.lineTo(e+64,0),t.lineTo(e+32,64),t.fill(),t.fillStyle="#ecece6",t.beginPath(),t.moveTo(e+32,64),t.lineTo(e+64,0),t.lineTo(e+96,0),t.lineTo(e+64,64),t.fill();return ft.stripes=ge(s)}function Df(s,{w:t=512,h:e=256,bg:n="#e9e4d6",fg:i="#1d1d1d",border:r="#1d1d1d",font:a="bold 48px Arial",align:o="center",worn:l=!0}={}){let c=me(t,e),u=c.getContext("2d");u.fillStyle=n,u.fillRect(0,0,t,e),r&&(u.strokeStyle=r,u.lineWidth=10,u.strokeRect(8,8,t-16,e-16)),u.fillStyle=i,u.font=a,u.textAlign=o,u.textBaseline="middle";let f=e/(s.length+1);if(s.forEach((d,p)=>{typeof d=="object"?(u.save(),u.font=d.font||a,u.fillStyle=d.color||i,u.fillText(d.t,o==="center"?t/2:30,f*(p+1)),u.restore()):u.fillText(d,o==="center"?t/2:30,f*(p+1))}),l){let d=Ie(s.join().length);for(let p=0;p<40;p++)u.fillStyle=`rgba(60,50,30,${d()*.15})`,u.beginPath(),u.arc(d()*t,d()*e,3+d()*25,0,7),u.fill()}return ge(c,{wrap:!1})}function kf(s=0){let t="facade"+s;if(ft[t])return ft[t];let e=me(512,512),n=[[148,132,112],[128,120,116],[150,126,98],[110,108,104]],i=n[s%n.length],r=gn(e,(o,l)=>{let u=.75+we(ni,o/40,l/40,4,12.8)*.3;return[i[0]*u,i[1]*u,i[2]*u]}),a=Ie(s+40);for(let o=0;o<3;o++){r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(0,o*170+160,512,6);for(let l=0;l<3;l++){let c=50+l*160,u=o*170+28;r.fillStyle="rgba(40,36,30,0.9)",r.fillRect(c-6,u-6,92,128);let f=a()<.12;if(r.fillStyle=f?"#6b4a22":"#0d0f13",r.fillRect(c,u,80,116),f){let d=r.createRadialGradient(c+40,u+60,5,c+40,u+60,70);d.addColorStop(0,"rgba(255,190,110,0.8)"),d.addColorStop(1,"rgba(120,70,30,0.2)"),r.fillStyle=d,r.fillRect(c,u,80,116)}else r.fillStyle="rgba(80,90,110,0.12)",r.fillRect(c+4,u+4,30,50);if(r.fillStyle="rgb(200,196,186)",r.fillRect(c+38,u,4,116),r.fillRect(c,u+50,80,4),!f&&a()<.5){r.fillStyle="rgb(70,64,58)";let d=30+a()*80;r.fillRect(c,u,80,d);for(let p=0;p<d;p+=6)r.fillStyle="rgba(0,0,0,0.3)",r.fillRect(c,u+p,80,1)}r.fillStyle="rgb(170,166,156)",r.fillRect(c-8,u+116,96,8)}}return ft[t]=ge(e,{wrap:!1})}function Nf(){if(ft.shutter)return ft.shutter;let s=me(256,256),t=gn(s,(e,n)=>{let i=(n%16<2?45:95)+we(ni,e/20,n/20,3,12.8)*30;return[i,i*.98,i*.95]});return t.fillStyle="rgba(30,30,30,0.8)",t.font="bold 34px Arial",t.save(),t.translate(60,140),t.rotate(-.15),t.fillText("GESCHLOSSEN",-20,0),t.restore(),ft.shutter=ge(s)}function Uf(){if(ft.roof)return ft.roof;let s=me(256,256);return gn(s,(t,e)=>{let n=Math.floor(e/16),i=n%2?8:0,a=(e%16<2||(t+i)%16<1?22:48)+we(yi,t/16,e/16,3,16)*26;return[a*1.1,a*.7,a*.6]}),ft.roof=ge(s)}function Ff(){if(ft.felt)return ft.felt;let s=me(256,256);return gn(s,(t,e)=>{let n=26+we(ni,t/12,e/12,4,21.33)*24+(e%64<2?-10:0);return[n,n,n*.95]}),ft.felt=ge(s)}function Of(){if(ft.cookie)return ft.cookie;let s=me(256,256);return gn(s,(t,e)=>{let n=Math.hypot(t-128,e-128)/128,i=Math.max(0,1-n*n)**.7;i*=.94+.06*Math.cos(n*22),i+=Math.max(0,1-n*2.6)*.3;let r=Ce(i*255,0,255);return[r,r*.98,r*.94]}),ft.cookie=ge(s,{wrap:!1,srgb:!1})}function Bf(){if(ft.glow)return ft.glow;let s=me(128,128),t=s.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.5)"),e.addColorStop(.5,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ft.glow=ge(s,{wrap:!1})}function zf(){if(ft.water)return ft.water;let s=me(256,256);return gn(s,(t,e)=>{let i=10+we(yi,t/18,e/60,4,14.2)*22;return[i*.8,i,i*1.05]}),ft.water=ge(s)}function Hf(s){let t=me(128,152),e=t.getContext("2d"),n=Ie(s);e.fillStyle="#e8e4da",e.fillRect(0,0,128,152);let i=e.createRadialGradient(64,70,4,64,70,80);i.addColorStop(0,"#5a5c55"),i.addColorStop(1,"#0a0b0a"),e.fillStyle=i,e.fillRect(8,8,112,112);for(let l=0;l<9;l++){let c=8+n()*112;e.fillStyle=`rgba(20,18,16,${.6+n()*.4})`,e.fillRect(c,8,3+n()*9,112)}let r=40+n()*48,a=.7+n()*.5;e.fillStyle="#0c0c0c",e.beginPath(),e.arc(r,62-10*a,7*a,0,7),e.fill(),e.fillRect(r-9*a,62-4*a,18*a,30*a),e.fillRect(r-7*a,62+26*a,6*a,24*a),e.fillRect(r+1*a,62+26*a,6*a,24*a),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(8,8,112,112),e.fillStyle="#2a2a6a",e.font='13px "Comic Sans MS", cursive';let o=["14.09.","02.10.","17.10.","21.10.","26.10.","29.10.","30.10."];return e.fillText(o[s%o.length],12,140),ge(t,{wrap:!1})}function Gf(){if(ft.map)return ft.map;let s=me(512,384),t=s.getContext("2d");t.fillStyle="#c9c7b0",t.fillRect(0,0,512,384);let e=Ie(3);for(let r=0;r<400;r++)t.fillStyle=`rgba(80,110,70,${.15+e()*.2})`,t.beginPath(),t.arc(e()*512,60+e()*324,4+e()*12,0,7),t.fill();t.fillStyle="#e2dfd0",t.fillRect(0,0,512,60),t.strokeStyle="#8a7a5a",t.lineWidth=3;let n=[[[256,60],[256,384]],[[0,200],[512,230]],[[80,60],[140,384]],[[380,60],[420,384]],[[0,300],[512,320]]];for(let r of n)t.beginPath(),t.moveTo(...r[0]),t.lineTo(...r[1]),t.stroke();t.fillStyle="#222",t.font="bold 14px Arial",t.fillText("STADTWALD",220,30),t.font="12px Arial",t.fillText("Goetheturm",262,76),t.fillText("H\xFCgelschneise",262,150),t.fillText("Maunzenweiher",300,300),t.fillText("Sachsenhausen",30,40),t.strokeStyle="#b01010",t.lineWidth=2;let i=[[256,72],[200,180],[150,230],[120,260],[320,250],[410,120]];for(let r of i)t.beginPath(),t.arc(r[0],r[1],9,0,7),t.stroke();return t.lineWidth=3,t.beginPath(),t.moveTo(110,275),t.lineTo(126,291),t.moveTo(126,275),t.lineTo(110,291),t.stroke(),t.setLineDash([4,4]),t.beginPath(),t.moveTo(256,160),t.quadraticCurveTo(180,200,118,283),t.stroke(),t.setLineDash([]),t.fillStyle="#b01010",t.font='13px "Comic Sans MS", cursive',t.fillText("RUF 1",196,196),t.fillText("RUF 2",140,248),t.fillText("RUF 3",330,262),ft.map=ge(s,{wrap:!1})}function Vf(){if(ft.news)return ft.news;let s=me(256,320),t=s.getContext("2d");t.fillStyle="#d8d2bf",t.fillRect(0,0,256,320),t.fillStyle="#1a1a1a",t.font="bold 22px Georgia",t.fillText("Joggerin im",14,36),t.fillText("Stadtwald vermisst",14,62),t.font="11px Georgia",t.fillText("Frankfurt (dpa) \u2013 Seit Sonntag wird eine",14,84),t.fillText("34-j\xE4hrige Frau aus Oberrad vermisst.",14,98),t.fillStyle="#555",t.fillRect(14,110,110,120),t.fillStyle="#1a1a1a";for(let e=116;e<300;e+=12)t.fillRect(132,e,100+Math.sin(e)*12,5);for(let e=240;e<300;e+=12)t.fillRect(14,e,108,5);return ft.news=ge(s,{wrap:!1})}function Wf(){if(ft.monitor)return ft.monitor;let s=me(256,160),t=s.getContext("2d"),e=t.createLinearGradient(0,0,256,160);return e.addColorStop(0,"#0e2440"),e.addColorStop(1,"#06101e"),t.fillStyle=e,t.fillRect(0,0,256,160),t.fillStyle="rgba(255,255,255,0.08)",t.fillRect(20,20,140,90),t.fillStyle="rgba(255,255,255,0.15)",t.fillRect(20,20,140,10),t.fillStyle="rgba(0,0,0,0.6)",t.fillRect(0,148,256,12),t.fillStyle="#fff",t.font="8px Arial",t.fillText("01:43",226,157),ft.monitor=ge(s,{wrap:!1})}function Xf(){if(ft.poster)return ft.poster;let s=me(256,360),t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,360);e.addColorStop(0,"#2a1c3c"),e.addColorStop(1,"#0c0a14"),t.fillStyle=e,t.fillRect(0,0,256,360),t.fillStyle="#d24a2a",t.beginPath(),t.arc(128,150,70,0,7),t.fill(),t.fillStyle="#0c0a14";for(let n=0;n<6;n++)t.fillRect(0,120+n*14,256,5);return t.fillStyle="#e8e0d0",t.font="bold 30px Arial",t.textAlign="center",t.fillText("NIGHT DRIVE",128,290),t.font="14px Arial",t.fillText("TOUR 2025",128,315),ft.poster=ge(s,{wrap:!1})}function qf(){if(ft.sack)return ft.sack;let s=me(256,256),t=gn(s,(e,n)=>{let i=e%6<3^n%6<3?1:.88,r=(110+we(ni,e/10,n/10,3,25.6)*40)*i;return[r*1.05,r*.9,r*.65]});t.fillStyle="#120c08",t.beginPath(),t.ellipse(88,110,16,20,.1,0,7),t.fill(),t.beginPath(),t.ellipse(168,108,16,22,-.1,0,7),t.fill(),t.strokeStyle="#120c08",t.lineWidth=6,t.beginPath(),t.moveTo(80,180);for(let e=80;e<=176;e+=12)t.lineTo(e,180+(e/12%2?8:-6));return t.stroke(),ft.sack=ge(s,{wrap:!1})}function Zf(){if(ft.ancient)return ft.ancient;let s=me(512,512),t=Ie(808),e=8,n=512/e,i=[];for(let o=0;o<e;o++)i.push(.7+t()*.45);let r=Xi(909),a=gn(s,(o,l)=>{let c=Math.floor(l/n),u=l-c*n,f=Math.sin((l*1.1+we(ni,o/50,l/6+c*5,3,10.24)*40)*.7)*.5+.5,d=we(yi,o/24,l/24,4,21.33),p=Math.max(0,we(r,o/70,l/70,4,7.31)-.52)*3.2,x=i[c]*(.78+f*.22)*(.8+d*.35)*(1-0*.6),g=[92,80,66],y=[g[0]*x,g[1]*x,g[2]*x];y=[y[0]*(1-p)+52*p,y[1]*(1-p)+66*p,y[2]*(1-p)+34*p];let b=u<4||u>n-3?.18:1,E=Math.abs(r(o/9,l/2.5+c*7,0)-.5)<.012?.45:1;return[y[0]*b*E,y[1]*b*E,y[2]*b*E]});for(let o=0;o<26;o++){let l=t()*512,c=3+t()*10,u=60+t()*260,f=t()*512;for(let d of[0,-512]){let p=a.createLinearGradient(0,f+d,0,f+d+u);p.addColorStop(0,"rgba(18,16,12,0.35)"),p.addColorStop(1,"rgba(18,16,12,0)"),a.fillStyle=p,a.fillRect(l,f+d,c,u)}}for(let o=0;o<e;o++)for(let l of[24,256,488])a.fillStyle="rgba(90,40,18,0.9)",a.beginPath(),a.arc(l+t()*6,o*n+n*.5,2.8,0,7),a.fill(),a.fillStyle="rgba(90,40,18,0.25)",a.fillRect(l,o*n+n*.5,3,18+t()*20);for(let o=0;o<9;o++)a.fillStyle="rgba(22,16,10,0.85)",a.beginPath(),a.ellipse(t()*512,t()*512,4+t()*7,3+t()*4,t(),0,7),a.fill();return ft.ancient=ge(s)}function Yf(){if(ft.mossroof)return ft.mossroof;let s=me(512,512),t=Xi(4242);return gn(s,(e,n)=>{let i=30+we(ni,e/14,n/14,4,36.57)*26+(n%64<3?-12:0),r=Math.min(1,Math.max(0,we(t,e/60,n/60,5,8.53)-.42)*2.6),a=we(yi,e/4,n/4,2,128)*.4+.8;return[i*(1-r)+48*r*a,i*(1-r)+62*r*a,i*.95*(1-r)+30*r*a]}),ft.mossroof=ge(s)}function $f(){if(ft.web)return ft.web;let s=me(256,256),t=s.getContext("2d"),e=Ie(66);t.strokeStyle="rgba(220,220,215,0.55)",t.lineWidth=1;let n=11;for(let i=0;i<n;i++){let r=i/n*Math.PI*.5;t.beginPath(),t.moveTo(0,0),t.lineTo(Math.cos(r)*250,Math.sin(r)*250),t.stroke()}for(let i=1;i<12;i++){t.beginPath();for(let r=0;r<=n;r++){let a=Math.min(r,n-1)/n*Math.PI*.5,o=i*20+e()*6,l=Math.cos(a)*o,c=Math.sin(a)*o;r?t.lineTo(l,c):t.moveTo(l,c)}t.stroke()}return ft.web=ge(s,{wrap:!1})}function Kf(){if(ft.ivy)return ft.ivy;let s=me(256,512),t=s.getContext("2d"),e=Ie(515);t.lineCap="round";for(let n=0;n<6;n++){let i=30+e()*196,r=512;t.strokeStyle="rgb(46,34,22)",t.lineWidth=2.5,t.beginPath(),t.moveTo(i,r);let a=[];for(;r>60+e()*200;)i+=(e()-.5)*30,r-=12+e()*16,t.lineTo(i,r),a.push([i,r]);t.stroke();for(let[o,l]of a)for(let c=0;c<3;c++){let u=30+e()*40;t.fillStyle=`rgb(${u*.7},${u*1.05},${u*.5})`,t.save(),t.translate(o+(e()-.5)*18,l+(e()-.5)*18),t.rotate(e()*7),t.beginPath(),t.moveTo(0,-9),t.lineTo(7,0),t.lineTo(3,2),t.lineTo(6,8),t.lineTo(0,5),t.lineTo(-6,8),t.lineTo(-3,2),t.lineTo(-7,0),t.closePath(),t.fill(),t.restore()}}return ft.ivy=ge(s,{wrap:!1})}h.timers=[];function $h(s,t){let e={t:h.time+s,fn:t};return h.timers.push(e),e}function zs(s){return h.started?new Promise(t=>$h(s,t)):new Promise(t=>setTimeout(t,s*1e3))}function Jf(){if(!h.timers.length)return 0;let s=0;for(let t=0;t<h.timers.length;t++){let e=h.timers[t];if(h.time>=e.t){h.timers.splice(t,1),t--,s++;try{e.fn()}catch(n){console.error(n)}}}return s}var Oa=1;function Kh(s){Oa=s>>>0}function jf(){return Oa}function Zn(){Oa=Oa+1831565813>>>0;let s=Oa;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}h.rand=Zn;var Hs={stand:{h:1.75,eye:1.62,speed:2.5},crouch:{h:1.15,eye:.98,speed:1.3},crawl:{h:.72,eye:.48,speed:.85}},dy=2.3,fy=12,py=7,my=4.5,gy=.3,ic=class{constructor(t,e){this.cam=t,this.p=new L,this.vel=new L,this.vy=0,this.yaw=0,this.pitch=0,this.roll=0,this.stance="stand",this.forceStance=null,this.eyeY=1.62,this.bob=0,this.bobAmt=0,this.stepDist=0,this.stamina=1,this.exhausted=0,this.canMove=!0,this.canLook=!0,this.canSprint=!0,this.canInteract=!0,this.onGround=!0,this.shakeAmt=0,this.shakeT=0,this.extraPitch=0,this.extraRoll=0,this.eyeOffset=0,this.lookTarget=null,this.holding=null,this.holdT=0,this.current=null,this.radius=.3,this.flashOn=!1,this.speedMul=1,this.fovKick=0,this.blockedBy=[];let n=new Rs(15921407,0,40,.5,.55,1.25);n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.near=.15,n.shadow.camera.far=38,n.shadow.bias=-4e-4,n.shadow.normalBias=.03,n.map=Of(),this.flash=n,this.flashTarget=new Ye,e.add(n),e.add(this.flashTarget),n.target=this.flashTarget,this.flashDir=new L(0,0,-1),this.flashIntensity=15,this.flashFlicker=0,this.glow=new Cs(10465488,0,4,2),e.add(this.glow)}teleport(t,e,n,i=this.yaw,r=0){this.p.set(t,e,n),this.vel.set(0,0,0),this.vy=0,this.stepDist=0,this.bob=0,this.bobAmt=0,this.stuckT=0,this.holding=null,this.holdT=0,this.shakeT=0,this.shakeAmt=0,this.flashFlicker=0,this.onGround=!0,this.sprinting=!1,this._breathT=0,this.yaw=i,this.pitch=r,this.eyeY=e+Hs[this.stance].eye,this.lookTarget=null,this.trail=[],this.updateCamera(0),this.flashDir.copy(this.forward())}forward(){return new L(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}get height(){return Hs[this.stance].h}get eyeHeight(){return Hs[this.stance].eye}setFlash(t){let e=h.phone;t&&(e.battery<=0||e.dropped||h.flags.noFlash)&&(t=!1),t!==this.flashOn&&h.audio.click(),this.flashOn=t}shake(t=.5,e=.5){this.shakeAmt=Math.max(this.shakeAmt,t),this.shakeT=Math.max(this.shakeT,e)}tryStance(t){if(t===this.stance)return;let e=["crawl","crouch","stand"];if(e.indexOf(t)>e.indexOf(this.stance)){let n=this.p.clone();if(h.world.resolve(n,this.radius,this.p.y,this.p.y+Hs[t].h),n.distanceToSquared(this.p)>4e-4||h.flags.lowCeiling&&h.flags.lowCeiling(this.p,Hs[t].h))return}this.stance=t}emitStep(t,e){let n=e==="sprint"?1.35:e==="crouch"?.5:e==="crawl"?.45:.9;h.audio.footstep(t,n,null,e),h.noise&&h.noise.step(t,e,this.p),this.onStep&&this.onStep(t,e==="sprint",e)}update(t){let e=h.world,n=h.dev||{};if(this.canLook&&(this.yaw-=Ut.st.lx,this.pitch-=Ut.st.ly),this.lookTarget){let M=this.lookTarget,R=new L().subVectors(M.pos,this.cam.position),C=Math.atan2(-R.x,-R.z),k=Math.atan2(R.y,Math.hypot(R.x,R.z)),D=1-Math.exp(-(M.speed||4)*t);this.yaw+=qi(this.yaw,C)*D,this.pitch+=(k-this.pitch)*D}if(this.pitch=Ce(this.pitch,-1.45,1.45),n.fly){this.updateFly(t,n);return}if(this.scripted){this.vel.set(0,0,0),this.vy=0,this.bobAmt=Un(this.bobAmt,0,5,t),this.sprinting=!1,this.regen(t,!1),this.updateInteract(t),Ut.actHit("flash")&&!h.flags.lockFlash&&this.setFlash(!this.flashOn),this.updateCamera(t);return}let i="stand";Ut.act("crouch")&&(i="crouch"),this.forceStance&&(i=this.forceStance),this.tryStance(i);let r=Hs[this.stance],a=0,o=0;this.canMove&&(Ut.st.ax||Ut.st.az?(a=Ut.st.ax,o=Ut.st.az):(Ut.act("forward")&&(o-=1),Ut.act("back")&&(o+=1),Ut.act("left")&&(a-=1),Ut.act("right")&&(a+=1)));let l=Math.hypot(a,o),c=Math.min(1,l);l>0&&(a/=l,o/=l);let u=Ut.act("sprint"),f=l>0&&o<-.25;this.exhausted>0&&this.stamina>=gy&&(this.exhausted=0);let d=this.canSprint&&u&&f&&this.stance==="stand"&&this.exhausted<=0&&this.stamina>0;d&&h.phoneOpen&&!h.flags.keepPhone&&h.ui.togglePhone(!1);let p=r.speed*(d?dy:Math.max(.35,c))*this.speedMul;h.phoneOpen&&(p*=.75),d?(this.stamina=Math.max(0,this.stamina-t/fy),this.stamina<=0&&(this.exhausted=1,h.audio.breath(1.3))):this.regen(t,l>0),this.stamina<.4&&(this._breathT=(this._breathT||0)-t)<0&&(h.audio.breath(1-this.stamina),this._breathT=this.exhausted?.8:1.15);let m=Math.sin(this.yaw),x=Math.cos(this.yaw),g=(a*x+o*m)*p,y=(-a*m+o*x)*p,b=this.onGround?d?14:l>0?11:9:2.2;this.vel.x=Un(this.vel.x,g,b,t),this.vel.z=Un(this.vel.z,y,b,t);let E=this.p.clone();if(n.noclip)this.p.x+=this.vel.x*t,this.p.z+=this.vel.z*t,this.blockedBy=[];else{let M=Math.max(1,Math.ceil(t/.034)),R=t/M,C=n.on?[]:null,k=null;for(let D=0;D<M;D++)this.p.x+=this.vel.x*R,this.p.z+=this.vel.z*R,e.resolve(this.p,this.radius,this.p.y+.35,this.p.y+r.h,C),k=e.constrain(this.p,this.radius*.5,!!C)||k;C&&(this.blockedBy=C.concat(k?[k]:[]).map(D=>({c:D})))}this.canMove&&Ut.actHit("jump")&&this.onGround&&this.stance==="stand"&&(this.vy=4.3,this.onGround=!1,h.noise&&h.noise.add(.12,this.p,"Sprung"));let S=e.groundAt(this.p.x,this.p.z,this.p.y,.55);S===-1/0||(this.p.y>S+.02||this.vy>0?(this.vy-=17*t,this.p.y+=this.vy*t,this.p.y<=S?(this.vy<-5&&(h.audio.footstep(e.surfaceAt(this.p.x,this.p.y,this.p.z),1.4),this.shake(.15,.2),h.noise&&h.noise.add(Math.min(.6,-this.vy*.06),this.p,"Landung")),this.p.y=S,this.vy=0,this.onGround=!0):this.onGround=!1):(this.p.y=S,this.vy=0,this.onGround=!0));let _=Math.hypot(this.p.x-E.x,this.p.z-E.z);this.trail||(this.trail=[]);let w=this.trail[this.trail.length-1];if((!w||Math.hypot(w.x-this.p.x,w.z-this.p.z)>.8)&&(this.trail.push(this.p.clone()),this.trail.length>600&&this.trail.shift()),l>0&&this.canMove&&!n.noclip){if(_<.002?this.stuckT=(this.stuckT||0)+t:this.stuckT=0,this.stuckT>1.2){this.stuckT=0;let M=this.p.clone();M.x+=-Math.sin(this.yaw)*.4,M.z+=-Math.cos(this.yaw)*.4,e.resolve(M,this.radius,this.p.y+.35,this.p.y+r.h),e.constrain(M,this.radius*.5),M.distanceTo(this.p)>.05&&this.p.copy(M)}}else this.stuckT=0;let v=_/Math.max(t,1e-4);if(this.onGround&&v>.3){this.stepDist+=_,this.bob+=_*(d?2.4:this.stance==="stand"?3.4:4.5),this.bobAmt=Un(this.bobAmt,d?1.6:this.stance==="stand"?1:.6,6,t);let M=this.stance==="crawl"?.45:d?1.1:this.stance==="crouch"?.55:.78;if(this.stepDist>M){this.stepDist=0;let R=this.stance==="crawl"?h.flags.inShaft?"metal":"crawl":e.surfaceAt(this.p.x,this.p.y,this.p.z);this.emitStep(R,this.stance==="crawl"?"crawl":this.stance==="crouch"?"crouch":d?"sprint":"walk")}}else this.bobAmt=Un(this.bobAmt,0,5,t);this.sprinting=d,this.speedNow=v,this.updateInteract(t),Ut.actHit("flash")&&!h.flags.lockFlash&&this.setFlash(!this.flashOn),h.phone.battery<=0&&this.flashOn&&this.setFlash(!1),this.updateCamera(t)}regen(t,e){if(this.stamina>=1)return;let n=e?py:my;this.stamina=Math.min(1,this.stamina+t/(this.exhausted>0?n*1.25:n))}updateFly(t,e){let n=Ut.st.ax||0,i=Ut.st.az||0,r=0;Ut.act("forward")&&(i-=1),Ut.act("back")&&(i+=1),Ut.act("left")&&(n-=1),Ut.act("right")&&(n+=1),Ut.act("jump")&&(r+=1),Ut.act("crouch")&&(r-=1);let a=(e.flySpeed||8)*(Ut.act("sprint")?4:1),o=this.forward(),l=new L(Math.cos(this.yaw),0,-Math.sin(this.yaw)),c=new L().addScaledVector(o,-i).addScaledVector(l,n);c.y+=r,c.lengthSq()>1&&c.normalize(),c.multiplyScalar(a),this.vel.x=Un(this.vel.x,c.x,8,t),this.vel.z=Un(this.vel.z,c.z,8,t),this.vy=Un(this.vy,c.y,8,t),this.p.x+=this.vel.x*t,this.p.z+=this.vel.z*t,this.p.y+=this.vy*t,this.stance="stand",this.onGround=!1,this.sprinting=!1,this.bobAmt=Un(this.bobAmt,0,5,t),this.regen(t,!1),this.blockedBy=[],this.updateInteract(t),Ut.actHit("flash")&&this.setFlash(!this.flashOn),this.updateCamera(t)}updateInteract(t){let e=h.ui;if(!this.canInteract){e.prompt(null),this.current=null;return}let n=this.forward(),i=h.world.findInteract(this.cam.position,n);if(this.current=i,!i){e.prompt(null),this.holding=null;return}let r=typeof i.text=="function"?i.text():i.text;i.hold>0?Ut.act("use")?(this.holding!==i&&(this.holding=i,this.holdT=0,i.onHoldStart&&i.onHoldStart()),this.holdT+=t,i.onHold&&i.onHold(t,this.holdT/i.hold),e.prompt(r,Math.min(1,this.holdT/i.hold),!0),this.holdT>=i.hold&&(this.holding=null,this.use(i))):(this.holding=null,this.holdT=0,e.prompt(r,0,!0)):(e.prompt(r),Ut.actHit("use")&&this.use(i))}use(t){if(t.once&&(t.used=!0),h.ui.prompt(null),t.onUse&&t.onUse(t),t._resolvers){for(let e of t._resolvers)e();t._resolvers=[]}}updateCamera(t){let e=Hs[this.stance];this.eyeY=Un(this.eyeY,this.p.y+e.eye+this.eyeOffset,t>0?14:1e3,t||1);let n=Math.sin(this.bob*2)*.045*this.bobAmt,i=Math.cos(this.bob)*.03*this.bobAmt,r=0,a=0;if(this.shakeT>0&&t>0){this.shakeT-=t;let p=this.shakeAmt*Math.min(1,this.shakeT*3);r=(Zn()-.5)*p*.12,a=(Zn()-.5)*p*.12,this.shakeT<=0&&(this.shakeAmt=0)}let o=this.cam,l=new L(Math.cos(this.yaw),0,-Math.sin(this.yaw));o.position.set(this.p.x,this.eyeY+n,this.p.z).addScaledVector(l,i);let c=Math.sin(h.time*1.3)*.006;o.rotation.order="YXZ",o.rotation.y=this.yaw+r,o.rotation.x=this.pitch+this.extraPitch+a+c,o.rotation.z=this.roll+this.extraRoll+Math.sin(this.bob)*.006*this.bobAmt,t>0&&(this.fovKick=Un(this.fovKick,this.sprinting?6:0,5,t)),o.fov=h.settings.fov+this.fovKick,o.updateProjectionMatrix(),o.updateMatrixWorld();let u=new L(0,0,-1).applyQuaternion(o.quaternion);t>0?this.flashDir.lerp(u,1-Math.exp(-12*t)).normalize():this.flashDir.copy(u);let f=new L(.16,-.17,-.1).applyQuaternion(o.quaternion).add(o.position);this.flash.position.copy(f),this.flashTarget.position.copy(f).addScaledVector(this.flashDir,5);let d=this.flashOn?this.flashIntensity:0;this.flashOn&&h.phone.battery<6&&(d*=.55+.45*(Math.sin(h.time*31)>-.92?1:.2)),this.flashFlicker>0&&(this.flashFlicker-=t,d*=Math.sin(h.time*97)>0?.1:1),this.flash.intensity=d,this.glow.position.copy(f),this.glow.intensity=h.phoneOpen&&!h.phone.dropped?.6:0}};var xy=`
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
}`,sc=class{constructor(t){this.r=t,this.rt=new Gn(4,4,{type:Kn,depthBuffer:!0,samples:0}),this.rt.texture.minFilter=vn,this.rt.texture.magFilter=vn,this.mat=new Pn({uniforms:{tDiffuse:{value:this.rt.texture},res:{value:new Yt(1,1)},time:{value:0},grain:{value:1},aberr:{value:1},vignette:{value:.9},flash:{value:0},vhs:{value:.6},exposure:{value:1.25},fade:{value:1},blurAmt:{value:.18},tBloom:{value:null},bloomAmt:{value:.9}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:xy,depthTest:!1,depthWrite:!1}),this.quad=new X(new Jt(2,2),this.mat),this.quad.frustumCulled=!1,this.scene=new bs,this.scene.add(this.quad),this.cam=new Ps(-1,1,1,-1,0,1),this.scareT=0;let e=()=>{let i=new Gn(4,4,{type:Kn,depthBuffer:!1});return i.texture.minFilter=i.texture.magFilter=vn,i};this.bA=e(),this.bB=e(),this.mat.uniforms.tBloom.value=this.bA.texture;let n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";this.thr=new Pn({uniforms:{tDiffuse:{value:this.rt.texture},thr:{value:.55}},vertexShader:n,depthTest:!1,depthWrite:!1,fragmentShader:"uniform sampler2D tDiffuse; uniform float thr; varying vec2 vUv; void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb; float l = max(c.r, max(c.g, c.b)); gl_FragColor = vec4(c * smoothstep(thr, thr * 2.5, l), 1.0); }"}),this.blur=new Pn({uniforms:{tDiffuse:{value:null},dir:{value:new Yt}},vertexShader:n,depthTest:!1,depthWrite:!1,fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 dir; varying vec2 vUv;
        void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb * 0.227;
          c += (texture2D(tDiffuse, vUv + dir * 1.385).rgb + texture2D(tDiffuse, vUv - dir * 1.385).rgb) * 0.316;
          c += (texture2D(tDiffuse, vUv + dir * 3.23).rgb + texture2D(tDiffuse, vUv - dir * 3.23).rgb) * 0.07;
          gl_FragColor = vec4(c, 1.0); }`})}pass(t,e){this.quad.material=t,this.r.setRenderTarget(e),this.r.render(this.scene,this.cam)}resize(t,e){let n=h.settings.scale,i=Math.max(320,Math.floor(t*n)),r=Math.max(180,Math.floor(e*n));this.rt.setSize(i,r),this.mat.uniforms.res.value.set(i,r);let a=Math.max(64,i>>2),o=Math.max(36,r>>2);this.bA.setSize(a,o),this.bB.setSize(a,o),this.bw=a,this.bh=o}scare(t=1){this.scareT=Math.max(this.scareT,t)}render(t,e,n){let i=this.mat.uniforms;i.time.value=h.time,i.grain.value=h.settings.grain,this.scareT>0&&(this.scareT=Math.max(0,this.scareT-n*1.4));let r=this.scareT;i.aberr.value=1+r*7,i.vhs.value=.5+r*3+(h.flags.vhsBoost||0),i.flash.value=r>.85?(r-.85)*1.2:0,this.r.setRenderTarget(this.rt),this.r.render(t,e),this.pass(this.thr,this.bA);for(let a=0;a<2;a++)this.blur.uniforms.tDiffuse.value=this.bA.texture,this.blur.uniforms.dir.value.set((1+a)/this.bw,0),this.pass(this.blur,this.bB),this.blur.uniforms.tDiffuse.value=this.bB.texture,this.blur.uniforms.dir.value.set(0,(1+a)/this.bh),this.pass(this.blur,this.bA);this.quad.material=this.mat,this.r.setRenderTarget(null),this.r.render(this.scene,this.cam)}};var Je=s=>document.querySelector(s),rc=class{constructor(){this.el={fade:Je("#fade"),obj:Je("#objective"),objTxt:Je("#objective .txt"),sub:Je("#subtitle"),cross:Je("#crosshair"),prompt:Je("#prompt"),promptTxt:Je("#prompt .txt"),promptCirc:Je("#prompt circle"),hint:Je("#hint"),card:Je("#card"),narr:Je("#narration"),narrBox:Je("#narration .box"),phone:Je("#phone"),app:Je("#phone .app"),notif:Je("#notif"),note:Je("#note"),paper:Je("#note .paper"),menu:Je("#menu"),death:Je("#death"),clock:Je("#clock"),ptm:Je("#phone .tm"),pnet:Je("#phone .net"),ppct:Je("#phone .pct"),pbatt:Je("#phone .batt"),pdead:Je("#phone .dead")},this.subTimer=null,this.hintTimer=null,this.notifTimer=null,this.phoneTab="chat",h.chat=[],this.reply=null,this.mapCanvas=null}fade(t,e=1){let n=this.el.fade;return n.style.transition=`opacity ${e}s linear`,n.offsetWidth,n.style.opacity=t,this.fadeTarget=t,zs(e+.03)}objective(t){let e=this.el.obj;if(!t){e.classList.remove("show"),this.currentObjective=null;return}this.el.objTxt.textContent===t&&e.classList.contains("show")||(e.classList.remove("show"),setTimeout(()=>{this.el.objTxt.textContent=t,e.classList.add("show"),e.classList.remove("flash"),e.offsetWidth,e.classList.add("flash")},350),this.currentObjective=t)}say(t,e=3.2,n=null,i=!0){let r=this.el.sub;if(clearTimeout(this.subTimer),!t){r.classList.remove("show");return}r.innerHTML=(n?`<span class="who">${n}:</span>`:"")+`<span class="${n?"":i?"thought":""}">${t}</span>`,r.classList.add("show"),this.subTimer=setTimeout(()=>r.classList.remove("show"),e*1e3)}prompt(t,e=0,n=!1){let i=this.el.prompt;if(!t){i.classList.remove("show"),this.el.cross.classList.remove("active");return}i.classList.add("show"),this.el.cross.classList.add("active");let r=i.querySelector(".key"),a=on("use");r.firstChild.nodeValue!==a&&(r.firstChild.nodeValue=a,r.style.width=Math.max(28,a.length*9+12)+"px"),this.el.promptTxt.textContent!==t&&(this.el.promptTxt.textContent=t+(n?" (halten)":"")),this.el.promptCirc.style.strokeDashoffset=113*(1-e)}hint(t,e=5){let n=this.el.hint;if(clearTimeout(this.hintTimer),!t){n.classList.remove("show");return}n.innerHTML=t,n.classList.add("show"),this.hintTimer=setTimeout(()=>n.classList.remove("show"),e*1e3)}crosshair(t){this.el.cross.classList.toggle("hide",!t)}async card(t,e,n=3){let i=this.el.card;i.querySelector(".t1").textContent=t,i.querySelector(".t2").textContent=e,i.classList.add("show"),await zs(n),i.classList.remove("show"),await zs(1.2)}async narration(t,{perPara:e=3.6,onSkip:n}={}){let i=this.el.narr,r=this.el.narrBox;r.innerHTML=t.map(u=>`<p>${u}</p>`).join(""),i.classList.add("show");let a=[...r.querySelectorAll("p")],o=!1,l=()=>h.started?Ut.actHit("jump")||Ut.actHit("confirm"):!1,c=u=>{!h.started&&(u.code==="Space"||u.code==="Enter"||u.code==="Escape")&&(o=!0)};window.addEventListener("keydown",c);for(let u of a){if(o)break;u.classList.add("on");let f=0,d=e+u.textContent.length*.022;for(;f<d&&!o;)await zs(.05),f+=.05,l()&&(o=!0)}o||await zs(1.2),a.forEach(u=>u.classList.remove("on")),await zs(1.3),window.removeEventListener("keydown",c),i.classList.remove("show"),o&&n&&n()}note(t){return this.el.paper.textContent=t,this.el.note.classList.add("show"),h.noteOpen=!0,new Promise(e=>{this._noteRes=e})}closeNote(){h.noteOpen&&(this.el.note.classList.remove("show"),h.noteOpen=!1,this._noteRes&&(this._noteRes(),this._noteRes=null))}clockShow(t){this.el.clock.classList.toggle("show",t)}setTime(t){h.phone.time=t,this.refreshStatus()}refreshStatus(){let t=h.phone,e=Math.max(0,Math.round(t.battery));this.el.ptm.textContent=t.time,this.el.pnet.textContent=t.network?"LTE":"Kein Netz",this.el.ppct.textContent=e+"%",this.el.pbatt.querySelector("i").style.width=Math.max(4,e)+"%",this.el.pbatt.classList.toggle("low",e<=10&&!t.charging),this.el.pbatt.classList.toggle("chg",t.charging),this.el.clock.querySelector(".tm").textContent=t.time,this.el.clock.querySelector(".bat").textContent=(t.charging?"\u26A1 ":"")+"Akku "+e+"%",this.el.pdead.classList.toggle("on",e<=0)}addMsg(t,e,n){h.chat.push({from:t,text:e,time:n||h.phone.time}),h.phoneOpen&&this.renderPhone()}notify(t,e){let n=this.el.notif;n.querySelector(".from").innerHTML=`${t} <span>jetzt</span>`,n.querySelector(".body").textContent=e,n.querySelector(".hint").textContent=`[${on("phone")}] Handy`,n.classList.add("show"),clearTimeout(this.notifTimer),this.notifTimer=setTimeout(()=>n.classList.remove("show"),4200)}hideNotif(){this.el.notif.classList.remove("show")}setReply(t){return new Promise(e=>{this.reply={options:t,res:e},h.phoneOpen&&this.renderPhone()})}chooseReply(t){if(!this.reply||!h.phoneOpen||this.phoneTab!=="chat")return!1;let e=this.reply.options[t];if(!e)return!1;let n=this.reply;return this.reply=null,this.addMsg("me",e),h.audio.send(),this.renderPhone(),n.res(t),!0}togglePhone(t){let e=t!==void 0?t:!h.phoneOpen;if(e&&h.phone.dropped){this.say("Mein Handy liegt irgendwo am Boden.",2.6);return}if(e&&h.flags.noPhone){this.say("Das Handy l\xE4dt noch auf der Werkbank.",2.6);return}e&&!h.flags.hasPhone||(h.phoneOpen=e,this.el.phone.classList.toggle("open",e),e&&(this.hideNotif(),this.renderPhone(),h.unread=0))}renderPhone(){this.refreshStatus();let t=this.el.app;if(this.phoneTab==="map"&&h.phone.mapUnlocked){if(!this.mapCanvas){t.innerHTML='<div class="head"><div class="av" style="background:#2b6e3d">\u2316</div><div><div class="name">Karten</div><div class="sub">Stadtwald, Frankfurt</div></div></div>',this.mapCanvas=document.createElement("canvas"),this.mapCanvas.width=250,this.mapCanvas.height=400,t.appendChild(this.mapCanvas);let r=document.createElement("div");r.className="tabs",r.innerHTML=`<span>[${on("app")}] Chat</span><span class="on">Karte</span>`,t.appendChild(r)}this.drawMap();return}this.mapCanvas=null;let e=h.chat.slice(-9).map(r=>r.from==="day"?`<div class="day">${r.text}</div>`:`<div class="msg ${r.from==="me"?"me":"them"}">${r.text}</div>`).join(""),n='<div class="ph">Nachricht \u2026</div>';this.reply&&(n=this.reply.options.map((r,a)=>`<div class="opt"><b>[${on(a?"reply2":"reply1")}]</b>${r}</div>`).join(""));let i=h.phone.mapUnlocked?`<div class="tabs"><span class="on">Chat</span><span>[${on("app")}] Karte</span></div>`:"";t.innerHTML=`<div class="head"><div class="av">D</div><div><div class="name">Deniz</div><div class="sub">${h.phone.network?"online":"zuletzt online 02:12"}</div></div></div>
      <div class="chat">${e}</div><div class="reply">${n}</div>${i}`}drawMap(){let t=this.mapCanvas;if(!t)return;let e=t.getContext("2d"),n=t.width,i=t.height;e.fillStyle="#1d2a1e",e.fillRect(0,0,n,i);let r=h.player.p,a=1.6,o=d=>n/2+(d-r.x)*a,l=d=>i/2+(d-r.z)*a,c=h.mapData||{lines:[],labels:[]};for(let d of c.lines)e.strokeStyle=d.color,e.lineWidth=d.width,e.setLineDash(d.dash||[]),e.beginPath(),d.pts.forEach((p,m)=>m?e.lineTo(o(p[0]),l(p[1])):e.moveTo(o(p[0]),l(p[1]))),e.stroke();e.setLineDash([]),e.font="10px Arial",e.fillStyle="#cfd8c8";for(let d of c.labels)e.fillText(d.t,o(d.x),l(d.z));let u=h.player.forward(),f=Math.atan2(u.x,-u.z);e.save(),e.translate(n/2,i/2),e.rotate(f),e.fillStyle="rgba(70,140,255,.25)",e.beginPath(),e.moveTo(0,0),e.arc(0,0,34,-Math.PI/2-.5,-Math.PI/2+.5),e.fill(),e.restore(),e.fillStyle="#fff",e.beginPath(),e.arc(n/2,i/2,7,0,7),e.fill(),e.fillStyle="#3d8bff",e.beginPath(),e.arc(n/2,i/2,5,0,7),e.fill()}switchTab(){!h.phoneOpen||!h.phone.mapUnlocked||(this.phoneTab=this.phoneTab==="chat"?"map":"chat",this.mapCanvas=null,this.renderPhone())}menu(t){let e=this.el.menu;if(!t){e.classList.remove("show"),e.innerHTML="";return}e.innerHTML=t,e.classList.add("show")}death(t,e="ER HAT DICH.",n="Checkpoint wird geladen \u2026"){let i=this.el.death;t&&(i.querySelector(".t").textContent=e,i.querySelector(".s").textContent=n),i.classList.toggle("show",t)}hud(t){let e=h.player;if(!e)return;this._st||(this._st=document.getElementById("stamina"),this._sti=this._st.querySelector("i"),this._nz=document.getElementById("noise"),this._nzi=this._nz.querySelector("i"),this._nzm=this._nz.querySelector(".mic"),this._stv=0);let n=h.started&&!h.paused&&(e.stamina<.995||e.sprinting);this._stv=n?Math.min(1,this._stv+t*4):Math.max(0,this._stv-t*1.2),this._st.style.opacity=this._stv.toFixed(2),this._sti.style.width=(e.stamina*100).toFixed(1)+"%",this._st.classList.toggle("ex",e.exhausted>0);let i=h.noise,r=h.started&&!h.paused&&i&&(i.listening||h.mic&&h.mic.on);if(this._nz.classList.toggle("show",!!r),r){let a=Math.min(1,Math.max(i.level||0,h.mic&&h.mic.on?h.mic.level:0));this._nzi.style.width=(a*100).toFixed(0)+"%",this._nz.classList.toggle("loud",a>.6),this._nzm.style.display=h.mic&&h.mic.on?"inline":"none"}}};var Yn=Ie(1234),Le=(s,t)=>s+Yn()*(t-s),ac=class{constructor(){this.ready=!1,this.loops={},this.env="forest"}init(){if(this.ready)return;let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=h.settings.volume;let e=t.createDynamicsCompressor();e.threshold.value=-16,e.knee.value=12,e.ratio.value=5,e.attack.value=.004,e.release.value=.25,this.master.connect(e),e.connect(t.destination),this.white=this.makeNoiseBuffer("white",4),this.pink=this.makeNoiseBuffer("pink",6),this.brown=this.makeNoiseBuffer("brown",6),this.revForest=t.createConvolver(),this.revForest.buffer=this.makeIR(3.2,2.2,.35),this.revRoom=t.createConvolver(),this.revRoom.buffer=this.makeIR(.9,3.5,.6),this.revForestIn=t.createGain(),this.revRoomIn=t.createGain(),this.revForestIn.connect(this.revForest),this.revRoomIn.connect(this.revRoom);let n=t.createGain();n.gain.value=.8,this.revForest.connect(n),n.connect(this.master);let i=t.createGain();i.gain.value=.7,this.revRoom.connect(i),i.connect(this.master),this.sfx=t.createGain(),this.sfx.connect(this.master),this.amb=t.createGain(),this.amb.connect(this.master),this.ready=!0,this.renderScream()}setVolume(t){this.master&&this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}get now(){return this.ctx.currentTime}makeNoiseBuffer(t,e){let n=this.ctx,i=n.sampleRate*e,r=n.createBuffer(1,i,n.sampleRate),a=r.getChannelData(0),o=0,l=0,c=0,u=0,f=0,d=0,p=0,m=0;for(let x=0;x<i;x++){let g=Math.random()*2-1;t==="white"?a[x]=g:t==="pink"?(o=.99886*o+g*.0555179,l=.99332*l+g*.0750759,c=.969*c+g*.153852,u=.8665*u+g*.3104856,f=.55*f+g*.5329522,d=-.7616*d-g*.016898,a[x]=(o+l+c+u+f+d+p+g*.5362)*.11,p=g*.115926):(m=(m+.02*g)/1.02,a[x]=m*3.5)}return r}makeIR(t,e,n){let i=this.ctx,r=i.sampleRate*t,a=i.createBuffer(2,r,i.sampleRate);for(let o=0;o<2;o++){let l=a.getChannelData(o);for(let c=0;c<r;c++){let u=c/r;l[c]=(Math.random()*2-1)*Math.pow(1-u,e)*(c<200?c/200:1)*n}}return a}panner(t,e=2,n=1.2){let i=this.ctx.createPanner();return i.panningModel="HRTF",i.distanceModel="inverse",i.refDistance=e,i.rolloffFactor=n,i.maxDistance=300,this.setPos(i,t),i}setPos(t,e){t.positionX?(t.positionX.value=e.x,t.positionY.value=e.y,t.positionZ.value=e.z):t.setPosition(e.x,e.y,e.z)}out(t,{pos:e=null,ref:n=2,roll:i=1.2,rev:r=.3,bus:a=null}={}){let o=t;if(e){let l=this.panner(e,n,i);o.connect(l),o=l}if(o.connect(a||this.sfx),r>0){let l=this.ctx.createGain();l.gain.value=r,o.connect(l),l.connect(this.env==="room"||this.env==="cellar"?this.revRoomIn:this.revForestIn)}return o}noiseSrc(t=this.white,e=!1,n=1){let i=this.ctx.createBufferSource();return i.buffer=t,i.loop=e,i.playbackRate.value=n,i}filter(t,e,n=1,i=0){let r=this.ctx.createBiquadFilter();return r.type=t,r.frequency.value=e,r.Q.value=n,r.gain.value=i,r}gain(t=1){let e=this.ctx.createGain();return e.gain.value=t,e}osc(t,e){let n=this.ctx.createOscillator();return n.type=t,n.frequency.value=e,n}envl(t,e,n,i,r,a=0){t.cancelScheduledValues(e),t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(i,e+n),t.exponentialRampToValueAtTime(Math.max(1e-4,a||1e-4),e+n+r)}burst({buf:t,type:e="bandpass",f:n=1e3,q:i=1,a:r=.002,d:a=.1,peak:o=.5,t:l=0,pos:c,rev:u=.2,ref:f=2,rate:d=1,bus:p}){if(!this.ready||this.mute1)return;let m=this.now+l,x=this.noiseSrc(t||this.white,!1,d),g=this.filter(e,n,i),y=this.gain(0);x.connect(g),g.connect(y),this.envl(y.gain,m,r,o,a),this.out(y,{pos:c,rev:u,ref:f,bus:p}),x.start(m,Yn()*2),x.stop(m+r+a+.05)}tone({type:t="sine",f:e=440,f2:n,a:i=.005,d:r=.2,peak:a=.3,t:o=0,pos:l,rev:c=.2,ref:u=2,lp:f}){if(!this.ready||this.mute1)return;let d=this.now+o,p=this.osc(t,e);n&&p.frequency.exponentialRampToValueAtTime(n,d+i+r);let m=this.gain(0),x=p;if(f){let g=this.filter("lowpass",f,.7);p.connect(g),x=g}x.connect(m),this.envl(m.gain,d,i,a,r),this.out(m,{pos:l,rev:c,ref:u}),p.start(d),p.stop(d+i+r+.05)}updateListener(t){if(!this.ready)return;let e=this.ctx.listener,n=t.position,i=t.getWorldDirection(this._v||(this._v=t.position.clone())),r=this.now;e.positionX?(e.positionX.setTargetAtTime(n.x,r,.015),e.positionY.setTargetAtTime(n.y,r,.015),e.positionZ.setTargetAtTime(n.z,r,.015),e.forwardX.setTargetAtTime(i.x,r,.015),e.forwardY.setTargetAtTime(i.y,r,.015),e.forwardZ.setTargetAtTime(i.z,r,.015),e.upX.value=0,e.upY.value=1,e.upZ.value=0):(e.setPosition(n.x,n.y,n.z),e.setOrientation(i.x,i.y,i.z,0,1,0))}footstep(t,e=1,n=null,i="walk"){if(!this.ready||this.mute1)return;let r=e*(n?1.4:.55),a=i==="crouch"||i==="crawl",o=a?.06:i==="sprint"?.025:.045,l=a?1.5:i==="sprint"?.75:1,u=["woodfloor","stairs","tile","carpet","concrete","metal","wood"].includes(t)?.28:.12,f={pos:n,rev:u,ref:2},d=(p,m,x)=>this.tone({...f,f:p,f2:p*.7,d:m*l,peak:x*r,lp:300});switch(t){case"leaves":for(let p=0;p<9;p++)this.burst({...f,f:Le(1800,5200),q:1.4,d:Le(.008,.02),peak:.28*r*(.4+Yn()),t:Yn()*.13*l});this.burst({...f,f:Le(700,1100),q:.9,d:Le(.1,.18)*l,peak:.2*r,t:.01}),this.burst({...f,buf:this.pink,f:Le(2500,3500),q:.6,d:.12*l,peak:.12*r,t:o}),d(70,.07,.24);break;case"gravel":for(let p=0;p<10;p++)this.burst({...f,f:Le(1300,3800),q:1.6,d:Le(.012,.025),peak:.27*r*(.4+Yn()),t:Yn()*.08+(p>5?o:0)});this.burst({...f,f:900,q:.8,d:.14*l,peak:.14*r}),d(75,.06,.2);break;case"asphalt":case"sidewalk":this.burst({...f,type:"highpass",f:2600,q:.7,d:.022,peak:.24*r}),this.burst({...f,f:1200,q:1,d:.07*l,peak:.11*r,t:o}),this.burst({...f,f:Le(3500,5e3),q:2,d:.03,peak:.05*r,t:o+.02}),d(95,.05,.27);break;case"wood":case"woodfloor":case"stairs":{let p=t==="stairs"?Le(80,100):Le(95,125);d(p,.14,t==="stairs"?.5:.4),this.burst({...f,f:Le(200,300),q:5,d:.16*l,peak:(t==="stairs"?.32:.25)*r}),this.burst({...f,type:"highpass",f:2e3,q:.7,d:.02,peak:.07*r,t:o}),t==="stairs"&&this.tone({...f,f:Le(160,190),d:.25,peak:.08*r,lp:600,t:.01}),Yn()<(t==="stairs"?.25:.12)&&this.creak(n,.22*e);break}case"tile":this.burst({...f,type:"highpass",f:3200,q:.8,d:.018,peak:.3*r}),this.tone({...f,f:Le(900,1300),d:.05,peak:.04*r}),d(110,.05,.24),this.burst({...f,type:"highpass",f:2500,d:.015,peak:.12*r,t:o});break;case"carpet":this.burst({...f,buf:this.pink,f:Le(600,900),q:.6,d:.12*l,peak:.12*r}),d(65,.06,.18);break;case"concrete":this.burst({...f,type:"highpass",f:2800,q:.7,d:.03,peak:.28*r}),d(85,.06,.25),this.burst({...f,f:1600,q:1.5,d:.06,peak:.08*r,t:o});break;case"metal":this.burst({...f,f:Le(1600,2200),q:9,d:.2,peak:.25*r}),this.burst({...f,f:800,q:6,d:.25,peak:.18*r}),d(110,.08,.25);break;case"water":this.burst({...f,buf:this.pink,f:Le(700,1100),q:.7,d:.3,peak:.3*r}),this.burst({...f,f:Le(2500,3500),q:1,d:.15,peak:.12*r,t:.04});break;case"sand":case"mulch":this.burst({...f,f:Le(1200,2200),q:.6,d:.14*l,peak:.18*r}),d(70,.06,.16);break;case"crawl":this.burst({...f,f:Le(900,1500),q:.8,d:.25,peak:.2*r}),this.tone({...f,f:140,d:.05,peak:.15*r});break;default:this.burst({...f,f:1500,q:.8,d:.1,peak:.2*r})}i==="sprint"&&!n&&Yn()<.7&&this.burst({buf:this.pink,f:Le(1500,2600),q:.5,d:.09,peak:.05,rev:0,t:.03})}branchSnap(t){this.burst({pos:t,type:"highpass",f:2600,d:.012,peak:.6,rev:.6,ref:4}),this.burst({pos:t,f:1400,q:3,d:.04,peak:.35,t:.01,rev:.6,ref:4}),this.burst({pos:t,type:"highpass",f:3500,d:.008,peak:.3,t:.07,rev:.6,ref:4})}rustle(t,e=6){for(let n=0;n<e;n++)this.burst({pos:t.clone?t.clone().add({x:n*.6,y:0,z:0}):t,buf:this.pink,f:Le(1800,3200),q:.6,d:.15,peak:.2,t:n*.22,rev:.5,ref:4})}knock(t){for(let e=0;e<3;e++)this.tone({pos:t,f:140,f2:90,d:.08,peak:.45,lp:500,t:e*.42,rev:.9,ref:6}),this.burst({pos:t,f:700,q:3,d:.05,peak:.25,t:e*.42,rev:.9,ref:6})}creak(t,e=1,n=Le(.5,1.1)){if(!this.ready||this.mute1)return;let i=this.now,r=this.osc("sawtooth",Le(70,110));r.frequency.linearRampToValueAtTime(Le(120,180),i+n);let a=this.filter("bandpass",Le(500,900),9);a.frequency.linearRampToValueAtTime(Le(1100,1600),i+n);let o=this.gain(0),l=this.osc("square",Le(18,35)),c=this.gain(.5);l.connect(c),c.connect(o.gain);let u=this.gain(0);r.connect(a),a.connect(o),o.connect(u),u.gain.setValueAtTime(1e-4,i),u.gain.linearRampToValueAtTime(.35*e,i+.08),u.gain.linearRampToValueAtTime(.25*e,i+n*.7),u.gain.linearRampToValueAtTime(1e-4,i+n),this.out(u,{pos:t,rev:.3}),r.start(i),l.start(i),r.stop(i+n+.05),l.stop(i+n+.05)}doorCreak(t){this.creak(t,1.1,1.4),this.burst({pos:t,f:300,q:2,d:.2,peak:.2})}doorOpen(t){this.burst({pos:t,type:"highpass",f:2e3,d:.04,peak:.3}),this.tone({pos:t,f:1800,d:.05,peak:.08})}slam(t,e=1){this.tone({pos:t,f:60,f2:40,d:.5,peak:.9*e,lp:300,rev:.5}),this.burst({pos:t,f:400,q:1,d:.3,peak:.6*e,rev:.5}),this.burst({pos:t,type:"highpass",f:2500,d:.05,peak:.3*e})}bolt(t){this.burst({pos:t,f:3200,q:4,d:.05,peak:.4}),this.burst({pos:t,f:1800,q:6,d:.18,peak:.25,t:.12}),this.tone({pos:t,f:2400,d:.3,peak:.06,t:.12}),this.burst({pos:t,f:4200,q:3,d:.03,peak:.35,t:.32})}drag(t,e=1.6){if(!this.ready||this.mute1)return;let n=this.now,i=this.noiseSrc(this.brown,!0),r=this.filter("lowpass",500,.8),a=this.gain(.5),o=this.osc("sawtooth",9),l=this.gain(.4);o.connect(l),l.connect(a.gain);let c=this.gain(0);i.connect(r),r.connect(a),a.connect(c),c.gain.linearRampToValueAtTime(.9,n+.1),c.gain.setValueAtTime(.9,n+e-.2),c.gain.linearRampToValueAtTime(1e-4,n+e),this.out(c,{pos:t,rev:.4}),i.start(n),o.start(n),i.stop(n+e),o.stop(n+e)}thud(t,e=1){this.tone({pos:t,f:55,f2:35,d:.35,peak:.8*e,lp:200,rev:.4}),this.burst({pos:t,type:"lowpass",f:300,d:.25,peak:.5*e,rev:.3})}pickup(){this.burst({f:2500,q:1,d:.06,peak:.12}),this.burst({f:900,q:1,d:.12,peak:.1,t:.03})}click(){this.burst({type:"highpass",f:3e3,d:.015,peak:.25,rev:.05})}switchClick(t){this.burst({pos:t,type:"highpass",f:2e3,d:.02,peak:.5}),this.tone({pos:t,f:900,d:.04,peak:.1})}keys(t){for(let e=0;e<5;e++)this.burst({pos:t,f:Le(3500,6e3),q:8,d:.08,peak:.12,t:e*.05+Yn()*.03})}zip(){for(let t=0;t<18;t++)this.burst({f:3e3+t*80,q:3,d:.01,peak:.08,t:t*.018})}metalClang(t,e=1){for(let n of[520,1310,2270,3400])this.tone({pos:t,f:n,d:Le(.4,.9),peak:.12*e,rev:.5});this.burst({pos:t,type:"highpass",f:1500,d:.08,peak:.5*e})}screw(t){for(let e=0;e<4;e++)this.burst({pos:t,f:2600,q:5,d:.04,peak:.12,t:e*.09})}fenceRattle(t,e=1){for(let n=0;n<12;n++)this.burst({pos:t,f:Le(1800,4200),q:6,d:.06,peak:.25*e,t:n*.04+Yn()*.03,rev:.4})}padlock(t){this.keys(t),this.burst({pos:t,f:2400,q:6,d:.12,peak:.3,t:.4}),this.burst({pos:t,type:"highpass",f:3e3,d:.03,peak:.4,t:.7})}splash(t){this.burst({pos:t,f:1200,q:.6,d:.35,peak:.4}),this.burst({pos:t,f:400,q:1,d:.3,peak:.3})}bodyFall(){this.thud(null,1),this.burst({f:1600,q:.6,d:.35,peak:.4});for(let t=0;t<8;t++)this.burst({type:"highpass",f:3500,d:.008,peak:.3*Yn(),t:Yn()*.25})}phoneDrop(t){this.burst({pos:t,type:"highpass",f:2500,d:.03,peak:.4}),this.burst({pos:t,f:1800,q:1,d:.2,peak:.25,t:.03})}vibrate(t=null){if(!this.ready||this.mute1)return;let e=this.now;for(let n=0;n<2;n++){let i=e+n*.42,r=this.osc("square",165),a=this.filter("lowpass",t?700:450,1),o=this.gain(0);r.connect(a),a.connect(o),o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(t?.35:.22,i+.02),o.gain.setValueAtTime(t?.35:.22,i+.26),o.gain.linearRampToValueAtTime(1e-4,i+.3),this.out(o,{pos:t,rev:.05,ref:1}),r.start(i),r.stop(i+.32)}}ding(){this.tone({f:1318,d:.25,peak:.08,rev:.05}),this.tone({f:1975,d:.4,peak:.06,t:.09,rev:.05})}send(){this.tone({f:880,f2:1500,d:.12,peak:.06,rev:0})}owl(t){let e=(n,i,r)=>this.tone({pos:t,f:r,f2:r*.94,a:.05,d:i,peak:.18,t:n,rev:.8,ref:6,lp:900});e(0,.5,420),e(.9,.18,400),e(1.25,.9,410)}crow(t){for(let e=0;e<2;e++)this.burst({pos:t,f:1100,q:4,d:.22,peak:.12,t:e*.35,rev:.7,ref:6})}heavyStep(t,e=1){this.tone({pos:t,f:70,d:.15,peak:.6*e,lp:180,rev:.4}),this.burst({pos:t,type:"lowpass",f:400,d:.12,peak:.3*e,rev:.3}),Yn()<.35&&this.creak(t,.5*e,.6)}floodlight(t){this.burst({pos:t,type:"highpass",f:1500,d:.03,peak:.8}),this.tone({pos:t,f:100,d:1.2,peak:.08,lp:400})}sting(t="hard"){if(!this.ready||this.mute1)return;let e=this.now;if(t==="hard"){let n=[116.5,123.5,174.6,185,246.9,261.6,349.2,370];for(let i of n){let r=this.osc("sawtooth",i*Le(.995,1.005));r.frequency.linearRampToValueAtTime(i*.97,e+2);let a=this.filter("lowpass",3e3,1);a.frequency.exponentialRampToValueAtTime(400,e+2.2);let o=this.gain(0);r.connect(a),a.connect(o),o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(.11,e+.015),o.gain.exponentialRampToValueAtTime(1e-4,e+2.4),this.out(o,{rev:.6}),r.start(e),r.stop(e+2.5)}this.burst({type:"highpass",f:1500,d:.6,peak:.6,rev:.6}),this.tone({f:48,f2:28,d:1.6,peak:1,lp:200,rev:.4})}else if(t==="soft"){let n=this.noiseSrc(this.pink,!1),i=this.filter("bandpass",400,2);i.frequency.exponentialRampToValueAtTime(2400,e+1.6);let r=this.gain(0);n.connect(i),i.connect(r),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.5,e+1.4),r.gain.linearRampToValueAtTime(1e-4,e+1.7),this.out(r,{rev:.7}),n.start(e),n.stop(e+1.8),this.tone({f:55,d:2.5,a:.8,peak:.4,lp:200,rev:.4}),this.tone({f:58.3,d:2.5,a:.8,peak:.3,lp:200,rev:.4})}else if(t==="reveal"){for(let n of[220,233,311])this.tone({type:"triangle",f:n,a:1.2,d:3.5,peak:.07,rev:.8});this.tone({f:41,a:1,d:4,peak:.5,lp:150,rev:.3})}}async renderScream(){let n=new OfflineAudioContext(1,Math.floor(145530),44100),i=n.createBuffer(1,44100*3.3,44100),r=i.getChannelData(0);for(let nt=0;nt<r.length;nt++)r[nt]=Math.random()*2-1;let a=n.createOscillator();a.type="sawtooth";let o=a.frequency,l=[[0,560],[.12,700],[.3,770],[.45,700],[.72,640],[.95,700],[1.15,880],[1.35,950],[1.75,1040],[2.2,1e3],[2.6,930],[3,760]];o.setValueAtTime(l[0][1],0);for(let[nt,K]of l.slice(1))o.linearRampToValueAtTime(K,nt);let c=n.createOscillator();c.frequency.value=5.6;let u=n.createGain();u.gain.value=0,u.gain.linearRampToValueAtTime(10,1.2),u.gain.linearRampToValueAtTime(34,2.2),c.connect(u),u.connect(o);let f=n.createBufferSource();f.buffer=i;let d=n.createBiquadFilter();d.type="lowpass",d.frequency.value=25;let p=n.createGain();p.gain.value=60,f.connect(d),d.connect(p),p.connect(o);let m=n.createGain();m.gain.value=0;let x=m.gain,g=[[.04,0],[.08,.85],[.28,.8],[.33,.02],[.43,.02],[.47,.9],[.68,.65],[.74,0],[.98,0],[1.03,1],[1.27,.95],[1.3,.05],[1.37,.05],[1.42,1],[2.4,.9],[2.9,.4],[3.15,0]];for(let[nt,K]of g)x.linearRampToValueAtTime(K,nt);let y=n.createBufferSource();y.buffer=i;let b=n.createGain();b.gain.value=.12,y.connect(b);let E=n.createGain();a.connect(E),b.connect(E),E.connect(m);let S=[[0,[820,2400,3100]],[.4,[860,2050,2900]],[.95,[840,2450,3100]],[1.38,[880,2100,2950]],[1.9,[1e3,1750,2900]],[3,[950,1650,2800]]],_=[1,.55,.3],w=n.createGain();for(let nt=0;nt<3;nt++){let K=n.createBiquadFilter();K.type="bandpass",K.Q.value=[6,9,10][nt],K.frequency.setValueAtTime(S[0][1][nt],0);for(let[ut,yt]of S.slice(1))K.frequency.linearRampToValueAtTime(yt[nt],ut);let st=n.createGain();st.gain.value=_[nt]*3,m.connect(K),K.connect(st),st.connect(w)}let v=n.createBiquadFilter();v.type="lowpass",v.frequency.value=1300;let M=n.createGain();M.gain.value=.25,m.connect(v),v.connect(M),M.connect(w);let R=n.createBufferSource();R.buffer=i;let C=n.createBiquadFilter();C.type="highpass",C.frequency.value=1700;let k=n.createGain();k.gain.value=0;let D=[[0,0],[.02,.15],[.06,0],[.31,0],[.34,.5],[.44,.4],[.47,0],[.94,0],[.97,.2],[1.02,0],[1.29,0],[1.31,.55],[1.4,.45],[1.43,0]];for(let[nt,K]of D)k.gain.linearRampToValueAtTime(K,nt);R.connect(C),C.connect(k),k.connect(w);let B=n.createWaveShaper(),I=new Float32Array(1024);for(let nt=0;nt<1024;nt++){let K=nt/512-1;I[nt]=Math.tanh(K*2.2)}B.curve=I,w.connect(B),B.connect(n.destination),a.start(0),c.start(0),f.start(0),y.start(0,1),R.start(0,2);let H=await n.startRendering(),Y=H.getChannelData(0),Z=0;for(let nt=0;nt<Y.length;nt++)Z=Math.max(Z,Math.abs(Y[nt]));for(let nt=0;nt<Y.length;nt++)Y[nt]/=Z||1;this.screamBuf=H;for(let[nt,K,st,ut]of this._pendingScream||[])this.now-ut<2&&this.scream(nt,K,st);this._pendingScream=null}scream(t,e="distant",n=1){if(!this.ready||this.mute1)return;if(!this.screamBuf){(this._pendingScream=this._pendingScream||[]).push([t,e,n,this.now]);return}let i=this.now,r=this.ctx.createBufferSource();if(r.buffer=this.screamBuf,e==="distant"){let a=this.filter("lowpass",2600,.7),o=this.filter("highpass",250,.7),l=this.gain(.9*n);r.connect(o),o.connect(a),a.connect(l),this.out(l,{pos:t,ref:14,roll:1,rev:1.4})}else{let a=this.filter("highpass",380,.8),o=this.filter("peaking",2400,1,7),l=this.ctx.createWaveShaper(),c=new Float32Array(512);for(let f=0;f<512;f++){let d=f/256-1;c[f]=Math.tanh(d*4)*.9}l.curve=c;let u=this.gain(1.5*n);r.connect(a),a.connect(o),o.connect(l),l.connect(u),this.out(u,{pos:t,ref:1.5,rev:.6})}r.start(i)}loop(t,e,n=1){if(!this.ready)return null;if(this.loops[t])return this.loops[t];let i=this.gain(0),r=e(i);i.gain.setTargetAtTime(n,this.now,.5);let a={g:i,nodes:r,level:n,set:(o,l=.8)=>{a.level=o,i.gain.setTargetAtTime(o,this.now,l)}};return this.loops[t]=a,a}stopLoop(t,e=.5){let n=this.loops[t];n&&(n.g.gain.setTargetAtTime(0,this.now,e/3),setTimeout(()=>{for(let i of n.nodes||[])try{i.stop()}catch{}try{n.g.disconnect()}catch{}},e*1e3+300),delete this.loops[t])}setLoop(t,e,n){let i=this.loops[t];i&&i.set(e,n)}startAmbience(){this.loop("wind",t=>{let e=this.noiseSrc(this.brown,!0),n=this.filter("lowpass",380,.5),i=this.osc("sine",.07),r=this.gain(150);i.connect(r),r.connect(n.frequency);let a=this.gain(.6),o=this.osc("sine",.11),l=this.gain(.35);o.connect(l),l.connect(a.gain),e.connect(n),n.connect(a),a.connect(t),t.connect(this.amb);let c=this.noiseSrc(this.pink,!0),u=this.filter("bandpass",3200,.6),f=this.gain(0),d=this.osc("sine",.09),p=this.gain(.06);return d.connect(p),p.connect(f.gain),c.connect(u),u.connect(f),f.connect(t),e.start(),i.start(),o.start(),c.start(),d.start(),[e,i,o,c,d]},0),this.loop("drone",t=>{let e=this.osc("sine",46.2),n=this.osc("sine",49.1),i=this.osc("triangle",92.5),r=this.gain(.15),a=this.filter("lowpass",220,.5);e.connect(a),n.connect(a),i.connect(r),r.connect(a);let o=this.osc("sine",.05),l=this.gain(.3);o.connect(l);let c=this.gain(.5);return l.connect(c.gain),a.connect(c),c.connect(t),t.connect(this.amb),[e,n,i,o].forEach(u=>u.start()),[e,n,i,o]},0)}traffic(t){t?this.loop("traffic",e=>{let n=this.noiseSrc(this.brown,!0),i=this.filter("lowpass",160,.5);return n.connect(i),i.connect(e),e.connect(this.amb),n.start(),[n]},.25):this.stopLoop("traffic",2)}hum(t,e,n=1,i=!1){return this.loop(t,r=>{let a=this.osc("sawtooth",50),o=this.osc("sine",100),l=this.osc("square",150),c=this.osc("sine",1870),u=this.filter("lowpass",420,.7);a.connect(u);let f=this.gain(.32),d=this.gain(.35),p=this.gain(.05),m=this.gain(.012);u.connect(f),o.connect(d);let x=this.filter("lowpass",700,.7);l.connect(x),x.connect(p),c.connect(m);let g=this.osc("sine",.3),y=this.gain(6);g.connect(y),y.connect(c.frequency);let b=this.noiseSrc(this.pink,!0),E=this.filter("bandpass",650,.7),S=this.gain(.5),_=this.osc("sine",23),w=this.gain(.28);_.connect(w),w.connect(S.gain),b.connect(E),E.connect(S);let v=this.osc("sine",98),M=this.osc("sine",101.5),R=this.gain(.22);v.connect(R),M.connect(R);let C=this.osc("square",120),k=this.filter("bandpass",360,3),D=this.gain(0),B=this.osc("sine",31),I=this.gain(.09);B.connect(I),I.connect(D.gain);let H=this.osc("sine",.43),Y=this.gain(9);H.connect(Y),Y.connect(B.frequency),C.connect(k),k.connect(D);let Z=this.gain(1);[f,d,p,m,S,R,D].forEach(yt=>yt.connect(Z)),this._humExtra=[v,M,C,B,H];let nt=Z;if(i){let yt=this.filter("lowpass",500,.7);Z.connect(yt),nt=yt}nt.connect(r);let K=this.panner(e,i?2.5:1.6,1.3);r.connect(K),K.connect(this.amb);let st=this.gain(.25);K.connect(st),st.connect(this.revRoomIn);let ut=[a,o,l,c,g,b,_,...this._humExtra];return ut.forEach(yt=>yt.start()),this.loops[t+"_osc"]={oscs:[a,o,l,c,this._humExtra[0],this._humExtra[1],this._humExtra[2]],noise:b},ut},n)}humWindDown(t,e=3.5){let n=this.loops[t+"_osc"],i=this.loops[t];if(!n||!i)return;let r=this.now;for(let a of n.oscs)a.frequency.exponentialRampToValueAtTime(Math.max(5,a.frequency.value*.12),r+e);n.noise.playbackRate.exponentialRampToValueAtTime(.1,r+e),i.g.gain.setTargetAtTime(0,r+e*.4,e*.3),setTimeout(()=>this.stopLoop(t,.2),e*1e3+600),delete this.loops[t+"_osc"]}tubeBuzz(t){return this.loop("tube",e=>{let n=this.osc("sawtooth",100),i=this.osc("square",200),r=this.filter("bandpass",2400,2),a=this.filter("lowpass",500,.7),o=this.gain(.05),l=this.gain(.025);n.connect(a),a.connect(o),i.connect(r),r.connect(l),o.connect(e),l.connect(e);let c=this.panner(t,1.2,1.5);return e.connect(c),c.connect(this.amb),n.start(),i.start(),[n,i]},1)}stream(t){return this.loop("stream",e=>{let n=this.noiseSrc(this.pink,!0),i=this.filter("bandpass",900,.8),r=this.osc("sine",3.3),a=this.gain(500);r.connect(a),a.connect(i.frequency);let o=this.noiseSrc(this.white,!0,.7),l=this.filter("bandpass",2600,3),c=this.gain(0),u=this.osc("square",7.1),f=this.gain(.15);u.connect(f),f.connect(c.gain),n.connect(i),i.connect(e),o.connect(l),l.connect(c),c.connect(e);let d=this.panner(t,3,1.3);return e.connect(d),d.connect(this.amb),[n,r,o,u].forEach(p=>p.start()),[n,r,o,u]},.6)}snore(t){return this.loop("snore",e=>{let n=this.noiseSrc(this.brown,!0),i=this.filter("bandpass",180,2),r=this.osc("sawtooth",62),a=this.gain(0),o=this.filter("lowpass",300,1);r.connect(o),o.connect(a);let l=this.gain(0),c=this.osc("sine",.22),u=this.gain(.6);c.connect(u),u.connect(l.gain),u.connect(a.gain),n.connect(i),i.connect(l),l.connect(e),a.connect(e);let f=this.panner(t,1.5,1.5);return e.connect(f),f.connect(this.amb),[n,r,c].forEach(d=>d.start()),[n,r,c]},.7)}heartbeat(t,e=1.2){if(!this.ready||(clearInterval(this._hb),!t))return;let n=()=>{this.tone({f:58,f2:40,d:.14,peak:.55,lp:160,rev:.05}),this.tone({f:52,f2:38,d:.16,peak:.4,lp:160,t:.22,rev:.05})};n(),this._hb=setInterval(()=>{h.paused||n()},1e3/e)}breath(t=1){this.burst({f:1100,q:.7,a:.12,d:.35,peak:.08*t,rev:.05,buf:this.pink}),this.burst({f:800,q:.7,a:.08,d:.3,peak:.06*t,t:.5,rev:.05,buf:this.pink})}branchFall(t,e){for(let n=0;n<9;n++)this.burst({pos:t,type:"highpass",f:2200,d:.012,peak:.9*(1-n/12),t:n*n*.006,rev:.6,ref:4});this.creak(t,1,.5),this.burst({pos:t,f:1800,q:.5,d:.6,peak:.5,t:.25,ref:4}),this.tone({pos:e,f:55,f2:32,d:.5,peak:1.2,lp:200,rev:.5,t:.55,ref:3}),this.burst({pos:e,type:"lowpass",f:400,d:.35,peak:.8,t:.55,rev:.4,ref:3}),this.burst({pos:e,f:1500,q:.6,d:.6,peak:.8,t:.56,rev:.6,ref:3});for(let n=0;n<10;n++)this.burst({pos:e,type:"highpass",f:3e3,d:.01,peak:.4*Yn(),t:.56+Yn()*.4,ref:3})}};function us(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Be;l.morphTargetsRelative=o;let c=0;for(let u=0;u<s.length;++u){let f=s[u],d=0,p=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==s[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(f.morphAttributes[m]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let m;if(e)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(e){let u=0,f=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let m=0;m<p.count;++m)f.push(p.getX(m)+u);u+=s[d].attributes.position.count}l.setIndex(f)}for(let u in r){let f=Qf(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){let p=[];for(let x=0;x<a[u].length;++x)p.push(a[u][x][d]);let m=Qf(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function Qf(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new an(a,e,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let f=l/e;for(let d=0,p=u.count;d<p;d++)for(let m=0;m<e;m++){let x=u.getComponent(d,m);o.setComponent(d+f,m,x)}}else a.set(u.array,l);l+=u.count*e}return i!==void 0&&(o.gpuType=i),o}var Ur={},Jh=new Map;function hc(s,t=2.5){if(!s||!s.image||!s.image.getContext)return null;let e=s.uuid+"|"+t;if(Jh.has(e))return Jh.get(e);let n=s.image,i=n.width,r=n.height,a=n.getContext("2d").getImageData(0,0,i,r).data,o=new Float32Array(i*r);for(let m=0;m<i*r;m++)o[m]=(a[m*4]*.3+a[m*4+1]*.59+a[m*4+2]*.11)/255;let l=document.createElement("canvas");l.width=i,l.height=r;let c=l.getContext("2d"),u=c.createImageData(i,r),f=u.data,d=(m,x)=>o[(x+r)%r*i+(m+i)%i];for(let m=0;m<r;m++)for(let x=0;x<i;x++){let g=d(x+1,m-1)+2*d(x+1,m)+d(x+1,m+1)-(d(x-1,m-1)+2*d(x-1,m)+d(x-1,m+1)),y=d(x-1,m+1)+2*d(x,m+1)+d(x+1,m+1)-(d(x-1,m-1)+2*d(x,m-1)+d(x+1,m-1)),b=-g*t,E=-y*t,S=1,_=Math.hypot(b,E,S);b/=_,E/=_,S/=_;let w=(m*i+x)*4;f[w]=(b*.5+.5)*255,f[w+1]=(E*.5+.5)*255,f[w+2]=(S*.5+.5)*255,f[w+3]=255}c.putImageData(u,0,0);let p=new pn(l);return p.wrapS=s.wrapS,p.wrapT=s.wrapT,p.repeat.copy(s.repeat),p.anisotropy=4,p.colorSpace=xi,Jh.set(e,p),p}function ln(s,t,e=2.5){if(Ur[s])return Ur[s];let{roughness:n=.88,metalness:i=0,...r}=t,o=h.settings.quality==="low"?new Me({...r}):new Es({roughness:n,metalness:i,...r});return r.map&&e>0&&(o.normalMap=hc(r.map,e),o.normalScale=new Yt(1,1)),o.name=s,Ur[s]=o}function it(s,t){if(Ur[s])return Ur[s];let e=new Me(t);return e.name=s,Ur[s]=e}function rp(){let s={leaves:it("leaves",{map:Ql()}),gravel:ln("gravel",{map:_f(),roughness:.9},3),barkOak:ln("barkOak",{map:Zi("oak"),roughness:.92},4),barkBeech:ln("barkBeech",{map:Zi("beech"),roughness:.8},2.5),barkPine:ln("barkPine",{map:Zi("pine"),roughness:.9},4),planksOld:ln("planksOld",{map:hs("old"),roughness:.85},2),planksTower:ln("planksTower",{map:hs("tower"),roughness:.85},2),floor:ln("floor",{map:hs("floor"),roughness:.55},1.5),concrete:ln("concrete",{map:tc(),roughness:.9},2),brick:ln("brick",{map:bf(),roughness:.88},3),asphalt:ln("asphalt",{map:Mf(),roughness:.62},2),sidewalk:ln("sidewalk",{map:Sf(),roughness:.75},2),mulch:it("mulch",{map:ec()}),sand:it("sand",{map:wf()}),wallpaper:it("wallpaper",{map:Ef()}),plaster:it("plaster",{map:Yh()}),plasterW:it("plasterW",{map:Yh([175,170,160])}),roof:ln("roof",{map:Uf(),roughness:.8},2.5),felt:it("felt",{map:Ff()}),shutter:it("shutter",{map:Nf()}),fwall:it("fwall",{map:Cf(),fog:!0}),wire:it("wire",{map:Pf(),transparent:!1,alphaTest:.4,side:Se}),bauzaun:it("bauzaun",{map:If(),alphaTest:.4,side:Se}),tape:it("tape",{map:nc(),side:Se,emissive:2098180}),stripes:it("stripes",{map:Lf()}),metal:ln("metal",{color:6975090,roughness:.42,metalness:.75}),darkMetal:ln("darkMetal",{color:3816510,roughness:.5,metalness:.7}),rust:ln("rust",{color:5913126,roughness:.75,metalness:.3}),black:it("black",{color:723724}),white:it("white",{color:12104874}),wood:it("wood",{color:6178352}),darkWood:it("darkWood",{color:3811870}),paintedWood:it("paintedWood",{color:4872764}),red:it("red",{color:8002582}),glass:ln("glass",{color:658706,roughness:.08,metalness:.2}),water:new Ts({map:zf(),color:6978176,specular:8952234,shininess:80}),leafOak:it("leafOak",{map:Ii("oak"),alphaTest:.45,side:Se}),leafBeech:it("leafBeech",{map:Ii("beech"),alphaTest:.45,side:Se}),leafBush:it("leafBush",{map:Ii("bush"),alphaTest:.45,side:Se}),hedge:it("hedge",{map:Ii("hedge"),alphaTest:.4,side:Se}),hedgeBox:it("hedgeBox",{color:1845784}),pine:it("pineCard",{map:Tf(),alphaTest:.45,side:Se}),fern:it("fern",{map:Af(),alphaTest:.4,side:Se}),grass:it("grass",{map:Rf(),alphaTest:.4,side:Se}),planksAncient:ln("planksAncient",{map:Zf(),roughness:.9},3),mossRoof:ln("mossRoof",{map:Yf(),roughness:.95},3),mossStone:ln("mossStone",{map:tc(),color:5925448,roughness:.9},3),cobweb:new $e({map:$f(),transparent:!0,depthWrite:!1,side:Se,opacity:.5}),ivy:it("ivy",{map:Kf(),alphaTest:.45,side:Se}),litter:it("litter",{map:Ii("oak"),alphaTest:.5,side:Se}),rock:ln("rock",{map:tc(),color:6978138,roughness:.7},3.5)};s.barkOakT=ln("barkOakT",{map:Zi("oak"),vertexColors:!0,roughness:.92},4),s.barkBeechT=ln("barkBeechT",{map:Zi("beech"),vertexColors:!0,roughness:.8},2.5),s.barkPineT=ln("barkPineT",{map:Zi("pine"),vertexColors:!0,roughness:.9},4);for(let e of["mulch","felt"])s[e]&&(s[e].bumpMap=s[e].map,s[e].bumpScale=e.startsWith("bark")?2.2:e==="concrete"?.7:1.4);let t={planksAncient:1.15,mossRoof:1.5,mossStone:1.3,ivy:1.4,leaves:2,gravel:1.7,barkOak:1.9,barkBeech:1.4,barkPine:1.7,barkOakT:2.1,barkBeechT:1.6,barkPineT:1.9,litter:1.4,rock:1.3,mulch:1.8,planksOld:1.5,planksTower:1.5,concrete:1.4,leafOak:1.35,leafBeech:1.2,leafBush:1.5,pine:1.6,fern:1.6,grass:1.5,brick:1.4,asphalt:1.5,sidewalk:1.3,hedge:1.5,roof:1.3,felt:1.4,floor:1.2,wallpaper:1.1};for(let[e,n]of Object.entries(t))s[e]&&s[e].color.setScalar(n);return s}function F(s,t,e,n=1){let i=new Ke(s,t,e);if(n){let r=i.attributes.uv,a=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]/n,r.getY(c)*a[o][1]/n)}}return i}function Pt(s,t,e,n=8,i=1,r=!1){let a=new Ue(s,t,e,n,1,r);if(i){let o=a.attributes.uv,l=Math.PI*2*Math.max(s,t);for(let c=0;c<o.count;c++)o.setXY(c,o.getX(c)*l/i,o.getY(c)*e/i)}return a}function cn(s,t,e=1){let n=new Jt(s,t);if(e){let i=n.attributes.uv;for(let r=0;r<i.count;r++)i.setXY(r,i.getX(r)*s/e,i.getY(r)*t/e)}return n}var tp=new de,ep=new Hn,np=new Cn,ip=new L(1,1,1),sp=new L,Fr=class{constructor(t=48){this.groups=new Map,this.chunk=t}add(t,e,n=0,i=0,r=0,a=0,o=0,l=0,c=1,u=1,f=1,d={}){return np.set(a,o,l,"YXZ"),ep.setFromEuler(np),sp.set(n,i,r),ip.set(c,u,f),tp.compose(sp,ep,ip),this.addM(t,e,tp,d)}addM(t,e,n,i={}){let r=t.index?t.toNonIndexed():t.clone();r.applyMatrix4(n),r.attributes.uv||r.setAttribute("uv",new ce(new Float32Array(r.attributes.position.count*2),2));for(let c of Object.keys(r.attributes))["position","normal","uv"].includes(c)||r.deleteAttribute(c);r.computeBoundingSphere();let a=r.boundingSphere.center,o=Math.floor(a.x/this.chunk)+","+Math.floor(a.z/this.chunk),l=e.uuid+"|"+o+"|"+(i.cast===!1?0:1)+(i.receive===!1?0:1);return this.groups.has(l)||this.groups.set(l,{mat:e,list:[],cast:i.cast!==!1,receive:i.receive!==!1}),this.groups.get(l).list.push(r),r}build(t){let e=[];for(let{mat:n,list:i,cast:r,receive:a}of this.groups.values()){let o=us(i,!1),l=new X(o,n);l.castShadow=r,l.receiveShadow=a,l.matrixAutoUpdate=!1,l.updateMatrix(),t.add(l),e.push(l)}return this.groups.clear(),e}};function ap(s){let t=s.attributes.position,e=new Float32Array(t.count*3);for(let n=0;n<t.count;n++){let i=t.getY(n),r=Math.min(1,Math.max(0,i/2.4)),a=.32+.68*r*r*(3-2*r),o=Math.max(0,1-i/1.4)*.55;e[n*3]=a*(1-o*.35),e[n*3+1]=a*(1+o*.18),e[n*3+2]=a*(1-o*.4)}return s.setAttribute("color",new an(e,3)),s}function oc(s,t,e={}){let n=Ie(t),i=[],r=9,a=e.radius??.4,o=Pt(a*.55,a,s,r,1.2),l=o.attributes.position;for(let f=0;f<l.count;f++){let d=l.getY(f),p=Math.atan2(l.getZ(f),l.getX(f)),m=1+Math.sin(p*3+t)*.06+Math.sin(d*.7+t)*.05;if(l.setX(f,l.getX(f)*m),l.setZ(f,l.getZ(f)*m),d<-s/2+.6){let x=1+(1-(d+s/2)/.6)*.45;l.setX(f,l.getX(f)*x),l.setZ(f,l.getZ(f)*x)}}o.translate(0,s/2,0),o.computeVertexNormals(),i.push(o);let c=[],u=e.branches??6;for(let f=0;f<u;f++){let d=s*(e.branchStart??.45)+n()*s*(1-(e.branchStart??.45))*.85,p=(e.branchLen??3.5)*(.6+n()*.6),m=n()*Math.PI*2,x=.6+n()*.5,g=Pt(a*.18,a*.45,p,5,1.2);g.translate(0,p/2,0);let y=new de().makeRotationFromEuler(new Cn(x,m,0,"YXZ"));y.setPosition(0,d,0),g.applyMatrix4(y),i.push(g);let b=new L(0,p,0).applyMatrix4(y);if(c.push(b),p>2){let E=p*.45,S=Pt(a*.06,a*.14,E,4,1.2);S.translate(0,E/2,0);let _=new de().makeRotationFromEuler(new Cn(x+.5,m+(n()-.5)*1.6,0,"YXZ")),w=new L(0,p*.6,0).applyMatrix4(y);_.setPosition(w),S.applyMatrix4(_),i.push(S),c.push(new L(0,E,0).applyMatrix4(_))}}return{geo:ap(us(i.map(f=>f.toNonIndexed()),!1)),ends:c}}function lc(s,t,e,n={}){let i=Ie(e+100),r=[],a=n.cardSize??3.2,o=[...s];for(let l=0;l<(n.extra??5);l++)o.push(new L((i()-.5)*3,t*(.75+i()*.25),(i()-.5)*3));for(let l of o)for(let c=0;c<(n.perEnd??2);c++){let u=new Jt(a*(.7+i()*.6),a*(.7+i()*.6)),f=new de().makeRotationFromEuler(new Cn((i()-.5)*1.2,i()*Math.PI,(i()-.5)*.8));f.setPosition(l.x+(i()-.5)*1.2,l.y+(i()-.5)*.8,l.z+(i()-.5)*1.2),u.applyMatrix4(f),r.push(u.toNonIndexed())}return us(r,!1)}function op(s){let t=[];for(let e=0;e<3;e++){let n=[15,18,21][e],i=oc(n,10+e,{branches:10,branchStart:.38,branchLen:4.4,radius:.45});t.push({kind:"oak",trunk:i.geo,crown:lc(i.ends,n,10+e,{cardSize:3.4,perEnd:3,extra:8}),trunkMat:s.barkOakT,crownMat:s.leafOak,R:.45})}for(let e=0;e<2;e++){let n=[17,22][e],i=oc(n,30+e,{branches:9,branchStart:.5,branchLen:3.8,radius:.34});t.push({kind:"beech",trunk:i.geo,crown:lc(i.ends,n,30+e,{cardSize:3.2,perEnd:3,extra:8}),trunkMat:s.barkBeechT,crownMat:s.leafBeech,R:.34})}for(let e=0;e<2;e++){let n=[22,25][e],i=oc(n,50+e,{branches:5,branchStart:.78,branchLen:2.6,radius:.3});t.push({kind:"pine",trunk:i.geo,crown:lc(i.ends,n,50+e,{cardSize:3.2,perEnd:3,extra:4}),trunkMat:s.barkPineT,crownMat:s.pine,R:.3})}{let n=oc(4,70,{branches:5,branchStart:.25,branchLen:1.4,radius:.06});t.push({kind:"sapling",trunk:n.geo,crown:lc(n.ends,4,70,{cardSize:1.6,perEnd:2,extra:3}),trunkMat:s.barkBeechT,crownMat:s.leafBeech,R:.06,small:!0})}{let n=[],i=Pt(.4,.75,9,8,1.2);i.translate(0,9/2,0);let r=Pt(.12,.35,5,6,1.2);r.translate(0,2.5,0),r.rotateZ(.55),r.translate(.4,9-1.5,0);let a=Pt(.12,.35,5,6,1.2);a.translate(0,2.5,0),a.rotateZ(-.6),a.translate(-.4,9-1.8,0);let o=Pt(.06,.15,3,5,1.2);o.translate(0,1.5,0),o.rotateX(.9),o.translate(0,4,.3);for(let l of[i,r,a,o])n.push(l.toNonIndexed());t.push({kind:"dead",trunk:ap(us(n,!1)),crown:null,trunkMat:s.barkOakT,crownMat:null,R:.6})}return t}var cc=class{constructor(t,e=36){this.V=t,this.chunk=e,this.items=new Map}add(t,e,n,i,r=1,a=0){let o=Math.floor(e/this.chunk)+","+Math.floor(i/this.chunk)+"|"+t;return this.items.has(o)||this.items.set(o,[]),this.items.get(o).push({x:e,y:n,z:i,scale:r,rotY:a}),this.V[t].R*r}build(t){let e=new de,n=new Hn,i=new L,r=new L,a=new Cn;for(let[o,l]of this.items){let c=+o.split("|")[1],u=this.V[c],f=new ws(u.trunk,u.trunkMat,l.length),d=u.crown?new ws(u.crown,u.crownMat,l.length):null;l.forEach((p,m)=>{a.set(0,p.rotY,0),n.setFromEuler(a),r.set(p.x,p.y-.15,p.z),i.set(p.scale,p.scale,p.scale),e.compose(r,n,i),f.setMatrixAt(m,e),d&&d.setMatrixAt(m,e)}),f.castShadow=!0,f.receiveShadow=!0,f.computeBoundingSphere(),t.add(f),d&&(d.castShadow=!0,d.receiveShadow=!1,d.computeBoundingSphere(),t.add(d))}}};function $i(s,t,e=3){let n=[];for(let i=0;i<e;i++){let r=new Jt(s,t);r.translate(0,t/2,0),r.rotateY(i/e*Math.PI),n.push(r.toNonIndexed())}return us(n,!1)}var Yi=class{constructor(t,e,n=36,i=!0){this.geo=t,this.mat=e,this.chunk=n,this.items=new Map,this.cast=i}add(t,e,n,i=1,r=0,a=i){let o=Math.floor(t/this.chunk)+","+Math.floor(n/this.chunk);this.items.has(o)||this.items.set(o,[]),this.items.get(o).push([t,e,n,i,r,a])}build(t){let e=new de,n=new Hn,i=new L,r=new L,a=new Cn;for(let o of this.items.values()){let l=new ws(this.geo,this.mat,o.length);o.forEach((c,u)=>{a.set(0,c[4],0),n.setFromEuler(a),r.set(c[0],c[1],c[2]),i.set(c[3],c[5],c[3]),e.compose(r,n,i),l.setMatrixAt(u,e)}),l.castShadow=this.cast,l.receiveShadow=!0,l.computeBoundingSphere(),t.add(l)}}};function Gs({coat:s=1711386,pants:t=1184274,skin:e=6967876,hood:n=!0,cap:i=!1,height:r=1.85,coatTex:a=null,longCoat:o=!1}={}){let l=r/1.8,c={},u=new Me({color:s,map:a||null}),f=new Me({color:t}),d=new Me({color:e}),p=new Me({color:723723}),m=new Qt,x=new Qt;x.position.y=.95*l,m.add(x);let g=new X(new ss(.2*l,.42*l,4,10),u);g.position.y=.36*l,g.scale.set(1.1,1,.75),x.add(g);let y=new Qt;y.position.y=.62*l,x.add(y);let b=new Qt;b.position.y=.1*l,y.add(b);let E=new X(new ze(.115*l,12,10),d);if(E.position.y=.13*l,E.scale.set(.9,1.08,1),b.add(E),n){let D=new X(new ze(.15*l,12,10,0,Math.PI*2,0,Math.PI*.62),u);D.position.set(0,.15*l,.025*l),D.rotation.x=.35,b.add(D);let B=new X(new Ti(.09*l,12),new $e({color:197379}));B.position.set(0,.12*l,-.105*l),B.rotation.y=Math.PI,b.add(B)}if(i){let D=new X(new ze(.125*l,12,8,0,Math.PI*2,0,Math.PI*.5),u);D.position.y=.16*l,b.add(D)}if(o){let D=new X(new Ue(.23*l,.31*l,.62*l,12,1,!0),new Me({color:s,side:Se}));D.position.y=-.22*l,x.add(D),c.skirt=D,g.scale.set(1.22,1,.82);let B=new X(new Ue(.17*l,.24*l,.12*l,12,1,!0),new Me({color:s,side:Se}));B.position.y=.66*l,x.add(B)}let S=(D,B,I)=>{let H=new ss(D,B,3,8);return H.translate(0,-B/2-D*.5,0),new X(H,I)},_=D=>{let B=new Qt;B.position.set(.25*D*l,.02*l,0),y.add(B);let I=S(.065*l,.26*l,u);B.add(I);let H=new Qt;H.position.y=-.33*l,B.add(H);let Y=S(.055*l,.24*l,u);H.add(Y);let Z=new X(new ze(.05*l,8,6),d);return Z.position.y=-.33*l,H.add(Z),{sh:B,el:H,hand:Z}},w=D=>{let B=new Qt;B.position.set(.1*D*l,0,0),x.add(B);let I=S(.085*l,.36*l,f);B.add(I);let H=new Qt;H.position.y=-.45*l,B.add(H);let Y=S(.07*l,.36*l,f);H.add(Y);let Z=new X(new Ke(.11*l,.08*l,.26*l),p);return Z.position.set(0,-.46*l,-.05*l),H.add(Z),{hp:B,kn:H}},v=_(-1),M=_(1),R=w(-1),C=w(1);m.traverse(D=>{D.isMesh&&(D.castShadow=!0,D.receiveShadow=!0)});let k={root:m,hips:x,chest:y,neck:b,head:E,armL:v,armR:M,legL:R,legR:C,phase:0,...c};return k.walk=(D,B)=>{k.phase+=D*B*3.3;let I=Math.sin(k.phase),H=Math.min(1,B/1.5),Y=B>3;R.hp.rotation.x=I*.6*H,C.hp.rotation.x=-I*.6*H,R.kn.rotation.x=-Math.max(0,-Math.cos(k.phase))*.9*H,C.kn.rotation.x=-Math.max(0,Math.cos(k.phase))*.9*H,v.sh.rotation.x=-I*(Y?.9:.4)*H,M.sh.rotation.x=I*(Y?.9:.4)*H,v.el.rotation.x=Y?1.2:.25,M.el.rotation.x=Y?1.2:.25,x.position.y=.95*l+Math.abs(Math.cos(k.phase))*.04*H,y.rotation.x=Y?-.25:-.05,k.skirt&&(k.skirt.rotation.x=-Math.abs(I)*.12*H-(Y?.18:0))},k.sit=()=>{x.position.y=.48*l,R.hp.rotation.set(1.45,0,.12),C.hp.rotation.set(1.38,0,-.1),R.kn.rotation.x=-1.4,C.kn.rotation.x=-1.3,y.rotation.x=-.32,b.rotation.x=-.45,v.sh.rotation.set(.75,0,.12),M.sh.rotation.set(.7,0,-.12),v.el.rotation.x=.55,M.el.rotation.x=.6},k.stand=()=>{x.position.y=.95*l;for(let D of[R,C])D.hp.rotation.set(0,0,0),D.kn.rotation.set(0,0,0);for(let D of[v,M])D.sh.rotation.set(0,0,0),D.el.rotation.set(.1,0,0);v.sh.rotation.z=-.08,M.sh.rotation.z=.08,y.rotation.set(0,0,0),b.rotation.set(0,0,0)},k.stand(),k}var lp=Xi(202),uc={minX:-150,maxX:60,minZ:-170,maxZ:180,step:2};function yy(s,t){let e=(we(lp,s/38,t/38,4)-.5)*2;e+=(we(lp,s/9+50,t/9,2)-.5)*.35;let n=Ce((-t-26)/8,0,1);if(e*=1-kr(n),t>-32&&t<66){let r=Ce(1-(Math.abs(s)-3)/5,0,1);e*=1-r*.7}let i=Math.hypot(s+63,t+-140);if(i<13&&(e=e*kr(Ce((i-7)/6,0,1))),s<-79){let r=kr(Ce((-79-s)/2.5,0,1));e*=1-r;let a=Math.abs(s+83.2);a<1.6&&(e-=Math.cos(a/1.6*Math.PI/2)*.75*kr(Ce((t-60)/8,0,1))*kr(Ce((160-t)/8,0,1)))}return e}var dc=class{constructor(){let t=uc;this.nx=Math.round((t.maxX-t.minX)/t.step)+1,this.nz=Math.round((t.maxZ-t.minZ)/t.step)+1,this.h=new Float32Array(this.nx*this.nz);for(let e=0;e<this.nz;e++)for(let n=0;n<this.nx;n++){let i=t.minX+n*t.step,r=t.minZ+e*t.step;this.h[e*this.nx+n]=yy(i,r)}this.holes=[]}dig(t,e,n,i,r){let a=uc;for(let o=0;o<this.nz;o++)for(let l=0;l<this.nx;l++){let c=a.minX+l*a.step,u=a.minZ+o*a.step;c>=t&&c<=e&&u>=n&&u<=i&&(this.h[o*this.nx+l]=r)}}hole(t,e,n,i){this.holes.push([t,e,n,i])}hv(t,e){return t=Ce(t,0,this.nx-1),e=Ce(e,0,this.nz-1),this.h[e*this.nx+t]}height(t,e){let n=uc,i=(t-n.minX)/n.step,r=(e-n.minZ)/n.step,a=Math.floor(i),o=Math.floor(r),l=i-a,c=r-o,u=this.hv(a,o),f=this.hv(a+1,o),d=this.hv(a,o+1),p=this.hv(a+1,o+1);return l+c<=1?u+(f-u)*l+(d-u)*c:p+(d-p)*(1-l)+(f-p)*(1-c)}mesh(t){let e=uc,n=this.nx,i=this.nz,r=new Float32Array(n*i*3),a=new Float32Array(n*i*2),o=new Float32Array(n*i*3),l=Xi(77);for(let p=0;p<i;p++)for(let m=0;m<n;m++){let x=p*n+m,g=e.minX+m*e.step,y=e.minZ+p*e.step;r[x*3]=g,r[x*3+1]=this.h[x],r[x*3+2]=y,a[x*2]=g/6,a[x*2+1]=y/6;let b=we(l,g/14,y/14,3),E=we(l,g/4+9,y/4,2),S=.62+b*.55+(E-.5)*.2,_=Ce((.5-this.h[x])*.15,0,.12);o[x*3]=S*(1-_),o[x*3+1]=S*(1+_*.6),o[x*3+2]=S*(.92-_*.3)}let c=[],u=(p,m)=>this.holes.some(x=>p>x[0]&&p<x[1]&&m>x[2]&&m<x[3]);for(let p=0;p<i-1;p++)for(let m=0;m<n-1;m++){let x=p*n+m,g=p*n+m+1,y=(p+1)*n+m,b=(p+1)*n+m+1,E=e.minX+(m+.5)*e.step,S=e.minZ+(p+.5)*e.step;u(E,S)||c.push(x,y,g,y,b,g)}let f=new Be;f.setAttribute("position",new an(r,3)),f.setAttribute("uv",new an(a,2)),f.setAttribute("color",new an(o,3)),f.setIndex(c),f.computeVertexNormals();let d=new X(f,t);return d.receiveShadow=!0,d}};function Or(s,t,e,n=1,i=.035,r=3){let a=[],o=[],l=[],c=0,u=0;for(let m=0;m<t.length-1;m++){let[x,g]=t[m],[y,b]=t[m+1],E=Math.hypot(y-x,b-g),S=Math.max(1,Math.ceil(E/n)),_=(y-x)/E,v=-((b-g)/E),M=_;for(let R=m===0?0:1;R<=S;R++){let C=R/S,k=x+(y-x)*C,D=g+(b-g)*C,B=4;for(let I=0;I<=B;I++){let H=(I/B-.5)*e,Y=k+v*H,Z=D+M*H;a.push(Y,s.height(Y,Z)+i,Z),o.push(I/B*e/r,(c+E*C)/r)}if(u>0)for(let I=0;I<B;I++){let H=(u-1)*(B+1)+I,Y=H+1,Z=u*(B+1)+I,nt=Z+1;l.push(H,Y,Z,Y,nt,Z)}u++}c+=E}let f=new Be;f.setAttribute("position",new ce(a,3)),f.setAttribute("uv",new ce(o,2)),f.setIndex(l),f.computeVertexNormals();let d=f.attributes.normal,p=0;for(let m=0;m<d.count;m++)p+=d.getY(m);if(p<0){for(let m=0;m<l.length;m+=3){let x=l[m];l[m]=l[m+1],l[m+1]=x}f.setIndex(l),f.computeVertexNormals()}return f}var vy=new L,cp=new Hn,hp=new de,_y=new L(0,1,0);function In(s,t,e,n,i=.2,r=i){let a=new L(...e),o=new L(...n),l=vy.subVectors(o,a),c=l.length(),u=F(i,c,r,1);cp.setFromUnitVectors(_y,l.clone().normalize()),hp.compose(a.clone().add(o).multiplyScalar(.5),cp,new L(1,1,1)),s.addM(u,t,hp)}function ds(s,t,e,n=1){let i=s/2,r=e/2,a=Math.hypot(i,t),o=[-i,0,-r,-i,0,r,0,t,r,-i,0,-r,0,t,r,0,t,-r,i,0,r,i,0,-r,0,t,-r,i,0,r,0,t,-r,0,t,r,-i,0,r,i,0,r,0,t,r,i,0,-r,-i,0,-r,0,t,-r],l=[0,0,e/n,0,e/n,a/n,0,0,e/n,a/n,0,a/n,0,0,e/n,0,e/n,a/n,0,0,e/n,a/n,0,a/n,0,0,s/n,0,s/n/2,t/n,0,0,s/n,0,s/n/2,t/n],c=new Be;return c.setAttribute("position",new ce(o,3)),c.setAttribute("uv",new ce(l,2)),c.computeVertexNormals(),c}function fc(s,t,e,n,i,r=0){let a=Math.cos(r),o=Math.sin(r),l=(c,u,f)=>[e+c*a+f*o,n+u,i-c*o+f*a];for(let c=0;c<3;c++){let u=l(0,.45,-.18+c*.13);s.add(F(1.8,.04,.11,.5),t.wood,...u,0,r,0)}for(let c=0;c<2;c++){let u=l(0,.62+c*.14,.27);s.add(F(1.8,.1,.03,.5),t.wood,...u,-.15,r,0)}for(let c of[-.75,.75]){let u=l(c,.22,0);s.add(F(.06,.44,.5),t.darkMetal,...u,0,r,0);let f=l(c,.65,.26);s.add(F(.05,.45,.05),t.darkMetal,...f,-.15,r,0)}}function up(s,t,e,n,i){s.add(Pt(.25,.22,.8,10,1),t.darkMetal,e,n+.5,i),s.add(Pt(.04,.04,.6,6,1),t.darkMetal,e,n+.3,i)}function Br(s,t,e,n,i,r){let a=it("car"+r,{color:r}),o=Math.cos(i),l=Math.sin(i),c=(u,f,d)=>[e+u*o+d*l,f,n-u*l+d*o];s.add(F(1.78,.62,4.2,1),a,...c(0,.62,0),0,i,0),s.add(F(1.6,.5,2.1,1),a,...c(0,1.17,.15),0,i,0),s.add(F(1.62,.42,2,1),t.glass,...c(0,1.16,.15),0,i,0);for(let u of[-.82,.82])for(let f of[-1.35,1.35])s.add(Pt(.32,.32,.22,12,1),t.black,...c(u,.32,f),0,i,Math.PI/2);s.add(F(1.5,.12,.05,1),it("tail",{color:3803142,emissive:1179648}),...c(0,.78,2.1),0,i,0)}function Mn(s=16756848,t=2.5,e=.5,n=!0){let i=new Ms(new ns({map:Bf(),color:s,transparent:!0,opacity:e,blending:Ai,depthWrite:!1,fog:n}));return i.scale.set(t,t,1),i}function ii(s){return new $e({color:s})}function Fn(s,t,e,n={}){let i=Df(s,n),r=new X(new Jt(t,e),new Me({map:i,side:Se}));return r.castShadow=!0,r.receiveShadow=!0,r}function dp(s,t,e,n,i=0){let r=new Qt,a=new X(new ze(.22,14,10),new Me({color:10504720}));a.scale.set(1.15,.85,1.15),a.position.y=.19,r.add(a);let o=new X(new Ue(.02,.03,.08,6),new Me({color:3815960}));o.position.y=.38,r.add(o);let l=document.createElement("canvas");l.width=l.height=128;let c=l.getContext("2d");c.fillStyle="#ffb040",c.beginPath(),c.moveTo(30,50),c.lineTo(50,30),c.lineTo(56,56),c.fill(),c.beginPath(),c.moveTo(98,50),c.lineTo(78,30),c.lineTo(72,56),c.fill(),c.beginPath(),c.moveTo(24,76);for(let d=0;d<=8;d++)c.lineTo(24+d*10,d%2?86:98);c.lineTo(104,76),c.quadraticCurveTo(64,112,24,76),c.fill();let u=new pn(l);u.colorSpace=mn;let f=new X(new Jt(.34,.34),new $e({map:u,transparent:!0,blending:Ai,depthWrite:!1}));return f.position.set(0,.2,.235),r.add(f),r.position.set(t,e,n),r.rotation.y=i,a.castShadow=!0,s.add(r),{g:r,face:f}}function fp(s,t,e,n){let i=new Qt,r=new X(new Ue(.05,.045,.13,10),new $e({color:9048072,transparent:!0,opacity:.9}));r.position.y=.07,i.add(r);let a=new X(new Ue(.035,.05,.03,10),new Me({color:7829367}));a.position.y=.15,i.add(a);let o=Mn(16723992,.8,.7);return o.position.y=.1,i.add(o),i.position.set(t,e,n),s.add(i),{g:i,halo:o}}var Dt={homeDoor:new L(-7.97,0,-131),homeSpawn:[-6.6,0,-131],deniz:[-7.55,.3,-130.55],canBench:[-3,-55],tower:[13,-50],schneiseStart:[0,-31],barrier:[0,57.5],squeeze:[-3.3,54.4],pile:[-7,54.6],corridor:[[-7.8,54.6],[-13,60],[-20,68],[-27,77],[-36,84],[-46,83],[-55,86],[-60,94],[-62,102],[-69,104.5],[-75,106],[-75.5,118],[-72,128],[-67,133.5]],escape:[[-71.5,142.5],[-74,131],[-75.5,118],[-75.5,106]],dropAt:[-61,98],fenceX:-79,gateZ:106,hut:[-62,140],clearing:[-63,140],ventExit:[-71.8,142.4],speaker:new L(-56,5,150),streamX:-83.2};function gp(s,t,e){let n=new Fr(48),i=new dc;t.terrain=i,i.hole(-64,-60,138,142),t.underground=[{minX:-64,maxX:-60,minZ:138,maxZ:142,top:1},{minX:400,maxX:700,minZ:-100,maxZ:100,top:100}],h.terrain=i;let r=Ql(),a=h.settings.quality==="low"?new Me({map:r,normalMap:hc(r,3.2),vertexColors:!0,color:new $t(2.1,2.1,2.1)}):new Es({map:r,normalMap:hc(r,3.2),roughness:.74,metalness:0,vertexColors:!0,color:new $t(2.2,2.2,2.2)});s.add(i.mesh(a));let o=(N,W)=>i.height(N,W),l=Ie(4242);by(s),t.tag="Stra\xDFe";let c=new X(cn(7,80,6),e.asphalt);c.rotation.x=-Math.PI/2,c.position.set(0,.012,-112),c.receiveShadow=!0,s.add(c);for(let N of[-1,1])n.add(F(3,.12,80,2),e.sidewalk,N*5,.06,-112),n.add(F(.18,.16,80,1),e.concrete,N*3.5,.08,-112),n.add(F(2,.03,80,2),e.sidewalk,N*7.5,.015,-112),t.addFloor(N>0?3.5:-6.5,N>0?6.5:-3.5,-152,-72,.12);t.addSurface(-3.5,3.5,-155,-71,"asphalt"),t.addSurface(-9,-3.5,-155,-71,"sidewalk"),t.addSurface(3.5,9,-155,-71,"sidewalk"),t.addRegionBox(-6.6,6.6,-150,-70),t.addRegionBox(-8.4,-6.4,-132.3,-129.7),t.addRegionBox(-8,-6,-150,-72),t.addRegionBox(6,8,-150,-72);for(let N=0;N<5;N++){let W=-6.6+N*3.3;n.add(cn(3.3,2,0),e.bauzaun,W,1.12,-150.3,0,0,0,1,1,1,{cast:!1}),n.add(F(.6,.15,.25,1),e.concrete,W-1.65,.08,-150.3)}n.add(F(.6,.15,.25,1),e.concrete,9.9,.08,-150.3),t.addBox(-8.3,8.3,-150.45,-150.15,-50,50,{label:"Bauzaun Stra\xDFenende"});{let N=Fn([{t:"DURCHGANG",font:"bold 44px Arial",color:"#b01010"},{t:"GESPERRT",font:"bold 44px Arial",color:"#b01010"}],.6,.4,{w:256,h:170,bg:"#f4f0e0"});N.position.set(-1.2,1.4,-150.25),s.add(N)}t.tag="H\xE4user/Stra\xDFenrand";let u=[-145,-131,-117,-103,-89];u.forEach((N,W)=>{jh(n,e,s,t,-14,N,11,12,W%4,"east",W===1),jh(n,e,s,t,14,N+4,11,12,(W+2)%4,"west",!1)});for(let N=-20;N<=20;N+=13)jh(n,e,s,t,N,-161,12,10,(N+40)%4,"south",!1);t.addBox(-30,30,-156,-152);for(let N of[-138,-124,-110,-96,-82])t.addBox(-20,-8.4,N-1,N+1),t.addBox(8.4,20,N+3,N+5);for(let N of[-138,-124,-110,-96])n.add(F(.1,1.8,2,1),e.planksTower,-8.6,.9,N),n.add(F(.1,1.8,2,1),e.planksTower,8.6,.9,N+4);for(let N of u)for(let W of[-1,1]){let U=W<0?N:N+4;for(let j of[-4,3.2])n.add(F(.6,.8,2.6,1),e.hedgeBox,W*7.6,.4,U+j,0,0,0,1,1,1),t.addBox(W*7.6-.3,W*7.6+.3,U+j-1.3,U+j+1.3,-1,.8)}let f=[[-5.9,-146],[-5.9,-121],[-5.9,-96],[5.9,-133],[5.9,-108],[5.9,-83]];for(let[N,W]of f)xp(n,e,s,t,N,W,N<0?1:-1);Br(n,e,2.35,-141,0,2766144),Br(n,e,2.35,-119,0,5905432),Br(n,e,2.35,-98,Math.PI,3947578),Br(n,e,-2.35,-126,Math.PI,1976866),Br(n,e,-2.35,-106,0,6974054);for(let[N,W]of[[2.35,-141],[2.35,-119],[2.35,-98],[-2.35,-126],[-2.35,-106]])t.addBox(N-.95,N+.95,W-2.15,W+2.15,-1,1.5);for(let[N,W]of[[-7.2,-128],[-7.2,-127.2],[7.2,-100],[7.2,-113]])n.add(F(.6,1,.7,1),it("bin"+(N>0?1:0),{color:N>0?2767442:3815994}),N,.5,W),t.addBox(N-.3,N+.3,W-.35,W+.35,-1,1);dp(s,7.25,.15,-98.45,-Math.PI/2),t.addLamp({pos:[6.9,.55,-98.45],color:16747056,intensity:1.8,distance:5,flicker:N=>.75+Math.sin(N*13)*.12+Math.sin(N*31.7)*.1});{let N=Mn(16747056,.9,.35);N.position.set(7,.38,-98.45),s.add(N)}let d=Fn([{t:"Wendelsweg",font:"bold 64px Arial"}],1.2,.3,{w:512,h:128,bg:"#f2f2ec",border:"#222"});d.position.set(-5.9,2.6,-149),d.rotation.y=Math.PI/2,s.add(d),n.add(Pt(.04,.04,2.8,6),e.metal,-5.9,1.4,-149);let p=Fn(["Waldspielpark",{t:"Goetheturm  \u2192",font:"bold 56px Arial"}],1.4,.7,{bg:"#5a3a20",fg:"#f0e6cc",border:"#e8dcc0"});p.position.set(5.6,2.1,-76),p.rotation.y=-Math.PI/2,s.add(p),n.add(Pt(.05,.05,2.2,6),e.wood,5.6,1.1,-76),n.add(Pt(.06,.06,1,8),e.white,-3.8,.5,-73),n.add(F(5.5,.1,.1,1),e.stripes,-1,.95,-73);for(let N of[-140,-114,-90])My(n,e,s,t,-7.4,N);t.tag="Spielplatz Goetheturm";let m=new X(cn(56,44,2.5),e.mulch);m.rotation.x=-Math.PI/2,m.position.set(0,.02,-51),m.receiveShadow=!0,s.add(m);let x=new X(Or(i,[[0,-72],[0,-60],[-2,-50],[0,-38],[0,-29]],3.6,1,.045),e.gravel);x.receiveShadow=!0,s.add(x),t.addRegionBox(-27,27,-72.5,-29.5),t.addSurface(-28,28,-72,-29,"mulch"),t.addSurface(-2,2,-72,-29,"gravel"),Sy(n,e,s,t,Dt.tower[0],Dt.tower[1]),wy(n,e,s,t,-18,-65),Ey(n,e,t,-12,-47),h.objects.swing=Ty(n,e,s,t,-17,-37);for(let[N,W,U,j]of[[-4,-40,4.4,.3],[-4,-36,4.4,.3],[-6.05,-38,.3,4.4],[-1.95,-38,.3,4.4]])n.add(F(U,.3,j,1),e.wood,N,.15,W);{let N=new X(cn(3.8,3.8,2),e.sand);N.rotation.x=-Math.PI/2,N.position.set(-4,.12,-38),N.receiveShadow=!0,s.add(N),t.addFloor(-6,-2,-40,-36,.12),t.addSurface(-6,-2,-40,-36,"sand")}Ay(n,e,t,12,-66),fc(n,e,-3.6,0,-55,Math.PI/2),t.addBox(-3.9,-3.3,-55.9,-54.1,-1,.9),fc(n,e,8,0,-34.5,Math.PI),t.addBox(7.1,8.9,-34.8,-34.2,-1,.9),up(n,e,-3.6,0,-53.2);let g=new X(new Ue(.033,.033,.16,12),new Me({color:2046496,emissive:132098}));g.position.set(-3.55,.54,-55.35),g.castShadow=!0,s.add(g),h.objects.can=g;for(let N=0;N<5;N++){let W=-39+N*2,U=6-N%2*2.2,j=22+N%2*1.1;n.add(F(U,1.3,.7,1),e.hedgeBox,j,.65,W),t.addBox(j-U/2,j+U/2,W-.35,W+.35,-1,1.3)}Qh(n,e,s,t,1.6,-69,null),h.objects.flickerLamp=Qh(n,e,s,t,-7,-52,N=>Math.sin(N*2.1)>.75&&Math.random()<.35?.05:1),Qh(n,e,s,t,3,-33.5,()=>0,!0);let y=Fn([{t:"WALDSPIELPARK",font:"bold 54px Georgia"},{t:"GOETHETURM",font:"bold 62px Georgia"}],3.2,1.2,{bg:"#4a3220",fg:"#ecdcb8",border:"#2a1a10"});y.position.set(-5,2.3,-71.2),s.add(y),n.add(Pt(.12,.12,3,8),e.wood,-6.5,1.5,-71.2),n.add(Pt(.12,.12,3,8),e.wood,-3.5,1.5,-71.2),t.addCircle(-6.5,-71.2,.15),t.addCircle(-3.5,-71.2,.15);let b=[[-22,-58],[-20,-44],[18,-66],[22,-58],[-14,-68],[24,-34],[-24,-33],[10,-38]];t.tag="H\xFCgelschneise";let E=new X(Or(i,[[0,-30],[0,63]],5.2,.5,.09,3),e.gravel);E.receiveShadow=!0,s.add(E),t.addRegionBox(-2.6,2.6,-31,60.9),t.addSurface(-2.6,2.6,-31,64,"gravel");{n.add(Pt(.07,.07,2.4,8),e.wood,2.9,o(2.9,-27)+1.2,-27),t.addCircle(2.9,-27,.12);let N=Fn([{t:"H\xFCgelschneise",font:"bold 60px Georgia"}],1.1,.28,{w:512,h:128,bg:"#e8e0c8",fg:"#2a2a1a",border:"#3a2a1a"});N.position.set(2.9,o(2.9,-27)+2.1,-27),N.rotation.y=-.3,s.add(N);let W=Fn([{t:"Maunzenweiher 1,8 km",font:"bold 44px Georgia"}],1,.22,{w:512,h:112,bg:"#e8e0c8",fg:"#2a2a1a",border:"#3a2a1a"});W.position.set(2.9,o(2.9,-27)+1.75,-27),W.rotation.y=.4,s.add(W)}fc(n,e,3.3,o(3.3,12),12,-Math.PI/2),Ry(n,e,7.5,o(7.5,31),31),t.tag="Sperrung Forstarbeiten";{n.add(Pt(.42,.55,17,10,1.2),e.barkOak,1,o(1,60.5)+.55,60.5,0,0,Math.PI/2);let W=Pt(1.6,1.6,.6,12,1);n.add(W,it("rootdirt",{color:2760212}),9.6,o(9.6,60.5)+1.2,60.5,0,0,Math.PI/2);for(let j=0;j<7;j++)n.add(Pt(.04,.1,2.5,5,1),e.barkOak,-4+j*1.8,o(0,60.5)+1.4,60.5+(j%2?.6:-.6),j%2?.9:-.9,0,.2);t.addBox(-8,10,60.5-.7,60.5+.7);for(let j of[-2.3,2.3])n.add(Pt(.06,.06,1.2,8),e.white,j,o(j,57.5)+.6,57.5);n.add(F(4.6,.25,.04,1),e.stripes,0,o(0,57.5)+1,57.5),n.add(F(4.6,.25,.04,1),e.stripes,0,o(0,57.5)+.45,57.5),t.addBox(-2.6,2.6,57.3,57.7);let U=Fn([{t:"FORSTARBEITEN",font:"bold 50px Arial",color:"#b01010"},{t:"Lebensgefahr!",font:"bold 40px Arial"},{t:"Weg gesperrt",font:"36px Arial"}],.9,.6,{w:384,h:256,bg:"#f4f0e0"});U.position.set(.6,o(0,57.4)+1.45,57.4),U.rotation.y=Math.PI,s.add(U),n.add(Pt(.035,.035,1.4,6),e.metal,.6,o(0,57.4)+.7,57.45)}t.tag="Durchschlupf",t.addRegionPath([[-2.2,54.4],[-7.8,54.6]],.75);{let[N,W]=Dt.squeeze;h.squeezeTrees=[[N,W-1.25],[N,W+1.25]];let U=o(N,W);n.add(Pt(.08,.17,3.4,6,1.2),e.barkOak,N-.2,U+1.32,W,Math.PI/2-.06,0,0),t.addOBB(N-.2,W,.22,1.7,0,U+1.2,U+1.55),t.addBox(N-1.8,N+1,W-2.6,W-.75),t.addBox(N-1.8,N+1,W+.75,W+2.6)}h.objects.pile=Py(s,t,Dt.pile[0],o(...Dt.pile),Dt.pile[1]),t.tag="Wald-Korridor",t.addRegionPath(Dt.corridor,3),t.addRegionPath(Dt.escape,3),t.addRegionCircle(Dt.clearing[0],Dt.clearing[1],9.5);{let N=document.createElement("canvas");N.width=64,N.height=256;let W=N.getContext("2d"),U=W.createImageData(64,256);for(let Ct=0;Ct<256;Ct++)for(let Xt=0;Xt<64;Xt++){let le=Xt/63,te=1-Math.abs(le-.5)*2,lt=(Math.sin(Xt*1.7+Ct*.31)+Math.sin(Ct*.73+Xt*.4)*.6)*.16+(l()-.5)*.4,De=Math.max(0,Math.min(1,te*1.7-.3+lt)),en=(Ct*64+Xt)*4;U.data[en]=U.data[en+1]=U.data[en+2]=De*255,U.data[en+3]=255}W.putImageData(U,0,0);let j=new pn(N);j.wrapS=j.wrapT=Mi;let Gt=it("trodden",{map:ec(),alphaMap:j,alphaTest:.5,color:new $t(2,1.8,1.55)});for(let Ct of[[[-2.4,54.4],[-7.8,54.6],...Dt.corridor.slice(1)],Dt.escape]){let Xt=new X(Or(i,Ct,1.6,1,.05,1.6),Gt);Xt.receiveShadow=!0,s.add(Xt)}}{let U=o(-75.15,121);n.add(Pt(.2,.24,6.8,9,1.2),e.barkOak,-75.15,U+.2,121,0,.15,Math.PI/2);for(let j=0;j<4;j++)n.add(Pt(.03,.06,1.1,5,1),e.barkOak,-75.15-2.4+j*1.5,U+.45,121+(j%2?.25:-.25),j%2?.7:-.7,0,.3);t.addOBB(-75.15,121,3.4,.24,.15,-50,U+.42,{label:"Stamm auf dem Fluchtweg (springen)"})}let S=[[-24.6,73.2,.2],[-58,90.4,.2]];h.markerTrees=S;let _=[[-11.2,58.2],[-18.5,64.6],[-24.6,73.2],[-32.2,82.6],[-41.5,86.2],[-50.5,82.3],[-58,90.4],[-64.2,100],[-72.5,103.2],[-77.2,112.4],[-74.8,123.6],[-69.9,131.6]],w=[];for(let[N,W]of _)w.push(Cy(s,N,o(N,W)+1.5,W,l()*6));h.objects.tapes=w;let v=fp(s,-76.6,o(-76.6,115.5)+.02,115.5);t.addLamp({pos:[-76.6,o(-76.6,115.5)+.25,115.5],color:16726560,intensity:1.2,distance:5,flicker:N=>.7+Math.sin(N*9)*.15+Math.sin(N*23)*.1}),t.tag="Wald (B\xE4ume)";let M=op(e),R=new cc(M,36),C=[{t:"box",minX:-28,maxX:28,minZ:-76,maxZ:-29},{t:"box",minX:-2.6,maxX:2.6,minZ:-31,maxZ:64},{t:"path",pts:Dt.corridor,r:3},{t:"path",pts:Dt.escape,r:3},{t:"path",pts:[[-2.2,54.4],[-7.8,54.6]],r:1.1},{t:"circle",x:Dt.clearing[0],z:Dt.clearing[1],r:9.5}],k=(N,W)=>{let U=1/0;for(let j of C){let Gt;if(j.t==="box"){let Ct=Math.max(j.minX-N,0,N-j.maxX),Xt=Math.max(j.minZ-W,0,W-j.maxZ);Gt=Ct||Xt?Math.hypot(Ct,Xt):-Math.min(N-j.minX,j.maxX-N,W-j.minZ,j.maxZ-W)}else if(j.t==="circle")Gt=Math.hypot(N-j.x,W-j.z)-j.r;else{let Ct=1/0;for(let Xt=0;Xt<j.pts.length-1;Xt++)Ct=Math.min(Ct,Os(N,W,...j.pts[Xt],...j.pts[Xt+1]).d);Gt=Ct-j.r}Gt<U&&(U=Gt)}return U};h.walkSD=k;let D=[],B=(N,W,U)=>{for(let j of D)if(Math.hypot(j[0]-N,j[1]-W)<j[2]+U)return!0;return!1};for(let[N,W]of S)R.add(M.length-1,N,o(N,W),W,1,.4),t.addCircle(N,W,.62),D.push([N,W,1.2]);for(let[N,W]of h.squeezeTrees)R.add(0,N,o(N,W),W,1.2,l()*6),t.addCircle(N,W,.55),D.push([N,W,1]);for(let[N,W]of b)R.add(l()*3|0,N,o(N,W),W,1.25,l()*6),t.addCircle(N,W,.55),D.push([N,W,1.5]);D.push([7.5,31,3.2]),R.add(1,-69.6,o(-69.6,136.4),136.4,1.15,.7),t.addCircle(-69.6,136.4,.52),D.push([-69.6,136.4,1.2]),h.branchTree=[-69.6,136.4];for(let[N,W]of _){if(S.some(Gt=>Gt[0]===N&&Gt[1]===W))continue;let U=[0,3,5][l()*3|0],j=R.add(U,N,o(N,W),W,.9,l()*6);t.addCircle(N,W,j),D.push([N,W,1])}let I=2.5;for(let N=-112;N<44;N+=I)for(let W=-82;W<176;W+=I){let U=N+(l()-.5)*I*.9,j=W+(l()-.5)*I*.9;if(U<-78.6||j<-72&&Math.abs(U)<34||j<-76)continue;let Gt=k(U,j);if(Gt<.9||Gt>30||l()>(Gt<7?.85:.62)||B(U,j,.9))continue;let Ct,Xt=l();Xt<.36?Ct=l()*3|0:Xt<.66?Ct=3+(l()*2|0):Ct=5+(l()*2|0);let le=.75+l()*.5,te=R.add(Ct,U,o(U,j),j,le,l()*6.28);Gt<9&&t.addCircle(U,j,te),D.push([U,j,.8])}for(let N=-112;N<44;N+=1.35)for(let W=-80;W<176;W+=1.35){let U=N+(l()-.5)*1.1,j=W+(l()-.5)*1.1;if(U<-78.6||j<-74)continue;let Gt=k(U,j);if(!(Gt<.5||Gt>4.5)&&!(l()>.55)&&!B(U,j,.35)){if(l()<.6)R.add(M.length-2,U,o(U,j),j,.6+l()*.7,l()*6);else{let Ct=R.add(3+(l()*4|0),U,o(U,j),j,.55+l()*.35,l()*6);Gt<6&&t.addCircle(U,j,Ct)}D.push([U,j,.35])}}R.build(s);let H=new Yi($i(2.2,1.6,3),e.leafBush),Y=new Yi($i(1.2,.8,3),e.fern,36,!1),Z=new Yi($i(1,.45,2),e.grass,36,!1);for(let N=0;N<26e3;N++){let W=-105+l()*148,U=-78+l()*254;if(W<-78.6||U<-72&&Math.abs(W)<34)continue;let j=k(W,U);j>24||(j>.3&&l()<.22?H.add(W,o(W,U)-.05,U,.7+l()*.8,l()*6):j>-.6&&l()<.5?Y.add(W,o(W,U)-.02,U,.6+l()*.8,l()*6):j>-1.2&&j<2&&l()<.3&&Z.add(W,o(W,U),U,.8+l()*.6,l()*6))}for(let N=0;N<70;N++){let W=(l()-.5)*60,U=-73+l()*2.5;H.add(W,0,U,.8+l()*.5,l()*6)}H.build(s),Y.build(s),Z.build(s);let nt=new Jt(1,1);nt.rotateX(-Math.PI/2),nt.translate(0,.03,0);let K=new Yi(nt,e.litter,36,!1),st=Pt(.012,.02,1,4,1);st.rotateZ(Math.PI/2);let ut=new Yi(st,e.barkOak,36,!1);for(let N=0;N<16e3;N++){let W=-80+l()*115,U=-76+l()*225,j=k(W,U);j>3||j<-3.2||(l()<.6?K.add(W,o(W,U),U,.5+l()*.9,l()*6):l()<.18&&ut.add(W,o(W,U)+.02,U,.4+l()*.9,l()*6))}K.build(s),ut.build(s);for(let N=0;N<90;N++){let W=-80+l()*115,U=-28+l()*200,j=k(W,U);if(j<.4||j>8)continue;let Gt=.15+l()*.4;n.add(new wr(Gt,1),e.rock,W,o(W,U)+Gt*.3,U,l(),l(),l(),1,.6,1)}t.tag="Totholz";for(let N=0;N<160;N++){let W=-78+l()*120,U=-28+l()*200,j=k(W,U);if(j<.6||j>16)continue;let Gt=2+l()*6,Ct=.12+l()*.25;n.add(Pt(Ct*.8,Ct,Gt,7,1.2),e.barkOak,W,o(W,U)+Ct*.8,U,0,l()*6,Math.PI/2)}for(let[N,W,U]of[[-31,80.6,.4],[-52.5,84.3,1.4],[-68,104.2,.1]])n.add(Pt(.2,.26,4.2,8,1.2),e.barkOak,N,o(N,W)+.2,W,0,U,Math.PI/2),t.addOBB(N,W,2.1,.25,-U,-50,o(N,W)+.42);t.tag="Wildzaun";let yt=Dt.fenceX;for(let N=70;N<=170;N+=3)n.add(Pt(.07,.08,2.5,7,1),e.wood,yt,o(yt,N)+1.15,N);for(let N=70;N<170;N+=3){if(N+3>Dt.gateZ-.8&&N<Dt.gateZ+.8)continue;let W=(o(yt,N)+o(yt,N+3))/2;n.add(cn(3,2.2,.5),e.wire,yt,W+1.1,N+1.5,0,Math.PI/2,0,1,1,1,{cast:!1})}t.addBox(yt-.12,yt+.12,60,Dt.gateZ-.8),t.addBox(yt-.12,yt+.12,Dt.gateZ+.8,175);for(let[N,W]of[[Dt.gateZ-2,Dt.gateZ-.8],[Dt.gateZ+.8,Dt.gateZ+1]]){let U=o(yt,N);n.add(cn(W-N,2.2,.5),e.wire,yt,U+1.1,(N+W)/2,0,Math.PI/2,0,1,1,1,{cast:!1})}for(let N of[Dt.gateZ-.85,Dt.gateZ+.85])n.add(Pt(.1,.11,2.7,8,1),e.darkWood,yt,o(yt,N)+1.3,N);h.objects.gate=Iy(s,t,yt,o(yt,Dt.gateZ),Dt.gateZ);for(let[N,W,U]of[[-120,96,3],[-128,118,2.5],[-140,108,4],[-112,132,2]]){let j=Mn(16756848,U,.35,!1);j.position.set(N,3+l()*3,W),s.add(j)}t.tag="Bach/Gasse/G\xE4rten",Ly(n,e,s,t,i),t.tag="Weltgrenze (Waldwand)";let Ft={minX:-110,maxX:44,minZ:-80,maxZ:178},ot=26,wt=(N,W,U,j)=>{let Gt=new X(cn(U,ot,26),e.fwall);Gt.position.set(N,ot/2-2,W),Gt.rotation.y=j,s.add(Gt)};return wt((Ft.minX+Ft.maxX)/2,Ft.maxZ,Ft.maxX-Ft.minX,Math.PI),wt(Ft.maxX,(Ft.minZ+Ft.maxZ)/2,Ft.maxZ-Ft.minZ,-Math.PI/2),wt(-79.3,170,30,Math.PI/2),t.addBox(Ft.minX-5,Ft.maxX+5,Ft.maxZ,Ft.maxZ+3),t.addBox(Ft.maxX,Ft.maxX+3,Ft.minZ,Ft.maxZ),n.build(s),h.objects.fogPuffs=ky(s),h.mapData={lines:[{pts:[[0,-72],[0,62]],color:"#c9b88a",width:5},{pts:[[-30,-40],[-60,20],[-90,60],[-90,180]],color:"#7a6a4a",width:2,dash:[3,4]},{pts:[[-85.5,40],[-85.5,180]],color:"#b8a678",width:3},{pts:[[-83.2,40],[-83.2,180]],color:"#3a6ea8",width:3},{pts:[[-79,60],[-79,180]],color:"#888",width:1.5,dash:[2,2]},{pts:[[-87,106],[-126,106]],color:"#b8a678",width:3},{pts:[[-126,106],[-126,40],[-60,-60],[0,-150]],color:"#d8d0b8",width:4},{pts:[[-12,-152],[12,-152]],color:"#d8d0b8",width:4},{pts:[[0,-152],[0,-72]],color:"#d8d0b8",width:4}],labels:[{t:"Goetheturm",x:15,z:-50},{t:"H\xFCgelschneise",x:3,z:20},{t:"Tor",x:-78,z:104},{t:"Kleing\xE4rten",x:-120,z:100},{t:"Bach",x:-82,z:80},{t:"Wendelsweg",x:3,z:-120}]},{terrain:i,sd:k}}function by(s){let t=new ze(900,32,16),e=new Pn({side:Nn,depthWrite:!1,fog:!1,uniforms:{time:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP;
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
      }`}),n=new X(t,e);n.renderOrder=-10,n.frustumCulled=!1,s.add(n),h.objects.sky=n}function jh(s,t,e,n,i,r,a,o,l,c,u){let d=a,p=o,m,x,g;(c==="east"||c==="west")&&(d=o,p=a),s.add(F(d,10,p,3),t.plaster,i,10/2,r);let y=ds(c==="south"?d:p,3.6,c==="south"?p:d,2);c==="south"?s.add(y,t.roof,i,10,r):s.add(y,t.roof,i,10,r,0,Math.PI/2,0);let b=kf(l),E=new Me({map:b}),S=new X(new Jt(a,10-.6),E);c==="east"?(m=i+d/2+.02,x=r,g=Math.PI/2):c==="west"?(m=i-d/2-.02,x=r,g=-Math.PI/2):(m=i,x=r+p/2+.02,g=0),S.position.set(m,10/2+.4,x),S.rotation.y=g,S.receiveShadow=!0,e.add(S);{let w=c==="east"?1:c==="west"?-1:0,v=c==="south"?1:0,M=v?1:0,R=v?0:1,C=c==="south"?0:Math.PI/2,k=(D,B,I)=>[m+M*D+w*I,B,x+R*D+v*I];for(let D=0;D<3;D++){let B=.4+9.4*((2-D)*170+28+116+4)/512*-1+4.7+5-4.7;for(let I=0;I<3;I++){let H=-a/2+a*((50+I*160+40)/512);s.add(F(a*96/512,.06,.16,1),t.concrete,...k(H,.7+(10-.6)*(1-(D*170+28+120)/512),.08),0,C,0)}s.add(F(a,.1,.1,1),t.plaster,...k(0,.7+(10-.6)*(1-(D*170+163)/512),.05),0,C,0)}s.add(F(a+.1,.5,.08,1),t.concrete,...k(0,.25,.04),0,C,0),s.add(Pt(.05,.05,10,8,1),t.darkMetal,...k(a/2-.25,10/2,.1))}n.addBox(i-d/2,i+d/2,r-p/2,r+p/2);let _=c==="east"?1:c==="west"?-1:0;if(_){let w=i+_*(d/2+.03);if(s.add(F(.1,2.25,1.15,1),t.darkWood,w,1.42,r),s.add(F(.6,.15,1.6,1),t.concrete,w+_*.3,.22,r),s.add(F(.6,.15,1.6,1),t.concrete,w+_*.9,.08,r),s.add(F(.9,.06,1.6,1),t.darkWood,w+_*.4,2.8,r),u){n.addFloor(Math.min(w,w+_*.6),Math.max(w,w+_*.6),r-.8,r+.8,.3),n.addFloor(Math.min(w+_*.6,w+_*1.2),Math.max(w+_*.6,w+_*1.2),r-.8,r+.8,.15);let v=Fn([{t:"17",font:"bold 90px Arial"}],.22,.16,{w:128,h:96,bg:"#1a2a4a",fg:"#eee",border:"#eee",worn:!1});v.position.set(w+_*.02,2.5,r+.85),v.rotation.y=_>0?Math.PI/2:-Math.PI/2,e.add(v);let M=new X(new Ke(.12,.18,.12),ii(16769200));M.position.set(w+_*.1,2.55,r-.75),e.add(M);let R=Mn(16767136,1.2,.5);R.position.copy(M.position),e.add(R),h.objects.porch=n.addLamp({pos:[w+_*.6,2.4,r-.6],color:16765088,intensity:7,distance:9}),h.objects.porchMeshes=[M,R]}}}function xp(s,t,e,n,i,r,a){s.add(Pt(.07,.1,6,8,1),t.darkMetal,i,3,r),s.add(F(1.4,.08,.08,1),t.darkMetal,i+a*.6,5.95,r),s.add(F(.6,.15,.32,1),t.darkMetal,i+a*1.2,5.9,r);let o=new X(new Jt(.5,.25),ii(16765594));o.rotation.x=Math.PI/2,o.position.set(i+a*1.2,5.81,r),e.add(o);let l=Mn(16756848,3.4,.45);l.position.set(i+a*1.2,5.6,r),e.add(l),n.addLamp({pos:[i+a*1.2,5.6,r],color:16757882,intensity:75,distance:22,visibleDist:60}),n.addCircle(i,r,.15)}function My(s,t,e,n,i,r){s.add(Pt(.15,.22,4,8,1.2),t.barkOak,i,2,r);for(let o=0;o<6;o++){let l=o/6*Math.PI*2;s.add(Pt(.04,.08,2.4,5,1),t.barkOak,i+Math.cos(l)*.6,4.6,r+Math.sin(l)*.6,Math.cos(l)*.6,0,-Math.sin(l)*.6)}let a=new Yi($i(3,3,3),t.leafOak);a.add(i,3.4,r,1,.3),a.build(e),n.addCircle(i,r,.25)}function Qh(s,t,e,n,i,r,a,o=!1){s.add(Pt(.06,.08,3.8,8,1),t.darkMetal,i,1.9,r),s.add(Pt(.22,.12,.45,6,1),t.darkMetal,i,4,r);let l=new X(new ze(.12,8,6),ii(o?2236962:16773328));l.position.set(i,3.8,r),e.add(l);let c=Mn(16769200,2.4,o?0:.4);if(c.position.set(i,3.8,r),e.add(c),n.addCircle(i,r,.12),o)return null;let u=n.addLamp({pos:[i,3.7,r],color:16769720,intensity:32,distance:16,flicker:a});return u.meshes=[l,c],a&&h.world.updaters.push((f,d)=>{let p=a(d);l.material.color.setScalar(p>.5?1:.15),c.material.opacity=.4*p}),u}function Sy(s,t,e,n,i,r){let u=b=>6.2+-2.9000000000000004*(b/40),f=(b,E)=>{let S=b/8*Math.PI*2+Math.PI/8;return[i+Math.cos(S)*u(E),E,r+Math.sin(S)*u(E)]},d=t.planksTower;for(let b=0;b<10;b++){let E=b/10*40,S=(b+1)/10*40;for(let _=0;_<8;_++){In(s,d,f(_,E),f(_,S),.32);let w=(_+1)%8;In(s,d,f(_,S),f(w,S),.22),In(s,d,f(_,E),f(w,S),.14),In(s,d,f(w,E),f(_,S),.14)}}for(let b=1;b<10;b++){let E=b*4;s.add(Pt(1.8,1.8,.12,8,1),d,i,E,r),In(s,d,[i-1.4,E-4,r-.8],[i+1.4,E,r-.8],.25,.9)}s.add(Pt(3.3+.6,3.3+.6,.25,8,1),d,i,40,r,0,Math.PI/8,0);for(let b=0;b<8;b++){let E=f(b,40);In(s,d,E,[E[0],40+2.4,E[2]],.2)}s.add(Pt(.2,3.3+1.2,2.4,8,2),t.felt,i,40+3.4,r,0,Math.PI/8,0);let p=new X(new Ue(3.3+.15,u(26)+.15,14+1.1,8,1,!0),t.wire);p.position.set(i,(66+1.1)/2,r),p.rotation.y=Math.PI/8,e.add(p);for(let b=0;b<8;b++){let E=f(b,0);s.add(F(.9,.5,.9,1),t.concrete,E[0],.2,E[2]),n.addCircle(E[0],E[2],.5)}let m=18,x=9;for(let b=0;b<m;b++){let E=b/m*Math.PI*2,S=(b+1)/m*Math.PI*2,_=i+Math.cos(E)*x,w=r+Math.sin(E)*x,v=i+Math.cos(S)*x,M=r+Math.sin(S)*x,R=(_+v)/2,C=(w+M)/2,k=Math.hypot(v-_,M-w),D=-Math.atan2(M-w,v-_);s.add(cn(k,2,0),t.bauzaun,R,1.12,C,0,D,0,1,1,1,{cast:!1}),s.add(F(.6,.15,.25,1),t.concrete,_,.08,w,0,D,0),n.addOBB(R,C,k/2,.12,-D)}let g=Fn([{t:"GOETHETURM",font:"bold 50px Georgia"},{t:"Vom 01.11. bis 31.03.",font:"34px Arial"},{t:"GESCHLOSSEN",font:"bold 44px Arial",color:"#b01010"}],1.2,.8,{w:384,h:256}),y=Math.PI*.72;g.position.set(i+Math.cos(y)*(x-.06),1.3,r+Math.sin(y)*(x-.06)),g.rotation.y=-y-Math.PI/2,e.add(g),h.towerSign=g.position.clone()}function wy(s,t,e,n,i,r){s.add(F(7,3.2,4.5,2),t.plasterW,i,1.6,r),s.add(F(8,.25,5.5,2),t.darkWood,i,3.3,r);let a=new X(cn(5,1.6,2),t.shutter);a.position.set(i+.4,1.7,r+2.26),e.add(a),n.addBox(i-3.5,i+3.5,r-2.25,r+2.25);for(let[o,l]of[[-12,-60],[-16,-58.5],[-20,-60]]){s.add(F(2.2,.06,.7,1),t.wood,o,.75,l);for(let c of[-.65,.65])s.add(F(2.2,.05,.28,1),t.wood,o,.45,l+c);for(let c of[-.9,.9])s.add(F(.06,.75,1.6,1),t.darkMetal,o+c,.37,l);n.addBox(o-1.1,o+1.1,l-.8,l+.8,-1,.8)}}function Ey(s,t,e,n,i){for(let[a,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])s.add(F(.14,3.6,.14,1),t.planksTower,n+a,1.8,i+o),e.addCircle(n+a,i+o,.12);s.add(F(2.1,.1,2.1,1),t.planksTower,n,1.5,i);for(let a of[-1,1])s.add(F(2.1,.5,.06,1),t.planksTower,n,1.85,i+a*1.02);s.add(ds(2.4,1,2.4,1),t.felt,n,3.6,i);let r=3.4;In(s,it("slide",{color:8006174}),[n+1.05,1.5,i],[n+1.05+2.8,.25,i],.06,.6);for(let a=0;a<5;a++)s.add(F(.5,.05,.06,1),t.wood,n-1.05-a*.13,.3+a*.3,i,.4,Math.PI/2,0)}function Ty(s,t,e,n,i,r){for(let o of[-1,1])In(s,t.planksTower,[i+o*1.8,0,r-.8],[i+o*1.8,2.6,r],.14),In(s,t.planksTower,[i+o*1.8,0,r+.8],[i+o*1.8,2.6,r],.14),n.addCircle(i+o*1.8,r-.8,.12),n.addCircle(i+o*1.8,r+.8,.12);In(s,t.planksTower,[i-1.9,2.6,r],[i+1.9,2.6,r],.16);let a=[];for(let o of[-.8,.8]){let l=new Qt;l.position.set(i+o,2.55,r);for(let u of[-.22,.22]){let f=new X(new Ue(.01,.01,2,4),t.metal);f.position.set(u,-1,0),l.add(f)}let c=new X(new Ke(.5,.05,.2),it("seat",{color:2236962}));c.position.y=-2,c.castShadow=!0,l.add(c),e.add(l),a.push(l)}return h.world.updaters.push((o,l)=>{a[0].rotation.x=Math.sin(l*1.1)*.12+Math.sin(l*.37)*.05,a[1].rotation.x=Math.sin(l*.8+1)*.03}),a}function Ay(s,t,e,n,i){s.add(F(1.2,.5,1.2,1),t.concrete,n,.25,i),s.add(Pt(.12,.14,1.2,8,1),t.rust,n,1.1,i),In(s,t.rust,[n,1.6,i],[n+.7,1.9,i],.05),In(s,t.rust,[n-.15,1.5,i],[n-.35,1.45,i],.07);for(let r=0;r<3;r++){let a=n-1.2-r*1.5,o=.6-r*.12,l=i+r%2*.4;s.add(F(1.6,.18,.3,1),t.planksTower,a,o,l),s.add(F(.12,o,.12,1),t.planksTower,a,o/2,l)}s.add(F(1.6,.3,1.6,1),t.concrete,n-5.6,.15,i+.3),e.addBox(n-.6,n+.6,i-.6,i+.6,-1,1.5),e.addBox(n-6.4,n-.6,i-.4,i+1.1,-1,.7)}function Ry(s,t,e,n,i){for(let[r,a]of[[-.9,-.9],[.9,-.9],[-.7,.7],[.7,.7]])In(s,t.barkPine,[e+r*1.3,n,i+a*1.3],[e+r,n+4.5,i+a],.16);s.add(F(1.9,.08,1.9,1),t.planksOld,e,n+4,i),s.add(F(1.9,1,.06,1),t.planksOld,e,n+4.5,i-.95),s.add(F(.06,1,1.9,1),t.planksOld,e-.95,n+4.5,i),s.add(F(.06,1,1.9,1),t.planksOld,e+.95,n+4.5,i),s.add(ds(2.3,.7,2.3,1),t.felt,e,n+5.5,i);for(let r=0;r<9;r++)s.add(F(.6,.05,.08,1),t.barkPine,e-1.6+r*.05,n+.4+r*.42,i,0,Math.PI/2,0);In(s,t.barkPine,[e-2,n,i-.3],[e-1.1,n+4,i-.3],.08),In(s,t.barkPine,[e-2,n,i+.3],[e-1.1,n+4,i+.3],.08)}function Cy(s,t,e,n,i){let r=new Qt,a=new X(new ti(.42,.03,4,18),it("tapeKnot",{color:11149336,emissive:1049090}));a.rotation.x=Math.PI/2,a.scale.set(1,1,3),r.add(a);let o=[];for(let l of[-1,1]){let c=new X(new Jt(.07,.75),it("tapeEnd",{map:nc(),side:Se,emissive:1573892}));c.geometry.translate(0,-.37,0),c.position.set(.44,0,l*.05),c.rotation.z=l*.2,r.add(c),o.push(c)}return r.position.set(t,e,n),r.rotation.y=i,s.add(r),h.world.updaters.push((l,c)=>{o[0].rotation.x=Math.sin(c*2.3+t)*.35,o[1].rotation.x=Math.sin(c*1.9+n)*.3}),r}function Py(s,t,e,n,i){let r=new Qt,a=Ie(5),o=[];for(let f=0;f<9;f++){let d=1.6+a()*1.6,p=new X(new Ue(.03,.07,d,5),it("barkOakD",{map:Zi("oak")}));p.position.set((a()-.5)*.6,.3+a()*.9,(a()-.5)*1.6),p.rotation.set(a()*.8,a()*3,Math.PI/2-.3+a()*.6),p.castShadow=!0,r.add(p),o.push(p);let m=new X($i(1,.8,2),new Me({map:Ii("bush"),alphaTest:.45,side:Se}));m.position.copy(p.position),m.position.y-=.3,r.add(m),o.push(m)}r.position.set(e,n,i),s.add(r);let l=t.addBox(e-.5,e+.5,i-1.4,i+1.4),c=-1,u={g:r,col:l,clear(f=!1){if(l.enabled=!1,f){r.visible=!1;return}c=0},reset(){l.enabled=!0,r.visible=!0,c=-1,o.forEach((f,d)=>{f.userData.o=f.userData.o||f.position.clone(),f.position.copy(f.userData.o)})}};return o.forEach(f=>{f.userData.o=f.position.clone(),f.userData.v=new L((a()-.5)*.8,0,(a()>.5?1:-1)*(1.2+a()))}),h.world.updaters.push(f=>{if(!(c<0||c>1.2)){c+=f;for(let d of o)d.position.addScaledVector(d.userData.v,f*1.1),d.position.y=Math.max(.05,d.position.y-f*.6)}}),u}function Iy(s,t,e,n,i){let r=new Qt;r.position.set(e,n,i-.8);let a=it("gateWood",{map:hs("old")}),o=(x,g,y,b,E,S,_=a)=>{let w=new X(F(x,g,y,.5),_);return w.position.set(b,E,S),w.castShadow=!0,r.add(w),w};o(.08,.1,1.6,0,.3,.8),o(.08,.1,1.6,0,1.9,.8),o(.08,1.7,.1,0,1.1,.05),o(.08,1.7,.1,0,1.1,1.55);let l=new X(cn(1.5,1.6,.5),it("wire",{}));l.material=h.M.wire,l.position.set(0,1.1,.8),l.rotation.y=Math.PI/2,r.add(l);let c=it("chain",{color:6974052});for(let x=0;x<6;x++){let g=new X(new ti(.03,.008,4,8),c);g.position.set(.05,1.15-x*.04,1.58+x%2*.01),g.rotation.y=x%2*Math.PI/2,r.add(g)}let u=new X(new Ke(.06,.08,.035),it("brass",{color:9072688}));u.position.set(.06,.9,1.6),r.add(u),s.add(r);let f=t.addBox(e-.12,e+.12,i-.85,i+.85),d=t.addRegionBox(-82.5,-78.2,i-.85,i+.85,{enabled:!1}),p=0,m=0;return h.world.updaters.push(x=>{m+=(p-m)*(1-Math.exp(-4*x)),r.rotation.y=m}),{hinge:r,lock:u,col:f,reg:d,lockPos:new L(e+.1,n+.95,i+.8),open(){p=-1.75,f.enabled=!1,d.enabled=!0,u.visible=!1},close(){p=0,f.enabled=!0},reset(){p=0,m=0,f.enabled=!0,d.enabled=!1,u.visible=!0}}}function Ly(s,t,e,n,i){let r=(M,R)=>i.height(M,R),a=Dt.streamX,o=new X(cn(2.2,140,3),t.water);o.rotation.x=-Math.PI/2,o.position.set(a,-.42,110),e.add(o),h.world.updaters.push((M,R)=>{t.water.map.offset.y=R*.25});for(let M=0;M<40;M++){let R=70+Math.random()*80;s.add(new wr(.15+Math.random()*.2,0),t.concrete,a+(Math.random()-.5)*1.6,-.45,R,Math.random(),Math.random(),0)}let l=Math.max(r(a+.9,Dt.gateZ),r(a-.9,Dt.gateZ));n.addBox(a-.5,a+.5,60,170,-5,l+.55,{label:"Bach (mit Anlauf springen)"}),n.addRegionBox(-82.3,-78.3,Dt.gateZ-1.3,Dt.gateZ+1.3,{enabled:!1,id:"bank"}),n.addRegionBox(-87.6,-81.8,Dt.gateZ-2.2,Dt.gateZ+2.2,{enabled:!1,id:"stream"}),n.addRegionBox(-105,-86,104.7,107.3,{enabled:!1,id:"alley"}),n.addRegionBox(-127.5,-104,104.7,107.3,{enabled:!1,id:"gardens"});let c=new X(Or(i,[[-85.6,60],[-85.6,160]],2.4,1,.03),t.gravel);c.receiveShadow=!0,e.add(c);let u=new X(Or(i,[[-86.5,106],[-127,106]],2.6,1,.03),t.gravel);u.receiveShadow=!0,e.add(u),n.addSurface(-130,-84.3,100,112,"gravel");for(let M of[104.4,107.6])s.add(F(18,3.4,.4,2.5),t.brick,-95.5,1.7,M),n.addBox(-104.5,-86.5,M-.2,M+.2);for(let[M,R,C]of[[-91,110.5,7],[-99.5,110.5,8],[-95,101.4,10]]){s.add(F(C,8,5.6,2.5),t.brick,M,4,R),s.add(ds(C,2.8,5.6,2),t.roof,M,8,R);for(let k=0;k<Math.floor(C/2.4);k++)for(let D of[4.2,6.6]){let B=new X(new Jt(.9,1.3),t.glass),I=R>106?R-2.81:R+2.81;B.position.set(M-C/2+1.4+k*2.4,D,I),B.rotation.y=R>106?Math.PI:0,e.add(B)}}for(let[M,R,C]of[[-87.48,4.2,109.2],[-87.48,6.6,111.6]]){let k=new X(new Jt(.9,1.3),ii(9067050));k.position.set(M,R,C),k.rotation.y=Math.PI/2,e.add(k);let D=Mn(16754784,2.2,.25);D.position.set(M+.3,R,C),e.add(D)}let f=new X(new Ke(.2,.25,.15),ii(16764040));f.position.set(-96,2.6,107.35),e.add(f);let d=Mn(16755296,1.3,.45);d.position.copy(f.position),e.add(d),n.addLamp({pos:[-96,2.4,107],color:16756848,intensity:6,distance:9,flicker:M=>Math.sin(M*7.3)>.97?.2:1});let p=Ie(77);for(let M=-106;M>-127;M-=3)for(let R of[104.4,107.6])R===104.4&&M<=-109&&M>=-118||pp(s,t,M,R,3);for(let[M,R]of[[-110,111.5],[-120,112],[-104.5,99.5],[-124,99.5]])mp(s,t,M,R,p);for(let[M,R,C]of[[-108,109.5,4],[-116,109.2,5],[-123,109.6,3],[-106,102,3],[-121,102,5]])s.add(F(C,1.8,.9,1),t.hedgeBox,M,.9,R);n.addBox(-128,-104,107.5,108),n.addBox(-128,-104,104,104.5);for(let M=-118;M<-109;M+=3)pp(s,t,M+3,104.4,3,.9);let m=new Qt,x=new X(new Sr(.12,.3,8),it("gnomeB",{color:2771578}));x.position.y=.15,m.add(x);let g=new X(new ze(.07,8,6),it("gnomeF",{color:13146746}));g.position.y=.34,m.add(g);let y=new X(new Sr(.07,.2,8),it("gnomeH",{color:10099220}));y.position.y=.48,m.add(y),m.position.set(-107.2,0,105),m.rotation.y=.5,e.add(m);let b=new Qt,E=new X(new Ke(.3,.22,.12),it("flood",{color:2236962}));b.add(E);let S=new X(new Jt(.26,.18),new $e({color:1118481}));S.position.z=.065,b.add(S),b.position.set(-113,2.6,100.32),b.rotation.x=-.4,e.add(b),mp(s,t,-113,99,p,!0);let _=n.addLamp({pos:[-113,2.4,101.4],color:16054015,intensity:0,distance:16,enabled:!0,level:0}),w=Mn(16777215,2.2,0);w.position.set(-113,2.6,100.5),e.add(w);let v=Dy(e,-114.4,0,103.3);h.objects.flood={on(){S.material.color.set(16777215),_.intensity=120,_.level=1,w.material.opacity=.9},off(){S.material.color.set(1118481),_.intensity=0,_.level=0,w.material.opacity=0},scarecrow:v};{let M=it("binGreen",{color:2046506});s.add(F(1.15,.62,.66,1),M,-92,.33,105.35,.05,.1,Math.PI/2*0),s.add(F(.06,.66,.7,1),M,-91.4,.33,105.1,0,.5,0),n.addBox(-92.6,-91.4,104.6,106,-50,.75,{label:"Umgekippte Tonne"});for(let C=0;C<6;C++)s.add(F(1.2,.14,.95,1),t.planksTower,-97,.08+C*.17,106.75,0,C%2*.12,0);n.addBox(-97.7,-96.3,106.15,107.4,-50,1.2,{label:"Paletten"});let R=t.brick;for(let C=0;C<18;C++)s.add(F(.24,.08,.12,1),R,-101.5+(p()-.5)*.7,.05+p()*.22,104.8+p()*2.4,p(),p()*3,p());s.add(F(.25,.3,2.6,1),it("rubble",{color:4866104}),-101.5,.15,106,0,0,.12),n.addBox(-101.75,-101.25,104.6,107.4,-50,.36,{label:"Schutt (springen)"})}{let M=$i(1.2,1.3,2);for(let R=-87.4;R<-78.8;R+=.9)for(let C of[103.5-p()*.4,108.5+p()*.4])s.add(M,t.grass,R+(p()-.5)*.4,r(R,C)-.05,C,0,p()*6,0,1+p()*.6,1+p()*.8,1,{cast:!1})}xp(s,t,e,n,-126.2,108.2,1)}function pp(s,t,e,n,i,r=1.1){let a=t.planksTower;s.add(F(.08,r+.2,.08,1),a,e,(r+.2)/2,n);for(let o=0;o<4;o++){let l=[e-o*i/4,.1,n],c=[e-(o+1)*i/4,r,n];In(s,a,l,c,.05,.02),In(s,a,[l[0],r,n],[c[0],.1,n],.05,.02)}}function mp(s,t,e,n,i,r=!1){s.add(F(3,2.3,2.4,1),t.planksOld,e,1.15,n),s.add(ds(3.4,.9,2.8,1),t.felt,e,2.3,n,0,Math.PI/2,0),s.add(F(.06,.6,.8,1),t.glass,e+1.52,1.4,n),r?s.add(Pt(.35,.3,.9,10,1),it("barrel",{color:1718826}),e-2,.45,n+1.4):s.add(F(1.5,1,.6,1),it("compost",{color:3811866}),e+2.4,.5,n+.6)}function Dy(s,t,e,n){let i=new Qt,r=it("scWood",{color:4864552}),a=new X(new Ue(.04,.05,2,6),r);a.position.y=1,i.add(a);let o=new X(new Ue(.03,.03,1.5,6),r);o.rotation.z=Math.PI/2,o.position.y=1.45,i.add(o);let l=new X(new Ue(.28,.42,1,8,1,!0),new Me({color:2894370,side:Se}));l.position.y=1.1,i.add(l);for(let f of[-1,1]){let d=new X(new Ue(.09,.13,.6,6,1,!0),l.material);d.rotation.z=f*(Math.PI/2-.15),d.position.set(f*.45,1.42,0),i.add(d)}let c=new X(new ze(.17,12,10),new Me({map:qf()}));c.position.y=1.82,c.rotation.y=-Math.PI/2,c.scale.set(1,1.15,1),i.add(c);let u=new X(new Ue(.12,.3,.2,10),new Me({color:1709586}));return u.position.y=2.02,i.add(u),i.position.set(t,e,n),i.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),s.add(i),i}function ky(s){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255,255,255,0.55)"),n.addColorStop(.6,"rgba(255,255,255,0.15)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);let i=new pn(t),r=new Me({map:i,transparent:!0,opacity:.13,depthWrite:!1,color:10133672}),a=new Jt(1,1),o=[];for(let c=0;c<46;c++){let u=new X(a,r);u.renderOrder=2,s.add(u),o.push({m:u,life:0,sz:0})}let l={enabled:!0,mat:r};return h.world.updaters.push((c,u)=>{let f=h.camera,d=h.player.p,p=l.enabled&&d.y>-1&&d.x<400;for(let m of o){if(m.m.visible=p,!p)continue;let x=m.m.position.x-d.x,g=m.m.position.z-d.z;if(m.life<=0||x*x+g*g>484){let b=Math.random()*Math.PI*2,E=3+Math.random()*18,S=d.x+Math.cos(b)*E,_=d.z+Math.sin(b)*E;m.m.position.set(S,(h.terrain?h.terrain.height(S,_):0)+.3+Math.random()*1.6,_),m.sz=2.5+Math.random()*4,m.life=8+Math.random()*10,m.age=0,m.v=new L((Math.random()-.5)*.2,0,(Math.random()-.5)*.2)}m.age+=c,m.life-=c,m.m.position.addScaledVector(m.v,c);let y=Math.min(1,m.age/2,m.life/2);m.m.scale.setScalar(m.sz*(.6+y*.4)),m.m.quaternion.copy(f.quaternion)}}),l}var hn={cx:-62,cz:140,hole:{minX:-63.9,maxX:-62.6,minZ:138.4,maxZ:140.6},room:{minX:-64.4,maxX:-58.6,minZ:141.6,maxZ:146.8},floorY:-3.2,ceilY:-.6,shaft:{minX:-70.4,maxX:-64.4,minZ:143.8,maxZ:144.6,y:-2.95,top:-2.2},coldOpen:[-63.25,-3.2,142.25],ventExit:[-71.9,0,142.2]};function yp(s,t,e,n){let i=hn,r=.3,a=(q,Rt)=>h.terrain.height(q,Rt);t.tag="H\xFCtte";let o=e.planksAncient,l=[[-62.6,-59.5,138,142],[-64.5,-62.6,138,138.4],[-64.5,-62.6,140.6,142],[-64.5,-63.9,138.4,140.6]];for(let[q,Rt,zt,qe]of l)n.add(F(Rt-q,.3,qe-zt,1.2),e.floor,(q+Rt)/2,.15,(zt+qe)/2);for(let[q,Rt,zt,qe]of[[-64.6,-59.4,137.9,138.05],[-64.6,-59.4,141.95,142.1],[-64.6,-64.45,137.9,142.1],[-59.55,-59.4,137.9,142.1]])n.add(F(Rt-q,1.4,qe-zt,1),e.mossStone,(q+Rt)/2,-.55,(zt+qe)/2);let c=2.5;n.add(F(.12,c,4,1.2),o,-64.44,r+c/2,140),n.add(F(5,c,.12,1.2),o,-62,r+c/2,138.06),n.add(F(3.3,c,.12,1.2),o,-62.85,r+c/2,141.94),n.add(F(.7,c,.12,1.2),o,-59.85,r+c/2,141.94),n.add(F(1,1,.12,1.2),o,-60.7,r+.5,141.94),n.add(F(1,.8,.12,1.2),o,-60.7,r+2.1,141.94);let u=new X(new Jt(1,.7),new Me({color:658446,transparent:!0,opacity:.6}));u.position.set(-60.7,r+1.35,141.94),s.add(u),n.add(F(1.25,.12,.03,.6),o,-60.7,r+1.5,142.03,0,0,.35),n.add(F(1.25,.12,.03,.6),o,-60.7,r+1.2,142.03,0,0,-.25);for(let[q,Rt,zt,qe]of[[-63.8,142.06,0,1],[-62.6,142.06,0,.8],[-59.8,142.06,0,.9],[-64.56,141.2,Math.PI/2,1],[-64.56,138.8,Math.PI/2,.85]]){let En=new X(new Jt(.9*qe,1.9*qe),e.ivy);En.position.set(q,.95*qe,Rt),En.rotation.y=zt,En.castShadow=!0,s.add(En)}for(let q=0;q<4;q++)for(let Rt=0;Rt<7-q;Rt++)n.add(Pt(.11,.11,.9,8,.6),e.barkOak,-62.9+Rt*.23+q*.11,.12+q*.2,137.35,Math.PI/2,0,0);t.addBox(-63.05,-61.15,136.85,137.85,-1,1),n.add(Pt(.28,.3,.5,10,.6),e.barkOak,-60.4,.25,137.1),n.add(F(.04,.7,.04,1),e.darkWood,-60.4,.75,137.1,0,0,.5),n.add(F(.16,.1,.03,1),e.rust,-60.25,1.05,137.1,0,0,.5),t.addCircle(-60.4,137.1,.32,-1,.6);for(let q=0;q<3;q++)n.add(F(.2,2,.03,.6),e.planksAncient,-64.75,.95,140.6-q*.28,-.08*q,0,.32+q*.03);n.add(Pt(.14,.11,.28,10,1),e.rust,-59,.14,141.6),n.add(F(.12,c,1.5,1.2),o,-59.56,r+c/2,138.75),n.add(F(.12,c,1.5,1.2),o,-59.56,r+c/2,141.25),n.add(F(.12,.45,1,1.2),o,-59.56,r+2.27,140),n.add(ds(4.9,1.3,5.8,1.6),e.mossRoof,-62,r+c-.02,140,0,Math.PI/2,.018),n.add(F(.9,.03,.7,.6),e.planksAncient,-61.2,r+c+.62,138.9,.49,0,.1),n.add(F(.6,.03,.5,.6),e.rust,-63.1,r+c+.5,141.25,-.5,0,-.05),n.add(F(.12,.02,1.1,.6),e.planksAncient,-64.7,r+c-.35,139.6,.6,0,.3),n.add(F(5.8,.1,4.9,1.2),e.planksOld,-62,r+c-.05,140,0,0,0,1,1,1,{cast:!1}),n.add(Pt(.08,.08,1.6,8,1),e.rust,-60.2,r+c+.6,138.6),n.add(F(.6,.2,1.1,1),e.concrete,-59.1,.1,140),t.addFloor(-59.45,-58.8,139.45,140.55,.15);let f=0,d=3.2;t.addBox(-64.55,-64.38,137.95,142.05,f,d),t.addBox(-64.55,-59.45,137.95,138.12,f,d),t.addBox(-64.55,-59.45,141.88,142.05,f,d),t.addBox(-59.62,-59.45,137.95,139.5,f,d),t.addBox(-59.62,-59.45,140.5,142.05,f,d),t.addRegionBox(-64.4,-59.4,138.1,141.9),t.addSurface(-64.5,-58.8,137.9,142.1,"wood",-.2,3);let p=i.hole,m={open:!0};t.addFloor(-64.4,-59.4,138.1,141.9,r,{hole:(q,Rt)=>m.open&&q>p.minX&&q<p.maxX&&Rt>p.minZ&&Rt<p.maxZ}),t.tag="H\xFCttent\xFCr";let x=new Qt;x.position.set(-59.53,r,139.5);let g=new X(F(.06,2.02,.97,.7),e.planksAncient);g.position.set(0,1.02,.5),g.rotation.x=.012,g.castShadow=!0,x.add(g);for(let q of[.35,1.7]){let Rt=new X(F(.03,.12,.95,.7),e.planksAncient);Rt.position.set(.04,q,.5),x.add(Rt)}let y=new X(F(.03,1.5,.12,.7),e.planksAncient);y.position.set(.04,1.02,.5),y.rotation.x=.62,x.add(y);let b=new X(new ze(.035,8,6),e.rust);b.position.set(.06,1,.88),x.add(b),s.add(x);let E=t.addBox(-59.62,-59.45,139.5,140.5,0,3),S=0,_=0;t.updaters.push(q=>{_+=(S-_)*(1-Math.exp(-5*q)),x.rotation.y=_,E.enabled=_<1}),h.objects.hutDoor={pos:new L(-59.5,1.3,140),open(q){S=1.9,q||h.audio.doorCreak(this.pos)},close(q){S=0,q||h.audio.slam(this.pos,.6)},set(q){S=_=q?1.9:0,E.enabled=!q}},t.tag="Luke";let w=new Qt;w.position.set((p.minX+p.maxX)/2,r,p.maxZ);let v=new X(F(1.32,.06,2.22,1),e.planksOld);v.position.set(0,.03,-1.1),v.castShadow=!0,w.add(v);let M=new X(new ti(.06,.012,6,12),e.rust);M.position.set(0,.07,-1.9),M.rotation.x=Math.PI/2,w.add(M),s.add(w);let R=t.addBox(p.minX,p.maxX,p.minZ,p.maxZ,-.05,.32,{enabled:!1}),C=t.addBox(p.minX,p.maxX,p.maxZ-.05,p.maxZ+.2,.3,2.6),k=1.75,D=1.75;t.updaters.push(q=>{D+=(k-D)*(1-Math.exp(-(k===0?14:4)*q)),w.rotation.x=D}),h.objects.hatch={state:m,pos:new L(-63.25,.3,139.5),close(){k=0,m.open=!1,R.enabled=!0,C.enabled=!1},open(){k=1.75,m.open=!0,R.enabled=!1,C.enabled=!0},set(q){q?this.open():this.close(),D=k}},t.tag="H\xFCtte innen",n.add(F(1.3,.05,.8,1),e.darkWood,-60.8,r+.75,141.3);for(let[q,Rt]of[[-61.35,140.95],[-60.25,140.95],[-61.35,141.65],[-60.25,141.65]])n.add(F(.05,.75,.05,1),e.darkWood,q,r+.37,Rt);t.addBox(-61.5,-60.1,140.85,141.75,0,1.1),n.add(F(.4,.04,.4,1),e.darkWood,-61.1,r+.45,140.4),n.add(F(.4,.45,.04,1),e.darkWood,-61.1,r+.7,140.2),n.add(F(.6,.8,.5,1),e.darkMetal,-60.2,r+.4,138.5),t.addBox(-60.5,-59.9,138.2,138.8,0,1.2),n.add(F(1.9,.18,.85,1),it("mattress",{color:4867126}),-63.3,r+.09,141.4),n.add(F(1.4,1.6,.35,1),e.darkWood,-62.2,r+.8,138.3),t.addBox(-62.9,-61.5,138.1,138.5,0,2);for(let q=0;q<6;q++)n.add(Pt(.05,.05,.12,8,1),it("jar",{color:[4872762,6965802,3815994][q%3]}),-62.7+q*.2,r+1.15,138.3);let B=new X(new ze(.11,12,8,0,Math.PI*2,0,Math.PI*.55),it("beanie",{color:11569696}));B.position.set(-60.55,r+.79,141.25),B.scale.set(1,.8,1.1),B.rotation.z=.3,s.add(B);let I=new X(new ti(.105,.025,6,16),B.material);I.rotation.x=Math.PI/2,I.position.set(0,0,0),B.add(I),h.objects.beanie=B,n.add(Pt(.07,.08,.22,8,1),e.rust,-61.2,r+.88,141.4);let H=Fn([{t:"OKTOBER",font:"bold 40px Arial"},{t:"2017",font:"30px Arial"}],.35,.45,{w:256,h:320,bg:"#d8d2c0"});H.position.set(-59.7,r+1.6,141.2),H.rotation.y=-Math.PI/2,s.add(H);let Y=(q,Rt,zt,qe,En=.6)=>{let si=new X(new Jt(En,En),e.cobweb);si.geometry.translate(En/2,-En/2,0),si.position.set(q,Rt,zt),si.rotation.y=qe,s.add(si)};Y(-64.37,r+2.45,138.13,Math.PI/4),Y(-59.63,r+2.45,138.13,-Math.PI/4-Math.PI/2+Math.PI),Y(-64.37,r+2.45,141.87,-Math.PI/4+Math.PI/2),Y(-58.62,-.62,146.78,-Math.PI*.75,.8),Y(-64.38,-.62,146.78,Math.PI*.75-Math.PI/2,.7),Y(-58.62,-.62,141.62,-Math.PI/4,.6);let Z=t.addLamp({pos:[-63.25,-.4,139.9],color:14215423,intensity:3.2,distance:6,visibleDist:30});t.tag="Kellertreppe";let nt=-63.93,K=-62.57,st=138.4,ut=141.5,yt=r,Ft=i.floorY,ot=q=>Math.max(Ft,Math.min(yt,yt-(q-st)/(ut-st)*(yt-Ft)));t.addFloor(nt,K,138.15,141.62,(q,Rt)=>ot(Rt));let wt=14;for(let q=0;q<wt;q++){let Rt=st+(q+.5)*(ut-st)/wt,zt=ot(Rt);n.add(F(K-nt,.06,(ut-st)/wt+.04,1),e.darkWood,(nt+K)/2,zt-.03,Rt),n.add(F(K-nt,(yt-Ft)/wt,.03,1),e.darkWood,(nt+K)/2,zt+.06,Rt-(ut-st)/wt/2)}for(let q of[nt+.03,K-.03]){let Rt=Math.hypot(ut-st,yt-Ft),zt=new X(F(.05,.25,Rt,1),e.darkWood);zt.position.set(q,(yt+Ft)/2-.05,(st+ut)/2),zt.rotation.x=Math.atan2(yt-Ft,ut-st),s.add(zt)}let N=-3.35,W=0;n.add(F(.2,W-N,3.5,1.5),e.concrete,-64.03,(N+W)/2,139.9),n.add(F(.2,W-N,3.5,1.5),e.concrete,-62.47,(N+W)/2,139.9),n.add(F(1.8,W-N,.2,1.5),e.concrete,-63.25,(N+W)/2,138.1),t.addBox(-64.2,-63.93,138,141.65,N,-.02),t.addBox(-62.57,-62.35,138,141.65,N,-.02),t.addBox(-64.15,-62.35,137.9,138.18,N,-.02),n.add(F(1.4,.6,.2,1.5),e.concrete,-63.25,-.3,141.6),t.tag="Keller";let U=i.room,j=i.floorY,Gt=i.ceilY,Ct=new X(cn(U.maxX-U.minX,U.maxZ-U.minZ,2),e.concrete);Ct.rotation.x=-Math.PI/2,Ct.position.set((U.minX+U.maxX)/2,j,(U.minZ+U.maxZ)/2),Ct.receiveShadow=!0,s.add(Ct);let Xt=new X(cn(U.maxX-U.minX,U.maxZ-U.minZ,2),e.concrete);Xt.rotation.x=Math.PI/2,Xt.position.set((U.minX+U.maxX)/2,Gt,(U.minZ+U.maxZ)/2),s.add(Xt),t.addFloor(U.minX,U.maxX,U.minZ-.1,U.maxZ,j),t.addSurface(U.minX-.3,U.maxX,138,U.maxZ,"concrete",-3.5,-.5),t.addSurface(nt,K,138.15,141.55,"wood",-3.5,.5);let le=Gt-j+.2,te=(j+Gt)/2;n.add(F(U.maxX- -62.55,le,.2,1.5),e.concrete,(U.maxX+-62.55)/2,te,U.minZ-.1),t.addBox(-62.55,U.maxX,U.minZ-.25,U.minZ,-3.4,-.5),n.add(F(.5,le,.2,1.5),e.concrete,-64.2,te,U.minZ-.1),t.addBox(-64.6,-63.95,U.minZ-.25,U.minZ,-3.4,-.5),n.add(F(.2,le,U.maxZ-U.minZ,1.5),e.concrete,U.maxX+.1,te,(U.minZ+U.maxZ)/2),n.add(F(U.maxX-U.minX+.4,le,.2,1.5),e.concrete,(U.minX+U.maxX)/2,te,U.maxZ+.1),t.addBox(U.maxX,U.maxX+.3,U.minZ-.3,U.maxZ+.3,-3.4,-.5),t.addBox(U.minX-.3,U.maxX+.3,U.maxZ,U.maxZ+.3,-3.4,-.5);let lt=i.shaft;n.add(F(.2,le,lt.minZ-U.minZ,1.5),e.concrete,U.minX-.1,te,(U.minZ+lt.minZ)/2),n.add(F(.2,le,U.maxZ-lt.maxZ,1.5),e.concrete,U.minX-.1,te,(lt.maxZ+U.maxZ)/2),n.add(F(.2,Gt-lt.top+.1,lt.maxZ-lt.minZ,1),e.concrete,U.minX-.1,(lt.top+Gt+.1)/2,(lt.minZ+lt.maxZ)/2),n.add(F(.2,lt.y-j,lt.maxZ-lt.minZ,1),e.concrete,U.minX-.1,(lt.y+j)/2,(lt.minZ+lt.maxZ)/2),t.addBox(U.minX-.3,U.minX,U.minZ-.3,lt.minZ,-3.4,-.5),t.addBox(U.minX-.3,U.minX,lt.maxZ,U.maxZ+.3,-3.4,-.5),t.addBox(U.minX-.3,U.minX,lt.minZ,lt.maxZ,lt.top,-.5),t.addRegionBox(U.minX,U.maxX,U.minZ-.05,U.maxZ),t.tag="L\xFCftungsschacht";let De=lt.maxZ-lt.minZ,en=lt.top-lt.y,Te=new X(cn(lt.maxX-lt.minX+1.2,De,1),e.metal);Te.rotation.x=-Math.PI/2,Te.position.set((lt.minX+lt.maxX)/2-.6,lt.y,(lt.minZ+lt.maxZ)/2),s.add(Te),n.add(F(lt.maxX-lt.minX+.1,.05,De+.1,1),e.metal,(lt.minX+lt.maxX)/2-.05,lt.top+.025,(lt.minZ+lt.maxZ)/2);for(let q of[lt.minZ-.03,lt.maxZ+.03])n.add(F(lt.maxX-lt.minX+1.2,en+.1,.05,1),e.metal,(lt.minX+lt.maxX)/2-.6,(lt.y+lt.top)/2,q);t.addFloor(lt.minX-1,lt.maxX+.05,lt.minZ,lt.maxZ,lt.y),t.addBox(lt.minX-1,lt.maxX,lt.minZ-.25,lt.minZ,-3.4,-1),t.addBox(lt.minX-1,lt.maxX,lt.maxZ,lt.maxZ+.25,-3.4,-1),t.addBox(lt.minX-.1,lt.maxX,lt.minZ,lt.maxZ,lt.top,-.9),t.addBox(lt.minX-1.3,lt.minX-.9,lt.minZ,lt.maxZ,-3.4,-.5),t.addRegionBox(lt.minX-.9,lt.maxX+.05,lt.minZ,lt.maxZ),t.addSurface(lt.minX-1.2,lt.maxX,lt.minZ,lt.maxZ,"metal",-3.2,-1.5),n.add(F(.9,3.2,.05,1),e.concrete,lt.minX-.55,-1.4,lt.minZ-.05),n.add(F(.9,3.2,.05,1),e.concrete,lt.minX-.55,-1.4,lt.maxZ+.05),n.add(F(.05,3.2,.9,1),e.concrete,lt.minX-1,-1.4,(lt.minZ+lt.maxZ)/2);for(let q=0;q<9;q++)n.add(Pt(.015,.015,.5,6,1),e.rust,lt.minX-.93,lt.y+.3+q*.33,(lt.minZ+lt.maxZ)/2,Math.PI/2,0,0);let Fe=lt.minX-.55,ye=(lt.minZ+lt.maxZ)/2,un=a(Fe,ye);n.add(F(1.1,.7,1.1,1),e.concrete,Fe,un+.25,ye);let yn=new X(F(.95,.04,.95,.5),e.bauzaun);yn.position.set(Fe,un+.62,ye),s.add(yn),t.addBox(Fe-.55,Fe+.55,ye-.55,ye+.55,-.9,un+.6),h.objects.ventTop={pos:new L(Fe,un+.5,ye),grate:yn};let je=new Qt;je.position.set(U.minX+.12,(lt.y+lt.top)/2,(lt.minZ+lt.maxZ)/2);let V=new X(F(.25,.85,.95,.5),e.darkMetal);V.position.x=0,je.add(V);let dn=new X(new Ti(.33,20),new $e({color:328965}));dn.position.x=.13,dn.rotation.y=Math.PI/2,je.add(dn);let ve=new Qt;ve.position.x=.14,je.add(ve);for(let q=0;q<5;q++){let Rt=new X(new Ke(.02,.3,.1),e.metal);Rt.position.y=.15;let zt=new Qt;zt.rotation.x=q/5*Math.PI*2,Rt.rotation.y=.5,zt.add(Rt),ve.add(zt)}let ke=new X(new Ue(.06,.06,.06,10),e.darkMetal);ke.rotation.z=Math.PI/2,ve.add(ke);let bt=document.createElement("canvas");bt.width=bt.height=128;let Oe=bt.getContext("2d");Oe.fillStyle="#666";for(let q=0;q<128;q+=12)Oe.fillRect(0,q,128,6);Oe.fillRect(0,0,6,128),Oe.fillRect(122,0,6,128);let Zt=new pn(bt),qt=new X(new Jt(.78,.78),new Me({map:Zt,alphaTest:.4,transparent:!1,side:Se}));qt.material.onBeforeCompile=q=>{q.fragmentShader=q.fragmentShader.replace("#include <alphatest_fragment>","if (diffuseColor.r < 0.1) discard;")},qt.position.set(.2,0,0),qt.rotation.y=Math.PI/2,je.add(qt);let P=[];for(let[q,Rt]of[[.36,.36],[.36,-.36],[-.36,.36],[-.36,-.36]]){let zt=new X(new Ue(.018,.018,.02,8),e.metal);zt.rotation.z=Math.PI/2,zt.position.set(.21,q,Rt),je.add(zt),P.push(zt)}s.add(je);let T=t.addBox(U.minX-.25,U.minX+.35,lt.minZ-.1,lt.maxZ+.1,-3.4,lt.top+.15),$=0,pt=1;t.updaters.push(q=>{$+=(pt-$)*(1-Math.exp(-(pt>0?3:.7)*q)),ve.rotation.x+=$*22*q}),h.objects.fan={group:je,grille:qt,screws:P,housing:V,blades:ve,ventCol:T,pos:new L(U.minX+.3,(lt.y+lt.top)/2,(lt.minZ+lt.maxZ)/2),setOn(q){pt=q?1:0},get running(){return pt>0},removeGrille(){qt.visible=!1,P.forEach(q=>q.visible=!1)},removeFan(){V.visible=!1,ve.visible=!1,dn.visible=!1,T.enabled=!1},reset(q=!0){pt=q?1:0,$=pt,qt.visible=!0,P.forEach(Rt=>Rt.visible=!0),V.visible=!0,ve.visible=!0,dn.visible=!0,T.enabled=!0}};let ht=new Qt;ht.position.set(-61.4,Gt-.08,144.2);let Mt=new X(new Ke(.16,.06,1.3),e.darkMetal);ht.add(Mt);let Et=new $e({color:15266047}),at=new X(new Ue(.025,.025,1.2,8),Et);at.rotation.x=Math.PI/2,at.position.y=-.05,ht.add(at),s.add(ht);let rt=Mn(14215423,1.6,.35);rt.position.set(-61.4,Gt-.15,144.2),s.add(rt);let vt={on:!0,k:1},O=q=>{if(!vt.on)return 0;let Rt=q%7.3,zt=1;return Rt<.35?zt=Math.random()<.5?.15:1:Rt>4.1&&Rt<4.25&&(zt=.25),Math.random()<.006&&(zt=.3),zt},ct=t.addLamp({pos:[-61.4,Gt-.3,144.2],color:14674687,intensity:9,distance:9,visibleDist:25});t.updaters.push((q,Rt)=>{let zt=O(Rt);vt.k=zt,ct.level=zt,Z.level=zt*(h.objects.hatch.state.open?1:0),Et.color.setScalar(.15+.85*zt),rt.material.opacity=.35*zt,h.audio.loops.tube&&h.audio.setLoop("tube",zt>.5?1:.2,.02)}),h.objects.tube={state:vt,pos:new L(-61.4,Gt-.1,144.2),set(q){vt.on=q}};let tt=U.maxX-.35,gt=j+.9;n.add(F(.65,.06,3.2,1),e.darkWood,tt,gt,143.8);for(let q of[142.3,145.3])for(let Rt of[tt-.28,tt+.28])n.add(F(.06,.9,.06,1),e.darkWood,Rt,j+.45,q);t.addBox(tt-.35,U.maxX,142.1,145.5,-3.4,gt+.1);let xt=new Qt;xt.position.set(tt-.3,gt-.12,143);let _t=new X(F(.5,.14,.6,1),e.darkWood);_t.position.x=.22,xt.add(_t);let Vt=new X(F(.03,.16,.64,1),e.wood);xt.add(Vt);let re=new X(F(.03,.02,.16,1),e.metal);re.position.x=-.03,xt.add(re);let mt=new Qt,Wt=new X(new Ue(.018,.02,.1,8),it("sdh",{color:13148184}));Wt.rotation.x=Math.PI/2,mt.add(Wt);let ne=new X(new Ue(.005,.005,.12,6),e.metal);ne.rotation.x=Math.PI/2,ne.position.z=.11,mt.add(ne),mt.position.set(.18,.08,.05),mt.rotation.y=.4,xt.add(mt),s.add(xt);let It=0,ue=0;t.updaters.push(q=>{ue+=(It-ue)*(1-Math.exp(-8*q)),xt.position.x=tt-.3-ue}),h.objects.drawer={open(){It=.38},set(q){It=ue=q?.38:0},screwdriver:mt,pos:new L(tt-.4,gt-.1,143)};let Xe=new X(F(.22,.02,.3,1),it("notebook",{color:2763322}));Xe.position.set(tt-.05,gt+.04,142.75),Xe.rotation.y=.2,s.add(Xe);let G=new X(new Jt(.2,.28),it("pages",{color:13617332}));G.rotation.x=-Math.PI/2,G.position.set(tt-.05,gt+.052,142.75),G.rotation.z=.2,s.add(G);let dt=new Qt,oe=new X(F(.28,.16,.42,1),it("recorder",{color:1842206}));dt.add(oe);let he=new X(new Ti(.06,16),it("spk",{color:526344}));he.position.set(-.141,0,.1),he.rotation.y=-Math.PI/2,dt.add(he);let Kt=new X(new ze(.01,6,4),ii(16719888));Kt.position.set(-.141,.05,-.12),dt.add(Kt);let _e=Fn([{t:"RUF 2",font:'bold 72px "Comic Sans MS"',color:"#111"}],.16,.06,{w:256,h:96,bg:"#e8e4d0",border:null,worn:!1});_e.position.set(-.142,-.04,-.05),_e.rotation.y=-Math.PI/2,dt.add(_e),dt.position.set(tt+.05,gt+.11,144.5),s.add(dt);for(let q=0;q<3;q++)n.add(Pt(.05,.05,.16,10,1),it("spkCyl",{color:2236966}),tt+.05,gt+.11,145.05+q*.13);n.add(F(.12,.05,.08,1),it("batt",{color:6965786}),tt-.1,gt+.05,143.6);let fn=new X(F(.06,.04,.32,1),e.white);fn.position.set(tt+.15,gt+.05,142.45),s.add(fn);let Ge=new X(new ze(.007,6,4),ii(16724e3));Ge.position.set(tt+.12,gt+.075,142.33),s.add(Ge),h.objects.strip={pos:new L(tt,gt+.06,142.45),led:Ge};let Ve=new Qt,Qe=new X(F(.075,.01,.155,1),it("phoneBody",{color:1118481}));Ve.add(Qe);let nn=new X(new Jt(.068,.145),new $e({color:2241365}));nn.rotation.x=-Math.PI/2,nn.position.y=.0055,Ve.add(nn),Ve.position.set(tt-.08,gt+.04,142.45),Ve.rotation.y=.15,Ve.visible=!1,s.add(Ve),h.objects.chargingPhone={mesh:Ve,screen:nn},h.objects.recorder={group:dt,pos:new L(tt+0,gt+.12,144.5),led:Kt},h.objects.notebook={pos:new L(tt-.05,gt+.05,142.75)},n.add(F(.42,.04,.42,1),e.darkWood,tt-.7,j+.45,143.6),n.add(F(.04,.45,.42,1),e.darkWood,tt-.9,j+.7,143.6),t.addBox(tt-.95,tt-.5,143.35,143.85,-3.4,j+1);let Sn=U.maxX-.01,Ln=new X(new Jt(1.1,.82),new Me({map:Gf()}));Ln.position.set(Sn,j+1.75,143.7),Ln.rotation.y=-Math.PI/2,s.add(Ln),h.objects.map={pos:Ln.position.clone()},[[142.6,1.95],[142.75,1.55],[144.6,2],[144.85,1.6],[142.5,1.2],[144.7,1.2],[143.4,2.3]].forEach(([q,Rt],zt)=>{let qe=new X(new Jt(.16,.19),new Me({map:Hf(zt+3)}));qe.position.set(Sn-.002*zt,j+Rt,q),qe.rotation.set(0,-Math.PI/2,(Math.random()-.5)*.2),s.add(qe)}),h.objects.polaroids={pos:new L(Sn,j+1.6,142.7)};let Zs=new X(new Jt(.34,.42),new Me({map:Vf()}));Zs.position.set(Sn,j+1.55,145.4),Zs.rotation.set(0,-Math.PI/2,.05),s.add(Zs),h.objects.news={pos:Zs.position.clone()},n.add(Pt(.008,.008,1.6,4,1),e.black,Sn-.02,j+1.9,145.9),n.add(Pt(.05,.05,5.6,8,1),e.rust,-61.5,-.78,142,0,0,Math.PI/2),n.add(Pt(.035,.035,5,8,1),e.darkMetal,-62.2,-.72,144.2,Math.PI/2,0,0);for(let q of[-63.5,-60.5])n.add(F(.04,.12,.08,1),e.darkMetal,q,-.68,142);for(let[q,Rt,zt,qe]of[[-60.2,-3,146.3,.6],[-60.25,-2.62,146.35,.5],[-59.4,-3.02,146.4,.5]])n.add(F(qe,.4,.45,1),it("cardboard",{color:6967864}),q,Rt,zt,0,.1,0);t.addBox(-60.55,-59.1,146.1,146.8,-3.4,-2.3),n.add(F(2.2,1.9,.42,1),e.darkWood,-62.5,j+.95,U.maxZ-.22),t.addBox(-63.65,-61.35,U.maxZ-.45,U.maxZ,-3.4,-1);let Wa=it("shelfItems",{color:3814960});for(let q=0;q<9;q++)n.add(F(.18+q%3*.05,.2,.25,1),[Wa,it("cans",{color:5917232}),it("spkC",{color:1710620})][q%3],-63.4+q*.22,j+.5+Math.floor(q/3)*.55,U.maxZ-.22);n.add(F(.3,.45,.18,1),it("canister",{color:6953490}),-64,j+.22,146.3),n.add(Pt(.16,.13,.32,10,1),e.metal,-63.9,j+.16,142.4),t.addCircle(-63.9,142.4,.18,-3.4,-2.7),n.add(F(.5,.25,.03,1),e.wood,-60.4,j+1.55,U.maxZ-.02);let Xa=it("key",{color:10127952}),qa=[];for(let q=0;q<4;q++){let Rt=new Qt,zt=new X(new Ke(.015,.06,.004),Xa);zt.position.y=-.04,Rt.add(zt);let qe=new X(new Ke(.035,.05,.004),it("tag"+q,{color:q===2?10492432:9079418}));qe.position.y=-.1,Rt.add(qe),Rt.position.set(-60.58+q*.12,j+1.6,U.maxZ-.045),s.add(Rt),qa.push(Rt)}h.objects.keys={pos:new L(-60.34,j+1.52,U.maxZ-.05),torKey:qa[2]};let Ys=-59.25,ms=j+1.55,gs=U.maxZ-.06;n.add(F(.42,.52,.1,1),it("fusebox",{color:9079942}),Ys,ms,gs);let A=Fn([{t:"1 LICHT",font:"bold 36px Arial"},{t:"2 ______",font:"bold 36px Arial"},{t:"3 STECKD.",font:"bold 36px Arial"}],.3,.18,{w:256,h:160,bg:"#ddd8c8",border:null});A.position.set(Ys,ms+.14,gs-.052),A.rotation.y=Math.PI,s.add(A);let z=[];for(let q=0;q<3;q++){let Rt=new X(new Ke(.05,.08,.04),it("sw",{color:2105376}));Rt.position.set(Ys+.12-q*.12,ms-.1,gs-.065),s.add(Rt),z.push(Rt)}h.objects.fuse={switches:z,pos:q=>new L(Ys+.12-q*.12,ms-.1,gs-.08),setVisual(q,Rt){z[q].rotation.x=Rt?0:.6,z[q].position.y=ms-.1-(Rt?0:.015)},label:A};let et=Gs({coat:1711130,pants:789518,hood:!0,height:1.93,longCoat:!0});et.root.position.set(0,-500,0),s.add(et.root);let J=new Rs(16774368,0,30,.36,.5,2);J.position.set(.24,.05,-.42),et.chest.add(J);let Q=new Ye;Q.position.set(.15,-1.6,-8),et.chest.add(Q),J.target=Q;let Tt=Mn(16773336,.7,.9);Tt.position.copy(J.position),et.chest.add(Tt);let Ot=new X(new Ue(.025,.03,.2,8),e.black);Ot.rotation.x=Math.PI/2,Ot.position.set(.24,.05,-.32),et.chest.add(Ot),h.objects.man={H:et,torch:J,glow:Tt,show(q){q||et.root.position.set(0,-500,0),J.intensity=q?26:0,Tt.visible=q}};let At=Gs({coat:921360,pants:657930,hood:!0,height:1.93,longCoat:!0});At.root.visible=!1,s.add(At.root),h.objects.silhouette=At;let Lt=Gs({coat:5921374,pants:2766160,hood:!1,height:1.78,skin:9071188});Lt.sit(),Lt.root.visible=!1,s.add(Lt.root);let Ht=new X(new ze(.122,12,8,0,Math.PI*2,0,Math.PI*.55),it("hair",{color:1380364}));Ht.position.y=.14,Lt.neck.add(Ht);let ie=new X(new ti(.13,.05,6,14),it("hoodie",{color:5921374}));ie.rotation.x=Math.PI/2+.3,ie.position.set(0,.02,.04),Lt.neck.add(ie);let pe=new X(new Ke(.26,.12,.03),it("hoodiePocket",{color:5131858}));pe.position.set(0,.22,-.16),Lt.hips.add(pe),Lt.root.traverse(q=>{q.isMesh&&q.geometry.type==="BoxGeometry"&&q.material.color.getHex()===723723&&(q.material=it("sneaker",{color:14211282}))}),h.objects.deniz=Lt;let Nt=new Qt,xe=new X(F(.075,.01,.155,1),it("phoneBody2",{color:1118481}));Nt.add(xe);let We=new X(new Jt(.068,.145),new $e({color:9087231}));We.rotation.x=-Math.PI/2,We.position.y=.006,Nt.add(We);let Pe=Mn(10137855,.9,.6);Pe.position.y=.08,Nt.add(Pe),Nt.visible=!1,s.add(Nt);let Ae=t.addLamp({pos:[0,0,0],color:10137855,intensity:1.2,distance:3.5,enabled:!1});h.objects.groundPhone={group:Nt,lamp:Ae,screen:We,halo:Pe,place(q,Rt,zt){Nt.position.set(q,Rt+.01,zt),Nt.rotation.y=1.2,Nt.visible=!0,Ae.pos.set(q,Rt+.15,zt),Ae.enabled=!0},hide(){Nt.visible=!1,Ae.enabled=!1},pulse(q){let Rt=.5+.5*Math.max(0,Math.sin(q*3));We.material.color.setRGB(.3+Rt*.4,.4+Rt*.4,.7+Rt*.3),Pe.material.opacity=.3+Rt*.5,Ae.intensity=.6+Rt*1.2}};let sn=new Qt,Bt=new X(Pt(.1,.22,4.6,7,1.2),e.barkOak);Bt.position.y=2.3,sn.add(Bt);for(let q=0;q<4;q++){let Rt=new X(Pt(.03,.07,1.6,5,1.2),e.barkOak);Rt.position.set(0,1.2+q*.8,0),Rt.rotation.set(.7*(q%2?1:-1),q,.4),Rt.translateY(.7),sn.add(Rt)}let wn=new X($i(2.2,1.8,3),e.leafOak);return wn.position.y=3.2,sn.add(wn),sn.traverse(q=>{q.isMesh&&(q.castShadow=!0)}),s.add(sn),h.objects.branch={group:sn},{}}function vp(s,t){let e=new Jt(s,t);e.translate(0,t/2,0);let n=e.clone();return n.rotateY(Math.PI/2),us([e.toNonIndexed(),n.toNonIndexed()])}var He=3,_p=2.85,On=5.6,St={x0:504.3,x1:505.4,zTop:7.2,zBot:11.2,n:14};St.run=(St.zBot-St.zTop)/St.n;St.rise=He/St.n;var Ny=s=>{if(s<=St.zTop)return He;if(s>=St.zBot)return 0;let t=Math.floor((St.zBot-s)/St.run);return Math.min(He,(t+1)*St.rise)},fs={ox:500,spawn:[500.9,He,2.9],ogSpawn:[502.65,He,3.7],egSpawn:[504.85,0,11.95],frontDoor:new L(503.6,1.1,15.35),stairs:St};function Uy(){let s=document.createElement("canvas");s.width=s.height=256;let t=s.getContext("2d");t.fillStyle="#6d6a62",t.fillRect(0,0,256,256);for(let n=0;n<4;n++)for(let i=0;i<4;i++){let r=150+(n*7+i*3)%5*6;t.fillStyle=`rgb(${r},${r-4},${r-12})`,t.fillRect(n*64+2,i*64+2,60,60);for(let a=0;a<40;a++)t.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,t.fillRect(n*64+2+Math.random()*58,i*64+2+Math.random()*58,3,3)}let e=new pn(s);return e.wrapS=e.wrapT=Mi,e.colorSpace=mn,e.anisotropy=4,e}function Fy(){let s=document.createElement("canvas");s.width=64,s.height=64;let t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,64);return e.addColorStop(0,"rgba(255,190,120,1)"),e.addColorStop(.35,"rgba(255,170,100,.45)"),e.addColorStop(1,"rgba(255,150,80,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new pn(s)}function bp(s=!0){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(40,18,2,40,18,60);return n.addColorStop(0,s?"#b07a40":"#5a6a8a"),n.addColorStop(.4,s?"#2a1c14":"#161b26"),n.addColorStop(1,"#07080b"),e.fillStyle=n,e.fillRect(0,0,64,64),new pn(t)}function Mp(s,t,e,n){t.tag="Zuhause";let i=e.plasterW,r=(G,dt,oe,he,Kt,_e,fn,Ge=0)=>n.add(F(G,dt,oe,1.5),he,Kt,_e,fn,0,Ge,0),a=(G,dt,oe,he,Kt,_e,fn=i,Ge=!0)=>{r(dt-G,_e-Kt,he-oe,fn,(G+dt)/2,(Kt+_e)/2,(oe+he)/2),Ge&&t.addBox(G,dt,oe,he,Kt-(Kt<1?1:.1),_e+.1)},o=(G,dt,oe,he,Kt,_e)=>t.addBox(G,dt,oe,he,Kt,_e),l=(G,dt,oe,he,Kt,_e,fn=[],Ge=i)=>{let Ve=oe;for(let[Qe,nn,Sn,Ln=0]of fn)Qe>Ve&&a(G,dt,Ve,Qe,Kt,_e,Ge),Sn<_e-Kt&&r(dt-G,_e-Kt-Sn,nn-Qe,Ge,(G+dt)/2,Kt+Sn+(_e-Kt-Sn)/2,(Qe+nn)/2),Ln>0&&(r(dt-G,Ln,nn-Qe,Ge,(G+dt)/2,Kt+Ln/2,(Qe+nn)/2),t.addBox(G,dt,Qe,nn,Kt-.5,Kt+Ln)),Ve=nn;Ve<he&&a(G,dt,Ve,he,Kt,_e,Ge)},c=(G,dt,oe,he,Kt,_e,fn=[],Ge=i)=>{let Ve=G;for(let[Qe,nn,Sn,Ln=0]of fn)Qe>Ve&&a(Ve,Qe,oe,he,Kt,_e,Ge),Sn<_e-Kt&&r(nn-Qe,_e-Kt-Sn,he-oe,Ge,(Qe+nn)/2,Kt+Sn+(_e-Kt-Sn)/2,(oe+he)/2),Ln>0&&(r(nn-Qe,Ln,he-oe,Ge,(Qe+nn)/2,Kt+Ln/2,(oe+he)/2),t.addBox(Qe,nn,oe,he,Kt-.5,Kt+Ln)),Ve=nn;Ve<dt&&a(Ve,dt,oe,he,Kt,_e,Ge)},u=it("doorWhite",{color:12235942}),f=(G,dt,oe=u)=>{let he=new Qt,Kt=new X(F(G,dt,.04,1),oe);Kt.position.set(G/2,dt/2,0),Kt.castShadow=!0,he.add(Kt);let _e=new X(F(.12,.02,.06,1),e.metal);return _e.position.set(G-.1,1,0),he.add(_e),he.userData.handle=_e,he},d=(G,dt,oe,he,Kt,_e,fn=!0)=>{let Ge=new X(new Jt(he,Kt),new $e({map:bp(fn)}));Ge.position.set(G,dt,oe),Ge.rotation.y=_e,s.add(Ge);let Ve=new X(F(.05,Kt,.04,1),e.white);Ve.position.set(G,dt,oe),Ve.rotation.y=_e,s.add(Ve);let Qe=new X(F(he,.04,.04,1),e.white);return Qe.position.set(G,dt,oe),Qe.rotation.y=_e,s.add(Qe),Ge},p=it("kitchenTile",{map:Uy()});p.map.repeat.set(1,1);let m=it("carpet",{color:4208175}),x=it("stairWood",{map:hs("floor"),color:10127992}),g=new X(cn(9.6,13.4,1.5),e.floor);g.rotation.x=-Math.PI/2,g.position.set(500.7,.001,8.7),g.receiveShadow=!0,s.add(g);let y=new X(cn(4.4,4,.6),p);y.rotation.x=-Math.PI/2,y.position.set(503.2,.004,4),y.receiveShadow=!0,s.add(y),t.addFloor(495.8,505.6,1.8,15.6,0,{label:"Boden EG"}),t.addSurface(495.8,505.6,1.8,15.6,"woodfloor",-.5,1.4),t.addSurface(501,505.4,2,6,"tile",-.5,1.4);let b=(G,dt,oe,he)=>{let Kt=new X(cn(dt-G,he-oe,2),e.plasterW);Kt.rotation.x=Math.PI/2,Kt.position.set((G+dt)/2,_p,(oe+he)/2),s.add(Kt)};b(495.8,St.x0,1.8,15.6),b(St.x0,505.6,1.8,St.zTop),b(St.x0,505.6,St.zBot,15.6);let E=(G,dt,oe,he)=>{let Kt=new X(cn(dt-G,he-oe,1.5),e.floor);Kt.rotation.x=-Math.PI/2,Kt.position.set((G+dt)/2,He+.001,(oe+he)/2),Kt.receiveShadow=!0,s.add(Kt)};E(497.5,St.x0,-.1,11.2),E(St.x0,505.6,4.4,St.zTop),t.addFloor(499.8,504.2,-.2,4.5,He,{label:"Boden Leons Zimmer"}),t.addFloor(497.5,504.32,4.4,9.7,He,{label:"Boden OG Flur"}),t.addFloor(St.x0-.02,505.5,4.4,St.zTop,He,{label:"Treppenpodest"}),t.addFloor(St.x0,St.x1,St.zTop,St.zBot,(G,dt)=>Ny(dt),{label:"Treppe"}),t.addSurface(499.5,505.6,-.5,11.2,"woodfloor",2.5,4.5),t.addSurface(St.x0,St.x1,St.zTop-.05,St.zBot,"stairs",-.2,3.3);let S=new X(cn(8.2,11.8,2),e.plasterW);S.rotation.x=Math.PI/2,S.position.set(501.5,On,5.6),s.add(S),t.tag="Leons Zimmer";let _=He;a(499.9,500,0,4.4,_,On,e.wallpaper),a(499.9,504.1,-.1,0,_,On,e.wallpaper),l(504,504.1,0,4.4,_,On,[[1.4,2.8,2.1,.9]],e.wallpaper),c(499.9,505.4,4.4,4.5,_,On,[[502.2,503.1,2.1]],e.wallpaper);for(let G of[502.2,503.1])n.add(F(.06,2.1,.14,1),e.white,G,_+1.05,4.45);t.addRegionBox(500,504,0,4.4,{label:"Leons Zimmer",minY:2,maxY:9}),t.addRegionBox(502.2,503.1,3.8,5.1,{label:"Zimmert\xFCr",minY:2,maxY:9}),n.add(F(1,.32,2.1,1),e.darkWood,500.55,_+.16,1.15),n.add(F(.96,.16,2,1),it("mattressW",{color:13157560}),500.55,_+.4,1.15);let w=new X(F(1,.12,1.4,1),it("duvet",{color:3820126}));w.position.set(500.58,_+.52,1.55),w.rotation.set(.02,.06,-.03),w.castShadow=!0,s.add(w),n.add(F(.6,.12,.35,1),it("pillow",{color:13683904}),500.55,_+.54,.35),o(500,501.1,0,2.25,_-.1,_+.6);let v=new X(new Jt(.6,.85),new Me({map:Xf()}));v.position.set(500.02,_+1.6,1.3),v.rotation.y=Math.PI/2,s.add(v),n.add(F(1.7,.05,.7,1),e.wood,502.45,_+.75,.4);for(let G of[501.65,503.25])n.add(F(.05,.75,.66,1),e.wood,G,_+.375,.4);o(501.6,503.3,0,.78,_-.1,_+.85),n.add(F(.62,.38,.04,1),e.black,502.4,_+1.07,.2),n.add(F(.05,.2,.05,1),e.black,502.4,_+.86,.22);let M=new X(new Jt(.58,.34),new $e({map:Wf()}));M.position.set(502.4,_+1.07,.225),s.add(M),t.addLamp({pos:[502.4,_+1.1,.6],color:6982360,intensity:.9,distance:3.2,visibleDist:30}),n.add(F(.45,.02,.15,1),e.black,502.35,_+.785,.55),n.add(F(.06,.02,.1,1),e.black,502.75,_+.785,.55),n.add(Pt(.07,.08,.02,10,1),e.black,501.85,_+.78,.2),n.add(Pt(.012,.012,.4,6,1),e.black,501.85,_+.98,.2),n.add(Pt(.06,.1,.12,10,1),e.black,501.9,_+1.17,.27);let R=new Qt,C=new X(F(.075,.01,.155,1),it("pbody",{color:1118481}));R.add(C);let k=new X(new Jt(.068,.145),new $e({color:657930}));k.rotation.x=-Math.PI/2,k.position.y=.006,R.add(k),R.position.set(503,_+.78,.5),R.rotation.y=-.3,s.add(R);let D=Mn(10137855,.5,0);D.position.set(503,_+.83,.5),s.add(D),h.objects.homePhone={group:R,pos:new L(503,_+.8,.5),light(G){k.material.color.set(G?9086184:657930),D.material.opacity=G?.6:0}},n.add(F(.45,.05,.45,1),e.black,502.4,_+.47,1.25),n.add(F(.45,.5,.05,1),e.black,502.4,_+.78,1.47),n.add(Pt(.03,.03,.45,6,1),e.metal,502.4,_+.23,1.25),o(502.15,502.65,1,1.5,_-.1,_+.9);let B=new Qt,I=new X(F(.5,.55,.12,1),it("jacket",{color:1976862}));I.position.set(0,.8,1.5),I.rotation.x=.15,B.add(I);let H=new X(F(.12,.45,.12,1),I.material);H.position.set(-.28,.72,1.45),H.rotation.z=.2,B.add(H);let Y=H.clone();Y.position.x=.28,Y.rotation.z=-.2,B.add(Y),B.position.set(502.4,_,0),B.traverse(G=>{G.isMesh&&(G.castShadow=!0)}),s.add(B),h.objects.jacket={group:B,pos:new L(502.4,_+.9,1.5)},n.add(F(.62,2.1,1.3,1),e.wood,500.36,_+1.05,3.75),n.add(F(.01,1.9,.01,1),e.black,500.68,_+1.05,3.75),o(500,500.7,3.05,4.4,_-.1,_+2.2),n.add(F(.4,.15,.35,1),it("laundry",{color:3816006}),501,_+.08,3.9,0,.4,0),n.add(F(.3,1.8,.9,1),e.wood,503.83,_+.9,3.6);for(let G=0;G<4;G++){n.add(F(.3,.03,.9,1),e.darkWood,503.83,_+.25+G*.45,3.6);for(let dt=0;dt<7;dt++)(dt+G)%5!==0&&n.add(F(.2,.2+(dt*7+G)%4*.03,.06,1),it("book"+(dt+G)%5,{color:[6957602,2767450,3824186,8022592,3815994][(dt+G)%5]}),503.86,_+.37+G*.45,3.25+dt*.1)}o(503.65,504,3.1,4.1,_-.1,_+2),n.add(F(.4,.5,.4,1),e.wood,500.3,_+.25,2.55),o(500,500.5,2.33,2.77,_-.1,_+.6),n.add(Pt(.06,.08,.03,10,1),e.black,500.3,_+.52,2.5),n.add(Pt(.012,.012,.25,6,1),e.black,500.3,_+.65,2.5),n.add(Pt(.07,.11,.13,12,1),it("lampShade",{color:14208180}),500.3,_+.82,2.5),n.add(F(.35,.45,.2,1),it("backpack",{color:1976890}),501.5,_+.22,3.95,.1,.3,0);for(let G of[0,.14])n.add(F(.11,.09,.29,1),it("sneakerW",{color:14079696}),502+G,_+.045,3.75,0,.15,0);let Z=new X(new ti(.09,.015,6,16,Math.PI),e.black);Z.position.set(502.85,_+.84,.35),Z.rotation.set(0,.4,0),s.add(Z),n.add(Pt(.1,.08,.2,10,1),it("pot",{color:9062960}),503.85,_+1.02,1.7);let nt=new X(vp(.5,.45),e.hedge);nt.position.set(503.85,_+1.1,1.7),s.add(nt),n.add(Pt(.18,.22,.12,14,1),it("ceilLamp",{color:13156528}),502,On-.06,2.2),n.add(Pt(.15,.15,.02,14,1),it("ceilLampG",{color:15261904}),502,On-.125,2.2),n.add(Pt(.006,.006,.8,4,1),e.black,502.5,_+.4,.1);let K=new X(new Jt(1.6,1.1),it("rug",{color:4864564}));K.rotation.x=-Math.PI/2,K.position.set(501.9,_+.005,2.6),K.receiveShadow=!0,s.add(K),d(504.04,_+1.5,2.1,1.4,1.2,-Math.PI/2);for(let G of[1.25,2.95]){let dt=new X(F(.04,1.8,.4,1),it("curtain",{color:4860458}));dt.position.set(503.92,_+1.55,G),s.add(dt)}n.add(F(.2,.04,1.5,1),e.white,503.9,_+.9,2.1),t.addLamp({pos:[503.4,_+2.3,2.1],color:16754784,intensity:3.5,distance:6,visibleDist:30}),t.tag="OG Flur",l(501.95,502.05,4.5,9.7,_,On,[[6.4,7.3,2.1]]);for(let G of[6.4,7.3])n.add(F(.14,2.1,.06,1),e.white,502,_+1.05,G);c(501.95,St.x0,9.6,9.7,_,On,[[502.6,503.5,2.1]]);let st=f(.9,2.05);st.position.set(502.6,_,9.63),s.add(st),o(502.6,503.5,9.6,9.7,_-.1,_+2.2),l(505.4,505.6,4.4,15.6,1.5,On,[[8.5,9.9,1.8,.5]]),d(505.38,2.65,9.2,1.3,1.25,-Math.PI/2,!1),t.addLamp({pos:[504.9,2.6,9.2],color:9083592,intensity:1.6,distance:5,visibleDist:30}),n.add(F(.06,.06,2.45,1),e.darkWood,St.x0,_+.95,8.42);for(let G=7.3;G<9.6;G+=.18)n.add(F(.03,.92,.03,1),e.white,St.x0,_+.46,G);o(St.x0-.05,St.x0+.05,St.zTop-.02,9.7,2.9,_+1,{label:"Gel\xE4nder"}),a(St.x0,505.4,11.15,11.25,_,On),a(St.x0-.05,St.x0+.05,9.7,11.2,_,On);{let G=Math.hypot(St.zBot-St.zTop,He),dt=new X(Pt(.025,.025,G,8,1),e.darkWood);dt.position.set(St.x1-.06,He/2+.92,(St.zTop+St.zBot)/2),dt.rotation.x=Math.atan2(St.zBot-St.zTop,He),s.add(dt)}t.addRegionBox(502,St.x0+.1,4.4,9.6,{label:"OG Flur",minY:2,maxY:9}),t.addRegionBox(503.8,505.4,4.4,St.zTop+.4,{label:"Treppenpodest",minY:2,maxY:9}),t.addRegionBox(St.x0,505.4,St.zTop-.4,St.zBot+.6,{label:"Treppe"});let ut=new X(new Jt(.8,4.4),it("runner",{color:5910568}));ut.rotation.x=-Math.PI/2,ut.position.set(503.15,_+.006,7.1),ut.receiveShadow=!0,s.add(ut);for(let[G,dt]of[[5.2,5925498],[8.4,8022602]]){n.add(F(.03,.42,.34,1),e.darkWood,502.07,_+1.6,G);let oe=new X(new Jt(.3,.36),it("pic"+G,{color:dt}));oe.position.set(502.09,_+1.6,G),oe.rotation.y=Math.PI/2,s.add(oe)}let yt=new X(F(.04,.08,.06,1),ii(16756832));yt.position.set(502.07,_+.3,8.9),s.add(yt);let Ft=Mn(16752720,.6,.5);Ft.position.set(502.12,_+.3,8.9),s.add(Ft),t.addLamp({pos:[502.4,_+.4,8.9],color:16751168,intensity:1.2,distance:4.2,visibleDist:30}),n.add(F(.4,.8,.9,1),e.wood,504,_+.4,5.3),o(503.75,504.3,4.8,5.8,_-.1,_+.85),n.add(Pt(.07,.06,.2,10,1),it("vase",{color:4872810}),504,_+.9,5.1);let ot=Fn([{t:"Bitte leise :)",font:'40px "Comic Sans MS"'}],.3,.12,{w:256,h:100,bg:"#e8e0c8",border:null});ot.position.set(502.08,_+1.5,6.85),ot.rotation.y=Math.PI/2,s.add(ot),t.tag="Elternschlafzimmer",a(497.5,497.6,4.4,9.7,_,On),a(497.5,501.95,4.4,4.5,_,On),a(497.5,501.95,9.6,9.7,_,On),d(497.62,_+1.5,7,1,1,Math.PI/2);for(let G of[6.35,7.65]){let dt=new X(F(.04,1.5,.45,1),it("curtainP",{color:3816008}));dt.position.set(497.68,_+1.5,G),s.add(dt)}n.add(F(2,.34,1.8,1),e.darkWood,498.7,_+.17,6.9),n.add(F(.08,.9,1.84,1),e.darkWood,497.66,_+.45,6.9),n.add(F(1.94,.16,1.74,1),it("mattressP",{color:12894388}),498.7,_+.42,6.9),n.add(F(.45,.12,.6,1),it("pillow",{}),497.95,_+.56,6.45),n.add(F(.45,.12,.6,1),it("pillow",{}),497.95,_+.56,7.35);let wt=new X(F(1.5,.1,1.76,1),it("duvetP",{color:5918276}));wt.position.set(498.95,_+.54,6.9),wt.castShadow=!0,s.add(wt);let N=new Qt,W=new X(new ss(.22,1.1,4,10),it("duvetP",{}));W.rotation.z=Math.PI/2,W.scale.set(1,1,.75),W.position.set(.15,.12,0),N.add(W);let U=new X(new ze(.11,10,8),it("dadSkin",{color:9268826}));U.position.set(-.68,.14,.05),N.add(U);let j=new X(new ze(.115,10,8,0,Math.PI*2,0,Math.PI*.55),it("dadHair",{color:2761760}));j.position.copy(U.position),j.rotation.z=Math.PI/2,N.add(j),N.position.set(498.6,_+.56,6.55),N.traverse(G=>{G.isMesh&&(G.castShadow=!0)}),s.add(N),o(497.6,499.7,6,7.8,_-.1,_+.65);for(let G of[5.7,8.1])n.add(F(.45,.5,.4,1),e.wood,497.85,_+.25,G);n.add(Pt(.08,.13,.16,12,1),it("lampShade",{}),497.85,_+.72,8.1);let Gt=t.addLamp({pos:[498.2,_+.9,8],color:16756848,intensity:4.5,distance:6,visibleDist:30,enabled:!1}),Ct=Mn(16756848,.6,0);Ct.position.set(497.85,_+.75,8.1),s.add(Ct),n.add(F(1.6,2.1,.6,1),e.wood,499.4,_+1.05,9.3),o(498.6,500.2,9,9.6,_-.1,_+2.2);let Xt=new Qt;for(let G of[0,.15]){let dt=new X(F(.1,.05,.26,1),it("slipper",{color:3816018}));dt.position.set(G,.025,0),Xt.add(dt)}Xt.position.set(499.9,_,6.7),Xt.rotation.y=.3,s.add(Xt);let le=f(.88,2.05);le.position.set(502,_,6.42),le.rotation.y=-Math.PI/2,s.add(le);let te=t.addBox(501.93,502.07,6.4,7.3,_-.1,_+2.2,{label:"Elternt\xFCr"}),lt={v:0,target:0};t.updaters.push(G=>{lt.v+=(lt.target-lt.v)*(1-Math.exp(-2.6*G)),le.rotation.y=-Math.PI/2-lt.v*1.45,te.enabled=lt.v<.15});let De=new X(new Jt(.85,.32),new $e({map:Fy(),transparent:!0,opacity:0,depthWrite:!1,blending:Ai}));De.rotation.x=-Math.PI/2,De.rotation.z=Math.PI/2,De.position.set(502.21,_+.008,6.85),s.add(De);let en=t.addLamp({pos:[502.3,_+.12,6.85],color:16755302,intensity:1.2,distance:2.2,visibleDist:30,enabled:!1}),Te=new X(new Jt(.3,.2),new $e({color:0,transparent:!0,opacity:.85,depthWrite:!1}));Te.rotation.x=-Math.PI/2,Te.position.set(502.12,_+.01,6.85),Te.visible=!1,s.add(Te),t.tag="Treppe";for(let G=0;G<St.n;G++){let dt=St.zBot-G*St.run,oe=dt-St.run,he=(G+1)*St.rise;n.add(F(St.x1-St.x0,.04,St.run+.03,1),x,(St.x0+St.x1)/2,he-.02,(oe+dt)/2),n.add(F(St.x1-St.x0,St.rise,.02,1),e.white,(St.x0+St.x1)/2,he-St.rise/2,dt-.01)}{let G=Math.hypot(St.zBot-St.zTop,He),dt=new X(F(.05,.3,G,1),e.white);dt.position.set(St.x0-.02,He/2+.05,(St.zTop+St.zBot)/2),dt.rotation.x=Math.atan2(He,St.zBot-St.zTop),s.add(dt)}t.tag="EG Au\xDFenw\xE4nde";let Fe=0,ye=_p;l(495.8,496,1.8,15.6,Fe,ye,[[8.4,10.4,2.2,.9]]),d(496.02,1.55,9.4,2,1.3,Math.PI/2),l(505.4,505.6,1.8,15.6,Fe,1.5),a(505.4,505.6,1.8,4.4,1.5,ye),c(495.8,505.6,1.8,2,Fe,ye,[[497.4,498.9,2.2,.9],[502.6,503.9,2.2,1.1]]),d(498.15,1.55,2.02,1.5,1.3,0),d(503.25,1.65,2.02,1.3,1.1,0),c(495.8,505.6,15.4,15.6,Fe,ye,[[497.4,499.4,2.2,.9],[503.1,504.1,2.1]]),d(498.4,1.55,15.38,2,1.3,Math.PI),t.addLamp({pos:[498.3,1.6,15],color:16754784,intensity:1.8,distance:5.5,visibleDist:30}),t.addLamp({pos:[496.4,1.6,9.4],color:16754784,intensity:2.2,distance:6,visibleDist:30}),t.addLamp({pos:[503.25,1.7,2.4],color:9347272,intensity:1.5,distance:4.5,visibleDist:30}),t.tag="K\xFCche",l(500.95,501.05,2,6,Fe,ye,[[3.4,4.4,2.1]]),c(500.95,505.4,5.95,6.05,Fe,ye,[[502.3,503.4,2.1]]),n.add(F(3.4,.9,.62,1),it("kCab",{color:9077878}),502.9,.45,2.31),o(501.05,504.65,2,2.65,-1,.95),n.add(F(3.42,.04,.64,1),it("kTop",{color:3814962}),502.9,.92,2.32),n.add(F(.5,.05,.38,1),e.metal,503.3,.93,2.3),n.add(F(.6,.02,.5,1),e.black,501.9,.95,2.3);for(let G of[501.75,502.05])for(let dt of[2.18,2.42])n.add(Pt(.08,.08,.005,14,1),e.darkMetal,G,.962,dt);n.add(F(1.6,.7,.35,1),it("kCab",{}),501.85,1.95,2.18),n.add(F(.9,.7,.35,1),it("kCab",{}),504.2,1.95,2.18),n.add(Pt(.07,.08,.2,12,1),e.metal,504.4,1.04,2.35);for(let G=0;G<4;G++){let dt=new X(new ze(.045,8,6),it("fruit"+G%2,{color:G%2?9054746:11569706}));dt.position.set(502.55+G%2*.07,.98+Math.floor(G/2)*.05,2.45+(G>>1)*.06),s.add(dt)}n.add(Pt(.12,.08,.06,14,1),it("bowl",{color:10130568}),502.6,.96,2.5),n.add(F(.66,1.85,.66,1),it("fridge",{color:13158080}),505.05,.925,3.15),o(504.7,505.4,2.8,3.5,-1,1.9);let un=new Qt,yn=new X(F(.05,1.82,.66,1),it("fridgeD",{color:13816010}));yn.position.set(0,.91,.33),un.add(yn),un.position.set(504.7,.02,2.82),s.add(un);let je=t.addLamp({pos:[504.4,1.2,3.15],color:14543103,intensity:5,distance:5,visibleDist:30,enabled:!1}),V={v:0,t:0};t.updaters.push(G=>{V.v+=(V.t-V.v)*(1-Math.exp(-4*G)),un.rotation.y=-V.v*1.6});let dn=Fn([{t:"Bin bis Sonntag",font:'30px "Comic Sans MS"'},{t:"bei Oma.",font:'30px "Comic Sans MS"'},{t:"Kuss, Mama",font:'26px "Comic Sans MS"'}],.16,.16,{w:200,h:200,bg:"#e6e0a8",border:null});dn.position.set(504.69,1.35,3),dn.rotation.y=-Math.PI/2,s.add(dn),n.add(F(.8,.04,.8,1),e.wood,502.9,.74,4.5);for(let[G,dt]of[[-.35,-.35],[.35,-.35],[-.35,.35],[.35,.35]])n.add(F(.04,.74,.04,1),e.wood,502.9+G,.37,4.5+dt);o(502.5,503.3,4.1,4.9,-1,.78);for(let G of[-.62,.62])n.add(F(.4,.04,.4,1),e.wood,502.9,.45,4.5+G),n.add(F(.4,.45,.04,1),e.wood,502.9,.7,4.5+G*1.32);let ve=new X(Pt(.14,.14,.03,20,1),it("clockF",{color:14736592}));ve.rotation.z=Math.PI/2,ve.position.set(501.07,2.1,5),s.add(ve);let ke=t.addLamp({pos:[503.2,2.6,4.1],color:16773336,intensity:6,distance:7,visibleDist:30,enabled:!1});n.add(Pt(.2,.25,.1,14,1),it("ceilLamp",{}),503.2,ye-.05,4.1);let bt=new Qt;for(let G=0;G<2;G++){let dt=new X(new Ke(.015,.004,.06),it("hkey",{color:11573840}));dt.position.set(G*.025,0,0),dt.rotation.y=G*.4,bt.add(dt)}let Oe=new X(new ti(.02,.004,4,10),it("hkey",{}));Oe.rotation.x=Math.PI/2,Oe.position.set(.01,0,-.04),bt.add(Oe);let Zt=new X(new Ke(.03,.01,.045),it("fobG",{color:2779706}));Zt.position.set(.04,.003,-.07),bt.add(Zt),bt.position.set(504.15,.95,2.45),s.add(bt),h.objects.homeKeys={group:bt,pos:new L(504.15,.96,2.45)},t.addRegionBox(501.05,505.4,2.65,5.95,{label:"K\xFCche",minY:-1,maxY:1.6}),t.tag="EG Flur",l(501.95,502.05,6,15.4,Fe,ye,[[11.6,13.2,2.1]]);for(let G of[11.6,13.2])n.add(F(.14,2.1,.06,1),e.white,502,1.05,G);l(St.x0-.05,St.x0+.05,St.zTop,St.zBot,Fe,ye,[[7.6,8.4,2]]),a(St.x0+.05,505.4,9.85,9.95,Fe,ye),a(St.x0+.05,505.4,St.zTop-.05,St.zTop+.05,Fe,ye);let qt=new Qt,P=it("closetDoor",{color:11051668});for(let G=0;G<16;G++){let dt=new X(F(.03,.06,.78,1),P);dt.position.set(0,.15+G*.115,.39),dt.rotation.z=.5,qt.add(dt)}for(let G of[.02,.76]){let dt=new X(F(.04,1.98,.04,1),P);dt.position.set(0,.99,G),qt.add(dt)}qt.position.set(St.x0-.02,0,7.6),qt.rotation.y=.35,s.add(qt),n.add(F(.4,.5,.35,1),it("box2",{color:6969920}),505.1,.25,9.55),n.add(F(.35,.3,.3,1),it("box2",{}),505.1,.65,9.55),n.add(Pt(.015,.015,1.3,6,1),e.wood,505.3,.65,7.5,0,0,.12),n.add(F(.9,.9,.38,1),e.white,504.85,.45,6.25),o(504.35,505.4,6,6.45,-1,.95);let T=new X(new Jt(.8,4.6),it("runner",{}));T.rotation.x=-Math.PI/2,T.position.set(503.15,.006,8.6),T.receiveShadow=!0,s.add(T),t.addRegionBox(502.05,St.x0+.05,5.95,11.8,{label:"EG Flur",minY:-1,maxY:1.6}),t.addRegionBox(502.3,503.4,5.3,6.7,{label:"K\xFCchent\xFCr",minY:-1,maxY:1.6}),t.addRegionBox(503.8,505.4,5.95,7.2,{label:"Nische",minY:-1,maxY:1.6}),t.tag="Diele",t.addRegionBox(502.05,505.4,11.2,15.4,{label:"Diele",minY:-1,maxY:1.6}),t.addRegionBox(501.3,502.8,11.65,13.15,{label:"Durchgang Wohnzimmer",minY:-1,maxY:1.6});let $=new Qt,pt=new X(F(1,2.1,.06,1),it("frontDoor",{color:4863014}));pt.position.set(.5,1.05,0),$.add(pt);let ht=new X(F(.14,.03,.08,1),e.metal);ht.position.set(.88,1.05,-.04),$.add(ht);let Mt=new X(new Ti(.012,8),ii(3351057));Mt.position.set(.5,1.55,-.035),Mt.rotation.y=Math.PI,$.add(Mt);let Et=new X(Pt(.006,.006,.22,4,1),e.metal);Et.rotation.z=Math.PI/2,Et.position.set(.86,1.45,-.05),$.add(Et),$.position.set(503.1,0,15.43),s.add($);let at=t.addBox(503.1,504.1,15.38,15.5,-1,2.2,{label:"Haust\xFCr"}),rt={v:0,t:0};t.updaters.push(G=>{rt.v+=(rt.t-rt.v)*(1-Math.exp(-1.8*G)),$.rotation.y=rt.v*1.25});let vt=new X(new Jt(3,3),new $e({map:bp(!0)}));vt.position.set(503.6,1.4,16.4),vt.rotation.y=Math.PI,s.add(vt);let O=t.addLamp({pos:[503.6,1.8,15.8],color:16756848,intensity:4,distance:6,visibleDist:30,enabled:!1});n.add(F(.35,.45,1,1),e.wood,505.2,.22,12.6),o(504.95,505.4,12.1,13.1,-1,.5);for(let G=0;G<4;G++)n.add(F(.12,.08,.28,1),it("shoe"+G%2,{color:G%2?2763306:6969930}),505.15-G%2*.05,.49,12.2+G*.24,0,.2*(G%2),0);for(let G=0;G<3;G++)n.add(F(.12,.8,.35,1),it("coat"+G,{color:[2764864,4864554,3815994][G]}),505.32,1.3,13.4+G*.4,0,0,-.03);o(505.15,505.4,13.2,14.4,-1,1.8),n.add(F(.04,.05,1.3,1),e.wood,505.37,1.78,13.8),n.add(F(.03,.18,.4,1),e.wood,505.37,1.45,14.85);let ct=new X(new Jt(.5,.9),new Ts({color:1711652,specular:6715272,shininess:90}));ct.position.set(502.07,1.4,14.2),ct.rotation.y=Math.PI/2,s.add(ct);let tt=new X(new Jt(.9,.55),it("doormat",{color:4865582}));tt.rotation.x=-Math.PI/2,tt.position.set(503.6,.006,14.95),s.add(tt),n.add(Pt(.1,.1,.5,10,1),e.darkMetal,502.3,.25,15.1),t.tag="Wohnzimmer",t.addRegionBox(496,501.95,5.5,15.4,{label:"Wohnzimmer",minY:-1,maxY:1.6}),t.addRegionBox(496,500.95,2,6.6,{label:"Essbereich",minY:-1,maxY:1.6}),t.addRegionBox(500.3,501.7,3.45,4.35,{label:"Durchgang K\xFCche",minY:-1,maxY:1.6});let gt=new X(new Jt(3.2,3.6),m);gt.rotation.x=-Math.PI/2,gt.position.set(499.6,.006,9.2),gt.receiveShadow=!0,s.add(gt),t.addSurface(498,501.2,7.4,11,"carpet",-.5,1.4);let xt=it("sofa",{color:3949648});n.add(F(.9,.42,2.3,1),xt,498.75,.21,9),n.add(F(.25,.85,2.3,1),xt,498.35,.43,9);for(let G of[7.78,10.22])n.add(F(.9,.6,.18,1),xt,498.75,.3,G);for(let G of[8.45,9.55])n.add(F(.62,.12,1,1),it("sofaC",{color:4607580}),498.95,.48,G);o(498.2,499.2,7.7,10.3,-1,.9),n.add(F(.6,.04,1.1,1),e.darkWood,500.25,.42,9);for(let[G,dt]of[[-.25,-.5],[.25,-.5],[-.25,.5],[.25,.5]])n.add(F(.04,.4,.04,1),e.darkWood,500.25+G,.2,9+dt);o(499.9,500.6,8.4,9.6,-1,.46),n.add(F(.45,.5,1.8,1),e.darkWood,501.7,.25,9),o(501.45,501.95,8.1,9.9,-1,.55),n.add(F(.06,.68,1.2,1),e.black,501.82,.92,9);let _t=new X(new ze(.008,6,4),ii(16722458));_t.position.set(501.78,.6,9.45),s.add(_t);let Vt=Mn(16722458,.12,.6);Vt.position.copy(_t.position),s.add(Vt),n.add(F(.8,.45,.8,1),xt,499.2,.22,12.9),n.add(F(.8,.8,.2,1),xt,499.2,.5,13.3),o(498.8,499.6,12.5,13.4,-1,.9),n.add(Pt(.015,.015,1.5,6,1),e.black,500.3,.75,13.6),n.add(Pt(.12,.2,.25,12,1),it("lampShade",{}),500.3,1.55,13.6),n.add(F(1.8,2,.35,1),e.wood,500.6,1,15.2),o(499.7,501.5,15,15.4,-1,2.1);for(let G=0;G<4;G++)for(let dt=0;dt<9;dt++)(dt*3+G)%4&&n.add(F(.08,.24,.2,1),it("book"+(dt+G)%5,{}),499.85+dt*.18,.32+G*.45,15.15);n.add(Pt(.14,.11,.3,10,1),it("pot",{}),496.4,.15,14.9);let re=new X(vp(.7,1),e.hedge);re.position.set(496.4,.3,14.9),s.add(re);for(let G of[8.2,10.6]){let dt=new X(F(.04,2,.5,1),it("curtainL",{color:5917242}));dt.position.set(496.06,1.4,G),s.add(dt)}n.add(F(1.6,.05,.9,1),e.wood,498.4,.75,4);for(let[G,dt]of[[-.7,-.38],[.7,-.38],[-.7,.38],[.7,.38]])n.add(F(.05,.75,.05,1),e.wood,498.4+G,.37,4+dt);o(497.6,499.2,3.55,4.45,-1,.8);for(let[G,dt,oe]of[[497.9,3.3,0],[498.9,3.3,0],[497.9,4.7,Math.PI],[498.9,4.7,Math.PI]])n.add(F(.42,.04,.42,1),e.wood,G,.46,dt),n.add(F(.42,.5,.04,1),e.wood,G,.72,dt+(oe?.2:-.2));n.add(F(.45,.85,1.6,1),e.darkWood,496.25,.42,4.8),o(496,496.5,4,5.6,-1,.9),t.tag="Vater";let mt=Gs({coat:5661294,pants:2830392,skin:9268826,hood:!1,height:1.84}),Wt=new X(new ze(.122,12,8,0,Math.PI*2,0,Math.PI*.5),it("dadHair",{}));Wt.position.set(0,.145,.01),mt.neck.add(Wt);let ne=new X(new ze(.108,10,8,0,Math.PI*2,Math.PI*.55,Math.PI*.3),it("stubble",{color:4864560}));ne.position.set(0,.13,-.004),mt.neck.add(ne),mt.root.visible=!1,s.add(mt.root);let It=t.addLamp({pos:[503.15,On-.3,6.9],color:16769720,intensity:7,distance:8,visibleDist:40,enabled:!1});n.add(Pt(.18,.22,.12,14,1),it("ceilLamp",{}),503.15,On-.06,6.9);let ue=(G,dt,oe,he,Kt,_e,fn)=>G.x>dt&&G.x<oe&&G.z>he&&G.z<Kt&&G.y>_e&&G.y<fn,Xe={dad:mt,lump:N,bedPos:[498.7,He,6.9],snorePos:new L(498.6,He+.6,6.6),doorPos:new L(502,He+1,6.85),feet:Te,feetZ:6.85,route:{bedside:[499.95,He,6.95],doorIn:[501.45,He,6.85],doorOut:[502.75,He,6.85],hall:[503.35,He,6.6],landing:[504.85,He,6.4],stairTop:[504.85,He,7.05],stairBot:[504.85,0,11.6],diele:[503.9,0,12.4],corrN:[503.15,0,8.9],kitchenDoor:[502.85,0,6.2],fridge:[504.2,0,3.15],lookLiving:[498.9,1,12],fridgeLook:[505.2,1.2,3.15],lookHall:[503.7,He+1.2,4.9],closet:[504.9,1,8.2]},hideZones:[{minX:496.6,maxX:498.25,minZ:7.5,maxZ:10.5,y:0,name:"hinter dem Sofa"},{minX:496,maxX:497.4,minZ:2,maxZ:3.4,y:0,name:"Ecke im Essbereich"},{minX:500,maxX:504,minZ:0,maxZ:3.5,y:He,name:"Leons Zimmer"}],closet:{door:new L(St.x0,.9,8),inside:[504.85,0,8],out:[503.55,0,8]},parentsDoor:{set(G,dt=!1){lt.target=G,dt||(lt.v=G)}},gapLight(G){De.material.opacity=G*.9,en.enabled=G>0},handle(){let G=le.userData.handle;G.rotation.z=-.5,setTimeout(()=>{G.rotation.z=0},450)},bedLamp(G){Gt.enabled=G,Ct.material.opacity=G?.6:0},hallLamp(G){It.enabled=G},kitchenLamp(G){ke.enabled=G},fridge(G){V.t=G?1:0,je.enabled=G},frontDoor:{set(G,dt=!1){rt.t=G,dt||(rt.v=G),at.enabled=G<.1,O.enabled=G>0},pos:new L(503.6,1.1,15.35),chainPos:new L(503.96,1.45,15.37)},isLit(G){return!!(It.enabled&&(ue(G,501.9,505.5,4.4,9.7,2.5,6)||ue(G,St.x0,St.x1,St.zTop,St.zBot+.8,-.5,6))||(ke.enabled||je.enabled)&&(ue(G,501,505.4,2,6.4,-.5,2.5)||ue(G,502,504.3,6,8,-.5,2.5))||Gt.enabled&&lt.v>.3&&ue(G,502,504.3,6,7.8,2.5,6))}};h.objects.home=Xe,h.objects.parentsDoor=Xe.snorePos,t.tag=""}var zr=(s,t)=>Math.atan2(-s,-t),pc=class{constructor(t){this.H=t,this.man=t.dad,this.reset()}reset(t="sleep"){let e=this.H;this.mode=t,this.alert=0,this.stage=0,this.sus=0,this.t=0,this.route=null,this.ri=0,this.pause=0,this.lookYaw=null,this.caught=!1,this.say=null,this.stepT=0,this._huh=!1,this._fridgeOpen=!1,this.snoreAt=0,this.onBack=null,this.man.root.visible=!1,this.pos=new L(...e.bedPos),this.yaw=Math.PI/2,e.lump.visible=t!=="off",e.parentsDoor.set(0),e.gapLight(0),e.feet.visible=!1,e.bedLamp(!1),e.hallLamp(!1),e.kitchenLamp(!1),e.fridge(!1),this.snoring=t==="sleep",h.audio.ready&&(t==="off"?h.audio.stopLoop("snore",.2):(h.audio.loops.snore||h.audio.snore(e.snorePos),h.audio.setLoop("snore",.7,.3)))}hear(t,e,n){if(this.mode==="off"||h.dev&&h.dev.ignore)return;if(this.mode!=="sleep"){t>.15&&this.man.root.visible&&this.pos.distanceTo(e)<7&&(this.lookYaw=zr(e.x-this.pos.x,e.z-this.pos.z),this.pause=Math.max(this.pause,1.2),this.sus=Math.min(.9,this.sus+t*.6));return}let i=this.H.bedPos,r=Math.hypot(e.x-i[0],e.z-i[2]),o=(Math.abs(e.y-i[1])>1.5?.3:1)/(1+(r/3.2)**2);this.alert=Math.min(1.3,this.alert+t*o*2.4)}wakeAndPatrol(){if(this.mode==="off")return;let t=this.H.route;this.mode="patrol",this.alert=1,this.route=[{p:t.bedside},{p:t.doorIn,door:1},{p:t.hall,lamp:"hall"},{p:t.landing},{p:t.stairTop},{p:t.stairBot},{p:t.diele,pause:1.3,look:t.lookLiving,say:"Leon \u2026?"},{p:t.corrN},{p:t.kitchenDoor,lamp:"kitchen"},{p:t.fridge,pause:4.2,fridge:!0,look:t.fridgeLook},{p:t.kitchenDoor,lampOff:"kitchen"},{p:t.corrN,closet:!0},{p:t.diele,pause:2,look:t.lookLiving,say:"Bist du wach?"},{p:t.stairBot},{p:t.stairTop},{p:t.landing},{p:t.hall,lampOff:"hall"},{p:t.doorIn,door:0},{p:t.bedside,end:!0}],this.ri=0,this.beginWalk()}beginWalk(){let t=this.H;this.snoring=!1,h.audio.setLoop("snore",0,.2),h.audio.creak(new L(...t.bedPos),1,.9),t.lump.visible=!1,t.bedLamp(!0),this.man.root.visible=!0,this.pos.set(...this.route[0].p),this.man.stand()}check(){let t=this.H.route;this.mode="check",this.route=[{p:t.bedside},{p:t.doorIn,door:1},{p:t.doorOut,pause:3.6,look:t.lookHall,say:"Leon? Bist du das?"},{p:t.doorIn,door:0},{p:t.bedside,end:!0}],this.ri=0,this.beginWalk()}backToBed(){let t=this.H;if(this.mode="sleep",this.route=null,this.man.root.visible=!1,t.lump.visible=!0,t.bedLamp(!1),t.gapLight(0),t.feet.visible=!1,this.alert=.3,this.stage=1,this.sus=0,this.snoreAt=h.time+9,h.audio.creak(new L(...t.bedPos),.7,.8),this.onBack){let e=this.onBack;this.onBack=null,e()}}update(t){if(this.mode==="off")return;let e=this.H,n=h.audio;if(this.t+=t,this.mode==="sleep"){this.alert=Math.max(0,this.alert-t*(this.alert>.6?.035:.06));let i=this.alert>=1?4:this.alert>.72?3:this.alert>.5?2:this.alert>.25?1:0;i!==this.stage&&this.enterStage(i,this.stage),this.stage=i,this.stage===0&&!this.snoring&&h.time>(this.snoreAt||0)&&(this.snoring=!0,n.setLoop("snore",.7,2)),this.stage>=3&&(e.feet.visible=!0,e.feet.position.z=e.feetZ+Math.sin(h.time*.9)*.25);return}this.walk(t),this.spot(t)}enterStage(t,e){let n=this.H,i=h.audio;t>e?(t>=1&&this.snoring&&(this.snoring=!1,i.setLoop("snore",0,.15)),t===2&&(i.creak(new L(...n.bedPos),.9,1.1),this.mumble("Mmh \u2026?")),t===3&&(n.bedLamp(!0),n.gapLight(1),i.heavyStep(new L(...n.bedPos),.45),i.creak(n.doorPos,.4,.6)),t===4&&(n.handle(),i.burst({pos:n.doorPos,f:2400,q:5,d:.08,peak:.35}),this.check()),h.story&&h.story.onDadStage&&h.story.onDadStage(t)):(t<=2&&(n.gapLight(0),n.feet.visible=!1,n.bedLamp(!1)),t===0&&(this.snoreAt=h.time+5))}mumble(t){h.ui.say(t,2.2,"Papa (ged\xE4mpft)")}walk(t){let e=this.H,n=this.man;if(!this.route)return;let i=this.route[this.ri];if(this.pause>0){this.pause-=t,n.stand(),this.lookYaw!==null&&(this.yaw+=qi(this.yaw,this.lookYaw)*(1-Math.exp(-3*t))),this.apply();return}let r=new L(...i.p),a=r.x-this.pos.x,o=r.z-this.pos.z,l=Math.hypot(a,o),c=1.25;if(l>.08){let f=Math.min(1,c*t/l);this.pos.x+=a*f,this.pos.z+=o*f,this.yaw+=qi(this.yaw,zr(a,o))*(1-Math.exp(-6*t)),n.walk(t,c),this.stepT=(this.stepT||0)-t,this.stepT<0&&(this.stepT=.55,h.audio.footstep(this.pos.y>1.5&&this.pos.z>7.2&&this.pos.z<11.2?"stairs":"woodfloor",.75,this.pos.clone().add(new L(0,.05,0))))}else{if(i.door!==void 0&&e.parentsDoor.set(i.door,!0),i.lamp==="hall"&&e.hallLamp(!0),i.lamp==="kitchen"&&e.kitchenLamp(!0),i.lampOff==="hall"&&e.hallLamp(!1),i.lampOff==="kitchen"&&e.kitchenLamp(!1),i.fridge?(e.fridge(!0),this._fridgeOpen=!0):this._fridgeOpen&&(e.fridge(!1),this._fridgeOpen=!1),i.say&&this.mumble(i.say),this.lookYaw=i.look?zr(i.look[0]-this.pos.x,i.look[2]-this.pos.z):null,this.pause=i.pause||(i.door!==void 0?1.1:0),i.closet&&h.player.hidden){let f=e.route.closet;this.lookYaw=zr(f[0]-this.pos.x,f[2]-this.pos.z),this.pause=2.6,h.audio.heartbeat(!0,2.6),h.story&&h.story.mark("Papa vor der Kammer")}if(i.end){this.backToBed();return}this.ri=Math.min(this.route.length-1,this.ri+1),i.fridge&&h.audio.burst({pos:this.pos,f:300,q:1,d:.3,peak:.3})}let u=h.world.groundAt(this.pos.x,this.pos.z,this.pos.y+.4,.5);isFinite(u)&&(this.pos.y=Un(this.pos.y,u,18,t)),this.apply()}apply(){this.man.root.position.copy(this.pos),this.man.root.rotation.y=this.yaw,this.lookYaw!==null&&this.pause>0?this.man.neck.rotation.y=Ce(qi(this.yaw,this.lookYaw),-.7,.7):this.man.neck.rotation.y=0}spot(t){if(this.caught||h.dev&&h.dev.ignore){this.sus=0;return}let e=h.player;if(e.hidden){this.sus=Math.max(0,this.sus-t);return}let n=new L(this.pos.x,this.pos.y+1.66,this.pos.z),i=h.camera.position,r=i.x-n.x,a=i.z-n.z,o=Math.hypot(r,a);if(Math.abs(i.y-n.y)>2.6){this.sus=Math.max(0,this.sus-t*.5);return}let l=this.H.isLit(e.p)||e.flashOn,c=e.flashOn?14:l?9:5.2,u=0;if(o<c&&(Math.abs(qi(this.yaw+this.man.neck.rotation.y,zr(r,a)))<1||o<1.4)&&!h.world.segmentBlocked(n.x,n.z,i.x,i.z,(n.y+i.y)/2-this.pos.y+this.pos.y)){let p=this.H.hideZones.find(x=>e.p.x>x.minX&&e.p.x<x.maxX&&e.p.z>x.minZ&&e.p.z<x.maxZ&&Math.abs(e.p.y-x.y)<1),m=e.stance!=="stand";p&&m&&o>1.8?u=0:u=(1-o/c)*(m?1.1:2)*(e.flashOn?2:1)+(o<2.5?1.5:0)}u>0?(this.sus+=t*u*1.25,this.sus>.35&&!this._huh&&(this._huh=!0,this.mumble("Hm?"),this.pause=Math.max(this.pause,.9),this.lookYaw=zr(r,a))):(this.sus=Math.max(0,this.sus-t*.6),this.sus<.1&&(this._huh=!1)),(this.sus>=1||o<1)&&(this.caught=!0,h.story&&h.story.caughtByDad&&h.story.caughtByDad(this))}get visible(){return this.man.root.visible}};var vi=class extends Error{},ci=[{id:0,name:"Prolog",sub:"Der Keller"},{id:1,name:"01:43",sub:"Zuhause"},{id:2,name:"01:52",sub:"Wendelsweg"},{id:3,name:"02:08",sub:"H\xFCgelschneise"},{id:4,name:"02:17",sub:"Abseits"},{id:5,name:"02:39",sub:"Die H\xFCtte"},{id:6,name:"03:14",sub:"Flucht"},{id:7,name:"03:24",sub:"Kleing\xE4rten"},{id:8,name:"03:31",sub:"Zuhause"}],Sp={1:[["start","Zimmer"],["og","Obergeschoss"],["eg","Erdgeschoss"]],6:[["start","Schacht-Ausgang"],["tor","Am Tor"]]},Vs=(s,t)=>Math.atan2(-s,-t),se=(s,t,e)=>new L(s,t,e),mc=class{constructor(){this.token=0,this.waiters=[],this.chapter=-1,this.ups=[],this.chase=null,this.resolved=0}_w(t){let e=this.token;return new Promise((n,i)=>this.waiters.push({fn:t,res:n,rej:i,tok:e}))}wait(t){let e=h.time+t;return this._w(()=>h.time>=e)}until(t){return this._w(t)}reach(t,e,n=3){return this._w(()=>Math.hypot(h.player.p.x-t,h.player.p.z-e)<n)}use(t){return this._w(()=>t.used)}async say(t,e=3.4,n=null){h.ui.say(t,e,n,!n),await this.wait(e*.92)}obj(t){h.ui.objective(t)}after(t,e){let n=this.token;return $h(t,()=>{n===this.token&&e()})}look(t,e=4,n=1.2){return h.player.lookTarget={pos:t.clone?t.clone():se(...t),speed:e},this.after(n,()=>{h.player.lookTarget=null}),this.wait(n)}async fade(t,e){let n=this.token;if(await h.ui.fade(t,e),n!==this.token)throw new vi}async card(t,e,n){let i=this.token;if(await h.ui.card(t,e,n),i!==this.token)throw new vi}async narr(t,e){let n=this.token;if(await h.ui.narration(t,e),n!==this.token)throw new vi}sayLines(t,e=3.3){(async()=>{for(let n of t)h.ui.say(n,3.4),await this.wait(e)})().catch(()=>{})}mark(t){h.dev&&h.dev.mark(t)}msg(t,e={}){h.ui.addMsg("them",t),h.phone.dropped||(h.phone.charging?h.audio.vibrate(h.objects.chargingPhone.mesh.position):h.audio.vibrate(),!h.phoneOpen&&!e.silent&&h.ui.notify("Deniz",t),h.phoneOpen&&h.audio.ding())}async reply(t){return h.phoneOpen||h.ui.hint(`<b>${on("phone")}</b> Handy \xF6ffnen &nbsp; <b>${on("reply1")}</b>/<b>${on("reply2")}</b> antworten`,6),await this.raceAbort(h.ui.setReply(t))}raceAbort(t){let e=this.token;return Promise.race([t,this._w(()=>!1)]).then(n=>{if(e!==this.token)throw new vi;return n})}setClock(t){let[e,n]=t.split(":").map(Number);h.phone.clockBase=e*60+n,h.phone.clockAcc=0,this.updateClock()}updateClock(){let t=h.phone.clockBase+Math.floor(h.phone.clockAcc/40),e=String(Math.floor(t/60)%24).padStart(2,"0")+":"+String(t%60).padStart(2,"0");e!==h.phone.time&&h.ui.setTime(e)}addUp(t){let e=this.token;this.ups.push({fn:t,tok:e})}interact(t){return h.world.addInteract(t)}update(t){let e=0;for(let i=this.waiters.length-1;i>=0;i--){let r=this.waiters[i];if(r.tok!==this.token){this.waiters.splice(i,1),r.rej(new vi),e++;continue}let a=!1;try{a=r.fn()}catch{a=!1}a&&(this.waiters.splice(i,1),r.res(),e++)}this.resolved+=e,this.ups=this.ups.filter(i=>i.tok===this.token);for(let i of this.ups)i.fn(t);h.noise&&h.noise.update(t),this.dad&&this.dad.update(t);let n=h.phone;return n.charging?n.battery=Math.min(100,n.battery+t/3.2):h.flags.hasPhone&&!n.dropped&&(n.battery=Math.max(n.minBattery||0,n.battery-t/(h.player.flashOn?10:70))),n.clockAcc=(n.clockAcc||0)+t,this.updateClock(),Math.floor(h.time*2)!==this._lastRefresh&&(this._lastRefresh=Math.floor(h.time*2),h.ui.refreshStatus()),this.chase&&this.updateChase(t),e}async run(t,e=!0,n=null,i=!1){if(e&&!h.replaying&&!this.directRun){h.pendingRun=[t,e,n,i];return}e&&h.dev&&!h.replaying&&h.dev.beginSegment(t,n),this.token++;for(let a of this.waiters)a.rej(new vi);this.waiters=[],this.ups=[],i||(this.chase=null);for(let a of Object.keys(this))a.startsWith("_")&&a!=="_lastRefresh"&&delete this[a];h.world.interacts=h.world.interacts.filter(a=>!a.story),this.chapter=t,!h.replaying&&!(h.dev&&h.dev.everOn)&&ff(t),h.ui.say(null),h.ui.prompt(null),h.ui.hint(null),h.ui.hideNotif(),this.mark(ci[t].name+" "+ci[t].sub+(n&&n!=="start"?" \xB7 "+n.toUpperCase():"")),e&&await this.setup(t,n);let r=this["ch"+t];try{await r.call(this,e,n)}catch(a){a instanceof vi||console.error(a)}}async setup(t,e=null){let n=h.objects,i=h.player,r=h.audio,a=n.home;h.ui.togglePhone(!1),h.ui.closeNote(),h.ui.reply=null,h.flags={},i.canMove=!0,i.canLook=!0,i.canSprint=!0,i.canInteract=!0,i.scripted=!1,i.hidden=!1,i.forceStance=null,i.stance="stand",i.extraPitch=0,i.extraRoll=0,i.eyeOffset=0,i.speedMul=1,i.stamina=1,i.exhausted=0,i.onStep=null,i.lookTarget=null,document.getElementById("slats").classList.remove("show"),h.inv=new Set,t>=2&&["phone","jacket","homeKeys"].forEach(u=>h.inv.add(u)),t===1&&e&&e!=="start"&&["phone","jacket"].forEach(u=>h.inv.add(u)),t>=6&&["torKey","screwdriver"].forEach(u=>h.inv.add(u)),h.flags.hasPhone=t>=2||t===0||t===1&&e&&e!=="start";let o=[12,31,30,26,19,3,15,13,12][t];Object.assign(h.phone,{battery:o,charging:!1,network:![4,5].includes(t),dropped:!1,mapUnlocked:t>=6,minBattery:t<=5?2:1}),h.chat=By(t,e),h.ui.phoneTab="chat",this.setClock(t===1&&e==="eg"?"01:51":t===1&&e==="og"?"01:48":["03:12","01:43","01:52","02:08","02:17","02:39","03:14","03:24","03:31"][t]),h.ui.clockShow(h.flags.hasPhone),n.pile.reset(),t>=4&&n.pile.clear(!0),n.hutDoor.set(!1),n.hatch.set(t===5),n.fan.reset(t<=5),n.tube.set(!0),n.drawer.set(!1),n.drawer.screwdriver.visible=!0,n.fuseState=[!0,t<=5,!0];for(let u=0;u<3;u++)n.fuse.setVisual(u,n.fuseState[u]);n.gate.reset();for(let u of h.world.regions)["bank","stream","alley","gardens"].includes(u.id)&&(u.enabled=t>=7);n.man.show(!1),n.silhouette.root.visible=!1,n.deniz.root.visible=t===8,n.groundPhone.hide(),n.chargingPhone.mesh.visible=!1,n.flood.off(),n.keys.torKey.visible=t<6,n.homePhone.group.visible=t===1&&(!e||e==="start"),n.homePhone.light(!1),n.jacket.group.visible=t===1&&(!e||e==="start"),n.homeKeys.group.visible=t===1,n.beanie.visible=t<=5,n.ventTop.grate.position.x=n.ventTop.pos.x,n.ventTop.grate.rotation.z=0,this.resetBranch(t>=7),n.fogPuffs.enabled=!0,a.frontDoor.set(0);for(let u of["humIn","humOut","tube","snore","stream","traffic","fridge"])r.stopLoop(u,.3);if(r.heartbeat(!1),(t===0||t===5)&&(r.hum("humIn",n.fan.pos,1),r.hum("humOut",n.ventTop.pos,.7,!0),r.tubeBuzz(n.tube.pos)),t>=6&&r.stream(new L(Dt.streamX,-.3,Dt.gateZ)),(t===2||t===8)&&r.traffic(!0),this.dad||(this.dad=new pc(a)),h.noise.reset(),t===1){this.dad.reset("sleep"),h.noise.listen((f,d,p)=>this.dad.hear(f,d,p));let u=fs.stairs;for(let[f,d,p]of[[502.6,6.85,.45],[503.55,7.75,.4],[502.95,5.5,.35],[503.6,14.55,.4]])h.noise.addCreak(f,d,p,d>10?0:3,1);for(let f of[11,7,3]){let d=u.zBot-(f+.5)*u.run;h.noise.addCreak(504.85,d,.32,(f+1)*u.rise,1.2)}r.loop("fridge",f=>{let d=r.osc("sawtooth",50),p=r.filter("lowpass",160,.7);d.connect(p),p.connect(f);let m=r.panner(se(505,1,3.2),1.2,1.6);return f.connect(m),m.connect(r.amb),d.start(),[d]},.07)}else this.dad.reset("off");let l={0:[...hn.coldOpen,0,.35],1:e==="eg"?[...fs.egSpawn,Vs(-.4,1),0]:e==="og"?[...fs.ogSpawn,Vs(0,1),-.05]:[...fs.spawn,Vs(.5,-1),-.1],2:[...Dt.homeSpawn,-Math.PI/2,0],3:[0,0,-31,Math.PI,0],4:[-9.5,0,55.5,Vs(-.7,.6),0],5:[-67.5,0,133.2,Vs(.6,.8),0],6:[...hn.ventExit,0,0],7:[-85.5,0,Dt.gateZ,-Math.PI/2*-1+Math.PI,0],8:[1.2,0,-110,0,0]}[t],c=l[1];t>=2&&t!==8&&t!==0&&(c=h.world.groundAt(l[0],l[2],50)),(t===8||t===2)&&(c=h.world.groundAt(l[0],l[2],5)),i.teleport(l[0],c,l[2],l[3],l[4]),i.setFlash(!1),i.flashOn=[3,4,5].includes(t)||t===6,t===7&&(i.yaw=Math.PI/2),h.ui.objective(null),h.ui.crosshair(!0)}unstuck(){let t=h.player;t.canMove=!0,t.scripted=!1,t.lookTarget=null,t.forceStance=null,t.hidden&&this.unhide();let e=(t.trail||[]).slice(-12),n=e.length>6?e[0]:null;if(!n){let r=h.world.regions.find(a=>a.enabled&&a.type==="box"&&t.p.x>a.minX-30&&t.p.x<a.maxX+30&&t.p.z>a.minZ-30&&t.p.z<a.maxZ+30);n=r?se((r.minX+r.maxX)/2,t.p.y,(r.minZ+r.maxZ)/2):t.p.clone()}let i=h.world.groundAt(n.x,n.z,t.p.y+2);t.teleport(n.x,isFinite(i)?i:t.p.y,n.z,t.yaw,0)}resetBranch(t){let e=h.objects.branch.group,[n,i]=h.branchTree,r=h.terrain.height(n-2.4,i);t?(e.position.set(n-.3,r+.25,i),e.rotation.set(0,0,Math.PI/2)):(e.position.set(n-.3,r+6.4,i),e.rotation.set(0,0,1.78)),this.branchCol?this.branchCol.enabled=t:this.branchCol=h.world.addOBB(n-2.6,i,2.3,.35,0,-50,r+.5,{enabled:t,label:"Umgest\xFCrzter Ast"})}async transition(t,e){h.player.canMove=!1,await this.fade(1,1.2),e&&await this.card("",e,2.4),this.run(t,!0)}hide(){let t=h.player,e=h.objects.home.closet;t.hidden||(t.hidden=!0,t.scripted=!0,t.forceStance="crouch",t.stance="crouch",h.audio.creak(e.door,.5,.6),t.teleport(e.inside[0],e.inside[1],e.inside[2],Math.PI/2,-.05),t.setFlash(!1),document.getElementById("slats").classList.add("show"),h.ui.hint(`<b>${on("use")}</b> rauskommen`,4))}unhide(){let t=h.player,e=h.objects.home.closet;t.hidden&&(t.hidden=!1,t.scripted=!1,t.forceStance=null,h.audio.creak(e.door,.6,.5),h.noise&&h.noise.add(.08,se(...e.out),"T\xFCr"),t.teleport(e.out[0],e.out[1],e.out[2],Math.PI/2,0),document.getElementById("slats").classList.remove("show"))}async ch0(){let t=h.objects,e=h.player,n=h.audio;h.ui.fade(0,2.2),e.canMove=!1,await this.wait(1.6),this.mark("Luke knallt zu"),n.slam(t.hatch.pos,1.3),e.shake(.8,.5),h.post.scare(.4),await this.wait(.5),n.bolt(t.hatch.pos),await this.wait(.7),n.drag(t.hatch.pos,1.8),e.canMove=!0,await this.say("Nein. Nein, nein, nein \u2026",2.6),this.obj("Raus hier."),this.interact({story:!0,pos:[-63.25,-.2,139],radius:.7,range:3.2,text:"Luke aufdr\xFCcken",once:!1,onUse:()=>{n.burst({pos:t.hatch.pos,type:"lowpass",f:300,d:.2,peak:.6}),n.creak(t.hatch.pos,.6,.4),h.ui.say("Sie geht nicht auf. Er hat was draufgestellt.",3,null,!0),this._triedHatch=!0}}),this.addUp(r=>{this._stepT=(this._stepT||2)-r,this._stepT<0&&(this._stepT=.9+Zn()*.6,n.heavyStep(se(-62+Math.sin(h.time*.7)*1.5,.4,140+Math.cos(h.time*.5)),.9))});let i=h.time;await this.until(()=>this._triedHatch||h.time-i>16),await this.wait(1.5),this.mark("Licht aus, Schrei"),t.tube.set(!1),n.burst({type:"highpass",f:2e3,d:.05,peak:.4,pos:t.tube.pos}),n.stopLoop("humIn",3),n.stopLoop("tube",.1),e.canMove=!1,await this.wait(2.2),n.scream(se(-62,.6,140),"distant",.9),await this.wait(2.6),await this.fade(1,.05),n.stopLoop("humOut",.2),await this.wait(1.2),await this.card("","Drei Stunden vorher.",2.6),await this.narr(["Ich hei\xDFe Leon. Das ist letztes Jahr passiert, in der Halloween-Nacht.","Wir wohnen in Sachsenhausen, zehn Minuten vom Stadtwald.","Mein bester Freund Deniz hatte in der Nacht Stress zuhause und wollte bei mir pennen.","Wir wollten nur kurz zum Goetheturm. Eine Mutprobe.","Ich erz\xE4hl das, weil ich bis heute nicht wei\xDF, wer mir in dieser Nacht geschrieben hat."]),this.run(1,!0)}async ch1(t,e){let n=h.objects,i=h.player,r=h.audio,a=n.home,o=this.dad;if(h.noise.listening=!0,this._cp=e||"start",this._cp==="start"){h.ui.clockShow(!1),h.ui.fade(0,2.5),h.ui.card("01:43","Sachsenhausen",3),await this.wait(1.5);let x=!0;this.addUp(E=>{x&&(this._bz=(this._bz??.2)-E,this._bz<0&&(this._bz=3.2,r.vibrate(n.homePhone.pos),n.homePhone.light(!0),this.after(2.6,()=>x&&n.homePhone.light(!1))))}),await this.say("\u2026Wer schreibt mir um die Uhrzeit?",3),this.obj("Geh an dein Handy");let g=this.interact({story:!0,pos:n.homePhone.pos,radius:.15,text:"Handy nehmen",onUse:()=>{r.pickup(),n.homePhone.group.visible=!1,x=!1,h.inv.add("phone"),h.flags.hasPhone=!0,h.ui.clockShow(!0)}});await this.use(g),this.mark("Handy genommen"),h.ui.hint(`<b>${on("phone")}</b> Handy &nbsp;&nbsp; <b>${on("flash")}</b> Taschenlampe`,7),h.ui.addMsg("them","bist du noch wach","01:41"),h.ui.togglePhone(!0),await this.wait(1.4),this.msg("hab stress mit meinem vater"),await this.wait(1.6),this.msg("kann ich heute bei dir schlafen?"),await this.say("Deniz. Schon wieder Stress mit seinem Vater.",3.2);let y=await this.reply(["klar, komm vorbei","was ist passiert?"]);await this.wait(1.4),y===1&&(this.msg("erz\xE4hl ich dir gleich"),await this.wait(1.2),this.msg("geht das klar?"),y=await this.reply(["ja klar, komm"]),await this.wait(1.2)),this.msg("danke"),await this.wait(2.2),this.msg("bin eh grad am goetheturm"),await this.wait(1.6),this.msg("komm kurz hin, ist halloween. wir drehen ne runde durch den wald"),await this.wait(1.6),this.msg("aber ohne maps, nur mit taschenlampe"),await this.say("Er ist schon unterwegs. Nat\xFCrlich ist er das.",3.2),await this.reply(["ok, bin in 10 min da","es ist 2 uhr nachts \u2026 ok, ich komm"]),await this.wait(1.3),this.msg("bis gleich"),await this.wait(1.5),h.ui.togglePhone(!1),this.obj("Zieh deine Jacke an");let b=this.interact({story:!0,pos:n.jacket.pos,radius:.3,text:"Jacke anziehen",onUse:()=>{r.zip(),n.jacket.group.visible=!1,h.inv.add("jacket")}});await this.use(b),this.mark("Jacke an"),this._cp="og",await this.say("Okay. Leise jetzt. Papa schl\xE4ft.",3)}else h.ui.fade(0,1.4),h.ui.card(e==="eg"?"01:51":"01:48",e==="eg"?"Erdgeschoss":"Zuhause",2.2),await this.wait(.8);this._cp==="og"&&(this.obj("Schleich dich runter"),h.ui.hint(`<b>${on("crouch")}</b> ducken = leiser &nbsp;&nbsp; nicht rennen`,7),this.addUp(()=>{!this._creakSaid&&h.noise.lastCreak&&h.time-h.noise.lastCreak<.1&&i.p.y>1&&(this._creakSaid=!0,h.ui.say("Die Dielen \u2026 Ducken, leiser gehen.",3))}),this.onDadStage=x=>{x===1&&!this._s1&&(this._s1=!0,h.ui.say("\u2026Er schnarcht nicht mehr.",2.6)),x===3&&!this._s3&&(this._s3=!0,h.ui.say("Licht. Er ist wach. Weg von der T\xFCr!",3)),x===4&&(this.mark("Papa schaut in den Flur"),this.obj("Versteck dich! In dein Zimmer oder runter"),o.onBack=()=>{h.ui.say("\u2026Puh.",2),this.obj("Schleich dich runter")})},await this.until(()=>i.p.y<.5&&i.p.z>11.3&&o.mode==="sleep"),this.mark("Unten angekommen"),this._cp="eg"),this.onDadStage=null,await this.say("Unten. Jetzt raus, bevor er was merkt.",3),this.obj("Geh zur Haust\xFCr");let l=this.interact({story:!0,pos:a.closet.door,radius:.5,range:2.2,once:!1,text:()=>i.hidden?"Rauskommen":"In der Abstellkammer verstecken",onUse:()=>i.hidden?this.unhide():this.hide()});this.interact({story:!0,pos:se(504.69,1.35,3),radius:.15,range:2.2,text:"Zettel lesen",onUse:()=>h.ui.say("\u201EBin bis Sonntag bei Oma. Kuss, Mama.\u201C",3.2)});let c=!1,u=!1,f=!1;this.interact({story:!0,pos:a.frontDoor.pos,radius:.45,once:!1,text:"T\xFCr \xF6ffnen",enabled:()=>!u,onUse:()=>{r.burst({pos:a.frontDoor.pos,f:600,q:2,d:.1,peak:.3}),h.ui.say("Abgeschlossen. Mein Schl\xFCssel \u2026 der liegt noch in der K\xFCche.",3.4),this.obj("Hol deinen Schl\xFCssel aus der K\xFCche")}});let d=this.interact({story:!0,pos:n.homeKeys.pos,radius:.12,range:2,text:"Schl\xFCssel nehmen",onUse:()=>{r.keys(n.homeKeys.pos),r.keys(n.homeKeys.pos),n.homeKeys.group.visible=!1,h.inv.add("homeKeys"),u=!0,h.noise.add(.6,n.homeKeys.pos,"Schl\xFCssel")}});await this.use(d),this.mark("Schl\xFCssel klirren"),await this.wait(1.2),o.alert=.4,r.setLoop("snore",0,.12),o.snoring=!1,await this.say("\u2026Schei\xDFe. Viel zu laut.",2.4),await this.wait(1.4),r.creak(se(...a.bedPos),1.2,1.1),await this.wait(1.1),r.heavyStep(se(500.5,3.2,6.9),.8),await this.until(()=>o.mode==="sleep"),this.mark("Papa steht auf"),o.wakeAndPatrol(),o.onBack=()=>{f=!0},r.heartbeat(!0,1.3),await this.say("Er kommt runter. Versteck dich!",2.6),this.obj("Versteck dich!"),h.ui.hint("Abstellkammer unter der Treppe &nbsp;\xB7&nbsp; geduckt hinter dem Sofa &nbsp;\xB7&nbsp; Licht aus",8),await this.until(()=>f),r.heartbeat(!1),this.mark("Papa wieder oben"),await this.wait(2.5),await this.say("\u2026Er ist wieder oben.",2.4),await this.wait(3),i.hidden&&h.ui.hint(`<b>${on("use")}</b> rauskommen`,4),this.obj("Raus. Leise.");let p=this.interact({story:!0,pos:a.frontDoor.chainPos,radius:.25,range:2.2,hold:1.1,text:"Kette l\xF6sen",enabled:()=>!c,onHold:x=>{Zn()<x*3&&r.burst({pos:a.frontDoor.chainPos,f:4200,q:6,d:.04,peak:.12})}}),m=this.interact({story:!0,pos:a.frontDoor.pos,radius:.45,range:2.3,hold:1.8,text:"T\xFCr leise aufschlie\xDFen",enabled:()=>c,onHold:x=>{Zn()<x*4&&r.keys(a.frontDoor.pos)}});await this.use(p),c=!0,r.burst({pos:a.frontDoor.chainPos,f:3600,q:5,d:.12,peak:.25}),await this.use(m),this.mark("Haust\xFCr auf"),i.scripted=!0,h.flags.lockFlash=!0,r.bolt(a.frontDoor.pos),await this.wait(.5),i.lookTarget={pos:se(503.6,1.5,16.5),speed:3},a.frontDoor.set(1,!0),r.doorCreak(a.frontDoor.pos),r.setLoop("wind",.5,1.2),r.traffic(!0),await this.wait(1.6),await this.fade(1,1),r.stopLoop("fridge",.3),this.run(2,!0)}caughtByDad(t){if(this._dying)return;let e=h.player,n=h.audio,i=h.objects.home;if(h.dev&&h.dev.god){n.sting("hard"),h.post.scare(.7),e.shake(.8,.4),h.ui.say("LEON?! \u2026 (Godmode: nicht erwischt)",2.2,"Papa"),t.sus=0,this.after(2.5,()=>{t.caught=!1});return}this._dying=!0,e.canMove=!1,e.scripted=!0,this.mark("Von Papa erwischt");let r=se(t.pos.x,t.pos.y+1.62,t.pos.z);e.lookTarget={pos:r,speed:10},t.pause=99,t.lookYaw=Vs(e.p.x-t.pos.x,e.p.z-t.pos.z),t.yaw=t.lookYaw;let a=se(e.p.x-t.pos.x,0,e.p.z-t.pos.z),o=a.length();o>.8&&t.pos.addScaledVector(a.normalize(),o-.75),t.apply(),t.pos.y>1.5?i.hallLamp(!0):i.kitchenLamp(!0),n.sting("hard"),h.post.scare(1),e.shake(1.3,.6),h.ui.say("LEON! WAS MACHST DU DA?!",2.4,"Papa"),this.after(1.7,()=>h.ui.death(!0,"PAPA HAT DICH ERWISCHT.","Checkpoint wird geladen \u2026")),this.after(4.4,()=>{h.ui.death(!1),this._dying=!1,this.run(1,!0,this._cp==="start"?"og":this._cp)})}async ch2(){let t=h.objects,e=h.audio,n=h.player;h.ui.fade(0,1.6),e.slam(se(Dt.homeSpawn[0]-1.2,1,Dt.homeSpawn[2]),.25),h.ui.card("01:52","Wendelsweg",2.6),this.obj("Geh zum Goetheturm"),await this.wait(2.5),await this.say("Halloween. Und die ganze Stra\xDFe schl\xE4ft.",3.2),await this.until(()=>n.p.z>-102),await this.say("Der K\xFCrbis brennt noch.",2.6),await this.until(()=>n.p.z>-73),this.setClock("02:01"),this.mark("Am Spielplatz"),await this.say("Der Goetheturm. Nachts sieht der noch h\xF6her aus.",3.4),this.obj("Finde Deniz am Turm");let i=!1;this.interact({story:!0,pos:t.can.position,radius:.12,range:2.2,text:"Dose ansehen",onUse:()=>{i=!0,h.ui.say("Deniz' Energy. Noch kalt. Er war hier.",3.6)}}),this.interact({story:!0,pos:h.towerSign,radius:.5,range:3,text:"Schild lesen",onUse:()=>h.ui.say("\u201EVom 01.11. bis 31.03. geschlossen.\u201C Also ab morgen.",3.6)}),await this.until(()=>Math.hypot(n.p.x-Dt.tower[0],n.p.z-Dt.tower[1])<13||i),await this.say("Deniz?",1.8,"Leon"),await this.wait(1.2),e.owl(se(-30,12,-20)),await this.say("Keiner da.",2.2);let r=h.time;await this.until(()=>i||Math.hypot(n.p.x-Dt.canBench[0],n.p.z-Dt.canBench[1])<4||h.time-r>10),await this.wait(4),this.mark("Deniz schreibt: im Wald"),this.msg("bin schon im wald"),await this.wait(1.6),this.msg("nimm den kiesweg hinterm spielplatz, einfach geradeaus"),await this.say("Der wartet nicht mal auf mich.",3),await this.reply(["warum wartest du nicht?","ernsthaft?"]),await this.wait(1.4),this.msg("komm einfach"),this.obj("Folge der H\xFCgelschneise in den Wald"),await this.until(()=>n.p.z>-30.5),this.run(3,!1)}async ch3(t){let e=h.objects,n=h.player,i=h.audio;t&&h.ui.fade(0,1.6),h.ui.card("02:08","H\xFCgelschneise",2.6),this.setClock("02:08"),this.obj("Geh die Schneise entlang"),n.p.z<-20&&await this.wait(3),n.flashOn||(await this.say("Ich seh fast nichts. Taschenlampe an.",3),h.ui.hint(`<b>${on("flash")}</b> Taschenlampe`,5)),await this.until(()=>n.p.z>8),i.owl(se(14,10,30)),await this.say("Eulen. Nur Eulen.",2.6),await this.until(()=>n.p.z>19),this.msg("ich seh dein licht"),await this.say("Wo ist er?",2),await this.until(()=>n.p.z>26),this.msg("bleib mal kurz stehen"),await this.wait(3),this.mark("Da steht wer hinter dir"),this.msg("da steht wer hinter dir");let r=e.silhouette,a=Math.max(-25,n.p.z-24);r.root.position.set(.6,h.terrain.height(.6,a),a),r.root.rotation.y=Math.PI,r.stand(),r.root.visible=!0;let o=h.time;if(await this.until(()=>{let u=new L().subVectors(r.root.position,h.camera.position).normalize();return n.forward().dot(u)>.94||h.time-o>14}),h.time-o<=14){i.sting("soft"),h.post.scare(.35),n.flashFlicker=.5,await this.wait(.9);let u=r.root.position.clone(),f=0;this.addUp(d=>{if(f>=1){r.root.visible=!1;return}f+=d/1.1,r.root.position.x=u.x-f*5,r.root.rotation.y=-Math.PI/2,r.walk(d,2.8)}),await this.wait(1.3),r.root.visible=!1,await this.say("Da war \u2026 da war doch was.",3)}else r.root.visible=!1;await this.wait(1.5),this.msg("spa\xDF"),await this.say("Ich h\xE4tte fast nen Herzinfarkt gekriegt.",3.4),await this.reply(["nicht lustig","alter, lass das"]),await this.wait(1.4),this.msg("sorry \u{1F602}"),this.obj("Geh weiter"),await this.until(()=>n.p.z>51),this.mark("Sperrung"),await this.say("Gesperrt. Forstarbeiten.",2.6),this.msg("der weg ist gesperrt oder? geh links durchs geb\xFCsch, da kommst du durch"),this.obj("Zw\xE4ng dich links durchs Geb\xFCsch"),n.p.x>-2&&(n.lookTarget={pos:se(Dt.pile[0]+1.5,1,Dt.pile[1]),speed:2.2},this.after(1.1,()=>{n.lookTarget=null})),await this.until(()=>n.p.x<-2.4&&n.p.z>52),h.ui.hint(`<b>${on("crouch")}</b> ducken`,5);let c=this.interact({story:!0,pos:[Dt.pile[0]+.4,h.terrain.height(...Dt.pile)+.7,Dt.pile[1]],radius:.9,range:2.6,hold:2,text:"\xC4ste wegr\xE4umen",onHold:u=>{Zn()<u*6&&i.burst({f:1500,q:.6,d:.2,peak:.25})}});await this.use(c),e.pile.clear(),i.burst({f:900,q:.5,d:.6,peak:.5}),await this.until(()=>n.p.x<-9),this.run(4,!1)}async ch4(t){let e=h.objects,n=h.player,i=h.audio;t&&h.ui.fade(0,1.6),h.ui.card("02:17","Abseits",2.6),this.setClock("02:17"),h.phone.battery>19&&(h.phone.battery=19),this.msg("ich hab band an die b\xE4ume gemacht. geh dem einfach nach"),this.obj("Folge den Markierungen"),h.flags.ambient=!0,await this.until(()=>n.p.x<-13.5),await this.say("Flatterband. Hat Deniz das hingemacht?",3.2),await this.until(()=>n.p.z>66),h.phone.network=!1,h.ui.refreshStatus(),await this.say("Kein Netz. Super.",2.4),await this.until(()=>Math.hypot(n.p.x+24.6,n.p.z-73.2)<5),await this.say("Komischer Baum. Gespalten, wie vom Blitz.",3.2);{let p=e.silhouette,m=se(-33.5,0,79);m.y=h.terrain.height(m.x,m.z),p.root.position.copy(m),p.root.rotation.y=Vs(n.p.x-m.x,n.p.z-m.z),p.stand(),p.root.visible=!0,this.mark("Gestalt zwischen den B\xE4umen");let x=h.time;await this.until(()=>{let g=new L().subVectors(m,h.camera.position),y=g.length();return y<26&&n.forward().dot(g.divideScalar(y))>.985||h.time-x>9||y<6}),h.time-x<=9&&(i.sting("soft"),n.flashFlicker=.4,await this.wait(.4)),p.root.visible=!1}await this.until(()=>n.p.x<-35),this.mark("Schrei 1"),i.scream(Dt.speaker,"distant",1);let r=h.time;await this.wait(2.2),i.sting("soft"),await this.say("Was war das?!",2.2),await this.say("Eine Frau? \u2026Nein. Ein Fuchs. F\xFCchse schreien so. Glaub ich.",4),this.obj("Weiter. Folge dem Band"),await this.reply(["deniz?? war das du"]),await this.wait(.8),h.chat.push({from:"day",text:"Nicht zugestellt"}),h.ui.renderPhone(),await this.say("Nicht zugestellt.",2.2),await this.until(()=>Math.hypot(n.p.x+58,n.p.z-90.4)<6),await this.say("Moment. Den Baum hatte ich doch schon.",3),await this.say("\u2026Lauf ich im Kreis?",2.4),await this.until(()=>h.time-r>48&&n.p.z>91),this.mark("Schrei 2"),i.scream(Dt.speaker,"distant",1.2),await this.wait(1.8),i.heartbeat(!0,1.6),await this.say("Derselbe Schrei. Genau derselbe.",3),this.obj("Lauf!");let a=n.p.clone();await this.until(()=>n.p.distanceTo(a)>5||n.p.z>99),this.mark("Sturz, Handy f\xE4llt"),n.canMove=!1;let o=n.forward();o.y=0,o.normalize(),i.bodyFall(),n.shake(1,.4);let l=0;this.addUp(p=>{l>1||(l+=p,n.extraPitch=-Math.sin(Math.min(1,l*2.5)*Math.PI/2)*.55,n.extraRoll=Math.sin(Math.min(1,l*2.5)*Math.PI/2)*.35,n.eyeOffset=-Math.min(1,l*3)*1.15)}),n.setFlash(!1),h.phone.dropped=!0,h.ui.togglePhone(!1);let c=n.p.clone().addScaledVector(o,2.4).add(se(o.z,0,-o.x).multiplyScalar(.8));h.world.constrain(c,.6),i.phoneDrop(c),e.groundPhone.place(c.x,h.terrain.height(c.x,c.z),c.z),await this.wait(1.6),await this.say("Schei\xDFe! Das Handy!",2.4);let u=0;this.addUp(p=>{if(u>1)return;u+=p*.9;let m=1-Math.min(1,u);n.extraPitch=-.55*m,n.extraRoll=.35*m,n.eyeOffset=-1.15*m}),await this.wait(1.1),n.canMove=!0,this.obj("Finde dein Handy"),this.addUp(p=>{h.phone.dropped&&(e.groundPhone.pulse(h.time),this._gv=(this._gv??2)-p,this._gv<0&&(this._gv=3.5,i.vibrate(e.groundPhone.group.position)))});let f=this.interact({story:!0,pos:e.groundPhone.group.position.clone().add(se(0,.05,0)),radius:.35,range:2.6,text:"Handy aufheben",onUse:()=>{i.pickup(),e.groundPhone.hide(),h.phone.dropped=!1,h.phone.battery=6,n.setFlash(!0)}});await this.use(f),i.heartbeat(!0,1.2),await this.say("Sechs Prozent. Bitte nicht ausgehen.",3),this.obj("Weiter. Weg von dem Schrei"),await this.until(()=>n.p.x<-70&&n.p.z>102),i.heartbeat(!1),await this.say("Ein Zaun.",2),await this.say("Da hinten sind Lichter. H\xE4user!",3),this.obj("Komm irgendwie \xFCber den Zaun");let d=this.interact({story:!0,pos:e.gate.lockPos,radius:.35,range:2.6,text:"Tor \xF6ffnen",onUse:()=>{i.padlock(e.gate.lockPos),i.fenceRattle(e.gate.lockPos,.8)}});this.interact({story:!0,pos:[-79,1.4,109],radius:1.2,range:2.2,text:"Hochklettern",once:!1,onUse:()=>{i.fenceRattle(se(-79,1.5,109),.7),h.ui.say("Zu hoch. Und oben Stacheldraht.",2.6)}}),await this.until(()=>d.used||n.p.z>112),d.used&&(await this.wait(.8),await this.say("Abgeschlossen. Kette mit Schloss.",3)),this.obj("Folge dem Zaun"),h.phone.battery=Math.min(h.phone.battery,5),await this.until(()=>n.p.z>117),i.scream(Dt.speaker,"distant",1.5),await this.wait(2),await this.say("Er kommt von da vorne. Ganz nah.",3),await this.until(()=>Math.hypot(n.p.x+67,n.p.z-133.5)<4),h.flags.ambient=!1,this.run(5,!1)}async ch5(t){let e=h.objects,n=h.player,i=h.audio;t&&h.ui.fade(0,1.6),h.ui.card("02:39","Die H\xFCtte",2.6),this.setClock("02:39"),h.phone.battery=Math.min(h.phone.battery,3),h.phone.minBattery=2,i.loops.humIn||(i.hum("humIn",e.fan.pos,1),i.hum("humOut",e.ventTop.pos,.7,!0),i.tubeBuzz(e.tube.pos)),e.hatch.state.open||e.hatch.set(!0),await this.say("Eine H\xFCtte. Hier drau\xDFen?",2.8),this.obj("Untersuch die H\xFCtte"),this.addUp(()=>{!this._ventSaid&&n.p.y>-.5&&e.ventTop.pos.distanceTo(n.p)<3&&(this._ventSaid=!0,h.ui.say("Da brummt was. Wie ne alte Mikrowelle.",3.2))});let r=this.interact({story:!0,pos:e.hutDoor.pos,radius:.45,text:"T\xFCr \xF6ffnen",onUse:()=>e.hutDoor.open()});await this.use(r),await this.wait(1.2),await this.say("Hallo?",1.6,"Leon");let a=this.interact({story:!0,pos:e.beanie.position,radius:.15,text:"M\xFCtze ansehen"});await this.until(()=>n.p.x<-59.6&&n.p.x>-64.4&&n.p.z<142&&n.p.y>0),await this.say("Licht. Da unten. Und es brummt.",3),this.obj("Sieh dich in der H\xFCtte um"),await this.use(a),this.mark("Deniz' M\xFCtze"),i.sting("soft"),await this.say("Das ist Deniz' M\xFCtze.",2.4),await this.say("DENIZ?!",1.8,"Leon"),await this.wait(1.4),await this.say("Da unten ist Strom. Mein Handy \u2026",3),this.obj("Geh runter in den Keller"),await this.until(()=>n.p.y<-2.6&&n.p.z>141.4),this.mark("Im Keller"),await this.say("Hallo \u2026?",2,"Leon"),this.obj("Lade dein Handy");let o=this.interact({story:!0,pos:e.strip.pos,radius:.18,text:"Handy anschlie\xDFen"}),l=!1;this.interact({story:!0,pos:e.strip.pos.clone().add(se(-.08,0,0)),radius:.15,text:"Handy nehmen",once:!1,enabled:()=>l,onUse:()=>{l=!1,e.chargingPhone.mesh.visible=!1,h.phone.charging=!1,h.flags.noPhone=!1,h.flags.noFlash=!1,i.pickup()}}),await this.use(o),i.click(),l=!0,e.chargingPhone.mesh.visible=!0,h.phone.charging=!!e.fuseState[2],h.flags.noPhone=!0,h.flags.noFlash=!0,n.setFlash(!1),h.ui.togglePhone(!1),this.addUp(()=>{l&&(h.phone.charging=!!e.fuseState[2],e.chargingPhone.screen.material.color.set(h.phone.charging?3364232:657930),e.strip.led.visible=!!e.fuseState[2])}),await this.say("L\xE4dt. Okay. Okay \u2026",2.4),this.obj("Sieh dich um");let c=[[e.map.pos,.45,"Karte ansehen",["Der Stadtwald. Alles markiert.","\u201ERUF 1\u201C, \u201ERUF 2\u201C, \u201ERUF 3\u201C \u2026 Und ein Kreuz. Genau hier."]],[e.polaroids.pos,.35,"Fotos ansehen",["Fotos. Von Leuten im Wald. Nachts. Von hinten.","Die wissen nicht mal, dass sie fotografiert werden."]],[e.news.pos,.2,"Zeitung lesen",["\u201EJoggerin im Stadtwald vermisst.\u201C","\u2026Warum h\xE4ngt das hier?"]]];for(let[w,v,M,R]of c)this.interact({story:!0,pos:w,radius:v,text:M,onUse:()=>this.sayLines(R)});this.interact({story:!0,pos:e.notebook.pos,radius:.15,text:"Notizbuch lesen",once:!1,onUse:()=>{h.ui.note(`31.10.

01:58  Turm. Junge allein.
Handy auf der Bank liegen lassen.
Keine Sperre. Chat offen.

Freund kommt um halb drei.

RUF 2 l\xE4uft.

02:30  Er kommt.`),this._readNote=!0}}),this.interact({story:!0,pos:e.keys.pos,radius:.2,text:"Schl\xFCssel \u201ETOR 3\u201C nehmen",onUse:()=>{i.keys(e.keys.pos),e.keys.torKey.visible=!1,h.inv.add("torKey"),h.ui.say("TOR 3. Das Tor am Zaun!",3)}});let u=this.interact({story:!0,pos:e.recorder.pos,radius:.18,text:"Ger\xE4t \u201ERUF 2\u201C \u2013 abspielen"});await this.use(u),this.mark("RUF 2 \u2013 Jumpscare"),i.scream(e.recorder.pos,"speaker",1.4),i.sting("hard"),h.post.scare(1),n.shake(1.2,.6),await this.wait(3.4),i.sting("reveal"),await this.say("Das \u2026 das ist eine Aufnahme.",3),await this.say("Der Schrei. Die ganze Zeit. Das war kein Fuchs.",3.6),await this.wait(1);for(let w=0;w<5;w++)i.heavyStep(se(-60-w*.8,.4,139.6+w%2*.3),1),await this.wait(.55);await this.say("Da ist jemand.",2.2),this.mark("Luke zu \u2013 eingesperrt"),e.hatch.close(),i.slam(e.hatch.pos,1.4),n.shake(1,.5),h.post.scare(.5),await this.wait(.5),i.bolt(e.hatch.pos),await this.wait(.8),i.drag(e.hatch.pos,1.8),i.heartbeat(!0,1.5),this.obj("Raus hier!"),await this.wait(3),h.phone.network=!0,this.msg("hast du was gefunden \u{1F642}"),await this.wait(2.4),this.msg("du h\xE4ttest auf dem weg bleiben sollen"),await this.wait(1.5),await this.say("\u2026Das ist nicht Deniz.",2.8),await this.say("Das war die ganze Zeit nicht Deniz.",3.2),i.heartbeat(!0,1.1),this.interact({story:!0,pos:[-63.25,-.25,139],radius:.7,range:3.2,text:"Luke aufdr\xFCcken",once:!1,enabled:()=>!e.hatch.state.open,onUse:()=>{i.burst({pos:e.hatch.pos,type:"lowpass",f:300,d:.2,peak:.6}),h.ui.say("Keine Chance. Er hat was draufgestellt.",3)}}),this.obj("Finde einen anderen Weg raus"),this.addUp(()=>{h.micLvl>.6&&!this._micHeard&&(this._micHeard=!0,i.heavyStep(se(-62,.4,140),1.2),i.fenceRattle(e.hatch.pos,.5),this.msg("ich h\xF6r dich"))});let f=!1;this.interact({story:!0,pos:e.fan.pos,radius:.4,range:2.2,once:!1,text:()=>e.fan.running?"L\xFCftung ansehen":h.inv.has("screwdriver")?"Gitter abschrauben":"Gitter ansehen",enabled:()=>e.fan.grille.visible&&(e.fan.running||!h.inv.has("screwdriver")),hold:0,onUse:()=>{if(e.fan.running){f?h.ui.say("Da greif ich nicht rein, solange der l\xE4uft.",3):(f=!0,h.ui.say("Die Luft muss irgendwo rausgehen. Nach drau\xDFen. \u2026Aber der L\xFCfter dreht.",4.2),this.obj("Schalte die L\xFCftung ab"));return}h.inv.has("screwdriver")||(h.ui.say("Festgeschraubt. Ich brauch nen Schraubendreher.",3.2),this.obj("Finde einen Schraubendreher"))}});let d=this.interact({story:!0,pos:e.fan.pos,radius:.45,range:2.2,hold:3.2,text:"Gitter abschrauben",enabled:()=>!e.fan.running&&h.inv.has("screwdriver")&&e.fan.grille.visible,onHoldStart:()=>{this._unscrewing=!0},onHold:w=>{Zn()<w*3&&i.screw(e.fan.pos)}}),p=["Schalter 1 \u201ELICHT\u201C","Schalter 2","Schalter 3 \u201ESTECKD.\u201C"];for(let w=0;w<3;w++)this.interact({story:!0,pos:e.fuse.pos(w),radius:.045,range:1.8,once:!1,text:()=>p[w]+(e.fuseState[w]?" \u2013 aus":" \u2013 an"),onUse:()=>{if(w===1&&!e.fan.grille.visible){h.ui.say("Blo\xDF nicht. Der Schacht ist offen.",2.6);return}e.fuseState[w]=!e.fuseState[w],e.fuse.setVisual(w,e.fuseState[w]),i.switchClick(e.fuse.pos(w)),w===0&&(e.tube.set(e.fuseState[0]),e.fuseState[0]||(i.setLoop("tube",0,.05),this._s1||(this._s1=!0,h.ui.say("Falscher. Licht.",2.2)))),w===1&&(e.fan.setOn(e.fuseState[1]),e.fuseState[1]?(i.hum("humIn",e.fan.pos,1),i.hum("humOut",e.ventTop.pos,.7,!0)):(i.humWindDown("humIn",3.5),i.humWindDown("humOut",3.5),this._s2||(this._s2=!0,this.mark("L\xFCftung aus"),this.fanOff()))),w===2&&!this._s3&&(this._s3=!0,h.ui.say("Steckdose. Das Handy l\xE4dt nicht mehr.",2.8))}});let m=!1;this.interact({story:!0,pos:e.drawer.pos,radius:.25,text:"Schublade \xF6ffnen",onUse:()=>{m=!0,e.drawer.open(),i.burst({pos:e.drawer.pos,f:500,q:1,d:.3,peak:.3})}}),this.interact({story:!0,pos:e.drawer.pos.clone().add(se(-.15,.05,0)),radius:.12,text:"Schraubendreher nehmen",enabled:()=>m&&h.objects.drawer.screwdriver.visible,onUse:()=>{i.pickup(),e.drawer.screwdriver.visible=!1,h.inv.add("screwdriver"),e.fan.running||this.obj("Schraub das Gitter ab")}}),await this.use(d),this._unscrewing=!1,e.fan.removeGrille(),i.metalClang(e.fan.pos,1.3),this._stepsAbove=!1,await this.wait(1.2),await this.say("\u2026Er hat's geh\xF6rt.",2.4);let x=this.interact({story:!0,pos:e.fan.pos,radius:.45,range:2.2,hold:1,text:"L\xFCfter rausziehen"});await this.use(x),e.fan.removeFan(),i.metalClang(e.fan.pos,1.6),i.thud(e.fan.pos,.7),await this.wait(.6),i.drag(e.hatch.pos,2.2),i.heartbeat(!0,1.7),this.mark("Er r\xE4umt die Luke frei"),this.obj("In den Schacht! Schnell!");let g=h.world.addBox(hn.room.minX-.3,hn.room.minX+.05,hn.shaft.minZ,hn.shaft.maxZ,-3.4,-1.5,{label:"Schacht (erst mit Handy + Schl\xFCssel)"});this.addUp(()=>{let w=n.p.y<-1.5&&n.p.x<hn.room.minX+.9&&Math.abs(n.p.z-144.2)<.8,v=h.inv.has("torKey")&&!l;g.enabled=!v,w&&!v&&!this._gateMsgT&&(this._gateMsgT=h.time,h.ui.say(l?"Mein Handy! Das liegt noch auf der Werkbank.":"Warte. Der Schl\xFCssel. \u201ETOR 3\u201C \u2013 f\xFCrs Tor am Zaun.",3.4)),this._gateMsgT&&h.time-this._gateMsgT>5&&(this._gateMsgT=0);let M=n.p.y<-1.5&&n.p.x<hn.room.minX+.75&&n.p.x>hn.shaft.minX-.1&&Math.abs(n.p.z-144.2)<.75;n.forceStance=M?"crawl":null,h.flags.inShaft=M&&n.p.x<hn.room.minX}),await this.wait(2.3),e.hatch.open(),i.slam(e.hatch.pos,.7);for(let w=0;w<4;w++)this.after(.9+w*.6,()=>i.heavyStep(se(-63.25,-.6-w*.7,138.8+w*.6),1.1));this.addUp(w=>{this._manT=(this._manT||0)+w,this._manT>7&&n.p.x>hn.room.minX-.3&&!this._manDown&&(this._manDown=!0,i.heavyStep(se(-63.25,-3,141.4),1.4),h.ui.say("Er ist unten. ER IST UNTEN!",2.4),i.heartbeat(!0,2.4))}),await this.until(()=>n.p.x<hn.shaft.minX+.4),await this.say("Eine Leiter \u2026",1.8);let y=this.interact({story:!0,pos:[hn.shaft.minX-.9,hn.shaft.y+1,144.2],radius:.5,range:2,text:"Hochklettern"});await this.use(y),n.scripted=!0,n.forceStance="stand",n.stance="stand";let b=hn.shaft.minX-.55,E=144.2;n.p.set(b,hn.shaft.y,E),n.lookTarget={pos:se(b-.4,2,E),speed:3};let S=h.objects.ventTop.pos.y-2;for(let w=hn.shaft.y;w<S;w+=.33)n.p.y=w,i.footstep("metal",.8),await this.wait(.36);n.lookTarget={pos:h.objects.ventTop.pos.clone().add(se(-.05,1,0)),speed:3};let _=this.interact({story:!0,pos:h.objects.ventTop.pos.clone().add(se(0,.12,0)),radius:.6,range:3.5,hold:1.5,text:"Gitter aufdr\xFCcken",onHold:w=>{Zn()<w*4&&i.fenceRattle(h.objects.ventTop.pos,.3)}});await this.use(_),i.metalClang(h.objects.ventTop.pos,1),h.objects.ventTop.grate.position.x+=.9,h.objects.ventTop.grate.rotation.z=.4,await this.fade(1,.5),n.lookTarget=null,n.scripted=!1,n.forceStance=null,i.stopLoop("humIn",.2),i.stopLoop("humOut",.2),i.stopLoop("tube",.2),n.teleport(hn.ventExit[0],h.terrain.height(hn.ventExit[0],hn.ventExit[2]),hn.ventExit[2],0,0),h.phone.battery=Math.max(h.phone.battery,15),await this.wait(.4),h.ui.fade(0,.8),this.run(6,!1)}async fanOff(){let t=h.audio;await this.wait(3.5),this._stepsAbove=!0;let e=this.token;(async()=>{for(;this._stepsAbove&&e===this.token;)t.heavyStep(se(-62+Math.sin(h.time)*1.8,.4,140+Math.cos(h.time*.6)*1.4),1.1),await this.wait(.8+Zn()*.9)})().catch(()=>{}),h.ui.say("Stille. \u2026Er ist noch da oben. Er l\xE4uft rum.",3.6),await this.wait(2),this.msg("ich h\xF6r dich"),this.obj(h.inv.has("screwdriver")?"Schraub das Gitter ab":"Finde was, um das Gitter abzuschrauben")}die(){let t=h.player,e=h.audio;if(this._dying)return;this._dying=!0,t.canMove=!1,this.mark("Gefangen"),e.sting("hard"),h.post.scare(1),t.shake(1.5,.6),this.chase=null,e.heartbeat(!1),this.after(.35,()=>h.ui.death(!0));let n=this.chapter===5?5:this.chapter===7?7:6,i=n===6&&this._cp6==="tor"?"tor":null;this.after(3.2,()=>{h.ui.death(!1),this._dying=!1,this.run(n,!0,i)})}async ch6(t,e){let n=h.objects,i=h.player,r=h.audio;if(t&&(h.ui.fade(0,1.4),h.ui.card("03:14","Flucht",2.2)),this.setClock("03:14"),h.phone.network=!0,h.phone.mapUnlocked=!0,h.phone.minBattery=1,n.hatch.set(!1),n.hutDoor.set(!1),n.fan.setOn(!1),r.loops.stream||r.stream(se(Dt.streamX,-.3,Dt.gateZ)),i.setFlash(!0),this._cp6=e||"start",e!=="tor"){r.heartbeat(!0,1.3),await this.say("Drau\xDFen. Ich bin drau\xDFen.",2.4),h.ui.hint(`<b>${on("phone")}</b> Handy &nbsp; <b>${on("app")}</b> Karte`,6),await this.say(Math.round(h.phone.battery)+" Prozent. Und Netz. Karten \u2026",3),this.obj("Zum Tor am Zaun. Leise."),await this.until(()=>i.p.z<138.6),this.mark("Ast f\xE4llt");let a=n.branch.group,[o,l]=h.branchTree,c=h.terrain.height(o-2.4,l);r.branchFall(a.position.clone(),se(o-2.4,c,l)),h.post.scare(.9),r.sting("hard"),i.shake(1.3,.7);let u=0,f=a.position.y,d=a.rotation.z;this.addUp(y=>{if(u>=1)return;u=Math.min(1,u+y/.55);let b=u*u;a.position.y=f+(c+.25-f)*b,a.rotation.z=d+(Math.PI/2-d)*b,a.rotation.x=b*.15}),await this.wait(.6),this.branchCol.enabled=!0,i.shake(.6,.3),h.ui.say("\u2026Das war laut.",1.8),await this.wait(1.2),n.hutDoor.open(),r.doorCreak(n.hutDoor.pos),await this.wait(.7),this.mark("Er kommt raus \u2013 Jagd"),n.man.show(!0);let p=n.man.H,m=se(-58.6,.3,140),x=i.trail||[];if(Math.hypot(i.p.x-m.x,i.p.z-m.z)>16&&x.length>6){let y=0,b=x.length-1;for(;b>0&&y<15;)y+=x[b].distanceTo(x[b-1]),b--;m=x[b].clone()}m.y=h.world.groundAt(m.x,m.z,m.y+2),p.root.position.copy(m),p.stand(),r.heartbeat(!0,2.2),h.ui.say("LAUF!",1.2),this.obj("LAUF ZUM TOR!"),h.ui.hint(`<b>${on("sprint")}</b> rennen &nbsp; <b>${on("jump")}</b> \xFCber Hindernisse springen`,5),this.startChase({pos:m,path:m.x>-60?void 0:[]});let g=this.interact({story:!0,pos:n.gate.lockPos,radius:.4,range:2.6,hold:1.6,text:"Tor aufschlie\xDFen",onHold:y=>{Zn()<y*5&&r.keys(n.gate.lockPos)}});await this.use(g),this.mark("Tor auf"),this._cp6="tor",r.padlock(n.gate.lockPos),n.gate.open();for(let y of h.world.regions)["bank","stream"].includes(y.id)&&(y.enabled=!0);await this.until(()=>i.p.x<-80.4),n.gate.close(),r.fenceRattle(se(-79,1,Dt.gateZ),1),h.ui.say("Zu. Das Tor ist zu.",1.8)}else{h.ui.fade(0,1),n.gate.close();for(let o of h.world.regions)["bank","stream"].includes(o.id)&&(o.enabled=!0);i.teleport(-80.9,h.world.groundAt(-80.9,Dt.gateZ,3),Dt.gateZ,Math.PI/2,0),n.man.show(!0);let a=se(-78.2,h.terrain.height(-78.2,Dt.gateZ+.6),Dt.gateZ+.6);n.man.H.root.position.copy(a),n.man.H.stand(),this.startChase({pos:a,path:[],state:"unlock"}),this.chase.stateT=-2.5,r.heartbeat(!0,2)}this.obj("Spring \xFCber den Bach!"),h.ui.hint(`<b>${on("sprint")}</b> Anlauf &nbsp; <b>${on("jump")}</b> springen`,6),await this.until(()=>i.p.x<-84.4),r.splash(se(Dt.streamX,-.4,i.p.z)),this.run(7,!1,null,!0)}startChase(t={}){let e=h.objects.man.H;this.chase={pos:(t.pos||e.root.position).clone(),idx:0,trailIdx:-1,t:0,stepT:0,state:t.state||"run",stateT:0,path:(t.path||[[-58.6,140],[-58.7,137],[-64.5,136.6],[-70.8,138.6]]).map(([n,i])=>se(n,0,i)),hbT:0,godT:0}}updateChase(t){let e=this.chase,n=h.player,i=h.objects.man,r=i.H,a=h.audio,o=h.objects,l=h.dev||{};if(e.t+=t,e.stateT+=t,e.state==="gone")return;let c=Math.hypot(n.p.x-e.pos.x,n.p.z-e.pos.z),u=(E,S)=>{r.root.rotation.y=Math.atan2(-(E-e.pos.x),-(S-e.pos.z))},f=o.gate.col.enabled;if(e.hbT-=t,e.hbT<0&&(e.hbT=1.5,a.heartbeat(!0,1.3+1.3*(1-Ce(c/22,0,1)))),e.state==="retreat"){let E=se(-92,0,106),S=se(E.x-e.pos.x,0,E.z-e.pos.z),_=S.length();e.stateT<1.2?(r.stand(),r.armR.sh.rotation.x=-1.9,r.armR.el.rotation.x=.6,u(n.p.x,n.p.z)):_>.3&&(S.divideScalar(_),e.pos.addScaledVector(S,Math.min(_,2.2*t)),r.root.rotation.y=Math.atan2(-S.x,-S.z),r.walk(t,2.2)),e.stateT>1.2&&e.stateT<1.4&&(i.torch.intensity=0),e.stateT>4.5&&(e.state="gone",i.show(!1),a.heartbeat(!1)),e.pos.y=h.world.groundAt(e.pos.x,e.pos.z,e.pos.y+.6),isFinite(e.pos.y)||(e.pos.y=h.terrain.height(e.pos.x,e.pos.z)),r.root.position.copy(e.pos);return}if(e.state==="unlock"){r.stand(),u(n.p.x,n.p.z),!e.rattled&&e.stateT>.2&&(e.rattled=!0,a.fenceRattle(o.gate.lockPos,1.2)),e.stateT>1.2&&e.stateT<3&&(e.kT=(e.kT||0)-t)<0&&(e.kT=.35,a.keys(o.gate.lockPos)),e.stateT>3&&(a.padlock(o.gate.lockPos),o.gate.open(),e.state="run",e.stateT=0,e.trailIdx=-1,this._manGate||(this._manGate=!0,this.mark("Er schlie\xDFt das Tor auf"),h.ui.say("Er hat \u2026 einen Schl\xFCssel.",2.4))),r.root.position.copy(e.pos);return}if(l.ignore){r.stand(),r.root.position.copy(e.pos);return}let d,p=Math.abs(n.p.y-e.pos.y)<2,m=c<8&&p&&!h.world.segmentBlocked(e.pos.x,e.pos.z,n.p.x,n.p.z,e.pos.y+1);if(f&&e.pos.x>-79.4&&n.p.x<-79.2){if(d=se(-78.35,0,Dt.gateZ),Math.hypot(d.x-e.pos.x,d.z-e.pos.z)<.5){e.state="unlock",e.stateT=0,e.rattled=!1;return}}else if(m)d=n.p.clone();else if(e.idx<e.path.length)d=e.path[e.idx],Math.hypot(d.x-e.pos.x,d.z-e.pos.z)<.6&&e.idx++;else{let E=n.trail||[];if(e.trailIdx<0){let S=0,_=1/0;E.forEach((w,v)=>{let M=Math.hypot(w.x-e.pos.x,w.z-e.pos.z);M<_&&(_=M,S=v)}),e.trailIdx=S}for(;e.trailIdx<E.length-1&&Math.hypot(E[e.trailIdx].x-e.pos.x,E[e.trailIdx].z-e.pos.z)<.7;)e.trailIdx++;d=E[e.trailIdx]||n.p}let g=4.25+1.6*Ce((c-7)/11,0,1);e.t<1&&(g*=.4+.6*e.t);for(let E of Oy)Math.abs(e.pos.x-E[0])<E[2]&&Math.abs(e.pos.z-E[1])<E[2]&&(g=Math.min(g,3));let y=se(d.x-e.pos.x,0,d.z-e.pos.z),b=y.length();if(b>.01){y.divideScalar(b),e.pos.addScaledVector(y,Math.min(b,g*t));let E=Math.atan2(-y.x,-y.z);r.root.rotation.y+=qi(r.root.rotation.y,E)*(1-Math.exp(-10*t))}if(f&&e.pos.x>-79.4&&(e.pos.x=Math.max(e.pos.x,-78.4)),e.pos.y=h.world.groundAt(e.pos.x,e.pos.z,e.pos.y+.6),isFinite(e.pos.y)||(e.pos.y=h.terrain.height(e.pos.x,e.pos.z)),r.root.position.copy(e.pos),r.walk(t,g),e.stepT-=t,e.stepT<0&&(e.stepT=3.2/Math.max(2,g)*.42,a.footstep(e.pos.x<-84.5?"gravel":"leaves",1.5,e.pos.clone().add(se(0,.1,0))),Zn()<.12&&a.breath(.6)),c<3&&n.shake(.12,.2),e.godT-=t,c<1.15&&e.godT<=0)if(l.god){e.godT=3,a.sting("hard"),h.post.scare(.8),n.shake(1,.4);let E=n.trail||[],S=E[Math.max(0,E.length-12)];S&&(e.pos.copy(S),e.trailIdx=-1)}else this.die()}async ch7(t){let e=h.objects,n=h.player,i=h.audio;t&&h.ui.fade(0,1.4),h.ui.card("03:24","Kleing\xE4rten",2.4),this.setClock("03:24");for(let r of h.world.regions)["bank","stream","alley","gardens"].includes(r.id)&&(r.enabled=!0);if(t||!this.chase){e.man.show(!0);let r=se(-78.2,h.terrain.height(-78.2,Dt.gateZ+.6),Dt.gateZ+.6);e.man.H.root.position.copy(r),e.man.H.stand(),e.man.H.root.rotation.y=Math.PI/2,e.gate.close(),this.startChase({pos:r,path:[],state:"unlock"}),this.chase.stateT=-2.5}this.obj("Weiter! Zu den H\xE4usern"),await this.until(()=>n.p.x<-88),await this.say("Die Gasse. Blo\xDF nicht stehen bleiben.",2.6),await this.until(()=>n.p.x<-97),this.mark("Gasse"),await this.until(()=>n.p.x<-111.5),this.mark("Flutlicht"),e.flood.on(),i.floodlight(se(-113,2.6,100.4)),i.sting("hard"),h.post.scare(1),n.shake(1,.5),this.chase&&this.chase.state!=="gone"&&(this.chase.state="retreat",this.chase.stateT=0),await this.wait(1.6),await this.say("\u2026Eine Vogelscheuche.",2.2),await this.say("Nur ne beschissene Vogelscheuche.",2.8),await this.wait(1.2),this.chase&&await this.say("Und er \u2026 er geht. Er bleibt im Dunkeln.",3),await this.wait(2.4),this.msg("bis bald leon"),await this.wait(2.2),i.heartbeat(!1),this.chase=null,e.man.show(!1),e.flood.off(),i.switchClick(se(-113,2.6,100.4)),this.obj("Nach Hause"),await this.until(()=>n.p.x<-124),n.canMove=!1,i.heartbeat(!0,1.9),await this.fade(1,1.6),await this.narr(["Ich bin den ganzen Weg nach Hause gerannt. Ohne mich einmal umzudrehen."],{perPara:2.5}),i.heartbeat(!1),this.run(8,!0)}async ch8(){let t=h.objects,e=h.player,n=h.audio,i=t.deniz;i.root.position.set(Dt.deniz[0]-.05,-.05,Dt.deniz[2]),i.root.rotation.y=-Math.PI/2,i.root.visible=!0,h.ui.fade(0,2.2),h.ui.card("03:31","Wendelsweg",2.4),this.obj("Nach Hause"),n.breath(1.4),await this.wait(2),await this.say("Da sitzt jemand. Vor unserer T\xFCr.",3),await this.until(()=>Math.hypot(e.p.x-Dt.deniz[0],e.p.z-Dt.deniz[2])<4.2),this.mark("Deniz vor der T\xFCr"),e.canMove=!1,this.obj(null),await this.look(se(Dt.deniz[0],1,Dt.deniz[2]),3,1.2),e.lookTarget={pos:se(Dt.deniz[0],1,Dt.deniz[2]),speed:2},i.neck.rotation.x=-.1,await this.say("Alter! Wo warst du?! Ich sitz hier seit ner Stunde.",3.6,"Deniz"),await this.say("Du \u2026 du hast mir doch die ganze Zeit geschrieben.",3.6,"Leon"),await this.say("H\xE4? Mein Handy ist weg, Bro. Hab's am Turm auf der Bank liegen lassen.",4,"Deniz"),await this.say("Mit meiner M\xFCtze. Als ich zur\xFCck bin, war beides weg.",3.8,"Deniz"),await this.wait(1.2),h.ui.addMsg("them","\u{1F642}"),n.vibrate(),await this.wait(1.4),e.lookTarget=null,h.ui.togglePhone(!0),await this.wait(3.2),await this.say("\u2026Leon? Was ist?",2.6,"Deniz"),await this.wait(.8),h.ui.togglePhone(!1),await this.fade(1,.05),n.sting("reveal"),await this.wait(2),await this.narr(["Wir sind am n\xE4chsten Morgen mit meinem Vater zur Polizei.","Sie haben die H\xFCtte gefunden. Und den Keller.","Er war leer. Keine Fotos, keine Karte, kein Ger\xE4t. Nur die L\xFCftung lief noch.","Deniz' Handy wurde nie gefunden.","Alle meinten, der Schrei war bestimmt ein Fuchs.","F\xFCchse schreien in der Ranzzeit. Im Januar.","Nicht im Oktober."],{perPara:3.2}),h.ui.clockShow(!1),await this.card("LOCKRUF","Danke f\xFCrs Spielen.",4),h.onEnd&&h.onEnd()}},Oy=[[-72.2,136.4,2.4],[-75.2,124,1.6],[-92,105.4,1.2],[-97,106.6,1.2],[-101.5,106,1]];function By(s,t){let e=[{from:"day",text:"Gestern"},{from:"me",text:"mach mal ne pin rein, jeder kann an dein handy"},{from:"them",text:"wer soll das schon klauen"},{from:"day",text:"Heute"}];return s===0?(e.push({from:"them",text:"hast du was gefunden \u{1F642}"}),e):((s>=2||s===1&&t&&t!=="start")&&e.push({from:"them",text:"bist du noch wach"},{from:"them",text:"hab stress mit meinem vater"},{from:"them",text:"kann ich heute bei dir schlafen?"},{from:"me",text:"klar, komm vorbei"},{from:"them",text:"danke"},{from:"them",text:"bin eh grad am goetheturm"},{from:"them",text:"komm kurz hin, ist halloween. wir drehen ne runde durch den wald"},{from:"them",text:"aber ohne maps, nur mit taschenlampe"},{from:"me",text:"ok, bin in 10 min da"},{from:"them",text:"bis gleich"}),s>=3&&e.push({from:"them",text:"bin schon im wald"},{from:"them",text:"nimm den kiesweg hinterm spielplatz, einfach geradeaus"},{from:"me",text:"ernsthaft?"},{from:"them",text:"komm einfach"}),s>=4&&e.push({from:"them",text:"da steht wer hinter dir"},{from:"them",text:"spa\xDF"},{from:"me",text:"alter, lass das"},{from:"them",text:"der weg ist gesperrt oder? geh links durchs geb\xFCsch, da kommst du durch"}),s>=5&&e.push({from:"them",text:"ich hab band an die b\xE4ume gemacht. geh dem einfach nach"},{from:"me",text:"deniz?? war das du"},{from:"day",text:"Nicht zugestellt"}),s>=6&&e.push({from:"them",text:"hast du was gefunden \u{1F642}"},{from:"them",text:"du h\xE4ttest auf dem weg bleiben sollen"},{from:"them",text:"ich h\xF6r dich"}),s>=8&&e.push({from:"them",text:"bis bald leon"}),e)}function wp(s){let e=new Float32Array(2100),n=new Float32Array(700);for(let o=0;o<700;o++)e[o*3]=Math.random()*10,e[o*3+1]=Math.random()*10,e[o*3+2]=Math.random()*10,n[o]=Math.random();let i=new Be;i.setAttribute("position",new an(e,3)),i.setAttribute("rnd",new an(n,1));let r=new Pn({transparent:!0,depthWrite:!1,blending:Ai,uniforms:{camPos:{value:new L},lPos:{value:new L},lDir:{value:new L(0,0,-1)},lOn:{value:0},time:{value:0},cosA:{value:.88},amount:{value:1},pxScale:{value:1}},vertexShader:`uniform vec3 camPos, lPos, lDir; uniform float lOn, time, cosA, pxScale; attribute float rnd; varying float vB;
      void main(){
        vec3 o = position + vec3(sin(time*0.31+rnd*6.3), sin(time*0.17+rnd*9.1)*0.6 - time*0.04, cos(time*0.23+rnd*3.7)) * 0.45;
        vec3 w = camPos + mod(o - camPos + 5.0, 10.0) - 5.0;
        vec3 d = w - lPos; float L = length(d);
        float cone = smoothstep(cosA, cosA + 0.05, dot(d / L, lDir));
        vB = cone * lOn * clamp(1.0 - L / 8.0, 0.0, 1.0) * smoothstep(0.25, 0.8, L) * (0.45 + 0.55 * sin(time * 1.7 + rnd * 40.0));
        vec4 mv = viewMatrix * vec4(w, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(5.0 * pxScale / max(0.3, -mv.z), 1.0, 4.0);
      }`,fragmentShader:"uniform float amount; varying float vB; void main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.1, length(c)); gl_FragColor = vec4(vec3(0.85, 0.88, 0.95) * vB * a * 0.55 * amount, 1.0); }"}),a=new fa(i,r);return a.frustumCulled=!1,s.add(a),o=>{let l=r.uniforms,c=h.player;l.time.value=h.time,l.camPos.value.copy(h.camera.position),l.lPos.value.copy(c.flash.position),l.lDir.value.copy(c.flashDir),l.lOn.value=c.flash.intensity/Math.max(1,c.flashIntensity),l.pxScale.value=(h.post?h.post.rt.height:540)/540;let u=c.p.y<-1||c.p.x>400||c.p.x>-64.6&&c.p.x<-59.4&&c.p.z>137.9&&c.p.z<142.1;l.amount.value+=((u?1.6:.6)-l.amount.value)*Math.min(1,o*2)}}function Ep(s){let t=(()=>{let r=document.createElement("canvas");r.width=32,r.height=32;let a=r.getContext("2d");a.fillStyle="#7a4a22",a.beginPath(),a.moveTo(2,16),a.quadraticCurveTo(16,2,30,16),a.quadraticCurveTo(16,30,2,16),a.fill(),a.strokeStyle="#4a2a12",a.beginPath(),a.moveTo(2,16),a.lineTo(30,16),a.stroke();let o=new pn(r);return o.colorSpace=mn,o})(),e=new Me({map:t,alphaTest:.5,side:Se,color:new $t(1.6,1.6,1.6)}),n=new Jt(.09,.09),i=[];for(let r=0;r<45;r++){let a=new X(n,e);a.visible=!1,s.add(a),i.push({m:a,y:0,v:new L,spin:new L,alive:!1})}return r=>{let a=h.player.p,o=a.x<400&&a.y>-1&&a.z>-74&&a.x>-86;for(let l of i){if(!o){l.m.visible=!1,l.alive=!1;continue}if(!l.alive){if(Math.random()>r*1.5)continue;let f=Math.random()*Math.PI*2,d=1.5+Math.random()*10;l.m.position.set(a.x+Math.cos(f)*d,a.y+5+Math.random()*4,a.z+Math.sin(f)*d),l.v.set((Math.random()-.5)*.4,-.55-Math.random()*.35,(Math.random()-.5)*.4),l.spin.set(Math.random()*3,Math.random()*3,Math.random()*3),l.alive=!0,l.m.visible=!0}let c=h.time;l.m.position.x+=(l.v.x+Math.sin(c*1.3+l.spin.x)*.35)*r,l.m.position.z+=(l.v.z+Math.cos(c*1.1+l.spin.y)*.35)*r,l.m.position.y+=l.v.y*r,l.m.rotation.x+=l.spin.x*r,l.m.rotation.y+=l.spin.y*r,l.m.rotation.z+=l.spin.z*r;let u=h.terrain?h.terrain.height(l.m.position.x,l.m.position.z):0;l.m.position.y<u+.03&&(l.alive=!1,l.m.visible=!1)}}}var zy={walk:.085,sprint:.26,crouch:.018,crawl:.015},Hy={woodfloor:1,stairs:1.15,tile:1.1,carpet:.45,rug:.45,concrete:.8,asphalt:.7,sidewalk:.7,gravel:1,leaves:.9,wood:1,metal:1.3},gc=class{constructor(){this.level=0,this.listeners=[],this.creaks=[],this.listening=!1,this.lastSrc=""}reset(){this.listeners=[],this.creaks=[],this.listening=!1,this.level=0}listen(t){return this.listeners.push(t),t}addCreak(t,e,n,i,r=1){this.creaks.push({x:t,z:e,r:n,y:i,k:r,last:-9})}add(t,e,n=""){if(t<=0)return;this.level=Math.min(1,Math.max(this.level,t*1.6)),this.lastSrc=n;let i=e?e.clone?e.clone():new L(e.x,e.y,e.z):h.player.p.clone();for(let r of this.listeners)r(t,i,n)}step(t,e,n){let i=(zy[e]||.08)*(Hy[t]??.9);for(let r of this.creaks){if(Math.abs(n.y-r.y)>.6||Math.hypot(n.x-r.x,n.z-r.z)>r.r||h.time-r.last<.6)continue;r.last=h.time;let a=e==="sprint"?1.4:e==="walk"?.9:.35;h.audio.creak(new L(n.x,n.y+.05,n.z),.55*a*r.k,e==="sprint"?.45:.75),i+=.2*a*r.k,this.lastCreak=h.time}this.add(i,n,e==="sprint"?"Rennen":"Schritte")}update(t){let e=h.micLvl||0;e>.15&&this.add((e-.15)*t*3.2,h.player.p,"Mikrofon"),this.level=Math.max(0,this.level-t*.9)}};var xc=class{constructor(){this.on=!1,this.level=0,this.status="aus",this.floorDb=-62}get available(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}async enable(){if(this.on)return!0;if(!this.available)return this.status="nicht verf\xFCgbar",!1;h.audio.init();try{this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!1,autoGainControl:!1},video:!1})}catch(e){return this.status=e&&e.name==="NotAllowedError"?"Zugriff verweigert":"nicht verf\xFCgbar",this.on=!1,!1}let t=h.audio.ctx;return this.src=t.createMediaStreamSource(this.stream),this.an=t.createAnalyser(),this.an.fftSize=1024,this.an.smoothingTimeConstant=.1,this.src.connect(this.an),this.buf=new Float32Array(this.an.fftSize),this.on=!0,this.status="an",this.level=0,this.floorDb=-62,!0}disable(){if(this.stream)for(let t of this.stream.getTracks())t.stop();try{this.src&&this.src.disconnect()}catch{}this.stream=null,this.src=null,this.an=null,this.buf=null,this.on=!1,this.level=0,this.status="aus"}sample(t){if(!this.on||!this.an)return this.level=0,0;this.an.getFloatTimeDomainData(this.buf);let e=0;for(let a=0;a<this.buf.length;a++)e+=this.buf[a]*this.buf[a];let n=Math.sqrt(e/this.buf.length),i=20*Math.log10(n+1e-7);this.floorDb=i<this.floorDb?this.floorDb+(i-this.floorDb)*Math.min(1,t*2):this.floorDb+(i-this.floorDb)*Math.min(1,t*.05);let r=Math.max(0,Math.min(1,(i-Math.max(this.floorDb,-70)-8)/32));return this.level+=(r-this.level)*Math.min(1,t*(r>this.level?20:4)),this.level}};var Ap=new MessageChannel,Rp=[];Ap.port1.onmessage=()=>{let s=Rp.shift();s&&s()};var tu=()=>new Promise(s=>{Rp.push(s),Ap.port2.postMessage(0)}),eu=(s,t,e)=>new L(s,t,e),Ws=s=>String(s).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),Tp=[["Zimmer",()=>[...fs.spawn]],["OG Flur",()=>[503.2,3,6]],["Treppe unten",()=>[...fs.egSpawn]],["K\xFCche",()=>[503.2,0,4.4]],["Stra\xDFe",()=>[...Dt.homeSpawn]],["Goetheturm",()=>[6,0,-55]],["Schneise",()=>[0,0,10]],["Sperrung",()=>[0,0,50]],["Durchschlupf",()=>[-3.2,0,54.4]],["Pfad",()=>[-36,0,84]],["Zaun/Tor",()=>[-76,0,106]],["H\xFCtte",()=>[-67.5,0,133.2]],["Keller",()=>[-62,-3.2,145]],["Schacht-Ausgang",()=>[-71.9,0,142.2]],["Bach",()=>[-82.6,0,106]],["Gasse",()=>[-95,0,106]],["G\xE4rten",()=>[-112,0,106]]],yc=class{constructor(){this.on=!1,this.everOn=!1,this.panelOpen=!1,this.god=!1,this.ignore=!1,this.noclip=!1,this.fly=!1,this.flySpeed=10,this.showCol=!1,this.showReg=!0,this.showLabels=!0,this.timeScale=1,this.stepOnce=!1,this.seg=null,this.el=document.getElementById("dev"),this.hud=document.getElementById("devhud"),this.rep=document.getElementById("replay"),this.vizT=0,this.uiT=0,this.viz=null,this.labels=[],this.initKeys()}beginSegment(t,e){let n=Math.floor(h.time*1e3)*2654435761+t*97>>>0;Kh(n),this.seg={ch:t,cp:e,t0:h.time,seed:n,dev0:this.flags(),frames:[],events:[],marks:[],checks:[]}}flags(){return{god:this.god,ignore:this.ignore,noclip:this.noclip,fly:this.fly,flySpeed:this.flySpeed}}get frame(){return this.seg?this.seg.frames.length:0}record(t,e){let n=this.seg;if(!n||h.replaying)return;let i=Ut.st;if(n.frames.push([t,i.held,i.hit,i.lx,i.ly,h.micLvl||0,e?1:0,i.ax||0,i.az||0]),n.frames.length%30===0){let r=h.player.p;n.checks.push([n.frames.length,+r.x.toFixed(3),+r.y.toFixed(3),+r.z.toFixed(3),h.story.chapter])}}mark(t){let e=this.seg;!e||h.replaying||e.marks.push({f:e.frames.length,label:t,t:h.time-e.t0,ch:h.story.chapter})}ev(t,e,n){this.seg&&!h.replaying&&this.seg.events.push({f:this.seg.frames.length,type:t,a:e,b:n}),this.apply({type:t,a:e,b:n})}apply(t){if(t.type==="set")this[t.a]=t.b,t.a==="fly"&&t.b&&(this.noclip=!0);else if(t.type==="trig"){let e=this.triggers().find(n=>n[1]===t.a);e&&e[2]()}else if(t.type==="tp")h.player.teleport(t.a[0],t.a[1],t.a[2],h.player.yaw,h.player.pitch);else if(t.type==="unstuck")h.story.unstuck();else if(t.type==="use"){let e=h.world.interacts.find(n=>!(n.once&&n.used)&&n.enabled()&&String(typeof n.text=="function"?n.text():n.text).includes(t.a));e&&h.player.use(e)}else t.type==="reply"?(h.ui.togglePhone(!0),h.ui.chooseReply(t.a)):t.type==="look"&&(h.player.yaw=t.a[0],h.player.pitch=t.a[1])}plan(t){if(!this.on)return[t];if(this.timeScale===0)return this.stepOnce?(this.stepOnce=!1,[1/60]):[];if(this.timeScale<1)return[t*this.timeScale];let e=Math.max(1,Math.round(this.timeScale));return new Array(e).fill(t)}frameBack(t,e){let n=this.seg.frames,i=0,r=Math.min(t,n.length);for(;r>0&&i<e;)r--,i+=n[r][0];return r}rewind(t){return this.seg?this.rewindTo(this.frameBack(this.seg.frames.length,t)):Promise.resolve()}async rewindTo(t){let e=this.seg;if(!e||this.busy||!h.simStep)return;this.busy=!0;let n=this.flags();t=Math.max(0,Math.min(t,e.frames.length));let i=e.frames,r=e.events;h.replaying=!0,this.rep.classList.add("show"),this.rep.textContent="SPULE ZUR\xDCCK \u2026";let a=h.audio;a.mute1=!0,h.timers.length=0,h.ui.say(null),h.ui.hint(null),h.ui.death(!1),h.ui.closeNote();for(let d of["card","narration"])document.getElementById(d).classList.remove("show");h.ui.el.fade.style.transition="none",h.ui.el.fade.style.opacity=0,h.time=e.t0,Kh(e.seed),Object.assign(this,e.dev0),Ut.apply({held:0,hit:0,lx:0,ly:0}),h.pendingRun=null,h.story.run(e.ch,!0,e.cp);let o=0,l=h.story.resolved,c=1,u=performance.now();for(let d=0;d<t;d++){let p=!1;for(;o<r.length&&r[o].f===d;)this.apply(r[o]),o++,p=!0;p&&await tu();let m=i[d];Ut.apply({held:m[1],hit:m[2],lx:m[3],ly:m[4],ax:m[7]||0,az:m[8]||0}),h.micLvl=m[5],c+=h.simStep(m[0],!0),m[6]&&(c||h.story.resolved!==l||m[2])&&(c=0,await tu(),l=h.story.resolved),(d&511)===511&&(this.rep.textContent=`SPULE ZUR\xDCCK \u2026 ${Math.round(d/t*100)} %`,await tu())}i.length=t,e.events=r.filter(d=>d.f<t),e.marks=e.marks.filter(d=>d.f<=t),e.checks=e.checks.filter(d=>d[0]<=t),h.replaying=!1;for(let[d,p]of Object.entries(n))this[d]!==p&&this.ev("set",d,p);a.mute1=!1,Ut.apply({held:0,hit:0,lx:0,ly:0});let f=e.checks[e.checks.length-1];this.lastCheck=f&&f[0]===t?Math.hypot(f[1]-h.player.p.x,f[3]-h.player.p.z):null,this.lastReplayMs=Math.round(performance.now()-u),this.rep.classList.remove("show"),this.busy=!1,this.renderPanel(!0)}triggers(){if(this._trig)return this._trig;let t=()=>h.objects,e=()=>h.audio,n=()=>h.player,i=(o,l=0)=>{let c=n().forward();return c.y=0,c.normalize(),n().p.clone().addScaledVector(c,o).add(eu(0,l,0))},r=(o,l=0)=>i(-o,l),a=o=>{let l=h.world.groundAt(o.x,o.z,o.y+3);return isFinite(l)?l:o.y};return this._trig=[["Jumpscares","branch","Ast f\xE4llt (am Baum bei der H\xFCtte)",()=>{let o=h.story;o.resetBranch(!1);let l=t().branch.group,[c,u]=h.branchTree,f=h.terrain.height(c-2.4,u);e().branchFall(l.position.clone(),eu(c-2.4,f,u)),e().sting("hard"),h.post.scare(.9);let d=0,p=l.position.y,m=l.rotation.z;o.addUp(x=>{if(d>=1)return;d=Math.min(1,d+x/.55);let g=d*d;l.position.y=p+(f+.25-p)*g,l.rotation.z=m+(Math.PI/2-m)*g}),o.after(.6,()=>{o.branchCol.enabled=!0})}],["Jumpscares","silhouette","Silhouette vor dir",()=>{let o=t().silhouette,l=i(12);o.root.position.set(l.x,a(l),l.z),o.root.rotation.y=n().yaw,o.stand(),o.root.visible=!0,e().sting("soft"),h.story.after(4,()=>{o.root.visible=!1})}],["Jumpscares","flood","Flutlicht + Vogelscheuche",()=>{t().flood.on(),e().floodlight(eu(-113,2.6,100.4)),e().sting("hard"),h.post.scare(1),h.story.after(5,()=>t().flood.off())}],["Jumpscares","ruf2","RUF 2 (Lautsprecher-Schrei, nah)",()=>{e().scream(i(1.5,1),"speaker",1.4),e().sting("hard"),h.post.scare(1),n().shake(1.2,.6)}],["Jumpscares","manscare","Mann direkt vor dir",()=>{let o=t().man;o.show(!0);let l=i(2.2);o.H.root.position.set(l.x,a(l),l.z),o.H.root.rotation.y=n().yaw+Math.PI,o.H.stand(),e().sting("hard"),h.post.scare(1),n().shake(1,.5)}],["Jumpscares","dadcatch","Vater erwischt dich",()=>{let o=h.story;if(!o.dad||!h.objects.home)return;let l=o.dad;l.man.root.visible=!0;let c=i(1);l.pos.set(c.x,n().p.y,c.z),l.yaw=n().yaw+Math.PI,l.apply(),e().sting("hard"),h.post.scare(1),h.ui.say("LEON! WAS MACHST DU DA?!",2.4,"Papa"),o.after(2.5,()=>{l.mode!=="patrol"&&l.mode!=="check"&&(l.man.root.visible=!1)})}],["Sounds","screamFar","Schrei (fern)",()=>e().scream(Dt.speaker,"distant",1.2)],["Sounds","steps","Schwere Schritte hinter dir",()=>{for(let o=0;o<4;o++)h.story.after(o*.5,()=>e().heavyStep(r(4-o*.6,.2),1))}],["Sounds","twig","Ast knackt hinter dir",()=>e().branchSnap(r(6,.2))],["Sounds","owl","Eule",()=>e().owl(i(20,10))],["Sounds","crow","Kr\xE4he",()=>e().crow(i(15,8))],["Sounds","creak","Knarzen",()=>e().creak(i(2,.3),1,1)],["Sounds","slam","T\xFCr knallt",()=>e().slam(i(5,1),1)],["Sounds","fence","Zaun rasselt",()=>e().fenceRattle(r(5,1),1)],["Sounds","vibrate","Handy vibriert",()=>e().vibrate()],["Sounds","stingH","Stinger hart",()=>e().sting("hard")],["Sounds","stingS","Stinger weich",()=>e().sting("soft")],["Sounds","hbOn","Herzschlag an",()=>e().heartbeat(!0,1.8)],["Sounds","hbOff","Herzschlag aus",()=>e().heartbeat(!1)],["Gegner","manShow","Mann zeigen (10 m vor dir)",()=>{let o=t().man;o.show(!0);let l=i(10);o.H.root.position.set(l.x,a(l),l.z),o.H.root.rotation.y=n().yaw+Math.PI,o.H.stand()}],["Gegner","manHide","Mann verstecken / Jagd stoppen",()=>{h.story.chase=null,t().man.show(!1),e().heartbeat(!1)}],["Gegner","chase","Mann jagt dich (14 m hinter dir)",()=>{let o=t().man;o.show(!0);let l=r(14);l.y=a(l),o.H.root.position.copy(l),h.story.startChase({pos:l,path:[]})}],["Gegner","dadWake","Vater: Runde in die K\xFCche",()=>{let o=h.story.dad;o&&o.mode!=="off"&&o.wakeAndPatrol()}],["Gegner","dadCheck","Vater: T\xFCr auf, schaut in den Flur",()=>{let o=h.story.dad;o&&o.mode==="sleep"&&(o.alert=1.05)}],["Gegner","dadSleep","Vater: zur\xFCck ins Bett",()=>{let o=h.story.dad;o&&o.mode!=="off"&&(o.backToBed(),o.alert=0)}],["T\xFCren","hutDoor","H\xFCttent\xFCr auf/zu",()=>{let o=t().hutDoor;o._open=!o._open,o._open?o.open():o.close()}],["T\xFCren","hatch","Luke auf/zu",()=>{let o=t().hatch;o.state.open?(o.close(),e().slam(o.pos,1)):o.open()}],["T\xFCren","gate","Tor auf/zu",()=>{let o=t().gate;o.col.enabled?o.open():o.close()}],["T\xFCren","front","Haust\xFCr auf/zu",()=>{let o=t().home.frontDoor;o.set(o._open?0:1,!0),o._open=!o._open}],["T\xFCren","pdoor","Elternt\xFCr auf/zu",()=>{let o=t().home;o._pd=!o._pd,o.parentsDoor.set(o._pd?1:0,!0)}],["T\xFCren","fan","L\xFCftung an/aus",()=>{let o=t().fan;o.setOn(!o.running)}],["T\xFCren","tube","Neonr\xF6hre an/aus",()=>{let o=t().tube;o.set(!o.state.on)}]],this._trig}initKeys(){window.addEventListener("keydown",t=>{let e=t.target;if(e&&(e.tagName==="TEXTAREA"||e.tagName==="INPUT"&&!["range","checkbox","button"].includes(e.type)||e.isContentEditable)||Ut.capture)return;if(t.key==="+"||t.code==="NumpadAdd"){t.preventDefault(),t.repeat||this.toggle();return}if(!this.on||t.repeat)return;let i={KeyV:()=>this.ev("set","fly",!this.fly),KeyN:()=>this.ev("set","noclip",!this.noclip),KeyB:()=>{this.showCol=!this.showCol,this.vizT=0},KeyR:()=>this.rewind(5),KeyT:()=>{let r=[1,.25,.5,2,4];this.timeScale=r[(r.indexOf(this.timeScale)+1)%r.length]},KeyP:()=>{this.timeScale=this.timeScale===0?1:0},KeyO:()=>{this.timeScale=0,this.stepOnce=!0}};i[t.code]&&h.started&&(i[t.code](),this.renderPanel(!0))}),window.addEventListener("wheel",t=>{this.on&&this.fly&&Ut.locked&&this.ev("set","flySpeed",Math.max(1,Math.min(80,this.flySpeed*(t.deltaY>0?.85:1.18))))},{passive:!0})}toggle(){h.started&&(document.body.classList.toggle("devtouch",!!h.touchOn),this.on||(this.on=!0,this.everOn=!0,this.exposeHooks()),this.panelOpen=!this.panelOpen,this.el.classList.toggle("show",this.panelOpen),document.body.classList.toggle("devopen",this.panelOpen),this.panelOpen?(this.renderPanel(!0),h.touchOn||Ut.unlock()):h.started&&!h.paused&&!h.touchOn&&Ut.lock().catch(()=>{}))}disable(){this.on=!1,this.panelOpen=!1,this.el.classList.remove("show"),document.body.classList.remove("devopen");for(let t of["god","ignore","noclip","fly"])this[t]&&this.ev("set",t,!1);this.timeScale=1,this.showCol=!1,this.clearViz(),h.started&&!h.paused&&!h.touchOn&&Ut.lock().catch(()=>{})}exposeHooks(){h.exposeHooks&&h.exposeHooks()}renderPanel(t=!1){this.panelOpen&&((!this.built||t)&&this.build(),this.updateStatus())}build(){this.built=!0;let t=(o,l)=>`<button data-t="${o}" class="${this[o]?"on":""}">${l}</button>`,e=this.seg,n=e?e.marks.slice(-24).map(o=>`<div class="mk"><span>${Ws(o.label)}</span><span>${o.t.toFixed(1)} s <button data-mark="${o.f}">\u21BA davor</button></span></div>`).join(""):"",i={};for(let[o,l,c]of this.triggers())(i[o]=i[o]||[]).push(`<button data-trig="${l}">${Ws(c)}</button>`);let r=Object.entries(Sp).flatMap(([o,l])=>l.map(([c,u])=>`<button data-cp="${o}:${c}">${o}: ${u}</button>`)).join("");this.el.innerHTML=`<div class="hd"><b>GODMODE</b><span><button data-a="close">schlie\xDFen (+)</button> <button data-a="off">aus</button></span></div>
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
      <h4>KAPITEL</h4>${ci.map(o=>`<button data-ch="${o.id}">${o.id}: ${o.sub}</button>`).join("")}
      <h4>CHECKPOINTS</h4>${r}
      <h4>TELEPORT</h4>${Tp.map(([o],l)=>`<button data-tp="${l}">${o}</button>`).join("")}
      <h4>${h.touchOn?"HANDY":"TASTEN (GODMODE AKTIV)"}</h4>${h.touchOn?'<div class="keys">Fliegen: Stick + Kamera, \u2912 hoch, \u2913 runter. Panel schlie\xDFen: \u201Eschlie\xDFen\u201C oben.</div>':""}<div class="keys">+ Panel \xB7 V Fliegen \xB7 N Noclip \xB7 B Kollisionen \xB7 R 5 s zur\xFCck \xB7 T Zeitfaktor \xB7 P Zeit anhalten \xB7 O Einzelbild<br>Fliegen: WASD + Maus, Leertaste hoch, ${Ws(String(Ut.key("crouch")).replace("Key",""))} runter, Shift \xD74, Mausrad Tempo</div>
      </div>`,this.el.onclick=o=>{let l=o.target.closest("button");if(!l)return;let c=l.dataset;if(c.t)this.ev("set",c.t,!this[c.t]);else if(c.v)this[c.v]=!this[c.v],this.vizT=0,this.showCol||this.clearViz();else if(c.ts!==void 0)this.timeScale=+c.ts;else if(c.rw)this.rewind(+c.rw);else if(c.mark)this.rewindTo(this.frameBack(+c.mark,1.5));else if(c.trig)this.ev("trig",c.trig);else if(c.ch!==void 0)h.story.run(+c.ch,!0);else if(c.cp){let[u,f]=c.cp.split(":");h.story.run(+u,!0,f)}else if(c.tp!==void 0){let u=Tp[+c.tp][1](),f=h.world.groundAt(u[0],u[2],u[1]+2);this.ev("tp",[u[0],isFinite(f)?f:u[1],u[2]])}else c.a==="step"?(this.timeScale=0,this.stepOnce=!0):c.a==="segstart"?this.rewindTo(0):c.a==="close"?this.toggle():c.a==="off"&&this.disable();this.build(),this.updateStatus()};let a=this.el.querySelector("#devfs");a.oninput=()=>{this.ev("set","flySpeed",+a.value),this.el.querySelector("#devfsv").textContent=a.value}}updateStatus(){let t=this.el.querySelector("#devstat");if(!t)return;let e=h.player.p,n=this.seg,i=h.world.regions.filter(o=>o.enabled&&h.world.regionContains(o,e.x,e.z)).map(o=>o.label).join(", ")||"\u2013",r=(h.player.blockedBy||[]).map(o=>o.c.region?`${o.c.label}${o.c.disabled?" (w\xE4re frei: \u201E"+o.c.disabled+"\u201C deaktiviert)":""}`:`#${o.c.id} ${o.c.label||o.c.type}`).join(" \xB7 "),a=h.story.dad;t.innerHTML=`Kapitel ${h.story.chapter} ${Ws(ci[h.story.chapter]?ci[h.story.chapter].sub:"")} \xB7 Zeit im Segment ${n?(h.time-n.t0).toFixed(1):"\u2013"} s \xB7 Frames ${n?n.frames.length:0}
Pos ${e.x.toFixed(2)} ${e.y.toFixed(2)} ${e.z.toFixed(2)} \xB7 Blick ${(h.player.yaw*57.3%360).toFixed(0)}\xB0
Region: ${Ws(i)}
Ziel: ${Ws(h.ui.currentObjective||"\u2013")}
Ausdauer ${(h.player.stamina*100).toFixed(0)} % \xB7 Zeitfaktor ${this.timeScale}\xD7 \xB7 Seed ${jf()}
${a&&a.mode!=="off"?`Vater: ${a.mode} \xB7 Alarm ${a.alert.toFixed(2)} \xB7 Stufe ${a.stage} \xB7 Verdacht ${a.sus.toFixed(2)}
`:""}${h.story.chase?`Jagd: ${h.story.chase.state} \xB7 Abstand ${Math.hypot(e.x-h.story.chase.pos.x,e.z-h.story.chase.pos.z).toFixed(1)} m
`:""}${this.lastReplayMs!==void 0?`Letztes R\xFCckspulen: ${this.lastReplayMs} ms${this.lastCheck!==null&&this.lastCheck!==void 0?" \xB7 Abweichung "+this.lastCheck.toFixed(3)+" m":""}
`:""}<span class="blk">${r?"Blockiert durch: "+Ws(r):""}</span>`}update(t){if(!this.on){this.hud.classList.remove("show");return}if(this.uiT-=t,this.uiT<0){this.uiT=.25,this.panelOpen&&this.updateStatus();let e=[this.god&&"UNVERWUNDBAR",this.ignore&&"UNSICHTBAR",this.fly?"FLUG "+Math.round(this.flySpeed)+" m/s":this.noclip&&"NOCLIP",this.timeScale!==1&&(this.timeScale===0?"ZEIT ANGEHALTEN":this.timeScale+"\xD7"),this.showCol&&"KOLLISION"].filter(Boolean),n=(h.player.blockedBy||[]).map(i=>i.c.region?i.c.label:`#${i.c.id} ${i.c.label||i.c.type}`).join(" \xB7 ");this.hud.textContent="GODMODE "+(e.length?"\xB7 "+e.join(" \xB7 "):"")+(n?`
blockiert: `+n:""),this.hud.classList.add("show")}this.showCol&&(this.vizT-=t,this.vizT<0&&(this.vizT=.4,this.buildViz()))}clearViz(){this.viz&&(h.scene.remove(this.viz),this.viz.geometry.dispose(),this.viz=null);for(let t of this.labels)h.scene.remove(t),t.material.map.dispose(),t.material.dispose();this.labels=[]}buildViz(){this.clearViz();let t=h.player.p,e=26,n=h.world,i=[],r=[],a=[1,.25,.2],o=[.45,.45,.45],l=[.3,1,.4],c=[.25,.45,.3],u=(x,g,y)=>{i.push(x[0],x[1],x[2],g[0],g[1],g[2]),r.push(...y,...y)},f=(x,g,y,b,E,S,_)=>{let w=[[x,E,y],[g,E,y],[g,E,b],[x,E,b],[x,S,y],[g,S,y],[g,S,b],[x,S,b]];for(let[v,M]of[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]])u(w[v],w[M],_)},d=[],p=x=>[Math.max(x.minY,t.y-.5),Math.min(x.maxY,t.y+2.6)];for(let x of n.colliders){let g=x.type==="box"?(x.minX+x.maxX)/2:x.type==="obb"?x.cx:x.x,y=x.type==="box"?(x.minZ+x.maxZ)/2:x.type==="obb"?x.cz:x.z,b=Math.hypot(g-t.x,y-t.z);if(b>e+6)continue;let[E,S]=p(x);if(S<=E)continue;let _=x.enabled?a:o;if(x.type==="box")f(x.minX,x.maxX,x.minZ,x.maxZ,E,S,_);else if(x.type==="circle"){for(let v=0;v<12;v++){let M=v/12*6.283,R=(v+1)/12*6.283;for(let C of[E,S])u([x.x+Math.cos(M)*x.r,C,x.z+Math.sin(M)*x.r],[x.x+Math.cos(R)*x.r,C,x.z+Math.sin(R)*x.r],_)}u([x.x+x.r,E,x.z],[x.x+x.r,S,x.z],_)}else{let w=[[-x.hw,-x.hd],[x.hw,-x.hd],[x.hw,x.hd],[-x.hw,x.hd]].map(([v,M])=>[x.cx+v*x.cos-M*x.sin,x.cz+v*x.sin+M*x.cos]);for(let v=0;v<4;v++){let M=w[v],R=w[(v+1)%4];u([M[0],E,M[1]],[R[0],E,R[1]],_),u([M[0],S,M[1]],[R[0],S,R[1]],_),u([M[0],E,M[1]],[M[0],S,M[1]],_)}}d.push({d:b,c:x,x:g,z:y,y:S+.1,t:`#${x.id} ${x.label||x.type}${x.enabled?"":" (aus)"}`})}if(this.showReg){let x=(g,y)=>{let b=n.groundAt(g,y,t.y+1.5);return(isFinite(b)?b:t.y)+.06};for(let g of n.regions){let y=g.enabled?l:c;if(g.type==="box"){if(Math.max(Math.abs(t.x-(g.minX+g.maxX)/2)-(g.maxX-g.minX)/2,Math.abs(t.z-(g.minZ+g.maxZ)/2)-(g.maxZ-g.minZ)/2)>e)continue;let b=(E,S,_,w)=>{let v=Math.max(1,Math.ceil(Math.hypot(_-E,w-S)/2));for(let M=0;M<v;M++){let R=E+(_-E)*M/v,C=S+(w-S)*M/v,k=E+(_-E)*(M+1)/v,D=S+(w-S)*(M+1)/v;u([R,x(R,C),C],[k,x(k,D),D],y)}};b(g.minX,g.minZ,g.maxX,g.minZ),b(g.maxX,g.minZ,g.maxX,g.maxZ),b(g.maxX,g.maxZ,g.minX,g.maxZ),b(g.minX,g.maxZ,g.minX,g.minZ),d.push({d:Math.hypot((g.minX+g.maxX)/2-t.x,(g.minZ+g.maxZ)/2-t.z),x:(g.minX+g.maxX)/2,z:(g.minZ+g.maxZ)/2,y:t.y+.3,t:"Region "+g.label+(g.enabled?"":" (aus)"),reg:!0})}else if(g.type==="circle"){if(Math.hypot(g.x-t.x,g.z-t.z)-g.radius>e)continue;let b=32;for(let E=0;E<b;E++){let S=E/b*6.283,_=(E+1)/b*6.283,w=g.x+Math.cos(S)*g.radius,v=g.z+Math.sin(S)*g.radius,M=g.x+Math.cos(_)*g.radius,R=g.z+Math.sin(_)*g.radius;u([w,x(w,v),v],[M,x(M,R),R],y)}}else{let b=g.points;for(let E=0;E<b.length-1;E++){let[S,_]=b[E],[w,v]=b[E+1];if(Math.min(Math.hypot(S-t.x,_-t.z),Math.hypot(w-t.x,v-t.z))>e+10)continue;let M=w-S,R=v-_,C=Math.hypot(M,R)||1,k=-R/C*g.radius,D=M/C*g.radius,B=Math.max(1,Math.ceil(C/2));for(let I of[1,-1])for(let H=0;H<B;H++){let Y=S+M*H/B+k*I,Z=_+R*H/B+D*I,nt=S+M*(H+1)/B+k*I,K=_+R*(H+1)/B+D*I;u([Y,x(Y,Z),Z],[nt,x(nt,K),K],y)}}}}}let m=new Be;if(m.setAttribute("position",new ce(i,3)),m.setAttribute("color",new ce(r,3)),this.viz=new da(m,new Mr({vertexColors:!0,depthTest:!1,transparent:!0,opacity:.85,fog:!1})),this.viz.renderOrder=999,this.viz.frustumCulled=!1,h.scene.add(this.viz),this.showLabels){d.sort((x,g)=>x.d-g.d);for(let x of d.slice(0,16))this.labels.push(this.label(x.t,x.x,x.y,x.z,x.reg))}}label(t,e,n,i,r){let a=document.createElement("canvas");a.width=512,a.height=64;let o=a.getContext("2d");o.font="26px Consolas, monospace";let l=Math.min(510,o.measureText(t).width+16);o.fillStyle="rgba(0,0,0,.65)",o.fillRect(0,8,l,46),o.fillStyle=r?"#7dff8a":"#ffb0a0",o.fillText(t,8,40);let c=new pn(a),u=new Ms(new ns({map:c,depthTest:!1,transparent:!0,fog:!1}));return u.scale.set(2.4,.3,1),u.center.set(0,.5),u.position.set(e,n,i),u.renderOrder=1e3,h.scene.add(u),u}};var Ba=58,Cp=2.3,vc=class{constructor(){this.root=document.getElementById("touch"),this.ptr=new Map,this.crouchOn=!1,this.on=!1,this.build()}enable(t){this.on=t,h.touchOn=t,document.body.classList.toggle("touch",t),t?document.pointerLockElement&&document.exitPointerLock():(this.releaseAll(),document.body.classList.remove("phoneopen"))}build(){this.root.innerHTML=`
      <div class="tjoy"><div class="base"></div><div class="knob"></div></div>
      <button class="tb pause" data-act="pause" aria-label="Pause">\u2630</button>
      <div class="tcol">
        <button class="tb" data-k="flash">\u2600<span>Licht</span></button>
        <button class="tb" data-k="phone">\u25AF<span>Handy</span></button>
        <button class="tb ctx" data-k="app">\u21C4<span>Karte</span></button>
      </div>
      <div class="tbtns">
        <button class="tb tog" data-k="crouch">\u2913<span>Ducken</span></button>
        <button class="tb" data-k="jump">\u2912<span>Springen</span></button>
        <button class="tb big" data-k="use">\u270B<span>Benutzen</span></button>
      </div>
      <div class="treply"><button class="tb rp" data-k="reply1"></button><button class="tb rp" data-k="reply2"></button></div>`,this.joyEl=this.root.querySelector(".tjoy"),this.knob=this.root.querySelector(".knob"),this.btn={};for(let i of this.root.querySelectorAll("[data-k]"))this.btn[i.dataset.k]=i;let t=this.root;t.addEventListener("pointerdown",i=>this.down(i),{passive:!1}),t.addEventListener("pointermove",i=>this.move(i),{passive:!1});for(let i of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(i,r=>this.up(r));t.addEventListener("contextmenu",i=>i.preventDefault());let e=i=>{i.target&&i.target.closest&&i.target.closest("#dev, #menu")||this.on&&h.started&&!h.paused&&i.preventDefault()};document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("gesturestart",e,{passive:!1}),document.addEventListener("dblclick",e,{passive:!1});let n=document.querySelector("#rotate .go");n&&n.addEventListener("click",()=>document.body.classList.add("portraitok"))}press(t){let e="Touch_"+t;Ut.keys.has(e)||Ut.pressed.add(e),Ut.keys.add(e)}release(t){Ut.keys.delete("Touch_"+t)}releaseAll(){for(let t of Object.keys(this.btn))(t!=="crouch"||!this.crouchOn)&&this.release(t);this.ptr.clear(),Ut.ax=0,Ut.az=0,this.showJoy(null)}down(t){if(!this.on)return;t.preventDefault();let e=t.target.closest("button");try{this.root.setPointerCapture(t.pointerId)}catch{}if(e){if(e.dataset.act==="pause"){h.pauseGame&&h.pauseGame();return}let n=e.dataset.k;if(n==="crouch"){this.crouchOn=!this.crouchOn,this.crouchOn?this.press("crouch"):this.release("crouch"),e.classList.toggle("on",this.crouchOn);return}this.press(n),e.classList.add("down"),this.ptr.set(t.pointerId,{kind:"btn",k:n,el:e});return}if(h.phoneOpen){let n=document.elementsFromPoint(t.clientX,t.clientY).find(i=>i.closest&&i.closest("#phone .reply .opt"));if(n){let i=n.closest(".opt"),r=[...document.querySelectorAll("#phone .reply .opt")].indexOf(i);if(r===0||r===1){let a="reply"+(r+1);this.press(a),i.classList.add("down"),this.ptr.set(t.pointerId,{kind:"btn",k:a,el:i});return}}}if(t.clientX<innerWidth*.42){for(let n of this.ptr.values())if(n.kind==="joy")return;this.ptr.set(t.pointerId,{kind:"joy",cx:t.clientX,cy:t.clientY}),this.showJoy(t.clientX,t.clientY),this.setStick(0,0)}else this.ptr.set(t.pointerId,{kind:"look",x:t.clientX,y:t.clientY})}move(t){let e=this.ptr.get(t.pointerId);if(e)if(t.preventDefault(),e.kind==="joy"){let n=t.clientX-e.cx,i=t.clientY-e.cy,r=Math.hypot(n,i);if(r>Ba*1.6){let a=(r-Ba*1.6)/r;e.cx+=n*a,e.cy+=i*a,n=t.clientX-e.cx,i=t.clientY-e.cy,this.showJoy(e.cx,e.cy)}this.setStick(n,i)}else e.kind==="look"&&(Ut.mx+=(t.clientX-e.x)*Cp,Ut.my+=(t.clientY-e.y)*Cp,e.x=t.clientX,e.y=t.clientY)}up(t){let e=this.ptr.get(t.pointerId);e&&(this.ptr.delete(t.pointerId),e.kind==="btn"&&(this.release(e.k),e.el.classList.remove("down")),e.kind==="joy"&&(Ut.ax=0,Ut.az=0,this.showJoy(null)))}setStick(t,e){let n=Math.hypot(t,e),i=Math.min(Ba,n),r=n>0?t/n*i:0,a=n>0?e/n*i:0;this.knob.style.transform=`translate(${r}px, ${a}px)`;let o=r/Ba,l=a/Ba,c=Math.hypot(o,l);if(c<.14)o=0,l=0;else{let u=(c-.14)/.86/c;o*=u,l*=u}Ut.ax=o,Ut.az=l,this.joyEl.classList.toggle("run",Math.hypot(o,l)>.9&&l<-.45)}showJoy(t,e){let n=this.joyEl;if(t===null){n.classList.remove("act"),n.style.left="",n.style.top="",this.knob.style.transform="",n.classList.remove("run");return}n.classList.add("act"),n.style.left=t+"px",n.style.top=e+"px"}update(){if(!this.on)return;let t=h.ui,e=this.btn,n=t.reply&&h.phoneOpen&&t.phoneTab==="chat";for(let r=0;r<2;r++){let a=e["reply"+(r+1)],o=n?t.reply.options[r]:null;a.style.display=o?"block":"none",o&&a.dataset.t!==o&&(a.dataset.t=o,a.textContent=r+1+"  "+o)}e.app.style.display=h.phoneOpen&&h.phone.mapUnlocked?"":"none",e.app.querySelector("span").textContent=t.phoneTab==="map"?"Chat":"Karte",e.phone.classList.toggle("attn",!!t.reply&&!h.phoneOpen),e.phone.classList.toggle("on",!!h.phoneOpen),document.body.classList.toggle("phoneopen",!!h.phoneOpen),e.flash.classList.toggle("on",!!h.player.flashOn),e.use.classList.toggle("hot",!!h.player.current||!!h.noteOpen),e.use.querySelector("span").textContent=h.noteOpen?"Schlie\xDFen":"Benutzen";let i=document.getElementById("narration").classList.contains("show");this.root.classList.toggle("narr",i),e.jump.querySelector("span").textContent=i?"Weiter":"Springen",this.crouchOn!==e.crouch.classList.contains("on")&&e.crouch.classList.toggle("on",this.crouchOn)}};var bc,Ha,nu=performance.now(),Ga=()=>document.getElementById("clickstart");function Gy(){df();let s=new Zl({antialias:!1,powerPreference:"high-performance"});s.setPixelRatio(1),s.setSize(innerWidth,innerHeight),s.shadowMap.enabled=!0,s.shadowMap.type=Is,s.domElement.id="game",document.body.prepend(s.domElement),h.renderer=s;let t=new bs;t.fog=new oa(1382173,.05),t.background=new $t(131587),h.scene=t;let e=new kn(h.settings.fov,innerWidth/innerHeight,.04,1500);h.camera=e,bc=new ya(8229828,2763312,.5),t.add(bc),Ha=new _a(10794204,.3),Ha.position.set(-50,42,62),t.add(Ha);let n=new Jl;h.world=n,n.initLightPool(t,8),h.audio=new ac,h.ui=new rc,h.noise=new gc,h.mic=new xc;let i=rp();h.M=i,gp(t,n,i);let r=new Fr(48);yp(t,n,i,r),Mp(t,n,i,r),r.build(t),h.player=new ic(e,t);let a=wp(t),o=Ep(t);a.visual=!0,o.visual=!0,n.updaters.push(a,o),h.post=new sc(s),h.post.resize(innerWidth,innerHeight),h.story=new mc,h.dev=new yc,h.simStep=kp,h.touch=new vc,h.touch.enable(h.settings.touch==="on"||h.settings.touch!=="off"&&Kl()),h.pauseGame=()=>{h.started&&!h.paused&&_c()},addEventListener("pointerdown",l=>{l.pointerType==="touch"&&!h.touchOn&&h.settings.touch!=="off"&&h.touch.enable(!0)},!0),document.addEventListener("visibilitychange",()=>{document.hidden&&h.started&&!h.paused&&_c()}),Ut.init(s.domElement),Ut.onLockChange=l=>{if(l){h.waitLock=!1,Ga().classList.remove("show");return}h.started&&!h.paused&&!h.dev.panelOpen&&!h.waitLock&&performance.now()>(h.lockGrace||0)&&_c()},Ut.onLockFail=()=>{h.started&&!h.paused&&!h.dev.panelOpen&&!h.noLock&&!h.touchOn&&Vy()},Ga().addEventListener("click",()=>{Ut.lock().then(()=>{h.waitLock=!1,Ga().classList.remove("show")}).catch(()=>{})}),h.player.teleport(-7,0,-66,0,0);try{s.compile(t,e)}catch{}addEventListener("keydown",l=>{l.code==="F11"&&(l.preventDefault(),Dp())}),addEventListener("resize",()=>{s.setSize(innerWidth,innerHeight),e.aspect=innerWidth/innerHeight,e.updateProjectionMatrix(),h.post.resize(innerWidth,innerHeight)}),document.getElementById("loading").style.display="none",h.ui.el.fade.style.opacity=0,h.onEnd=()=>{h.started=!1,h.paused=!0,Ut.unlock(),Gr()},Gr(),requestAnimationFrame(Np)}function Vy(){h.waitLock=!0;let s=Ga();s.textContent="KLICKEN ZUM WEITERSPIELEN",s.classList.add("show")}function Pp(){return h.touchOn?Promise.resolve():Ut.lock().catch(()=>{})}var Wy=/Electron/i.test(navigator.userAgent);function Ip(){if(!h.touchOn||document.fullscreenElement)return;let s=document.documentElement;try{let t=s.requestFullscreen?s.requestFullscreen({navigationUI:"hide"}):null;t&&t.then&&t.then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}catch{}}function Xs(s){for(let t of document.querySelectorAll("#menu [data-a]"))t.addEventListener("click",e=>{h.audio.ready&&h.audio.click(),s[t.dataset.a]&&s[t.dataset.a](t,e)})}function Gr(){document.body.classList.remove("ingame"),h.ui.objective(null),h.ui.clockShow(!1),h.ui.togglePhone(!1),h.ui.say(null),h.ui.prompt(null);let s=pf();h.ui.menu(`<div class="inner">
    <h1>LOCKRUF</h1><div class="tag">INSPIRIERT VON EINER WAHREN BEGEBENHEIT</div>
    <button class="item" data-a="new">Neues Spiel</button>
    ${s.last>0?`<button class="item" data-a="continue">Fortsetzen \u2013 ${ci[s.last].name} ${ci[s.last].sub}</button>`:""}
    <button class="item" data-a="chapters">Kapitel w\xE4hlen</button>
    <button class="item" data-a="settings">Einstellungen</button>
    <button class="item" data-a="controls">Steuerung</button>
    ${Wy?'<button class="item" data-a="quit">Beenden</button>':""}
    <div class="small">Kopfh\xF6rer empfohlen. ${h.touchOn?"Handy quer halten.":"Vollbild: F11."}<br>Stadtwald Frankfurt \xB7 31. Oktober</div></div>`),Xs({new:()=>Va(0),continue:()=>Va(s.last),chapters:()=>Lp(Gr),settings:()=>ps(Gr),controls:()=>Mc(Gr),quit:()=>window.close()})}function Lp(s){h.ui.menu(`<div class="inner"><h1 style="font-size:40px">KAPITEL</h1><div class="tag">ALLE FREIGESCHALTET</div><div class="chapters">
    ${ci.map(t=>`<button class="item" data-a="ch" data-ch="${t.id}"><span>${t.name}</span>${t.sub}</button>`).join("")}
    </div><button class="item" data-a="back" style="margin-top:24px">\u2190 Zur\xFCck</button></div>`),Xs({ch:t=>Va(+t.dataset.ch),back:s})}function Xy(){let s=h.mic;return s.on?"Mikrofon: AN \u2013 nur Pegelmessung, nichts wird aufgenommen":"Mikrofon: aus"+(s.status!=="aus"?" ("+s.status+")":"")}function qy(s){h.ui.menu(`<div class="inner" style="max-width:560px"><h1 style="font-size:36px">MIKROFON</h1><div class="tag">OPTIONAL</div>
    <div class="controls" style="line-height:1.7">Wenn du laut bist (reden, husten, schreien), h\xF6rt dich der Vater im Haus \u2013 und sp\xE4ter nicht nur der.<br><br>
    Das Spiel misst daf\xFCr nur die Lautst\xE4rke, direkt auf deinem PC. Es wird <b style="min-width:0">nichts aufgenommen, gespeichert oder \xFCbertragen</b>.
    Du kannst das Mikrofon jederzeit hier oder im Pausenmen\xFC wieder ausschalten. Ohne Mikrofon l\xE4uft das Spiel ganz normal.</div>
    <button class="item" data-a="yes" style="margin-top:20px">Mikrofon aktivieren</button>
    <button class="item" data-a="no">Abbrechen</button></div>`),Xs({yes:async()=>{await h.mic.enable(),s()},no:s})}function ps(s){let t=h.settings,e=(n,i,r,a,o,l)=>`<div class="row"><label>${i}</label><input type="range" id="${n}" min="${r}" max="${a}" step="${o}" value="${l}"><span id="${n}v">${l}</span></div>`;h.ui.menu(`<div class="inner"><h1 style="font-size:40px">EINSTELLUNGEN</h1><div class="tag">&nbsp;</div>
    ${e("sens","Mausempfindlichkeit",.3,2.5,.05,t.sens)}
    ${e("bright","Helligkeit",.6,2.2,.05,t.bright??1)}
    ${e("scale","Render-Aufl\xF6sung",.4,1,.05,t.scale)}
    ${e("grain","Filmkorn",0,1.6,.05,t.grain)}
    ${e("fov","Sichtfeld",60,90,1,t.fov)}
    ${e("volume","Lautst\xE4rke",0,1,.05,t.volume)}
    <button class="item" data-a="invert">Maus invertieren: ${t.invertY?"an":"aus"}</button>
    <button class="item" data-a="quality">Grafikqualit\xE4t: ${t.quality==="low"?"niedrig (schneller)":"hoch"} \u2013 gilt ab dem n\xE4chsten Start</button>
    <button class="item" data-a="mic">${Xy()}</button>
    <button class="item" data-a="touch">Touch-Steuerung: ${t.touch==="on"?"an":t.touch==="off"?"aus":"automatisch"}${h.touchOn?" (aktiv)":""}</button>
    ${h.touchOn?`<button class="item" data-a="autos">Aufl\xF6sung automatisch senken, wenn es ruckelt: ${t.autoScale===!1?"aus":"an"}</button>`:""}
    <button class="item" data-a="full">Vollbild an/aus${h.touchOn?"":" (F11)"}</button>
    <button class="item" data-a="back" style="margin-top:24px">\u2190 Zur\xFCck</button></div>`);for(let n of["sens","bright","scale","grain","fov","volume"]){let i=document.getElementById(n);i.addEventListener("input",()=>{t[n]=+i.value,document.getElementById(n+"v").textContent=i.value,n==="scale"&&h.post.resize(innerWidth,innerHeight),n==="volume"&&h.audio.setVolume(t.volume),Wi()})}Xs({back:s,invert:()=>{t.invertY=!t.invertY,Wi(),ps(s)},full:Dp,mic:()=>{h.mic.on?(h.mic.disable(),ps(s)):qy(()=>ps(s))},quality:()=>{t.quality=t.quality==="low"?"high":"low",Wi(),ps(s)},autos:()=>{t.autoScale=t.autoScale===!1,Wi(),ps(s)},touch:()=>{t.touch=t.touch==="on"?"off":t.touch==="off"?void 0:"on",Wi(),h.touch.enable(t.touch==="on"||t.touch!=="off"&&Kl()),ps(s)}})}function Dp(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}function Mc(s){let t=h.settings;if(h.touchOn){h.ui.menu(`<div class="inner" style="max-height:92vh;overflow:auto"><h1 style="font-size:36px">STEUERUNG</h1><div class="tag">HANDY</div>
      <div class="controls" style="line-height:1.9">
      <b>Linker Daumen</b> irgendwo links aufsetzen = Stick. Ganz nach vorne schieben = rennen.<br>
      <b>Rechter Daumen</b> wischen = umsehen.<br>
      <b>\u270B</b> benutzen (f\xFCr T\xFCren und Schl\xF6sser gedr\xFCckt halten) \xB7 <b>\u2912</b> springen \xB7 <b>\u2913</b> ducken an/aus<br>
      <b>\u2600</b> Taschenlampe \xB7 <b>\u25AF</b> Handy \xB7 <b>\u21C4</b> Chat/Karte \xB7 Antworten erscheinen als Buttons<br>
      <b>\u2630</b> Pause, dort auch Godmode und \u201EIch stecke fest\u201C.</div>
      <button class="item" data-a="back" style="margin-top:18px">\u2190 Zur\xFCck</button></div>`),Xs({back:s});return}t.keys||(t.keys={...Bs});let e=Object.keys(Bs).map(n=>`<div class="row"><label>${yf[n]}</label><button class="item bind" data-a="bind" data-k="${n}" style="font-size:15px;padding:4px 12px;border:1px solid rgba(255,255,255,.25);border-radius:6px;min-width:150px;text-align:center">${Zh(t.keys[n])}${n==="sprint"&&/^Shift/.test(t.keys[n])?" (links + rechts)":""}</button></div>`).join("");h.ui.menu(`<div class="inner" style="max-height:92vh;overflow:auto;padding-right:20px"><h1 style="font-size:40px">STEUERUNG</h1><div class="tag">KLICK AUF EINE TASTE ZUM \xC4NDERN \xB7 ESC BRICHT AB</div>
    ${e}
    <div class="controls" style="margin-top:12px"><b>Maus</b> Umsehen &nbsp; <b>Esc</b> Pause &nbsp; <b>F11</b> Vollbild &nbsp; <b>+</b> Godmode</div>
    <button class="item" data-a="reset" style="margin-top:14px">Standard wiederherstellen</button>
    <button class="item" data-a="back">\u2190 Zur\xFCck</button></div>`),Xs({bind:n=>{n.textContent="Taste dr\xFCcken \u2026",Ut.capture=i=>{if(i!=="Escape"){let r=Object.keys(t.keys).find(a=>t.keys[a]===i&&a!==n.dataset.k);r&&(t.keys[r]=t.keys[n.dataset.k]),t.keys[n.dataset.k]=i,Wi()}setTimeout(()=>Mc(s),30)}},reset:()=>{t.keys={...Bs},Wi(),Mc(s)},back:()=>{Ut.capture=null,s()}})}function za(){h.ui.menu(`<div class="inner"><h1 style="font-size:46px">PAUSE</h1><div class="tag">${ci[h.story.chapter]?.name||""} \xB7 ${ci[h.story.chapter]?.sub||""}</div>
    <button class="item" data-a="resume">Weiter</button>
    <button class="item" data-a="unstuck">Ich stecke fest</button>
    <button class="item" data-a="restart">Kapitel neu starten</button>
    <button class="item" data-a="chapters">Kapitel w\xE4hlen</button>
    <button class="item" data-a="settings">Einstellungen</button>
    <button class="item" data-a="controls">Steuerung</button>
    ${h.mic.on?'<button class="item" data-a="micoff" style="color:#e0553f">\u25CF Mikrofon ist an \u2013 ausschalten</button>':""}
    ${h.touchOn?'<button class="item" data-a="god">Godmode-Panel</button>':""}
    <button class="item" data-a="title">Hauptmen\xFC</button></div>`),Xs({resume:iu,restart:()=>Va(h.story.chapter),god:()=>{iu(),h.dev.panelOpen||h.dev.toggle()},unstuck:()=>{h.dev.seg?h.dev.ev("unstuck"):h.story.unstuck(),iu()},chapters:()=>Lp(za),settings:()=>ps(za),controls:()=>Mc(za),micoff:()=>{h.mic.disable(),za()},title:()=>{h.started=!1,h.story.token++,h.audio.heartbeat(!1),h.story.chase=null;for(let s of Object.keys(h.audio.loops))!["wind","drone"].includes(s)&&!s.endsWith("_osc")&&h.audio.stopLoop(s,.3);h.dev.on&&h.dev.disable(),h.player.teleport(-7,0,-66,0,0),h.ui.fade(0,.5),Gr()}})}function _c(){h.paused=!0,document.body.classList.remove("ingame"),Ga().classList.remove("show"),h.waitLock=!1,h.audio.ctx&&h.audio.ctx.suspend(),za()}function iu(){h.lockGrace=performance.now()+1500,h.ui.menu(null),document.body.classList.add("ingame"),h.audio.ctx&&h.audio.ctx.resume(),h.paused=!1,Pp(),Ip()}function Va(s){h.audio.init(),h.audio.ctx.state!=="running"&&h.audio.ctx.resume(),h.audio.loops.wind||h.audio.startAmbience(),h.ui.menu(null),document.body.classList.add("ingame"),h.started=!0,h.paused=!1,h.lockGrace=performance.now()+1500,Pp(),Ip(),h.ui.el.fade.style.transition="none",h.ui.el.fade.style.opacity=1,h.story.run(s,!0)}var Hr={fog:.05,hemi:.55,wind:0,drone:0};function Zy(s){let t=h.player.p,e=.058,n=.5,i=.28,r="forest",a=.62,o=.42,l=t.x>-64.5&&t.x<-59.5&&t.z>138&&t.z<142&&t.y>-.5;t.x>400?(e=0,n=.035,i=.07,r="room",a=.1,o=0):t.y<-1?(e=0,n=.02,i=.16,r="cellar",a=.04,o=0):l?(e=.02,n=.16,i=.2,r="room",a=.14,o=.04):t.z<-72?(e=.026,n=.18,i=.05,r="street",a=.4,o=.25):t.z<-29?(e=.038,n=.3,i=.12):t.x<-86?(e=.045,n=.22,i=.12,r=t.x>-104.5?"room":"forest"):Math.abs(t.x)<3&&t.z<62&&(e=.052,n=.4,i=.2),h.story&&h.story.chapter===0&&(i=.3),Hr.fog=Un(Hr.fog,e,1.5,s),Hr.hemi=Un(Hr.hemi,a,2,s),h.scene.fog.density=Hr.fog,bc.intensity=Hr.hemi*(h.settings.bright??1)**.5,Ha.intensity=o;let c=h.audio;c.ready&&(c.env=r,c.setLoop("wind",n,1.5),c.setLoop("drone",i,2))}var su=14;function Yy(s){let t=h.story.chapter,e=h.player.p;if(!(h.flags.ambient||t===3&&e.z>14||t===6&&!h.story.chase)||e.x>400||e.y<-1||(su-=s,su>0))return;su=9+Math.random()*13;let i=h.audio,r=h.player.forward();r.y=0,r.normalize();let a=new L(r.z,0,-r.x),o=Math.random(),l=(c,u,f)=>e.clone().addScaledVector(r,c).addScaledVector(a,u).setY(e.y+f);o<.5?i.branchSnap(l(-(6+Math.random()*7),(Math.random()-.5)*8,.2)):o<.7?i.rustle(l(Math.random()*6,Math.random()<.5?-12:12,.3),7):o<.82?i.knock(l(28,(Math.random()-.5)*30,2)):i.crow(l(5,20,12))}function $y(s){let t=h.camera,e=s*.03;t.position.set(-14+Math.sin(e)*2,1.6,-38+Math.cos(e)*1.5),t.lookAt(-2,15+Math.sin(s*.1)*1.5,-60),h.scene.fog.density=.03,bc.intensity=.5,Ha.intensity=.35}function kp(s,t=!1){h.time+=s,h.dt=s;let e=Jf(),n=h.ui;return h.noteOpen?((Ut.actHit("use")||Ut.actHit("confirm"))&&n.closeNote(),h.player.updateCamera(s)):(Ut.actHit("phone")&&n.togglePhone(),Ut.actHit("reply1")&&n.chooseReply(0),Ut.actHit("reply2")&&n.chooseReply(1),Ut.actHit("app")&&n.switchTab(),h.player.update(s)),h.world.update(s,h.time,t),e+=h.story.update(s),t||(Zy(s),Yy(s)),e}var Ki={t:0,n:0};function Ky(s){if(!h.touchOn||h.settings.autoScale===!1||!h.started||h.paused||h.waitLock||h.replaying||window.__norender||window.__fast||/[?&]test/.test(location.search)&&!window.__autoScaleTest||s>2){Ki.t=Ki.n=0;return}if(Ki.t+=s,Ki.n++,Ki.t<4)return;let e=Ki.n/Ki.t;Ki.t=Ki.n=0,!(e>=24||h.settings.scale<=.4)&&(h.settings.scale=Math.max(.4,Math.round((h.settings.scale-.1)*20)/20),h.post.resize(innerWidth,innerHeight),Wi(),h.ui.el.hint.classList.contains("show")||h.ui.hint(`Ruckelt \u2013 Aufl\xF6sung auf ${Math.round(h.settings.scale*100)} % gesenkt`,3))}function Np(s){requestAnimationFrame(Np),Ky((s-nu)/1e3);let t=Math.min(window.__fast?.2:.05,(s-nu)/1e3)*(window.__speed||1);nu=s;let e=h.ui;if(h.replaying){Ut.endFrame();return}if(h.pendingRun&&h.started){let n=h.pendingRun;h.pendingRun=null,h.story.directRun=!0,h.story.run(...n),h.story.directRun=!1}if(h.started&&!h.paused&&!h.waitLock){Ut.sample(),h.micLvl=h.mic.sample(t);let n=h.dev.plan(t);for(let i=0;i<n.length;i++)h.dev.record(n[i],i===n.length-1),kp(n[i]),i===0&&Ut.consume();n.length||h.player.updateCamera(0),h.phoneOpen&&e.phoneTab==="map"&&e.drawMap()}else h.started?h.player.updateCamera(0):(h.time+=t,$y(h.time),h.world.update(t,h.time));h.dev.update(t),h.started&&h.touch.update(),e.hud(t),h.post.mat.uniforms.exposure.value=1.45*(h.settings.bright??1),h.world.updateLights(h.camera.position,h.time),h.audio.ready&&h.audio.updateListener(h.camera),window.__norender||h.post.render(h.scene,h.camera,t),Ut.endFrame()}var ru=document.createElement("div");ru.style.cssText="position:fixed;left:10px;bottom:10px;max-width:60vw;font:12px monospace;color:#ff6a5a;z-index:99;pointer-events:none;white-space:pre-wrap;text-shadow:0 0 4px #000";document.body.appendChild(ru);var Up=/pointer ?lock|exited the lock|requestPointerLock|WrongDocument|The user has exited|AbortError|play\(\) request/i,Fp=s=>{Up.test(s)||(ru.textContent="FEHLER (bitte Screenshot an Claude): "+s)};window.addEventListener("error",s=>Fp(String(s.message)+" @ "+(s.filename||"").split("/").pop()+":"+s.lineno));window.addEventListener("unhandledrejection",s=>{if(s.reason instanceof vi){s.preventDefault();return}let t=String(s.reason&&(s.reason.stack||s.reason.message)||s.reason);if(Up.test(t)){s.preventDefault();return}Fp(t.slice(0,400))});h.exposeHooks=()=>{window.__G||(window.__G=h,window.__start=(s,t)=>{Va(s),t&&h.story.run(s,!0,t)},window.__pause=()=>_c(),window.__pick=(s=0,t=0)=>{let e=new ba;return e.setFromCamera(new Yt(s,t),h.camera),e.intersectObjects(h.scene.children,!0).slice(0,4).map(i=>`${i.object.type}|${i.object.material&&(i.object.material.name||i.object.material.type)}|d=${i.distance.toFixed(2)}|p=${i.point.toArray().map(r=>r.toFixed(1)).join(",")}|par=${i.object.parent&&i.object.parent.type}`).join(`
`)},window.__use=s=>h.world.interacts.find(e=>!(e.once&&e.used)&&e.enabled()&&String(typeof e.text=="function"?e.text():e.text).includes(s))?(h.dev.ev("use",s),"ok "+s):"NICHT GEFUNDEN: "+s,window.__tp=(s,t,e)=>(h.dev.ev("tp",[s,e??h.world.groundAt(s,t,60),t]),h.player.p.toArray().map(n=>n.toFixed(2)).join(",")),window.__reply=s=>h.dev.ev("reply",s),window.__look=(s,t=0)=>h.dev.ev("look",[s,t]),window.__state=()=>JSON.stringify({ch:h.story.chapter,t:+h.time.toFixed(1),obj:h.ui.currentObjective,sub:document.getElementById("subtitle").textContent,bat:Math.round(h.phone.battery),p:h.player.p.toArray().map(s=>+s.toFixed(2)),inv:[...h.inv],chat:(h.chat[h.chat.length-1]||{}).text,reply:!!h.ui.reply,dad:h.story.dad?h.story.dad.mode:null,chase:h.story.chase?h.story.chase.state:null,stam:+h.player.stamina.toFixed(3)}))};/[?&](dev|test)\b/.test(location.search)&&(h.noLock=/[?&]test\b/.test(location.search));try{Gy()}catch(s){console.error(s),document.getElementById("loading").textContent="FEHLER: "+s.message}/[?&](dev|test)\b/.test(location.search)&&h.exposeHooks();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
