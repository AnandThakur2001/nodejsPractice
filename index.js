const http=require("http");
const PORT = 2000;
const hostname="localhost";
const fs =require("fs");
const home = fs.readFileSync("./index.html");
const server = http.createServer((request,response,next)=>{
     
    if(request.url==="/"){
       return response.end("home");
    }

    if(request.url==="/about"){
        return response.end("<h1>about page</h1>");
    }
    if(request.url==="/service"){
        return response.end("<h1>service page</h1>");
    }
    else{
        return response.end("<h1>404 page not found</h1>");
    }
});

server.listen(PORT,hostname,()=>{
    console.log(`server is working on http://${hostname}:${PORT}`);
})