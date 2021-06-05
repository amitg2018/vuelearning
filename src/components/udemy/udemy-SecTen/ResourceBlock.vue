<template>
  <li>
    <base-card>
      <header>
        <h3>{{title}}</h3>
        <base-button size="mini" type="default" mode="amit" @click="deleteResource(id)"><img src="../../../assets/logo.png" style="max-width: 12px;"> Delete</base-button>
      </header>
      <p>{{description}}</p>
      <nav>
        <a :href="link" target="_blank">View Resource</a>
      </nav>
      {{num}}
      <check-provide-inject></check-provide-inject>
    </base-card>
  </li>
</template>
<script>

import BaseCard from './BaseCard'
import BaseButton from './BaseButton'
import CheckProvideInject from './CheckProvideInject'
export default {
  components: {
    BaseCard,
    BaseButton,
    CheckProvideInject
  },
  props: ['id', 'title', 'description', 'link'],
  // props: {
  //   id: {
  //     type: String,
  //     required: true
  //   },
  //   title: {
  //     type: String,
  //     required: true
  //   },
  //   description: {
  //     type: String,
  //     required: true
  //   },
  //   link: {
  //     type: String,
  //     required: true
  //   }
  // },
  data() {
    return {
      num: 0
    }
  },
  inject: ['deleteResource'],
  provide() {
    return {
      information: this.info
    }
  },
  methods: {
    info () {
      this.num++
    }
  }
}
</script>
<style scoped>
li {
  margin: 0 auto 10px;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
  text-align: left;
}

a {
  text-decoration: none;
  color: #ce5c00;
}
nav {
  margin: 5px 0;
  text-align: left;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
