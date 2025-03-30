<template>
  <div class="product-component">
    <div class="card">
      <router-link :to="linkTarget">
        <img :src="require(`@/assets/${produktbild}`)" :alt="produktname" />
        <div class="card-body">
          <h5>{{ produktname }}</h5>
          <p class="price">ab € {{ preis }}.00</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product-Component",
  props: {
    produktname: {
      type: String,
      required: true,
    },
    preis: {
      type: Number,
      required: true,
    },
    produktbild: {
      type: String,
      required: true,
    },
    linkTarget: {
      type: String,
      default: "/",
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@use "../../variables/variables.scss" as *;

.product-component {
  .card {
    border: 1px solid rgba(0, 0, 0, 0.07);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: all 0.3s;

    @include respond(tablet) {
      box-shadow: none;
    }

    @include respond(phone) {
      box-shadow: none;
    }

    & a {
      color: #000;
      text-decoration: none;

      & img {
        width: 100%;
        height: 350px;
        border-bottom: 5px solid #16a05d;

        @include respond(tablet) {
          height: 200px;
        }

        @include respond(phone) {
          height: 400px;
        }
      }

      & .card-body {
        margin: 0;
        padding: 15px 0;

        @include respond(tablet) {
          padding: 20px 0 20px 0;
        }

        @include respond(phone) {
          padding: 35px 0 20px 0;
        }

        & h5 {
          display: block;
          margin: 0 0 1px 0;
          padding: 0;
          font-size: 18px;
          font-weight: 500;
          text-align: center;
        }

        & p {
          margin: 0;
          padding: 0;

          @include respond(tablet) {
            font-size: 16px;
          }
        }
      }
    }

    &:hover {
      transform: scale(1.01);
    }
  }
}
</style>
