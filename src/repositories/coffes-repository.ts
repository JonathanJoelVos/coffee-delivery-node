import { Coffee } from "@prisma/client";

export interface CoffeesRepository {
    findAll(): Promise<Coffee[]>
}