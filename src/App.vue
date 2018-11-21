<template>
  <div>
    <app-header></app-header>
  <div class="container">
  <div class="row">
    <div class="col-xs-12">
      <router-view></router-view>
    </div>
  </div>
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
