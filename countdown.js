(function(){
  // Premiere: Dec 25, 2026, 00:00 US Central (06:00 UTC).
  var T=Date.UTC(2026,11,25,6,0,0);
  var el=document.getElementById('countdown'),live=document.getElementById('cd-live');
  var ids=['d','h','m','s'].map(function(k){return document.getElementById('cd-'+k)});
  function p(n){return n<10?'0'+n:''+n}
  function tick(){
    var ms=T-Date.now();
    if(ms<=0){el.hidden=true;live.hidden=false;return false}
    var s=Math.floor(ms/1000);
    var v=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60];
    ids.forEach(function(e,i){e.textContent=i?p(v[i]):v[i]});
    el.setAttribute('aria-label',v[0]+' days, '+v[1]+' hours until premiere');
    return true;
  }
  if(tick()){var iv=setInterval(function(){if(!tick())clearInterval(iv)},1000)}
  var h=document.querySelector('.hdr');
  addEventListener('scroll',function(){h.classList.toggle('is-scrolled',scrollY>12)},{passive:true});
})();
