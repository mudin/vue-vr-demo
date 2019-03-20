import Vue from 'vue';
import Router from 'vue-router';
import pages from './pages/index';

Vue.use(Router);


const routes = pages.map((page) => {
  const { name } = page;
  return {
    path: `/${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`,
    name,
    component: page,
  };
});

routes.push({
  path: '/*',
  redirect: '/demo-pano',
});


export default new Router({
  routes,
});
