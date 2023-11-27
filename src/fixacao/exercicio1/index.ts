/*3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum USER_COLORS {
  verde, 
  laranja,
  amarelo,
  azul,
  anil,
  violeta
}


/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.*/

const pessoaObj = {
  nome: "ss",
  idade: 18,
  corFavorita: "Marrom"
}


/*2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.*/

type TPessoa = {
  nome: string,
  idade: number,
  corFavorita: USER_COLORS
}

const pessoa1: TPessoa = {
  nome: "Santo",
  idade: 23,
  corFavorita: USER_COLORS.anil
}
const pessoa2: TPessoa = {
  nome: "Oliveira",
  idade: 19,
  corFavorita: USER_COLORS.amarelo
}
const pessoa3: TPessoa = {
  nome: "Marcos",
  idade: 28,
  corFavorita: USER_COLORS.verde,
}








