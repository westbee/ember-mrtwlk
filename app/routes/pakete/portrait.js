import Route from '@ember/routing/route';

export default class PaketePortraitRoute extends Route {
  async model() {
    return {
      title: "Porträt",
      description:
        "Portraitfotos sind zum Wohlfühlen für sich selbst, zum Verschenken, zum Erinnern. Ich habe viele Ideen, bin aber sehr offen für Eure eigenen Anregungen und Wünsche.",
      packages: [
        {
          name: "BASIC",
          price: "199€",
          details: [
            "Professionelle Bearbeitung",
            "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
            "8 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
          ],
          extra: "jedes weitere Bild 15€"
        }
      ]
    }
  }
}
