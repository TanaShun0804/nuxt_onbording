<template>
  <div class="layout-wrapper">
    <Header />
    <div class="layout-content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: rgb(243, 243, 243);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

a {
  color: black;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.layout-wrapper {
  position: relative;
  min-height: 100vh;
}

.layout-content {
  padding-top: 60px;
  padding-bottom: 30px;
}
</style>
