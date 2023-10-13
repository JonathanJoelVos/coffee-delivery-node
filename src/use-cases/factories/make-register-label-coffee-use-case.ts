import { PrismaLabelRepository } from "@/repositories/prisma/prisma-label-repository"
import { RegisterLabelCoffeeUseCase } from "../register-label-coffee"

export function makeRegisterLabelUseCase(){
    const labelRepository = new PrismaLabelRepository()
    const useCase = new RegisterLabelCoffeeUseCase(labelRepository)

    return useCase
}