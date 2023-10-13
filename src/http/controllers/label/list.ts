import { makeFetchCoffeesUseCase } from "@/use-cases/factories/make-fetch-coffees-use-case";
import { makeFetchLabelsUseCase } from "@/use-cases/factories/make-fetch-labels-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function list(request: FastifyRequest, reply: FastifyReply){
    const fetchLabels = makeFetchLabelsUseCase()
    const labels = await fetchLabels.execute()
    
    reply.status(200).send({
        labels
    })
}