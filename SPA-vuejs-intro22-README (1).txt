# Module JS/SPA - Vue.js

## Préambule

En préambule de ce module, familiarisez-vous avec le concept de Single Page Application (SPA). L'objectif est de répondre aux questions suivantes:
- Quand et pourquoi ce type d'applications a vu le jour ?
- Quels sont les avantages et inconvénients de cette approche ?
- Quels sont les principaux frameworks utilisés pour développer des "SPA" en 2021 ?

**Livrables**

1. Un schéma simplifié illustrant le fonctionnement d'une SPA.
2. Un tableau comparatif des principaux frameworks, comportant les informations suivantes :
    * Date de création
    * Communauté/entreprise assurant le développement
    * License
    * Points forts
    * Points faibles

## Mise en place des outils de développement Vue.js - première partie
Tout comme de nombreux frameworks web, Vue.js propose des outils permettant de faciliter le développement. Nous mettrons ici en place un premier outil permettant le diagnostique et l'introspection d'applications Vue.js - **Vue DevTools**.

### Extension de navigateur web - Vue DevTools
Installez l'extension Vue DevTools pour [Google Chrome] ou [Firefox].

[Google Chrome]: https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg
[Firefox]: https://github.com/vuejs/vue-devtools/releases/download/v6.0.0-beta.8/vuejs_devtools_beta-6.0.0.8-an+fx.xpi

**Notes** :
- Pour confirmer que l'extension est bien installée et fonctionnelle, rendez-vous par exemple sur le [site officiel de Vue.js](https://v3.vuejs.org/). Le site **n'est pas inspectable** avec les DevTools, mais étant une SPA Vue.js, l'icône des DevTools devrait s'afficher en vert et montrer que Vue.js a été détecté.

## Découverte de Vue.js
Pour commencer, nous allons prendre en main Vue.js en le chargeant simplement dans notre page, comme une librairie externe, comme on le ferait pour Bootstrap.

### Objectifs
- Constater la différence de logique entre du Javascript 'Vanilla' (simple, sans framework) et Vue.js
- Prendre en main les outils de développement de Vue.js
- Découvrir Vue.js avec des fonctionnalités simples
- Stocker la donnée de sa page dans l'objet data de Vue

### Consignes
- Découvrez les différences entre du Javascript 'Vanilla' et Vue.js en compararant ces exemples simples sur **Codepen** (cliquez sur les liens):
    * Capturer un texte entré dans un champ de saisie : [JS 'Vanilla'][1] | [Vue.js][2]
    * Ajouter/Enlever une classe sur un élément : [JS 'Vanilla'][3] | [Vue.js][4]
    * Afficher/Cacher un élément au clic sur un bouton : [JS 'Vanilla'][5] | [Vue.js][6]

[1]: https://codepen.io/igor-zac/pen/NWjZLQZ
[2]: https://codepen.io/romainpetit/pen/jJyaKx
[3]: https://codepen.io/igor-zac/pen/VwbJEmB
[4]: https://codepen.io/romainpetit/pen/XGpzyw
[5]: https://codepen.io/igor-zac/pen/ZEKdqXe
[6]: https://codepen.io/romainpetit/pen/MxJmOm

*Utilisez vos Vue DevTools pour comprendre le fonctionnement des exemples Vue.
Codepen Tip : Pour activer le mode vue pleine page, remplacez le chemin "/pen/..." par "/debug/..." dans l'URL des exemples. Cette vue vous permettra de lancer les Vue DevTools sur la page.

- Chargez la librairie Vue.js (en version 3.0) depuis un fichier externe, comme vous le feriez pour Bootstrap (en utilisant un CDN)
- Créez directement dans un fichier HTML votre première application Vue.js
- Rendez votre application réactive: affichez du texte qui sera renseigné depuis le Javascript, dans l'objet *data* de Vue
- Modifiez la valeur de votre *data* dans l'extension Vue DevTools

### Ressources
- Le guide de démarrage du site web Vue.js est très complet et à jour: https://v3.vuejs.org/guide/introduction.html.
- Les exemples interactifs proposés sur ce même site: https://v3.vuejs.org/examples/markdown.html.

### Livrables
Un projet en local utilisant Vue.js contenant:
- Un champ input permettant de mettre à jour le contenu d'une balise H1 à la modification d'un input text
> **Attention**: pas seulement quand l'input perd le focus, mais bien à chaque modification!
- Un champ input permettant de mettre à jour le contenu d'une balise H2 au clic sur un bouton
- Une checkbox permettant d'ajouter la classe "red" aux H1 et H2 quand elle est cochée
- Une checkbox pour afficher/masquer une image

**Questions complémentaires**: En comparant ce premier usage de Vue.js à vos réalisations précédentes avec Javascript, comment auriez vous pu procéder pour réaliser les mêmes fonctionnalités avec du Javascript 'Vanilla'? Quel est l'apport de Vue.js par rapport à ces alternatives?

## Mise en place des outils de développement Vue.js - deuxième partie
De manière similaire à de nombreux frameworks aujourd'hui, Vue.js propose un outil en ligne de commande, appelé CLI (pour Command Line Interface). Il s'agit d'un outil semblable à ce que peut proposer Laravel avec l'outil "Artisan", permettant d'intéragir avec le framework en ligne de commande. 
Dans le cadre de Vue.js, il s'agit de l'outil Vue CLI.

### Outil en ligne de commande Vue - Vue CLI
Commencez par installer l'outil `vue-cli` avec NPM:
```
npm install --global @vue/cli
```

**Question**: Rappelez ce qu'est NPM et pourquoi nous utilisons l'option `--global` ici?   
**Votre réponse**:   

Vérifiez que la version de Vue CLI installée est au moins la version 4.5 avec la commande:
```
vue --version
```

Une fois installé, Vue CLI est opérationnel et prêt à être utilisé. Il vous sera utile dans les phases suivantes pour créer vos projets Vue.js, mais également pour démarrer un serveur de développement pour tester les projets en question en local.

**Attention** : Bien que vous ayez exécuté la commande "vue" ci-dessus, *il s'agit ici de Vue CLI, l'outil en ligne de commande Vue*. Cet outil vient en complément du framework Vue.js, que nous allons utiliser dans sa version 3 par la suite.

## Un premier projet Vue.js

Vous allez maintenant créer un projet Vue.js basé sur un cas d'usage plus réaliste. Il s'agira ici de développer une application web qui affiche les relevés météo de villes au format liste et sur une carte interactive.

Le projet est à mener en autonomie (pas de travail en îlot).

### 1 - Création du projet

Pour créer votre projet, vous allez cette fois utiliser Vue CLI. À partir du répertoire parent souhaité pour votre projet, exécutez la commande:
```
vue create NOM_PROJET
```
Un certain nombre de questions vous seront posées à la création.   
Pour le choix du preset, sélectionnez l'option avec **Vue.js version 3**.  
Pour le package manager, sélectionnez **NPM**.   

Une fois le projet créé, prenez le temps de passer en revue les fichiers et dossiers créés dans votre répertoire projet. 
**Quels sont ceux que vous connaissez? Quelle est leur fonction?**   

À partir des instructions fournies dans le fichier README.md, démarrez votre application Vue.js pour le développement.

### 2 - Mise en lien des données avec l'affichage

Dans un premier temps, nous allons mettre l'écran d'accueil 'de côté' afin de manipuler un peu Vue.js.
Pour ce faire, rendez vous dans le composant Vue `HelloWorld.vue` situé dans `src/components/`. Dans ce composant. définissez comme `data` l'objet Javascript suivant: 
```js
{
    name: 'Ma ville', // nom de la ville
    weather: 'Peu nuageux', // descriptif météo 
    temperature: 20.55, // température en °C
    updatedAt: new Date() // date de dernière mise à jour
}
```

Modifiez ensuite le template du composant afin d'afficher les informations présentes dans l'objet `data`. Vous êtes libres de choisir le rendu du composant, du moment qu'il exploite les différents champs de l'objet `data` ci-dessus.
  
**Notes** :
- Pour afficher la date, la méthode [toLocaleString()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) de `Date()` devrait vous aider.

**Ressources** :
- Syntaxe des templates Vue: https://v3.vuejs.org/guide/template-syntax.html  
- Pour jouer un peu avec le fonctionnement des composants monofichiers: https://codesandbox.io/s/vue-todo-list-app-with-single-file-component-vzkl3?file=/src/App.vue

### 3 - Création d'un composant pour représenter la météo d'une ville

Jusqu'à présent, vous avez représenté la météo d'une ville d'après un objet javascript directement depuis `HelloWorld.vue`, mais cette méthode ne correspond pas à ce qu'on souhaite. À terme, `HelloWorld.vue` sera amené à avoir d'autres responsabilités. Pour cela, nous aimerions donc avoir un composant dédié à l'affichage des informations d'une ville, au lieu d'avoir tout le code affichant les informations directement dans `HelloWorld.vue`.   

Pour cela, créez un composant `City` qui encapsulera le code relatif à la ville écrit jusqu'à présent, et appelez ce nouveau composant depuis `HelloWorld.vue`.

**Notes** :
- Si vous ne changez pas le style, le rendu devrait être le même qu'auparavant.

**Ressources** :
- Bases relatives aux composants vue: https://v3.vuejs.org/guide/component-basics.html

### 4 - Transformation du composant `City` en composant réutilisable

#### 4.1) Paramétrage de votre composant avec des props

En suivant le design de l'application jusqu'à présent, vous avez normalement un composant `City` qui contient les données qu'il doit afficher dans sa propriété `data`.   
Seulement voilà, ce n'est pas idéal si on veut monter en volume. En effet, si on souhaite afficher plusieurs villes, il nous faudrait écrire  autant de composants `City` que nous avons de villes à afficher, chacun avec sa propre propriété `data`.
Ce que nous aimerions avoir, c'est un composant `City` **réutilisable**, que l'on viendrait paramétrer avec des données lorsqu'on l'utilise. Nous pourrions ainsi réutiliser le même composant `City` pour chaque ville à afficher, simplement en lui passant des informations différentes pour chaque ville.  

C'est la tout l'intérêt des **props**, qui sont un mécanisme permettant de paramétrer un composant avec des données.

Modifiez votre code, afin que:
- L'objet `data` actuellement dans `City` soit remonté dans `HelloWorld`
- Le composant `HelloWorld` passe les données de `data` au composant `City` via des **props**.

**Notes** :
- Si vous ne changez pas le style, le rendu devrait être le même qu'auparavant.

**Ressources** :
- Passer des données via des props: https://v3.vuejs.org/guide/component-basics.html#passing-data-to-child-components-with-props
- Documentation détaillée sur les props: https://v3.vuejs.org/guide/component-props.html 

#### 4.2) Mise en forme des dates

Un timestamp complet n'est pas agréable à lire, encore moins s'il est destiné à ultimement être répété dans une liste. La librairie `timeago.js` nous permet de formatter les dates pour afficher un temps relatif, plus parlant.

Ajoutez la librairie à votre projet avec NPM pour afficher la valeur de `updatedAt` avec un temps relatif.

**Ressouces** :
- Utiliser des données calculées/transformées: https://v3.vuejs.org/guide/computed.html
- Lien vers le github de la librairie: https://github.com/hustcc/timeago.js
> Il est toujours essentiel de pouvoir évaluer un package ou un projet sur github ou npm avant de l'utiliser

**Question :** Prenez le temps de regarder la page github de timeago.js, qu'est ce qui vous inspire confiance, ou au contraire, méfiance?  

**Votre réponse :** 

### 5 - Affichage des météos de plusieurs villes

Afin d'étendre les capacité de votre application, il serait intéressant de pouvoir afficher la météo de plusieurs villes.

#### 5.1) Changement du nom de `HelloWorld`

Etant donné que le composant `HelloWorld` va afficher les météos de plusieurs villes, il est souhaitable de changer son nom, afin qu'il reflète mieux l'utilité du composant.  

Renommez ce composant en `CitiesList` et assurez vous que votre application est toujours fonctionnelle.

#### 5.2) Affichage des météos de plusieurs villes en réutilisant un même composant

Tout est désormais prêt pour qu'on puisse afficher les météos de plusieurs villes.

Nous n'avons pour l'instant qu'une seule météo, si nous souhaitons en afficher plusieurs, il nous faut donc ajouter de la donnée.

Modifiez le composant `CitiesList` pour que son objet `data` contienne l'objet suivant :
```js
{
  cities: [
    {
      id: 1,
      name: 'Ville 1',
      weather: 'Ensoleillé',
      temperature: 22.0,
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Ville 2',
      weather: 'Peu nuageux',
      temperature: 19.5,
      updatedAt: new Date()
    }
  ]
}
```

Avec maintenant suffisamment de données, nous pouvons afficher les météos de chaque ville.

Bouclez sur les nouvelles données pour appeler autant de fois le composant `City` qu'il y a d'objets dans le nouveau `data` de `CitiesList`.

**Question :** Remarquez que nous avons ajouté une clef `id` à nos objets, pourquoi ?

**Votre réponse :**

Modifiez un peu le style si besoin pour que les éléments de la liste soient mieux visibles et bien distincts.
  
**Ressouces** :
- Boucler sur de la donnée: https://v3.vuejs.org/guide/list.html

### 6 - Mise en place d'un routeur

Jusqu'à présent, nous avons uniquement une seule page sur notre SPA, mais à terme nous aimerions avoir une vraie application, avec possibilité de naviguer et voir d'autres pages.
Nous avons donc besoin d'un moyen pour mettre en place une navigation sur l'application, sans recharger la page et sans afficher une nouvelle page HTML.  
Pour cela nous allons devoir mettre en place **un routeur**.

C'est la même chose qu'avec le framework Laravel, sauf qu'ici le routeur est côté client et non côté serveur: nous devons définir nos routes côté client et avoir moyen d'en changer.

Cela tombe bien, Vue.js a un routeur prêt à l'emploi que nous allons utiliser, [vue-routeur](https://next.router.vuejs.org/introduction.html).

#### 6.1) Installation

Faites l'installation avec NPM, comme décrit dans la documentation.  
Dans `src/`, créez un dossier `router/` dans lequel vous créerez un fichier `index.js`.
Il s'agira du fichier de configuration du routeur.

Dans ce fichier, nous allons instancier un routeur vue et l'exporter :
```js
import { createRouter } from 'vue-router'

const router = createRouter({})

export default router
```

Modifiez maintenat le fichier `main.js` afin d'utiliser le routeur nouvellement ajouté.

Pour cela, modifiez le code afin que le résultat de `createApp(App)` soit stocké dans une variable `app`, suite à quoi ajoutez la ligne suivante :
```js
app.use(router)
```

**Notes** :
- L'objet `router` du code ci-dessus représente l'objet importé depuis `router/index.js`
- N'oubliez pas le `mount(#app)` sur votre nouvel objet `app`, sinon votre application ne fonctionnera plus!

#### 6.2) Configuration

Une fois le router installé et prêt à l'emploi, nous voulons maintenant déclarer une route `/cities'` affichant la liste des villes.

Déclarez votre tableau de routes dans le fichier `index.js` du répertoire `router`, en faisant référence au composant `CitiesList`.

Initialisez l'objet routeur avec le tableau de routes à la création.

Supprimez enfin le composant `CitiesList` du template de votre composant `App`. 

**Ressources** :
- Instanciation et configuration du routeur : https://next.router.vuejs.org/guide/#javascript

#### 6.3) Utilisation

Maintenant que le routage est en place et fonctionnel, il ne nous reste plus qu'à implémenter la navigation dans l'application! 
Pour cela, nous devons utiliser les deux composants fournis par VueRouter :
- `<router-view></router-view>` permet d'afficher le contenu de la route correspondant au composant spécifié dans la déclaration.
- `<router-link to=""></router-link>` permet de naviguer d'une page à l'autre

Pour rendre l'exemple un peu plus intéressant, ajoutez un composant `Home` qui représentera votre page d'accueil. Ajoutez également une route `/` vers votre nouveau composant dans la configuration du routeur.

**Notes** :
- Ne vous attardez pas trop sur la page d'accueil. Son unique but pour l'instant est de rajouter un chemin à la navigation.

Ajoutez maintenant `<router-view></router-view>` à la fin du template de votre composant `App`, et utilisez `<router-link to="MA_ROUTE"></router-link>` pour passer d'une page à l'autre dans le même composant.

En vous rendant à l'url `/cities`, vous devriez retomber sur le même écran que vous aviez précédemment, avant la mise en place du routeur.

#### 6.4) [OPTIONNEL] Ajout d'une redirection

De manière similaire à de nombreux sites aujourd'hui, nous aimerions que notre page d'accueil se situe à l'URL `/home`. Mais afin de ne pas mettre en défaut la navigation du site en affichant une erreur pour l'adresse `/`, nous aimerions que tout utilisateur voulant se rendre à l'adresse `/` soit **automatiquement redirigé** vers la page `/home`.

Mettez en place une redirection entre `/` et `/home`.

**Notes** :
- On souhaite mettre en place une **redirection** et non une redondance. Si l'utilisateur se rend sur `/`, on ne veut pas simplement afficher la même page que `/home`, mais bien le **rediriger** vers `/home`.

### 7 - [OPTIONNEL] Récupération des données via une API externe

Jusqu'ici, les données météo étaient codées "en dur" dans les composants Vue.js. Pour rendre notre application plus concrète et réaliste, nous allons désormais faire appel à une API pour récupérer de véritables relevés météo des villes de la région.

Pour cela, nous allons utiliser l'API [OpenWeatherMap](https://openweathermap.org/api). Cette dernière vous permettra de récupérer des données météo en ciblant un périmètre géographique.  

Pour effectuer un test d'appel à l'API, récupérez d'abord une clé API auprès de la formatrice ou du formateur (ou créez un [compte gratuit OpenWeatherMap](https://home.openweathermap.org/users/sign_up)), puis accédez  à l'URL suivante: https://api.openweathermap.org/data/2.5/find?lat=45.188&lon=5.724&cnt=20&cluster=yes&lang=fr&units=metric&APPID=VOTRE_CLE_API

Quel est le format de retour des données de l'API? Quels sont les champs qui vont vous permettre de récupérer les données météo recherchées ?

#### 7.1) Installation d'une librairie permettant de faire des appels HTTP

Pour pouvoir faire des appels à une API, Vue.js préconise l'utilisation de la librairie [axios](https://github.com/axios/axios).

Prenez le temps d'analyser cette librairie sur GitHub, qu'est ce qui vous inspire confiance? Ayez le réflexe de chercher la librairie sur [NPM](https://www.npmjs.com/package/axios), notamment pour voir le nombre de téléchargements.

Une fois la librairie analysée et validée :
- Intallez la librairie avec NPM
- Prenez connaissance du [tutoriel Vue.js pour utiliser axios dans une application Vue](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html) (documentation pour Vue 2, mais valable pour Vue 3), ainsi que du [README de la page GitHub Axios](https://github.com/axios/axios)

#### 7.2) Utilisation dans le projet

Au préalable, (re)lisez le [guide MDN sur les promesses en Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses), car ces dernières vont être importantes pour la suite.

Nous souhaitons afficher la liste des données météo des villes provenant de cette URL: https://api.openweathermap.org/data/2.5/find?lat=45.188&lon=5.724&cnt=20&cluster=yes&lang=fr&units=metric&APPID=VOTRE_CLE_API

> **Attention**, veillez à bien indiquer votre clé API OpenWeatherMap dans l'URL ci-dessus!

Comme vous avez pu le voir, une promesse a plusieurs états:
- En cours
- Terminée avec succès
- Terminée avec erreur

Nous souhaitons être en mesure de suivre ces états dans notre composant, par conséquent ajoutez à l'objet `data` deux propriétés `loading` et `error`, destinées à nous permettre de savoir si la requête est en cours, et si il y a eu une erreur.

Veillez aussi à retirer les données des villes que nous avons mis jusqu'à présent "en dur" dans l'objet `data`, car avec l'API nous n'en avons plus besoin!  

Votre `data` devrait désormais ressembler à ça:
```js
data: function() {
         return {
            cities: [], // au début la liste des villes est vide
            loading: false,
            error: null
         }
      }
```

Enfin, une fois toute cette structure en place, il nous reste un dernier problème à résoudre, qui est **"Quand lancer la requête ?"**. 
La solution communément admise est de dire **"Quand le composant est créé."**.
  
Vue.js nous permet en effet de déclencher des actions (via des _hooks_) à certains moments précis de la vie d'un composant. La liste est disponible [ici](https://v3.vuejs.org/api/options-lifecycle-hooks.html). Celui qui nous intéresse est le hook `created`.

Après toute cette mise en place, et fort.e.s de ces nouvelles connaissances :
- Ajoutez un appel http avec axios permettant d'afficher la liste des données météo des villes, obtenue depuis OpenWeatherMap
- Faites en sorte d'afficher un texte `Requête en cours` si jamais la requête est en cours, et une erreur en rouge si la requête produit une erreur

### 8 - [OPTIONNEL] Affichage sur une carte interactive

Afin de rendre notre application encore plus utile, il pourrait être intéressant de pouvoir visualiser les villes et la météo associée sur une carte. C'est ce que nous allons essayer de réaliser ici, en affichant chaque ville a l'aide d'un marqueur.

#### 8.1) Ajout d'une page dédiée

Commencez par ajouter un nouveau composant `CitiesMap` à votre projet. Associez-le à la route '/map' de votre application.

#### 8.2) Ajout de la carte

Pour générer une carte interactive, nous allons utiliser la librairie [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides/) via le composant [Vue Mapbox GL](https://github.com/phegman/vue-mapbox-gl).  
Pour intégrer cette carte au sein de votre application, il vous faudra :
- Récupérer un _access token_ pour Mapbox auprès de la formatrice/du formateur
- [Installer Mapbox GL JS](https://www.mapbox.com/install/js/bundler-install/) avec NPM
- [Installer Vue Mapbox GL](https://github.com/phegman/vue-mapbox-gl#npm) avec NPM 

Une fois les éléments installés et le token récupéré, procédez à la mise en place de la carte dans le composant `CitiesMap`.

**Notes** :
- N'oubliez pas [l'étape](https://github.com/phegman/vue-mapbox-gl#importing-mapbox-gl-js-with-webpack) qui consiste à modifier (ou créer) le fichier `vue.config.js` à la racine du projet
- Prenez le temps de jouer sur les paramètres du composant `mapbox` pour les comprendre et ajuster votre carte au besoin

**Ressources** :
- Création d'une carte : https://github.com/phegman/vue-mapbox-gl#setup

#### 8.3) Ajout des marqueurs

Nous allons maintenant ajouter un marqueur sur la carte pour chacune des villes récupérées jusque là depuis l'API.  
Pour cela :
- Récupérez la liste des données météo dans un tableau `cities` de votre composant `CitiesMap` (comme vous l'avez fait pour `CitiesList`)
- Affichez des marqueurs en bouclant sur les résultats, en exploitant les coordonnées GPS fournies pour chaque ville dans l'API OpenWeatherMap

Pour afficher un marqueur sur la carte, vous pourrez utiliser l'évènement `map-load` mis à disposition par `vue-mapbox-gl`, avec un callback similaire à l'exemple suivant:
```js
export defaults {
   ...,
   methods: {
      loaded(map) {
         let myMarkerDomElement = document.createElement('div');
         myMarkerDomElement.className = 'marker';
         
         new mapboxgl.Marker({
            element: myMarkerDomElement
         }).setLngLat([30.5, 50.5])
         .addTo(map);
      }
   }
}
```

Vous pouvez ensuite customiser le marker en agissant sur le style de la class appliquée à l'élément créé ci-dessus.  
Pour le moment, utilisez un rendu commun à tous les marqueurs, par exemple :
```css
#map .marker {
  border: 2px solid rgba(255, 0, 0, 0.5);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
```

**Ressources** :
- Méthodes dans un composant Vue : https://v3.vuejs.org/guide/data-methods.html#methods
- Réaction aux évènements dans un composant Vue : https://v3.vuejs.org/guide/events.html
- Évènements dans Vue Mapbox GL : https://github.com/phegman/vue-mapbox-gl#map-events

#### 8.4) Affichage des données météo

Maintenant que chaque ville est représentée par un marqueur sur la carte, nous allons pouvoir remplacer les marqueurs génériques par un pictogramme représentant la météo directement sur la carte.

À l'aide de code CSS et des informations récupérées depuis l'API, affichez pour chaque ville un marqueur qui représentera la météo de la ville (soleil, nuages, pluie, ...).

