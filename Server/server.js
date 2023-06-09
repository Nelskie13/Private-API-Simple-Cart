const http = require("node:http");
const hostname = "127.0.0.2";
const port = 3450;

const items = [
  {
    id: 0,
    Item: "LG Oled TV",
    Price: 49299,
    Category: "Electronics",
    Quantity: 5,
  },
  {
    id: 1,
    Item: "Asus Vivobook 15",
    Price: 35998,
    Category: "Electronics",
    Quantity: 10,
  },
  {
    id: 2,
    Item: "Samsung Refrigerator",
    Price: 19899,
    Category: "Appliances",
    Quantity: 3,
  },
  {
    id: 3,
    Item: "Yamaha NMAX 155cc",
    Price: 121999,
    Category: "Motorcycles",
    Quantity: 6,
  },
  {
    id: 4,
    Item: "IPhone 14 Pro Max",
    Price: 80000,
    Category: "Smartphone",
    Quantity: 1,
  },
  {
    id: 5,
    Item: "Sinigang na Baboy",
    Price: 250,
    Category: "Dish",
    Quantity: 2,
  },
  {
    id: 6,
    Item: "Polo Shirt",
    Price: 850,
    Category: "Shirt",
    Quantity: 6,
  },
  {
    id: 7,
    Item: "JBL Speaker",
    Price: 15000,
    Category: "Speaker",
    Quantity: 1,
  },
];

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*"); //Now to include CORS
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Max-Age", "2592000"); //Max age is 30 days

  // Switch statement to handle different URL routes in the HTTP server
  switch (req.url) {
    case "/items":
      // If the requested URL is "/items"
      // Set the response status code to 200 (OK)
      res.writeHead(200);
      // Convert the "items" array to JSON format and send it as the response body
      res.end(JSON.stringify(items));
      break;
    default:
      // If the requested URL doesn't match any known routes
      // Set the response status code to 404 (Not Found)
      res.writeHead(404);
      // Send an error message in JSON format as the response body
      res.end(JSON.stringify({ error: "Invalid API Request" }));
  }
});

// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
