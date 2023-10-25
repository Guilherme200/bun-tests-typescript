import {describe, test, expect} from 'bun:test'
import {Id} from './Id';
import {validate} from "uuid"

describe('ID', () => {
  test('Gerar id único', () => {
    const id = Id.generate()
    expect(!!id && typeof id !== 'undefined').toBeTruthy()
    expect(validate(id)).toBeTruthy()
    expect(() => {
      Id.generate('teste')
    }).toThrow(new Error("Id inválido"))
  })
})