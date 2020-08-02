<template>
    <div class="level" style="margin: 2px;">
        <span class="level-left">
        <p class="subtitle has-text-white">{{name}}</p>
        </span>
        <span class="level-right">
        <p :class="classStatus">{{statusDelayed}}</p>
        <PollLight :status="statusDelayed"/>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        status: String,
    },
    components: {
        PollLight: () => import("@/components/PollLight.vue"),
    },
    data() {
        return {
            statusDelayed: "unknown",
        }
    },
    computed: {
        classStatus() {
            if (this.statusDelayed == "Online") {
                return "has-text-success"
            } else if (this.statusDelayed == "Degraded") {
                return "has-text-warning"
            } else if (this.statusDelayed == "Offline") {
                return "has-text-danger"
            }
            return "Unknown"
        }
    },
    mounted() {
        setTimeout(() => {
            let Num = Math.floor(Math.random() * 3) + 1; 
            switch (Num) {
                case 1:
                    this.statusDelayed = "Online";
                    break;
                case 2:
                    this.statusDelayed = "Degraded";
                    break;
                case 3:
                    this.statusDelayed = "Offline";
                    break; 
            }
        }, Math.floor(Math.random() * 2500) + 2000)
    }
}
</script>

<style>

</style>