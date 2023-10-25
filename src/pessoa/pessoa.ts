import {Id} from "../Id/Id";
import {PessoaInterface, PessoaProp} from "./PessoaInterface.ts";

export class Pessoa implements PessoaInterface {
  public id?: string;
  public nome?: string;
  public email?: string;
  public admin?: boolean;

  constructor(data: PessoaProp) {
    this.validar(data)
    this.id = Id.generate();
    this.nome = data.nome;
    this.email = data.email;
    this.admin = false;
  }

  alterarPerfil(): void {
    this.admin = !this.admin
  }

  validar(data: PessoaProp) {
    if (!data.nome || data.nome.length <= 3) {
      throw new Error('Nome deve possuir no mínimo 3 caracteres.')
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if (!data.email || !emailRegex.test(data.email)) {
      throw new Error('Email inválido.')
    }
  }
}