An expmeriment for using Continuation-passing style with livescript.


config:

```
  
  npm install -g LiveScript
  npm install -g continuation
  
  #exec compile prova.ls -> prova.cjs -> prova.js
  rake && node prova.js

```

the example:

```

identity = (el,cb) -> 
  rt = -> cb(el)
  setTimeout rt,100
  

container=[]

for n in [1 to 100]
  identity(n,cont(x))
  container.push(x) if x > 50

console.log(container)

```