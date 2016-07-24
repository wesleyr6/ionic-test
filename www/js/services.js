angular.module('starter.services', [])

.factory('Chats', function() {
	var chats = [{
		id: 0,
		name: 'Marcelo Gervasio',
		lastText: 'Batman Arkan City',
		face: 'img/marcelo.jpg'
	}, {
		id: 1,
		name: 'Bruno Nascimento',
		lastText: 'Boneco Hulk',
		face: 'img/bruno.jpg'
	}, {
		id: 2,
		name: 'Rodrigo Puzzello',
		lastText: 'Volkswagem Fusca',
		face: 'img/rodrigo.jpg'
	}, {
		id: 3,
		name: 'César Matias',
		lastText: 'FIFA 17 PS4',
		face: 'img/cesar.jpg'
	}, {
		id: 4,
		name: 'Daniel Kono',
		lastText: 'Batman Arkan City',
		face: 'img/kono.jpg'
	}, {
		id: 5,
		name: 'Danilo Papp',
		lastText: 'Boneco Thor',
		face: 'img/danilo.jpg'
	}, {
		id: 6,
		name: 'Daniel Rocha ',
		lastText: 'Batman Arkan City',
		face: 'img/daniel.jpg'
	}, {
		id: 7,
		name: 'Boaz Trindade',
		lastText: 'Batman Arkan City',
		face: 'img/boaz.jpg'
	}];

	return {
		all: function() {
			return chats;
		},
		remove: function(chat) {
			chats.splice(chats.indexOf(chat), 1);
		},
		get: function(chatId) {
			for (var i = 0; i < chats.length; i++) {
				if (chats[i].id === parseInt(chatId)) {
					return chats[i];
				}
			}
			return null;
		}
	};
})

.factory('Account', function() {
	var accountItems = [{
		id: 0,
		name: 'Diablo III',
		category: 'Games',
		description: 'PC',
		photo: 'img/diablo3.jpg'
	}, {
		id: 1,
		name: 'FIFA 17',
		category: 'Games',
		description: 'PS4',
		photo: 'img/fifa17.jpg'
	}];

	return {
		all: function() {
			return accountItems;
		}
	};
})

.factory('Products', function() {
	var products = [
		{
			id: 0,
			category: 'Games',
			description: 'Diablo III',
			platform: 'PC',
			photo: 'img/diablo3.jpg'
		},

		{
			id: 1,
			category: 'Games',
			description: 'Batman Arkan City',
			platform: 'Xbox',
			photo: 'img/batman.jpg'
		},

		{
			id: 2,
			category: 'Games',
			description: 'Counter Strike Source',
			platform: 'PC',
			photo: 'img/cs.jpg'
		},

		{
			id: 3,
			category: 'Games',
			description: 'FIFA 17',
			platform: 'PS4',
			photo: 'img/fifa17.jpg'
		},

		{
			id: 4,
			category: 'Games',
			description: 'GTA IV',
			platform: 'PS4',
			photo: 'img/gta5.jpg'
		},

		{
			id: 5,
			category: 'Colecionáveis',
			description: 'Boneco Hulk Marvel',
			platform: '',
			photo: 'img/hulk.jpg'
		},

		{
			id: 6,
			category: 'Colecionáveis',
			description: 'Boneco Capitão América',
			platform: '',
			photo: 'img/capitao-america.jpg'
		},

		{
			id: 7,
			category: 'Colecionáveis',
			description: 'Boneco Thor Vingadores',
			platform: '',
			photo: 'img/thor.jpg'
		},

		{
			id: 8,
			category: 'Colecionáveis',
			description: 'Carro Batman Batmóvel',
			platform: '',
			photo: 'img/batmovel.jpg'
		}
	];

	return {
		all: function(pageTitle) {
			var items = [];

			for ( i = 0; i < products.length; i++ ) {
				if ( products[i].category == pageTitle ) {
					items.push(products[i]);
				}
			}

			return items;
		}
	};
})

.factory('Match', function() {
	var match = [
		{
			category: 'Colecionáveis',
			description: 'Boneco Hulk Marvel',
			platform: '',
			photo: 'img/hulk.jpg'
		}
	];

	return {
		all: function() {
			return match;
		}
	};
});