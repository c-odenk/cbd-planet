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

h3 {
  line-height: $line-height-p-lg;
  letter-spacing: $letter-spacing;
}

p,
b,
li,
a {
  margin: 0;
  padding: 0;
  font-size: $font-size-p-lg;
  line-height: $line-height-p-lg;
  letter-spacing: $letter-spacing;
  color: $color-text-dark;

  @include respond(tablet) {
    font-size: $font-size-p-md;
    line-height: $line-height-p-sm;
  }

  @include respond(phone) {
    font-size: $font-size-p-sm;
    line-height: $line-height-p-sm;
  }
}
</style>
