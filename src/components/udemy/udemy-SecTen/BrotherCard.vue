<template>
  <div>
    <div class="card m-3" style="width: 15rem;">
      <div class="card-body">
        <h5 class="card-title" v-text="thecardtitle"></h5>
        <p class="card-text">
          I'm a <b>brother</b>.
        </p>
        <!-- use $emit -->
        <button @click="messageSister" class="btn btn-primary">Message Sister</button>
        <div v-if="messageson" class="mt-3 alert alert-secondary" v-html="messageson"></div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['messageson'],

  data() {
    return {
      thecardtitle: 'Brother Child Component With Emit!',
    }
  },
  methods: {
    messageSister() {
      // Through $emit
      this.$emit('brothersaid', 'Hi Sister, Mom said do your homework!')
    },
  }
}
</script>

<style scoped>
  div.card {
    color: #004085;
    border: 4px solid #b8daff;
  }
</style>
