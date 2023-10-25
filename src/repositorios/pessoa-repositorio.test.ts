import { Pessoa } from '@/pessoa/pessoa';
import {describe, test, expect, beforeEach} from 'bun:test'
import { PessoaRepositorio } from '@/repositorios/pessoa-repositorio';

describe('Testes do repositório de pessoa', () => {

  test('deve criar uma pessoa', () => {
    const repositorio = new PessoaRepositorio();
    const pessoa = repositorio.criar({
        nome: 'João',
        email: 'joao@example.com'
    })

    expect(pessoa).toBeInstanceOf(Pessoa);
    expect(pessoa.nome).toBe('João');
    expect(pessoa.email).toBe('joao@example.com');
  });

  test('deve buscar todas as pessoas', () => {
    const repositorio = new PessoaRepositorio();
    const pessoas = repositorio.buscarTodas();
    expect(pessoas).toEqual([]);
  });

  test('deve buscar uma pessoa por ID', () => {
    const repositorio = new PessoaRepositorio();
    const pessoaData = { nome: 'Maria', email: 'maria@example.com' };
    const pessoa = repositorio.criar(pessoaData);
    const result = repositorio.buscarPorId(pessoa.id!);
    expect(result).toBe(pessoa);
  });

  test('deve editar uma pessoa por ID', () => {
    const repositorio = new PessoaRepositorio();
    const pessoaData = { nome: 'Pedro', email: 'pedro@example.com' };
    const pessoa = repositorio.criar(pessoaData);

    const novoData = { nome: 'Novo Nome', email: 'novo@example.com' };
    const resultado = repositorio.editar(pessoa.id!, novoData);

    expect(resultado).not.toBeNull();
    expect(resultado?.nome).toBe('Novo Nome');
    expect(resultado?.email).toBe('novo@example.com');
  });

  test('não deve editar uma pessoa inexistente', () => {
    const repositorio = new PessoaRepositorio();
    const pessoaData = { nome: 'Carlos', email: 'carlos@example.com' };

    const novoData = { nome: 'Novo Nome', email: 'novo@example.com' };
    const resultado = repositorio.editar('id_inexistente', novoData);

    expect(resultado).toBeNull();
  });

  test('deve excluir uma pessoa por ID', () => {
    const repositorio = new PessoaRepositorio();
    const pessoaData = { nome: 'Ana Maria', email: 'ana@example.com' };
    const pessoa = repositorio.criar(pessoaData);

    const resultado = repositorio.delete(pessoa.id!);

    expect(resultado).toBe(true);
    const busca = repositorio.buscarPorId(pessoa.id!);
    expect(busca).toBeUndefined();
  });

  test('não deve excluir uma pessoa inexistente', () => {
    const repositorio = new PessoaRepositorio();
    const resultado = repositorio.delete('id_inexistente');
    expect(resultado).toBe(false);
  });

  test('deve editar o perfil de uma pessoa por ID', () => {
    const repositorio = new PessoaRepositorio();
    const pessoaData = { nome: 'Laura', email: 'laura@example.com' };
    const pessoa = repositorio.criar(pessoaData);

    const resultado = repositorio.editarPerfil(pessoa.id!);

    expect(resultado).not.toBeNull();
    expect(resultado?.admin).toBe(true);
  });

  test('não deve editar o perfil de uma pessoa inexistente', () => {
    const repositorio = new PessoaRepositorio();
    const resultado = repositorio.editarPerfil('id_inexistente');
    expect(resultado).toBeNull();
  });
})