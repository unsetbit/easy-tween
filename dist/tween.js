createTween=function(){var e=function(e,n){e.exports=n,n.linear=function(e,t,n,r){return n*e/r+t},n.quadraticIn=function(e,t,n,r){return n*(e/=r)*e+t},n.quadraticOut=function(e,t,n,r){return-n*(e/=r)*(e-2)+t},n.quadraticInOut=function(e,t,n,r){return e/=r/2,e<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},n.cubicIn=function(e,t,n,r){return n*(e/=r)*e*e+t},n.cubicOut=function(e,t,n,r){return e/=r,n*(--e*e*e+1)+t},n.cubicInOut=function(e,t,n,r){return e/=r/2,e<1?n*(e/=r)*e*e+t:n/2*((e-=2)*e*e+2)+t};var r=Math.PI/2;return n.sinusoidalIn=function(e,t,n,i){return-n*Math.cos(e/i*r)+n+t},n.sinusoidalOut=function(e,t,n,i){return n*Math.sin(e/i*r)+t},n.sinusoidalInOut=function(e,t,n,r){return-n/2*(Math.cos(Math.PI*e/r)-1)+t},n.exponentialIn=function(e,t,n,r){return n*Math.pow(2,10*(e/r-1))+t},n.exponentialOut=function(e,t,n,r){return n*(-Math.pow(2,-10*e/r)+1)+t},n.exponentialInOut=function(e,n,r,i){return e/=i/2,e<1?r/2*Math.pow(2,10*(e-1))+n:r/2*(-Math.pow(2,-10*--t)+2)+n},e.exports}({},{}),n=function(t,n){t.exports=n;var r=t.exports=function(e,t,n,r,i,s){function h(){if(l)return;l=!0,cancelAnimationFrame(c),f=Date.now()}function p(){if(!l)return;l=!1,a+=Date.now()-f,c=requestAnimationFrame(d)}function d(){var r=Date.now()-a;r<i?(t[n]=e(r,o,u,i),c=requestAnimationFrame(d)):(t[n]=e(i,o,u,i),s&&s())}i=i||0;var o=t[n],u=r-o,a=Date.now(),f=a,l=!0,c;return p(),{resume:p,pause:h}},i=e,s;for(s in i)i.hasOwnProperty(s)&&(r[s]=r.bind(void 0,i[s]));return r.easing=i,t.exports}({},{});return n}();