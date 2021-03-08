<template>
  <footer class="footer">
    <div>
      <span class="copyright"
        >Copyright © 2021 ShunTANAKA All Rights Reserved.</span
      >
    </div>
  </footer>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .copyright {
    font-size: 0.8rem;
    color: gray;
  }
}
</style>
