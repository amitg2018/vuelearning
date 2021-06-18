<template>
  <div>
    <base-card>
    <base-button 
      type="default"
      size="mini"
      @click="setSelectedTab('resources-lists')"
      :mode="storedResButtonMode">
        Stored Resources
    </base-button>
    <base-button
      type="default"
      size="mini"
      @click="setSelectedTab('resource-form')"
      :mode="addResButtonMode">
        Add Resource
      </base-button>
      <base-button
      type="default"
      size="mini"
      @click="setSelectedTab('props-parent')"
      :mode="addResButtonMode">
        Props
      </base-button>
      <base-button
      type="default"
      size="mini"
      @click="setSelectedTab('sibling-component')"
      :mode="addResButtonMode">
       Sibling Component
      </base-button>
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>
<script>
import ResourcesLists from './ResourcesLists';
import ResourceForm from './ResourceForm';
import PropsParent from './PropsParent'
import BaseButton from './BaseButton';
import BaseCard from './BaseCard'
import SiblingComponent from './SiblingComponentCommunnication'
export default {
  components: {
    ResourceForm,
    ResourcesLists,
    PropsParent,
    SiblingComponent,
    BaseButton,
    BaseCard
  },
   data() {
    return {
      selectedTab: 'resources-lists',
      ResourcesLists: [
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
      resources: this.ResourcesLists,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
  computed: {
    // active aur deactive button not understand
    storedResButtonMode() {
      return this.selectedTab === 'resources-lists' ? 'amit' : null;
    },
    addResButtonMode() {
      return this.selectedTab === 'resource-form' ? 'amit' : null;
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
      this.ResourcesLists.unshift(newResource);
      this.selectedTab = 'resources-lists'
    },
    removeResource(resId) {
      const resIndex = this.ResourcesLists.findIndex(res => res.id === resId);
      this.ResourcesLists.splice(resIndex, 1);
    }
  },
}
</script>


