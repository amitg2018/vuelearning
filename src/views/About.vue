<template>
  <div class="about">
    About Us Page...
    <emit-data></emit-data>
    <component-a></component-a>
    <component-b></component-b>

    <hr>
    <hr>
    <input-list></input-list>
    <input-task></input-task>
  </div>
</template>

<script>
import ComponentB from '../components/bus/componentB.vue';
import ComponentA from '../components/bus/componentA.vue';
// @ is an alias to /src
import EmitData from '../components/bus/firstEmit'
import InputTask from '../components/bus/inputTask.vue';
import InputList from '../components/bus/inputList.vue';
export default {
  name: "about",
  components: {
    EmitData,
    ComponentA,
    ComponentB,
    InputTask,
    InputList
   },
  data () {
    return {}
  },
  created() {
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
