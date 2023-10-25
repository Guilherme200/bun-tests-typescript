
import {describe, test, expect } from 'bun:test'
import request from 'supertest'
import app from '../index'
import { PessoaRepositorio } from '@/repositorios/pessoa-repositorio';

const port = 4000;

describe('API', () => {
  test('Deve buscar todas as pessoas', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('Deve criar uma pessoa', async () => {
    const novaPessoa = { nome: 'João', email: 'joao@example.com' };
    const response = await request(app).post('/').send(novaPessoa).set('Host', `localhost:${port}`);
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe(novaPessoa.nome);
    expect(response.body.email).toBe(novaPessoa.email);
  });

  test('Deve editar uma pessoa', async () => {
    const pessoaData = { nome: 'Maria', email: 'maria@example.com' };
    const responseCriar = await request(app).post('/').send(pessoaData).set('Host', `localhost:${port}`);
    const pessoaExistente = responseCriar.body
    
    const newData = { nome: 'Novo Nome', email: 'novo@example.com' };
    const response = await request(app).put(`/${pessoaExistente.id}`).send(newData).set('Host', `localhost:${port}`);
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe(newData.nome);
    expect(response.body.email).toBe(newData.email);
  });

  test('Deve excluir uma pessoa', async () => {
    const repositorio = new PessoaRepositorio()

    const pessoaExistente = repositorio.criar({ nome: 'Ana Maria', email: 'ana@example.com' });
    const response = await request(app).delete(`/${pessoaExistente.id}`).set('Host', `localhost:${port}`);
    expect(response.status).toBe(200);
    expect(response.body).toBeFalsy();
  });
});
