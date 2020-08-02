<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-white">
          Super secret settings menu
        </h1>
        <div v-for="(settingGroup, key) in settings" :key="key">
          <div class="divider">{{key}}</div>
          <div v-for="setting in settingGroup" :key="setting.name">
            <div class="field">
              <span v-if="setting.type === 'boolean'">
                <b-switch @change="() => {this.settingChanged(setting.name, )}">
                  {{setting.displayName}}
                </b-switch>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bus from "@/main"
import settingsTemplate from "@/settings.js"

export default {
  name: "Settings",
  data() {
    return {
      settings: {}
    }
  },

  mounted() {

  },

  methods: {
    settingChanged(setting, value) {
      bus.$emit(`settingChange:${setting.name}`, value)
    }
  }
}
</script>

<style>

</style>