const ContentAttributeValue = require("./contentAttributeValue.js");

module.exports = function (id, server) {
	
	const url = "/contentAttributes/" + id;
	
	return {
		id: id,
		
		get: () => server.getAsync(url),
		update: (data) => server.postAsync(url, data),
		delete: () => server.deleteAsync(url),
		
		value: (valueId) => new ContentAttributeValue(id, valueId, server),
		createValue: (data) => server.postAsync(url + "/value", data)
	};
};
