DELETE FROM chistes;

INSERT INTO categorias (id, nombre) VALUES
(1, 'Chistes muy malos'),
(2, 'Chistes tremendamente malos');

INSERT INTO chistes (id, chiste, categoria) VALUES
(1, 'PAPA como se escribe adhesivo? -lleva H?, SI, Pon Pegatina', 2),
(2, 'Me da una hamburguesa huerfana? - Como? Sin papas', 2),
(3, 'I am sorry, i burry', 2);