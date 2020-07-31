<template>
  <header class="section">
    <div class="container">
      <b-navbar transparent=true>
        <template slot="brand">
          <b-navbar-item>
            <figure class="image is-32x32 is-square">
              <img style="min-height: 32px;" src="@/assets/Cropped.jpg" class="is-rounded" alt=""/>
            </figure>
          </b-navbar-item>
        </template>
        <template slot="start">
          <b-navbar-item class="has-text-white">
            Courses
          </b-navbar-item>
          <b-navbar-item class="has-text-white">
            Library
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar", 
}
</script>

<style>

</style>