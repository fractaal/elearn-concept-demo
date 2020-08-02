<template>
  <section class="hero">
    <div class="hero-body">
      <b-navbar :transparent="true" :fixed-top="true" type="is-black" :is-active.sync="navbarIsOpen">
        <template slot="brand">
          <b-navbar-item>
            <figure class="image is-32x32 is-square">
              <img style="min-height: 32px;" src="@/assets/Cropped.jpg" class="is-rounded" alt=""/>
            </figure>
          </b-navbar-item>
        </template>
        <template slot="start">
          <b-navbar-item @click="() => {this.$router.push('/user')}">
            <div class="flex">
              <font-awesome-icon size="lg" icon="school"></font-awesome-icon>
              <p style="margin-left: 10px;">{{labels.Home}}</p>
            </div>
          </b-navbar-item>
          <b-navbar-item>
            <div class="flex">
              <font-awesome-icon size="lg" icon="book-open"></font-awesome-icon>
              <p style="margin-left: 10px;">{{labels.Library}}</p>
            </div>
          </b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item>
            <b-dropdown aria-role="list">
              <div slot="trigger" class="flex">
                <font-awesome-icon size="lg" icon="comments"></font-awesome-icon>
                <p style="margin-left: 10px;">{{labels.Messages}}</p>
              </div>

              <b-dropdown-item aria-role="listitem">
                Wow
              </b-dropdown-item>
            </b-dropdown>
          </b-navbar-item>
          <b-navbar-item>
            <div class="flex">
              <font-awesome-icon size="lg" icon="bell"></font-awesome-icon>
              <p style="margin-left: 10px;">{{labels.Notifications}}</p>
            </div>
          </b-navbar-item>
          <b-navbar-item @click="$router.push('/settings')">
            <div class="flex">
              <font-awesome-icon size="lg" icon="cog"></font-awesome-icon>
              <p style="margin-left: 10px;">{{labels.Settings}}</p>
            </div>
          </b-navbar-item>
          <b-navbar-item @click="logout">
            <div class="flex">
              <font-awesome-icon size="lg" icon="sign-out-alt"></font-awesome-icon>
              <p style="margin-left: 10px;">{{labels.Logout}}</p>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
  </section>
</template>

<script>
import bus from '@/main'

export default {
  name: "Navbar", 
  data() {
    return {
      navbarIsOpen: false,
      alwaysShowLabels: false,
      bus,
    }
  },

  mounted() {
    bus.$on("alwaysShowLabels", (setting) => {
      this.alwaysShowLabels = setting;
    })
  },

  computed: {
    labels() {
      if (this.navbarIsOpen || (this.alwaysShowLabels)) {
        return {
          Home: "Home",
          Library: "Library",
          Messages: "Messages",
          Notifications: "Notifications",
          Logout: "Logout",
          Settings: "Settings"
        }
      } else {
        return {
          Home: "",
          Library: "",
          Messages: "",
          Notifications: "",
          Logout: ""
        }
      }
    }
  },

  methods: {
    logout() {
      this.$buefy.dialog.confirm({
        message: "Are you sure you want to log out?",
        onConfirm: () => {bus.$emit("logout")}
      })
    }
  }
}

</script>

<style>
nav.navbar.is-fixed-top {
  background: rgba(0,0,0,0.15); 
  backdrop-filter: blur(15px);
  padding-left: calc(1.33em + 24px);
  padding-right: calc(1.33em + 24px);
  padding-top: 10px;
  padding-bottom: 10px;
}
body {
  padding-top: 0px !important;
}
.flex {
  display: flex; 
}
</style>