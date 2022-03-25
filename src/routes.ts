import Home from './views/Home.svelte';
import About from './views/About.svelte';
import Detail from './views/Detail.svelte';
import Page404 from './views/404.svelte';
const routes = {
  '/': Home,
  '/home': Home,
  '/about/*': About,
  '/detail/:type/:id': Detail,
  '*': Page404
};
export default routes;
