import Route from '@ember/routing/route';

export default class KontaktRoute extends Route {
  async model() {
    return {
      intro: {
        note: "Hast du eine Frage?",
        title: "Nimm Kontakt mit mir auf!",
        text: "Möchtest Du auch eine Erinnerung oder einen Moment für die Ewigkeit festhalten? Wenn Du Interesse an meiner Arbeit hast oder auch weitere Informationen wünschst, dann melde dich bei mir. Ich freue mich auf dich!"
      },
      details: {
        telefon: {
          title: "Telefon",
          href: "tel:+4917649370962",
          text: "+49 (0) 176 49370962"
        },
        email: {
          title: "E-mail Adresse",
          href: "mailto:marta.wilk.photo@gmail.com",
          text: "marta.wilk.photo@gmail.com"
        }
      },
      address: {
        note: "Adresse",
        title: "Studioatelier",
        street: "An der Industriebahn 12",
        city: "13088 Berlin-Weißensee"
      }
    }
  }
}
