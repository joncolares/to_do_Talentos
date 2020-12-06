const { update, orWhereNotExists } = require('../database');
const knex = require('../database'); 

module.exports={
    async index(request, response, next) { 
        try {
            const results = await knex('users')
            return response.json(results)
            
        } catch (error) {
            next(error);
        }
    }
}