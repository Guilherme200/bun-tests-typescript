import express from "express";
import {PessoaRepositorio} from './src/repositorios/pessoa-repositorio'

const app = express();
const port = 4000;
app.use(express.json());

const respositorio = (new PessoaRepositorio())

app.get("/", (req, res) => {
  res.send(respositorio.buscarTodas());
});

app.post("/", (req, res) => {
  const data = req.body;
  res.send(respositorio.criar(data));
});

app.put("/:id", (req, res) => {
  const data = req.body;
  const id = req.params.id;
  res.send(respositorio.editar(id, data));
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(respositorio.delete(id));
});

app.listen(port);

export default app;