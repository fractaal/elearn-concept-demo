<template>
  <section class="hero" :class="heroClass">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{title}}</h1>
        <p class="subtitle" v-if="subtitle">{{subtitle}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    title: String,
    subtitle: String,
    type: String,
  },
  data() {
    return {
      heroClass: ""
    }
  },
  mounted() {
    this.heroClass = `is-${this.type}`
  }
}
</script>

<style>

</style>