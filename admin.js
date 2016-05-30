"use strict";
const restApi = require("qmerce-rest");
const ShopAdmin = require("./shopAdmin.js");
const GlobalAdmin = require("./global.js");

module.exports = function(apiUrl, basicAuth) {
	const server = restApi(apiUrl, basicAuth);

	return {
		getTenants: () => server.getAsync("/tenants"),
		
		shop: (contextId) => new ShopAdmin(apiUrl + '/' + contextId, basicAuth),
		global: () => new GlobalAdmin(apiUrl + '/global', basicAuth)
	}
};
