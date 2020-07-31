<template>
  <div id="app" :class="appClass">
    <b-loading is-full-page=true :active="isLoading"></b-loading>
    <section class="hero is-fullheight">
        <transition name="transition" mode="out-in">
          <router-view style="min-height: 100vh;"/>
        </transition>
    </section>
  </div>
</template>

<script>
import bus from "@/main"
export default {
  name: "App",
  mounted() {

  },

  data() {
    return {
      isLoading: false,
      appClass: "login"
    }
  },

  created() {
    bus.$on("login", () => {
      this.isLoading = true;
      setTimeout(() => {
        this.$router.push("/main")
        this.isLoading = false;
        this.appClass = "main";
      }, 1250)
    })
  },
}
</script>

<style>
* {
  font-family: Manrope, Arial, Helvetica, sans-serif !important;
}

@media (min-width: 1px) {
  .login {
    background:#296EB4;
  }
}

@media (min-width: 1000px) {
  .login {
    background-image: url("assets/gradient.png");
  }
}

.main {
  background: rgba(12,12,12,1);
}

#app {
  min-width: 100vw;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card {
  border-radius: 10px;
  background: rgba(56, 41, 41, 0.15) !important;
  backdrop-filter: blur(25px) brightness(0.95);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1) !important;
}

.fullheight {
  min-height: 50vh !important;
}

.transition-enter-active, .transition-leave-active {
  transition: all .2s cubic-bezier(0.86, 0, 0.07, 1);
}
.transition-enter, .transition-leave-to /* .transition-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(50px);
}

.slow-reveal-enter-active, .slow-reveal-leave-active {
  transition: all 3s cubic-bezier(0.86, 0, 0.07, 1);
}
.slow-reveal-enter, .slow-reveal-leave-to /* .transition-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(50px);
}

@import url('https://fonts.googleapis.com/css?family=Manrope&display=swap');

</style>
