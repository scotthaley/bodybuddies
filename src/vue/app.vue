<template>
    <div>
        <topbar></topbar>
        <router-view></router-view>
    </div>
</template>

<script>
import topbar from 'vue/topbar.vue'

export default {
    name: "VueApp",
    components: { topbar },
    data() {
        return {
            message: 'Hello Vue.js!'
        }
    }
}
</script>
