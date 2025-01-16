/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import HelloWorld from '@/components/HelloWorld.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { useUserStore } from '@/stores/user.store';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    {
      path : '/',
      redirect : '/home',
      component : HelloWorld,
      children : [
        {
          path : 'home',
          name : 'home',
          component : () => import('../components/HelloWorld.vue')
        }
      ]
    },
    {
      path: '/auth',
      redirect: '/auth/login',
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/Authentification.vue')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/Authentification.vue')
        },
        {
          path: 'forgot-password',
          name: 'forgotPassword',
          component: () => import('../views/Authentification.vue')
        },
        {
          path: 'account-verification',
          name: 'accountVerification',
          component: () => import('../views/Authentification.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)', // Capture toutes les autres routes
      component: () => import('../views/Authentification.vue')
    }
  ]
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.beforeEach(async (to, from, next) => {
  const publicPages = [
    '/auth/login',
    '/auth/register',
    '/auth/verify-code',
    '/auth/forgot-password',
    '/auth/account-verification'
  ];
  const userStore = useUserStore();
  const authRequired = !publicPages.includes(to.path);
  let connectedUser;
  if (authRequired) {
    connectedUser = await userStore.getCurrentUser();
  }
  if (authRequired && !connectedUser) {
    next('/auth/login');
  }
  next();
});
export default router;
