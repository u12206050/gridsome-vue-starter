<template>
  <div>
    <div v-for="type in types" :key="type.count">
      <CardType :title="type.title" :count="type.count"></CardType>
    </div>
  </div>
</template>

<script>
import CardType from '../cards/CardType'
export default {
  props: {
    types: {
      type: Array,
      required: true,
      default: () => [
        {
          title: "Cutting-Edge",
          count: 24
        },
        {
          title: "Firewall",
          count: 15
        },
        {
          title: "Enhance",
          count: 51
        },
        {
          title: "Architectures",
          count: 11
        },
      ]
    }
  },
  components: {CardType}

}
</script>