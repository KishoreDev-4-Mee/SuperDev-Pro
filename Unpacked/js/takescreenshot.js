let ne=/[^0-9 ]/gm;function M(){let F=new Date().toLocaleString();return F=F.replaceAll(ne,""),F=F.slice(0,-1),F.replaceAll(" ","_")}chrome.tabs.query({active:!0,currentWindow:!0},F=>{chrome.runtime.onConnect.addListener(b=>{b.onMessage.addListener(s=>{var u;F[0].id===((u=b.sender.tab)==null?void 0:u.id)&&s.action==="takeScreenshotJS"&&$(s)});function $(s){switch(s.screenArea){case"visibleArea":s.screenSave==="savePNG"?chrome.tabs.captureVisibleTab(null,{format:"png"},u=>{saveAs(u,"pagescreenshot_"+M()+".png"),b.postMessage({action:"okScreenshot"})}):s.screenSave==="saveJPEG"?chrome.tabs.captureVisibleTab(null,{format:"jpeg"},u=>{saveAs(u,"pagescreenshot_"+M()+".jpeg"),b.postMessage({action:"okScreenshot"})}):s.screenSave==="savePDF"&&chrome.tabs.captureVisibleTab(null,{format:"png"},u=>{let g=new Image;g.src=u,g.onload=async()=>{let y=g.width,x=g.height,D=await PDFLib.PDFDocument.create(),T=D.addPage([y,x]),d=await D.embedPng(u),{width:A,height:h}=d.scale(1);T.drawImage(d,{x:0,y:0,width:A,height:h});let w=await D.save(),p=new Blob([w],{type:"application/pdf"});saveAs(p,"pagescreenshot_"+M()+".pdf"),b.postMessage({action:"okScreenshot"})}});break;case"customArea":s.screenSave==="savePNG"?chrome.tabs.captureVisibleTab(null,{format:"png"},u=>{let g=new Image;g.src=u;let y=s.screenDim.transX,x=s.screenDim.transY,D=s.screenDim.width,T=s.screenDim.height;g.onload=()=>{let d=document.createElement("canvas"),A=d.getContext("2d"),h=window.devicePixelRatio||1,w=D*h,p=T*h;d.width=w,d.height=p,A.drawImage(g,y*h,x*h,w,p,0,0,w,p);let R=d.toDataURL("image/png");saveAs(R,"pagescreenshot_"+M()+".png"),b.postMessage({action:"okScreenshot"})}}):s.screenSave==="saveJPEG"?chrome.tabs.captureVisibleTab(null,{format:"jpeg"},u=>{let g=new Image;g.src=u;let y=s.screenDim.transX,x=s.screenDim.transY,D=s.screenDim.width,T=s.screenDim.height;g.onload=()=>{let d=document.createElement("canvas"),A=d.getContext("2d"),h=window.devicePixelRatio||1,w=D*h,p=T*h;d.width=w,d.height=p,A.drawImage(g,y*h,x*h,w,p,0,0,w,p);let R=d.toDataURL("image/jpeg");saveAs(R,"pagescreenshot_"+M()+".jpeg"),b.postMessage({action:"okScreenshot"})}}):s.screenSave==="savePDF"&&chrome.tabs.captureVisibleTab(null,{format:"png"},u=>{let g=new Image;g.src=u;let y=s.screenDim.transX,x=s.screenDim.transY,D=s.screenDim.width,T=s.screenDim.height;g.onload=()=>{let d=document.createElement("canvas"),A=d.getContext("2d"),h=window.devicePixelRatio||1,w=D*h,p=T*h;d.width=w,d.height=p,A.drawImage(g,y*h,x*h,w,p,0,0,w,p);let R=d.toDataURL("image/png"),_=new Image;_.src=R,_.onload=async()=>{let O=_.width,N=_.height,V=await PDFLib.PDFDocument.create(),e=V.addPage([O,N]),t=await V.embedPng(R),{width:a,height:n}=t.scale(1);e.drawImage(t,{x:0,y:0,width:a,height:n});let i=await V.save(),l=new Blob([i],{type:"application/pdf"});saveAs(l,"pagescreenshot_"+M()+".pdf"),b.postMessage({action:"okScreenshot"})}}});break;case"fullPage":chrome.tabs.query({active:!0,currentWindow:!0},u=>{let g=u[0],y="pagescreenshot";s.screenSave==="savePNG"?y+=".png":s.screenSave==="saveJPEG"?y+=".jpeg":s.screenSave==="savePDF"&&(y+=".png"),x(g,e=>{let t=0,a=e.length,n=[];(function i(){T(e[t],y,t,l=>{t++,n.push(l),t>=a?d(n):i()})})()});function x(e,t){let a=!1,n=[],i=3e3,l=!1;t=t||(()=>{}),chrome.runtime.onMessage.addListener(r);function r(c,m,U){if(c.words==="capture")return A(c,n,U),!0;if(c.words==="captured")chrome.runtime.onMessage.removeListener(r);else return!1}chrome.scripting.executeScript({target:{tabId:e.id},func:D},()=>{l||(a=!0,h(e,()=>{t(w(n))}))}),window.setTimeout(()=>{a||(l=!0)},i)}function D(){let e=500;function t(n,i,l){if(n.words==="scrollPage")return a(l),!0}window.hasScreenCapturePage||(window.hasScreenCapturePage=!0,chrome.runtime.onMessage.addListener(t));function a(n){let i=document.querySelector(".scrollBar"),l=i.scrollLeft,o=i.scrollTop,r=i.scrollWidth,c=i.scrollHeight,m=i.clientWidth,U=i.clientHeight,v=[],L=200,I=U-(U>L?L:0),B=m,E,k,j;for(r<=B+1&&(r=B),E=0;E<c;){for(k=0;k<r;)v.push([k,E]),k+=B;E+=I}let ee=[];v.forEach(X=>{ee.push("["+X.join(",")+"]")}),j=v.length;function z(){document.querySelectorAll("body, body *").forEach(P=>{P.classList.contains("prevSticky")&&P.style.removeProperty("position"),P.classList.contains("prevSticky")&&P.style.removeProperty("inset"),P.classList.contains("prevFixed")&&P.style.removeProperty("visibility"),P.classList.contains("prevFixed")&&P.style.removeProperty("overflow")}),i.scrollTo(l,o)}(function X(){if(!v.length){z(),chrome.runtime.sendMessage({words:"captured"}),n&&n();return}let P=v.shift(),te=P[0],K=P[1];K===0&&document.querySelectorAll("body, body *").forEach(f=>{window.getComputedStyle(f).getPropertyValue("position")==="sticky"&&(f.style.setProperty("position","relative","important"),f.style.setProperty("inset","auto","important"),f.classList.add("prevSticky"))}),K>0&&document.querySelectorAll("body, body *").forEach(f=>{window.getComputedStyle(f).getPropertyValue("position")==="fixed"&&(f.style.setProperty("visibility","hidden","important"),f.style.setProperty("overflow","hidden","important"),f.classList.add("prevFixed"))}),i.scrollTo(te,K);let ie={words:"capture",x:i.scrollLeft,y:i.scrollTop,complete:(j-v.length)/j,clientWidth:m,scrollWidth:r,scrollHeight:c,devicePixelRatio:window.devicePixelRatio};((q,f,...H)=>{let G=("10000000-1000-4000-8000"+-1e11).replaceAll(/[018]/gm,S=>(S^crypto.getRandomValues(new Uint8Array(1))[0]&15>>S/4).toString(16)),Y=new Date;Y.setMilliseconds(Y.getMilliseconds()+f);let Q=q;return typeof window.cusTimeoutt>"u"&&(window.cusTimeoutt={}),window.cusTimeoutt[G]=!0,function S(){window.cusTimeoutt[G]?(new Date-Y)/1e3>=0?(delete window.cusTimeoutt[G],Q(...H)):requestAnimationFrame(S):delete window.cusTimeoutt[G]}(),G})(()=>{let q=(W,G,...Y)=>{let S=("10000000-1000-4000-8000"+-1e11).replaceAll(/[018]/gm,C=>(C^crypto.getRandomValues(new Uint8Array(1))[0]&15>>C/4).toString(16)),J=new Date;J.setMilliseconds(J.getMilliseconds()+G);let Z=W;return typeof window.cusTimeoutt>"u"&&(window.cusTimeoutt={}),window.cusTimeoutt[S]=!0,function C(){window.cusTimeoutt[S]?(new Date-J)/1e3>=0?(delete window.cusTimeoutt[S],Z(...Y)):requestAnimationFrame(C):delete window.cusTimeoutt[S]}(),S},f=W=>{W in window.cusTimeoutt&&(window.cusTimeoutt[W]=!1)},H=q(z,2500);chrome.runtime.sendMessage(ie,W=>{f(H),W?X():z()})},e)})()}}function T(e,t,a,n){t=p(t,a);function i(){let r="filesystem:chrome-extension://"+chrome.i18n.getMessage("@@extension_id")+"/temporary/"+t;n(r)}let l=e.size+1024/2,o=window.webkitRequestFileSystem;o(window.TEMPORARY,l,r=>{r.root.getFile(t,{create:!0},c=>{c.createWriter(m=>{m.onwriteend=i,m.write(e)})})})}function d(e){!e||!e.length||V(e)}function A(e,t,a){let n;s.screenSave==="savePNG"?n="png":s.screenSave==="saveJPEG"?n="jpeg":s.screenSave==="savePDF"&&(n="png"),chrome.tabs.captureVisibleTab(null,{format:n},i=>{let l=new Image;l.src=i,l.onload=()=>{if(e.image={width:l.width,height:l.height},e.clientWidth!==l.width){let o=l.width/e.clientWidth;e.x*=o,e.y*=o,e.scrollWidth*=o,e.scrollHeight*=o}if(!t.length){let o=R(e.scrollWidth,e.scrollHeight);t.push(...o)}_(e.x,e.y,l.width,l.height,t).forEach(o=>{o.ctx.globalCompositeOperation="destination-over",o.ctx.drawImage(l,e.x-o.left,e.y-o.top)}),a(JSON.stringify(e,null,4)||!0)}})}function h(e,t){chrome.tabs.sendMessage(e.id,{words:"scrollPage"},()=>{t()})}function w(e){return e.map(t=>{let a=t.canvas.toDataURL(),n=atob(a.split(",")[1]),i=a.split(",")[0].split(":")[1].split(";")[0],l=new ArrayBuffer(n.length),o=new Uint8Array(l);for(let c=0;c<n.length;c++)o[c]=n.charCodeAt(c);return new Blob([l],{type:i})})}function p(e,t){if(!t)return e;let a=e.split("."),n=a.pop();return a.join(".")+"-"+(t+1)+"."+n}function R(e,t){let a=3e4,n=4e3*2,i=a*n,l=t>a||e>a||t*e>i,o=e>t,r=l?o?a:n:e,c=l?o?n:a:t,m=Math.ceil(e/r),U=Math.ceil(t/c),v,L,I,B,E,k=0,j=[];for(v=0;v<U;v++)for(L=0;L<m;L++)I=document.createElement("canvas"),I.width=L===m-1&&e%r||r,I.height=v===U-1&&t%c||c,B=L*r,E=v*c,j.push({canvas:I,ctx:I.getContext("2d"),index:k,left:B,right:B+I.width,top:E,bottom:E+I.height}),k++;return j}function _(e,t,a,n,i){let l=e+a,o=t+n;return i.filter(r=>e<r.right&&l>r.left&&t<r.bottom&&o>r.top)}async function O(e,t,a){let n=e.toDataURL("image/png"),i=await PDFLib.PDFDocument.create(),l=i.addPage([t,a]),o=await i.embedPng(n),r=o.scale(1);l.drawImage(o,{x:0,y:0,width:r.width,height:r.height});let c=await i.save(),m=new Blob([c],{type:"application/pdf"});saveAs(m,"pagescreenshot_"+M()+".pdf")}async function N(e,t,a,n){if(a===e.length-1){let i=document.createElement("canvas"),l=i.getContext("2d"),o=new Image;return o.src=e[a],new Promise(r=>{o.onload=async()=>{n+=o.height,i.width=o.width,i.height=n,t.push(o);let c=0;for(let m=0;m<t.length;m++)l.drawImage(t[m],0,c),c+=t[m].height;await O(i,t[0].width,n),b.postMessage({action:"okScreenshot"}),r()}})}if(a<e.length){let i=new Image;return i.src=e[a],new Promise(l=>{i.onload=async()=>{t.push(i),n+=i.height,await N(e,t,a+1,n),l()}})}}async function V(e,t){t=t||0;let a=e[t],n=t===e.length-1;if(s.screenSave==="savePNG")saveAs(a,"pagescreenshot_"+M()+".png"),b.postMessage({action:"okScreenshot"});else if(s.screenSave==="saveJPEG")saveAs(a,"pagescreenshot_"+M()+".jpeg"),b.postMessage({action:"okScreenshot"});else if(s.screenSave==="savePDF"){await N(e,[],0,0);return}n||V(e,t+1)}});break}}})});