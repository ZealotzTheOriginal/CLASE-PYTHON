PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS categorias (
  id          INTEGER PRIMARY KEY,
  nombre      TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS chistes (
  id       INTEGER PRIMARY KEY,
  chiste TEXT NOT NULL,
  categoria INTEGER NOT NULL,
  FOREIGN KEY(categoria) REFERENCES categorias(id) ON DELETE CASCADE
);