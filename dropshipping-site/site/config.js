/*
 * ============================================================
 *  CONFIGURATION DE LA BOUTIQUE — le SEUL fichier à modifier
 * ============================================================
 *  1. Remplace chaque "paymentLink" par ton lien Stripe Payment Link
 *     (voir docs/PLAN-ACTION.md, étape 4).
 *  2. Remplace les infos de contact.
 *  3. Ajoute tes VRAIS avis clients dans "reviews" au fur et à mesure.
 */
window.STORE = {
  brand: "Novéa",
  productName: "Brosse Massante Novéa LED",
  tagline: "Le rituel cuir chevelu qui détend en 5 minutes par jour.",
  email: "contact@novea-shop.fr",          // ← ton adresse e-mail pro
  delivery: "Livraison offerte en 7 à 12 jours ouvrés", // ← adapte selon ton fournisseur
  freeShippingText: "Livraison offerte en France",
  returnDays: 30,

  // Offres (bundles). Le prix est en euros TTC.
  offers: [
    {
      id: "solo",
      qty: 1,
      title: "1 brosse",
      subtitle: "Pour vous",
      price: 49.9,
      badge: "",
      paymentLink: "https://buy.stripe.com/REMPLACER_LIEN_1"
    },
    {
      id: "duo",
      qty: 2,
      title: "2 brosses",
      subtitle: "Une pour vous, une à offrir",
      price: 84.9,
      badge: "Le plus choisi",
      paymentLink: "https://buy.stripe.com/REMPLACER_LIEN_2"
    },
    {
      id: "trio",
      qty: 3,
      title: "3 brosses",
      subtitle: "Pour toute la famille",
      price: 114.9,
      badge: "Meilleure économie",
      paymentLink: "https://buy.stripe.com/REMPLACER_LIEN_3"
    }
  ],

  /*
   * AVIS CLIENTS — uniquement de vrais avis, de vrais acheteurs.
   * Format :
   *   { name: "Camille R.", city: "Lyon", rating: 5, date: "2026-11-02",
   *     text: "Texte de l'avis tel que reçu.", verified: true }
   * Tant que la liste est vide, le site affiche un encart
   * « Soyez parmi les premiers à donner votre avis ».
   */
  reviews: []
};
