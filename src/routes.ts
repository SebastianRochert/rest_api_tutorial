//Routes is responsible for taking http request and forwarding it on to a controller
import {Express, Request, Response} from "express"; //Interfaces import

function routes(app: Express){
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200)); //if this endpoint return a 200 the API is up and running
    //Can be called via Terminal curl http://localhost:1338/healthcheck
}

export default routes;