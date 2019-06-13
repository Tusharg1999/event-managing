<template>
  <v-app>
       <v-navigation-drawer  temporary="" v-model="something" fixed>
      <v-list>
        <v-list-tile style="cursor:pointer " v-for="i in menuItems" :key="i" router
        :to="i.link">
          <v-list-tile-action>
          <v-icon>{{i.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content> 
              {{i.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> 
    <v-toolbar  dark class="purple darken-3">
      <v-toolbar-side-icon @click="something=!something">

      </v-toolbar-side-icon>
      <v-toolbar-title> <router-link to="/" tag="span" style="cursor:pointer" > DevMeetup </router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat small v-for='index in menuItems' 
        :key="index"
        router
        :to="index.link" class="hidden-xs-only">
          <v-icon dark left>
            {{index.icon}}</v-icon>
             {{index.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
 
<main>
     <router-view></router-view>
   </main>
  </v-app>
</template>
<script>
  export default{
    data()
    {
      return{
        something:false,
        menuItems:
        [
           
            {icon:"supervisor_account",title:"View meetup",link: '/meetup'},
            {icon:"room",title:"Organize meetup",link: '/createmeetup'},
            {icon:"person", title:"Profile",link: '/profile'},
            {icon:"face",title:"SignUp",link: '/signup' },
            {icon:"lock_open",title:"Sign In",link: '/signin'}

          
          
        ]
      }
    }
  }
</script>