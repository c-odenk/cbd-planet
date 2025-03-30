<template>
  <div class="landing-hero container-fluid">
    <div class="container">
      <div class="row">
        <div class="landing-hero_col-1 col-12 col-lg-6">
          <img src="@/assets/produkte.jpg" class="d-none d-lg-flex" />
        </div>
        <div class="landing-hero_col-2 col-12 col-lg-6">
          <h1>
            Das <span class="green"> therapeutische Potenzial </span> von
            Cannabidiol
          </h1>
          <img src="@/assets/produkte.jpg" class="d-none d-lg-none" />
          <p>
            Immer stärker drängen CBD (Cannabidiol) haltige Produkte auf den
            Markt, wenngleich noch immer Vorurteile dazu herrschen. Im Gegensatz
            zu THC, verursacht CBD keine psychoaktive Wirkung, mit
            Rauschzuständen ist bei dessen Anwendung also nicht zu rechnen -
            erwerb und konsum sind absolut legal. Zwar hat CBD keine Zulassung
            als Arzneimittel, dennoch werden ihm zahlreiche heilende Wirkungen
            zugeschrieben.
            <br /><br />
            Die Aufklärung über eben diese Anwendungsbereiche und Wirkungen,
            haben wir uns zur Aufgabe gemacht. Beiträge, aktuelle Studien und
            persönliche Erfahrungen rund um das Thema CBD, findest du in unserem
            Blog.
          </p>
          <router-link to="/blog"> zum Blog </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero-Section",
};
</script>

<style lang="scss" scoped>
@use "../../variables/variables.scss" as *;

.landing-hero {
  margin: 150px 0;

  @include respond(laptop) {
    margin: 130px 0 150px 0;
  }

  @include respond(tablet) {
    margin: 50px 0;
  }

  @include respond(phone) {
    // height: 20vh;
  }

  &_col-1 {
    & img {
      display: block;
      width: 80%;
      height: auto;
      margin: 0 auto;
    }
  }

  &_col-2 {
    & h1 {
      margin: 0;
      padding: 0;
      font-size: 34px;
      text-transform: uppercase;
      letter-spacing: $letter-spacing;
      line-height: 45px;
      font-weight: 700;

      @include respond(tablet) {
        margin: 0 0 30px 0;
        font-size: 30px;
      }

      @include respond(phone) {
        margin: 0 0 40px 0;
        font-size: 25px;
        line-height: 35px;
        text-align: center;
      }

      & .green {
        color: $color-green;
      }
    }

    & p {
      margin: 30px 0 60px 0;
      text-align: justify;

      @include respond(laptop) {
        margin: 20px 0px 50px 0px;
      }

      @include respond(phone) {
        text-align: left;
      }
    }

    & a {
      text-decoration: none;
      padding: 15px 70px;
      font-size: 18px;
      color: #fff;
      background-color: $color-green;

      @include respond(laptop) {
        // padding: 12.5px 45px;
      }

      @include respond(tablet) {
        padding: 10px 25px;
        font-size: 16px;
      }
    }
  }
}
</style>
