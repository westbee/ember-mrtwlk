import Route from '@ember/routing/route';

export default class PaketeCakeSmashRoute extends Route {
  async model() {
    return {
      title: "Cake Smash",
      description:
        "Cake Smash Fotoshooting ist die neue Alternative zum Standard-Fotoshooting. Es ist auch für die Kinder ein riesen Spaß! Ein Cake-Smash-Shooting kann zum 1. Geburtstag oder auch rund um den 2. Geburtstag gebucht werden. Ich habe einige Schwangerschaftskleider für werdende Mütter zur Auswahl sowie Accessoires.",
      packages: [
        {
          name: "BASIC",
          price: "249€",
          details: [
            "7 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)",
            "Professionelle Bearbeitung",
            "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)"
          ],
          extra: "jedes weitere Bild 15€"
        }
      ]
    }
  }
}
