desc 'default'
task :default do
  cnt=`livescript -cp prova.ls`
  open('prova.cjs','w') {|f| f.puts(cnt) }
  `continuation prova.cjs -po prova.js`
end