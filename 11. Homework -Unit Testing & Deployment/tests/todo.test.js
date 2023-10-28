// crud unit testing

const request = require('supertest');
const app = require('../app'); 

describe('CRUD API Tests', () => {
  let todoId;

  it('should create a new todo', async () => {
    const response = await request(app)
      .post('/api/todos')
      .send({ title: 'New Todo' });
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('New Todo');
    todoId = response.body.id; 
  });

  it('should get all todos', async () => {
    const response = await request(app)
      .get('/api/todos');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get todo details by ID', async () => {
    const response = await request(app)
      .get(`/api/todos/${todoId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe('New Todo');
  });

  it('should soft delete a todo by ID', async () => {
    const response = await request(app)
      .delete(`/api/todos/${todoId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Todo deleted');

    const deletedTodoResponse = await request(app)
      .get(`/api/todos/${todoId}`);
    expect(deletedTodoResponse.statusCode).toBe(404);
    expect(deletedTodoResponse.body.error).toBe('Todo not found');
  });
});
