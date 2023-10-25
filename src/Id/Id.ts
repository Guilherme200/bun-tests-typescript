import {v4 as uuidv4, validate} from 'uuid'

export class Id {
  static generate(id: string = uuidv4()) {
    if (!validate(id)) {
      throw new Error('Id inválido')
    }

    return id;
  }
}