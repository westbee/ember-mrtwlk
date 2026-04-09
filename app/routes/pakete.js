import Route from "@ember/routing/route";

export default class PaketeRoute extends Route {
  async model() {
    return {
      explainer:
        "Eure Wünsche und Vorstellungen besprechen wir im Vorfeld und Ihr entscheidet Euch, welches Paket Ihr buchen möchtet. Im Anschluss an das Fotoshooting wird jedes Bild von mir individuell und professionell bearbeitet.",
      categories: [
        {
          name: "Babybauch",
          route: "babybauch",
        },
        {
          name: "Neugeborene",
          route: "neugeborene",
        },
        {
          name: "Embrace Yourself",
          route: "embrace-yourself",
        },
        {
          name: "Kinder & Familien",
          route: "kinder-und-familien",
        },
        {
          name: "Personal Branding",
          route: "personal-branding",
        },
      ],
    };
  }
}
