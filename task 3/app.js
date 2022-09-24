const http = require("http")
const port = 8000
const url = require("url")
const server = http.createServer((req,res)=>{
const path = url.parse(req.url).pathname
switch(path){
    case "/":
    res.end("default")
    break;
    case "/hello":
    res.end("hello")
    break;
    case "/task":
    res.end("default")
    break;
    default:
    res.end("page not found")
    break;


}
})
server.listen(port,"127.0.0.1",()=>{console.log("running")})




