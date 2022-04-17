<template>
  <div class="widContainer">
    <modal-create-post :show="showModal" :idReview="idReview" @close="closedModal"/>
    <div class="container" style="justify-content: space-between">
      <h2>Reviews of {{ restaurant.name }}</h2>
      <button class="btn btnGreen" @click="addReview">Добавити відгук</button>
    </div>


    <div class="reviews">
      <div class="review full" v-for="(review, index) in reviews" :key="index">
        <div style="padding: 18px 20px;">
          <div class="review-header full">
            <p>{{ review.name }}</p>
            <p>{{ review.rating }}</p>
          </div>
          <div class="review-body">
            <p>{{ review.comment }}</p>
            <span>{{ review.date }}</span>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import modalCreatePost from './modalCreatePost'

export default {
  name: "showReviews",
  components: {modalCreatePost},
  data() {
    return {
      restaurant: null,
      reviews: null,
      showModal: false,
      idReview: this.$route.params.id
    }
  },
  created() {
    this.getReviews();
  },
  methods: {
    getReviews() {
      console.log('get function getReviews')
      this.reviews = this.$store.getters.getReviews(this.idReview);
      this.restaurant = this.$store.getters.getRestaurant(this.idReview);
    },
    addReview() {
      this.showModal = true;
    },
    closedModal() {
      this.showModal = false;
      this.getReviews();
    }
  }
}
</script>
<style lang="scss">
.widContainer {
  max-width: 980px;
  margin: auto;
}

.container {
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-items: center;


  & h2 {
    flex-grow: 2;
  }

  &.button {
    flex-grow: 1;
  }
}

.reviews {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}

.review {
  width: 48%;
  margin-bottom: 20px;
  background-color: #fff;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, .02);

  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, .04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }

  &.full {
    width: 100%;
    text-align: center;
  }
}

.review-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 22px;
    color: #402caf;
  }

  &.full {
    justify-content: center;

    p {
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.review-body {
  p {
    margin: 20px 0;
  }

  span {
    font-size: 14px;
    color: #999999;
    margin-right: 25px;
  }
}
</style>
