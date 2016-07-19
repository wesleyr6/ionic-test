angular.module('starter.services', [])

.factory('Chats', function() {
	var chats = [{
		id: 0,
		name: 'Ytalo dos Santos',
		lastText: 'Batman Arkan City',
		face: 'img/ben.png'
	}, {
		id: 1,
		name: 'Bruno Nascimento',
		lastText: 'Batman Arkan City',
		face: 'img/max.png'
	}, {
		id: 2,
		name: 'Adriano Alves',
		lastText: 'Volkswagem Fusca',
		face: 'img/adam.jpg'
	}, {
		id: 3,
		name: 'Thiago Paulino',
		lastText: 'Volkswagem Fusca',
		face: 'img/perry.png'
	}, {
		id: 4,
		name: 'José Damiani',
		lastText: 'Batman Arkan City',
		face: 'img/mike.png'
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
		name: 'Batman Arkan City',
		category: 'Games',
		description: 'Xbox',
		photo: 'img/ben.png'
	}, {
		id: 1,
		name: 'Volkswagem Fusca',
		category: 'Collectibles',
		description: 'Miniatura',
		photo: 'img/max.png'
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
			category: 'Games',
			description: 'Diablo III',
			platform: 'PC',
			photo: 'img/diablo3.jpg'
		},

		{
			category: 'Games',
			description: 'Batman Arkan City',
			platform: 'Xbox',
			photo: 'img/batman.jpg'
		},

		{
			category: 'Games',
			description: 'Counter Strike Source',
			platform: 'PC',
			photo: 'img/cs.jpg'
		},

		{
			category: 'Games',
			description: 'FIFA 17',
			platform: 'PS4',
			photo: 'img/fifa17.jpg'
		},

		{
			category: 'Games',
			description: 'GTA IV',
			platform: 'PS4',
			photo: 'img/gta5.jpg'
		},

		{
			category: 'Colecionáveis',
			description: 'Boneco Hulk Marvel',
			platform: '',
			photo: 'img/hulk.jpg'
		},

		{
			category: 'Colecionáveis',
			description: 'Boneco Capitão América',
			platform: '',
			photo: 'img/capitao-america.jpg'
		},

		{
			category: 'Colecionáveis',
			description: 'Boneco Thor Vingadores',
			platform: '',
			photo: 'img/thor.jpg'
		},

		{
			category: 'Colecionáveis',
			description: 'Carro Batman Batmóvel',
			platform: '',
			photo: 'img/batmovel.jpg'
		}
	];

	return {
		all: function() {
			return products;
		},

		remove: function(item) {
			console.log('dsa', item)
			products.splice(products.indexOf(item), 1);
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