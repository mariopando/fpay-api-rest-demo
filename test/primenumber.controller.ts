import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../server';

describe('Primes number calculation', () => {
  it('get the 7 prime numbers', () =>
    request(Server)
      .get('/api/v1/primenumbers/7')
      .expect('Content-Type', /json/)
      .then((r) => {
        console.log('r.body', r.body);
        expect(r.body)
          .to.be.an('object')
          .to.deep.include({ data: [7, 5, 3, 2], payload: '7,5,3,2' });
      }));
  it('get the 15 prime numbers', () =>
    request(Server)
      .get('/api/v1/primenumbers/15')
      .expect('Content-Type', /json/)
      .then((r) => {
        console.log('r.body', r.body);
        expect(r.body)
          .to.be.an('object')
          .to.deep.include({
            data: [13, 11, 7, 5, 3, 2],
            payload: '13,11,7,5,3,2',
          });
      }));
});
