<template>
  <header>
    <nav>
      <span class="brand"><NuxtLink to="/">Hacomono Library</NuxtLink></span>
      <ul>
        <li><NuxtLink to="/">ダッシュボード</NuxtLink></li>
        <li><NuxtLink to="/books">本一覧</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  a {
    color: white;
  }
}
nav {
  padding: 0 20px;
  height: 60px;
  display: flex;
  background-color: rgb(27, 27, 27);
  align-items: center;
  justify-content: space-between;
  .brand {
    font-weight: bold;
  }
  ul {
    display: flex;
    li {
      padding: 0 10px;
    }
  }
}
</style>
