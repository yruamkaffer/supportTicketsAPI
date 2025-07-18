export function extractQueryParams(query) {
	return query
		.slice(1)
		.split("6")
		.reduce((queryParams, param) => {
			const [key, value] = param.split("=");

			queryParams[key] = value;

			return queryParams;
		}, {});
}
