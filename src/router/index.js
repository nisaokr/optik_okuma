import Vue from 'vue'
import VueRouter from 'vue-router'
import jwt from 'jsonwebtoken'
import AES_CBC from '@/libs/aes-cbc'
import  {createRouter, createWebHistory} from 'vue-router';
import CevapAnahtari from '@/views/CevapAnahtari.vue';
import SinavTanimlama from "@/views/SinavTanimlama.vue";
import Sinavlarim from '@/views/Sinavlarim.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Ana Sayfa',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
        roles: []
      },
    },

    {path: '/sinavTanimlama', component: SinavTanimlama},
    {path: '/cevapAnahtari', component: CevapAnahtari},

    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/views/Detay.vue'),
      props:true,
    },
    {
      path: '/sinavlarim',
      name: 'sinavlarim',
      component: () => import('@/views/Sinavlarim.vue'),
      meta:{
        pageTitle: 'Sınavlarım',
        roles: []
      },
    },

    {
      path: '/optik_okuma',
      name: 'optik_okuma',
      component: () => import('@/views/SinavTanimlama.vue'),
      meta: {
        pageTitle: 'Sınav Tanımlama',
        roles: []
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
        roles: []
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
        roles: []
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

/*
router.beforeEach((to, from, next) => {
  const store = router.app.$options.store
  const token = store.getters['subu/getToken']
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    jwt.verify(token, Vue.prototype.JWT_TOKEN_SECRET, function (err, decoded) {
      if (decoded) {

        //ENUMLAR
        store.dispatch('subu/changeEnumBirimler')
        store.dispatch('subu/changeEnumUserRole')
        store.dispatch('subu/changeEnumUrunTuru')
        store.dispatch('subu/changeEnumUrunCinsi')
        //

        if (to.meta.roles && to.meta.roles.length > 0) { // Check if roles are defined and not empty
          if (store.getters['subu/getCanHaveRole'](to.meta.roles)) {
            next()
          } else {
            next({ name: 'home' })
          }
        } else { // If no roles are defined for the route, allow access
          next()
        }
      }
      if (err) {
        localStorage.setItem('JwtError', JSON.stringify(err))
        localStorage.removeItem('userToken')
        localStorage.removeItem('userData')
        if (to.name !== 'login') {
          next({ name: 'login' })
        } else {
          next()
        }
      }
    })
  }
})
*/

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

/*const router= createRouter({
  history: createWebHistory(),
  routes:[
    {path: '/sinavTanimlama', component: SinavTanimlama},
    {path: '/cevapAnahtari', component: CevapAnahtari},
  ]
})*/

export default router
