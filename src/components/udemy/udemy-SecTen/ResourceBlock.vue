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
      
      <emit-from-child 
        @changeMsg="setMessage" 
        :msg="welcomeMsg"
        @valueChanger="toggleValue"
        :switchCondition="changeSwitchValue">
      </emit-from-child>
      <!-- <emit-from-child 
        :msg="welcomeMsg"
        :switchCondition="changeSwitchValue">
      </emit-from-child> -->
    </base-card>
  </li>
</template>
<script>

import BaseCard from './BaseCard'
import BaseButton from './BaseButton'
import CheckProvideInject from './CheckProvideInject'
import EmitFromChild from './EmitFromChild'
// import {appBus} from '../../../main'
export default {
  components: {
    BaseCard,
    BaseButton,
    CheckProvideInject,
    EmitFromChild
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
      num: 0,
      welcomeMsg: "Hello World",
      changeSwitchValue:"Accuracy"
    }
  },
  inject: ['deleteResource'],
  provide() {
    return {
      information: this.info,
      // messsageFlow: this.setMessage,
      // switchValueToogle: this.toggleValue
    }
  },
  created() {
      // appBus.$on("valueChanger", (val) => {
      //   !val ? this.changeSwitchValue = 'Accuracy' : this.changeSwitchValue = 'Coverage'
      // });
      // appBus.$on("changeMsg", val => this.welcomeMsg = val);
  },
  methods: {
    info () {
      this.num++
    },
    setMessage(val) {
      this.welcomeMsg = val;
    },
    toggleValue(val) {
      val ? this.changeSwitchValue = 'Coverage' : this.changeSwitchValue = 'Accuracy'
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
