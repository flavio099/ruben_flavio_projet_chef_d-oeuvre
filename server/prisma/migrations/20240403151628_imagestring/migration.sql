/*
  Warnings:

  - Made the column `image` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Event` MODIFY `image` VARCHAR(191) NOT NULL;

ALTER TABLE `Event` MODIFY `image` VARCHAR(191) NOT NULL DEFAULT 'IMG_0838.JPG';

ALTER TABLE `Event` ALTER COLUMN `image` DROP DEFAULT;





