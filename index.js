const server = Bun.serve({
    port: 8050,
    fetch(req) {
        const url = new URL(req.url);
        switch (url.pathname) {
            case "/": return new Response("Welcome to BarterX");
            case "/products": return new Response("Here are the products up for sale in BarterX");
            case "/login": return new Response("Login to the BarterX");
            case "/signup": return new Response("Sign up to the BarterX");
            case "/profile": return new Response("Trader Profile");
            case "/cart": return new Response("Your Shopping Cart is here");
            case "/checkout": return new Response("Let's start Shipping");
            case "/orders": return new Response("Your Orders are here");
            case "/api/products":
                const apiData = [
                    { "id": 1, "name": "Used Laptop", "price": 300 },
                    { "id": 2, "name": "Second-hand Bicycle", "price": 50 }
                ];
                return new Response(JSON.stringify(apiData));
            case "/categories": return new Response("Browse Categories");
            case "/chat": return new Response("Your Chat with fellow Traders");
            case "/contact": return new Response("Contact Us at");
            case "/about": return new Response(Bun.file("./about.html"));               
            default:
                return Response.json(
                    { error: "Page not found", statusCode: 404 },
                    {
                        "status": 404,
                        headers: { "Content-Type": "application/json" }
                    }
                );
        }
    },
});

console.log(`Server listening on http://localhost:${server.port}`);