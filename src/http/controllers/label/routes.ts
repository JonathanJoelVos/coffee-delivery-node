import { FastifyInstance } from "fastify";
import { list } from "./list";
import { register } from "./register";

export async function labelsRoutes(app: FastifyInstance){
    app.post('/labels/:coffeeId', register)
    app.get('/labels', list)
}