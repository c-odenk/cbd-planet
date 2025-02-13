<template>
  <router-view />
</template>

<style lang="scss">
@import "@/variables/variables.scss";
#app {
}

body {
  margin: 0;
  padding: 0;
}

h2 {
  line-height: $line-height-p-lg;
  letter-spacing: $letter-spacing;
}

p,
b,
a {
  font-size: $font-size-p-lg;
  line-height: $line-height-p-lg;
  letter-spacing: $letter-spacing;
  color: $color-text-dark;
  text-decoration: none;
  margin: 0;
  padding: 0;

  // color: $font-color;

  @include respond(tablet) {
    font-size: $font-size-p-sm;
    line-height: $line-height-p-sm;
  }
}
</style>
