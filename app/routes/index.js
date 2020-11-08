import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
      header: {
        top: "Marta Wilk Photography",
        center: "Die schönsten Momente",
        centerBreak: "deines Lebens",
        bottom: "mit meiner Kamera festgehalten"
      },
      intro: {
        title: "Hallo! Ich bin Marta.",
        text: "Schön, dass du meine Seite besuchst – willkommen hier und in meiner Welt! Was du siehst, ist meine ganze Leidenschaft. Wenn du auch Teil dieser Welt sein möchtest, dann lade ich dich herzlich in mein Studioatelier in Berlin-Weißensee ein.",
        imgUrl: "img/fotografin.jpg"
      },
      headline: {
        title: "Berliner Fotografin | Berlin & Umgebung",
        text: "Mein Angebot richtet sich in erster Linie an Kinder, Babys, Schwangere und Neugeborene. Ich halte deine schönsten Momente mit meiner Kamera fest. Jedes Foto lebt durch deine Emotionen und Erinnerungen!",
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
