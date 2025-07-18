export function index({ request, response, database }) {
	const tickets = database.select("tickets");
	return response.end(JSON.stringify(tickets));
}
