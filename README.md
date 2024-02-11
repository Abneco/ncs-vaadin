# NcsVaadin : Wrapper Angular pour Composants Vaadin (alpha)

- Angular 17.1.0
- Intellij
- vaadin core library sous licence Apache License 2.0.

### Introduction

Ce projet vise à créer un ensemble de composants Angular qui servent de wrapper pour les composants open source Vaadin, facilitant ainsi leur intégration dans les applications Angular.

Documentation des web components vaadin
<br>
https://vaadin.com/docs/latest/components
<br>
https://github.com/vaadin/web-components?tab=readme-ov-file

### Questions et Support

Pour toute question ou demande de support, n'hésitez pas à ouvrir une issue sur GitHub. Étant actuellement la seule personne à travailler sur ce projet, je ferai de mon mieux pour examiner et répondre aux issues en fonction de mes disponibilités. Votre patience est appréciée.

### Accessibilité

Le choix d'utiliser le français en priorité pour ce projet reflète une volonté de soutenir et d'encourager la diversité linguistique dans la communauté du développement logiciel. En fournissant une documentation et un support en français, nous visons à rendre le projet plus accessible à la communauté francophone.


### Note de version

Utilisation d'un système proche de Semantic Versioning `SemVer` https://semver.org/spec/v2.0.0.html
Semantic Versioning est une convention populaire pour nommer les versions de logiciels. Elle suit le format `MAJOR(WITH YEAR).MINOR.PATCH` :
- `MAJOR -> 2023.1` change lors de mises à jour incompatibles avec les versions précédentes,
- `MINOR -> x.1.x` change lors de l'ajout de nouvelles fonctionnalités compatibles avec les versions précédentes,
- `PATCH -> x.x.1` change lors de corrections de bugs compatibles avec les versions précédentes.

Préfixe : `ncs-vaadin` sert de préfixe pour identifier clairement le monorepo. -> Les modules évoluent ensemble, c'est pourquoi je ne référence pas les sous-modules.

Ajout de `-alpha`, `-beta`, ou `-rc` (pour `release candidate`) indique clairement le stade de développement de la version.

`1.0.0-beta` La phase beta est principalement destinée aux tests d'utilisation et à la découverte de bugs. Elle est souvent la première fois que le logiciel est exposé à un public plus large en dehors de l'équipe de développement.

`1.0.0-rc.1` Les versions Release Candidate sont des versions presque finales du logiciel, prêtes à être publiées à moins que des bugs critiques ne soient découverts. Elles sont plus proches de la version finale en termes de stabilité et de fonctionnalités.

`1.0.0` est une version finale officielle

Les numéros qui suivent beta ou rc dans les noms de version, sont utilisés pour identifier différentes itérations ou étapes au sein de ces phases de développement spécifiques.


````text
ncs-vaadin-v2024.1.0.0-alpha
ncs-vaadin-v2024.1.0.0-alpha.2
ncs-vaadin-v2024.1.0.0-alpha.3
ncs-vaadin-v2024.1.0.0-alpha.20
ncs-vaadin-v2024.1.0.0-alpha.152
ncs-vaadin-v2024.1.0.0-alpha.beta
ncs-vaadin-v2024.1.0.0-beta
ncs-vaadin-v2024.1.0.0-beta.2
ncs-vaadin-v2024.1.0.0-beta.11
ncs-vaadin-v2024.1.0.0-pre-release
ncs-vaadin-v2024.1.0.0-rc.1
ncs-vaadin-v2024.1.0.0-rc.2
ncs-vaadin-v2024.1.0.0
````


### CHANGELOG
Ajout d'une ligne correspondante dans le fichier changelog.md en respectant la convention suivante : https://keepachangelog.com/fr/1.1.0/

