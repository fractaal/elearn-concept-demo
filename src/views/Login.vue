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