<template>
  <div class="latest-cards">
    <div class="flex justify-between items-end">
      <h5 class="flex items-center">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="5.5" stroke="#384156"/>
          <path d="M8 5V8H10" stroke="#384156" stroke-linecap="round"/>
        </svg>
        <span class="mx-3 text-d4slate-dark leading-normal ">Latest</span>
      </h5>
      <button class="flex items-center border-2 border-d4gray px-2 rounded-full">
        <p class="leading-loose">Done For Today</p>
        <svg class="ml-2" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4.5L3 7L7 1" stroke="#384156" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="my-2 relative" v-touch:swipe.left="showNextCard">
      <transition-group name="card-stack" tag="div" class="sm:flex sm:flex-auto">
        <Card
          :key="prevCard.path"
          :title="prevCard.title"
          :subtitle="prevCard.subtitle"
          :excerpt="prevCard.excerpt"
          :path="prevCard.path"
          :image="prevCard.image"
          :textOnly="prevCard.textOnly"
          class="prev"
        ></Card>
        <Card
          :key="nextCard.path"
          :title="nextCard.title"
          :subtitle="nextCard.subtitle"
          :excerpt="nextCard.excerpt"
          :path="nextCard.path"
          :image="nextCard.image"
          :textOnly="prevCard.textOnly"
          class="next"
        ></Card>
        <Card
          :key="currentCard.path"
          :title="currentCard.title"
          :subtitle="currentCard.subtitle"
          :excerpt="currentCard.excerpt"
          :path="currentCard.path"
          :image="currentCard.image"
          :textOnly="prevCard.textOnly"
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
        image: "https://source.unsplash.com/random?641/481",
        textOnly: true
      }, {
        title: "hard drive",
        subtitle: "calculate",
        excerpt: "Qui delectus adipisci quas alias vel fugit. Temporibus ducimus cupiditate rem cupiditate iste consequatur facilis voluptatem et. Veritatis nihil necessitatibus vel. Sint nisi excepturi tenetur cupiditate ipsum rerum et. Nesciunt repellendus qui voluptate corporis ut assumenda nostrum commodi. Earum commodi consequatur.",
        path: "hard-drive",
        image: "https://source.unsplash.com/random?642/482",
        textOnly: true
      }, {
        title: "experiences",
        subtitle: "azure",
        excerpt: "Corporis minima ea ut ullam ea. Ab est omnis est et dolor aut sit provident doloribus. Non aut quae sint non ea error libero ut. Ea omnis omnis et. Deserunt reprehenderit velit suscipit odit ducimus aspernatur aliquam.",
        path: "Incredible",
        image: "https://source.unsplash.com/random?643/483",
        textOnly: true
      }, {
        title: "Need Based",
        subtitle: "Baby",
        excerpt: "Adipisci sit architecto et odit. Magni eligendi autem. Facilis nisi aperiam quia exercitationem error expedita aut quisquam. Beatae atque eum tempora ut. Dolorum necessitatibus sed unde. Exercitationem saepe commodi ut et corrupti tempore.",
        path: "baby",
        image: "https://source.unsplash.csom/random?644/484",
        textOnly: true
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
.card:first-child {
  margin-left: 0;
}
@media (max-width: 640px) { 
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
}
</style>