module.exports = function (productId, server) {
	
	const productUrl = "/product/" + productId,
		inventoryUrl = "/inventory/" + productId;
	
	return {
		id: productId,
		
		get: () => server.getAsync(productUrl),
		update: (data) => server.postAsync(productUrl, data),
		delete: () => server.deleteAsync(productUrl),
		
		getInventory: () => server.getAsync(inventoryUrl),
		getCharges: () => server.getAsync(inventoryUrl + "/charges").then((data) => data.list),
		createCharge: (chargeId) => server.postAsync(inventoryUrl + "/charges", data),
		getCharge: (chargeId) => server.getAsync(inventoryUrl + "/charges/" + chargeId),
		updateCharge: (chargeId, data) => server.postAsync(inventoryUrl + "/charges/" + chargeId, data),
		deleteCharge: (chargeId, data) => server.deleteAsync(inventoryUrl + "/charges/" + chargeId),
	};
};
