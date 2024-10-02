<template>
  <div id="app">
    <router-view />
    <!-- This will display the current route component -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 1rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>
