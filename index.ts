import express from "express";
import {Pessoa} from "./src/pessoa/pessoa.ts";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  const pessoa = new Pessoa({nome: 'teste', email: 'teste@email.com'});
  res.send(pessoa);
});

app.listen(port);
