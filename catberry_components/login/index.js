'use strict';

/*
 * This is a Catberry Cat-component file.
 * More details can be found here
 * http://catberry.org/documentation#cat-components-interface
 */

class Login {

	/**
	 * Creates a new instance of the "login" component.
	 */
	constructor() {
		this.email = null
		this.password = null
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
		this.email = this.$context.element.querySelector('#email')
		this.password = this.$context.element.querySelector('#password')
		return {
			click: {
				'.submit' : this._handleSubmitForm
			}
		}
	}

	_handleSubmitForm(e){
		e.preventDefault()
		this.$context.sendAction('do-login',{
			email : this.email.value,
			password: this.password.value
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

module.exports = Login;

