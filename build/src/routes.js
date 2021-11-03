"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("./controller/user.controller");
var validateResources_1 = __importDefault(require("./middleware/validateResources"));
var user_schema_1 = require("./schema/user.schema");
function routes(app) {
    app.get("/healthcheck", function (req, res) { return res.sendStatus(200); }); //if this endpoint return a 200 the API is up and running
    //Can be called via Terminal curl http://localhost:1338/healthcheck
    app.post("/api/users", (0, validateResources_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
}
exports.default = routes;
