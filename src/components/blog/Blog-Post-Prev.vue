<template>
  <article class="blog-post-prev">
    <img :src="require(`@/assets/${post.Titelbild}`)" alt="Blog Post Image" />
    <h2>{{ post.Titel }}</h2>
    <p>{{ post.Inhalt }}</p>
    <router-link to="/blogpost"> Weiterlesen </router-link>
  </article>
</template>

<script>
export default {
  name: "Blog-Post-Prev",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../variables/Variables.scss" as *;

.blog-post-prev {
  margin: 0 0 50px 0;
  padding: 0 0 50px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);

  @include respond(laptop) {
  }

  @include respond(tablet) {
    margin: 0 0 30px 0;
    padding: 0 0 30px 0;
  }

  @include respond(phone) {
    margin: 0 0 30px 0;
  }

  & img {
    width: 100%;
    height: 350px;
    border-bottom: 5px solid #16a05d;

    @include respond(tablet) {
      height: auto;
    }

    @include respond(phone) {
    }
  }

  & h2 {
    padding: 50px 40px 30px 40px;
    text-align: left;
    text-decoration: none;

    @include respond(tablet) {
      padding: 20px;
    }

    @include respond(phone) {
      padding: 20px;
    }
  }

  & p {
    margin: 0 0 40px 0;
    padding: 0px 40px 0 40px;
    text-align: justify;

    @include respond(tablet) {
      margin: 0 0 20px 0;
      padding: 0 20px;
    }
  }

  & a {
    margin: 0;
    padding: 0px 40px;
    text-decoration: none;
    color: #16a05d;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;

    @include respond(tablet) {
      padding: 0 20px;
    }
  }
}
</style>
