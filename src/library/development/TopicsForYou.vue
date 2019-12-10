<template>
  <div>
    <h1 class="text-lg pb-3 font-bold">Topics For You</h1>
    <div class="snap overflow-x-scroll py-2 flex content-between">
      <template v-for="(topic, i) in topics">
        <CardSimple class="mr-4 snap-item" :key="i" :to="topic.to" :title="topic.title"></CardSimple>
      </template>
    </div>
  </div>
</template>

<script>
import CardSimple from "../cards/CardSimple";
export default {
  props: {
    topics: {
      type: Array,
      required: true,
      default: () => [
        {
          title: "cross-platform",
          to: "#"
        },{
          title: "byte",
          to: "#"
        },{
          title: "auxiliary",
          to: "#"
        },{
          title: "optical",
          to: "#"
        }
      ]
    }
  },
  components: {
    CardSimple
  }
};
</script>

<style lang="scss">
.snap {
  scroll-snap-type: x proximity;
}

.snap-item {
  scroll-snap-align: start;
}
</style>