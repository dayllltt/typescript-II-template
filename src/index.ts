/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/

type TPerson = {
    id: string | number,
    name: string,
    email: string,
    password: string
}


enum USER_ROLES {
    ADMIN = "admin",
    NORMAL= "normal"
}


type AdminAccount = {
    account: string | boolean,
    permission: USER_ROLES
}

type NormalAccount = {
    account: string | boolean,
    permsission: string
}

type AdminUser = TPerson & AdminAccount

type NormalUser = TPerson & NormalAccount

const user1: AdminUser = {
    id: "u001",
    name:"day",
    email: "day@gmail.com",
    password: "1235",
    account: "admin",
    permission: USER_ROLES.ADMIN
}
const user2: NormalUser = {
    id: "u002",
    name: "tiago",
    email: "tiago@email.com",
    password: "12345",
    account: "normal",
    permsission: USER_ROLES.NORMAL
}

// // PRÁTICA GUIADA - Parte 2
// Vamos continuar nosso sistema de cadastro de usuários criando:
// 1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
// 2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
// 3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role; 

const users: Array<AdminUser | NormalUser> = [
    user1,
    user2
]