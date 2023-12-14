-- CreateTable
CREATE TABLE "DigitalProducts" (
    "product_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "product_img_link" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "subheading" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pricing" INTEGER NOT NULL,
    "product_domain" TEXT NOT NULL,
    "file_url" TEXT NOT NULL,
    "button_title" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "pageViews" INTEGER NOT NULL DEFAULT 0,
    "salesConverted" INTEGER NOT NULL DEFAULT 0,
    "pageViewUpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DigitalProducts_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "CustomerInformation" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "name" TEXT,
    "mobile" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomerInformation_pkey" PRIMARY KEY ("id")
);
