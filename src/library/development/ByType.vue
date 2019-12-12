<template>
  <div>
    <h1 class="ml-1 mb-2">By Type</h1>
    <div class="snap py-4 overflow-x-scroll flex content-between">
      <div v-for="type in types" :key="type.count">
        <CardType class="mr-4 snap-item"
          :title="type.title" 
          :count="type.count"
          :color="type.color"
          :image="type.image"
          :small="smallCard"
        ></CardType>
      </div>
    </div>
    <button @click="toggleSize">Toggle size</button>
  </div>
</template>

<script>
import CardType from '../cards/CardType'
export default {
  data() {
    return {
      smallCard: true
    }
  },
  props: {
    types: {
      type: Array,
      default: () => [
        {
          title: "Cutting-Edge",
          count: 24,
          color: "blue",
          image: ""

        },
        {
          title: "Firewall",
          count: 15,
          color: "blue",
          image: ""
        },
        {
          title: "Enhance",
          count: 51,
          color: "blue",
          image: ""
        },
        {
          title: "Architectures Advanced",
          count: 11,
          color: "blue",
          image: ""
        },
      ]
    }
  },
  methods: {
    toggleSize() {
      this.smallCard = !this.smallCard
    }
  },
  components: {CardType}

}
</script>