
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

- [ ] 	Créer un faux écran de login ( pas de vérification ni d'appel, username et password en dur OK) managé par redux-form,
- [ ]   Créer une autre page ( appelons la CRUDManager) sur laquelle on arrive après le login
- [ ] 	Gérer la persistance du login via redux ( si on recharge après login OK, on arrive sur CRUDMANAGER),
- [ ] 	CRUDManager doit afficher une liste déléments managés par redux. Ces éléments sont l'array data dans le fichier src/data.js,
- [ ] 	CRUDManager doit permettre l'édition de chacun des éléments. On utilisera l'array countries ( dans src/data.js) pour proposer un choix des pays via un < select />,
- [ ]   Toutes les modifications effectuées sur un item de cette collection devront être persistées en local
- [ ]   Sur une autre page : faire un appel vers l'API de votre choix et manager la réponse via redux également, tout en affichant une partie de son contenu ( on cherche ici à voir le travail via redux ),
- [ ] 	le projet devra supporter sass, et l'object spread operator,


## Liste des packages recommandés :

- [ ] redux
- [ ] redux-form
- [ ] redux-thunk
- [ ] redux-persist
- [ ] redux-friends