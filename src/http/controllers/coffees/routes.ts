import { FastifyInstance } from "fastify";
import { all } from "./all";
import { deleteCoffee } from "./delete";
import { register } from "./register";

export async function coffeeRoutes(app: FastifyInstance){
    app.get('/coffees', all)
    app.post('/coffees/register', register)
    app.delete('/coffees/:coffeeId', deleteCoffee)
}