import {Pessoa} from './pessoa'
import {describe, test, expect} from 'bun:test'

describe('Pessoa', () => {
  const dados = {nome: 'João', email: 'joão@email.com'}
  const pessoa = new Pessoa(dados);

  test('Instanciar pessoa', () => {
    expect(pessoa).toMatchObject(dados)
  })

  test('Alterar perfil de pessoa', () => {
    pessoa.alterarPerfil()
    expect(pessoa.admin).toBeTruthy()
    pessoa.alterarPerfil()
    expect(pessoa.admin).toBeFalsy()
  })

  test('Testar com nome inválido', () => {
    expect(() => {
      new Pessoa({nome: 'jao', email: 'jao@email.com'});
    }).toThrow(new Error('Nome deve possuir no mínimo 3 caracteres.'))
  })

  test('Testar com email inválido', () => {
    expect(() => {
      new Pessoa({nome: 'João', email: 'joão.email.com'});
    }).toThrow(new Error('Email inválido.'))
  })
})