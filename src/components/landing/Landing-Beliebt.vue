<template>
  <div class="landing-beliebt container-fluid">
    <div class="container">
      <div class="landing-beliebt_row-1 row">
        <div class="col-lg-8 offset-lg-2 col-md-12">
          <h2 id="beliebt">Beliebte <span class="green"> Produkte </span></h2>
          <p>Empfohlene Artikel, die andere Kunden oft erneut kaufen:</p>
        </div>
      </div>

      <div class="landing-beliebt_row-2 row">
        <div
          class="col-12 col-md-3"
          v-for="(Beliebt, index) in Beliebt"
          :key="index"
        >
          <div class="card">
            <router-link to="/">
              <img
                :src="require(`@/assets/${this.Beliebt[index].Produktbild}`)"
              />
              <div class="card-body">
                <h5>{{ this.Beliebt[index].Produktname }}</h5>
                <p class="price">ab € {{ this.Beliebt[index].Preis }}.00</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Beliebt-Section",
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
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables/Variables.scss";

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
        // text-align: left;
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

      @include respond(tablet) {
        // text-align: left;
      }
    }
  }

  &_row-2 {
    @include respond(tablet) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow-x: auto;
      white-space: nowrap;
    }

    @include respond(phone) {
      // margin: 0 20px;
    }

    & .card {
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

            @include respond(tablet) {
            }

            @include respond(phone) {
            }
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
</style>
