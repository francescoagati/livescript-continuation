(function(){
  var identity, container, i$, ref$, len$, n;
  identity = function(el, callback){
    var delayed;
    delayed = function(){
      return callback(el);
    };
    return setTimeout(delayed, 100);
  };
  container = [];
  for (i$ = 0, len$ = (ref$ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length; i$ < len$; ++i$) {
    n = ref$[i$];
    identity(n, cont(x));
    if (x > 5) {
      container.push(x);
    }
  }
  console.log(container);
}).call(this);
