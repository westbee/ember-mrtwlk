import Route from '@ember/routing/route';

export default class BildergalerieKinderUndFamilienRoute extends Route {
  async model() {
    return {
      name: "Kinder & Familien",
      title: "einzigartige Andenken für viele Jahre",
      description:
        "Erscheint ein kleiner Mensch auf Erden, ist dies der ideale Zeitpunkt, um diesen Moment einzufangen, weil Bilder einzigartige Andenken für die Zukunft sind. Egal ob klein oder groß, ob allein oder mit der ganzen Familie - in ungezwungener, lockerer Atmosphäre entstehen hier bleibende Erinnerungen für Eltern, Verwandte, Freunde und Liebende."
    }
  }
}
