import { makeFetchCoffeesUseCase } from "@/use-cases/factories/make-fetch-coffees-use-case";
import { makeRegisterCoffeeUseCase } from "@/use-cases/factories/make-register-coffee-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply){
    const registerCoffeeBodySchema = z.object({
        description: z.string(),
        name: z.string(),
        price: z.number()
    })
    

    const {description, name, price} = registerCoffeeBodySchema.parse(request.body)

    const registerCoffee = makeRegisterCoffeeUseCase()
    await registerCoffee.execute({
        description,
        name,
        price
    })
    
    reply.status(201).send()
}