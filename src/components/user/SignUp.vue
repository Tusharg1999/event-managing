<template>
    <v-container>
        <v-layout class="pt-5 mt-5" row>
            <v-flex sm4 md4 offset-xs4>
                <v-card class="mt-5">
                    <v-card-title><h1>Create New Account</h1></v-card-title>
                    <v-container>
                        <v-flex md12>
                    <form>
                        <v-text-field class="my-2"
                                      id="email"
                                      label="Email"
                                      name="email"
                                      required
                                      type="email"
                                      v-model="email">
                        </v-text-field>
                        <v-text-field class="my-2"
                                label="Password"
                                name="password"
                                id="password"
                                type="password"
                                v-model="password"
                                required>
                        </v-text-field>
                        <v-text-field class="my-2"
                                label="Confirm password"
                                name="confirm password"
                                id="confirm password"
                                type="password"
                                v-model="confirm_password"
                                :rules="[checkForPassword]"
                                      required>
                        </v-text-field>
                        <v-btn block>SignUp</v-btn>
                    </form>
                        </v-flex>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export  default {
        data(){
           return {
               email: '',
               password:'',
               confirm_password:''
               }
           },
           computed:
               {
                   checkForPassword(){
                       return this.password!==this.confirm_password ? 'password do not match' :''
                   }
               }
    }
</script>