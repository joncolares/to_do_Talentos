const express = require('express');
const router = express.Router();

const tasksControllers = require('./controllers/tasksControllers');
const usersControllers = require('./controllers/usersControllers');

router
    //users router
    .get('/users', usersControllers.index);

router
    //tasks router
    .get('/tasks', tasksControllers.index)
    .post('/tasks', tasksControllers.create)
    .put('/tasks/:id', tasksControllers.update)
    .delete('/tasks/:id', tasksControllers.delete)



module.exports = router;
