Sistemas de tarefas (to do) para programa Novos talentos, siga Passo a Passo de acesso ao sistema:

1º Passo: Abra um SGBD e crie um banco de dados chamado to_do;

2º Passo: Realize o download/clone do projeto e acesse a pasta do backend, nesta pasta abra o aquivo knexfile.js e altere as informações de acesso conforme você utilize na sua máquina

OBS: foi utilizado o banco mysql no desenvolvimento da aplicação, caso você utilize outro banco de dados, deverá instalar a 
dependêcia com o comando:

npm install nome_do_banco
ex: npm install pg // para Postgresql
    npm install mariadb //para Mariadb

//Back end 

3º Passo: Ainda na pasta do backend execute os seguinte comandos:

//para baixar a pasta node modules, execute o comando: 

npm i

//para criar as tabelas no banco de dados, execute o comando: 

npx knex migrate:latest

//O sistema já possui um usuário cadastrado, execute o comando para popular o banco de dados: 

npx knex seed:run

Para finalizar o backend, execute o comando abaixo para inicializar o serviço: 

npm start

//FronT end 

4º Passo: Acesse a pasta frontend e execute os seguinte comandos:

//para baixar a pasta node modules, execute o comando: 

npm i

//Execute o comando abaixo para inicializar o serviço: 

npm run serve

Obs:
1. O sistema possui usuário, porém, a conexão dos usuários com as tarefas só ocorre no Back end. 
2. Não houve a aplicação de testes na aplicação e automatizar do processo de deploy do sistema.
