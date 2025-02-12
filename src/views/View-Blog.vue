<template>
  <div class="view-blog">
    <Header />
    <Wallpaper />
    <div class="container">
      <div class="view-blog_row row">
        <main class="col-md-8">
          <BlogArtikelPrev />
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
import BlogArtikelPrev from "@/components/blog/Blog-Artikel-Prev.vue";
import BlogTopArtikelWidget from "@/components/blog/Blog-Top-Artikel-Widget.vue";
import BlogInfoWidget from "@/components/blog/Blog-Info-Widget.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "View-Blog",
  components: {
    Header,
    Wallpaper,
    BlogArtikelPrev,
    BlogTopArtikelWidget,
    BlogInfoWidget,
    Footer,
  },
  data: function () {
    return {
      BlogArtikel: [
        {
          ArtikelImage: "blog-image-1.jpg",
          ArtikelTitel: "Cannabiniod-Rezeptoren: bekannte Wirk von CBD",
          ArtikelPrev:
            "In unserem ersten Artikel wurde bereits erklärt, dass Cannabidiol (CBD) mit den körpereigenen Cannabiniod-Rezeptoren interagiert. Diese Cannabiniod-Rezeptoren finden sich vielerorts im menschlichen Körper, weshalb das CBD seine Wirkung gleich an mehreren Stellen entfalten kann ...",
        },
        {
          ArtikelImage: "blog-image-2.jpeg",
          ArtikelTitel: "Cannabiniod-Rezeptoren: bekannte Wirk von CBD",
          ArtikelPrev:
            "Cannabidiol – kurz CBD – ist einer von mehr als 500 Bestandteilen der Hanfpflanze und gehört zu Gruppe der Phytocannabinoiden. Zu dieser Gruppe wirkungsvoller Pflanzenbestandteile zählen neben CBD noch CBN (Cannabinole), CBG (Cannabigerole) und das als Haschisch oder Marihuana bekannte THC (Tetrahydrocannabinol). THC entfaltet ...",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables/Variables.scss";

.view-blog {
  &_row {
    margin: 75px 0;

    @include respond(phone) {
      margin: 0 0 30px 0;
    }
  }
}
</style>
