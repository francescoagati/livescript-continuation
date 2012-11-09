identity = (el,callback) -> 
  delayed = -> callback(el)
  setTimeout delayed,100
  

container=[]

for n in [1 to 100]
  identity(n,cont(x))
  # cont(x) is the continuation that put the value of cb function inside x
  container.push(x) if x > 50

console.log(container)