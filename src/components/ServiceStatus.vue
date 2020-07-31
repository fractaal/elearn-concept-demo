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
          <b-loading :active="areNotificationsLoading"></b-loading>
          <div v-for="notif in notifs" :key="notif.index">
            <Notification :title=notif.title :desc=notif.desc :type=notif.type></Notification>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import notifs from "@/static_notifications"

export default {
  components: {
    ServiceLineStatus: () => import('@/components/ServiceLineStatus.vue'),
    Notification: () => import('@/components/Notification.vue'),
  },
  data() {
    return {
      notifs: [],
      areNotificationsLoading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.notifs = notifs;
      this.areNotificationsLoading = false;
    }, 1500)
  }
}
</script>

<style>
</style>