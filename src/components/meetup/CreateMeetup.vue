<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <h1>Create new Meetup</h1>
                <form @submit.prevent="onCreateMeetup" style="margin-top:10px">
                       <v-layout>
                           <v-flex xs12 sm6 offset-sm3>
                               <v-text-field
                               name="title"
                               label="Title"
                               id="title"
                               v-model="title"
                               required>
                               </v-text-field>
                               <v-text-field
                                       name="location"
                                       label="location"
                                       id="location"
                                       v-model="location"
                                       required>
                               </v-text-field>
                               <v-text-field
                                       name="Image"
                                       label="Image Url"
                                       id="imageUrl"
                                       v-model="imageUrl"
                                       required>
                               </v-text-field>
                               <v-layout>
                                   <v-flex sm6>
                                       <img v-bind:src="imageUrl" height="200px">
                                   </v-flex>
                               </v-layout>

                               <v-text-field
                                       name="description"
                                       label="Description"
                                       id="description"
                                       multi-line
                                       required>
                               </v-text-field>
                           </v-flex>
                       </v-layout>
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-spacer></v-spacer>
                    <v-btn
                           type="submit" :disabled="formIsValid" dark class="purple darken-3">Create Meetup
                    </v-btn>
                    </v-flex>
                </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        data () {
            return{
                title:'',
                location:'',
                imageUrl:'',
                description:''
            }

        },
        computed:{
            formIsValid()
            { return  this.title==='' &&
                this.location==='' &&
                this.imageUrl==='' &&
                this.description===''
            }
        },
        methods:{
            onCreateMeetup()
            {
                const values={
                    title: this.title,
                    description: this.description,
                    location: this.location,
                    imageUrl: this.imageUrl,
                    date:new Date()
                }
                this.$store.dispatch('createMeetup',values)
            }
        }

    }
</script>