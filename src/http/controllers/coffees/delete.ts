import { makeDeleteCoffeeUseCase } from "@/use-cases/factories/make-delete-coffee-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteCoffee(request: FastifyRequest, reply: FastifyReply){
    const coffeeDeleteParamsSchema = z.object({
        coffeeId: z.string(),
    })

    const { coffeeId } = coffeeDeleteParamsSchema.parse(request.params)
    
    const deleteCoffee = makeDeleteCoffeeUseCase()
    
    await deleteCoffee.execute({
        coffeeId
    })
    
    reply.status(201).send()
}