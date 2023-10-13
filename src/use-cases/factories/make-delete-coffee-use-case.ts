import { PrismaCoffeesRepository } from "@/repositories/prisma/prisma-coffees-repository";
import { DeleteCoffeeUseCase } from "../delete-coffee";

export function makeDeleteCoffeeUseCase(){
    const coffeeRepository = new PrismaCoffeesRepository()
    const useCase = new DeleteCoffeeUseCase(coffeeRepository)

    return useCase
}