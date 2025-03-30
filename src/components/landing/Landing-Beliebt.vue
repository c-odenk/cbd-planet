<template>
  <div class="landing-beliebt container-fluid">
    <div class="container">
      <div class="landing-beliebt_row-1 row">
        <div class="col-lg-8 offset-lg-2 col-md-12">
          <h2 id="beliebt">Beliebte <span class="green"> Produkte </span></h2>
          <p>Empfohlene Artikel, die andere Kunden oft erneut kaufen:</p>
        </div>
      </div>

      <!-- Desktop/Laptop und Tablet: Normales Grid -->
      <div v-if="!isMobile" class="landing-beliebt_row-2 row">
        <div
          class="col-12 col-md-3"
          v-for="(produkt, index) in Beliebt"
          :key="`desktop-${index}`"
        >
          <product-component
            :produktname="produkt.Produktname"
            :preis="produkt.Preis"
            :produktbild="produkt.Produktbild"
          />
        </div>
      </div>

      <!-- Nur Smartphone: Horizontales Scroll Layout -->
      <div
        v-if="isMobile"
        class="products-grid snap-scroll"
        ref="mobileProductCards"
      >
        <div
          v-for="(produkt, index) in Beliebt"
          :key="`mobile-${index}`"
          class="snap-item"
        >
          <product-component
            :produktname="produkt.Produktname"
            :preis="produkt.Preis"
            :produktbild="produkt.Produktbild"
          />
        </div>
      </div>

      <!-- Scroll-Indikatoren nur für Smartphone -->
      <div v-if="isMobile" class="products-scroll-indicators">
        <div
          v-for="(produkt, index) in Beliebt"
          :key="`dot-${index}`"
          class="scroll-dot"
          :class="{ active: index === activeIndex }"
          @click="scrollToCard(index)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductComponent from "../base/Product-Component.vue";

export default {
  name: "Beliebt-Section",
  components: {
    ProductComponent,
  },
  data: function () {
    return {
      Beliebt: [
        {
          Produktname: "Produktname",
          Preis: 19.0,
          Produktbild: "product-beard-oil.png",
        },
        {
          Produktname: "Produktname",
          Preis: 19.0,
          Produktbild: "product-beard-oil.png",
        },
        {
          Produktname: "Produktname",
          Preis: 19.0,
          Produktbild: "cbd-oel.jpg",
        },
        {
          Produktname: "Produktname",
          Preis: 19.0,
          Produktbild: "cbd-oel.jpg",
        },
      ],
      isMobile: false,
      isTablet: false,
      resizeTimer: null,
      activeIndex: 0,
    };
  },
  mounted() {
    this.checkViewport();
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("load", this.initLayout);

    // Nur für Mobile Scroll-Indikatoren initialisieren
    if (this.isMobile) {
      this.initScrollIndicators();
    }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("load", this.initLayout);
  },
  methods: {
    checkViewport() {
      const width = window.innerWidth;
      this.isMobile = width < 768;
      this.isTablet = width >= 768 && width < 1024;
    },

    handleResize() {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        // Aktuelle Zustände speichern
        const wasMobile = this.isMobile;

        // Viewport überprüfen
        this.checkViewport();

        // Prüfen, ob sich etwas geändert hat
        const mobileChanged = wasMobile !== this.isMobile;

        // Layout neu initialisieren wenn sich Mobile Status geändert hat
        if (mobileChanged) {
          this.initLayout();
        }
      }, 200);
    },

    initLayout() {
      if (this.isMobile) {
        this.initScrollIndicators();
      }
    },

    initScrollIndicators() {
      // Nach dem DOM-Update warten
      this.$nextTick(() => {
        const container = this.$el.querySelector(".products-grid");
        const dots = this.$el.querySelectorAll(".scroll-dot");
        const cards = this.$el.querySelectorAll(".products-grid > div");

        if (container && dots.length) {
          // Initial ersten Dot aktivieren
          this.activeIndex = 0;

          container.addEventListener("scroll", () => {
            // Berechne den Fortschritt des Scrollens
            const scrollPosition = container.scrollLeft;

            // Für Mobile: Berechne, welche Karte am sichtbarsten ist basierend auf Kartenposition
            const cardWidth = cards[0].offsetWidth + 10; // Kartenbreite + gap
            const currentCardIndex = Math.round(scrollPosition / cardWidth);
            this.activeIndex = Math.min(currentCardIndex, cards.length - 1);
          });
        }
      });
    },

    scrollToCard(index) {
      const container = this.$el.querySelector(".products-grid");
      const cards = this.$el.querySelectorAll(".products-grid > div");

      if (container && cards.length > index) {
        const cardWidth = cards[0].offsetWidth;
        const gapWidth = 10; // gap für mobile
        const scrollPosition = index * (cardWidth + gapWidth);

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });

        this.activeIndex = index;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../variables/Variables.scss" as *;

.landing-beliebt {
  margin: 150px 0 150px 0;

  @include respond(laptop) {
    margin: 100px 0;
  }

  @include respond(tablet) {
    margin: 75px 0;
  }

  &_row-1 {
    margin: 0 0 50px 0;

    @include respond(laptop) {
      margin: 0 0 30px 0;
    }

    @include respond(tablet) {
      margin: 0 0 20px 0;
    }

    & h2 {
      font-size: 40px;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;

      @include respond(tablet) {
        margin: 0 0 5px 0;
        padding: 0;
        font-size: 30px;
      }

      @include respond(phone) {
        margin: 0 0 10px 0;
        font-size: 25px;
        text-align: center;
      }

      & .green {
        color: $color-green;
      }
    }

    & p {
      text-align: center;
    }
  }

  &_row-2 {
    @include respond(tablet) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  &_row-2.row > * {
    @include respond(tablet) {
      padding-right: calc(var(--bs-gutter-x) * 0.2);
      padding-left: calc(var(--bs-gutter-x) * 0.2);
    }

    @include respond(phone) {
      padding-right: calc(var(--bs-gutter-x) * 0.75);
      padding-left: calc(var(--bs-gutter-x) * 0.75);
    }
  }
}

/* Nur Mobile: Grid mit horizontalem Scroll */
.products-grid {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: flex-start;
  gap: 10px;
  padding: 5px 0 15px;
  margin-top: 20px;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Opera */
  }

  /* Snap-Scrolling für Mobile */
  &.snap-scroll {
    scroll-snap-type: x mandatory;
    scroll-padding: 0 16px;
  }

  /* Snap-Items für Mobile View */
  .snap-item {
    scroll-snap-align: center;
    min-width: 260px;
    width: 100%;
    flex: 0 0 auto;
    margin: 0;
  }
}

/* Scroll-Indikatoren nur für Mobile */
.products-scroll-indicators {
  display: flex;
  justify-content: center;
  margin: 15px auto 0;
  padding: 0;

  .scroll-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, transform 0.2s ease;
    cursor: pointer; /* Zeigt an, dass die Punkte klickbar sind */

    &.active {
      background-color: $color-green;
      transform: scale(1.3);
    }
  }
}
</style>
