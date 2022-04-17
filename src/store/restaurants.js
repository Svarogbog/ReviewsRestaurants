export default {
    state: {
        restaurants: [
            {
                id: 1,
                name: 'Kompot'
            },
            {
                id: 2,
                name: 'Steakhouse'
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getListRestaurants(state) {
            return state.restaurants;
        },
        getRestaurant: (state) => (id) => {
            return state.restaurants.find(rest => rest.id == id);
        }
    }
}
