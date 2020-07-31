<template>
  <div>
    <Navbar/>
  </div>
</template>

<script>
export default {
  name: "User",
  components: {
    Navbar: () => import("@/components/Navbar.vue"),
  }
}
</script>

<style>

</style>