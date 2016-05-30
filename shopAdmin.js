"use strict";
const JsonRestApi = require("qmerce-rest");
const querystring = require("querystring");
const AdminJob = require("./job.js");
const AdminProduct = require("./product.js");
const AdminInterfaceConfig = require("./interfaceConfig.js");
const AdminService = require("./service.js");
const ContentAttribute = require("./contentAttribute.js");

module.exports = function(apiUrl, basicAuth) {
	const server = JsonRestApi(apiUrl, basicAuth);

	return {
		getPriceBookSettings: () => server.getAsync("/priceBook/settings"),
		setPriceBookSettings: (data) => server.postAsync("/priceBook/settings", data),

		product: (id) => new AdminProduct(id, server),
		searchProducts: (options) => server.getAsync("/search/product?"+querystring.stringify(options)),
		
		interfaceConfig: (interfaceId) => new AdminInterfaceConfig(interfaceId, server),
		service: (id) => new AdminService(id, server),
		
		job: (id) => new AdminJob(id, server),
		getJobs: () => server.getAsync("/jobs"),
		createJob: (data) => server.postAsync("/jobs", data),
		
		contentAttribute: (id) => new ContentAttribute(id, server),
		getContentAttibutes: () => server.getAsync("/contentAttributes"),
		createContentAttribute: (data) => server.postAsync("/contentAttributes", data),
	}
};
