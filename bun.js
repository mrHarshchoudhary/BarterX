import { serve } from "bun"; // Importing Bun's HTTP server
PORT=8000
const server = serve({
  fetch(req) {
    const log = `${new Date()}: GET ${req.url}\n`;
    Bun.write("log.txt", log, { append: true });

    if (req.method === "GET") {
      switch (req.url) {
        case "/":
          return new Response("Welcome to BarterX");

        case "/products":
          return new Response("Here are the products up for Sale in BarterX");

        case "/login":
          return new Response("Login to BarterX");

        case "/signup":
          return new Response("Sign up to the BarterX");

        case "/profile":
          return new Response("Trader Profile");

        case "/cart":
          return new Response("Your Shopping cart is here");

        case "/checkout":
          return new Response("Let's start shipping");

        case "/orders":
          return new Response("Your orders are here");

        case "/api/products":
          const api = [
            { id: 1, name: "Used Laptop", price: 300 },
            { id: 2, name: "Second-hand Bicycle", price: 50 },
          ];
          return new Response(JSON.stringify(api), {
            headers: { "Content-Type": "application/json" },
          });

        case "/categories":
          return new Response("Browse categories");

        case "/chat":
          return new Response("Your Chat with fellow Traders");

        case "/contact":
          return new Response("Contact Us at");

        case "/about":
          const aboutPath = path.join(
            path.dirname(import.meta.url),
            "about.html"
          );
          if (fs.existsSync(aboutPath)) {
            const aboutContent = fs.readFileSync(aboutPath, "utf-8");
            return new Response(aboutContent, {
              headers: { "Content-Type": "text/html" },
            });
          } else {
            return new Response("About page not found.");
          }

        default:
          let error = {
            error: "Page not found",
            statusCode: 404,
          };
          return new Response(JSON.stringify(error), {
            status: 404,
            headers: { "Content-Type": "application/json" },
          });
      }
    }
  },
});


