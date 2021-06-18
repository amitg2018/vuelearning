<template>
  <div>
    <h1 class="is-size-3">{{ msg }}</h1>
      <br>
      <input class="input" type="text" v-model="welcomeMsg">
      <br/><br/>
    <base-button @click="changeMsg">Check Emit</base-button>
    <br/><br/>
    <div class="enableDisableBlock">
    {{switchCondition}}
    <el-switch
      v-model="switchToggleValue"
      active-text="Coverage"
      inactive-text="Accuracy"
      size="mini"
      @change="switchValue">
    </el-switch>
  </div>

  </div>
</template>
<script>
import BaseButton from './BaseButton'
// import {appBus} from '../../../main'
export default {
  components: {
    BaseButton
  },
  data() {
    return {
      welcomeMsg: 'Write Your Name',
      switchToggleValue: 'Accuracy'
    }
  },
  props: {
    msg: String,
    switchCondition: String
  },
  methods: {
    changeMsg() {
      this.$emit("changeMsg", this.welcomeMsg);
      console.log('message emit from child component')
    },
    switchValue () {
      this.$emit("valueChanger", this.switchToggleValue);
      console.log('switch emit from child component')
    }
    // changeMsg() {
    //   appBus.$emit("changeMsg", this.welcomeMsg);
    //   console.log('message emit from child component')
    // },
    // switchValue () {
    //   appBus.$emit("valueChanger", this.switchToggleValue);
    //   console.log('switch emit from child component')
    // }


  }
}
</script>
<style lang="scss" scoped>
  // switch button
/deep/.enableDisableBlock {
  .el-switch__core:after {
    width: 14px;
    height: 20px;
    background-color: #01cc9b;
    border-radius: 0;
    left: -1px;
    top: -4px;
  }
  .el-switch.is-checked .el-switch__core::after {
    left: 100%;
    margin-left: -13px;
}
  .el-switch__core {
    width: 32px !important;
    height: 14px;
    border-radius: 0
  }
  .el-switch__core {
     border-color: #d3d3d3;
     background-color: #d3d3d3;
  }
  .el-switch.is-checked .el-switch__core {
    border-color: #d3d3d3;
    background-color: #d3d3d3;
}
.el-switch__label {
    color: #7d7d7d;
    font-size: 12px;
  }
  .el-switch__label.is-active {
      color: #000 !important;
  }
}
</style>
