-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` ENUM('ADMIN', 'ORDINAIRE') NOT NULL DEFAULT 'ORDINAIRE';
