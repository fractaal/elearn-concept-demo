<template>
  <p class="blink" :class="statusClass">
    ⬤
  </p>
</template>

<script>
export default {
  name: "PollLight",
  props: {
    status: String,
  },
  computed: {
    statusClass() {
      if (this.status == "Online") {
        return "online";
      } else if (this.status == "Degraded") {
        return "degraded";
      } else if (this.status == "Offline") {
        return "offline";
      }
      return "unknown"
    }
  },
}
</script>

<style>
.unknown {
  animation: blink 1s linear 0s infinite;
  color: lightskyblue;
}

.online {
  animation: blink 1s linear 0s infinite;
  color: lightgreen;
}

.degraded {
  animation: blink 0.75s linear 0s infinite;
  color: yellow;
}

.offline {
  animation: blink 0.5s linear 0s infinite;
  color: lightcoral;
}

.blink {
  margin-left: 5px;
  margin-right: 5px;
}

@keyframes blink {
  0% {
    filter: brightness(1);
  }
  100% {
    filter: brightness(0.3);
  }
}
</style>