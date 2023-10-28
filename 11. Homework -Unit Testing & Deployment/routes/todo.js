const express = require('express');
const router = express.Router();

module.exports = (Todo) => {
  // List All Todo
  router.get('/todos', async (req, res) => {
    try {
      const todos = await Todo.findAll();
      res.json(todos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Detail Todo
  router.get('/todos/:id', async (req, res) => {
    const todoId = req.params.id;
    try {
      const todo = await Todo.findByPk(todoId);
      if (todo) {
        res.json(todo);
      } else {
        res.status(404).json({ error: 'Todo not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Create Todo
  router.post('/todos', async (req, res) => {
    const { title } = req.body;
    try {
      const newTodo = await Todo.create({ title });
      res.status(201).json(newTodo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Delete Todo (Soft Delete)
  router.delete('/todos/:id', async (req, res) => {
    const todoId = req.params.id;
    try {
      const todo = await Todo.findByPk(todoId);
      if (todo) {
        await todo.update({ deleted: true });
        res.json({ message: 'Todo deleted' });
      } else {
        res.status(404).json({ error: 'Todo not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};
