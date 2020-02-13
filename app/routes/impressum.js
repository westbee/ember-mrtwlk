import Route from '@ember/routing/route';

export default class ImpressumRoute extends Route {
  async model() {
    return {
      title: "Impressum",
      address: {
        details: ["Marta Wilk", "Konrad-Wolf-Str.62a", "13055 Berlin"]
      },
      contact: {
        "Telefon": "0176 49370962",
        "E-mail": "marta.wilk.photo@gmail.com"
      },
      tax: {
        "Steuernummer": "DE304402995",
        "Berufsbezeichnung": "Fotografin"
      },
      explainer: "Alle Rechte vorbehalten. Alle veröffentlichen Bilder sind urheberrechtlich geschützt. Eine Weitergabe oder Benutzung der Bilder, Texte und Grafiken ist untersagt. Alle Bilder unterliegen dem Urheberrecht von Vanessa Fenski und dürfen ohne ausdrückliche Einwilligung weder gewerblich genutzt, noch vervielfältigt oder an Dritte weitergegeben werden. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails vor.",
      info: {
        "Urheberrecht": "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seiten sind nicht gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
        "Haftungshinweise": "Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Betreiber der Website keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
        "Verantwortlich für den Inhalt gemäß §55 Abs.2 RStV": "Marta Wilk, Anschrift (s.o.)"
      }
    }
  }
}
