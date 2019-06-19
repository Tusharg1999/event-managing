<template>
    <v-container class="cyan lighten-5">
    <v-layout row wrap>
        <v-flex xs12 >
        <v-card v-for="i in meetups" :key="i.id">
        <v-container fluid >
            <v-layout>
                <v-flex xs5 sm4 md3>
                    <v-card-media v-bind:src="i.imageUrl"
                    height="150px"
                    >
                    </v-card-media>
                </v-flex>
                <v-flex xs6 md8 sm7>
                    <div  class="ml-5">
                        <h1>{{i.title}}</h1>
                        <p>{{i.date}}</p>
                        </div>
                        <div>
                            <v-btn v-bind:to="'/meetup/'+i.id" dark="" flat="" class="red darken-1 ml-5"><v-icon class="mr-2">arrow_forward</v-icon>View Meetup</v-btn>
                        </div>
                </v-flex>
            </v-layout>
        </v-container>
        </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>
<script>
    export default {
        computed:
            {
                meetups(){
                    return this.$store.getters.loadedMeetups
                }
            }
    }
</script>