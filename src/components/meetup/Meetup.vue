<template>
    <v-container class="cyan lighten-5">
        <v-layout>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h2 class="purple--text">Delhi</h2>
                    </v-card-title>
                    <v-card-media src='https://static.toiimg.com/thumb/49450573/How-to-reach-Delhi.jpg?width=748&height=499'
                    height="600px">
                    </v-card-media>
                    <v-card-text>
                        <div class="info--text mt-2">Meet at 16/06/2019 at New Delhi</div>
                        <p class="mt-2">JetBrains the successful developers of first-class tools for programmers worldwide, is coming to Delhi, Hyderabad, and Bengaluru in June to hold events focused around Java and Kotlin. Our speakers will be giving talks on the best practices when using IntelliJ IDEA and about Kotlin development. They will be happy to answer any questions you may have.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn dark="" class="red darken-1">
                            Register
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        computed:
            {
                meetup(){
                    return this.$store.loadedMeetup(this.id)
                }
            }
    }

</script>