## Avant de commencer :

- Forkez le projet, afin de faire une Pull Request une fois le test realisé.

## Pour lancer le projet :

```
npm run start
```

ou ( si installé )

```
yarn start
```

## TasksList

- [x]     Créer un faux écran de login ( pas de vérification ni d'appel, username et password en dur OK) managé par redux-form,
- [x] Créer une autre page ( appelons la CRUDManager) sur laquelle on arrive après le login
- [x]     Gérer la persistance du login via redux ( si on recharge après login OK, on arrive sur CRUDMANAGER),
- [x]     CRUDManager doit afficher une liste déléments managés par redux. Ces éléments sont l'array data dans le fichier src/data.js,
- [x]     CRUDManager doit permettre l'édition de chacun des éléments. On utilisera l'array countries ( dans src/data.js) pour proposer un choix des pays via un < select />,
- [x] Toutes les modifications effectuées sur un item de cette collection devront être persistées en local
- [x] Sur une autre page : faire un appel vers l'API de votre choix et manager la réponse via redux également, tout en affichant une partie de son contenu ( on cherche ici à voir le travail via redux ),
- [x]     le projet devra supporter sass, et l'object spread operator,

## Liste des packages recommandés :

- [x] redux
- [x] redux-form
- [x] redux-thunk
- [x] redux-persist
- [x] redux-friends
