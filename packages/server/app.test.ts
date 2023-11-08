import { describe } from 'mocha';
import request from 'supertest';
import { app } from './app';
import { expect } from 'chai';
import sinon from 'sinon';
import { Todo } from './todos/model-mongoose';

describe('functional tests', () => {
  describe('GET /api/todos', () => {
    afterEach(() => {
      sinon.verifyAndRestore();
    });

    it('should respond data with status 200', async () => {
      sinon
        .mock(Todo)
        .expects('find')
        .resolves([{ _id: 'abcdef', title: 'ABC', completed: true }]);

      const res = await request(app).get('/api/todos');

      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal([{ _id: 'abcdef', title: 'ABC', completed: true }]);
    });
  });
});
