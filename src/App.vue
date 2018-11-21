<template>
<div>
  <app-header></app-header>
<div class="container">
  <router-view></router-view>
 
  <h1>The Stock Trader</h1>
</div>
</div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    appHeader: Header
  }
};
</script>

<style>
</style>
