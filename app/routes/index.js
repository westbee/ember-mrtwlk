import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
      intro: {
        title: "Hallo! Ich bin Marta,",
        text: "Ich halte deine schönsten Momente mit meiner Kamera fest. Jedes Foto lebt durch deine Emotionen und Erinnerungen!",
        imgUrl: "img/fotografin.jpg"
      },
      headline: {
        title: "Berliner Fotografin | Berlin & Umgebung",
        text: "Ich halte deine schönsten Momente mit meiner Kamera fest. Jedes Foto lebt durch deine Emotionen und Erinnerungen! Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
        button: "mehr über mich"
      }
    }
  }
}
