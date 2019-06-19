import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import Home from './components/Home'
import SignIn from './components/user/SignIn'
import SignUp from './components/user/SignUp'
import CreateMeetup from './components/meetup/CreateMeetup'
import Meetups from './components/meetup/Meetups'
import Profile from './components/user/profile'
import Meetup from './components/meetup/Meetup'
import { store } from './store/'
const router=new VueRouter({
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/signin',
      component:SignIn
    },
    {
      path:'/signup',
      component:SignUp
    },
    {
      path:'/createmeetup',
      component:CreateMeetup
    },
    {
      path:'/meetup',
      component:Meetups
    },
    {
      path:'/meetup/:id',
      component:Meetup
      ,props:true
    },
    {
      path:'/profile',
      component:Profile
    }
  ],
  mode:'history'
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),  
}).$mount('#app')
 