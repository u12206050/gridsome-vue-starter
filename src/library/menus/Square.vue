<template>
  <div class="container">
    <button class="p-4 text-black rounded shadow" @click="activeMenu = !activeMenu">
      <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
    <div class="sideMenu" :class="{active: activeMenu}">
      <ul class="items">
        <li>Home</li>
        <li>Projects</li>
        <li>Code</li>
        <li>Designs</li>
        <li>Ideas</li>
        <li>News</li>
        <li>About Us</li>
        <li>History</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { activeMenu: false }
  }
}
</script>

<style lang="scss">
@keyframes menuEnter {
  0% {
    top: -420px;
    left: -420px;
    transform: rotate(0deg);
  }
  80% {
    top: 0;
    left: 65px;
  }
  100% {
    top: 65px;
    transform: rotate(45deg);
  }
}

@keyframes menuExit {
  0% {
    top: 65px;
    left: 65px;
    transform: rotate(45deg);
  }
  50% {
    top: 0;
    left: 65px;
    transform: rotate(45deg);
  }
  100% {
    left: -420px;
    transform: rotate(0deg);
  }
}

.sideMenu {
  background: linear-gradient(90deg, #fff 0%, #fff 64%, #d4d4d4 100%);
  color: #000;
  transform: rotate(0deg);
  width: 300px;
  height: 300px;
  position: fixed;
  top: -420px;
  left: -420px;
  overflow: hidden;
  z-index: 40;
  animation: .5s menuExit;

  &.active {
    animation: 1s menuEnter ease;
    transform: rotate(45deg);
    left: 65px;
    top: 65px;
  }

  .items {
    transform: rotate(-45deg);
    overflow-y: scroll;
    font-size: 2rem;
    text-align: center;
    list-style: none;
    height: 420px;
    width: 420px;
    margin: 0;
    margin-top: -60px;
    margin-left: -60px;
    padding: 65px 0 100px;

    li {
      padding: .5rem 0;
      cursor: pointer;
      border: 1px solid transparent;
      border-left: 0;
      border-right: 0;

      transition: .2s ease-out;
      font-weight: 100;

      &:hover {
        border-color: #FFF;
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }
}
</style>