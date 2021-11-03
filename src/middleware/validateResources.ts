/*
When a request comes in it provides a schema in the middleware and validate the request against that schema
Validation Library used is ZOD
 */
import {Request, Response, NextFunction} from "express";
import {AnyZodObject} from "zod";

const validate =
    (schema: AnyZodObject) =>
    (req: Request, res: Response, next: NextFunction) => { //Technice is called Currying. Second Function is a express route call that Validates the request Object against the schema
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (e: any) {
        return res.status(400).send(e.errors);
    }
}

export default validate;