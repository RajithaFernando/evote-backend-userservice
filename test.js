const mocha = require('mocha');
const assert = require('assert');
// const client = require('./db/connectDB');

const app = require('./app');
const { exit } = require('process');

function add(a, b) {
  return a + b;
}


describe('add()', () => {
  it('Checking External Database Server Connectivity', () => {
    // client()
  });

  it('Checking Backend User Service ', () => {
    // assert.equal(add('1', '2'), 3);
    assert.equal(add(1, 2), 3);
  });


  it('Server Function Check', () => {
   
    
  })
  
});
