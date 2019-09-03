'use strict';

const Homey = require('homey');

class KaipuleApp extends Homey.App {
	
	onInit() {
		this.log('Kaipule App is running');
	}
	
}

module.exports = KaipuleApp;