
export interface PessoaInterface {
  id?: string,
  nome?: string,
  email?: string,
  admin?: boolean,
  alterarPerfil(): void
}

export interface PessoaProp {
  nome?: string;
  email?: string;
}