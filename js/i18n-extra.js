/* BLACK TRANSSIMO - Additional translations merged into window.I18N */
/* eslint-disable */
(function () {
  if (!window.I18N) return;
  var en = window.I18N.en, fr = window.I18N.fr, ar = window.I18N.ar;
  var add = function (dict, obj) {
    for (var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) dict[k] = obj[k]; }
  };

  add(en, {
    "hero.explore": "Explore Tours",

    "services.s5.t": "Intercity Transportation",
    "services.s5.d": "Private transport between Moroccan cities and their airports.",
    "services.s6.t": "Morocco Tours",
    "services.s6.d": "Multi-day circuits across Morocco with a private driver.",
    "services.s7.t": "Private Chauffeur",
    "services.s7.d": "Your own professional driver for the whole day, at your service.",
    "services.s8.t": "Custom Trips",
    "services.s8.d": "Trips designed entirely around your wishes and schedule.",

    "airport.p4.t": "Marrakech \u21c4 Mohammed V Airport (Casablanca)",
    "airport.p4.d": "Private transfer to Casablanca's Mohammed V International Airport.",
    "airport.p5.t": "Marrakech \u21c4 Rabat Airport",
    "airport.p5.d": "Private transfer to Rabat-Sal\u00e9 International Airport.",
    "airport.p6.t": "Marrakech \u21c4 Tangier",
    "airport.p6.d": "Private transfer to Tangier city or Ibn Battuta Airport.",

    "act.jetski": "Jet Ski",
    "act.kitesurf": "Kitesurfing",
    "act.trekking": "Trekking",
    "act.mtb": "Mountain Biking",
    "act.climbing": "Mountain Climbing",
    "act.cooking": "Moroccan Cooking",
    "act.spa": "Spa & Wellness",
    "act.balloon": "Hot Air Balloon",
    "act.golf": "Golf",
    "act.oasis": "Oasis Visits",
    "act.culture": "Cultural Experiences",

    "form.time": "Travel Time",
    "form.time.ph": "HH:MM",
    "form.returndate": "Return Date (optional)",
    "form.returntime": "Return Time (optional)",
    "form.vehicle": "Selected Vehicle",
    "form.vehicle.ph": "Select vehicle (optional)",
    "form.vehicle.opt1": "Mercedes Vito",
    "form.vehicle.opt2": "Mercedes Sprinter",
    "form.vehicle.opt3": "Skoda",
    "form.vehicle.opt4": "Toyota Prado (4x4)",
    "form.vehicle.opt5": "Mercedes E-Class",

    "booking.cancel.title": "Cancellation Policy",
    "booking.cancel.1": "Cancellation before 48 hours: refund according to the booking policy.",
    "booking.cancel.2": "Cancellation within 48 hours: the policy applies according to the existing terms.",
    "form.err.send": "Sending failed. Please try again or contact us directly on WhatsApp.",
    "form.err.passengers": "Please enter a number of passengers between 1 and 15.",
    "form.err.returndate": "The return date cannot be before the departure date.",

    "success.title": "Booking request sent successfully.",
    "success.wa": "Chat on WhatsApp"
  });

  add(fr, {
    "hero.explore": "D\u00e9couvrir les Excursions",

    "services.s5.t": "Transport Interurbain",
    "services.s5.d": "Transport priv\u00e9 entre les villes marocaines et leurs a\u00e9roports.",
    "services.s6.t": "Circuits au Maroc",
    "services.s6.d": "Circuits de plusieurs jours \u00e0 travers le Maroc avec chauffeur priv\u00e9.",
    "services.s7.t": "Chauffeur Priv\u00e9",
    "services.s7.d": "Votre chauffeur professionnel pour toute la journ\u00e9e, \u00e0 votre service.",
    "services.s8.t": "Voyages sur Mesure",
    "services.s8.d": "Des voyages enti\u00e8rement con\u00e7us selon vos envies et votre programme.",

    "airport.p4.t": "Marrakech \u21c4 A\u00e9roport Mohammed V (Casablanca)",
    "airport.p4.d": "Transfert priv\u00e9 vers l'a\u00e9roport international Mohammed V de Casablanca.",
    "airport.p5.t": "Marrakech \u21c4 A\u00e9roport de Rabat",
    "airport.p5.d": "Transfert priv\u00e9 vers l'a\u00e9roport international Rabat-Sal\u00e9.",
    "airport.p6.t": "Marrakech \u21c4 Tanger",
    "airport.p6.d": "Transfert priv\u00e9 vers Tanger ou l'a\u00e9roport Ibn Battouta.",

    "act.jetski": "Jet Ski",
    "act.kitesurf": "Kitesurf",
    "act.trekking": "Trekking",
    "act.mtb": "VTT",
    "act.climbing": "Alpinisme",
    "act.cooking": "Cuisine Marocaine",
    "act.spa": "Spa & Bien-\u00eatre",
    "act.balloon": "Montgolfi\u00e8re",
    "act.golf": "Golf",
    "act.oasis": "Visite des Oasis",
    "act.culture": "Exp\u00e9riences Culturelles",

    "form.time": "Heure du Voyage",
    "form.time.ph": "HH:MM",
    "form.returndate": "Date de Retour (facultatif)",
    "form.returntime": "Heure de Retour (facultative)",
    "form.vehicle": "V\u00e9hicule S\u00e9lectionn\u00e9",
    "form.vehicle.ph": "Choisir un v\u00e9hicule (facultatif)",
    "form.vehicle.opt1": "Mercedes Vito",
    "form.vehicle.opt2": "Mercedes Sprinter",
    "form.vehicle.opt3": "Skoda",
    "form.vehicle.opt4": "Toyota Prado (4x4)",
    "form.vehicle.opt5": "Mercedes Classe E",

    "booking.cancel.title": "Politique d'Annulation",
    "booking.cancel.1": "Annulation avant 48 heures : remboursement selon la politique de r\u00e9servation.",
    "booking.cancel.2": "Annulation dans les 48 heures : la politique s'applique selon les conditions en vigueur.",
    "form.err.send": "\u00c9chec de l'envoi. Veuillez r\u00e9essayer ou nous contacter directement sur WhatsApp.",
    "form.err.passengers": "Veuillez saisir un nombre de passagers entre 1 et 15.",
    "form.err.returndate": "La date de retour ne peut pas \u00eatre ant\u00e9rieure \u00e0 la date de d\u00e9part.",

    "success.title": "Demande de r\u00e9servation envoy\u00e9e avec succ\u00e8s.",
    "success.wa": "Discuter sur WhatsApp"
  });

  add(ar, {
    "hero.explore": "\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u062c\u0648\u0644\u0627\u062a",

    "services.s5.t": "\u0627\u0644\u0646\u0642\u0644 \u0628\u064a\u0646 \u0627\u0644\u0645\u062f\u0646",
    "services.s5.d": "\u0646\u0642\u0644 \u062e\u0627\u0635 \u0628\u064a\u0646 \u0627\u0644\u0645\u062f\u0646 \u0627\u0644\u0645\u063a\u0631\u0628\u064a\u0629 \u0648\u0645\u0637\u0627\u0631\u0627\u062a\u0647\u0627.",
    "services.s6.t": "\u062c\u0648\u0644\u0627\u062a \u0627\u0644\u0645\u063a\u0631\u0628",
    "services.s6.d": "\u062c\u0648\u0644\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0623\u064a\u0627\u0645 \u0639\u0628\u0631 \u0627\u0644\u0645\u063a\u0631\u0628 \u0645\u0639 \u0633\u0627\u0626\u0642 \u062e\u0627\u0635.",
    "services.s7.t": "\u0633\u0627\u0626\u0642 \u062e\u0627\u0635",
    "services.s7.d": "\u0633\u0627\u0626\u0642\u0643 \u0627\u0644\u0645\u062d\u062a\u0631\u0641 \u0627\u0644\u062e\u0627\u0635 \u0637\u0648\u0627\u0644 \u0627\u0644\u064a\u0648\u0645 \u0641\u064a \u062e\u062f\u0645\u062a\u0643.",
    "services.s8.t": "\u0631\u062d\u0644\u0627\u062a \u062d\u0633\u0628 \u0627\u0644\u0637\u0644\u0628",
    "services.s8.d": "\u0631\u062d\u0644\u0627\u062a \u0645\u0635\u0645\u0645\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u062d\u0633\u0628 \u0631\u063a\u0628\u0627\u062a\u0643 \u0648\u062c\u062f\u0648\u0644\u0643.",

    "airport.p4.t": "\u0645\u0631\u0627\u0643\u0634 \u21c4 \u0645\u0637\u0627\u0631 \u0645\u062d\u0645\u062f \u0627\u0644\u062e\u0627\u0645\u0633 (\u0627\u0644\u062f\u0627\u0631 \u0627\u0644\u0628\u064a\u0636\u0627\u0621)",
    "airport.p4.d": "\u0646\u0642\u0644 \u062e\u0627\u0635 \u0625\u0644\u0649 \u0645\u0637\u0627\u0631 \u0645\u062d\u0645\u062f \u0627\u0644\u062e\u0627\u0645\u0633 \u0627\u0644\u062f\u0648\u0644\u064a \u0628\u0627\u0644\u062f\u0627\u0631 \u0627\u0644\u0628\u064a\u0636\u0627\u0621.",
    "airport.p5.t": "\u0645\u0631\u0627\u0643\u0634 \u21c4 \u0645\u0637\u0627\u0631 \u0627\u0644\u0631\u0628\u0627\u0637",
    "airport.p5.d": "\u0646\u0642\u0644 \u062e\u0627\u0635 \u0625\u0644\u0649 \u0645\u0637\u0627\u0631 \u0627\u0644\u0631\u0628\u0627\u0637 \u0633\u0644\u0627 \u0627\u0644\u062f\u0648\u0644\u064a.",
    "airport.p6.t": "\u0645\u0631\u0627\u0643\u0634 \u21c4 \u0637\u0646\u062c\u0629",
    "airport.p6.d": "\u0646\u0642\u0644 \u062e\u0627\u0635 \u0625\u0644\u0649 \u0645\u062f\u064a\u0646\u0629 \u0637\u0646\u062c\u0629 \u0623\u0648 \u0645\u0637\u0627\u0631 \u0627\u0628\u0646 \u0628\u0637\u0648\u0637\u0629.",

    "act.jetski": "\u062c\u064a\u062a \u0633\u0643\u064a",
    "act.kitesurf": "\u0627\u0644\u0643\u0627\u064a\u062a \u0633\u064a\u0631\u0641",
    "act.trekking": "\u0627\u0644\u0645\u0634\u064a \u0627\u0644\u062c\u0628\u0644\u064a \u0627\u0644\u0637\u0648\u064a\u0644",
    "act.mtb": "\u062f\u0631\u0627\u062c\u0627\u062a \u0627\u0644\u062c\u0628\u0627\u0644",
    "act.climbing": "\u062a\u0633\u0644\u0642 \u0627\u0644\u062c\u0628\u0627\u0644",
    "act.cooking": "\u0627\u0644\u0637\u0628\u062e \u0627\u0644\u0645\u063a\u0631\u0628\u064a",
    "act.spa": "\u0633\u0628\u0627 \u0648\u0627\u0633\u062a\u0631\u062e\u0627\u0621",
    "act.balloon": "\u0627\u0644\u0645\u0646\u0637\u0627\u062f",
    "act.golf": "\u0627\u0644\u063a\u0648\u0644\u0641",
    "act.oasis": "\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0648\u0627\u062d\u0627\u062a",
    "act.culture": "\u062a\u062c\u0627\u0631\u0628 \u062b\u0642\u0627\u0641\u064a\u0629",

    "form.time": "\u0648\u0642\u062a \u0627\u0644\u0633\u0641\u0631",
    "form.time.ph": "\u0633\u0633:\u062f\u062f",
    "form.returndate": "\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0639\u0648\u062f\u0629 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",
    "form.returntime": "\u0648\u0642\u062a \u0627\u0644\u0639\u0648\u062f\u0629 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",
    "form.vehicle": "\u0627\u0644\u0645\u0631\u0643\u0628\u0629 \u0627\u0644\u0645\u062e\u062a\u0627\u0631\u0629",
    "form.vehicle.ph": "\u0627\u062e\u062a\u0631 \u0645\u0631\u0643\u0628\u0629 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",
    "form.vehicle.opt1": "\u0645\u0631\u0633\u064a\u062f\u0633 \u0641\u064a\u062a\u0648",
    "form.vehicle.opt2": "\u0645\u0631\u0633\u064a\u062f\u0633 \u0633\u0628\u0631\u064a\u0646\u062a\u0631",
    "form.vehicle.opt3": "\u0633\u0643\u0648\u062f\u0627",
    "form.vehicle.opt4": "\u062a\u0648\u064a\u0648\u062a\u0627 \u0628\u0631\u0627\u062f\u0648 (4x4)",
    "form.vehicle.opt5": "\u0645\u0631\u0633\u064a\u062f\u0633 \u0643\u0644\u0627\u0633 E",
    "booking.cancel.title": "\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u0625\u0644\u063a\u0627\u0621",
    "booking.cancel.1": "\u0627\u0644\u0625\u0644\u063a\u0627\u0621 \u0642\u0628\u0644 48 \u0633\u0627\u0639\u0629: \u0627\u0633\u062a\u0631\u062f\u0627\u062f \u062d\u0633\u0628 \u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062d\u062c\u0632.",
    "booking.cancel.2": "\u0627\u0644\u0625\u0644\u063a\u0627\u0621 \u062e\u0644\u0627\u0644 48 \u0633\u0627\u0639\u0629: \u062a\u0637\u0628\u0642 \u0627\u0644\u0633\u064a\u0627\u0633\u0629 \u062d\u0633\u0628 \u0627\u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u0633\u0627\u0631\u064a\u0629.",
    "form.err.send": "\u0641\u0634\u0644 \u0627\u0644\u0625\u0631\u0633\u0627\u0644. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 \u0623\u0648 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628.",
    "form.err.passengers": "\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0639\u062f\u062f \u0631\u0643\u0627\u0628 \u0628\u064a\u0646 1 \u0648 15.",
    "form.err.returndate": "\u0644\u0627 \u064a\u0645\u0643\u0646 \u0623\u0646 \u064a\u0643\u0648\u0646 \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0639\u0648\u062f\u0629 \u0642\u0628\u0644 \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642.",

    "success.title": "\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u0627\u0644\u062d\u062c\u0632 \u0628\u0646\u062c\u0627\u062d.",
    "success.wa": "\u062a\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628"
  });
})();
