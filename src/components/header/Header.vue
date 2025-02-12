<template>
  <div class="container">
    <header class="header">
      <div class="header_logo">
        <router-link to="/#">
          <img src="@/assets/logo-dark.png" />
          <h5>CBD Planet</h5>
          <!-- <span class="menu-symbol" id="btn"> &#9776; </span> -->
        </router-link>
      </div>
      <nav class="header_navigation">
        <ul>
          <li><router-link to="/#"> Startseite </router-link></li>
          <li><router-link to="/"> Shop </router-link></li>
          <li><router-link to="/blog"> Blog </router-link></li>
          <li><router-link to="/impressum"> Kontakt </router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header-Section",
};
</script>

<style lang="scss" scoped>
@import "@/variables/Variables.scss";

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;

  @include respond(laptop) {
    padding: 20px 0px;
  }

  &_logo {
    & a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #000;
      text-decoration: none;

      & img {
        width: 80px;
        height: 60px;
      }

      & h5 {
        margin: 0 30px 0 10px;
        padding: 0;
        color: #414042;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }

  &_navigation {
    @include respond(phone) {
      display: none;
    }

    & ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      margin: 0;
      padding: 0;
      & li {
        & a {
          color: #000;
          padding: 0px 40px;
          text-decoration: none;
          text-transform: uppercase;

          @include respond(tablet) {
            padding: 0px 10px;
          }
          &:hover {
            color: $color-green;
          }
        }
        &:not(:last-child):after {
          content: "|";
        }
      }
    }
  }
}
</style>
