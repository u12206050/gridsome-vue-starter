<template>
  <div class="max-w-sm rounded-xl pb-4 border border-gray-300">
    <div class="bg-d4primary text-center rounded-xl relative">
      <div class="pt-6 px-12 mx-auto pb-10">
        <h1 class="text-white text-4xl italic">LOGO</h1>
        <p class="text-3xl text-white font-semibold">Register to continue</p>
        <p class="text-white text-xl leading-snug">Follow topics, bookmark, download wallpapers & books, and much more</p>
      </div>
      <g-image class="absolute left-0 bottom-2" src="~/assets/library/humaaan1.png" />
      <g-image class="absolute right-0 bottom-2" src="~/assets/library/humaaan2.png" />
      <g-image class="absolute right-0 bottom-2" src="~/assets/library/humaaan3.png" />
      <g-link class="p-2 bg-gray-300 m-4 w-content rounded-25 absolute right-0 top-0">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11" stroke="#4F4F4F" stroke-linecap="round"/>
        </svg>
      </g-link>
    </div>
    <div v-if="loginScreen" class="rounded-xl p-4">
      <p class="uppercase text-center mb-6 text-d4slate-dark mt-4 font-semibold">Sign up with</p>
      <g-link class="bg-facebook flex p-4 rounded-xl justify-between">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.7659 0H3.23422C1.44814 0 0.000167847 1.44791 0.000167847 3.23405V20.7658C0.000167847 22.552 1.44808 23.9999 3.23422 23.9999H11.8808L11.8955 15.4236H9.66738C9.37782 15.4236 9.1428 15.1895 9.14169 14.8999L9.131 12.1354C9.12989 11.8443 9.36561 11.6077 9.65675 11.6077H11.8808V8.93651C11.8808 5.83661 13.774 4.14869 16.5393 4.14869H18.8085C19.0988 4.14869 19.3342 4.38406 19.3342 4.67444V7.00547C19.3342 7.29573 19.099 7.53104 18.8088 7.53122L17.4162 7.53187C15.9124 7.53187 15.6212 8.24648 15.6212 9.29522V11.6078H18.9257C19.2405 11.6078 19.4848 11.8827 19.4477 12.1954L19.1201 14.9599C19.0887 15.2244 18.8644 15.4237 18.598 15.4237H15.6359L15.6212 24H20.766C22.5521 24 24 22.5521 24 20.766V3.23405C23.9999 1.44791 22.552 0 20.7659 0Z" fill="white"/>
        </svg>
        <p class="text-white">Sign in with Facebook</p>
        <div class="w-6"></div>
      </g-link>
      <div class="flex items-center my-2">
        <div class="h-1 bg-d4gray w-full"></div>
        <p class="px-4 text-d4slate-light">OR</p>
        <div class="h-1 bg-d4gray w-full"></div>
      </div>
      <a href="#" @click="loginScreen = !loginScreen" class="pointer bg-d4secondary flex justify-around p-4 rounded-xl">
        <p class="text-white">Sign up with e-mail</p>
      </a>
    </div>
    <div v-else class="rounded-xl p-4">
      <p class="uppercase text-center mb-6 text-d4slate-dark mt-4 font-semibold">Sign up</p>
      <form action="">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input v-model="user.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="john.doe@mail.com">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="user.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********">
          <p class="hidden text-red-500 italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between mb-4">
          <p class="text-d4slate-light">Create new account</p>
          <input type="checkbox" class="slide-toggle" name="checkbox" id="signUp" v-model="signUp">
          <label for="signUp" class="switch"></label>
        </div>
        <div v-if="signUp">
          <div class="flex">
            <div class="mb-4 mr-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
                First name
              </label>
              <input v-model="user.firstname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="firstname" placeholder="John">
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                Last name
              </label>
              <input v-model="user.lastname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="lastname" placeholder="Doe">
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Repeat password
            </label>
            <input v-model="user.repeatPassword" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password-repeat" type="password" placeholder="**********">
            <p class="hidden text-red-500 italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between mb-4 border-t border-gray-300 pt-4">
            <p class="text-d4slate-light">I hereby agree to the <a>terms and conditions</a> and <a>privacy policy</a></p>
            <input type="checkbox" class="slide-toggle" name="checkbox" id="agree" v-model="agree">
            <label for="agree" class="switch"></label>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            {{signUp ? 'Sign Up' : 'Sign In'}}
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      <a href="#" @click="loginScreen = !loginScreen" class="text-center text-sm pointer text-gray-600 mt-4 block">Go back</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginScreen: true,
      signUp: false,
      agree: false,
      user: {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        repeatPassword: ''
      }
    }
  },
}
</script>

<style lang="scss">
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    @apply bg-gray-400 flex-shrink-0;
    border-radius: 30px;
  }
  .switch::after {
    content: '';
    position: absolute;
    height: 26px;
    width: 28px;
    border-radius: 50%;
    background-color: white;
    top: 2px;
    left: 2px;
    transition: all .3s;
  }
  .slide-toggle:checked + .switch::after {
    left: 30px;
  }
  .slide-toggle:checked + .switch {
    // background-color: #7983ff;
    @apply bg-d4secondary flex-shrink-0;
  }
  .slide-toggle {
    display: none;
  }
</style>