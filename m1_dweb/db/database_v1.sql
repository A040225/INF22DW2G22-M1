CREATE SCHEMA `usersdb`;

USE `usersdb`;

CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL auto_increment , `username` VARCHAR(255) NOT NULL, `password` VARCHAR(255) NOT NULL, `firstName` VARCHAR(255) NOT NULL, `lastName` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS `clientes` (`id` INTEGER NOT NULL auto_increment , `nome` VARCHAR(255) NOT NULL, `morada` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS `produtos` (`id` INTEGER NOT NULL auto_increment , `nome` VARCHAR(255) NOT NULL, `preco` DECIMAL NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS `faturas` (`id` INTEGER NOT NULL auto_increment , `descricao` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `clienteId` INTEGER NOT NULL, PRIMARY KEY (`id`), FOREIGN KEY (`clienteId`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS `detalheFaturas` (`quantidade` INTEGER(11) NOT NULL, `faturaId` INTEGER , `produtoId` INTEGER , PRIMARY KEY (`faturaId`, `produtoId`), FOREIGN KEY (`faturaId`) REFERENCES `faturas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`produtoId`) REFERENCES `produtos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;

INSERT INTO users (`username`,`password`,`firstName`,`lastName`,`createdAt`,`updatedAt`) VALUES ('user1','user1','first','user', NOW(), NOW()),('user2','user2','second','user',NOW(), NOW());
INSERT INTO clientes (`nome`,`morada`,`createdAt`,`updatedAt`) VALUES ('Manuel','Porto',NOW(), NOW()), ('Joao','Lisboa',NOW(), NOW()),('Mario','coimbra',NOW(), NOW());
INSERT INTO produtos (`nome`,`preco`,`createdAt`,`updatedAt`) VALUES ('macas',10,NOW(), NOW()),('maracuja',12,NOW(), NOW()),('manga',8,NOW(), NOW()),('laranjas',10,NOW(), NOW());
INSERT INTO faturas (`descricao`,`createdAt`,`updatedAt`,`clienteId`) VALUES ('saco maças',NOW(), NOW(),1),('saco laranjas',NOW(), NOW(),2);
INSERT INTO detalheFaturas (`quantidade`,`faturaId`,`produtoId`) VALUES (10,1,1),(6,2,2), (7,2,3);

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'secret'


