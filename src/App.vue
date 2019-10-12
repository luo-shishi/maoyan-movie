<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
*{
  position:relative;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
  box-sizing: border-box;
}
</style>
