"use strict";
const should = require('chai').should();
const admin = require('../admin')("url", {"user": "user", "password": "password"});
const shop = admin.shop("contextId");
const global = admin.global();

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

describe('global methods', function() {
  for(let method of 'job|getJobs|createJob'.split('|')) {
    it(method + ' exists', function() {
      global.should.have.property(method);
    });
  }
});

describe('global job methods', function() {
  const job = global.job("jobId");
  for(let method of 'get|update|delete|run|cancel|getHistory'.split('|')) {
    it(method + ' exists', function() {
      job.should.have.property(method);
    });
  }
});
