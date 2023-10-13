import { PrismaCoffeesRepository } from "@/repositories/prisma/prisma-coffees-repository"
import { FetchCoffeesUseCase } from "../fetch-coffees"
import { RegisterCoffeeUseCase } from "../register-coffee"

export function makeRegisterCoffeeUseCase(){
    const coffeeRepository = new PrismaCoffeesRepository()
    const useCase = new RegisterCoffeeUseCase(coffeeRepository)

    return useCase
}