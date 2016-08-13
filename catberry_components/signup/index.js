'use strict';

/*
 * This is a Catberry Cat-component file.
 * More details can be found here
 * http://catberry.org/documentation#cat-components-interface
 */

class Signup {

	/**
	 * Creates a new instance of the "signup" component.
	 */
	constructor() {
		this.emailElement = null
		this.passwordElement = null
	}

	/**
	 * Gets a data context for the template engine.
	 * This method is optional.
	 * @returns {Promise<Object>|Object|null|undefined} The data context for the template engine.
	 */
	render() {
		return this.$context.getStoreData();
	}

	/**
	 * Returns event binding settings for the component.
	 * This method is optional.
	 * @returns {Promise<Object>|Object|null|undefined} The binding settings or nothing.
	 */
	bind() {
		this.emailElement = this.$context.element.querySelector('#email')
		this.passwordElement = this.$context.element.querySelector('#repassword')
		return {
			click: {
				'.submit' : this._handleSubmitForm
			}
		}
	}

	_handleSubmitForm(e){
		this.$context.sendAction('do-signup', {
			email: this.emailElement.value,
			password: this.passwordElement.value
		})
	}

	/**
	 * Clans everything up. The events have been set by .bind() method are cleaned automatically.
	 * This method is optional.
	 * @returns {Promise|undefined} Promise or finished work or nothing.
	 */
	unbind() {

	}
}

module.exports = Signup;

