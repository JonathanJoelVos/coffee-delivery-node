-- CreateTable
CREATE TABLE "Coffee" (
    "id" TEXT NOT NULL,
    "label_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Coffee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Label" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Label_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Label_type_key" ON "Label"("type");

-- AddForeignKey
ALTER TABLE "Coffee" ADD CONSTRAINT "Coffee_label_id_fkey" FOREIGN KEY ("label_id") REFERENCES "Label"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
