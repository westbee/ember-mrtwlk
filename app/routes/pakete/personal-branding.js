import Route from "@ember/routing/route";

export default class PaketePersonalBrandingRoute extends Route {
  async model() {
    return {
      name: "personal-branding",
      title: "Personal Branding – Jahrespaket",
      description:
        "Regelmäßiger Content ist der Schlüssel zu einer starken, sichtbaren Marke. Mit meinen Personal Branding Memberships bekommst du mehr als nur ein Shooting du bekommst eine kontinuierliche visuelle Begleitung für dein Business. Kein Stress mehr mit Content-Planung oder immer neuen Ideen.<br>Wir arbeiten gemeinsam in deinem Rhythmus, sodass deine Bilder immer aktuell, authentisch und stimmig sind. Ideal für Frauen, die ihr Business professionell aufbauen und sichtbar wachsen möchten.",
      packages: [
        {
          name: "CONTENT PRINCESS",
          teaser: "Shooting alle 6 Monate – 6 Bilder pro Shooting",
          price: "200€",
          priceExtra: "pro Shooting",
          details: [
            "2 Shootings à 70 Minuten",
            "1–2 Stylings pro Shooting",
            "1 Location (Studio, Outdoor oder bei dir)",
            "6 professionell bearbeitete Bilder pro Shooting",
            "2 kurze Videos pro Shooting (vertikal, fertig zur Veröffentlichung – ideal für Reels)",
            "Persönliche Vorab-Beratung",
          ],
          extra: "jedes zusätzliche Bild 20€",
          investition: {
            text: "jährlich",
            price: "400€",
          },
        },
        {
          name: "CONTENT QUEEN",
          teaser: "Shooting alle 3 Monate – 6 Bilder pro Shooting",
          price: "200€",
          priceExtra: "pro Shooting",
          details: [
            "4 Shootings à 70 Minuten",
            "1–2 Stylings pro Shooting",
            "1 Location (Studio, Outdoor oder bei dir)",
            "6 professionell bearbeitete Bilder pro Shooting",
            "2 kurze Videos pro Shooting (vertikal, fertig zur Veröffentlichung – ideal für Reels)",
            "Persönliche Vorab-Beratung",
          ],
          extra: "jedes zusätzliche Bild 20€",
          investition: {
            text: "jährlich",
            price: "800€",
          },
        },
      ],
    };
  }
}
