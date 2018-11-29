<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">
          <i class="fas fa-chart-line"></i>&nbsp;The Stock Trader
        </router-link>
      </div>
      <ul class="nav navbar-nav">
        <router-link to="/" activeClass="active" tag="li" exact>
          <a>
            <i class="fas fa-home"></i>&nbsp;Home
          </a>
        </router-link>
        <router-link to="/portfolio" activeClass="active" tag="li">
          <a>
            <i class="fas fa-folder-open"></i>&nbsp;Portfolio
          </a>
        </router-link>
        <router-link to="/stocks" activeClass="active" tag="li">
          <a>
            <i class="fas fa-scroll"></i>&nbsp;Stocks
          </a>
        </router-link>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>

      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="#" @click="endDay">
            <i class="fas fa-clock"></i>&nbsp;End Day
          </a>
        </li>
        <li class="dropdown">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            Save / Load
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="#">
                <i class="fas fa-upload"></i>&nbsp;Save Data
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-download"></i>Load Data
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    }
  }
};
</script>
