import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import SobrePage from '../components/SobrePage.vue';
import ProjetosPage from '../components/ProjetosPage.vue';
import ContatoPage from '../components/ContatoPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/sobre', component: SobrePage },
  { path: '/projetos', component: ProjetosPage },
  { path: '/contato', component: ContatoPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;