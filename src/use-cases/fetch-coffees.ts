import { CoffeesRepository } from "@/repositories/coffes-repository";

export class FetchCoffeesUseCase {
    constructor(private coffeesRepository: CoffeesRepository){}

    async execute(){
        const coffees = await this.coffeesRepository.findAll()

        return coffees
    }
}