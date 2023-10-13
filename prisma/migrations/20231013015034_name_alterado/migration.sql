/*
  Warnings:

  - You are about to drop the column `coffeeId` on the `Label` table. All the data in the column will be lost.
  - Added the required column `coffee_id` to the `Label` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Label" DROP CONSTRAINT "Label_coffeeId_fkey";

-- AlterTable
ALTER TABLE "Label" DROP COLUMN "coffeeId",
ADD COLUMN     "coffee_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Label" ADD CONSTRAINT "Label_coffee_id_fkey" FOREIGN KEY ("coffee_id") REFERENCES "Coffee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
