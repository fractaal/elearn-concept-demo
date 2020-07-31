<template>
  <div class="card clickable" @click="displayDetails" style="margin-bottom: 10px;" :class="cardStatus">
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
    type: String,
  },
  computed: {
    trunctatedDesc() {
      return (this.desc.length > 64 ? this.desc.substring(0,64) + "..." : this.desc)
    },
    cardStatus() {
      if (this.type) {
        return "has-background-"+this.type;
      } else {
        return "";
      }
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