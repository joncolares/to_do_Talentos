const { update } = require('../database');
const knex = require('../database'); 

module.exports={
    async index(request, response) { 
        const results = await knex('tasks')
        return response.json(results)
    },

    async create(request, response, next) {
        try {
            const {name, pending, user_id} = request.body;

            await knex('tasks').insert({ name, pending, user_id});

            return response.status(201).send("Criado com Sucesso");

        } catch (error) {
            next(error)
        }
    },

    async update(request, response, next) {
        try {
            const {name, pending, user_id} = request.body;
            const { id } = request.params;

            await knex('tasks')
            .update({name, pending, user_id})
            .where({ id })

            return response.status(201).send({mensagem: "Atualizado com"})
        } catch (error) {
            next(error)
        }
    },

    async delete(request, response, next) {
        try {
            const { id } = request.params;
            await knex('tasks')
            .where({ id })
            .del()

            return response.json({mensagem: "Deletado com Sucesso"})

        } catch (error) {
            next(error)
        }
    }
        
}