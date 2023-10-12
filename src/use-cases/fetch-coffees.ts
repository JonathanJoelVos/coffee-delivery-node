import { CoffeesRepository } from "@/repositories/coffes-repository";

export class FetchCoffeesUseCase {
    constructor(private coffeesRepository: CoffeesRepository){}

    async execute(){
        const coffees = this.coffeesRepository.findAll()

        return coffees
    }
}