(function(){
  const big=1e9+"px";
  document.body.style.minHeight=big;
  document.documentElement.style.minHeight=big;
  let d=1,step=500000,delay=30;
  setInterval(()=>{
    window.scrollBy(0,step*d);
    if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-10)d=-1;
    else if(window.scrollY<=0)d=1;
  },delay);
})();
