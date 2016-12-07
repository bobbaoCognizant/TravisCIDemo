'use strict'

const agent = require('supertest')
const should = require('should')
const uuid = require('node-uuid')

describe('card management API test', () => {
  let cmUrl = 'http://172.18.1.154:3001';
  const request = agent(cmUrl);

  it('try to get seeds by passing card list', done => {
  let transactionId = uuid.v4();
  console.log('transactionId is: ' + transactionId);

  request.post('/seeds/getseeds')
  .set('x-transaction-id', transactionId)
  .set('Accept', 'application/vnd.api+json')
  .set('Content-Type', 'application/vnd.api+json')
  .send(JSON.stringify({
    data: {
      msr: ['6010322703766348'],
      svc: ['7310180001679291'],
      subxId: '0cbae865-c270-4191-91e8-384124a43abc'
      }
    }))
  .expect(200)
  .end((err, res) => {
    should.not.exist(err);
    //console.dir(res);
    done();
    })
  });

});

