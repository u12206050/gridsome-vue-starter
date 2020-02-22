<template>
  <div class="layouttext-white max-w-full h-full w-full pt-16" :class="theme">
    <header class="flex bg-gray-100 border-b border-gray-200 inset-x-0 z-50 h-16 items-center fixed top-0">
      <div class="w-full max-w-screen-xl relative mx-auto px-6">
        <div class="flex justify-between">
          <button class="hidden msm:block pr-4" @click="menuActive = !menuActive">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
          <g-link to="/" class="text-gray-800 text-xl truncate">{{ $static.metadata.siteName }}</g-link>
          <select v-model="theme">
            <option v-for="(n, k) in themes" :value="k" :key="k">{{n}}</option>
          </select>
          <div class="flex justify-start items-center text-gray-500">
            <a class="block flex items-center hover:text-gray-700 mr-5" href="https://github.com/u12206050/gridsome-vue-starter">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg>
            </a>
            <a class="block flex items-center hover:text-gray-700 mr-5" href="https://twitter.com/GLamusse">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Twitter</title><path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
    <div class="flex">
      <span @click="menuActive = false" class="hidden msm:block msm:fixed inset-0 z-20 bg-black opacity-25" v-if="menuActive"></span>
      <aside
        class="bg-gray-100 msm:fixed msm:pt-10 msm:w-50 msm:mt-16 inset-y-0 z-40"
        :class="{'msm:-m-64': !menuActive}"
        style="min-width: 12rem; transition: .4s">
        <button v-if="menuActive" class="absolute inset-y-0 right-0 -mr-12 bg-gray-200 py-1 px-2 semibold" @click="menuActive = false">
          <svg class="w-8 h-8 text-gray-600 stroke-current" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L1 9L9 17" stroke-linecap="round"/></svg>
        </button>
        <div v-for="(branch, dir) in tree" :key="dir" class="p-3 msm:text-center">
          <h5 class="mb-3 lg:mb-2 text-gray-600 uppercase tracking-wide font-bold text-sm lg:text-xs">{{dir}}</h5>
          <template v-for="comp in branch.comps">
            <button @click="selected = comp" :key="comp.id" class="px-2 -mx-2 py-1 transition-fast relative block hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium">{{comp.name | namify}}</button>
          </template>
          <div class="p-1" v-for="(leaf, ldir) in branch.leafs" :key="ldir" >
            <h5 class="my-2 text-gray-500 uppercase tracking-wide font-bold text-xs lg:text-xs">{{ldir}}</h5>
            <template v-for="comp in leaf.comps">
              <button @click="selected = comp" :key="comp.id" class="px-2 -mx-2 py-1 transition-fast relative block hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium">{{comp.name | namify}}</button>
            </template>
          </div>
        </div>
      </aside>
      <main class="flex-auto overflow-x-hidden">
        <slot v-bind:prop="selected"/>
      </main>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
  comps: allVueComponent(sortBy: "path") {
    edges {
      node {
        id
        name
        path
        fileInfo {
          directory
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      menuActive: true,
      themes: {
        'theme-ac': 'AC',
        'theme-tf': 'TF'
      },
      theme: "theme-ac",
      selected: null,
    }
  },
  computed: {
    tree() {
      const tree = {}

      this.$static.comps && this.$static.comps.edges.forEach(({ node }) => {
        const dir = node.fileInfo.directory || 'Library'
        this.insertLeaf(node, dir, tree)
      })

      return tree
    }
  },
  methods: {
    insertLeaf(node, path, branch) {
      const segments = path.split('/')
      if (segments.length) {
        let parent = branch
        segments.forEach(seg => {
          if (!parent[seg]) parent[seg] = {
            comps: [],
            leafs: {}
          }
          branch = parent[seg]
          parent = branch.leafs
        })
        return branch.comps.push(node)
      }

      if (!branch[path]) branch[path] = {
        comps: [],
        leafs: {}
      }

      branch[path].push(node)
    }
  }
}
</script>

<style>
.theme-ac {
  --primary: #FFAE0C;
  --secondary: #4A75D1;

  --slate-lighter: #EDF1FA;
  --slate-light: #9CA6BE;
  --slate: #606F94;
  --slate-dark: #384156;

  --gray-light: #f4f4f4;
  --gray: #d4d4d4;
  --gray-dark: #757575;

  --white: #ffffff;
  --black: #212236;

  --white-50: rgba(255, 255, 255, 0.50);
  --black-50: rgba(33, 34, 54, 0.50);

  --red: #D14A4A;

  --green: #618D3A;

  --athens: #f5f6f8;

  --facebook: #475993;
}
.theme-tf {
  --primary: blue;
  --secondary: red;

  --gray-light: #F5F6F8;
  --gray: #d4d4d4;
  --gray-dark: #4d4d4d;
}
aside a.active {
  @apply text-blue-500
}
</style>