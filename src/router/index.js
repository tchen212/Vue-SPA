import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Detail from '@/components/Detail'
import Login from '@/views/Login'
import Profile from '@/views/Profile'
import Echarts from '@/views/Echarts'
import EchartBar from '@/components/Echarts/Bar'
import EchartPie from '@/components/Echarts/Pie'
import EchartLine from '@/components/Echarts/Line'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      meta: {
        requireAuth: true
      },
      component: Profile
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: Echarts,
      redirect: '/echarts/bar',
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'pie',
          name: 'Pie',
          component: EchartPie,
          meta: {
            requireAuth: true
          }
        },
        {
          path: 'bar',
          name: 'Bar',
          component: EchartBar,
          meta: {
            requireAuth: true
          }
        },
        {
          path: 'line',
          name: 'Line',
          component: EchartLine,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.requireAuth) {
    if (localStorage.currentUserId) {
      next()
    } else {
      next({
        name: 'Login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
