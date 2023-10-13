import fastify from "fastify"; 
import { coffeeRoutes } from "./http/controllers/coffees/routes";

export const app = fastify()  


app.register(coffeeRoutes)