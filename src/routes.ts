//Routes is responsible for taking http request and forwarding it on to a controller
import {Express, Request, Response} from "express";//Interfaces import
import {createUserHandler} from "./controller/user.controller";
import validateResources from "./middleware/validateResources";
import {createUserSchema} from "./schema/user.schema";
import {createSessionSchema} from "./schema/session.schema";
import {createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler} from "./controller/session.controller";
import requireUser from "./middleware/requireUser";
import {createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema} from "./schema/product.schema";
import {
    createProductHandler,
    deleteProductHandler,
    getProductHandler,
    updateProductHandler
} from "./controller/product.controller";

function routes(app: Express){
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200)); //if this endpoint return a 200 the API is up and running
    //Can be called via Terminal curl http://localhost:1338/healthcheck
    app.post("/api/users", validateResources(createUserSchema), createUserHandler)

    app.post("/api/sessions", validateResources(createSessionSchema), createUserSessionHandler);

    app.get("/api/sessions", requireUser, getUserSessionsHandler);

    app.delete("/api/sessions/:productId", requireUser, deleteSessionHandler);

    app.post("/api/products", [requireUser, validateResources(createProductSchema)], createProductHandler);

    app.put("/api/products/:productId", [requireUser, validateResources(updateProductSchema)], updateProductHandler);

    app.get("/api/products/:productId", validateResources(getProductSchema), getProductHandler);

    app.delete("/api/products/:productId", [requireUser, validateResources(deleteProductSchema)], deleteProductHandler);
}

export default routes;