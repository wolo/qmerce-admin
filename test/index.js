const should = require('chai').should();
const admin = require('../admin');
const shop = admin("url", {"user": "user", "password": "password"}).shop("contextId");

describe('job methods', function() {
  const job = shop.job("jobId");
  for(var method of 'get|update|delete|run|cancel|getHistory'.split('|')) {
    it(method + ' exists', function() {
      job.should.have.property(method);
    });
  }
});

describe('product methods', function() {
  const product = shop.product("productId");
  for(var method of 'get|update|delete'.split('|')) {
    it(method + ' exists', function() {
      product.should.have.property(method);
    });
  }
});
