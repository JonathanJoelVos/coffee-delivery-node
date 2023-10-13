import { PrismaCoffeesRepository } from "@/repositories/prisma/prisma-coffes-repository";
import { makeFetchCoffeesUseCase } from "@/use-cases/factories/fetch-coffees-use-case";
import { FetchCoffeesUseCase } from "@/use-cases/fetch-coffees";
import { FastifyReply, FastifyRequest } from "fastify";

export async function all(request: FastifyRequest, reply: FastifyReply){
    const fetchCoffees = makeFetchCoffeesUseCase()
    const coffees = await fetchCoffees.execute()
    
    reply.status(200).send({
        coffees
    })
}