//console.log("hello world from our API");
import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser"
import log from "./middleware/log";

const port = config.get<number>("port");

const app = express();

app.use(express.json());

app.use(deserializeUser);

app.use("/api/users", log);

app.listen(port, async() => { //Tutorial said 1337 but this address is already in use
    //console.log("App is running");
    logger.info(`App is running at http://localhost:${port }`);
    await connect();

    routes(app);
})
