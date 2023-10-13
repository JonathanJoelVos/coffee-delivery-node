import { makeFetchCoffeesUseCase } from "@/use-cases/factories/make-fetch-coffees-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function all(request: FastifyRequest, reply: FastifyReply){
    const fetchCoffees = makeFetchCoffeesUseCase()
    const coffees = await fetchCoffees.execute()
    
    reply.status(200).send({
        coffees
    })
}