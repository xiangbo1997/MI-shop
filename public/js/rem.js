  (function () { 
      //解决不同手机dpr不一致的适配问题(解决了1px的问题)
      var scale = 1.0;
      if (window.devicePixelRatio === 2) {
          scale *= 0.5;
      }
      if (window.devicePixelRatio === 3) {
          scale *= 0.333333;
      }
      var meta = document.createElement('meta');
      meta.setAttribute('name', 'viewport');
      meta.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale +
          ', user-scalable=no');
      document.head.appendChild(meta);
  })();
