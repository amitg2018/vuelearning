<template>
  <div>
    <h5>Dynamic Tab</h5>
    <slot name="heading"></slot>
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <!-- 
          agar tab ke under tab create karte hai aur jab main tab switch karte hai to child tab jo select kiya tha wo hat ke default tab pe aa jata hai to Us problem ko solved kerne ke liye is tag ko parant main add ker denge like.
          <keep-alive>
              <component v-bind:is="currentTabComponent" class="tab"></component>
          </keep-alive>
          check this URL:
          https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-keep-alive-with-dynamic-components?file=/index.html:478-586
        -->
    <component :is="currentTabComponent" class="tab"></component>
    <!-- <el-drawer
            title="I am the title"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose"
            :wrapperClosable= "false"
            :size="400"
            :modal="false">
            <span>Hi, there!</span>
          </el-drawer>
          <el-button @click="drawer = true" type="primary" style="margin-left: 16px;"></el-button> -->
  </div>
</template>

<script>
import TabOne from "@/components/TabOne.vue";
import TabTwo from "@/components/TabTwo.vue";
import TabThree from "@/components/TabThree.vue";
export default {
  components: {
    TabOne,
    TabTwo,
    TabThree,
  },
  data() {
    return {
      currentTab: "TabOne",
      tabs: ["TabOne", "TabTwo", "TabThree"],
      drawer: false,
      direction: "rtl",
    };
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab;
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.tab-button.active {
  background: #e0e0e0;
}

.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
