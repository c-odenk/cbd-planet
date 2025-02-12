<template>
  <div class="landing-kosmetik container-fluid">
    <div class="container">
      <div class="row">
        <div class="landing-kosmetik_col-1 col-12 col-lg-7">
          <h2>CBD Kosmetik</h2>
          <img
            src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190211163244-20190211-cbd-retail.jpg"
            class="d-lg-none"
            alt=""
          />
          <p>
            Labortests zeigen, dass Cannabinoide die biochemische Abwehrreaktion
            der Haut erhöhen. Sie können außerdem die Entzündungen in der
            Talgdrüsen der Haut entgegenwirken und sind somit eine optimale
            Abhilfe bei Akne, öliger oder anfälliger Haut. CBD ist bekannt für
            dessen nicht-komedogene Eigenschaft und kann somit problemlos auf zu
            Unreinheiten neigender Haut aufgetragen werden.
          </p>
          <button type="button" class="btn btn-dark">Bald bestellbar ..</button>
        </div>
        <div class="landing-kosmetik_col-2 col-12 col-lg-5">
          <img
            src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190211163244-20190211-cbd-retail.jpg"
            class="d-none d-lg-flex"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Kosmetik-Section",
};
</script>

<style lang="scss" scoped>
@import "@/variables/Variables.scss";

.landing-kosmetik {
  display: flex;
  align-items: center;
  margin: 100px 0;
  padding: 150px 0px;
  background-color: rgb(46, 194, 158);

  &_col-1 {
    & h2 {
      font-size: 34px;
      margin-bottom: 30px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    & p {
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.7px;
      margin: 20px 0 40px 0;
    }

    & button {
      padding: 8px 20px;
      min-width: 200px;
      border: none;
      font-size: 18px;
      border-radius: 0px;
    }

    & img {
      max-width: 100%;
      height: auto;
    }
  }

  &_col-2 {
    & img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
