module.exports = function (interfaceId, server) {
	
	const url = "/interfaces/" + interfaceId;
	
	return {
		id: interfaceId,
		
		get: () => server.getAsync(url),
		update: (data) => server.postAsync(url, data),
		delete: () => server.deleteAsync(url)
	};
};
