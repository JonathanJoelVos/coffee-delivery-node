import { CoffeesRepository } from "@/repositories/coffes-repository"
import { Coffee } from "@prisma/client"

interface RegisterCoffeeUseCaseParams {
    name: string        
    description: string 
    price: number
}

interface RegisterCoffeeUseCaseResponse {
  coffee: Coffee
}

export class RegisterCoffeeUseCase {
  constructor(private coffeesRepository: CoffeesRepository) {}

  async execute({
    description,
    name,
    price
  }: RegisterCoffeeUseCaseParams): Promise<RegisterCoffeeUseCaseResponse> {

    const coffee = await this.coffeesRepository.create({
        description,
        name,
        price,
    })

    return {
        coffee,
    }
  }
}
