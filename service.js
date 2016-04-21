module.exports = function (serviceId, server) {
	
	const serviceUrl = "/preferences/" + serviceId;
	
	return {
		id: serviceId,
		
		getActive: () => server.getAsync(serviceUrl).then((data) => data.preferenceValue),
		setActive: (value) => server.postAsync(serviceUrl, { "preferenceValue" : value }),
		getValues: () => server.getAsync(serviceUrl + "/values").then((data) => data.list)
	};
};
