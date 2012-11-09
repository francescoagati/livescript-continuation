identity = (el,callback) -> 
  delayed = -> cb(el)
  setTimeout delayed,100
  

container=[]

for n in [1 to 100]
  identity(n,cont(x))
  container.push(x) if x > 50

console.log(container)