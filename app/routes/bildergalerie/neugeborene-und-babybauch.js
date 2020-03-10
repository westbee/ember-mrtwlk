import Route from '@ember/routing/route';

export default class BildergalerieNeugeboreneUndBabybauchRoute extends Route {
  async model() {
    return {
      name: "Neugeborene & Babybauch",
      title: "die schönste Zeit im Leben einer Frau",
      description:
        "Wenn ein neues Leben heranwächst und das in einem selbst, ist das Gefühl unvergleichlich - Stolz und Vorfreude erfüllen eine werdende Mutter und bereiten sie auf das wohl größte Abenteuer ihres Lebens vor. Das sollte in einem ganz besonderen Rahmen verewigt werden! Ist dein Neugeborenes auf der Welt und noch nicht älter als 14 Tage, dann können wir wunderschöne und einmalige Fotos von deinem Baby entstehen lassen. Ein Neugeborenen-Shooting, um den Zauber dieses neuen Lebens festzuhalten!"
    }
  }
}
