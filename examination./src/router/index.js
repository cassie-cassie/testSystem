import Vue from 'vue'
import Route from 'vue-router'
import Login from '../views/login.vue'
import Index from '../views/index.vue'
import Sim from '../views/sim.vue'
import Test from '../views/test.vue'
import Submit from '../views/submit.vue'

Vue.use(Route)

export default new Route({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/index/sim',
      name: 'indexsim',
      component: Sim
    },
    {
      path: '/index/test',
      name: 'indextest',
      component: Submit
    },
    {
      path: '/index/submit',
      name: 'indextestsubmit',
      component: Test
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
