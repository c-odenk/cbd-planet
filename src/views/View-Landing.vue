<template>
  <div class="view-landing">
    <Header />
    <Wallpaper />
    <HeroSection />
    <SortimentSection />
    <WerbungSection />
    <KosmetikSection />
    <BeliebtSection />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Wallpaper from "@/components/wallpaper/Wallpaper.vue";
import HeroSection from "@/components/landing/Landing-Hero.vue";
import SortimentSection from "@/components/landing/Landing-Sortiment.vue";
import WerbungSection from "@/components/landing/Landing-Werbung.vue";
import KosmetikSection from "@/components/landing/Landing-Kosmetik.vue";
import BeliebtSection from "@/components/landing/Landing-Beliebt.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "View-Landing",
  components: {
    Header,
    Wallpaper,
    HeroSection,
    SortimentSection,
    WerbungSection,
    KosmetikSection,
    BeliebtSection,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "../variables/Variables.scss" as *;

.view-landing {
}
</style>
