<template>
  <div class="card" style="min-height: 50vh;">
      <div class="card-content">
        <ServiceLineStatus name="SLMIS" status="Online"/>
        <ServiceLineStatus name="eLearn" status="Online"/>
        <ServiceLineStatus name="XU Website" status="Degraded"/>
        <div class="divider has-text-white">
          NOTIFICATIONS
        </div>
        <div class="container">
          <div class="card">
            <div class="card-content">
              <div class="media-content">
                <p class="title is-6 has-text-white">Service Interruption</p>
                <p class="subtitle is-6 has-text-white">XU eLearn will have a service interruption by...</p>
              </div>
            </div>
          </div>
          <br>
          <div class="card has-background-danger">
            <div class="card-content">
              <div class="media-content">
                <p class="title is-6 has-text-white">Crash Detected</p>
                <p class="subtitle is-6 has-text-white">Fuck</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {
    ServiceLineStatus: () => import('@/components/ServiceLineStatus.vue')
  }
}
</script>

<style>
</style>