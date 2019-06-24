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
import * as firebase from 'firebase'
import DateFilter from './filter/dateFilter'
import TimeFilter from './filter/timeFilter'
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
    },
    {
      path:'/profile',
      component:Profile
    }
  ],
  mode:'history'
})
Vue.filter('date',DateFilter)
Vue.filter('time',TimeFilter)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
  created(){
  firebase.initializeApp({
    apiKey: "AIzaSyBZ_Fq5YCt4JYUGdfIN3Y5JMBVhc3cfpPc",
    authDomain: "event-manager-81765.firebaseapp.com",
    databaseURL: "https://event-manager-81765.firebaseio.com",
    projectId: "event-manager-81765",
    storageBucket: ""
  })
  }
}).$mount('#app')
 