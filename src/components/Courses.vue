<template>
  <div>
    <div class="columns is-multiline">
      <content-loader primaryColor="#000" :opacity=0.15 :speed=.5 :height=75 v-if="courses.length === 0" class="column is-6">
      </content-loader>
      <content-loader primaryColor="#000" :opacity=0.15 :speed=.5 :height=75 v-if="courses.length === 0" class="column is-6">
      </content-loader>
      <content-loader primaryColor="#000" :opacity=0.15 :speed=.5 :height=75 v-if="courses.length === 0" class="column is-6">
      </content-loader>
      <content-loader primaryColor="#000" :opacity=0.15 :speed=.5 :height=75 v-if="courses.length === 0" class="column is-6">
      </content-loader>
      <div class="column is-6" v-for="course in courses" :key="course.ID">
          <div class="card has-text-white clickable" @click="() => {$router.push(`/course/${course.ID}`)}">

            <div class="card-content">
              <p class="title is-size-4 has-text-white">{{course.Name}}</p>
              <p class="subtitle is-size-6 has-text-white">{{course.Professor}}</p>
              <p class="subtitle is-size-6 has-text-white">{{course.Desc}}</p>
            </div>
            
          </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Courses",
  props: {
    courses: Array,
  },
  data() {
    return {}
  },
  computed: {
    courseGroups() {
      let j = this.courses.length
      let returnable = []
      for (let i = 0; i<j; i+=2) {
        let temp = this.courses.slice(i, i+2);
        returnable.push(temp);
      }
      return returnable;
    }
  }
}
</script>

<style>

</style>