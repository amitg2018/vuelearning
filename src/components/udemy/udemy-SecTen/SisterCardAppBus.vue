<template>
  <div>
    <div class="card m-3" style="width: 15rem;">
      <div class="card-body">
        <h5 class="card-title" v-text="thecardtitle"></h5>
        <p class="card-text">
          I'm a
          <b>sister App Bus</b>.
        </p>
        <!-- Use appBus -->
        <button @click="messageBrother" class="btn btn-warning">Message Brother</button>
        <div v-if="frombrother" class="mt-3 alert alert-secondary" v-html="frombrother"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {appBus} from '.././../../main'
export default {
  data() {
    return {
      thecardtitle: 'Sister Child Component App Bus!',
      frombrother: ''
    }
  },
  created() {
    appBus.$on('brothersaid', (message) => {
        this.frombrother = message;
    });
  },

  methods: {
    messageBrother() {
      // Through AppBus
      appBus.$emit('sistersaid', 'Hi Brother, Mom said do your homework!')
    }
  }
}
</script>

<style scoped>
  div.card {
    color: #856404;
    border: 4px solid #ffeeba;
  }
</style>
