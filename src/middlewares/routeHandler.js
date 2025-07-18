import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";

const database = new Database();

export function routeHandler(request, response) {
	const route = routes.find((route) => {
		return route.method === request.method && route.path.test(request.url);
	});

	if (route) {
		const routeParams = request.url.match(route.path);

		const { query, ...params } = routeParams.groups;

		request.params = params;
		request.query = query ? extractQueryParams(query) : {};

		return route.controller({ request, response, database });
	}

	return Response.writeHead(404).end("");
}
