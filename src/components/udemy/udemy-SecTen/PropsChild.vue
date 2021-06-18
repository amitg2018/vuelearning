<template>
<div> 
  <!-- ==========================================
  From Parent To Child Communication through props  
  ================================================-->
  {{myMessage}}
  <br>
  {{postClickedMsg}}

  <div>{{sendMsg}}</div>
  <!-- End -->
  <!-- ==========================================
  From Child To Parent Communication through $emit 

  we communicate from a Child component to a Parent Component, we can emit a custom event in the Child Component, and listen for that emitted event in the Parent Component. 
  ================================================-->
  <div>
    <el-button type="success" @click="triggerFromChild">$emit from Child</el-button>
    <el-button type="primary" @click="msgRevert">hide MSG come from parent</el-button>
    
    <!-- Switch Button -->
    <div class="enableDisableBlock">
      <el-switch
        v-model="switchToggleValue"
        active-text="Coverage"
        inactive-text="Accuracy"
        size="mini"
        @change="switchValue">
      </el-switch>
    </div>
  </div>
  <!-- End -->
</div>
</template>
<script>
export default {
  data() {
    return {
      switchToggleValue: false
    }
  },
  props: {
    myMessage: {
      type: String
    },
    postClickedMsg: {
      type: String,
      default: 'Comes from Parent...'
    },
    sendMsg: {
      type: String
    }
  },
  methods: {
    triggerFromChild() {
      this.$emit('trigger-from-child');
      // alert('Hi')
    },
    switchValue () {
      this.$emit("value-changer", this.switchToggleValue);
      console.log('From child', this.switchToggleValue)
    },
    msgRevert () {
      this.$emit('revert-msg')
    }
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
