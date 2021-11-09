import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue'),

    // Nested Routes
    children: [
        {
            path: '/add-currency',
            name: 'Add currency',
            component: () => import('../components/AddCurrency.vue'),
          },
          {
            path: '/currency-table',
            name: 'Currency table',
            component: () => import('../components/CurrencyTable.vue'),
          },
          {
            path: '/exchange-converter',
            name: 'Exchange converter',
            component: () => import('../components/ExchangeConverter.vue'),
          },
    ]
  },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router