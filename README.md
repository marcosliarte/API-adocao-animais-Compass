Challenge #01 - Veterinary Microservice

Este é o repositório da API de microserviços para uma franquia veterinária desenvolvida como parte do desafio do estágio na Compass. Essa API é responsável por gerenciar clientes (tutores) e seus pets.

Funcionalidades
A API possui as seguintes funcionalidades:

GET /tutors: Recupera todos os tutores cadastrados, juntamente com seus pets associados.

POST /tutor: Cria um novo tutor.

PUT /tutor/:id: Atualiza as informações de um tutor existente.

DELETE /tutor/:id: Exclui um tutor.

POST /pet/:tutorId: Cria um novo pet e o associa a um tutor.

PUT /pet/:petId/tutor/:tutorId: Atualiza as informações de um pet associado a um tutor.

DELETE /pet/:petId/tutor/:tutorId: Desassocia um pet de um tutor.

Tecnologias Utilizadas
Node.js
Express
MongoDB (com o Mongoose como ODM)
TypeScript
Como Executar Localmente
Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.

Clone este repositório em sua máquina local.

Instale as dependências do projeto executando o seguinte comando:

npm install

Inicie o servidor da base de dados MongoDB localmente.

Execute o seguinte comando para iniciar o servidor da API:

npm start
A API estará disponível em http://localhost:3000.

Testes
Os testes para esta API foram desenvolvidos utilizando o Postman.

Informações Adicionais
A API utiliza o padrão de código ESLint e Prettier para garantir a consistência e legibilidade do código.

A estrutura do código foi projetada para facilitar a manutenção e escalabilidade.

Os endpoints estão protegidos contra entradas inválidas e retornam mensagens de erro adequadas quando necessário.

Todas as rotas da API estão definidas nos arquivos tutorRoute.ts e petRoute.ts, localizados na pasta routes.

As funcionalidades de criação, atualização e exclusão de registros estão implementadas nos arquivos tutorController.ts e petController.ts, localizados na pasta controllers.

Os modelos para as entidades "Tutor" e "Pet" estão definidos nos arquivos tutorModel.ts e petModel.ts, localizados na pasta models.



Contato
Se tiver alguma dúvida ou precisar de mais informações, você pode entrar em contato comigo através do e-mail marcos.neves.pb@compasso.com.br.

Autor
Este projeto foi desenvolvido por Marcos Liarte.
