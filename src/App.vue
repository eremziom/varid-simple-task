<template>
  <div>
    <h2 class="mb-3">Varid Simple Task</h2>
    <nav class="nav">
      <router-link to="/add-currency">Add currency</router-link>
      <router-link to="/currency-table">Currency table</router-link>
      <router-link to="/exchange-converter">Exchange converter</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav{
  display: flex;
  justify-content: center;
  gap: 20px;
}
.nav a{
  text-decoration: none;
}
</style>
