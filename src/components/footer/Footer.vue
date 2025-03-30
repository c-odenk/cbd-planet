<template>
  <footer class="footer container-fluid">
    <div class="footer_row container">
      <p>Copyright &copy; 2024 CBD Planet. Alle Rechte vorbehalten.</p>
      <ul>
        <li><router-link to="/"> AGB </router-link></li>
        <li><router-link to="/impressum"> Impressum </router-link></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer-Section",
};
</script>

<style lang="scss" scoped>
@use "../../variables/variables.scss" as *;

.footer {
  padding: 30px 0px;
  background-color: rgb(33, 33, 33);

  @include respond(phone) {
    padding: 35px 5px;
  }

  &_row {
    display: flex;
    flex-direction: row;
    align-items: center;

    @include respond(laptop) {
    }

    @include respond(tablet) {
      justify-content: center;
    }

    @include respond(phone) {
      flex-direction: column;
      align-items: flex-start;
    }

    & p {
      margin: 0;
      padding: 0;
      color: #fff;
    }

    & ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      margin: 0;
      padding: 0;

      @include respond(phone) {
        margin: 15px 0 0 0;

        display: none;
      }
    }

    & a {
      text-decoration: none;
      color: $color-green;
      padding: 0px 5px;

      &:before {
        content: "|";
        color: #fff;
        padding: 0 5px 0 0;
      }
    }
  }
}
</style>
