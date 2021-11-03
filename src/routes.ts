//Routes is responsible for taking http request and forwarding it on to a controller
import {Express, Request, Response} from "express";//Interfaces import
import {createUserHandler} from "./controller/user.controller";
import validateResources from "./middleware/validateResources";
import {createUserSchema} from "./schema/user.schema";
import {createSessionSchema} from "./schema/session.schema";
import {createUserSessionHandler} from "./controller/session.controller";

function routes(app: Express){
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200)); //if this endpoint return a 200 the API is up and running
    //Can be called via Terminal curl http://localhost:1338/healthcheck
    app.post("/api/users", validateResources(createUserSchema), createUserHandler)

    app.post("/api/sessions", validateResources(createSessionSchema), createUserSessionHandler);
}

export default routes;