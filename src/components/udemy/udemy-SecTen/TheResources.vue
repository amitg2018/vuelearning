<template>
  <div>
    <base-card-ui>
    <base-button 
      type="default"
      size="mini"
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode">
        Stored Resources
    </base-button>
    <base-button
      type="default"
      size="mini"
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode">
        Add Resource
      </base-button>
    </base-card-ui>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>
<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource';
import BaseButton from './BaseButton';
import BaseCardUi from './BaseCardUi'
export default {
  components: {
    AddResource,
    StoredResources,
    BaseButton,
    BaseCardUi
  },
   data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
  computed: {
    // active aur deactive button not understand
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? 'amit' : null;
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? 'amit' : null;
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(data) {
      const newResource = {
        id: data.id,
        title: data.title,
        description: data.description,
        link: data.link
      }
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources'
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
    // removeResource(id) {
    //   alert(id)
    //   // this.storedResources = this.storedResources.filter((res) => res.id !== id);
    //   const findIndex = this.storedResources.findIndex(res => res.id === id);
    //   this.storedResources.splice(findIndex, 1)
    //   console.log(this.storedResources.length)
    // }
  },
}
</script>


