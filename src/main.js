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
import Meetup from './components/meetup/Meetup'
import Profile from './components/user/profile'
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
      component:Meetup
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
  render: h => h(App),  
}).$mount('#app')
 