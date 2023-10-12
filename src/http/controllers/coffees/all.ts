import { FastifyReply, FastifyRequest } from "fastify";

export async function all(request: FastifyRequest, reply: FastifyReply){
    reply.status(200).send({
        message: 'Te amo amor'
    })
}