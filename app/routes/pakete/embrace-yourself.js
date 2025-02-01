import Route from "@ember/routing/route";

export default class PaketeEmbraceYourselfRoute extends Route {
  async model() {
    return {
      name: "embrace-yourself",
      title: "Embrace Yourself",
      description:
        "Entdecke deine wahre Schönheit und innere Stärke in diesem besonderen Shooting. „Sich Selbst Umarmen“ ist eine Reise zur Authentizität, bei der jedes Bild deine Einzigartigkeit und Emotionen zeigt. Es ist der Moment, dich so anzunehmen, wie du bist, und deine Einzigartigkeit in einem neuen Licht zu sehen.",
      packages: [
        {
          name: "BASIC",
          price: "350€",
          details: [
            "7 retuschierte Bilder (zum Download und als Abzug in Größe 13*19 cm)",
            "Professionelle Bearbeitung",
            "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          ],
          extra: "jedes weitere Bild 20€",
        },
        {
          name: "EXCLUSIVE",
          price: "400€",
          details: [
            "12 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)",
            "Exklusive Bearbeitung für erstklassige Ergebnisse",
            "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          ],
          extra: "jedes weitere Bild 15€",
        },
      ],
    };
  }
}
