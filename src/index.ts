import http from "http";
import { routes } from "./routes";

const server = http.createServer(async (req, res) => {
    if (req.url === undefined) {
        return;
    }

    let jsonResponse = "{}";

    for (let route of routes) {
        let matchedRoute = req.url.match(route.path);

        if (matchedRoute !== null && req.method == route.method) {
            if (route.handler !== undefined) {
                try {
                    let requestBody = {
                        id: 0
                    };
                    if (req.method == "POST" || req.method == "PUT") {
                        requestBody = JSON.parse((await req.toArray()).toString());
                    }

                    if (matchedRoute[1] != undefined) {
                        requestBody.id = Number.parseInt(matchedRoute[1]);
                    }

                    jsonResponse = JSON.stringify(route.handler(requestBody));
                    res.statusCode = 200;
                } catch (e:any) {
                    res.statusCode = 400;
                    jsonResponse = e.message;
                }
            }

            break;
        }
    }

    res.setHeader("Content-Type", "application/json");
    res.end(jsonResponse);
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
