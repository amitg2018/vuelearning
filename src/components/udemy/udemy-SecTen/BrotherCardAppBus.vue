<template>
  <div>
    <div class="card m-3" style="width: 15rem;">
      <div class="card-body">
        <h5 class="card-title" v-text="thecardtitle"></h5>
        <p class="card-text">
          I'm a <b>brother App Bus</b>.
        </p>
        <!-- Use appBus -->
        <button @click="messageSister" class="btn btn-primary">Message Sister</button>
        <div v-if="fromsister" class="mt-3 alert alert-secondary" v-html="fromsister"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {appBus} from '.././../../main'
export default {
  data() {
    return {
      thecardtitle: 'Brother Child Component App Bus!',
      fromsister: ''
    }
  },
  created() {
    appBus.$on('sistersaid', (message) => {
        this.fromsister = message;
    });
  },
  methods: {
    messageSister() {
      // Through AppBus
      appBus.$emit('brothersaid', 'Hi Sister, Mom said do your homework!')
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
