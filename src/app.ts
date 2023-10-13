import fastify from "fastify"; 
import { coffeeRoutes } from "./http/controllers/coffees/routes";
import { labelsRoutes } from "./http/controllers/label/routes";

export const app = fastify()  


app.register(coffeeRoutes)
app.register(labelsRoutes)