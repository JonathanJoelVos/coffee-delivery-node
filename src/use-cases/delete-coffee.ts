import { CoffeesRepository } from "@/repositories/coffes-repository";
import { Coffee } from "@prisma/client";

interface DeleteCoffeeUseCaseParams {
    coffeeId: string
}

interface DeleteCoffeeUseCaseResponse {
  coffee: Coffee
}

export class DeleteCoffeeUseCase {
    constructor(private coffeesRepository: CoffeesRepository){}

    async execute({
        coffeeId
    }: DeleteCoffeeUseCaseParams): Promise<DeleteCoffeeUseCaseResponse> {
        const coffee = await this.coffeesRepository.delete(coffeeId)

        return {
            coffee
        }
    }
}