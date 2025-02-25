import { createRouter, createWebHistory } from 'vue-router';
import IngresarProducto from './pages/IngresarProducto.vue';
import RealizarVenta from './pages/RealizarVenta.vue';

const routes = [
  { path: '/ingresar-producto', component: IngresarProducto },
  { path: '/realizar-venta', component: RealizarVenta }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;