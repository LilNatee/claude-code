# Gloop.io

Jeu .io dans le navigateur (style agar.io) : tu diriges un blob, tu manges des billes et les blobs plus petits, tu fuis les plus gros. Un seul fichier `index.html`, sans serveur ni installation. Il marche sur ordinateur et sur mobile.

- Souris ou doigt pour diriger
- Espace, clic maintenu ou bouton BOOST pour accélérer (ça coûte de la masse)
- 28 adversaires contrôlés par l'IA, classement, minimap, record sauvegardé
- Pub récompensée « Revivre » (une fois par partie) et pub entre les parties (une sur deux)

## Tester en local

Ouvre `index.html` dans ton navigateur. Sans régie configurée, les pubs sont simulées par un compte à rebours de 3 secondes.

## Gagner de l'argent : 3 options

Le code contient déjà un adaptateur (`Ads` dans `index.html`) qui détecte automatiquement CrazyGames, Poki ou Google. Tu n'as qu'à ajouter le script de la plateforme choisie dans le `<head>` (les lignes sont déjà écrites en commentaire).

### Option 1 (la plus simple pour débuter) : CrazyGames ou Poki

Ces portails ont des millions de joueurs par jour. Ils hébergent ton jeu, diffusent les pubs et te reversent une part des revenus. Tu n'as besoin ni de domaine ni de trafic à toi.

1. Crée un compte développeur : https://developer.crazygames.com ou https://developers.poki.com
2. Dans `index.html`, décommente la ligne du SDK de la plateforme.
3. Envoie le fichier (en .zip) via leur portail. Ils testent le jeu avant de le publier.

Poki est très sélectif. CrazyGames accepte plus facilement les premiers jeux. Ces deux portails interdisent les bannières dans le jeu : laisse `#ad-menu` vide.

### Option 2 : ton propre site .io avec Google AdSense (H5 Games Ads)

1. Achète un domaine `.io` (environ 35 à 60 € par an chez Namecheap, Porkbun, OVH…).
2. Héberge gratuitement le dossier `io-game/` sur GitHub Pages, Netlify ou Cloudflare Pages, puis relie ton domaine.
3. Demande l'accès à AdSense (https://adsense.google.com) puis au programme « H5 Games Ads ». Il faut un site en ligne avec du trafic et une page « Mentions légales / Confidentialité ».
4. Dans `index.html`, décommente le bloc AdSense et remplace `ca-pub-XXXXXXXXXXXXXXXX` par ton identifiant. Retire `data-adbreak-test="on"` une fois les tests terminés.
5. Ajoute le fichier `ads.txt` fourni par AdSense à la racine du site.
6. En Europe, il faut une bannière de consentement aux cookies (RGPD), par exemple celle proposée par AdSense (« Messages de confidentialité »).

C'est l'option qui rapporte le plus par joueur, mais c'est toi qui dois amener les joueurs (TikTok, YouTube Shorts, Reddit, Discord…).

### Option 3 : itch.io

Publie le jeu en HTML5 sur https://itch.io avec un prix libre (dons). Ça rapporte peu, mais c'est un bon moyen d'avoir des retours de joueurs.

## Ce qu'il faut savoir sur les revenus

Les pubs de jeux rapportent en général entre 1 et 10 € pour 1 000 parties, selon le pays des joueurs. Un jeu qui rapporte vraiment, c'est des dizaines de milliers de joueurs par jour. La plateforme compte donc plus que le code : commence par CrazyGames pour avoir des joueurs, puis améliore le jeu selon leurs statistiques.

## Idées pour la suite

- Vrai multijoueur en ligne (serveur Node.js + WebSocket ; un serveur coûte environ 5 € par mois)
- Skins à débloquer en regardant une pub récompensée
- Division du blob (touche W / double appui), comme dans agar.io
- Sons et musique
