import Route from '@ember/routing/route';

export default class BildergaleriePortraitRoute extends Route {
  async model() {
    return {
      name: "Porträtfotografie",
      title: "eine kurze Geschichte über Dich",
      description:
        "Die Porträt-Session erzählt eine Geschichte über dich und ich versuche die Bilder als etwas Außergewöhnliches erscheinen zu lassen. Das, was deinen Charakter und deine Persönlichkeit darstellt und hervorhebt als Geschenk an dich selbst oder als Präsent für nahestehende Personen - ich zeige dich von deiner schönsten Seite!"
    }
  }
}
