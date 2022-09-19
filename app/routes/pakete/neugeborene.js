import Route from "@ember/routing/route";

export default class PaketeNeugeboreneRoute extends Route {
  async model() {
    return {
      name: "neugeborene",
      title: "Neugeborene",
      description:
        "Nur in den ersten Tagen nach der Geburt sind diese speziellen Aufnahmen möglich. Das Shooting findet in meinem Studio statt und kann 2-4 Stunden dauern. Zwischen den einzelnen Bildern, bei denen Ihr Neugeborenes in verschiedene Positionen fotografiert wird, haben Sie noch genug Zeit zum Stillen, Wickeln und Kuscheln. Weitere Informationen und Tipps zur Vorbereitung erhalten Sie von mir bei der Buchung.",
      packages: [
        {
          name: "BASIC",
          price: "299€",
          details: [
            "1-2 Outfits",
            "versch. Outfits & Accessoires",
            "Professionelle Bearbeitung",
            "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
            "5 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)",
            "Bilder mit den Eltern und Geschwistern inclusive",
          ],
          extra: "jedes weitere Bild 15€",
        },
        {
          name: "EXCLUSIVE",
          price: "369€",
          details: [
            "2-3 Outfits",
            "versch. Outfits & Accessoires",
            "Professionelle Bearbeitung",
            "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
            "10 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)",
            "Bilder mit den Eltern und Geschwistern inclusive",
          ],
          extra: "jedes weitere Bild 10€",
        },
      ],
    };
  }
}
