import fastify from "fastify"; 
import { coffeeRoutes } from "./http/controllers/coffees/routes";
import { labelsRoutes } from "./http/controllers/label/routes";
import cors from '@fastify/cors'


export const app = fastify()  

app.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
})

app.register(coffeeRoutes)
app.register(labelsRoutes)