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
  data() {
    return {
      trunctatedDesc: "",
      cardStatus: ""
    }
  },

  mounted() {
    console.log(`${this.title} init`)
    this.trunctatedDesc = (this.desc.length > 64 ? this.desc.substring(0,64) + "..." : this.desc)

    if (this.type) {
      this.cardStatus = "has-background-"+this.type;
    } else {
      this.cardStatus = "";
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