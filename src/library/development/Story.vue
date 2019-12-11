<template>
  <div class="story bg-d4slate-lighter p-4 max-w-lg">
    <div class="flex justify-between pb-4">
      <h1 class="text-d4slate-dark text-lg font-bold">New for you</h1>
      <div>
        <Link title="Customise" /> 
          <span class="text-d4slate-light mx-1">|</span> 
        <Link title="See All" />
      </div>
    </div>
    <span class="flex items-center pb-6 relative marker-links">
      <button @click="tab = 0" :class="{active: tab === 0}" class="link w-12 h-12 p-2 rounded-full bg-white mr-4 content-center">
        <svg class="h-8 w-8" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M14 11.8125L13.4697 12.3428C13.7626 12.6357 14.2374 12.6357 14.5303 12.3428L14 11.8125ZM14 3.0625L13.55 3.6625L14 4L14.45 3.6625L14 3.0625ZM7.55913 4.11359L6.97348 3.64507L7.55913 4.11359ZM16.7246 1.01904L17.1746 1.61904L16.7246 1.01904ZM20.3671 5.44539L19.8368 4.91506L20.3671 5.44539ZM14.5303 12.3428L20.8974 5.97572L19.8368 4.91506L13.4697 11.2822L14.5303 12.3428ZM21.0265 3.64507L18.6911 0.725826L17.5198 1.66287L19.8552 4.58211L21.0265 3.64507ZM16.2746 0.419043L13.55 2.4625L14.45 3.6625L17.1746 1.61904L16.2746 0.419043ZM14.45 2.4625L11.7254 0.419043L10.8254 1.61904L13.55 3.6625L14.45 2.4625ZM9.30887 0.725827L6.97348 3.64507L8.14478 4.58211L10.4802 1.66287L9.30887 0.725827ZM7.10256 5.97572L13.4697 12.3428L14.5303 11.2822L8.16322 4.91506L7.10256 5.97572ZM6.97348 3.64507C6.41643 4.34138 6.47203 5.34519 7.10256 5.97572L8.16322 4.91506C8.07314 4.82498 8.0652 4.68158 8.14478 4.58211L6.97348 3.64507ZM11.7254 0.419043C10.9692 -0.148087 9.89934 -0.0122638 9.30887 0.725827L10.4802 1.66287C10.5645 1.55743 10.7174 1.53802 10.8254 1.61904L11.7254 0.419043ZM18.6911 0.725826C18.1007 -0.0122645 17.0308 -0.148087 16.2746 0.419043L17.1746 1.61904C17.2826 1.53802 17.4355 1.55743 17.5198 1.66287L18.6911 0.725826ZM20.8974 5.97572C21.528 5.34518 21.5836 4.34138 21.0265 3.64507L19.8552 4.58211C19.9348 4.68158 19.9269 4.82498 19.8368 4.91506L20.8974 5.97572Z" fill="#384156"/>
            <path d="M16.625 21L16.625 27.125L21.5126 27.125L21.5126 23.959C21.5126 23.5291 21.6511 23.1106 21.9077 22.7655L27.125 15.75L27.125 7.65049C27.125 6.80799 26.442 6.125 25.5995 6.125V6.125C24.9429 6.125 24.3599 6.54517 24.1523 7.16809L22.75 11.375" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.069 17.2937L22.6472 14.2713C23.2136 13.6074 23.2243 12.6335 22.6728 11.9572V11.9572C21.961 11.0843 20.6328 11.0685 19.9004 11.924L16.6251 15.7499L16.6251 20.9999" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.375 21L11.375 27.125L6.48744 27.125L6.48744 23.959C6.48744 23.5291 6.34887 23.1106 6.09229 22.7655L0.875 15.75L0.875 7.65049C0.875 6.80799 1.55798 6.125 2.40049 6.125V6.125C3.05711 6.125 3.64006 6.54517 3.8477 7.16809L5.25 11.375" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.93101 17.2937L5.35281 14.2713C4.78644 13.6074 4.77566 12.6335 5.3272 11.9572V11.9572C6.03898 11.0843 7.3672 11.0685 8.09964 11.924L11.3749 15.7499L11.3749 20.9999" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </button>
      <button @click="tab = 1" :class="{active: tab === 1}" class="link w-12 h-12 p-2 rounded-full bg-white mr-4">
        <svg class="h-8 w-8" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.375 21.875H22.625C23.1773 21.875 23.625 21.4273 23.625 20.875V2.75C23.625 2.19772 23.1773 1.75 22.625 1.75H5.375C4.82272 1.75 4.375 2.19771 4.375 2.75V21.875ZM4.375 21.875V25.25C4.375 25.8023 4.82272 26.25 5.375 26.25H21.875" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 17.5V10.5M14 7V10.5M14 10.5H10.5M14 10.5H17.5" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button @click="tab = 2" :class="{active: tab === 2}" class="link w-12 h-12 p-2 rounded-full bg-white mr-4">
        <svg class="h-8 w-8" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.75 1.75H23.25C24.9069 1.75 26.25 3.09315 26.25 4.75V23.25C26.25 24.9069 24.9069 26.25 23.25 26.25H4.75C3.09315 26.25 1.75 24.9069 1.75 23.25V4.75C1.75 3.09315 3.09315 1.75 4.75 1.75Z" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.875 9.625H7.8925M20.1075 9.625H20.125" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.875 14.875C21.875 14.875 21.875 21.875 14 21.875C6.12502 21.875 6.125 14.875 6.125 14.875H21.875Z" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button @click="tab = 3" :class="{active: tab === 3}" class="link w-12 h-12 p-2 rounded-full bg-white mr-4">
        <svg class="h-8 w-8" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.75 15.75V21.875L19.25 20.125V26.25" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.75 15.75V21.875L12.25 20.125V26.25" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.75 15.75V21.875L5.25 20.125V26.25" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.9792 12.25C14.5833 12.25 16.1875 11.4148 16.1875 9.3267C16.1875 7.23864 14.5833 6.40341 12.9792 6.40341C12.9792 4.73295 11.375 3.0625 8.96875 3.0625C6.5625 3.0625 4.95833 4.733 4.95833 6.40341C3.35417 6.40341 1.75 7.23864 1.75 9.3267C1.75 11.4148 3.35417 12.25 4.95833 12.25H12.9792Z" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 6.125C14.875 2.625 17.0625 1.75 19.4687 1.75C21.875 1.75 23.4792 3.65909 23.4792 5.56818C25.0833 5.56818 26.6875 6.52273 26.6875 8.90909C26.6875 11.2955 25.0833 12.25 23.4792 12.25H13.125" stroke="#384156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="absolute bottom-0 mb-3 ml-4 w-4 h-1 block bg-gray-600 marker rounded"></div>
    </span>
    <div class="cards my-2 flex overflow-hidden">
      <transition-group name="card-slide" tag="div">
        <div 
          :key="prevCard.path"
          class="card prev w-full">
          <WidgetCard
            :topic="prevCard.topic"
            :title="prevCard.title"
            :path="prevCard.path"
            :image="prevCard.image"
            :read-time="prevCard.readtime"
            :author="prevCard.author"
          />
        </div>
        <div 
          :key="nextCard.path"
          class="card next w-full">
          <WidgetCard
            :topic="nextCard.topic"
            :title="nextCard.title"
            :path="nextCard.path"
            :image="nextCard.image"
            :read-time="nextCard.readtime"
            :author="nextCard.author"
          />
        </div>
        <div 
          :key="currentCard.path"
          class="card current w-full">
          <WidgetCard
            :topic="currentCard.topic"
            :title="currentCard.title"
            :path="currentCard.path"
            :image="currentCard.image"
            :read-time="currentCard.readtime"
            :author="currentCard.author"
          />
        </div>
      </transition-group>
    </div>
    <button @click="showPrevCard">Prev Card</button> - 
    <button @click="showNextCard">Next Card</button>
  </div>
</template>

<script>
export default {
  name: 'Story',
  props: {
    cards: {
      type: Array,
      default: () => [{
        title: "Director",
        excerpt: "Et neque suscipit eveniet nostrum et assumenda ipsa qui repellendus. Non tempore fugiat enim qui ut. Molestiae ut est blanditiis omnis sed voluptatibus omnis minus voluptatem. Autem maxime porro omnis et.",
        path: "Cambridgeshire",
        image: "https://source.unsplash.com/random?641/481",
        topic: "Radnom 123",
        readtime: 44,
        author: "GZA"
      }, {
        title: "hard drive",
        excerpt: "Qui delectus adipisci quas alias vel fugit. Temporibus ducimus cupiditate rem cupiditate iste consequatur facilis voluptatem et. Veritatis nihil necessitatibus vel. Sint nisi excepturi tenetur cupiditate ipsum rerum et. Nesciunt repellendus qui voluptate corporis ut assumenda nostrum commodi. Earum commodi consequatur.",
        path: "hard-drive",
        image: "https://source.unsplash.com/random?642/482",
        topic: "Strategist",
        readtime: 24,
        author: "GZA"
      }, {
        title: "experiences",
        excerpt: "Corporis minima ea ut ullam ea. Ab est omnis est et dolor aut sit provident doloribus. Non aut quae sint non ea error libero ut. Ea omnis omnis et. Deserunt reprehenderit velit suscipit odit ducimus aspernatur aliquam.",
        path: "Incredible",
        image: "https://source.unsplash.com/random?643/483",
        topic: "pink Soft",
        readtime: 14,
        author: "GZA"
      }, {
        title: "Need Based",
        excerpt: "Adipisci sit architecto et odit. Magni eligendi autem. Facilis nisi aperiam quia exercitationem error expedita aut quisquam. Beatae atque eum tempora ut. Dolorum necessitatibus sed unde. Exercitationem saepe commodi ut et corrupti tempore.",
        path: "baby",
        image: "https://source.unsplash.com/random?644/484",
        topic: "DAy4 pink Soft",
        readtime: 43,
        author: "GZA"
      }]
    }
  },
  data() {
    return {
      loop: false,
      tab: 0,
    }
  },
  methods: {
    showNextCard() {
      this.tab = (this.tab + 1) % this.cards.length
    },
    showPrevCard() {
      if (this.tab == 0) {
        this.tab = this.cards.length - 1
      } else {
        this.tab = (this.tab - 1) % this.cards.length
      }
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
      if (tab == 0) {
        return cards[cards.length - 1]
      }
      return cards[(tab - 1) % cards.length]
    },
  },
  components: {
    Link: () => import('~/library/buttons/Link'),
    WidgetCard: () => import ('~/library/cards/WidgetCard')
  }
}
</script>

<style lang="scss">
.story {
  .marker-links {
    .marker {
      left: 0;
      transition: .3s left ease-in;
    }
    @for $i from 1 through 10 {
      .link.active:nth-child(#{$i}) ~ .marker {
        left: #{($i - 1) * 64}px;
      }
    }  
  }

  .cards {
    position: relative;
    margin: 0 -1rem;

    &>div {
      width: 100%;
    }
  }

  .cards .card {
    transition: transform 1s, 1s  opacity 1s;
    padding: 0 1rem;
    width: 100%;
  }
  .card-slide-item {
    position: absolute;
    z-index: 2;
  }

  .card-slide-leave-to, .card-slide-enter
  /* .card-slide-leave-active below version 2.1.8 */ {
    transform: translateX(200%) !important;
  }
  .card-slide-leave-active {
    position: absolute;
  }
  .current {
    opacity: 1;
    transform: translateX(0);
    transform-origin: center left;
  }
  .next {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translateX(100%);
    transform-origin: center left;
  }
  .prev {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translateX(-100%);
    transform-origin: center left;
  }
}
</style>