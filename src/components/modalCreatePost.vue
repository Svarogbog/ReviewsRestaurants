<template>
  <modal
      v-if="show"
      title="Create new Review"
      @close="$emit('close')"
  >
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <div class="form-item" :class="{errorInput: $v.name.$error}">
          <label>Name:</label>
          <p class="errorText" v-if="!$v.name.required"> Filed required! </p>
          <p class="errorText" v-if="!$v.name.minLength"> Name must have at {{ $v.name.$params.minLength.min }}! </p>
          <input
              v-model="name"
              :class="{error: $v.name.$error}"
              @change="$v.name.$touch()"
          >
        </div>

        <div class="form-item" :class="{errorInput: $v.rating.$error}">
          <label>Rating:</label>
          <p class="errorText" v-if="!$v.rating.required">Filed required!</p>
          <input
              type="number"
              v-model.number="rating"
              @change="$v.rating.$touch()"
              :class="{error: $v.rating.$error}"
          />
        </div>

        <div class="form-item" :class="{errorInput: $v.comment.$error}">
          <label>Comment:</label>
          <p class="errorText" v-if="!$v.comment.required"> Filed required! </p>
          <p class="errorText" v-if="!$v.comment.minLength"> Comment must have at
            {{ $v.comment.$params.minLength.min }}! </p>
          <p class="errorText" v-if="!$v.comment.maxLength"> Comment must have at
            {{ $v.comment.$params.maxLength.max }}! </p>

          <textarea
              v-model="comment"
              :class="{error: $v.comment.$error}"
              @change="$v.comment.$touch()"
              rows="4"
          ></textarea>
        </div>

        <button class="btn btnPrimary">Submit!</button>
      </form>
    </div>
  </modal>
</template>

<script>
import {required, minLength, maxLength, numeric} from 'vuelidate/lib/validators';
import modal from '@/components/UI/Modal.vue';

export default {
  name: "modalValidation",
  components: {
    modal
  },
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    idReview: {
      type: String,
      required: true,
      default: null
    },
  },
  data() {
    return {
      name: '',
      comment: '',
      rating: ''
    }
  },
  validations: {
    name: {
      minLength: minLength(4),
      required,
    },
    comment: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(500)
    },
    rating: {
      required,
      numeric
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const newComment = {
          restaurantId: this.idReview,
          name: this.name,
          comment: this.comment,
          rating: this.rating
        }
        this.$store.dispatch('ADD_NEW_REVIEWS', newComment);
        //  Done!
        this.name = '';
        this.comment = '';
        this.rating = 0;
        this.$v.$reset();


        this.$emit('close');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: #cb203d;
}

.form-item {
  &.errorInput .errorText {
    display: block;
  }
}

input.error {
  border-color: #cb203d;
}
</style>
