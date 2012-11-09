An expmeriment for using Continuation-passing style with livescript using [livescript](http://livescript.net/) and [continuation.js](https://github.com/BYVoid/continuation)



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

for n in [1 to 100]
  identity(n,cont(x))
  # cont(x) is the continuation that put the value of cb function inside x
  container.push(x) if x > 50

console.log(container)

```

output

```

[ 51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100 ]

```