# Art de Vivre — Caisse simplifiée : mise en ligne GitHub

Ce dossier contient la version complète prête pour GitHub Pages :
- index.html (appli simplifiée : 3 chambres, lignes texte / qté / tarif / total)
- sw.js (version v2 — force la mise à jour sur les téléphones)
- manifest.json
- icon-192.png, icon-512.png, apple-touch-icon.png

## Mise en ligne (dépôt existant)

1. Ouvre ton dépôt sur github.com.
2. Bouton **Add file** → **Upload files**.
3. Glisse les 6 fichiers (LISEZ-MOI facultatif).
4. **Commit changes** — les anciens fichiers portant le même nom sont remplacés automatiquement.

⚠️ Attention : lors du premier envoi, ton navigateur avait traduit les noms
(« icône-192.png » au lieu de « icon-192.png »). Si des fichiers avec des noms
traduits existent dans le dépôt, supprime-les (ouvrir le fichier → menu ⋯ →
Delete file) puis envoie ceux-ci.

## Vérifications

1. Le dépôt doit être **Public** (Settings → Danger Zone → Change visibility).
2. Pages activé : Settings → Pages → Deploy from a branch → main (principal) → / (root) → Save.
3. Attendre 1-2 minutes, puis ouvrir : https://TON-IDENTIFIANT.github.io/NOM-DU-DEPOT/

## Installation sur iPhone

1. Ouvrir le lien dans **Safari**.
2. Bouton Partager → **Sur l'écran d'accueil**.
3. Si l'ancienne version était déjà installée : supprimer l'icône et la
   réinstaller, ou fermer/rouvrir l'appli deux fois (le sw.js v2 rafraîchit le cache).

## Rappel données

Tout est stocké sur le téléphone (localStorage). Le bouton « Partager le récap »
permet d'envoyer le détail de la journée par SMS, WhatsApp ou email.
