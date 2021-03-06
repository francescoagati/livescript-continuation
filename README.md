An expmeriment for using Continuation-passing style with livescript using [livescript](http://livescript.net/) and [continuation.js](https://github.com/BYVoid/continuation)


for more comples examples: 
  [https://gist.github.com/4047984#file_continuation.ls](https://gist.github.com/4047984#file_continuation.ls)

config:

```
  
  npm install -g LiveScript
  npm install -g continuation
  
  #exec compile prova.ls -> prova.cjs -> prova.js
  rake && node prova.js

```

the example:

```
identity = (el,callback) -> 
  delayed = -> callback(el)
  setTimeout delayed,100
  

container=[]

for n in [1 to 10]
  identity(n,cont(x))
  # cont(x) is the continuation that put the value of cb function inside x
  container.push(x) if x > 5

console.log(container)

```

output:

```
  [ 6, 7, 8, 9, 10 ]
```

the javascript compiled:


```
 /* Generated by Continuation.js v0.0.5 */
 (function () {
   var identity, container, i$, ref$, len$, n, x;
   identity = function (el, callback) {
     var delayed;
     delayed = function () {
       return callback(el);
     };
     return setTimeout(delayed, 100);
   };
   container = [];
   i$ = 0, len$ = (ref$ = [
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10
   ]).length;
   function loop_0(loop_0_cont) {
     if (i$ < len$) {
       n = ref$[i$];
       identity(n, function () {
         x = arguments[0];
         if (x > 5) {
           container.push(x);
         }
         ++i$;
         loop_0(loop_0_cont);
       });
     } else {
       loop_0_cont();
     }
   }
   loop_0(function () {
     console.log(container);
   });
 }.call(this));

```