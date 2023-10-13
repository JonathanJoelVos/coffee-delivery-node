import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { LabelRepository } from "../label-repository";

export class PrismaLabelRepository implements LabelRepository {
    async create(data: Prisma.LabelUncheckedCreateInput) {
        const label = await prisma.label.create({
            data
        })

        return label
    }

    async list(){
        const labels = await prisma.label.findMany()

        return labels
    }

    async delete(id: string) {
        console.log('oi')
        const label = await prisma.label.delete({
            where: {
                id
            }
        })

        return label
    }
}