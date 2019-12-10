<template>
  <div class="latest-cards">
    <div class="flex justify-between align-center text-gray-600 text-base">
      <h5 class="flex items-center">
        <svg class="w-4 h-4 stroke-current" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5"/><path d="M8 5V8H10" stroke-linecap="round"/></svg>
        <span class="mx-2">Latest</span>
      </h5>
      <button class="w-5 h-5 bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-800 rounded-full flex align-center justify-center">
        <svg class="w-2 h-2 stroke-current" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L4 4M7 7L4 4M4 4L7 1M4 4L1 7" stroke-linecap="round"/></svg>
      </button>
    </div>
    <div class="my-2 relative" v-touch:swipe.left="showNextCard">
      <transition-group name="card-stack" tag="div">
        <Card
          :key="prevCard.path"
          :title="prevCard.title"
          :subtitle="prevCard.subtitle"
          :excerpt="prevCard.excerpt"
          :path="prevCard.path"
          :image="prevCard.image"
          class="prev"
        ></Card>
        <Card
          :key="nextCard.path"
          :title="nextCard.title"
          :subtitle="nextCard.subtitle"
          :excerpt="nextCard.excerpt"
          :path="nextCard.path"
          :image="nextCard.image"
          class="next"
        ></Card>
        <Card
          :key="currentCard.path"
          :title="currentCard.title"
          :subtitle="currentCard.subtitle"
          :excerpt="currentCard.excerpt"
          :path="currentCard.path"
          :image="currentCard.image"
          class="current"
        ></Card>
      </transition-group>
    </div>
    <button @click="showNextCard">Next Card</button>
  </div>
</template>

<script>
import vtouch from 'vue2-touch-events'
import Vue from 'vue'

Vue.use(vtouch)
export default {
  name: 'LatestCards',
  data() {
    return {
      tab: 0,
      cards: [{
        title: "Director",
        subtitle: "THX",
        excerpt: "Et neque suscipit eveniet nostrum et assumenda ipsa qui repellendus. Non tempore fugiat enim qui ut. Molestiae ut est blanditiis omnis sed voluptatibus omnis minus voluptatem. Autem maxime porro omnis et.",
        path: "Cambridgeshire",
        image: "https://source.unsplash.com/random?641/481"
      }, {
        title: "hard drive",
        subtitle: "calculate",
        excerpt: "Qui delectus adipisci quas alias vel fugit. Temporibus ducimus cupiditate rem cupiditate iste consequatur facilis voluptatem et. Veritatis nihil necessitatibus vel. Sint nisi excepturi tenetur cupiditate ipsum rerum et. Nesciunt repellendus qui voluptate corporis ut assumenda nostrum commodi. Earum commodi consequatur.",
        path: "hard-drive",
        image: "https://source.unsplash.com/random?642/482"
      }, {
        title: "experiences",
        subtitle: "azure",
        excerpt: "Corporis minima ea ut ullam ea. Ab est omnis est et dolor aut sit provident doloribus. Non aut quae sint non ea error libero ut. Ea omnis omnis et. Deserunt reprehenderit velit suscipit odit ducimus aspernatur aliquam.",
        path: "Incredible",
        image: "https://source.unsplash.com/random?643/483"
      }, {
        title: "Need Based",
        subtitle: "Baby",
        excerpt: "Adipisci sit architecto et odit. Magni eligendi autem. Facilis nisi aperiam quia exercitationem error expedita aut quisquam. Beatae atque eum tempora ut. Dolorum necessitatibus sed unde. Exercitationem saepe commodi ut et corrupti tempore.",
        path: "baby",
        image: "https://source.unsplash.com/random?644/484"
      }]
    }
  },
  methods: {
    showNextCard() {
      this.tab = (this.tab + 1) % this.cards.length
    }
  },
  computed: {
    currentCard() {
      const { tab, cards } = this
      return cards[tab]
    },
    nextCard() {
      const { tab, cards } = this
      return cards[(tab + 1) % cards.length]
    },
    prevCard() {
      const { tab, cards } = this
      return cards[(tab + 2) % cards.length]
    },
  },
  components: {
    Card: () => import('~/library/cards/Card.vue')
  }
}
</script>

<style>
.latest-cards .card {
  transition: all 0.7s;
}
.card-stack-item {
  transition: all 0.7s;
  position: absolute;
  z-index: 2;
}

.card-stack-leave-to, .card-stack-enter
/* .card-stack-leave-active below version 2.1.8 */ {
  transform: scale(1) translateX(-200%) !important;
}
.card-stack-leave-active {
  position: absolute;
}
.current {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: scale(0.96);
  transform-origin: center left;
}
.next {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: scale(0.86) translateX(14%);
  transform-origin: center left;
  @apply bg-gray-100;
}
.prev {
  transform: scale(0.8) translateX(24%);
  transform-origin: center left;
  @apply bg-gray-300;
}
</style>