"use strict";
const should = require('chai').should();
const admin = require('../admin');
const shop = admin("url", {"user": "user", "password": "password"}).shop("contextId");

describe('job methods', function() {
  const job = shop.job("jobId");
  for(let method of 'get|update|delete|run|cancel|getHistory'.split('|')) {
    it(method + ' exists', function() {
      job.should.have.property(method);
    });
  }
});

describe('product methods', function() {
  const product = shop.product("productId");
  for(let method of 'get|update|delete'.split('|')) {
    it(method + ' exists', function() {
      product.should.have.property(method);
    });
  }
});

describe('service methods', function() {
  const service = shop.service("serviceId");
  for(let method of 'getActive|setActive|getValues'.split('|')) {
    it(method + ' exists', function() {
      service.should.have.property(method);
    });
  }
});

describe('contentAttribute methods', function() {
  const product = shop.contentAttribute("attributeId");
  for(let method of 'get|update|delete|value|createValue'.split('|')) {
    it(method + ' exists', function() {
      product.should.have.property(method);
    });
  }
});

describe('contentAttributeValue methods', function() {
  const product = shop.contentAttribute("attributeId").value('valueId');
  for(let method of 'get|update|delete'.split('|')) {
    it(method + ' exists', function() {
      product.should.have.property(method);
    });
  }
});
