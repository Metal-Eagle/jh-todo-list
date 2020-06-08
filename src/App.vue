<template>

  <div
    id="app"
    class="container"
  >
    <nav
      class="navbar navbar-expand-lg navbar-light "
      style="background-color: #e3f2fd;"
    >
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active-class">
            <router-link
              to="/"
              class="nav-link"
            >Todo List</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-link"
            >About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view class="jumbotron" />
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
