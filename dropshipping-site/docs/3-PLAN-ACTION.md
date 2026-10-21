# 3. Ton plan d'action, étape par étape

Coche au fur et à mesure. Temps estimé pour être en ligne : **1 à 2 semaines** (surtout l'attente de l'échantillon).

---

## Étape 1 — Statut légal (jour 1, gratuit)

- [ ] Créer ta **micro-entreprise** sur [formalites.entreprises.gouv.fr](https://formalites.entreprises.gouv.fr) — activité : *vente à distance sur catalogue spécialisé / commerce de détail en ligne*. Tu reçois ton SIRET sous ≈ 1-2 semaines.
- [ ] Ouvrir un **compte bancaire dédié** (gratuit en banque en ligne). Obligatoire dès 10 000 € de CA 2 années de suite, mais fais-le tout de suite : c'est plus simple.
- [ ] Choisir un **médiateur de la consommation** (obligatoire, ≈ 50-100 €/an, ex. CNPM, Médicys…) — à indiquer dans les CGV.
- [ ] S'inscrire auprès d'un éco-organisme DEEE (**ecosystem** ou **Ecologic**) pour obtenir ton **IDU** (appareil électrique).
- [ ] Vérifier la disponibilité du nom « Novéa » sur [data.inpi.fr](https://data.inpi.fr) (classe 8/21/3). S'il est pris, change-le dans `config.js` et dans les fichiers HTML (rechercher/remplacer « Novéa »).

## Étape 2 — Fournisseur et échantillon (jours 1 à 10, ≈ 25 €)

- [ ] Créer un compte gratuit sur **CJdropshipping**.
- [ ] Sélectionner 2 fiches produit selon la méthode du fichier `1-PRODUIT-FOURNISSEUR-PRIX.md`.
- [ ] Commander **1 échantillon de chaque**, livré chez toi.
- [ ] À réception : tester, choisir le meilleur, vérifier CE + notice FR + mentions GPSR.
- [ ] Noter le **coût réel livré** et ajuster les prix dans `site/config.js` si besoin (garde ≥ 60 % de marge brute).
- [ ] Mettre à jour le tableau « Caractéristiques » de `site/index.html` avec les vraies specs du modèle choisi.
- [ ] Mettre à jour le délai `delivery` dans `site/config.js` selon le délai réel annoncé par CJ.

## Étape 3 — Photos et vidéos (jour de réception, 0 €)

- [ ] Prendre **5 à 6 photos** sur fond clair (lumière du jour, près d'une fenêtre) : produit seul, en main, réservoir, lumière allumée, dans la boîte, en situation.
- [ ] Recadrer en carré (1200×1200), enregistrer dans `site/assets/` (`photo-1.jpg`, `photo-2.jpg`…).
- [ ] Dans `site/index.html`, remplacer `assets/product.svg` par `assets/photo-1.jpg` et décommenter/ajouter les miniatures.
- [ ] Filmer **20 vidéos courtes d'un coup** (voir `2-STRATEGIE-PUB.md`) — tu auras du stock pour 1 semaine.

> Tu peux aussi utiliser les photos fournies par CJ au début, mais tes propres photos inspirent beaucoup plus confiance.

## Étape 4 — Paiement Stripe (1 h, 0 € d'abonnement)

- [ ] Créer un compte sur [stripe.com](https://stripe.com) (pays : France), activer le compte avec ton SIRET et ton IBAN.
- [ ] Dans **Catalogue de produits** : créer le produit « Brosse massante Novéa LED » avec **3 prix** : 39,90 € / 64,90 € (lot de 2) / 84,90 € (lot de 3).
- [ ] Créer **3 Liens de paiement** (*Payment Links*), un par prix. Pour chacun, dans les options :
  - ✅ Collecter l'**adresse de livraison** → pays autorisés : **France** (ajoute Belgique/Suisse plus tard si tu veux)
  - ✅ Exiger le **numéro de téléphone** (utile au transporteur)
  - ✅ Autoriser les **codes promotionnels**
  - Quantité : **non modifiable**
  - Après le paiement → **Rediriger vers ton site** : `https://TON-DOMAINE/merci.html`
- [ ] Copier les 3 liens (`https://buy.stripe.com/...`) dans `site/config.js` à la place des `REMPLACER_LIEN_…`.
- [ ] Paramètres → **E-mails clients** : activer « Paiements réussis » (le client reçoit son reçu automatiquement).
- [ ] Activer **Apple Pay / Google Pay** (Paramètres → Moyens de paiement) — souvent actifs par défaut.
- [ ] Faire **un achat test en mode test** (carte `4242 4242 4242 4242`), puis un vrai achat à 1 € avec un lien temporaire, et te rembourser.

## Étape 5 — Compléter le site (30 min)

- [ ] `site/config.js` : e-mail, délai de livraison, liens Stripe.
- [ ] `site/mentions-legales.html`, `site/cgv.html`, `site/confidentialite.html` : remplacer tous les `[crochets]` (nom, SIRET, adresse, médiateur, hébergeur), puis **supprimer l'encadré jaune « Modèle à compléter »**.
- [ ] Si tu es en franchise de TVA : laisse « TVA non applicable, art. 293 B du CGI » et vérifie le seuil en vigueur sur impots.gouv.fr.
- [ ] Ouvrir `site/index.html` dans ton navigateur pour vérifier.

## Étape 6 — Mise en ligne (30 min, ≈ 10 €/an)

- [ ] Acheter un nom de domaine (OVH, Gandi, Namecheap…), ex. `novea-shop.fr`.
- [ ] Créer une adresse e-mail pro (souvent incluse chez OVH, ou Zoho Mail gratuit) : `contact@ton-domaine.fr`.
- [ ] Héberger gratuitement sur **Netlify** : va sur [app.netlify.com/drop](https://app.netlify.com/drop) et **glisse le dossier `site`**. C'est en ligne en 30 secondes.
- [ ] Netlify → *Domain settings* → ajouter ton domaine, suivre les instructions DNS. Le HTTPS (cadenas) est automatique.
- [ ] Mettre à jour l'URL de redirection des 3 liens Stripe avec ton vrai domaine.
- [ ] Tester un achat de bout en bout sur téléphone.

## Étape 7 — Traiter une commande (à chaque vente, 5 min)

1. Tu reçois un e-mail Stripe « Nouveau paiement ». Le dossier client contient nom, adresse, téléphone.
2. Sur CJ : *Create order* manuel → coller l'adresse → payer la commande fournisseur.
3. Quand CJ te donne le **numéro de suivi** (1-3 jours), envoie-le au client :

   > Bonjour [prénom],
   > Bonne nouvelle : votre brosse Novéa est en route ! 📦
   > Suivi : [lien de suivi]
   > Livraison estimée : [date]. Une question ? Répondez simplement à cet e-mail.
   > L'équipe Novéa

4. Garde un tableau (Google Sheets) : date, client, montant, coût CJ, n° de suivi, statut. Ça te sert pour la déclaration URSSAF (mensuelle ou trimestrielle).

> Quand tu dépasses ≈ 10 commandes/jour, passe sur Shopify + l'appli CJ pour automatiser. Le site actuel te permet de valider le produit sans payer 30 €/mois avant d'avoir vendu.

## Étape 8 — Obtenir tes premiers VRAIS avis (semaines 2 à 6)

- [ ] Créer un **Google Form** « Votre avis sur Novéa » (note 1-5, texte, prénom + initiale, ville, accord pour publication).
- [ ] **J+10 après livraison**, envoyer à chaque client :

  > Bonjour [prénom], vous utilisez votre brosse depuis quelques jours : qu'en pensez-vous ?
  > Votre avis (30 secondes) aide énormément une jeune marque : [lien Google Form]
  > Pour vous remercier, voici -10 % pour un proche : MERCI10

- [ ] Ajouter chaque avis reçu **tel quel** dans `site/config.js` → `reviews` (avec `verified: true`). Le site calcule la note moyenne tout seul. Publie aussi les avis moyens : un 4/5 rend les 5/5 crédibles.
- [ ] Les influenceurs/testeurs qui ont reçu le produit gratuitement peuvent laisser un avis, **à condition de l'indiquer** (ajoute « (produit offert) » après le nom).
- [ ] Créer une page **Trustpilot** gratuite plus tard : des avis sur une plateforme indépendante rassurent beaucoup.

> Pourquoi pas de faux avis : c'est une pratique commerciale trompeuse (jusqu'à 2 ans de prison et 300 000 € d'amende), la DGCCRF contrôle activement les boutiques de dropshipping, et Stripe/TikTok peuvent fermer ton compte. Un site neuf avec « soyez parmi les premiers » + garantie 30 jours convertit très bien.

## Étape 9 — Lancer la pub (à partir de la semaine 2)

- [ ] Suivre `2-STRATEGIE-PUB.md`.
- [ ] Créer dans Stripe les codes promo influenceurs (*Produits → Coupons → Codes promotionnels*), ex. `LEA15`.
- [ ] **Avant d'ajouter un pixel (TikTok/Meta) ou Google Analytics**, ajouter un bandeau de consentement cookies (ex. gratuit : *Tarteaucitron.js*). Sans pixel, pas besoin de bandeau.

## Étape 10 — Routine hebdomadaire

- [ ] Chaque jour : 2-3 vidéos, répondre aux messages sous 24 h, traiter les commandes.
- [ ] Chaque semaine : regarder quelle vidéo a fait le plus de ventes, en refaire 5 du même style.
- [ ] Chaque mois : déclarer ton CA à l'URSSAF, renégocier le prix avec l'agent CJ dès 50 commandes/mois.
