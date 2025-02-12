<template>
  <article class="blog-artikel-prev">
    <img :src="require(`@/assets/${this.Artikel.ArtikelImage}`)" />
    <h2>{{ this.Artikel.ArtikelTitel }}</h2>
    <p>{{ this.Artikel.ArtikelPrev }}</p>
    <router-link to="/#"> Weiterlesen </router-link>
  </article>
</template>

<script>
export default {
  name: "Blog-Artikel-Prev",
  data: function () {
    return {
      Artikel: {
        ArtikelImage: "blog-image-1.jpg",
        ArtikelTitel: "Cannabiniod-Rezeptoren: bekannte Wirk von CBD",
        ArtikelPrev:
          "In unserem ersten Artikel wurde bereits erklärt, dass Cannabidiol (CBD) mit den körpereigenen Cannabiniod-Rezeptoren interagiert. Diese Cannabiniod-Rezeptoren finden sich vielerorts im menschlichen Körper, weshalb das CBD seine Wirkung gleich an mehreren Stellen entfalten kann ...",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables/Variables.scss";

.blog-artikel-prev {
  margin: 0;
  padding: 0 0 50px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);

  & img {
    width: 100%;
    height: 320px;
    border-bottom: 5px solid #16a05d;
  }
  & h2 {
    padding: 50px 40px 20px 40px;
    text-align: left;
    text-decoration: none;
  }

  & p {
    margin: 0 0 30px 0;
    padding: 0px 40px 0 40px;
    text-align: justify;
  }

  & a {
    margin: 0;
    padding: 0px 40px 0 40px;
    text-decoration: none;
    color: #16a05d;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }
}
</style>
