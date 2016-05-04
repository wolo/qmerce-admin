const ContentAttributeValue = require("./contentAttributeValue.js");

module.exports = function (attributeId, valueId, server) {
	
	const url = "/contentAttributes/" + attributeId + "/value/" + valueId;
	
	return {
		id: valueId,
		attributeId: attributeId,
		
		get: () => server.getAsync(url),
		update: (data) => server.postAsync(url, data),
		delete: () => server.deleteAsync(url)
	};
};
