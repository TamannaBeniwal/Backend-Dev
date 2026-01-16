const http = require("http");
const querystring = require("querystring");

const port = 3000;

const server = http.createServer((req, res) => {

    // LOGIN ROUTE
    if (req.url === "/login" && req.method === "POST") {

        let data = "";

        // Collect incoming data
        req.on("data", (chunk) => {
            data += chunk.toString();
        });

        // When data collection ends
        req.on("end", () => {
            console.log("Raw form data:", data);

            // Convert urlencoded data → JS Object
            const parsedData = querystring.parse(data);
            console.log("Parsed JS Object:", parsedData);

            // JS Object → JSON String
            const jsonString = JSON.stringify(parsedData);
            console.log("JSON String:", jsonString);

            // JSON String → JS Object
            const finalData = JSON.parse(jsonString);
            console.log("Final JSON Data:", finalData);

            // Send response
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({
                    message: "Data received successfully",
                    data: finalData
                })
            );
        });

        return;
    }

    // DEFAULT ROUTE
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running");
});

// Start server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});