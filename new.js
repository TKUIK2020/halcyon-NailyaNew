const http = require('http');
const html =`
  <html>
      <head>
          <meta charset="utf-8">
          <title>Hello</title>
		  <link rel="stylesheet" href="app.css">
      </head>
          <body>
          <h1>Привет мир!</h1>
		  <button>Нажми сюда</button>
		  <img src="https://fotovmire.ru/wp-content/uploads/2019/04/12771/shhenok-prisel-otdohnut-na-travku-640x360.jpg" ></img>
		  <script src="app.js">
		  </script>
          </body>
  </html>
`;
const css = `
		  body {
		  margin:0;
		  padding:0;
		  text-align: center;
		  }
		  h1 {
		  background-color:#990099;
		  color:white;
		  padding: .5em;
		  font-family:'Consolas'
		  }
`;
const js = `
	const button = document.querySelector('button');
	button.addEventListener('click', event => alert('Node.js в действии'));
`;

const server = http.createServer((req, res)=>{
	switch(req.url){
	case '/':
		res.writeHead(200,{'Content-Type': 'text/html'});
		res.end(html);
	
		
	case '/app.css':
		res.writeHead(200,{'Content-Type': 'text/css'});
		res.end(css);
	

	case '/app.js':
		res.writeHead(200,{'Content-Type': 'text/javascript'});
		res.end(js);
	
	
	default:
		res.writeHead(404,{'Content-Type': 'text/plain'});
		res.end("404 Не найдено");
	
	}
	
	}).listen(3000);