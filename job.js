module.exports = function (jobId, server) {
	
	const jobUrl = "/jobs/" + jobId;
	
	return {
		id: jobId,
		
		get: () => server.getAsync(jobUrl),
		update: (data) => server.postAsync(jobUrl, data),
		delete: () => server.deleteAsync(jobUrl),
		
		run: () => server.postAsync(jobUrl + "/run"),
		cancel: (options) => server.postAsync(jobUrl + "/cancel", options),
		getHistory: (options) => server.getAsync(jobUrl + "/history", options)
	};
};
