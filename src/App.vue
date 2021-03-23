<template>
  <div id="app">
    <div class="header">
        <div class="menu">
          <router-link to="/">Home</router-link>
          <router-link to="/Second">Second</router-link>
        </div>

    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style >
  .menu {
    width: 50%;
    margin: 10px auto 0 auto;
    display: flex;
    justify-content: space-around;

  }

  a {
    width: 50%;
    height: 50px;
    text-decoration: none;
    background-color: #14562f;
    color: aliceblue;
    border-radius: 10px 10px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .router-link-exact-active {
    background-color: #021a0e;
  }
</style>
