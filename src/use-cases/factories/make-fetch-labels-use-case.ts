import { PrismaLabelRepository } from "@/repositories/prisma/prisma-label-repository"
import { FetchLabelsUseCase } from "../fetch-labels"

export function makeFetchLabelsUseCase(){
    const labelRepository = new PrismaLabelRepository()
    const useCase = new FetchLabelsUseCase(labelRepository)

    return useCase
}