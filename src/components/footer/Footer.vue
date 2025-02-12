<template>
  <footer class="footer container-fluid">
    <div class="footer_row container">
      <p>Copyright &copy; 2019 CBD Planet. Alle Rechte vorbehalten.</p>
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
@import "@/variables/Variables.scss";

.footer {
  padding: 30px 0px;
  background-color: rgb(33, 33, 33);

  &_row {
    display: flex;
    flex-direction: row;

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

      & li {
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
