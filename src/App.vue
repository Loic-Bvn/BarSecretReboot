<template>
  <div id="app">
    <!-- <HomePage /> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import HomePage from './views/HomePage.vue';

  export default {
    name: 'App',
    components: {
      HomePage
    },
  };
</script>

<style>
/* Ton style ici */
</style>
