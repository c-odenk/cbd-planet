<template>
  <div class="impressum container">
    <div class="row">
      <div class="col-lg-12">
        <h2>
          Impressum <br />
          Angaben gemäß § 5 TMG:
        </h2>

        <p>
          CBD-Planet <br />
          Ravensbergerstraße 21 <br />
          53474 Bad Neuenahr-Ahrweiler
        </p>

        <p>
          Geschäftsführer: Christopher Odenkirchen <br />
          Kontakt: kontakt@cbd-planet.de
        </p>

        <p>
          B2B Händleranfragen: <br />
          Email an: b2b@cbd-planet.de
        </p>

        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
          DE01/222/33333 <br />
          Finanzamt Bad Neuenahr-Ahrweiler
        </p>

        <b> Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: </b>
        <p>
          Christopher Odenkirchen <br />
          Kaiserstraße 57 <br />
          53113 Bonn
        </p>

        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p>
          www.CBD-Planet.de ist Teilnehmer des Partnerprogramms von Amazon
          Europe S.à r.l., ein Partnerwerbeprogramm, das für Websites konzipiert
          wurde, mittels dessen durch die Platzierung von Werbeanzeigen und
          Links zu amazon.co.uk / Javari.co.uk / amazon.de / amazon.fr /
          Javari.fr / amazon.it Werbekostenerstattungen verdient werden können.
        </p>

        <b> Haftung für Inhalte </b>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. <br />
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>

        <b> Haftung für Links </b>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. <br />
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>

        <b> Urheberrecht </b>
        <p>
          Die durch uns erstellten Inhalte und Werke auf diesen Seiten
          unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>

        <b> Rechtswirksamkeit dieses Haftungsausschlusses </b>
        <p>
          Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
          betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile
          oder einzelne Formulierungen dieses Textes der geltenden Rechtslage
          nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben
          die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit
          davon unberührt.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Impressum-Section",
};
</script>

<style lang="scss" scoped>
@use "../../variables/variables.scss" as *;

.impressum {
  margin: 100px auto 75px auto;

  @include respond(laptop) {
    margin: 50px auto 40px auto;
  }

  @include respond(tablet) {
    margin: 30px auto 25px auto;
  }
  & h2 {
    margin: 0 0 40px 0;

    @include respond(tablet) {
      margin: 0 0 20px 0;
    }
  }

  & b {
    display: block;
    margin: 50px 0 10px 0;

    @include respond(tablet) {
      margin: 30px 0 10px 0;
    }
  }
}
</style>
