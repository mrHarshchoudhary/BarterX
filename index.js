const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${new Date()}: GET ${req.url}\n`;
  fs.appendFileSync("log.txt", log);

  if (req.method === "GET") {
    switch (req.url) {
      case "/":
        const index = "Welcome to BarterX";
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(index);
        break;

      case "/products":
        const products = "Here are the products up for Sale in BarterX";
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(products);
        break;

      case "/login":
        const login = "Login to BarterX";
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(login);
        break;

      case "/signup":
        const signup = "Sign up to the BarterX";
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(signup);
        break;

      case "/profile":
        const profile = "Trader Profile";
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(profile);
        break;

      case "/cart":
        const cart = "Your Shopping cart is here";
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(cart);
        break;

      case "/checkout":
        const checkout = "Let's start shipping";
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(checkout);
        break;

      case "/orders":
        const orders = "Your orders are here";
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(orders);
        break;

      case "/api/products":
        const api = [
          { id: 1, name: "Used Laptop", price: 300 },
          { id: 2, name: "Second-hand Bicycle", price: 50 },
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(api));
        break;

      case "/categories":
        const categories = "Browse categories";
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(categories);
        break;

      case "/chat":
        const chat = "Your Chat with fellow Traders";
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(chat);
        break;

      case "/contact":
        const contact = "Contact Us at";
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(contact);
        break;

      case "/about":
        const aboutPath = path.join(__dirname, "about.html");
        if (fs.existsSync(aboutPath)) {
          const aboutContent = fs.readFileSync(aboutPath, "utf-8");
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(aboutContent);
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("About page not found.");
        }
        break;

      default:
        const staticFilePath = path.join(__dirname, req.url); // Serve static files
        if (fs.existsSync(staticFilePath) && fs.lstatSync(staticFilePath).isFile()) {
          const ext = path.extname(staticFilePath).toLowerCase();
          const mimeTypes = {
            ".html": "text/html",
            ".css": "text/css",
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".gif": "image/gif",
            ".svg": "image/svg+xml",
          };
          const contentType = mimeTypes[ext] || "application/octet-stream";
          res.writeHead(200, { "Content-Type": contentType });
          res.end(fs.readFileSync(staticFilePath));
        } else {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              error: "Page not found",
              statusCode: 404,
            })
          );
        }
        break;
    }
  }
});

server.listen(8050, () => {
  console.log("Server initiated on port 8050...");
});
