const http = require('http')

const server = http.createServer(function(req, res){
        // Conditional Rendering
        if(req.url === '/'){
            res.end(`
                <style>h1{color: red;}</style>
                <h1>Welcome to the homepage</h1>
                <p> lorem ipsum dolor sit, amet consecitur </p>
                `)
        }
        else if(req.url === '/about'){
            res.end("theres nothing to know about me...")
        }
        else{
            res.end("404, Page not Found.")
        }
})

server.listen(5000, ()=>{
    console.log(`listening on http://localhost:${5000}`)
})