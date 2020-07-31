<template>
    <div class="level">
        <span class="level-left">
        <p class="subtitle has-text-white">{{name}}</p>
        </span>
        <span class="level-right">
        <b-icon icon="check"></b-icon>
        <p :class="classStatus">{{status}}</p>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        status: String
    },
    computed: {
        classStatus() {
            if (this.status == "Online") {
                return "has-text-success"
            } else if (this.status == "Degraded") {
                return "has-text-warning"
            } else if (this.status == "Offline") {
                return "has-text-danger"
            }
            return "?"
        }
    }
}
</script>

<style>

</style>