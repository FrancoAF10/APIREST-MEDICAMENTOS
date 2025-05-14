CREATE DATABASE RECETA;
USE RECETA;

CREATE TABLE MEDICAMENTOS(
id              INT PRIMARY KEY AUTO_INCREMENT,
tipo            ENUM('Antiinflamatorio','Antialérgicos','Antidepresivo','antiinfecciosos') NOT NULL,
nombre          VARCHAR(120) NOT NULL,
nomComercial    VARCHAR(60)NULL,
presentacion    ENUM('Sólida','Semisólida','Líquida') NOT NULL,
receta          ENUM('S','N') NOT NULL,
precio          DECIMAL(7,2) NOT NULL
)ENGINE= INNODB;

INSERT INTO MEDICAMENTOS (tipo, nombre, nomComercial, presentacion, receta, precio) VALUES
('Antiinflamatorio', 'Ibuprofeno', 'Dalsy', 'Líquida', 'S', 45.00),
('Antialérgicos', 'Loratadina', 'Clarityne', 'Sólida', 'N', 23.50),
('Antidepresivo', 'Sertralina', 'Zoloft', 'Sólida', 'S', 120.00),
('antiinfecciosos', 'Amoxicilina', 'Amoxil', 'Sólida', 'S', 75.20),
('Antiinflamatorio', 'Diclofenaco', 'Voltaren', 'Semisólida', 'S', 60.00),
('Antialérgicos', 'Cetirizina', 'Zyrtec', 'Sólida', 'N', 29.90),
('Antidepresivo', 'Fluoxetina', 'Prozac', 'Sólida', 'S', 135.00),
('antiinfecciosos', 'Ciprofloxacino', 'Cipro', 'Sólida', 'S', 98.00),
('Antiinflamatorio', 'Naproxeno', 'Aleve', 'Sólida', 'N', 40.00),
('Antialérgicos', 'Fexofenadina', 'Allegra', 'Sólida', 'N', 32.75),
('Antidepresivo', 'Escitalopram', 'Lexapro', 'Sólida', 'S', 150.00),
('antiinfecciosos', 'Metronidazol', 'Flagyl', 'Líquida', 'S', 66.30);


SELECT* FROM MEDICAMENTOS;