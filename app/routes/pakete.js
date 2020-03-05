import Route from '@ember/routing/route';

export default class PaketeRoute extends Route {
  async model() {
    return {
      explainer: "Eure Wünsche und Vorstellungen besprechen wir im Vorfeld und Ihr entscheidet Euch, welches Paket Ihr buchen möchtet. Im Anschluss an das Fotoshooting wird jedes Bild von mir individuell und professionell bearbeitet. Die Bilder werden dann in einer persönlichen Online-Galerie bereitgestellt und gedruckt im Format 13x19.",
      categories: [
        {
          name: "Babybauch",
          route: "babybauch"
        },
        {
          name: "Neugeborene",
          route: "neugeborene"
        },
        {
          name: "Cake Smash",
          route: "cake-smash"
        },
        {
          name: "Kinder & Familien",
          route: "kinder-und-familien"
        },
        {
          name: "Porträt",
          route: "portrait"
        }
      ]
    }
  }
}
