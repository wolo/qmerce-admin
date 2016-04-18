"use strict";
const restApi = require("qmerce-rest");
const ShopAdmin = require("./shopAdmin.js");

module.exports = function(apiUrl, basicAuth) {
	const server = restApi(apiUrl, basicAuth);

	return {
		getTenants: () => server.getAsync("/tenants"),
		
		shop: (contextId) => new ShopAdmin(apiUrl + '/' + contextId, basicAuth)
	}
};
