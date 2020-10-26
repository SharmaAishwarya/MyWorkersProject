let chai = require('chai');
const expect = chai.expect;
const http = require('http')

describe('Worker Test', function() {
  
    it('returns json array of links', async function () {
       
        const options = {
          hostname: 'localhost',
          port: 8787,
          path: '/links',
          method: 'GET',
          };
        const req = http.request(options, (res) => {
          console.log(`STATUS: ${res.statusCode}`);
          expect(res.statusCode).to.equal(200)
          console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
          res.setEncoding('utf8');
          res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
          });
          
          res.on('end', () => {
            console.log('No more data in response.');
          });
        });
        req.end();
        req.on('error', (e) => {
          console.error(`problem with request: ${e.message}`);
        });
        
    })
})