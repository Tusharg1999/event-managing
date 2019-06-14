import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [{
            imageUrl: 'https://static.toiimg.com/thumb/49450573/How-to-reach-Delhi.jpg?width=748&height=499',
            id: 'meetupid_delhi',
            title: 'Meetup in delhi',
            date: "14 June 2019"
        },
            {
                imageUrl: 'https://ramadalucknow.com/wp-content/uploads/2017/11/Exploring-Spiritual-Tourism-in-India-The-Uttar-Pradesh-Sojourn.jpg',
                id: 'meetupid_up',
                title: 'Meetup in UP',
                date: "15 June 2019"
            }],
        user: {
            id: 'aman',
            registeredMeetups: ['meetupid_delhi']
        }
    },
    mutations: {},
    actions: {},
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
        }
    }
})