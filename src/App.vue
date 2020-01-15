<template>
    <v-app>
        <navigation></navigation>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    <v-footer absolute dark>
        Footer
    </v-footer>
    </v-app>
</template>

<script>
import Navigation from '@/components/layout/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
  },
  data: () => ({
  }),
  created () {
  }
}
</script>
