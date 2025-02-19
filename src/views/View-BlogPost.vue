<template>
  <div class="view-blogpost">
    <Header />
    <h1>TEST</h1>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";

import Footer from "@/components/footer/Footer.vue";

export default {
  name: "View-BlogPost",
  components: {
    Header,

    Footer,
  },
  data() {
    return {
      // BlogPosts,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables/Variables.scss";

.view-blogpost {
}
</style>
