import http from "http";
import fs from "fs"

const server = http.createServer((req,res)=>{
    const log = `${new Date()}: GET ${req.url}\n`;
    fs.appendFileSync("log.txt",log)
    if(req.method === 'GET'){
    switch(req.url){

        
        case "/":
            let index = "Welcome to BarterX"
            res.write(index)
            res.end()
            break;

        case "/products":
            let products = "Here are the products up for sale in BarterX";
            res.write(products)
            res.end();
            break;
        
        case "/login":
            let login = "Login to the BarterX";
            res.write(login);
            res.end();
            break;

        case "/signup":
            let signup = "Sign up to the BarterX";
            res.write(signup);
            res.end();
            break;

        case "/profile":
            let profile = "Trader Profile";
            res.write(profile);
            res.end();
            break;
        
        case "/cart":
            let cart = "Your Shopping Cart is here";
            res.write(cart);
            res.end();
            break;

        case "/checkout":
            let checkout = "Let's start Shipping";
            res.write(checkout);
            res.end();
            break;

        case "/orders":
            let orders = "Your Orders are here";
            res.write(orders);
            res.end();
            break;

        case "/api/products":
            let api = [
                { "id": 1, "name": "Used Laptop", "price": 300 },
                { "id": 2, "name": "Second-hand Bicycle", "price": 50 }
            ]
            res.write(JSON.stringify(api));
            res.end();
            break;
        
        case "/categories":
            let categories = "Browse Categories";
            res.write(categories);
            res.end();
            break;

        case "/chat":
            let chat = "Your Chat with fellow Traders";
            res.write(chat);
            res.end();
            break;

        case "/contact":
            let contact = "Contact Us at";
            res.write(contact);
            res.end();
            break;

        case "/about":
            let about = fs.readFileSync("about.html","utf-8");
            res.writeHead(200, { 'Content-Type': 'text/html' }); 
            res.end(about);
            break;

        default:
            let error = {
                "eror" : "Page not found",
                "statusCode":404
            };
            // res.json(error)
            res.write(JSON.stringify(error))
            res.end();
            break;
    }
}
})

let port =8050;
server.listen(port,()=>{
    console.log(`Server intiated on port ${port}`);
})


