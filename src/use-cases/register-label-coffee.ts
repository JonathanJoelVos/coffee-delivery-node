import { CoffeesRepository } from "@/repositories/coffes-repository"
import { LabelRepository } from "@/repositories/label-repository"
import { Label } from "@prisma/client"

interface RegisterLabelCoffeeUseCaseParams {
    name: string
    coffeeId: string
}

interface RegisterLabelCoffeeUseCaseResponse {
  label: Label
}

export class RegisterLabelCoffeeUseCase {
  constructor(private labelRepository: LabelRepository) {}

  async execute({
    name,
    coffeeId
  }: RegisterLabelCoffeeUseCaseParams): Promise<RegisterLabelCoffeeUseCaseResponse> {

    const label = await this.labelRepository.create({
        coffee_id: coffeeId,
        name
    })

    return {
        label,
    }
  }
}
