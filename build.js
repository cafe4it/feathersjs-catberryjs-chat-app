'use strict';

// configuration
const isRelease = process.argv.length === 3 ?
	process.argv[2] === 'release' : undefined;

// catberry application
const assets = require('catberry-assets');
const uhr = require('catberry-uhr');
const catberry = require('catberry');
const cat = catberry.create({
	isRelease,
	assets: {
		useImageSprites: false,
		useImageOptimization: false,
		useSvgOptimization: false,
		useSvgSymbols: false,
		banner: '/**\n * Catberry Homepage styles\n * <%now%>\n */\n',
		useNormalizeCss: true
	}
});

// register plugin to the service locator
assets.register(cat.locator);
uhr.register(cat.locator);
// register Catberry plugins needed for building process
const templateEngine = require('catberry-handlebars');
templateEngine.register(cat.locator);

const logger = require('catberry-logger');
logger.register(cat.locator);

// run the build
cat.build();

