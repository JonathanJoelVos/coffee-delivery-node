import { prisma } from "@/lib/prisma";
import { Decimal } from "@prisma/client/runtime/library";
import { CoffeesRepository } from "../coffes-repository";

export class PrismaCoffeesRepository implements CoffeesRepository {
    async findAll(){
        const coffees = await prisma.coffee.findMany()

        return coffees
    }
}