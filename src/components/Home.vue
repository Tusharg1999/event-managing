<template>
    <v-container text-xs-center >
            <v-layout >
             <v-carousel>
    <v-carousel-item
      v-for="i in meetups"
      :key="i.id"
      :src="i.imageurl"
    ></v-carousel-item>
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
    data()
    {  return{
        meetups:[
            {imageurl:"https://media.gettyimages.com/photos/city-life-main-bazar-paharganj-new-delhi-india-picture-id504342172?s=2048x2048",id:"vjbjccdbhbdjhkb"},
             {imageurl:"https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2015/06/bangalore-e1435133401710.jpg",id:"hasdnkddfkjbkfbkjdfbk"},
             {imageurl:"http://im.proptiger.com/6/18/92/mumbai-heroshot-image-659706.jpeg",id:"akkjfdbkbfdbbdcbdfbck"}

        ]
    }     }
}
</script>