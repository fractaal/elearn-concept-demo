<template>
  <div class="card" style="min-height: 50vh;">
      <div class="card-content">
        <ServiceLineStatus name="SLMIS" status="Online"/>
        <ServiceLineStatus name="eLearn" status="Online"/>
        <ServiceLineStatus name="XU Website" status="Degraded"/>
        <div class="divider has-text-white">
          NOTIFICATIONS
        </div>
        <div class="container" style="max-height: 285px; overflow-y: auto;">
          <b-loading :active="notifs.length === 0"></b-loading>
          <div v-for="notif in notifs" :key="notif.index">
            <Notification :title=notif.title :desc=notif.desc :type=notif.type></Notification>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import get from "@/spoof-api.js"

export default {
  components: {
    ServiceLineStatus: () => import('@/components/ServiceLineStatus.vue'),
    Notification: () => import('@/components/Notification.vue'),
  },
  data() {
    return {
      notifs: [],
    }
  },
  mounted() {
    get("Notifications").then((notifs) => {
      this.notifs = notifs;
    })
  }
}
</script>

<style>
</style>