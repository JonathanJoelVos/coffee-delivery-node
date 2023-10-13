import { PrismaLabelRepository } from "@/repositories/prisma/prisma-label-repository";
import { DeleteLabelUseCase } from "../delete-label";

export function makeDeleteLabelUseCase(){
    const labelRepository = new PrismaLabelRepository()
    const useCase = new DeleteLabelUseCase(labelRepository)

    return useCase
}