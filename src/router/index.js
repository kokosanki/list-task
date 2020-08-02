import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Article from '../components/Article.vue';

Vue.use(VueRouter);

let isFirstTransition = true;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article,
  },
];

const router = new VueRouter({
  routes,
});

const MAX_TIME_TO_RETURN = 1200 * 1000;
const LS_ROUTE_KEY = 'example:route';
const LS_LAST_ACTIVITY_AT_KEY = 'example:last-active-at';
const setLastActivity = () => {
  localStorage.setItem(LS_LAST_ACTIVITY_AT_KEY, Date.now());
};

const getLastActivity = () => localStorage.getItem(LS_LAST_ACTIVITY_AT_KEY);

router.beforeEach((to, from, next) => {
  const lastRouteName = localStorage.getItem(LS_ROUTE_KEY);
  const lastActivityAt = getLastActivity();

  const hasBeenActiveRecently = Boolean(
    lastActivityAt,
  ) && Date.now() - lastActivityAt < MAX_TIME_TO_RETURN;

  const shouldRedirect = to.path === '/' && isFirstTransition
  && Boolean(lastRouteName) && hasBeenActiveRecently;

  if (shouldRedirect) {
    isFirstTransition = false;
    router.replace(lastRouteName);
  } else {
    next();
  }
});

router.afterEach((to) => {
  localStorage.setItem(LS_ROUTE_KEY, to.path);
  setLastActivity();
});

export default router;
