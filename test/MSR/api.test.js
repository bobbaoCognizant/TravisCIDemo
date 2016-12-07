'use strict'

const agent = require('supertest')
const should = require('should')
const uuid = require('node-uuid')

describe('msr api test', () => {
  let msrUrl = 'http://172.18.1.104:3001';
  const request = agent(msrUrl);

  it('check user avaliable', done => {
    request.post('/api/Customers/userAvailable')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify({
      user: 'MEM_00615612'
    }))
    .expect(200)
    .end((err, res) => {
      should.not.exist(err);
      //console.dir(res);
      done();
    })
  })

})

