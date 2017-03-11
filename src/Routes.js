import { h } from "preact";
import AsyncRoute from "preact-async-route";

const ROUTES = [
  {
    path: "/",
    title: "Home",
    router: () => import("./components/Home.js").then(m => m.default)
  },
  {
    path: "/about",
    title: "About",
    router: () => import("./components/About.js").then(m => m.default)
  }
];
export const routes = ROUTES.map(({ path, router }) => (
  <AsyncRoute path={path} component={router} />
));

export const mappings = ROUTES.map(({ title, path }) => ({ title, path }));
