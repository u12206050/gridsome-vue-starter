<template>
  <div class="my-6 w-full overflow-x-hidden">
    <div class="flex items-end justify-center mb-2 bg-white w-full">
      <button title="380px" @click="previewSize = 'w-mobile'" class="inline-block text-center cursor-pointer select-none mr-8 text-gray-500" :class="{'text-gray-800': previewSize == 'w-mobile'}">
        <svg width="12" height="24" viewBox="0 0 14 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1"><path d="M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill-rule="evenodd"></path></svg>
        <p class="text-xs">sm</p>
      </button>
      <button title="768px" @click="previewSize = 'w-tablet'" class="inline-block text-center cursor-pointer select-none mr-8 text-gray-500" :class="{'text-gray-800': previewSize == 'w-tablet'}">
        <svg width="22" height="24" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1"><path d="M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill-rule="evenodd"></path></svg>
        <p class="text-xs">md</p>
      </button>
      <button title="1024px" @click="previewSize = 'w-laptop'" class="inline-block text-center cursor-pointer select-none mr-8 text-gray-500" :class="{'text-gray-800': previewSize == 'w-laptop'}">
        <svg width="32" height="24" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1"><path d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z" fill-rule="evenodd"></path></svg>
        <p class="text-xs">lg</p>
      </button>
      <button title="1280px" @click="previewSize = 'w-desktop'" class="inline-block text-center cursor-pointer select-none mr-8 text-gray-500" :class="{'text-gray-800': previewSize == 'w-desktop'}">
        <svg width="30" height="24" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1"><path d="M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"></path></svg>
        <p class="text-xs">xl</p>
      </button>
      <button title="Source code" @click="previewSize = 'code'" class="inline-block text-center cursor-pointer select-none text-gray-500" :class="{'text-gray-800': previewSize == 'code'}">
        <p class="texl-2xl">&lt;/&gt;</p>
        <p class="text-xs">code</p>
      </button>
    </div>
    <div class="mt-8 mx-auto w-full block overflow-x-scroll">
      <div v-if="previewSize != 'code'" class="block mx-auto border mobile-sides" :class="[previewSize]">
        <div class="bg-gray-300 flex p-2">
          <span class="w-4 h-4 rounded-full bg-red-500 m-2"></span>
          <span class="w-4 h-4 rounded-full bg-yellow-500 m-2"></span>
          <span class="w-4 h-4 rounded-full bg-green-500 m-2"></span>
        </div>
        <div class="bg-white p-2 block" style="min-height: 24rem">
          <component :is="component" v-bind="props"></component>
        </div>
      </div>
      <Code v-else :code="source" class="w-full" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    component: {
      type: Function,
      required: true
    },
    props: Object,
    source: String
  },
  data() {
    return {
      previewSize: 'w-tablet',
      repeat: [1,2,3,4]
    }
  },
  components: {
    Code: () => import("~/components/Code.vue")
  }
}
</script>

<style lang="scss">
.mobile-sides {
  position: relative;

  &:before {
    content: '';
    height: 100%;
    background: #fff;
    position: absolute;
    z-index: 100;
    width: calc(100vw - 100%);
    left: calc(100% - 100vw);
    border-right: 1px solid #ddd;
  }
}

</style>