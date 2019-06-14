<template>

    <v-container text-xs-center >
        
            <v-layout >
             <v-carousel hide-delimiters>
    <v-carousel-item style="cursor:pointer"
      v-for="i in meetups"
      :key="i.id"
      :src="i.imageUrl"
      @click="loadMeetup(i.id)"
    >
    <div id="div">
        <p class="title">{{i.title}}</p>
        </div></v-carousel-item>
  </v-carousel>
        </v-layout>
        <v-layout style="margin-top:10px" row wrap>
          <v-flex xs12 sm6>
              <v-btn  dark="" large router to="/meetup" class="purple darken-3">Explore Meetups</v-btn>
          </v-flex>
          <v-flex xs12 sm6>
              <v-btn dark="" large router to="/createmeetup" class="purple darken-3">Organize Meetups</v-btn>
          </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {

       computed:{
            meetups (){
                return this.$store.getters.featuredMeetups
            }
        },
        methods: {
            loadMeetup(id)
            {
                this.$router.push('/meetup/'+id)
            }
        },
    }     
</script>
<style scoped>
    #div{
      text-align: center;
      width: auto;
      padding: 0px auto;
    }
    .title {
        margin-top: 450px;
        font-weight: 500;
        font-size: 30px;
        color: white;
       
        
    }
</style>