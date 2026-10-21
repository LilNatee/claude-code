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
  productName: "Applicateur Massant Novéa",
  tagline: "Votre sérum directement à la racine, sans en mettre partout.",
  email: "nathanciano1@gmail.com",          // ← à remplacer par une adresse pro (ex. contact@ton-domaine.fr)
  delivery: "Livraison offerte en 5 à 10 jours ouvrés", // ← adapte selon ton fournisseur
  freeShippingText: "Livraison offerte en France",
  returnDays: 30,
  unitLabel: "pièce",

  // Photos de la galerie (la 1re est la principale). Mets tes fichiers dans assets/.
  photos: ["assets/photo-1.jpg", "assets/photo-2.jpg", "assets/photo-3.jpg", "assets/photo-4.jpg"],
  // Vidéo produit (optionnelle) : "assets/video.mp4". Laisse "" pour ne pas en afficher.
  video: "",
  videoPoster: "", // image affichée avant lecture (par défaut : 1re photo)

  // Offres (bundles). Le prix est en euros TTC.
  offers: [
    {
      id: "solo",
      qty: 1,
      title: "1 applicateur",
      subtitle: "Pour vous",
      price: 24.9,
      badge: "",
      paymentLink: "https://buy.stripe.com/REMPLACER_LIEN_1"
    },
    {
      id: "duo",
      qty: 2,
      title: "2 applicateurs",
      subtitle: "Une pour vous, une à offrir",
      price: 39.9,
      badge: "Le plus choisi",
      paymentLink: "https://buy.stripe.com/REMPLACER_LIEN_2"
    },
    {
      id: "trio",
      qty: 3,
      title: "3 applicateurs",
      subtitle: "Pour toute la famille",
      price: 49.9,
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
