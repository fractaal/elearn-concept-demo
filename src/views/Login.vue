<template>
  <div>
    <div style="min-height: 95vh;">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title has-text-white">
              Xavier University eLearn
            </h1>
            <p class="subtitle has-text-white">Hello!</p>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-fifth"></div>
          <div class="column">
            <LoginForm/>
          </div>
          <div class="column">
            <ServiceStatus/>
          </div>
          <div class="column is-one-fifth"></div>
        </div>
      </div>
    </div>
    <section class="hero is-warning is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">A bit lost?</h1>
          <p class="subtitle">We got you.</p>
          <b-button type="is-primary" size="is-medium" @click="showHelp">Help</b-button>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import ServiceStatus from '@/components/ServiceStatus.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
    ServiceStatus,
  },
  methods: {
    showHelp() {
      this.$buefy.dialog.alert({
        title: "Is this your first time here?",
        message: `
Your username is your University ID number/email address and your default password is a combination of your Lastname, in capital letters, and the last four (4) digits of your University ID number.
<br><br>
Example using University ID:
username: 2013001934
password: LEE1934
<br><br>
Example using University email:
username: 2013001934@my.xu.edu.ph
password: LEE1934
<br><br>

Access XU eLearn for Graduate degree programs:
elearn-professionals.xu.edu.ph.`
      })
    }
  }
}
</script>

<style>

</style>