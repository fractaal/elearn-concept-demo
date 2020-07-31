<template>
  <div class="card clickable" @click="displayDetails" style="margin-bottom: 10px;">
    <div class="card-content">
      <div class="media-content">
        <p class="title is-6 has-text-white">{{title}}</p>
        <p class="subtitle is-6 has-text-white">{{trunctatedDesc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    title: String,
    desc: String,
  },
  computed: {
    trunctatedDesc() {
      return (this.desc.length > 64 ? this.desc.substring(0,64) + "..." : this.desc)
    }
  },
  methods: {
    displayDetails() {
      this.$buefy.dialog.alert({
        title: this.title,
        message: this.desc,
        confirmText: "Okay",
      })
    }
  }
}
</script>

<style>

</style>