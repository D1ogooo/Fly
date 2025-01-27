✈ Fly

📋 Sobre o projeto
O Fly é a uma api criada para desenvolvedores Frontend aprenderem sobre fluxo de authenticação

👨‍💻 Tecnologias Utilizadas:
```
- JavaScript
- Node
- Express
- MongoDB 
- Mongoose ORM
```

       📜 --- Orientações de instalação --- 📜
*** Instale os pacotes necessários no projeto usando algum package manager como por exemplo
```
- npm install
- pnpm install
```
*** Acesse sua conta no mongodb e preencha as informações da variavel de ambiente
```
 DB_USER=""
 DB_PASSWORD=""
 SECRET_JWT="@J_FJ!#T)NH*#G)N@WEF)CVN)" <--(OBS: pode ser qualquer coisa)
```
       🌍 ---       Rotas de uso        --- 🪐
```
/auth/signin (Fazer login)

{
 "name":"",
 "email":"",
 "password":""
}
```
```
/auth/signup (Criar um usuário)

{
 "image": "link", (OBS: já tem uma imagem padrão então fica opçional colocar uma imagem aqui ou não)
 "name":"",
 "email":",
 "password":""
}
```
