<template>
  <div class="view-blog">
    <Header />
    <Wallpaper />
    <div class="container">
      <div class="row">
        <main class="col-md-8">TEST</main>
        <aside class="col-md-3">
          <BlogInfoWidget />
          <BlogTopArtikelWidget />
        </aside>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Wallpaper from "@/components/wallpaper/Wallpaper.vue";

import BlogTopArtikelWidget from "@/components/blog/Blog-Top-Artikel-Widget.vue";
import BlogInfoWidget from "@/components/blog/Blog-Info-Widget.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "View-Blog",
  components: {
    Header,
    Wallpaper,
    BlogTopArtikelWidget,
    BlogInfoWidget,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables/Variables.scss";

.view-blog {
}
</style>
