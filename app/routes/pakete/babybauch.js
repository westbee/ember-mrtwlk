import Route from "@ember/routing/route";

export default class PaketeBabybauchRoute extends Route {
  async model() {
    return {
      name: "babybauch",
      title: "Babybauch",
      description:
        "Die perfekte Zeit für ein Babybauch-Shooting ist ab der 30 SSW. Das Shooting findet im Studio bei mir statt oder bei schönem Wetter auch draußen. Das Fotoshooting dauert in etwa 1-2 Stunden. Ich habe einige Schwangerschaftskleider für werdende Mütter zur Auswahl sowie Accessoires. Beim Fotoshooting darf sehr gerne auch Papa mit dabei sein oder auch die größeren Geschwisterkinder.",
      packages: [
        {
          name: "BASIC",
          price: "269€",
          details: [
            "1-2 Outfits",
            "Professionelle Bearbeitung",
            "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
            "7 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)",
            "Fotos mit Partner und Geschwisterkindern inclusive",
          ],
          extra: "jedes weitere Bild 15€",
        },
        {
          name: "EXCLUSIVE",
          price: "319€",
          details: [
            "2-3 Outfits",
            "Professionelle Bearbeitung",
            "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
            "12 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)",
            "Fotos mit Partner und Geschwisterkindern inclusive",
          ],
          extra: "jedes weitere Bild 10€",
        },
      ],
    };
  }
}
