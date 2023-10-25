import {describe, test, expect} from 'bun:test'
import {validate} from 'uuid'
import {Id} from '@/Id/Id'

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