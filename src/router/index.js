import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/collection',
    name: 'collection',
    component: () => import('../views/Collection.vue'),
    children: [
      {
        path: '',
        name: 'CollectionGoods',
        component: () => import('../components/collection/collectionGoods')
      },
      {
        path: 'shop',
        name: 'CollectionShop',
        component: () => import('../components/collection/collectionShop')
      }
    ]
  },
  {
    path: '/shopcar',
    name: 'shopcar',
    component: () => import('../views/ShopCar.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine.vue')
  },
  {
    path: '/shop/:index',
    name: 'shop',
    component: () => import('../views/Shop.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
