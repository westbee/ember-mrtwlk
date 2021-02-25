import Route from '@ember/routing/route';

export default class PaketeKinderUndFamilienRoute extends Route {
  async model() {
    return {
      name: "kinder",
      title: "Kinder & Familien",
      description:
        "Das beste Alter für ein Baby Fotoshooting ist ab dem 6-8 Monat, ab Sitzalter.  Von Vorteil ist es, wenn Ihr Kind selbständig sitzen kann. Dadurch sind zusätzliche Positionen möglich, die es ermöglichen noch mehr schöne Bilder einzufangen. Buchen Sie ihren Termin für Kinder und Familien Fotos bei mir im Studio und auch Outdoor.",
      packages: [
        {
          name: "BASIC",
          price: "209€",
          details: [
            "7 retuschierte Bilder einschließlich 1 Familienaufnahme (digital auf USB Stick & als Abzug 13*19)",
            "Professionelle Bearbeitung",
            "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)"
          ],
          extra: "jedes weitere Bild 15€"
        },
        {
          name: "EXCLUSIVE",
          price: "259€",
          details: [
            "12 retuschierte Bilder einschließlich 2 Familienaufnahmen (digital auf USB Stick & als Abzug 13*19)",
            "Professionelle Bearbeitung",
            "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)"
          ],
          extra: "jedes weitere Bild 10€"
        }
      ]
    }
  }
}
