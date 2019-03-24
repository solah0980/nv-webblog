import Vue from 'vue'
import Router from 'vue-router'

//Users
import UserIdex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import Login from '@/components/Users/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Users',
      name: 'users',
      component: UserIdex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user-show',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
