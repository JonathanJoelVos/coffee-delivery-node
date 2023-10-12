import { FastifyInstance } from "fastify";
import { all } from "./all";

export async function coffeeRoutes(app: FastifyInstance){
    app.get('/coffees', all)
}