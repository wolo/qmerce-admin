"use strict";
const JsonRestApi = require("qmerce-rest");
const querystring = require("querystring");
const AdminProduct = require("./product.js");
const AdminInterfaceConfig = require("./interfaceConfig.js");

module.exports = function(apiUrl, basicAuth) {
	const server = JsonRestApi(apiUrl, basicAuth);

	return {
		getPriceBookSettings: () => server.getAsync("/priceBook/settings"),
		setPriceBookSettings: (data) => server.postAsync("/priceBook/settings", data),

		searchProducts: (options) => {
			return server.getAsync("/search/product?"+querystring.stringify(options));
		},
		
		product: (id) => new AdminProduct(id, server),
		
		interfaceConfig: (interfaceId) => new AdminInterfaceConfig(interfaceId, server),
	}
};
