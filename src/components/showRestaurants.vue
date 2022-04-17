<template>
  <table>
    <thead>
    <tr>
      <th>name</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="restaurant in restaurants" :key="restaurant.id">
      <td @click="showReviews(restaurant.id)">{{ restaurant.name }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "showRestaurants",
  data() {
    return {
      restaurants: null,
    }
  },
  created() {
    this.getRestaurants();
  },
  methods: {
    getRestaurants() {
      return this.restaurants = this.$store.getters.getListRestaurants;
    },
    showReviews(id) {
      this.$router.push({path: `/reviews/${id}`})
      // this.$store.getters.getRestaurant(id)
    }
  }
}
</script>

<style scoped>

</style>
