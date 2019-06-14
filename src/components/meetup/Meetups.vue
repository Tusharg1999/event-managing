<template>
    <v-container class="cyan lighten-5">
    <v-layout row wrap>
        <v-flex xs12 >
        <v-card>
        <v-container fluid >
            <v-layout>
                <v-flex xs5 sm4 md3>
                    <v-card-media src="https://static.toiimg.com/thumb/49450573/How-to-reach-Delhi.jpg?width=748&height=499"
                    height="150px"
                    >
                    </v-card-media>
                </v-flex>
                <v-flex xs6 md8 sm7>
                    <div  class="ml-5">
                        <h1>Delhi Meetup</h1>
                        <p>Date:15/6/2019</p>
                        </div>
                        <div>
                            
                            <v-btn to="/meetup/:id" dark="" flat="" class="red darken-1 ml-5"><v-icon class="mr-2">arrow_forward</v-icon>View Meetup</v-btn>
                        </div>
                </v-flex>
            </v-layout>
        </v-container>
        </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>
