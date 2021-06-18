<template>
  <div>
    <el-button type="primary" size="mini" @click="setMsg">Send Message after Click</el-button>
    <el-button type="primary" size="mini" @click="sendMsgParent">Send Message to Child From Parent</el-button>
   <props-child 
      myMessage="Hi My First Props Message"
      :sendMsg="sendMsg"
      @revert-msg="revertMsg"
      :postClickedMsg="postClickedMsg" 
      @trigger-from-child="parentClick"
      @value-changer="switchValue">
    </props-child>
    {{count}}
    {{switchValueChange}}
  </div>
</template>
<script>
import PropsChild from './PropsChild'
export default {
  components: {
    PropsChild
  },
  data() {
    return {
      postClickedMsg: 'Come from Parent...',
      count: 0,
      switchValueChange: '',
      sendMsg: 'Default text from parent'
    }
  },
  methods: {
    setMsg() {
      this.postClickedMsg = "This message come when i click on button"
    },
    parentClick () {
      this.count += 4
    },
    switchValue(val) {
      !val ? this.switchValueChange = 'Accuracy' : this.switchValueChange = 'Coverage'
      console.log('from Parent', val)
    },
    sendMsgParent() {
      this.sendMsg = `"Text Change after clicked from parent"`
    },
    revertMsg() {
      this.sendMsg =''
    }
  }

}
</script>
