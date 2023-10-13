import { FastifyInstance } from "fastify";
import { all } from "./all";
import { register } from "./register";

export async function coffeeRoutes(app: FastifyInstance){
    app.get('/coffees', all)
    app.post('/coffees/register', register)
}