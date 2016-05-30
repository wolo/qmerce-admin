"use strict";
const JsonRestApi = require("qmerce-rest");
const AdminJob = require("./job.js");

module.exports = function(apiUrl, basicAuth) {
	const server = JsonRestApi(apiUrl, basicAuth);

	return {
		job: (id) => new AdminJob(id, server),
		getJobs: () => server.getAsync("/jobs"),
		createJob: (data) => server.postAsync("/jobs", data)
	};
};
