import { makeDeleteLabelUseCase } from "@/use-cases/factories/make-delete-label-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteLabel(request: FastifyRequest, reply: FastifyReply){
    const labelDeleteParamsSchema = z.object({
        labelId: z.string(),
    })

    const { labelId } = labelDeleteParamsSchema.parse(request.params)
    
    const deleteLabel = makeDeleteLabelUseCase()
    
    await deleteLabel.execute({
        labelId
    })
    
    reply.status(201).send()
}