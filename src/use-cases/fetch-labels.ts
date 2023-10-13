import { LabelRepository } from "@/repositories/label-repository";

export class FetchLabelsUseCase {
    constructor(private labelsRepository: LabelRepository){}

    async execute(){
        const labels = await this.labelsRepository.list()

        return labels
    }
}