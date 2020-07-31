<template>
    <div class="card" style="min-height: 50vh;">
        <div class="card-content">

            <div style="display: flex; justify-content: center; padding: 10px;">
                <figure class="image">
                    <img style="width: 200px" src="@/assets/Cropped.jpg" class="is-rounded" alt="">
                </figure>
            </div>

            <div class="columns is-centered">
                <div class="column is-three-quarters">
                    <form action="javascript:void(0)">
                        <!--
                        <b-field class="has-text-white">
                            <b-input id="id" placeholder="University ID"></b-input>
                        </b-field>-->
                        <h1 class="title has-text-centered has-text-white">Ben Jude</h1>
                        <b-field class="has-text-white">
                            <b-input id="password" placeholder="Password" type="password"></b-input>
                        </b-field>
                        <br>
                        <div class="has-text-centered">
                            <b-button native-type="submit" type="is-white" outlined size="is-medium" rounded=true @click="login">Log in</b-button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bus from '@/main'
export default {
    methods: {
        login() {
            bus.$emit("login");
        },
    }
}
</script>