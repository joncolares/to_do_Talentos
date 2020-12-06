Sistemas teste para programa Novos talentos Passo a Passo de acesso ao sistema

1º Passo: Abra um SGBD e crie um banco de dados chamado to_do;

2º Passo: Realize o download/clone do projeto e acesse a pasta do backend, nesta pasta abra o aquivo knexfile.js e altere as informações de acesso conforme você utilize na sua máquina

//Back end 3º Passo: Ainda na pasta do backend execute os seguinte comandos:

//para baixar a pasta node modules, execute o comando: npm i

//para criar as tabelas no banco de dados, execute o comando: npx knex migrate:latest

//O sistema já possui um usuário cadastrado, execute o comando para popular o banco de dados: npx knex seed:run

Para finalizar o backend, execute o comando abaixo para inicializar o serviço: npm start

//FronT end 4º Passo: Acesse a pasta frontend e execute os seguinte comandos:

//para baixar a pasta node modules, execute o comando: npm i

//Execute o comando abaixo para inicializar o serviço: npm run serve