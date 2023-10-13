import { LabelRepository } from "@/repositories/label-repository";
import {  Label } from "@prisma/client";

interface DeleteLabelUseCaseParams {
    labelId: string
}

interface DeleteLabelUseCaseResponse {
    label: Label
}

export class DeleteLabelUseCase {
    constructor(private labelsRepository: LabelRepository){}

    async execute({
        labelId
    }: DeleteLabelUseCaseParams): Promise<DeleteLabelUseCaseResponse> {
        const label = await this.labelsRepository.delete(labelId)

        return {
            label
        }
    }
}