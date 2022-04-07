const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
   // Normaliza a url removendo a querystring e a barra final
   // Opcional e usando letras minúsculas
   const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLocaleLowerCase()
   switch (path) {
      case '':
         res.writeHead(200, { 'Content-Type': 'text/plain' })
         res.end('Homepage')
         break
      case '/about':
         res.writeHead(200, { 'Content-Type': 'text/plain' })
         res.end('About')
         break
      default:
         res.writeHead(404, { 'Content-Type': 'text/plain' })
         res.end('Not Found')
         break
   }
})

server.listen(port, () => {
   console.log(`server started on port ${port}\n` +
      'press Ctrl-C to terminate...')
})