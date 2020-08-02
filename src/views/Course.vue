<template>
  <div>
    <br>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-white">
            {{}}
          </h1>
          <p class="subtitle has-text-white">
            Course ID {{$route.params.id}}
          </p>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-white">

          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Course",
  components: {
    //Navbar: () => import("@/components/Navbar.vue")
  },
  mounted() {

  },
}
</script>

<style>

</style>