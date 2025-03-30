<template>
  <div class="view-blog">
    <Header />
    <Wallpaper />
    <div class="container-xl">
      <div class="view-blog_row row">
        <main class="col-md-8">
          <BlogPostPrev
            v-for="(post, index) in BlogPosts"
            :key="index"
            :post="post"
          />
        </main>
        <aside class="col-md-4">
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
import BlogPostPrev from "@/components/blog/Blog-Post-Prev.vue";
import BlogTopArtikelWidget from "@/components/blog/Blog-Top-Artikel-Widget.vue";
import BlogInfoWidget from "@/components/blog/Blog-Info-Widget.vue";
import Footer from "@/components/footer/Footer.vue";

import { BlogPosts } from "@/assets/BlogPosts.js";

export default {
  name: "View-Blog",
  components: {
    Header,
    Wallpaper,
    BlogPostPrev,
    BlogTopArtikelWidget,
    BlogInfoWidget,
    Footer,
  },
  data() {
    return {
      BlogPosts,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../variables/Variables.scss" as *;

.view-blog {
  &_row {
    margin: 75px 0 25px 0;

    @include respond(tablet) {
      margin: 30px 0 0 0;
    }

    @include respond(phone) {
      // margin: 0 0 30px 0;
    }
  }
}
</style>
