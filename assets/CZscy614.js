import{P as p,j as L,Q as g,R as w,S as R,d as b,a as v,L as q,h as x,T as F}from"./BZSt7oRw.js";const T=Object.freeze({left:0,top:0,width:16,height:16}),I=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),M=Object.freeze({...T,...I});Object.freeze({...M,body:"",hidden:!1});function P(e,n){let A=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in n)A+=" "+o+'="'+n[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+A+">"+e+"</svg>"}const B=/(-?[0-9.]*[0-9]+[0-9.]*)/g,E=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function y(e,n,A){if(n===1)return e;if(A=A||100,typeof e=="number")return Math.ceil(e*n*A)/A;if(typeof e!="string")return e;const o=e.split(B);if(o===null||!o.length)return e;const t=[];let s=o.shift(),c=E.test(s);for(;;){if(c){const r=parseFloat(s);isNaN(r)?t.push(s):t.push(Math.ceil(r*n*A)/A)}else t.push(s);if(s=o.shift(),s===void 0)return t.join("");c=!c}}function G(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function V(e){return"data:image/svg+xml,"+G(e)}function W(e){return'url("'+V(e)+'")'}function _(e){const[n,A,o,t]=e;if(o!==t){const s=Math.max(o,t);return[n-(s-o)/2,A-(s-t)/2,s,s]}return e}const D=Object.freeze({width:null,height:null}),H=Object.freeze({...D,...I});function U(e,n="defs"){let A="";const o=e.indexOf("<"+n);for(;o>=0;){const t=e.indexOf(">",o),s=e.indexOf("</"+n);if(t===-1||s===-1)break;const c=e.indexOf(">",s);if(c===-1)break;A+=e.slice(t+1,s).trim(),e=e.slice(0,o).trim()+e.slice(c+1)}return{defs:A,content:e}}function K(e,n){return e?"<defs>"+e+"</defs>"+n:n}function J(e,n,A){const o=U(e);return K(o.defs,n+o.content+A)}const X=e=>e==="unset"||e==="undefined"||e==="none";function Y(e,n){const A={...M,...e},o={...H,...n},t={left:A.left,top:A.top,width:A.width,height:A.height};let s=A.body;[A,o].forEach(m=>{const a=[],j=m.hFlip,z=m.vFlip;let d=m.rotate;j?z?d+=2:(a.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),a.push("scale(-1 1)"),t.top=t.left=0):z&&(a.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),a.push("scale(1 -1)"),t.top=t.left=0);let f;switch(d<0&&(d-=Math.floor(d/4)*4),d=d%4,d){case 1:f=t.height/2+t.top,a.unshift("rotate(90 "+f.toString()+" "+f.toString()+")");break;case 2:a.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:f=t.width/2+t.left,a.unshift("rotate(-90 "+f.toString()+" "+f.toString()+")");break}d%2===1&&(t.left!==t.top&&(f=t.left,t.left=t.top,t.top=f),t.width!==t.height&&(f=t.width,t.width=t.height,t.height=f)),a.length&&(s=J(s,'<g transform="'+a.join(" ")+'">',"</g>"))});const c=o.width,r=o.height,i=t.width,Q=t.height;let l,u;c===null?(u=r===null?"1em":r==="auto"?Q:r,l=y(u,i/Q)):(l=c==="auto"?i:c,u=r===null?y(l,Q/i):r==="auto"?Q:r);const S={},Z=(m,a)=>{X(a)||(S[m]=a.toString())};Z("width",l),Z("height",u);const C=[t.left,t.top,i,Q];return S.viewBox=C.join(" "),{attributes:S,viewBox:C,body:s}}function e1(e){const n={display:"inline-block",width:"1em",height:"1em"},A=e.varName;switch(e.pseudoSelector&&(n.content="''"),e.mode){case"background":A&&(n["background-image"]="var(--"+A+")"),n["background-repeat"]="no-repeat",n["background-size"]="100% 100%";break;case"mask":n["background-color"]="currentColor",A&&(n["mask-image"]=n["-webkit-mask-image"]="var(--"+A+")"),n["mask-repeat"]=n["-webkit-mask-repeat"]="no-repeat",n["mask-size"]=n["-webkit-mask-size"]="100% 100%";break}return n}function t1(e,n){const A={},o=n.varName,t=Y(e);let s=t.viewBox;s[2]!==s[3]&&(n.forceSquare?s=_(s):A.width=y("1em",s[2]/s[3]));const c=P(t.body.replace(/currentColor/g,n.color||"black"),{viewBox:`${s[0]} ${s[1]} ${s[2]} ${s[3]}`,width:`${s[2]}`,height:`${s[3]}`}),r=W(c);if(o)A["--"+o]=r;else switch(n.mode){case"background":A["background-image"]=r;break;case"mask":A["mask-image"]=A["-webkit-mask-image"]=r;break}return A}const k={selectorStart:{compressed:"{",compact:" {",expanded:" {"},selectorEnd:{compressed:"}",compact:`; }
`,expanded:`;
}
`},rule:{compressed:"{key}:",compact:" {key}: ",expanded:`
  {key}: `}};function A1(e,n="expanded"){const A=[];for(let o=0;o<e.length;o++){const{selector:t,rules:s}=e[o];let r=(t instanceof Array?t.join(n==="compressed"?",":", "):t)+k.selectorStart[n],i=!0;for(const Q in s)i||(r+=";"),r+=k.rule[n].replace("{key}",Q)+s[Q],i=!1;r+=k.selectorEnd[n],A.push(r)}return A.join(n==="compressed"?"":`
`)}function n1(e,n={}){const A=n.customise?n.customise(e.body):e.body,o=n.mode||(n.color||!A.includes("currentColor")?"background":"mask");let t=n.varName;t===void 0&&o==="mask"&&(t="svg");const s={...n,mode:o,varName:t};o==="background"&&delete s.varName;const c={...n.rules,...e1(s),...t1({...M,...e,body:A},s)},r=n.iconSelector||".icon";return A1([{selector:r,rules:c}],s.format)}let N=!1;function $(e){if(N)return;const n=JSON.parse('[{"prefix":"gcc","icons":{"gcc-text":{"width":386.901,"height":92.401,"body":"<g id=\\"svgGroup\\" stroke-linecap=\\"round\\" fill-rule=\\"evenodd\\" font-size=\\"9pt\\" stroke=\\"#f6da5c\\" stroke-width=\\"0.25mm\\" fill=\\"#f6da5c\\" style=\\"stroke:#f6da5c;stroke-width:0.25mm;fill:#f6da5c\\"><path d=\\"M 221.701 27.601 L 205.101 27.601 Q 203.401 27.601 202.151 26.401 A 3.97 3.97 0 0 1 200.902 23.513 A 5.104 5.104 0 0 1 200.901 23.401 A 3.86 3.86 0 0 1 202.074 20.576 A 4.824 4.824 0 0 1 202.151 20.501 Q 203.401 19.301 205.101 19.301 L 241.301 19.301 L 241.301 5.001 A 5.685 5.685 0 0 1 241.521 3.379 A 4.337 4.337 0 0 1 242.801 1.351 Q 244.301 0.001 246.301 0.001 Q 248.301 0.001 249.751 1.351 A 4.466 4.466 0 0 1 251.126 4.007 A 6.38 6.38 0 0 1 251.201 5.001 L 251.201 19.301 L 287.201 19.301 Q 288.901 19.301 290.151 20.501 A 4.019 4.019 0 0 1 291.144 21.963 A 3.973 3.973 0 0 1 291.401 23.401 A 4.249 4.249 0 0 1 291.088 25.05 A 3.988 3.988 0 0 1 290.151 26.401 Q 288.901 27.601 287.201 27.601 L 271.401 27.601 A 116.423 116.423 0 0 1 267.065 40.569 A 96.607 96.607 0 0 1 263.901 47.601 Q 259.401 56.601 253.101 63.901 Q 259.901 70.001 268.951 74.501 Q 278.001 79.001 289.601 82.101 A 5.884 5.884 0 0 1 291.136 82.726 A 4.451 4.451 0 0 1 292.851 84.551 A 4.992 4.992 0 0 1 293.307 85.817 Q 293.562 87.048 293.101 88.301 A 5.188 5.188 0 0 1 292.204 89.922 A 4.617 4.617 0 0 1 290.601 91.151 A 4.593 4.593 0 0 1 289.11 91.558 Q 287.845 91.691 286.266 91.248 A 11.7 11.7 0 0 1 286.101 91.201 A 134.767 134.767 0 0 1 273.054 86.676 A 107.812 107.812 0 0 1 264.001 82.501 Q 254.201 77.401 246.601 70.601 Q 231.701 83.901 207.101 91.201 Q 204.401 92.001 202.651 91.151 Q 200.901 90.301 200.101 88.301 Q 199.401 86.401 200.401 84.551 A 4.765 4.765 0 0 1 202.949 82.344 A 6.66 6.66 0 0 1 203.701 82.101 A 124.714 124.714 0 0 0 215.306 78.412 A 96.217 96.217 0 0 0 224.351 74.501 A 72.617 72.617 0 0 0 235.217 67.905 A 61.927 61.927 0 0 0 240.101 63.901 Q 233.801 56.601 229.301 47.601 A 106.264 106.264 0 0 1 223.998 34.927 A 128.972 128.972 0 0 1 221.701 27.601 Z M 53.901 89.401 L 38.501 89.401 A 68.676 68.676 0 0 1 33.204 89.21 Q 27.807 88.791 24.301 87.451 A 13.878 13.878 0 0 1 20.422 85.247 A 11.672 11.672 0 0 1 17.151 80.951 Q 15.101 76.401 15.101 68.501 A 49.677 49.677 0 0 1 15.301 63.89 Q 15.514 61.608 15.955 59.697 A 19.603 19.603 0 0 1 17.151 56.051 A 11.971 11.971 0 0 1 23.222 50.008 A 16.025 16.025 0 0 1 24.301 49.551 A 24.359 24.359 0 0 1 28.229 48.45 Q 32.219 47.655 37.734 47.604 A 82.573 82.573 0 0 1 38.501 47.601 L 41.201 47.601 L 41.201 29.801 L 4.501 29.801 A 4.823 4.823 0 0 1 2.947 29.56 A 4.054 4.054 0 0 1 1.251 28.451 Q 0.001 27.101 0.001 25.201 Q 0.001 23.301 1.251 22.001 A 4.178 4.178 0 0 1 3.953 20.726 A 5.701 5.701 0 0 1 4.501 20.701 L 41.201 20.701 L 41.201 5.401 A 5.448 5.448 0 0 1 41.469 3.658 A 4.575 4.575 0 0 1 42.651 1.801 Q 44.101 0.401 46.201 0.401 Q 48.301 0.401 49.751 1.801 A 4.688 4.688 0 0 1 51.186 4.962 A 6.325 6.325 0 0 1 51.201 5.401 L 51.201 20.701 L 87.901 20.701 A 5.009 5.009 0 0 1 89.429 20.923 A 4.071 4.071 0 0 1 91.151 22.001 A 4.429 4.429 0 0 1 92.401 25.141 A 5.733 5.733 0 0 1 92.401 25.201 Q 92.401 27.101 91.151 28.451 A 4.147 4.147 0 0 1 88.269 29.789 A 5.629 5.629 0 0 1 87.901 29.801 L 51.201 29.801 L 51.201 47.601 L 53.901 47.601 A 68.676 68.676 0 0 1 59.198 47.791 Q 64.595 48.21 68.101 49.551 A 13.878 13.878 0 0 1 71.98 51.754 A 11.672 11.672 0 0 1 75.251 56.051 Q 77.301 60.601 77.301 68.501 A 49.677 49.677 0 0 1 77.101 73.111 Q 76.887 75.393 76.447 77.304 A 19.603 19.603 0 0 1 75.251 80.951 A 11.971 11.971 0 0 1 69.18 86.993 A 16.025 16.025 0 0 1 68.101 87.451 A 24.359 24.359 0 0 1 64.173 88.551 Q 60.183 89.346 54.668 89.397 A 82.573 82.573 0 0 1 53.901 89.401 Z M 172.201 47.901 L 146.901 47.901 A 45.525 45.525 0 0 1 143.52 47.783 Q 140.07 47.526 137.801 46.701 A 9.27 9.27 0 0 1 135.402 45.433 A 7.344 7.344 0 0 1 133.151 42.701 Q 132.172 40.67 131.903 37.639 A 27.636 27.636 0 0 1 131.801 35.201 A 27.823 27.823 0 0 1 131.933 32.401 Q 132.075 30.993 132.373 29.821 A 11.121 11.121 0 0 1 133.151 27.651 A 7.501 7.501 0 0 1 136.45 24.3 A 10.34 10.34 0 0 1 137.801 23.701 A 16.462 16.462 0 0 1 140.333 23.024 Q 142.985 22.517 146.659 22.501 A 55.31 55.31 0 0 1 146.901 22.501 L 154.701 22.501 L 154.701 17.501 L 131.101 17.501 A 4.571 4.571 0 0 1 129.778 17.318 A 3.573 3.573 0 0 1 128.201 16.351 Q 127.101 15.201 127.101 13.601 A 4.3 4.3 0 0 1 127.311 12.228 A 3.622 3.622 0 0 1 128.201 10.801 A 3.692 3.692 0 0 1 130.296 9.761 A 5.171 5.171 0 0 1 131.101 9.701 L 154.701 9.701 L 154.701 4.901 A 5.212 5.212 0 0 1 154.907 3.399 A 4.1 4.1 0 0 1 155.951 1.651 A 4.221 4.221 0 0 1 158.859 0.406 A 5.591 5.591 0 0 1 159.101 0.401 Q 160.901 0.401 162.201 1.651 A 4.178 4.178 0 0 1 163.475 4.353 A 5.701 5.701 0 0 1 163.501 4.901 L 163.501 9.701 L 188.101 9.701 A 4.758 4.758 0 0 1 189.322 9.849 A 3.413 3.413 0 0 1 190.951 10.801 A 3.758 3.758 0 0 1 191.974 13.071 A 5.073 5.073 0 0 1 192.001 13.601 Q 192.001 15.201 190.951 16.351 A 3.462 3.462 0 0 1 188.853 17.446 A 4.943 4.943 0 0 1 188.101 17.501 L 163.501 17.501 L 163.501 22.501 L 172.201 22.501 A 45.525 45.525 0 0 1 175.582 22.618 Q 179.032 22.876 181.301 23.701 A 9.464 9.464 0 0 1 183.66 24.931 A 7.31 7.31 0 0 1 185.951 27.651 Q 186.903 29.59 187.184 32.549 A 28.153 28.153 0 0 1 187.301 35.201 A 26.727 26.727 0 0 1 187.156 38.08 Q 186.858 40.819 185.951 42.701 A 7.543 7.543 0 0 1 182.47 46.194 A 10.296 10.296 0 0 1 181.301 46.701 A 16.462 16.462 0 0 1 178.769 47.378 Q 176.117 47.884 172.443 47.9 A 55.31 55.31 0 0 1 172.201 47.901 Z M 318.001 19.501 L 340.701 19.501 Q 342.101 19.501 343.101 20.551 Q 344.101 21.601 344.101 23.001 Q 344.101 24.401 343.101 25.451 Q 342.101 26.501 340.701 26.501 L 318.601 26.501 Q 317.201 26.501 316.201 25.451 Q 315.201 24.401 315.201 23.001 A 3.613 3.613 0 0 1 315.267 22.295 A 2.74 2.74 0 0 1 315.501 21.601 Q 313.001 23.501 310.501 25.351 Q 308.001 27.201 305.401 28.901 Q 304.17 29.67 302.851 29.67 A 4.726 4.726 0 0 1 302.051 29.601 A 4.34 4.34 0 0 1 299.205 27.806 A 5.524 5.524 0 0 1 299.201 27.801 A 3.808 3.808 0 0 1 298.597 26.529 Q 298.374 25.663 298.601 24.701 A 3.975 3.975 0 0 1 300.431 22.143 A 4.836 4.836 0 0 1 300.501 22.101 Q 306.401 18.501 311.951 14.151 Q 317.501 9.801 321.701 5.601 Q 324.316 2.986 326.908 2.079 A 8.324 8.324 0 0 1 329.451 1.601 A 7.816 7.816 0 0 1 329.654 1.598 Q 333.414 1.598 337.601 5.201 Q 339.924 7.233 342.949 9.593 A 171.16 171.16 0 0 0 343.151 9.751 Q 346.301 12.201 349.651 14.551 Q 353.001 16.901 355.801 18.701 A 3.944 3.944 0 0 1 357.093 20.016 A 3.99 3.99 0 0 1 357.551 21.201 A 4.139 4.139 0 0 1 357.648 22.013 Q 357.667 23.057 357.117 24.011 A 4.636 4.636 0 0 1 357.001 24.201 A 4.458 4.458 0 0 1 355.668 25.592 A 4.377 4.377 0 0 1 354.201 26.201 A 4.716 4.716 0 0 1 353.381 26.311 Q 352.054 26.368 350.903 25.602 A 4.75 4.75 0 0 1 350.901 25.601 Q 346.601 22.701 341.651 18.751 A 171.718 171.718 0 0 1 337.597 15.419 Q 335.777 13.872 334.214 12.442 A 94.66 94.66 0 0 1 333.201 11.501 Q 331.688 10.147 330.556 9.871 A 2.344 2.344 0 0 0 330.001 9.801 A 2.429 2.429 0 0 0 329.094 9.994 Q 328.329 10.303 327.428 11.102 A 12.182 12.182 0 0 0 326.901 11.601 A 91.126 91.126 0 0 1 324.389 14.015 A 107.98 107.98 0 0 1 322.751 15.501 A 118.353 118.353 0 0 1 318.622 19.001 A 129.779 129.779 0 0 1 318.001 19.501 Z M 378.201 74.701 L 378.201 5.101 A 4.948 4.948 0 0 1 378.382 3.727 A 3.686 3.686 0 0 1 379.501 1.951 Q 380.801 0.801 382.601 0.801 A 4.666 4.666 0 0 1 384.287 1.097 A 4.255 4.255 0 0 1 385.651 1.951 Q 386.901 3.101 386.901 5.101 L 386.901 76.201 Q 386.901 79.945 386.297 82.668 A 14.863 14.863 0 0 1 385.451 85.351 A 8.62 8.62 0 0 1 380.624 90.011 A 11.313 11.313 0 0 1 380.401 90.101 A 16.68 16.68 0 0 1 377.715 90.869 Q 374.635 91.501 370.201 91.501 Q 368.301 91.501 366.951 90.201 Q 365.601 88.901 365.501 87.001 A 6.585 6.585 0 0 1 365.493 86.672 Q 365.493 85.836 365.714 85.12 A 4.331 4.331 0 0 1 366.501 83.651 A 3.842 3.842 0 0 1 368.826 82.293 A 5.488 5.488 0 0 1 369.601 82.201 Q 372.673 81.958 374.438 81.552 A 11.261 11.261 0 0 0 375.201 81.351 A 4.487 4.487 0 0 0 376.318 80.846 A 3.216 3.216 0 0 0 377.601 79.301 A 6.379 6.379 0 0 0 377.904 78.269 Q 378.135 77.189 378.186 75.632 A 28.306 28.306 0 0 0 378.201 74.701 Z M 309.801 48.201 L 309.801 43.601 Q 309.801 36.801 312.901 33.901 A 8.94 8.94 0 0 1 315.817 32.133 Q 318.738 31.001 323.301 31.001 L 336.901 31.001 Q 344.301 31.001 347.351 33.901 Q 350.374 36.775 350.401 43.48 A 30.081 30.081 0 0 1 350.401 43.601 L 350.401 47.601 Q 350.401 54.301 347.351 57.251 A 8.664 8.664 0 0 1 344.488 59.034 Q 341.86 60.079 337.852 60.188 A 35.03 35.03 0 0 1 336.901 60.201 L 317.301 60.201 Q 316.001 67.501 313.151 74.051 Q 310.301 80.601 305.901 86.401 A 4.501 4.501 0 0 1 303.2 88.045 A 5.882 5.882 0 0 1 302.901 88.101 A 5.546 5.546 0 0 1 302.15 88.169 Q 302.097 88.17 302.045 88.17 A 4.49 4.49 0 0 1 299.501 87.401 A 3.729 3.729 0 0 1 297.931 84.866 A 4.706 4.706 0 0 1 297.901 84.651 Q 297.868 84.359 297.868 84.08 A 3.956 3.956 0 0 1 298.701 81.601 Q 302.201 77.201 304.701 72.451 A 40.007 40.007 0 0 0 307.571 65.376 A 48.171 48.171 0 0 0 308.501 61.801 A 52.37 52.37 0 0 0 309.434 55.874 Q 309.801 52.291 309.801 48.201 Z M 112.901 88.301 L 112.901 50.501 Q 111.401 52.101 109.851 53.601 Q 108.301 55.101 106.801 56.501 Q 105.401 57.801 103.501 57.801 A 4.504 4.504 0 0 1 100.245 56.444 A 5.79 5.79 0 0 1 100.201 56.401 A 4.284 4.284 0 0 1 98.901 53.308 A 5.232 5.232 0 0 1 98.901 53.251 A 4.302 4.302 0 0 1 99.187 51.659 A 3.937 3.937 0 0 1 100.201 50.201 A 91.771 91.771 0 0 0 104.72 45.888 A 109.386 109.386 0 0 0 107.451 43.001 Q 111.101 39.001 114.251 34.701 Q 117.401 30.401 119.601 26.501 A 4.785 4.785 0 0 1 120.972 24.984 A 4.664 4.664 0 0 1 122.451 24.301 Q 124.301 23.801 125.901 24.801 A 5.135 5.135 0 0 1 127.094 25.749 A 4.112 4.112 0 0 1 128.051 27.501 Q 128.404 28.834 127.865 30.168 A 5.552 5.552 0 0 1 127.501 30.901 Q 124.901 35.701 121.301 40.301 L 121.301 88.301 A 4.845 4.845 0 0 1 121.136 89.601 A 3.546 3.546 0 0 1 120.101 91.301 A 4.152 4.152 0 0 1 117.595 92.379 A 5.504 5.504 0 0 1 117.101 92.401 A 4.845 4.845 0 0 1 115.605 92.179 A 4.038 4.038 0 0 1 114.101 91.301 A 3.626 3.626 0 0 1 112.967 89.147 A 5.222 5.222 0 0 1 112.901 88.301 Z M 155.501 60.101 L 132.001 60.101 A 4.544 4.544 0 0 1 130.756 59.939 A 3.382 3.382 0 0 1 129.151 58.951 Q 128.101 57.801 128.101 56.201 A 4.539 4.539 0 0 1 128.328 54.739 A 3.885 3.885 0 0 1 129.151 53.351 A 3.462 3.462 0 0 1 131.249 52.256 A 4.943 4.943 0 0 1 132.001 52.201 L 187.201 52.201 Q 188.901 52.201 190.001 53.351 Q 191.101 54.501 191.101 56.201 Q 191.101 57.801 190.001 58.951 A 3.673 3.673 0 0 1 187.372 60.098 A 4.895 4.895 0 0 1 187.201 60.101 L 157.101 60.101 A 3.291 3.291 0 0 1 157.967 60.326 Q 158.47 60.529 159.001 60.901 Q 160.701 62.101 163.101 64.151 A 67.462 67.462 0 0 1 164.788 65.639 Q 165.609 66.388 166.307 67.084 A 35.816 35.816 0 0 1 167.101 67.901 Q 168.301 69.201 168.251 70.801 A 3.773 3.773 0 0 1 167.215 73.285 A 5.12 5.12 0 0 1 166.901 73.601 A 3.693 3.693 0 0 1 164.323 74.609 A 4.494 4.494 0 0 1 164.051 74.601 Q 162.401 74.501 161.301 73.301 Q 159.401 71.201 157.501 69.451 Q 155.601 67.701 153.601 66.101 Q 152.493 65.27 152.493 63.885 A 3.644 3.644 0 0 1 152.501 63.651 A 4.27 4.27 0 0 1 152.792 62.319 A 3.628 3.628 0 0 1 153.601 61.101 A 7.513 7.513 0 0 1 154.196 60.658 Q 154.926 60.172 155.501 60.101 Z M 359.501 66.701 L 359.501 14.101 A 4.06 4.06 0 0 1 360.721 11.129 A 4.942 4.942 0 0 1 360.801 11.051 A 4.548 4.548 0 0 1 362.177 10.123 A 4.115 4.115 0 0 1 363.801 9.801 Q 365.601 9.801 366.901 11.051 A 4.061 4.061 0 0 1 368.2 13.989 A 4.914 4.914 0 0 1 368.201 14.101 L 368.201 66.701 A 4.06 4.06 0 0 1 366.981 69.672 A 4.942 4.942 0 0 1 366.901 69.751 Q 365.601 71.001 363.801 71.001 A 4.179 4.179 0 0 1 360.885 69.83 A 5.438 5.438 0 0 1 360.801 69.751 A 4.061 4.061 0 0 1 359.502 66.813 A 4.914 4.914 0 0 1 359.501 66.701 Z M 38.501 80.501 L 53.901 80.501 A 47.115 47.115 0 0 0 56.887 80.412 Q 59.786 80.228 61.717 79.655 A 11.581 11.581 0 0 0 62.201 79.501 A 7.269 7.269 0 0 0 64.311 78.385 A 6.091 6.091 0 0 0 66.201 75.901 A 11.363 11.363 0 0 0 66.816 73.905 Q 67.267 71.845 67.298 68.946 A 40.557 40.557 0 0 0 67.301 68.501 A 33.754 33.754 0 0 0 67.199 65.78 Q 66.986 63.161 66.331 61.427 A 8.978 8.978 0 0 0 66.201 61.101 A 6.236 6.236 0 0 0 62.686 57.684 A 8.54 8.54 0 0 0 62.201 57.501 Q 59.301 56.501 53.901 56.501 L 38.501 56.501 A 47.115 47.115 0 0 0 35.515 56.589 Q 32.615 56.774 30.685 57.346 A 11.581 11.581 0 0 0 30.201 57.501 A 7.269 7.269 0 0 0 28.091 58.616 A 6.091 6.091 0 0 0 26.201 61.101 A 11.363 11.363 0 0 0 25.586 63.096 Q 25.135 65.157 25.103 68.056 A 40.557 40.557 0 0 0 25.101 68.501 A 33.754 33.754 0 0 0 25.203 71.221 Q 25.416 73.84 26.071 75.575 A 8.978 8.978 0 0 0 26.201 75.901 A 6.236 6.236 0 0 0 29.716 79.317 A 8.54 8.54 0 0 0 30.201 79.501 Q 33.101 80.501 38.501 80.501 Z M 144.201 77.701 L 144.201 68.601 A 4.031 4.031 0 0 1 144.441 67.183 A 3.544 3.544 0 0 1 145.501 65.701 A 4.68 4.68 0 0 1 146.967 64.842 A 4.273 4.273 0 0 1 148.401 64.601 Q 150.101 64.601 151.351 65.701 A 3.619 3.619 0 0 1 152.593 68.324 A 4.958 4.958 0 0 1 152.601 68.601 L 152.601 77.001 A 12.23 12.23 0 0 0 152.692 78.551 Q 152.988 80.858 154.251 81.701 A 4.22 4.22 0 0 0 155.317 82.182 Q 157.276 82.801 161.401 82.801 A 32.943 32.943 0 0 0 163.547 82.736 Q 166.625 82.534 167.951 81.701 A 4.781 4.781 0 0 0 169.204 80.521 Q 170.092 79.351 170.701 77.401 Q 171.201 75.701 172.701 75.051 A 4.381 4.381 0 0 1 174.46 74.683 Q 175.162 74.683 175.901 74.901 A 4.536 4.536 0 0 1 177.169 75.458 A 3.618 3.618 0 0 1 178.451 76.901 Q 179.102 78.204 178.811 79.809 A 6.508 6.508 0 0 1 178.701 80.301 Q 177.81 84.342 175.724 86.624 A 8.637 8.637 0 0 1 173.551 88.351 A 12.912 12.912 0 0 1 170.764 89.461 Q 167.901 90.269 163.65 90.449 A 60.362 60.362 0 0 1 161.101 90.501 A 59.106 59.106 0 0 1 157.417 90.393 Q 153.786 90.166 151.293 89.456 A 16.966 16.966 0 0 1 151.101 89.401 A 11.075 11.075 0 0 1 148.633 88.35 A 7.74 7.74 0 0 1 145.801 85.551 A 9.993 9.993 0 0 1 144.842 83.214 Q 144.211 80.964 144.201 77.801 A 32.296 32.296 0 0 1 144.201 77.701 Z M 336.701 90.801 L 328.201 90.801 A 33.785 33.785 0 0 1 324.692 90.632 Q 321.151 90.261 319.017 89.072 A 7.196 7.196 0 0 1 317.651 88.101 Q 315 85.674 314.731 79.533 A 32.794 32.794 0 0 1 314.701 78.101 Q 314.701 71.99 316.713 69.084 A 6.395 6.395 0 0 1 317.651 68.001 A 8.098 8.098 0 0 1 320.158 66.491 Q 323.154 65.301 328.201 65.301 L 336.701 65.301 A 33.786 33.786 0 0 1 340.21 65.469 Q 343.751 65.841 345.885 67.029 A 7.196 7.196 0 0 1 347.251 68.001 Q 349.868 70.396 350.163 76.491 A 33.298 33.298 0 0 1 350.201 78.101 Q 350.201 85.401 347.251 88.101 A 8.098 8.098 0 0 1 344.744 89.61 Q 341.748 90.801 336.701 90.801 Z M 261.201 27.601 L 231.801 27.601 Q 234.201 36.301 237.851 43.651 Q 241.501 51.001 246.601 57.201 Q 251.701 51.001 255.301 43.651 Q 258.901 36.301 261.201 27.601 Z M 105.871 26.054 A 5.499 5.499 0 0 0 107.601 25.101 A 73.16 73.16 0 0 0 109.99 23.206 A 91.103 91.103 0 0 0 113.601 20.051 Q 116.701 17.201 119.501 14.201 A 131.829 131.829 0 0 0 120.273 13.367 Q 121.406 12.131 122.398 10.984 A 78.34 78.34 0 0 0 124.301 8.701 Q 125.21 7.544 125.197 6.079 A 5.025 5.025 0 0 0 125.151 5.451 Q 124.901 3.601 123.401 2.601 Q 121.901 1.501 120.201 1.651 Q 118.501 1.801 117.301 3.301 A 41.978 41.978 0 0 1 116.481 4.415 Q 115.201 6.095 113.594 7.878 A 78.694 78.694 0 0 1 110.151 11.451 Q 105.701 15.801 101.501 18.901 Q 100.101 19.901 100.051 21.651 A 5.305 5.305 0 0 0 100.049 21.802 A 4.732 4.732 0 0 0 101.101 24.801 A 5.735 5.735 0 0 0 101.646 25.315 A 4.076 4.076 0 0 0 104.301 26.301 A 5.021 5.021 0 0 0 105.871 26.054 Z M 124.852 85.637 A 3.806 3.806 0 0 0 126.601 87.801 A 5.892 5.892 0 0 0 127.285 88.073 Q 128.625 88.509 129.901 88.151 Q 131.501 87.701 132.601 86.301 A 39.246 39.246 0 0 0 133.005 85.746 Q 134.094 84.223 135.173 82.418 A 66.836 66.836 0 0 0 137.151 78.851 A 139.738 139.738 0 0 0 137.997 77.188 Q 139.674 73.837 140.801 71.101 A 5.037 5.037 0 0 0 141.014 70.472 Q 141.37 69.129 140.801 67.951 A 4.053 4.053 0 0 0 139.657 66.525 A 5.162 5.162 0 0 0 138.401 65.801 Q 136.801 65.201 135.301 65.801 A 3.413 3.413 0 0 0 133.807 66.94 A 4.317 4.317 0 0 0 133.201 68.101 A 41.775 41.775 0 0 1 133.024 68.542 Q 132.392 70.094 131.566 71.776 A 70.227 70.227 0 0 1 129.701 75.301 Q 127.501 79.201 125.301 82.301 Q 124.495 83.348 124.631 84.656 A 4.228 4.228 0 0 0 124.751 85.301 A 5.107 5.107 0 0 0 124.852 85.637 Z M 189.516 86.608 A 4.021 4.021 0 0 0 190.801 86.101 A 6.008 6.008 0 0 0 191.787 85.385 A 4.181 4.181 0 0 0 193.001 83.551 A 3.4 3.4 0 0 0 193.168 82.501 Q 193.168 81.867 192.933 81.21 A 5.362 5.362 0 0 0 192.501 80.301 Q 190.801 77.401 188.251 73.451 Q 186.817 71.229 185.493 69.371 A 71.141 71.141 0 0 0 183.501 66.701 A 5.191 5.191 0 0 0 183.035 66.181 A 3.768 3.768 0 0 0 180.851 65.101 A 4.387 4.387 0 0 0 180.289 65.064 Q 179.659 65.064 179.037 65.248 A 5.359 5.359 0 0 0 177.801 65.801 A 3.747 3.747 0 0 0 176.708 66.726 A 3.838 3.838 0 0 0 176.001 68.201 A 4.097 4.097 0 0 0 175.959 68.385 Q 175.78 69.275 176.044 70.071 A 3.488 3.488 0 0 0 176.601 71.101 Q 178.901 74.201 181.201 77.901 A 163.022 163.022 0 0 1 182.56 80.125 Q 183.201 81.194 183.763 82.174 A 87.96 87.96 0 0 1 185.001 84.401 Q 185.901 86.001 187.601 86.501 Q 188.592 86.792 189.516 86.608 Z M 318.101 53.501 L 335.901 53.501 Q 338.647 53.501 340.101 52.916 A 3.713 3.713 0 0 0 340.801 52.551 Q 342.201 51.601 342.301 48.801 L 318.301 48.801 Q 318.301 50.001 318.251 51.201 Q 318.201 52.401 318.101 53.501 Z M 318.301 42.501 L 342.301 42.501 Q 342.201 39.601 340.801 38.651 A 4.087 4.087 0 0 0 339.785 38.17 Q 338.362 37.701 335.901 37.701 L 324.701 37.701 Q 321.201 37.701 319.851 38.651 A 2.879 2.879 0 0 0 318.972 39.69 Q 318.423 40.733 318.301 42.501 Z M 329.001 83.801 L 335.901 83.801 Q 339.401 83.801 340.701 82.601 A 3.181 3.181 0 0 0 341.441 81.516 Q 341.876 80.518 341.973 78.947 A 15.394 15.394 0 0 0 342.001 78.001 A 13.11 13.11 0 0 0 341.92 76.482 Q 341.676 74.401 340.701 73.501 A 3.491 3.491 0 0 0 339.619 72.845 Q 338.259 72.301 335.901 72.301 L 329.001 72.301 Q 325.501 72.301 324.201 73.501 A 3.237 3.237 0 0 0 323.441 74.619 Q 322.997 75.65 322.918 77.27 A 14.993 14.993 0 0 0 322.901 78.001 A 13.907 13.907 0 0 0 322.98 79.541 Q 323.157 81.121 323.731 82.029 A 2.831 2.831 0 0 0 324.201 82.601 A 3.491 3.491 0 0 0 325.283 83.256 Q 326.642 83.801 329.001 83.801 Z M 155.501 29.501 L 155.501 40.901 L 163.201 40.901 L 163.201 29.501 L 155.501 29.501 Z M 170.701 29.501 L 170.701 40.901 L 171.901 40.901 A 27.557 27.557 0 0 0 173.675 40.848 Q 176.265 40.68 177.321 39.976 A 2.169 2.169 0 0 0 177.551 39.801 A 2.77 2.77 0 0 0 178.223 38.85 Q 178.801 37.579 178.801 35.201 A 15.274 15.274 0 0 0 178.732 33.692 Q 178.582 32.183 178.102 31.308 A 2.584 2.584 0 0 0 177.551 30.601 A 2.939 2.939 0 0 0 176.665 30.094 Q 175.132 29.501 171.901 29.501 L 170.701 29.501 Z M 147.201 40.901 L 148.001 40.901 L 148.001 29.501 L 147.201 29.501 A 27.557 27.557 0 0 0 145.427 29.553 Q 142.837 29.721 141.781 30.425 A 2.169 2.169 0 0 0 141.551 30.601 A 2.77 2.77 0 0 0 140.878 31.552 Q 140.301 32.822 140.301 35.201 A 15.274 15.274 0 0 0 140.37 36.709 Q 140.52 38.218 141 39.094 A 2.584 2.584 0 0 0 141.551 39.801 A 2.939 2.939 0 0 0 142.437 40.307 Q 143.97 40.901 147.201 40.901 Z\\" vector-effect=\\"non-scaling-stroke\\"/></g>"},"gcc":{"width":256.299,"height":87.892,"body":"<g id=\\"svgGroup\\" stroke-linecap=\\"round\\" fill-rule=\\"evenodd\\" font-size=\\"9pt\\" stroke=\\"#f6da5c\\" stroke-width=\\"0.25mm\\" fill=\\"#000000\\" style=\\"stroke:#f6da5c;stroke-width:0.25mm;fill:#000000\\"><path d=\\"M 59.375 42.14 L 62.891 42.14 L 62.891 84.376 Q 53.613 87.892 43.653 87.892 A 44.042 44.042 0 0 1 27.1 84.718 Q 19.19 81.544 13.184 75.904 Q 7.178 70.265 3.589 61.939 A 44.623 44.623 0 0 1 0.016 45.224 A 51.385 51.385 0 0 1 0 43.946 Q 0 35.011 3.491 26.881 Q 6.983 18.751 12.866 12.867 Q 18.75 6.983 26.88 3.492 Q 35.01 0.001 43.946 0.001 A 42.839 42.839 0 0 1 64.649 5.177 Q 74.219 10.353 80.274 19.239 L 77.344 21.144 Q 71.778 12.989 62.964 8.253 A 39.557 39.557 0 0 0 43.946 3.517 Q 35.742 3.517 28.247 6.715 A 41.092 41.092 0 0 0 17.077 13.694 A 38.615 38.615 0 0 0 15.332 15.333 A 40.273 40.273 0 0 0 7.123 27.319 A 45.93 45.93 0 0 0 6.714 28.248 Q 3.516 35.743 3.516 43.946 A 41.748 41.748 0 0 0 6.017 58.454 A 39.737 39.737 0 0 0 6.812 60.45 A 40.346 40.346 0 0 0 11.79 69.06 A 35.01 35.01 0 0 0 15.601 73.292 Q 21.094 78.468 28.369 81.422 A 39.864 39.864 0 0 0 43.506 84.376 Q 51.758 84.376 59.375 81.788 L 59.375 78.419 A 47.717 47.717 0 0 1 44.092 80.86 Q 38.281 80.86 32.788 79.225 Q 27.295 77.589 22.632 74.391 A 37.006 37.006 0 0 1 14.478 66.773 A 32.739 32.739 0 0 1 9.947 58.975 A 38.692 38.692 0 0 1 9.009 56.471 A 38.65 38.65 0 0 1 7.049 45.185 A 43.902 43.902 0 0 1 7.031 43.946 A 36.082 36.082 0 0 1 11.988 25.44 Q 16.944 16.944 25.44 11.988 A 36.082 36.082 0 0 1 43.946 7.032 A 35.985 35.985 0 0 1 61.377 11.402 A 36.923 36.923 0 0 1 74.512 23.243 L 71.582 25.147 A 33.207 33.207 0 0 0 59.693 14.479 A 32.701 32.701 0 0 0 43.946 10.548 A 32.858 32.858 0 0 0 30.957 13.185 A 33.946 33.946 0 0 0 22.025 18.678 A 31.659 31.659 0 0 0 20.288 20.289 Q 15.821 24.757 13.184 30.958 A 32.858 32.858 0 0 0 10.547 43.946 A 37.079 37.079 0 0 0 11.55 52.676 A 33.359 33.359 0 0 0 12.329 55.396 A 32.167 32.167 0 0 0 15.174 61.686 A 27.681 27.681 0 0 0 17.261 64.723 Q 20.41 68.702 24.61 71.559 Q 28.809 74.415 33.765 75.88 A 35.73 35.73 0 0 0 43.946 77.345 A 43.753 43.753 0 0 0 59.375 74.61 L 59.375 71.095 A 41.621 41.621 0 0 1 44.287 73.878 Q 38.33 73.878 32.91 71.852 A 30.827 30.827 0 0 1 23.267 66.114 A 25.176 25.176 0 0 1 17.815 59.23 A 30.734 30.734 0 0 1 16.553 56.642 Q 14.063 50.88 14.063 43.946 A 29.296 29.296 0 0 1 18.067 28.956 Q 22.071 22.071 28.955 18.067 A 29.296 29.296 0 0 1 43.946 14.063 Q 51.514 14.063 58.032 17.579 A 29.599 29.599 0 0 1 68.653 27.149 L 65.723 29.054 A 26.33 26.33 0 0 0 56.372 20.68 A 25.727 25.727 0 0 0 43.946 17.579 A 25.75 25.75 0 0 0 30.713 21.119 Q 24.658 24.659 21.118 30.714 Q 17.578 36.769 17.578 43.946 A 30.881 30.881 0 0 0 18.24 50.436 A 26.969 26.969 0 0 0 18.994 53.224 A 25.638 25.638 0 0 0 21.047 57.899 A 21.343 21.343 0 0 0 22.901 60.646 A 24.884 24.884 0 0 0 28.736 65.968 Q 32.08 68.165 35.938 69.264 Q 39.795 70.362 43.946 70.362 A 36.761 36.761 0 0 0 59.375 67.091 L 59.375 63.722 Q 52.442 66.798 44.385 66.798 A 27.087 27.087 0 0 1 37.202 65.863 A 24.996 24.996 0 0 1 35.645 65.382 A 23.492 23.492 0 0 1 28.247 61.231 A 17.849 17.849 0 0 1 24.216 56.405 A 22.36 22.36 0 0 1 23.023 54.029 A 23.394 23.394 0 0 1 21.322 47.671 A 29.558 29.558 0 0 1 21.094 43.946 Q 21.094 39.308 22.901 35.084 A 23.085 23.085 0 0 1 27.398 28.179 A 22.111 22.111 0 0 1 27.783 27.784 A 22.947 22.947 0 0 1 34.952 22.958 A 26.004 26.004 0 0 1 35.083 22.901 Q 39.307 21.095 43.946 21.095 Q 49.756 21.095 54.737 23.805 A 22.707 22.707 0 0 1 62.842 31.153 L 59.961 33.058 A 18.993 18.993 0 0 0 53.101 26.881 A 19.034 19.034 0 0 0 43.946 24.61 A 18.607 18.607 0 0 0 30.451 30.099 A 22.507 22.507 0 0 0 30.274 30.274 A 18.607 18.607 0 0 0 24.611 43.697 A 22.489 22.489 0 0 0 24.61 43.946 A 25.667 25.667 0 0 0 24.988 48.455 A 19.398 19.398 0 0 0 26.221 52.662 A 17.018 17.018 0 0 0 28.253 56.232 A 13.951 13.951 0 0 0 30.64 58.717 A 19.831 19.831 0 0 0 36.89 62.135 A 22.666 22.666 0 0 0 42.822 63.242 A 26.317 26.317 0 0 0 44.287 63.282 Q 52.393 63.282 59.375 59.913 L 59.375 42.14 Z M 171.094 19.239 L 168.164 21.144 Q 162.598 12.989 153.784 8.253 A 39.557 39.557 0 0 0 134.766 3.517 Q 126.563 3.517 119.068 6.715 A 41.092 41.092 0 0 0 107.897 13.694 A 38.615 38.615 0 0 0 106.153 15.333 A 40.273 40.273 0 0 0 97.943 27.319 A 45.93 45.93 0 0 0 97.534 28.248 Q 94.336 35.743 94.336 43.946 Q 94.336 52.149 97.534 59.645 A 41.092 41.092 0 0 0 104.513 70.815 A 38.615 38.615 0 0 0 106.153 72.56 A 40.273 40.273 0 0 0 118.139 80.769 A 45.93 45.93 0 0 0 119.068 81.178 Q 126.563 84.376 134.766 84.376 Q 144.971 84.376 153.809 79.591 A 40.533 40.533 0 0 0 168.213 66.651 L 171.045 68.8 Q 164.99 77.589 155.42 82.74 A 42.904 42.904 0 0 1 134.766 87.892 Q 125.83 87.892 117.7 84.4 Q 109.571 80.909 103.687 75.025 Q 97.803 69.142 94.312 61.012 Q 90.821 52.882 90.821 43.946 Q 90.821 35.011 94.312 26.881 Q 97.803 18.751 103.687 12.867 Q 109.571 6.983 117.7 3.492 Q 125.83 0.001 134.766 0.001 A 42.839 42.839 0 0 1 155.469 5.177 Q 165.039 10.353 171.094 19.239 Z M 256.299 19.239 L 253.369 21.144 Q 247.803 12.989 238.989 8.253 A 39.557 39.557 0 0 0 219.971 3.517 Q 211.768 3.517 204.273 6.715 A 41.092 41.092 0 0 0 193.102 13.694 A 38.615 38.615 0 0 0 191.358 15.333 A 40.273 40.273 0 0 0 183.148 27.319 A 45.93 45.93 0 0 0 182.739 28.248 Q 179.541 35.743 179.541 43.946 Q 179.541 52.149 182.739 59.645 A 41.092 41.092 0 0 0 189.718 70.815 A 38.615 38.615 0 0 0 191.358 72.56 A 40.273 40.273 0 0 0 203.344 80.769 A 45.93 45.93 0 0 0 204.273 81.178 Q 211.768 84.376 219.971 84.376 Q 230.176 84.376 239.014 79.591 A 40.533 40.533 0 0 0 253.418 66.651 L 256.25 68.8 Q 250.196 77.589 240.625 82.74 A 42.904 42.904 0 0 1 219.971 87.892 Q 211.035 87.892 202.905 84.4 Q 194.776 80.909 188.892 75.025 Q 183.008 69.142 179.517 61.012 Q 176.026 52.882 176.026 43.946 Q 176.026 35.011 179.517 26.881 Q 183.008 18.751 188.892 12.867 Q 194.776 6.983 202.905 3.492 Q 211.035 0.001 219.971 0.001 A 42.839 42.839 0 0 1 240.674 5.177 Q 250.244 10.353 256.299 19.239 Z M 165.332 23.243 L 162.403 25.147 A 33.207 33.207 0 0 0 150.513 14.479 A 32.701 32.701 0 0 0 134.766 10.548 A 32.858 32.858 0 0 0 121.778 13.185 A 33.946 33.946 0 0 0 112.845 18.678 A 31.659 31.659 0 0 0 111.109 20.289 Q 106.641 24.757 104.004 30.958 A 32.858 32.858 0 0 0 101.367 43.946 A 32.858 32.858 0 0 0 104.004 56.935 A 33.946 33.946 0 0 0 109.498 65.867 A 31.659 31.659 0 0 0 111.109 67.604 Q 115.576 72.071 121.778 74.708 A 32.858 32.858 0 0 0 134.766 77.345 A 32.498 32.498 0 0 0 150.537 73.39 A 33.485 33.485 0 0 0 162.403 62.696 L 165.235 64.796 A 36.72 36.72 0 0 1 152.124 76.539 Q 144.092 80.86 134.766 80.86 A 36.082 36.082 0 0 1 116.26 75.904 Q 107.764 70.948 102.808 62.452 A 36.082 36.082 0 0 1 97.852 43.946 A 36.082 36.082 0 0 1 102.808 25.44 Q 107.764 16.944 116.26 11.988 A 36.082 36.082 0 0 1 134.766 7.032 A 35.985 35.985 0 0 1 152.197 11.402 A 36.923 36.923 0 0 1 165.332 23.243 Z M 250.537 23.243 L 247.608 25.147 A 33.207 33.207 0 0 0 235.718 14.479 A 32.701 32.701 0 0 0 219.971 10.548 A 32.858 32.858 0 0 0 206.983 13.185 A 33.946 33.946 0 0 0 198.05 18.678 A 31.659 31.659 0 0 0 196.314 20.289 Q 191.846 24.757 189.209 30.958 A 32.858 32.858 0 0 0 186.572 43.946 A 32.858 32.858 0 0 0 189.209 56.935 A 33.946 33.946 0 0 0 194.703 65.867 A 31.659 31.659 0 0 0 196.314 67.604 Q 200.781 72.071 206.983 74.708 A 32.858 32.858 0 0 0 219.971 77.345 A 32.498 32.498 0 0 0 235.742 73.39 A 33.485 33.485 0 0 0 247.608 62.696 L 250.44 64.796 A 36.72 36.72 0 0 1 237.329 76.539 Q 229.297 80.86 219.971 80.86 A 36.082 36.082 0 0 1 201.465 75.904 Q 192.969 70.948 188.013 62.452 A 36.082 36.082 0 0 1 183.057 43.946 A 36.082 36.082 0 0 1 188.013 25.44 Q 192.969 16.944 201.465 11.988 A 36.082 36.082 0 0 1 219.971 7.032 A 35.985 35.985 0 0 1 237.403 11.402 A 36.923 36.923 0 0 1 250.537 23.243 Z M 159.473 27.149 L 156.543 29.054 A 26.33 26.33 0 0 0 147.193 20.68 A 25.727 25.727 0 0 0 134.766 17.579 A 25.75 25.75 0 0 0 121.533 21.119 Q 115.479 24.659 111.939 30.714 Q 108.399 36.769 108.399 43.946 A 25.75 25.75 0 0 0 111.939 57.179 Q 115.479 63.233 121.533 66.773 Q 127.588 70.313 134.766 70.313 Q 141.455 70.313 147.217 67.188 A 26.315 26.315 0 0 0 156.592 58.741 L 159.473 60.743 A 29.599 29.599 0 0 1 148.853 70.313 Q 142.334 73.829 134.766 73.829 A 29.296 29.296 0 0 1 119.776 69.825 Q 112.891 65.821 108.887 58.937 A 29.296 29.296 0 0 1 104.883 43.946 A 29.296 29.296 0 0 1 108.887 28.956 Q 112.891 22.071 119.776 18.067 A 29.296 29.296 0 0 1 134.766 14.063 Q 142.334 14.063 148.853 17.579 A 29.599 29.599 0 0 1 159.473 27.149 Z M 244.678 27.149 L 241.748 29.054 A 26.33 26.33 0 0 0 232.398 20.68 A 25.727 25.727 0 0 0 219.971 17.579 A 25.75 25.75 0 0 0 206.738 21.119 Q 200.684 24.659 197.144 30.714 Q 193.604 36.769 193.604 43.946 A 25.75 25.75 0 0 0 197.144 57.179 Q 200.684 63.233 206.738 66.773 Q 212.793 70.313 219.971 70.313 Q 226.66 70.313 232.422 67.188 A 26.315 26.315 0 0 0 241.797 58.741 L 244.678 60.743 A 29.599 29.599 0 0 1 234.058 70.313 Q 227.539 73.829 219.971 73.829 A 29.296 29.296 0 0 1 204.981 69.825 Q 198.096 65.821 194.092 58.937 A 29.296 29.296 0 0 1 190.088 43.946 A 29.296 29.296 0 0 1 194.092 28.956 Q 198.096 22.071 204.981 18.067 A 29.296 29.296 0 0 1 219.971 14.063 Q 227.539 14.063 234.058 17.579 A 29.599 29.599 0 0 1 244.678 27.149 Z M 153.662 31.153 L 150.781 33.058 A 18.993 18.993 0 0 0 143.921 26.881 A 19.034 19.034 0 0 0 134.766 24.61 A 18.607 18.607 0 0 0 121.272 30.099 A 22.507 22.507 0 0 0 121.094 30.274 A 18.607 18.607 0 0 0 115.431 43.697 A 22.489 22.489 0 0 0 115.43 43.946 A 18.607 18.607 0 0 0 120.918 57.441 A 22.507 22.507 0 0 0 121.094 57.618 A 18.607 18.607 0 0 0 134.516 63.281 A 22.489 22.489 0 0 0 134.766 63.282 A 18.872 18.872 0 0 0 143.921 60.987 A 19.206 19.206 0 0 0 150.781 54.786 L 153.613 56.837 Q 150.488 61.427 145.508 64.112 A 22.283 22.283 0 0 1 134.766 66.798 Q 130.127 66.798 125.904 64.991 A 23.085 23.085 0 0 1 118.999 60.494 A 22.111 22.111 0 0 1 118.604 60.108 A 22.947 22.947 0 0 1 113.778 52.94 A 26.004 26.004 0 0 1 113.721 52.809 Q 111.914 48.585 111.914 43.946 Q 111.914 39.308 113.721 35.084 A 23.085 23.085 0 0 1 118.218 28.179 A 22.111 22.111 0 0 1 118.604 27.784 A 22.947 22.947 0 0 1 125.772 22.958 A 26.004 26.004 0 0 1 125.904 22.901 Q 130.127 21.095 134.766 21.095 Q 140.576 21.095 145.557 23.805 A 22.707 22.707 0 0 1 153.662 31.153 Z M 238.867 31.153 L 235.987 33.058 A 18.993 18.993 0 0 0 229.126 26.881 A 19.034 19.034 0 0 0 219.971 24.61 A 18.607 18.607 0 0 0 206.477 30.099 A 22.507 22.507 0 0 0 206.299 30.274 A 18.607 18.607 0 0 0 200.636 43.697 A 22.489 22.489 0 0 0 200.635 43.946 A 18.607 18.607 0 0 0 206.123 57.441 A 22.507 22.507 0 0 0 206.299 57.618 A 18.607 18.607 0 0 0 219.721 63.281 A 22.489 22.489 0 0 0 219.971 63.282 A 18.872 18.872 0 0 0 229.126 60.987 A 19.206 19.206 0 0 0 235.987 54.786 L 238.819 56.837 Q 235.694 61.427 230.713 64.112 A 22.283 22.283 0 0 1 219.971 66.798 Q 215.332 66.798 211.109 64.991 A 23.085 23.085 0 0 1 204.204 60.494 A 22.111 22.111 0 0 1 203.809 60.108 A 22.947 22.947 0 0 1 198.983 52.94 A 26.004 26.004 0 0 1 198.926 52.809 Q 197.119 48.585 197.119 43.946 Q 197.119 39.308 198.926 35.084 A 23.085 23.085 0 0 1 203.423 28.179 A 22.111 22.111 0 0 1 203.809 27.784 A 22.947 22.947 0 0 1 210.977 22.958 A 26.004 26.004 0 0 1 211.109 22.901 Q 215.332 21.095 219.971 21.095 Q 225.781 21.095 230.762 23.805 A 22.707 22.707 0 0 1 238.867 31.153 Z M 66.406 84.376 L 66.406 42.14 L 69.922 42.14 L 69.922 84.376 L 66.406 84.376 Z M 80.469 84.376 L 80.469 42.14 L 83.985 42.14 L 83.985 84.376 L 80.469 84.376 Z M 73.438 84.376 L 73.438 42.14 L 76.953 42.14 L 76.953 84.376 L 73.438 84.376 Z\\" vector-effect=\\"non-scaling-stroke\\"/></g>"}}}]');for(const A of n)for(const[o,t]of Object.entries(A.icons))e(A.prefix?A.prefix+":"+o:o,t);N=!0}async function o1(e,n){if(!e)return null;$(g);const A=w(e);return A||(await R(e).catch(()=>(console.warn(`[Icon] failed to load icon \`${e}\``),null)),w(e))}function O(e){const n=p().icon,A=(n.collections||[]).sort((o,t)=>t.length-o.length);return L(()=>{var c;const o=e(),t=o.startsWith(n.cssSelectorPrefix)?o.slice(n.cssSelectorPrefix.length):o,s=((c=n.aliases)==null?void 0:c[t])||t;if(!s.includes(":")){const r=A.find(i=>s.startsWith(i+"-"));return r?r+":"+s.slice(r.length+1):s}return s})}let h;function s1(e){return e.replace(/([^\w-])/g,"\\$1")}function r1(){if(h)return h;h=new Set;const e=A=>{if(A=A.replace(/^:where\((.*)\)$/,"$1").trim(),A.startsWith("."))return A},n=A=>{if(A!=null&&A.length)for(const o of A){o!=null&&o.cssRules&&n(o.cssRules);const t=o==null?void 0:o.selectorText;if(typeof t=="string"){const s=e(t);s&&h.add(s)}}};if(typeof document<"u")for(const A of document.styleSheets)try{const o=A.cssRules||A.rules;n(o)}catch{}return h}const c1=b({name:"NuxtIconCss",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},setup(e){const n=v(),A=p().icon,o=L(()=>e.name?A.cssSelectorPrefix+e.name:"");function t(r){var l,u;if(!r)return;const i=w(r);if(i)return i;const Q=(u=(l=n.payload)==null?void 0:l.data)==null?void 0:u[r];if(Q)return g(r,Q),Q}const s=L(()=>"."+s1(o.value));function c(r,i=!0){let Q=s.value;A.cssWherePseudo&&(Q=`:where(${Q})`);const l=n1(r,{iconSelector:Q,format:"compressed",customise:e.customize??A.customize});return A.cssLayer&&i?`@layer ${A.cssLayer} { ${l} }`:l}{const r=r1();async function i(Q){if(r.has(s.value)||typeof document>"u")return;const l=document.createElement("style");l.textContent=c(Q);const u=document.head.querySelector('style, link[rel="stylesheet"]');u?document.head.insertBefore(l,u):document.head.appendChild(l),r.add(s.value)}q(()=>e.name,()=>{if(r.has(s.value))return;const Q=t(e.name);Q?i(Q):o1(e.name).then(l=>{l&&i(l)}).catch(()=>null)},{immediate:!0})}return()=>x("span",{class:["iconify",o.value]})}}),i1=b({name:"NuxtIconSvg",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},setup(e,{slots:n}){const A=v(),o=p().icon,t=O(()=>e.name),s="i-"+t.value;if(t.value){const c=A.payload.data[s];c?g(t.value,c):$(g)}return()=>x(F,{icon:t.value,ssr:!0,customise:e.customize??o.customize},n)}}),l1=b({name:"NuxtIcon",props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1}},setup(e,{slots:n}){const A=v(),o=p().icon,t=O(()=>e.name),s=L(()=>{var i;return((i=A.vueApp)==null?void 0:i.component(t.value))||((e.mode||o.mode)==="svg"?i1:c1)}),c=L(()=>{const i=e.size||o.size;return i?{fontSize:Number.isNaN(+i)?i:i+"px"}:null}),r=e.customize||o.customize;return()=>x(s.value,{...o.attrs,name:t.value,class:o.class,style:c.value,customize:r},n)}});export{l1 as default};
