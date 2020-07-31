<template>
  <div>
    <transition name="slow-reveal">
      <section class="hero is-fullheight" v-if="show">
        <div class="hero-body">
          <div class="container">
            <h1 style="font-size: 4em;" class="title has-text-white">
              Welcome to the all-new eLearn.
            </h1>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data() {
    return {
      show: false,
    }
  },
  components: {
  },
  mounted() {
    this.show = true;
  }
}
</script>

<style>

</style>