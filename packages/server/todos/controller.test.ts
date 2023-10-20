import { describe } from 'mocha';
import { expect, use } from 'chai';
import { listCtrl } from './controller';
import { NextFunction, Request, Response } from 'express';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Todo } from './model-mongoose';

use(sinonChai);

describe('todos controllers', () => {
  describe('listCtrl function', () => {
    afterEach(() => {
      sinon.verifyAndRestore();
    });

    it('should call res.json with data from database', async () => {
      // sinon.mock(Todo).expects('find').callsFake(() => new Promise((resolve) => resolve('Toto')));
      sinon
        .mock(Todo)
        .expects('find')
        .resolves([{ _id: 'abcdef', title: 'ABC', completed: true }]);

      const req = {};
      const res = {
        json: sinon.spy(),
      };
      const next = () => {};
      await listCtrl(req as unknown as Request, res as unknown as Response, next as unknown as NextFunction);
      expect(res.json).to.have.been.calledOnceWith([{ _id: 'abcdef', title: 'ABC', completed: true }]);
    });

    it('should show call next on error', async () => {
      sinon.mock(Todo).expects('find').rejects();

      const req = {};
      const res = {};
      const next = sinon.spy();
      await listCtrl(req as unknown as Request, res as unknown as Response, next as unknown as NextFunction);
      expect(next).to.have.been.called;
    });
  });
});
