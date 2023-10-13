import { Label, Prisma } from "@prisma/client";

export interface LabelRepository {
    create(data: Prisma.LabelUncheckedCreateInput): Promise<Label>
    list(): Promise<Label[]>
}