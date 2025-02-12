<template>
  <div class="blog-info-widget">
    <h2>Über CBD-Planet</h2>
    <p>
      CBD, CBC, THC - die Verwechslungsgefahr ist Groß, Vorurteile gibt es
      viele. Um mit diesen Vorurteilen aufzuräumen, berichten wir regelmäßig
      über belastbare, wissenschaftliche Studien rund um das Thema CBD und
      teilen persönliche Erfahrungen zu CBD-haltigen Produkten
    </p>
  </div>
</template>

<script>
export default {
  name: "Blog-Info-Widget",
};
</script>

<style lang="scss" scoped>
@import "@/variables/Variables.scss";

.blog-info-widget {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;

  & h2 {
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: solid 1px #ddd;
  }

  & p {
    // margin-bottom: 8px;
    // line-height: 30px;
  }
}
</style>
