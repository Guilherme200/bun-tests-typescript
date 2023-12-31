import {Pessoa} from '@/pessoa/pessoa';
import {PessoaProp} from '@/pessoa/PessoaInterface';

export class PessoaRepositorio {
  private pessoas: Pessoa[] = [];

  buscarTodas(): Pessoa[] {
    return this.pessoas;
  }

  criar(data: PessoaProp): Pessoa {
    const pessoa = new Pessoa(data);
    this.pessoas.push(pessoa);
    return pessoa;
  }

  buscarPorId(id: string): Pessoa | undefined {
    return this.pessoas.find((pessoa) => pessoa.id === id);
  }

  editar(id: string, data: PessoaProp): Pessoa | null {
    const pessoa = this.buscarPorId(id);
    if (pessoa) {
      pessoa.nome = data.nome;
      pessoa.email = data.email;
      return pessoa;
    } else {
      return null;
    }
  }

  delete(id: string): boolean {
    const index = this.pessoas.findIndex((pessoa) => pessoa.id === id);
    if (index !== -1) {
      this.pessoas.splice(index, 1); // Remove um elemento a partir do índice encontrado
      return true;
    }
    return false;
  }

  editarPerfil(id: string): Pessoa | null {
    const pessoa = this.pessoas.find((pessoa) => pessoa.id === id);
    if (pessoa) {
      pessoa.alterarPerfil();
      return pessoa;
    } else {
      return null;
    }
  }
}