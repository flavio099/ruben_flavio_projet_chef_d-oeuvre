/*
  Warnings:

  - You are about to drop the column `categorie` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `nom` on the `Event` table. All the data in the column will be lost.
  - Added the required column `adresse` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomEvent` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prix` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `promoName` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event` DROP COLUMN `categorie`,
    DROP COLUMN `nom`,
    ADD COLUMN `adresse` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `nomEvent` VARCHAR(191) NOT NULL,
    ADD COLUMN `prix` INTEGER NOT NULL,
    ADD COLUMN `promoName` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
