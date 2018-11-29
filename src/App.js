import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const tasks = [
	"Créer un faux écran de login ( pas de vérification ni d'appel, username et password en dur OK) managé par redux - form",
	'Créer une autre page ( appelons la CRUDManager) sur laquelle on arrive après le login',
	'Gérer la persistance du login via redux ( si on recharge après login OK, on arrive sur CRUDMANAGER)',
	"CRUDManager doit afficher une liste d'éléments managés par redux. Ces éléments sont l'array data dans le fichier src/data.js",
	"CRUDManager doit permettre l'édition de chacun des éléments. On utilisera l'array countries ( dans src/data.js ) pour proposer un choix des pays via un <select>",
	'Toutes les modifications effectuées sur un item de cette collection devront être persistées en local.',
	"Sur une autre page : faire un appel vers l'API de votre choix et manager la réponse via redux également, tout en affichant une partie de son contenu ( on cherche ici à voir le travail via redux )",
	"le projet devra supporter sass, et l'object spread operator",
	"un readme est fourni avec les packages recommandés, de même que la liste des tâches mentionnée ici ( pour garder la trace de l'avancement ;)"
];

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hello ! Petit exercice donc :</p>
					<p>Que c'est quoi qu'il faut faire ?</p>
					<ul>
						{tasks.map(task => (
							<li>{task}</li>
						))}
					</ul>
					<p>Il vous reste 6 minutes, top chrono ;)</p>
				</header>
			</div>
		);
	}
}

export default App;
