<template>
  <Layout>
    <div :key="comp.id" class="container px-8 py-6 m-4 w-full">
      <h3 class="text-xl mb-3">{{comp.name}}</h3>
      <div class="my-6 w-full">
        <div class="flex items-end justify-center mb-2 bg-white">
          <span @click="previewSize = 'w-64'" class="inline-block text-center cursor-pointer select-none mr-8 text-gray-500" :class="{'text-gray-800': previewSize == 'w-64'}">
            <svg width="12" height="24" viewBox="0 0 14 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1"><path d="M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill-rule="evenodd"></path></svg>
            <p class="text-xs">sm</p>
          </span>
          <span @click="previewSize = 'w-1/3'" class="inline-block text-center cursor-pointer select-none mr-8 text-gray-500" :class="{'text-gray-800': previewSize == 'w-1/3'}">
            <svg width="22" height="24" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1"><path d="M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill-rule="evenodd"></path></svg>
            <p class="text-xs">md</p>
          </span>
          <span @click="previewSize = 'w-2/3'" class="inline-block text-center cursor-pointer select-none mr-8 text-gray-500" :class="{'text-gray-800': previewSize == 'w-2/3'}">
            <svg width="32" height="24" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1"><path d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z" fill-rule="evenodd"></path></svg>
            <p class="text-xs">lg</p>
          </span>
          <span @click="previewSize = 'w-full'" class="inline-block text-center cursor-pointer select-none text-gray-500" :class="{'text-gray-800': previewSize == 'w-full'}">
            <svg width="30" height="24" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1"><path d="M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"></path></svg>
            <p class="text-xs">xl</p>
          </span>
        </div>
        <div class="container mt-8 w-full flex justify-center">
          <i-frame :class="[previewSize]">
            <component :is="comp._file" v-bind="mockData"></component>
          </i-frame>
        </div>
      </div>
      <div class="container w-full max-w-xl">
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
                  <PreviewInput v-model="mockData[prop.name]" :type="prop.type" :required="prop.required" />
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

          <div v-if="activeTab === 'methods'" class="p-6">
            <ul v-if="comp.methods">
              <li v-for="method in comp.methods" :key="method.name">{{method.name}}</li>
            </ul>
          </div>
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
    fileInfo {
      path
    }
    props {
      name
      type
      required
      default
    }
    slots {
      name
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
      previewSize: 'w-full',
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
    PreviewCode: () => import('~/partials/PreviewCode.vue'),
    PreviewInput: () => import('~/partials/PreviewInput.vue')
  }
}
</script>