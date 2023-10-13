import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { CoffeesRepository } from "../coffes-repository";

export class PrismaCoffeesRepository implements CoffeesRepository {
    async findAll(){
        const coffees = await prisma.coffee.findMany({
            include: {
                labels: true
            }
        })

        return coffees
    }

    async create(data: Prisma.CoffeeUncheckedCreateInput){
        const coffee = await prisma.coffee.create({
            data
        })

        return coffee
    }
}