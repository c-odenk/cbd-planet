<template>
  <div class="blog-top-artikel-widget">
    <h2>Top Beiträge</h2>
    <ul>
      <li><router-link to="/#"> #1: Beitrag 1 </router-link></li>
      <li><router-link to="/#"> #2: Beitrag 2 </router-link></li>
      <li><router-link to="/#"> #3: Beitrag 3 </router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Blog-Top-Artikel-Widget",
};
</script>

<style lang="scss" scoped>
@import "@/variables/Variables.scss";

.blog-top-artikel-widget {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;

  & h2 {
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: solid 1px #ddd;
  }

  & ul {
    list-style: none;
    margin: 0px;
    padding: 0px;

    & li {
      padding-bottom: 5px;

      & a {
        text-decoration: none;
        color: #000;
        font-weight: 400;

        &:hover {
        }
      }
    }
  }
}
</style>
