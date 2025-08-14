CREATE DATABASE Empresa;
SHOW DATABASES;
SHOW TABLES;
USE Empresa;
DROP TABLE Empleados;
CREATE TABLE Empleados (
	id_empleado INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,  
	nombre VARCHAR(20) NOT NULL,
	apellido VARCHAR(20) NOT NULL,
	fecha_contratacion DATETIME NOT NULL,
	salario FLOAT NOT NULL DEFAULT 0.00,
	departamento VARCHAR(20) NULL
);

DESCRIBE Empleados;

INSERT INTO Empleados (nombre, apellido, fecha_contratacion, salario, departamento)
VALUES ('Ana', 'García', '2022-01-15', 5500.50, 'Ventas');
INSERT INTO Empleados (nombre, apellido, fecha_contratacion, salario, departamento)
VALUES ('Juan', 'Pérez', '2023-05-20', 6200.75, 'Marketing');
INSERT INTO Empleados (nombre, apellido, fecha_contratacion, salario, departamento)
VALUES ('María', 'López', '2024-03-10', 7000.00, 'Recursos Humanos');
INSERT INTO Empleados (nombre, apellido, fecha_contratacion, salario, departamento)
VALUES ('Oscar', 'Pedron', '2020-02-10', 2300.20, 'Ministro Tiempo');
  
SELECT * FROM Empleados;