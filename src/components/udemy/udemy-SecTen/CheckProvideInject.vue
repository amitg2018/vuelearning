<template>
  <div>
    <base-button @click="information">Provide/Inject</base-button>
  </div>
</template>
<script>
import BaseButton from './BaseButton'
export default {
  components: {
    BaseButton
  },
  data() {
    return {}
  },
  inject: ['information'],
  methods: {
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
