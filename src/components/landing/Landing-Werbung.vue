<template>
  <div class="landing-werbung container-fluid">
    <div class="container">
      <div class="row">
        <div class="landing-werbung_col-1 col-12 col-md-5">
          <router-link to="/">
            <img src="@/assets/beard-placeholder-1.jpg" />
          </router-link>
        </div>
        <div class="landing-werbung_col-2 col-12 col-md-7">
          <router-link to="/">
            <img src="@/assets/beard-placeholder-2.jpg" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Werbung-Section",
};
</script>

<style lang="scss" scoped>
@use "../../variables/Variables.scss" as *;

.landing-werbung {
  &_col-1 {
    @include respond(phone) {
      margin: 0 0 10px 0;
    }

    & a img {
      width: 100%;
      max-width: 100%;
      height: 300px;
      transition: all 0.2s;

      @include respond(tablet) {
        height: 200px;
      }

      @include respond(phone) {
        height: auto;
      }

      &:hover {
        transform: scale(1.01);
      }
    }
  }

  & .row > * {
    @include respond(tablet) {
      padding-right: calc(var(--bs-gutter-x) * 0.2);
      padding-left: calc(var(--bs-gutter-x) * 0.2);
    }
  }

  &_col-2 {
    & a img {
      width: 100%;
      max-width: 100%;
      height: 300px;
      transition: all 0.2s;

      @include respond(tablet) {
        height: 200px;
      }

      @include respond(phone) {
        height: auto;
      }

      &:hover {
        transform: scale(1.01);
      }
    }
  }
}
</style>
