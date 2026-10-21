# Novéa — boutique dropshipping prête à l'emploi

Site one-product pour la **brosse massante cuir chevelu LED avec réservoir à sérum**, avec paiement Stripe,
pages légales françaises et toute la stratégie de lancement.

## Contenu

| Fichier | Rôle |
|---|---|
| `site/` | Le site complet (HTML/CSS/JS, aucune dépendance). À glisser tel quel sur Netlify. |
| `site/config.js` | **Le seul fichier à modifier** : prix, liens Stripe, e-mail, délai, avis clients. |
| `docs/1-PRODUIT-FOURNISSEUR-PRIX.md` | Pourquoi ce produit, quel fournisseur, calcul des prix et des marges. |
| `docs/2-STRATEGIE-PUB.md` | Stratégie pub gratuite puis micro-budget. |
| `docs/3-PLAN-ACTION.md` | **Commence ici** : la checklist de tout ce que tu dois faire toi-même. |

## Aperçu local

Double-clique sur `site/index.html`, ou :

```bash
cd dropshipping-site/site && python3 -m http.server 8000
# puis ouvre http://localhost:8000
```

## Comment fonctionne l'achat

1. Le client choisit 1, 2 ou 3 brosses et clique sur « Commander ».
2. Il est envoyé sur la page de paiement **Stripe** (CB, Apple Pay, Google Pay) qui collecte son adresse.
3. Après paiement, il revient sur `merci.html` et reçoit son reçu par e-mail.
4. Tu reçois la commande par e-mail et la passes chez le fournisseur (voir plan d'action, étape 7).

Tant que les liens Stripe ne sont pas renseignés dans `config.js`, le bouton affiche un message
« boutique en cours de configuration ».
