<template>
  <div class="wallpaper">
    <div class="wallpaper_heading">
      <h1>
        <span class="main"> www.CBD-PLANET.de</span>
        <span class="sub"> Cannabidiole Ergänzungsprodukte </span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wallpaper-Section",
};
</script>

<style lang="scss" scoped>
@use "../../variables/Variables.scss" as *;

.wallpaper {
  width: 100%;
  height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/wallpaper.jpg");

  position: relative;

  @include respond(laptop) {
    height: 60vh;
  }

  @include respond(tablet) {
    height: 30vh;
  }

  @include respond(phone) {
    height: 25vh;
  }

  &_heading {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    & h1 {
      color: #fff;

      @include respond(tablet) {
        display: none;
      }

      & .main {
        display: block;
        font-size: 4vw;
        font-weight: 400;
        letter-spacing: 1rem;
        padding-bottom: 8px;
      }

      & .sub {
        display: block;
        font-size: 1.3vw;
        font-weight: 700;
        letter-spacing: 1.4rem;
        text-transform: uppercase;
      }
    }
  }
}
</style>
