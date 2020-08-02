<template>
  <div id="app" :class="appClass">
    <transition name="fade" mode="out-in">
      <Navbar v-if="loggedIn"/>
    </transition>
    <b-loading :is-full-page="true" :active="isLoading"></b-loading>
    <section class="hero is-fullheight">
        <transition name="transition" mode="out-in">
          <router-view></router-view>
        </transition>
    </section>
  </div>
</template>

<script>
import bus from "@/main"
export default {
  name: "App",
  beforeMount() {
    // If user was logged in previously
    if (this.$route.name == "Login" && localStorage.getItem("loggedIn") === "true") {
      this.$router.push("/user")
    }

    // Login status
    if (localStorage.getItem("loggedIn") === "true") {
      this.loggedIn = true;
    } else if (localStorage.getItem("loggedIn") === "false") {
      this.loggedIn = false;
    }
  },

  components: {
    Navbar: () => import("@/components/Navbar.vue")
  },

  data() {
    return {
      isLoading: false,
      appClass: "login",
      loggedIn: false,
    }
  },

  methods: {
    setLoginStatus(status) {
      localStorage.setItem("loggedIn", status);
      this.loggedIn = status;
    }
  },

  created() {
    bus.$on("login", () => {
      this.isLoading = true;
      this.setLoginStatus(true);
      setTimeout(() => {
        
        if (localStorage.getItem("shownIntroScreen") === "true") {
          this.$router.push("/user")
        } else {
          this.$router.push("/main")
          localStorage.setItem("shownIntroScreen", true) 
        }

        this.isLoading = false;
      }, 1250)
    })

    bus.$on("logout", () => {
      this.isLoading = true;
      this.setLoginStatus(false);
      setTimeout(() => {
        
        this.$router.push("/")
        this.isLoading = false;
      }, 1250)
    })
  },

  watch: {
    $route: function(to) {
      // Checking if logged in

      if (to.name === "User" && localStorage.getItem("loggedIn") !== "true") {
        this.$router.push("/")
        this.$buefy.snackbar.open("Please log in first.");
      }

      if (to.name === "Login" && (localStorage.getItem("loggedIn") === "true")) {
        this.$router.push("/user");
        this.$buefy.snackbar.open("You're already logged in");
      }

      switch (to.name) {
        case "Main":
          this.appClass = "main";
          break;
        case "User":
          this.appClass = "login";
          break;
        case "Login":
          this.appClass = "login";
          break;
      }
    }
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$family-primary: Manrope;

@import "~bulma";
@import "~buefy/src/scss/buefy";

@media (min-width: 1px) {
  .login {
    background-image: url("assets/gradient-01.png");
    background-attachment: fixed;
  }
}

@media (min-width: 1000px) {
  .login {
    background-image: url("assets/gradient-01.png");
    background-attachment: fixed;
  }
}

.main {
  background: rgba(24,24,24,1);
}

#app {
  min-width: 100vw;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.clickable {
  cursor: pointer;
}

.Unknown {
  color: lightskyblue;
}

.card {
  border-radius: 10px;
  background: rgba(56, 41, 41, 0.15);
  backdrop-filter: blur(25px) brightness(0.95);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1) !important;
}

.transition-enter-active, .transition-leave-active {
  transition: all .1s cubic-bezier(0.95, 0.05, 0.795, 0.035);
}
.transition-enter, .transition-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.slow-reveal-enter-active, .slow-reveal-leave-active {
  transition: all 3s cubic-bezier(0.86, 0, 0.07, 1);
}
.slow-reveal-enter, .slow-reveal-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

@import url('https://fonts.googleapis.com/css?family=Manrope&display=swap');
</style>
