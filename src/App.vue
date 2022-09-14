<template>
  <v-app>
    <v-app-bar
      app
      color="#0073b1"
      dark
      dense
    >
      Vue App Template
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import state from '@/state';

export default {
  name: 'App',
  data () {
    return { state };
  },
};
</script>
