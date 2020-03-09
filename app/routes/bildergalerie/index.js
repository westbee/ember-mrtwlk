import Route from '@ember/routing/route';

export default class BildergalerieIndexRoute extends Route {
  async model() {
    return {
      galleries: [
        {
          name: "Neugeborene & Babybauch",
          title: "&minus; die schönste Zeit im Leben einer Frau &minus;",
          image: "img/gallery/1.jpg",
          link: "neugeborene-und-babybauch",
          description:
            "Wenn ein neues Leben heranwächst und das in einem selbst, ist das Gefühl unvergleichlich - Stolz und Vorfreude erfüllen eine werdende Mutter und bereiten sie auf das wohl größte Abenteuer ihres Lebens vor. Das sollte in einem ganz besonderen Rahmen verewigt werden! Ist dein Neugeborenes auf der Welt und noch nicht älter als 14 Tage, dann können wir wunderschöne und einmalige Fotos von deinem Baby entstehen lassen. Ein Neugeborenen-Shooting, um den Zauber dieses neuen Lebens festzuhalten!"
        },
        {
          name: "Kinder & Familien",
          title: "&minus; einzigartige Andenken für viele Jahre &minus;",
          image: "img/gallery/2.jpg",
          link: "kinder-und-familien",
          description:
            "Erscheint ein kleiner Mensch auf Erden, ist dies der ideale Zeitpunkt, um diesen Moment einzufangen, weil Bilder einzigartige Andenken für die Zukunft sind. Egal ob klein oder groß, ob allein oder mit der ganzen Familie - in ungezwungener, lockerer Atmosphäre entstehen hier bleibende Erinnerungen für Eltern, Verwandte, Freunde und Liebende."
        },
        {
          name: "Porträtfotografie",
          title: "&minus; eine kurze Geschichte über Dich &minus;",
          image: "img/gallery/3.jpg",
          link: "portrait",
          description:
            "Die Porträt-Session erzählt eine Geschichte über dich und ich versuche die Bilder als etwas Außergewöhnliches erscheinen zu lassen. Das, was deinen Charakter und deine Persönlichkeit darstellt und hervorhebt als Geschenk an dich selbst oder als Präsent für nahestehende Personen - ich zeige dich von deiner schönsten Seite!"
        }
      ]
    }
  }
}
