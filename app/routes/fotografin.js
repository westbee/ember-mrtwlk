import Route from '@ember/routing/route';

export default class FotografinRoute extends Route {
  async model() {
    return {
      intro: {
        note: "Die Berliner Fotografin",
        title: "Marta Wilk",
        text: "Fotografieren bedeutet für mich, Momente mit der Kamera festzuhalten, die vorher unsichtbar waren. Es ist keine Kunst, zu fotografieren… es ist eher die Gabe, Menschen und Situationen mit all ihren Facetten und in ihrer Echtheit zu sehen und diese Emotionen dann für jeden sichtbar zu machen."
      },
      freetext: {
        p1: "Ich liebe das Fotografieren, das Leben, meinen Mann, meine beiden Kinder und meine Freunde. Schön, dass du meine Seite besuchst – willkommen hier und in meiner Welt! Was du siehst, ist meine ganze Leidenschaft. Wenn du auch Teil dieser Welt sein möchtest, dann lade ich dich herzlich in mein Studioatelier in Berlin-Weißensee ein.",
        p2: "Mein Angebot richtet sich in erster Linie an Kinder, Babys, Schwangere und Neugeborene."
      },
      box: {
        title: "Kreativität",
        text: "Eine meiner persönlichen Stärken ist Kreativität und so kommt es auch, dass ich viele Accessoires für die Shootings allein und mit viel Liebe zum Detail herstelle, in meinem Studio probiere ich aber auch individuelle Sets aus für meine Kunden. Du darfst Deine Wünsche immer gerne an mich herantragen. Vor Ort findest du auf jeden Fall ein gewisses Repertoire an Utensilien, Dekorationen und Kleidungsstücken! Selbstverständlich gibt es auch die Möglichkeit, Outdoor-Sessions mit mir zu buchen und ich schlage gerne entsprechende Orte dafür vor."
      },
      imgUrls: {
        first: "img/about/1.jpg",
        second: "img/about/2.jpg"
      },
      endtext: {
        p1: "Damit ich dir auch in Zukunft immer das bestmögliche Ergebnis unserer Zusammenarbeit bieten kann, entwickle ich mich stetig weiter und nehme z. B. regelmäßig an speziellen Workshops teil. Das Wichtigste zum Schluss: Was mich bei meiner Arbeit so glücklich macht, sind die zufriedenen und lächelnden Augen meiner Kunden, wenn sie ihre Bilder zum ersten Mal sehen.",
        p2: "Aber nun mach dir selbst ein Bild davon und lass dich von meiner Seite und meinen ausgewählten Fotografien inspirieren!",
        p3: "Möchtest du auch eine Erinnerung oder einen Moment für die Ewigkeit festhalten? – Dann melde dich bei mir. Ich freue mich auf dich!",
      }
    }
  }
}
