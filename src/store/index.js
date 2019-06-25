import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [{
            imageUrl: 'https://static.toiimg.com/thumb/49450573/How-to-reach-Delhi.jpg?width=748&height=499',
            id: 'meetupid_delhi',
            title: 'Meetup in delhi',
            date: new Date(),
            time:new Date( )
        },
            {
                imageUrl: 'https://ramadalucknow.com/wp-content/uploads/2017/11/Exploring-Spiritual-Tourism-in-India-The-Uttar-Pradesh-Sojourn.jpg',
                id: 'meetupid_up',
                title: 'Meetup in UP',
                date: new Date(),
                time:new Date()
            }],
        user: null
    },
    mutations: {
      createMeetup:(state,payload)=>{
          state.loadedMeetups.push(payload)
        },
        createUser:(state,payload)=>{
          state.user.push(payload)
        }
    },
    actions: {
       createMeetup:(context,payload)=>
       { const data={
           title: payload.title,
           imageUrl: payload.imageUrl,
           location: payload.location,
           date:payload.date,
           time:payload.time
       }
       context.commit("createMeetup",data)
       },
        createNewUser:(context,payload)=>{
           firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password).then(

                   user => {
                       const newUser = {
                           id:user.uid,
                           registeredMeetups:[]
                       }
                       context.commit("createUser",newUser)})
               .catch(
                   error =>{
                       // eslint-disable-next-line no-console
                       console.log(error)
                   }
               )

        }
    },
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId;
                })
            }
        },
        user:()=>{
            return this.state.user
        }
    }
})