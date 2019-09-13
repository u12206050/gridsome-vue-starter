<template>
  <Layout>
    <div :key="comp.id" class="p-6 w-full">
      <h3 class="text-xl mb-3">{{comp.name | namify}}</h3>
      <Screen :component="comp._file" :props="mockData" :source="comp.source"></Screen>
      <div class="w-full max-w-xl">
        <PreviewCode :tag="comp.name" :props="mockData" :slots="comp.slots" />

        <ul class="flex border-b mt-10">
          <Tab :active="activeTab === 'props'" @change="activeTab = 'props'">Props</Tab>
          <Tab v-if="comp.methods && comp.methods.length" :active="activeTab === 'methods'" @change="activeTab = 'methods'">Methods</Tab>
          <Tab v-if="comp.slots && comp.slots.length" :active="activeTab === 'slots'" @change="activeTab = 'slots'">Slots</Tab>
        </ul>

        <div class="border-l border-b border-r">
          <table v-if="activeTab === 'props'" class="text-gray-700 text-sm w-full">
            <thead>
              <tr class="font-bold">
                <th class="p-3 bg-grey-lightest text-sm text-grey-dark border-b border-grey-light">Name</th>
                <th class="p-3 bg-grey-lightest text-sm text-grey-dark border-b border-grey-light">Type</th>
                <th class="p-3 bg-grey-lightest text-sm text-grey-dark border-b border-grey-light">Required</th>
                <th class="p-3 bg-grey-lightest text-sm text-grey-dark border-b border-grey-light">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prop in comp.props" :key="prop.name" class="hover:bg-grey-lighter">
                <td class="font-bold capitalize py-2 px-3 border-b border-grey-light">{{prop.name}}</td>
                <td class="py-2 px-3 border-b border-grey-light">{{prop.type.join(' | ')}}</td>
                <td class="py-2 px-3 border-b border-grey-light"><span class="mx-3 text-xs text-white rounded-lg p-1 w-10 block text-center" :class="[prop.required ? 'bg-blue-500' : 'bg-gray-600']">{{prop.required ? 'yes' : 'no'}}</span></td>
                <td class="border-b border-grey-light">
                  <PreviewInput v-model="mockData[prop.name]" :type="prop.type" :typeDesc="prop.typeDesc" :required="prop.required" />
                </td>
              </tr>
            </tbody>
          </table>

          <div v-if="activeTab === 'slots'" class="p-6">
            <ul v-if="comp.slots">
              <li v-for="slot in comp.slots" :key="slot.name">
                <h4>{{slot.name}}</h4>
                <hr>
              </li>
            </ul>
          </div>

          <table v-if="activeTab === 'methods'" class="text-gray-700 text-sm w-full">
            <thead>
              <tr class="font-bold">
                <th class="p-3 bg-grey-lightest text-sm text-grey-dark border-b border-grey-light">Name</th>
                <th class="p-3 bg-grey-lightest text-sm text-grey-dark border-b border-grey-light">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="method in comp.methods" :key="method.name" class="hover:bg-grey-lighter">
                <td class="font-bold capitalize py-2 px-3 border-b border-grey-light">{{method.name}}</td>
                <td class="py-2 px-3 border-b border-grey-light">{{method.describe.join('|')}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query VueComponent ($id: String!) {
  comp: vueComponent (id: $id) {
    id
    name
    source
    fileInfo {
      path
    }
    props {
      name
      type
      typeDesc
      required
      default
    }
    methods {
      name
      describe
    }
    mockData
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      activeTab: 'props',
      mockData: {}
    }
  },
  computed: {
    comp() {
      const { comp } = this.$page
      if (comp) {
        this.mockData = comp.mockData ? JSON.parse(comp.mockData) : {}
        comp._file = () => import(`~/library/${comp.fileInfo.path}`)
      }
      return comp
    }
  },
  components: {
    Tab: () => import('~/partials/Tab.vue'),
    PreviewCode: () => import('~/components/PreviewCode.vue'),
    PreviewInput: () => import('~/components/PreviewInput.vue'),
    Screen: () => import("~/components/Screen.vue")
  },
  watch: {
    comp() {
      this.activeTab = 'props'
    }
  }
}
</script>