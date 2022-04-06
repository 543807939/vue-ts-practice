<template>
  <p>
    <router-link to="/login">
      <template #default>
        <el-button type="primary">登录</el-button>
      </template>
    </router-link>
    <router-link to="/main">首页</router-link>
  </p>
  <el-input></el-input>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
