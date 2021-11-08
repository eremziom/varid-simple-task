import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../components/Home.vue'),
    children: [
        {
            path: '/add-currency',
            name: 'Add currency',
            component: () => import(/* webpackChunkName: "about" */ '../components/AddCurrency.vue'),
          },
          {
            path: '/currency-table',
            name: 'Currency table',
            component: () => import(/* webpackChunkName: "about" */ '../components/CurrencyTable.vue'),
          },
          {
            path: '/exchange-converter',
            name: 'Exchange converter',
            component: () => import(/* webpackChunkName: "about" */ '../components/ExchangeConverter.vue'),
          },
    ]
  },
//   {
//     path: '/add-currency',
//     name: 'Add currency',
//     component: () => import(/* webpackChunkName: "about" */ '../components/AddCurrency.vue'),
//   },
//   {
//     path: '/currency-table',
//     name: 'Currency table',
//     component: () => import(/* webpackChunkName: "about" */ '../components/CurrencyTable.vue'),
//   },
//   {
//     path: '/exchange-converter',
//     name: 'Exchange converter',
//     component: () => import(/* webpackChunkName: "about" */ '../components/ExchangeConverter.vue'),
//   },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router