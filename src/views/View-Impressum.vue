<template>
  <div class="view-impressum">
    <Header />
    <Wallpaper />
    <Impressum />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Wallpaper from "@/components/wallpaper/Wallpaper.vue";
import Impressum from "@/components/impressum/Impressum.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "View-Impressum",
  components: {
    Header,
    Wallpaper,
    Impressum,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables/Variables.scss";

.view-impressum {
}
</style>
