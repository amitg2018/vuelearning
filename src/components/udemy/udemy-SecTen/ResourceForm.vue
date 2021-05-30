<template>
  <div>
    <base-dialog v-if="isInputInvalid" >
    <div slot="header" @click="closedModal"> Error Message</div>
    <div>All Fields are mendatory, please fill all filelds.</div>
    <div slot="actions">
      <base-button type="primary" size="mini" @click="closedModal">OK</base-button>
    </div>
    </base-dialog>
    <base-card>
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        @submit.prevent="">
        <el-form-item label="Title">
          <el-input v-model="formLabelAlign.title"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input  type="textarea" v-model="formLabelAlign.description"></el-input>
        </el-form-item>
              <el-form-item label="Link">
          <el-input v-model="formLabelAlign.link"></el-input>
        </el-form-item>
        <base-button type="primary" size="mini" @click="submitData">Submit</base-button>
    </el-form>
    </base-card>
  </div>
</template>
<script>
import BaseButton from './BaseButton';
import BaseCard from './BaseCard'
import BaseDialog from './BaseDialog'
export default {
  inject: ['addResource'],
  components: {
    BaseCard,
    BaseButton,
    BaseDialog
  },
  data() {
    return {
      labelPosition: 'top',
      isInputInvalid: false,
      errorMsg: false,
      formLabelAlign: {
        title: '',
        description: '',
        link: '',
      }
    };
  },
  methods: {
    submitData () {
      if(this.formLabelAlign.title.trim() === '' || this.formLabelAlign.description.trim() === '' || this.formLabelAlign.link.trim() === '') {
        // this.errorMsg = true;
        // this.errorMeg = 'Please fill required fileld...'
        this.isInputInvalid = true;
      } else {

      // console.log('form click')
        this.addResource(this.formLabelAlign)
        this.formLabelAlign = {
          title: '',
          description: '',
          link: '',
        }
      }
      // console.log(this.formLabelAlign)
    },
    closedModal () {
      this.isInputInvalid = false
    }
  }
}
</script>
