<template>
  <div class="popular px-4 py-6 max-w-lg">
    <h1 class="font-bold text-gray-800 text-lg mb-8">Popular on ActiveChristianity</h1>
    <div class="snap flex overflow-x-scroll whitespace-no-wrap my-2 content-between">
      <template v-for="card in cards">
        <CardShortTitle class="mr-4 w-5/6 snap-item"
        :key="card.path"
        :path="card.path"
        :title="card.title"
        :excerpt="card.excerpt"
        :image="card.image"
        :readTime="card.readTime"
        :author="card.author"
      >
      </CardShortTitle>
      </template>
    </div>
  </div>
</template>

<script>
import CardShortTitle from '../cards/CardShortTitle'
export default {
  data() {
    return {
      cards: [{
        topic: "Computers",
        title: "Unbranded Wooden Soap",
        excerpt: "Illum et soluta laborum sed exercitationem laboriosam tempore. Veniam velit ut et ex odit sit aliquam eos consectetur. Itaque quo provident iste voluptatem.",
        path: "RAM",
        image: "https://source.unsplash.com/random?283/160",
        readTime: 4,
        author: "Me"
      }, {
        topic: "Electronics",
        title: "Small Granite Mouse",
        excerpt: "Illum et soluta laborum sed exercitationem laboriosam tempore. Veniam velit ut et ex odit sit aliquam eos consectetur. Itaque quo provident iste voluptatem.",
        path: "ARM",
        image: "https://source.unsplash.com/random?283/161",
        readTime: 4,
        author: "Myself"
      }, {
        topic: "Games",
        title: "Gorgeous Frozen Soap",
        excerpt: "Illum et soluta laborum sed exercitationem laboriosam tempore. Veniam velit ut et ex odit sit aliquam eos consectetur. Itaque quo provident iste voluptatem.",
        path: "MAR",
        image: "https://source.unsplash.com/random?283/162",
        readTime: 4,
        author: "I"
      }]
    }
  },
  name: 'Popular',
  components: {
    CardShortTitle
  }  
}
</script>

<style lang="scss">
.popular {
  background: #EDF1FA;

  .snap {
    scroll-snap-type: x proximity;
  }

  .snap-item {
    scroll-snap-align: start;
  }
}


</style>