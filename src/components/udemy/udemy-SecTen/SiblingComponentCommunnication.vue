<template>
  <div>
    <div class="card m-2" style="display: flex; flex-direction: column; gap: 20px;">
      <div class="card-body">
        <h4 class="card-title" v-text="thecardtitle"></h4>
        <button
          @click="momSaidChill"
          class="btn btn-block btn-outline-danger"
          v-if="stopFighting()"
        >
          Mom says stop fighting Childs!
        </button>
        <div class="d-flex justify-content-center">
          <brother-card :messageson="messageson" @brothersaid="messageDaughter($event)"></brother-card>
          <sister-card :messagedaughter="messagedaughter" @sistersaid="messageSon($event)"></sister-card>
        </div>
      </div>

      <div class="card-body">
        <h4 class="card-title" v-text="thecardtitle2"></h4>
        <button
          @click="momSaidChill"
          class="btn btn-block btn-outline-danger"
          v-if="stopFighting()"
        >
          Mom says stop fighting Childs!
        </button>
        <div class="d-flex justify-content-center">
          <brother-card-app-bus></brother-card-app-bus>
          <sister-card-app-bus></sister-card-app-bus>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BrotherCard from './BrotherCard';
import BrotherCardAppBus from './BrotherCardAppBus.vue';
import SisterCard from './SisterCard';
import SisterCardAppBus from './SisterCardAppBus.vue';

export default {
  components: { BrotherCard, SisterCard, BrotherCardAppBus, SisterCardAppBus},

  data() {
    return {
      thecardtitle: 'Parent Component!',
      thecardtitle2: 'Parent Component AppBus!',
      messagedaughter: '',
      messageson: ''
    }
  },

  methods: {
    messageDaughter(message) {
      this.messagedaughter = message;
    },

    messageSon(message) {
      this.messageson = message;
    },

    stopFighting() {
      if (this.messagedaughter && this.messageson) {
        return true;
      }
      return false;
    },

    momSaidChill() {
      this.messagedaughter = '';
      this.messageson = '';
    }
  }
}
</script>

<style scoped>
  div.card {
    color: #721c24;
    border: 4px solid #f5c6cb;
  }
  .d-flex {
    display: flex;
  }
  .m-2 {
    width: 40rem;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
</style>
