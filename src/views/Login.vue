<template>
  <div>
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
    <section class="section">
      <br>
      <div class="columns is-centered">
        <div class="column"> </div>
        <div class="column is-one-half">
          <div class="container">
            <LoginForm/>
          </div>
        </div>
        <div class="column is-one-fifth">
          <div class="container">
            <ServiceStatus/>
          </div>
        </div>
        <div class="column"> </div>
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
  }
}
</script>

<style>

</style>