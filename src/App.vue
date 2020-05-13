<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Todo List</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>


<script>


export default {
  name: 'Home',
};
</script>

<style>
@import "./assets/styles/defaultStyle.css";
</style>
