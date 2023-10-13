import { Coffee, Prisma } from "@prisma/client";

export interface CoffeesRepository {
    findAll(): Promise<Coffee[]>
    create(data: Prisma.CoffeeUncheckedCreateInput): Promise<Coffee>
}