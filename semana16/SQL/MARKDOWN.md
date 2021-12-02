Fiz o arquivo na última hora, por isto não organizei por questões, apenas coloquei os comandos utilizados.

```
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1984-08-25",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Pires Glória",
2100000,
"1963-08-23",
"male"
); -- Duplicate entry for key PRIMARY

INSERT INTO Actor (id, name, salary)
VALUE(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
); -- column count doesn't march value count

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
"004",
400000,
"1949-04-18",
"male"
); -- field name doesn't have a deault value

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
1979-03-26,
"female"
); -- incorrect date value for column birth_date

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Antônio Fagundes",
400000,
"1979-03-26",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

SELECT * FROM Actor WHERE gender = "female";

SELECT salary FROM Actor WHERE name = "Tony Ramos";

SELECT * FROM Actor WHERE gender = "invalid";
-- todas as colunas null porque não há genero "invalid"

SELECT * FROM Actor WHERE salary <= 500000;

SELECT id, nome from Actor WHERE id = "002";
-- nome ao invés de name

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR "%g%");

CREATE TABLE Filmes(
id VARCHAR(255) PRIMARY KEY,
titulo VARCHAR(255) NOT NULL UNIQUE,
sinopse TEXT NOT NULL,
data_lancamento DATE NOT NULL,
avaliacao INT NOT NULL
);

INSERT INTO Movie (id, titulo, sinopse, data_lancamento, avaliacao) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
)
```