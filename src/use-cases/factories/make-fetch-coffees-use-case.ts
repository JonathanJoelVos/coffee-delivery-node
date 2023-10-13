import { PrismaCoffeesRepository } from "@/repositories/prisma/prisma-coffees-repository"
import { FetchCoffeesUseCase } from "../fetch-coffees"

export function makeFetchCoffeesUseCase(){
    const coffeeRepository = new PrismaCoffeesRepository()
    const useCase = new FetchCoffeesUseCase(coffeeRepository)

    return useCase
}