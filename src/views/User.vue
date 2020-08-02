<template>
  <div>
    <transition-group name="transition" mode="out-in">
      <div v-for="alert in alerts" :key="alert.ID">
        <Hero :title="alert.title" :subtitle="alert.desc" :type="alert.type"/>
      </div>
    </transition-group>
    <br>
    <section class="hero">
      <section class="hero-body">
        <div class="container">
          <h1 class="title has-text-white">
            Your courses
          </h1>
          <Courses :courses="courses"/>
        </div>
      </section>
    </section>
    <br>
  </div>
</template>

<script>
import get from "@/spoof-api.js"

export default {
  name: "User",
  components: {
    Hero: () => import("@/components/Hero.vue"),
    Courses: () => import("@/components/Courses.vue"),
  },
  data() {
    return {
      alerts: [],
      courses: [],
    }
  },
  mounted() {
    get("User").then(Data => { // Generate alerts
      this.alerts.push({
        title: `You have ${Data.Assignments.length} ${(Data.Assignments.length > 1 ? "assignments" : "assignment")} due`,
        desc: `From ${Data.Assignments[0].Course}: ${Data.Assignments[0].Name}`,
        type: "warning",
        ID: 1,
      })

      this.courses = Data.Courses
    })
  }
}
</script>

<style>

</style>