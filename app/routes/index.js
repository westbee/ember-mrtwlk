import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
      header: {
        top: "Marta Wilk Photography",
        center: "Die schönste Momente",
        centerBreak: "deines Lebens",
        bottom: "mit meiner Kamera festgehalten"
      },
      intro: {
        title: "Hallo! Ich bin Marta,",
        text: "Ich halte deine schönsten Momente mit meiner Kamera fest. Jedes Foto lebt durch deine Emotionen und Erinnerungen!",
        imgUrl: "img/fotografin.jpg"
      },
      headline: {
        title: "Berliner Fotografin | Berlin & Umgebung",
        text: "Ich halte deine schönsten Momente mit meiner Kamera fest. Jedes Foto lebt durch deine Emotionen und Erinnerungen! Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
        button: "mehr über mich"
      },
      highlights: {
        note: "Portfolio Highlights",
        title: "Photos from Shooting | Mein Studio",
        imgUrls: {
          left: "img/highlight/1.jpg",
          top: "img/highlight/2.jpg",
          bottom: "img/highlight/3.jpg",
          right: "img/highlight/4.jpg"
        },
        photos: {
          quantity: "85",
          text: "Bilder",
          button: "View Gallery"
        }
      }
    }
  }
}
