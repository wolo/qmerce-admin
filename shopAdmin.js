"use strict";
const JsonRestApi = require("qmerce-rest");
const querystring = require("querystring");
const AdninJob = require("./job.js");
const AdminProduct = require("./product.js");
const AdminInterfaceConfig = require("./interfaceConfig.js");

module.exports = function(apiUrl, basicAuth) {
	const server = JsonRestApi(apiUrl, basicAuth);

	return {
		getPriceBookSettings: () => server.getAsync("/priceBook/settings"),
		setPriceBookSettings: (data) => server.postAsync("/priceBook/settings", data),

		product: (id) => new AdminProduct(id, server),
		searchProducts: (options) => server.getAsync("/search/product?"+querystring.stringify(options)),
		
		interfaceConfig: (interfaceId) => new AdminInterfaceConfig(interfaceId, server),
		
		job: (id) => new AdninJob(id, server),
		getJobs: () => server.getAsync("/jobs")
	}
};
