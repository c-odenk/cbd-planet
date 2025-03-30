<template>
  <header>
    <div class="header container">
      <div class="header_logo">
        <router-link to="/#">
          <img src="@/assets/logo-dark.png" />
          <h5>CBD Planet</h5>
        </router-link>
        <span class="menu-symbol" @click="toggleNav"> &#9776; </span>
      </div>
      <nav class="header_navigation">
        <ul v-show="isNavOpen">
          <li><router-link to="/#"> Startseite </router-link></li>
          <li><router-link to="/blog"> Blog </router-link></li>
          <li><router-link to="/impressum"> Kontakt </router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header-Section",
  data() {
    return {
      isNavOpen: true, // Standardmäßig offen für große Bildschirme
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    checkScreenSize() {
      if (window.innerWidth <= 768) {
        this.isNavOpen = false; // Smartphone -> Menü geschlossen
      } else {
        this.isNavOpen = true; // Tablet & Desktop -> Menü offen
      }
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>

<style lang="scss" scoped>
@use "../../variables/variables.scss" as *;

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;

  @include respond(laptop) {
    padding: 20px 0px;
  }

  @include respond(phone) {
    padding: 10px 20px 10px 10px;
    flex-direction: column;
  }

  &_logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @include respond(phone) {
      width: 100%;
    }

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

        @include respond(phone) {
          width: 60px;
          height: 50px;
        }
      }

      & h5 {
        margin: 0 30px 0 10px;
        padding: 0;
        color: #414042;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;

        @include respond(tablet) {
          margin: 0 30px 0 5px;
          font-size: 28px;
        }

        @include respond(phone) {
          margin: 0 0 0 10px;
        }
      }
    }

    & .menu-symbol {
      display: none;

      @include respond(phone) {
        display: block;
        margin: 0 10px 10px 0;
        padding: 0;
        font-size: 30px;
        cursor: pointer;
      }
    }
  }

  &_navigation {
    @include respond(phone) {
      width: 100%;
    }

    & ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      margin: 0;
      padding: 0;

      @include respond(phone) {
        flex-direction: column;
        padding: 20px 0;
      }

      & li {
        @include respond(phone) {
          padding: 10px 5px;
          margin-bottom: 5px;
        }

        & a {
          color: #000;
          padding: 0px 40px;
          text-decoration: none;
          text-transform: uppercase;

          @include respond(tablet) {
            padding: 0px 10px;
          }

          @include respond(phone) {
            padding: 8px 10px;
            display: block;
            width: 100%;
          }

          &:hover {
            color: $color-green;
          }
        }
        &:not(:last-child):after {
          content: "|";

          @include respond(phone) {
            display: none;
          }
        }
      }
    }
  }
}
</style>
