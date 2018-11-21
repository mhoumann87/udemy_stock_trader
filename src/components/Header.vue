<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">The Stock Trader</router-link>
      </div>
        <ul class="nav navbar-nav navbar-right">
          <router-link to="/" activeClass="active" tag="li" exact><a>Home</a></router-link>
          <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
          <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
        </ul>
      </div>
  </nav>
</template>
