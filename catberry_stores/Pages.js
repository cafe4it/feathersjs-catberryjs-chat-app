'use strict';

const ALLOWED_PAGES = {
	main: true,
	login: true,
	signup: true
};

const DEFAULT_PAGE = 'login';

/*
 * This is a Catberry Cat-component file.
 * More details can be found here
 * http://catberry.org/documentation#stores-interface
 */

class Pages {

	/**
	 * Creates a new instance of the "Pages" store.
	 * @param {ServiceLocator} locator The service locator for resolving dependencies.
	 */
	constructor(locator) {

		// In case you have the UHR plugin registered
		// this._uhr = locator.resolve('uhr');

		/**
		* Current lifetime for data (in milliseconds) which the store is responsible for.
		* @type {number} Lifetime in milliseconds.
		*/
		this.$lifetime = 60000;
	}

	load() {
		// Here you can do any HTTP requests using this._uhr
		// or another universal HTTP request implementation.
		// Please read details here https://github.com/catberry/catberry-uhr.
		let currentPage = this.$context.state.page;
		if (!currentPage) {
			currentPage = DEFAULT_PAGE;
		}
		currentPage = currentPage.toLowerCase();
		if (!ALLOWED_PAGES.hasOwnProperty(currentPage)) {
			currentPage = DEFAULT_PAGE;
		}
		const activePages = {};
				Object.keys(ALLOWED_PAGES)
			.forEach((page) => {
				activePages[page] = (page === currentPage);
			});
		return {
			currentPage,
			activePages
		}
	}

	handleSomeAction() {
		// Here you can call this.$context.changed() if you know
		// that remote data has been changed.
		// Also, you can have other actions and handle methods like this, just define a method.
	}
}

module.exports = Pages;

