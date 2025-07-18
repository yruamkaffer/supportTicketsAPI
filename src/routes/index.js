import { parseRoutePath } from "../utils/parseRoutePath.js";
import { tickets } from "./tickets.js";

export const routes = [...tickets].map((route) => ({
	...route,
	path: parseRoutePath(route.path),
}));
