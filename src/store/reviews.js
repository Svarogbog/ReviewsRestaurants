export default {
    state: {
        reviews: [
            {
                restaurantId: 1,
                name: 'Galia',
                comment: 'comment 1',
                rating: 4,
                date: '2015-04-12'
            }, {
                restaurantId: 1,
                name: 'Oleg',
                comment: 'comment 2',
                rating: 4,
                date: '2013-07-35'
            },
        ]
    },
    mutations: {
        ADD_NEW_REVIEW: (state, payload) => {
            console.log(state);
            console.log(payload);
            state.reviews.push(payload)
            // Object.keys(payload).forEach(key => {
            //     Vue.set(state.reviews, key, payload.key)
            // })
        }
    },
    actions: {
        ADD_NEW_REVIEWS: ({commit}, data) => {
            console.log('actionData', data)
            console.log('actionCommit', commit)
            commit('ADD_NEW_REVIEW', data)
        }
    },
    getters: {
        getReviews: (state) => (id) => {
            return state.reviews.filter(rest => rest.restaurantId == id);
        }
    }
}
