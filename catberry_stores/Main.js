'use strict';

const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const authentication = require('feathers-authentication/client');
const localStorage = require('localStorage');
const host = 'http://localhost:3000';

class Main {
	/**
	 * Creates a new instance of the "some" store.
	 * @param {ServiceLocator} locator The service locator for resolving dependencies.
	 */
	constructor(locator) {
		this._uhr = locator.resolve('uhr')
		this._client = feathers()
			.configure(rest(host).superagent(superagent))
			.configure(hooks())
			.configure(authentication({storage: localStorage}))
		//this._client = locator.resolve('feathersClient')
	}

	/**
	 * Loads data from somewhere.
	 * @returns {Object} Data object.
	 */
	load() {
		return {
			isAuthenticated : this._client.authenticate()
		};
	}

	/**
	 * Handles action named "signup".
	 * @param {Object} args Action arguments.
	 */
	handleDoSignup(args) {
		const self = this;
		this._uhr.post('http://localhost:3000/signup', {data: args}).then(result => {
			if (result.content === 'SUCCESS') {
				this.$context.redirect('/login')
			}
		})
	}

	handleDoLogin(args) {
		this._client.authenticate({
			type: 'local',
			email: args.email,
			password: args.password
		}).then(result => console.log('Authenticated!', result))
		.catch(error => console.error('Error authenticating!', error))
	}
}

module.exports = Main;

