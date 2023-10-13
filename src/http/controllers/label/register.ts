import { makeRegisterLabelUseCase } from "@/use-cases/factories/make-register-label-coffee-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply){
    const registerLabelParamsSchema = z.object({
        coffeeId: z.string(),
    })
    
    const registerLabelBodySchema = z.object({
        name: z.string()
    })
    

    const { name} = registerLabelBodySchema.parse(request.body)
    const { coffeeId} = registerLabelParamsSchema.parse(request.params)

    const registerLabel = makeRegisterLabelUseCase()
    await registerLabel.execute({
        coffeeId,
        name
    })
    
    reply.status(201).send()
}