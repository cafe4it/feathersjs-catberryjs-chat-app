/**
 * This file is a template and it is used only for some string replaces
 * by BrowserBundleBuilder module. It does not work by itself.
 */

'use strict';

const stores = [


{name: 'Main', constructor: require('./catberry_stores/Main.js')},
{name: 'Pages', constructor: require('./catberry_stores/Pages.js')}

];

const components = [


{
	name: 'document',
	constructor: require('./catberry_components/document/Document.js'),
	properties: {"name":"document","template":"./document.hbs","logic":"./Document.js"},
	templateSource: '{"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "<!DOCTYPE html>\\n<html>\\n<head></head>\\n<body>\\n\t<cat-pages id=\\"pages\\" cat-store=\\"Pages\\"></cat-pages>\\n</body>\\n</html>\\n\\n";\n},"useData":true}',
	errorTemplateSource: null
},
{
	name: 'head',
	constructor: require('./catberry_components/head/Head.js'),
	properties: {"name":"head","template":"./head.hbs","logic":"./Head.js"},
	templateSource: '{"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    var helper;\n\n  return "<meta charset=\\"UTF-8\\">\\n<title>"\n    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))\n    + "</title>\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/reset.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/site.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/container.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/menu.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/grid.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/header.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/loader.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/form.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/button.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/segment.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/divider.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/icon.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/input.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/message.min.css\\">\\n<link rel=\\"stylesheet\\" href=\\"styles.css\\">\\n<script src=\\"https://code.jquery.com/jquery-2.2.4.min.js\\"></script>\\n<script src=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/form.min.js\\"></script>\\n<script src=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/site.min.js\\"></script>\\n<script src=\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/components/transition.min.js\\"></script>\\n<script src=\\"bundle.js\\"></script>\\n";\n},"useData":true}',
	errorTemplateSource: null
},
{
	name: 'login',
	constructor: require('./catberry_components/login/index.js'),
	properties: {"name":"login","template":"./template.hbs","errorTemplate":"./error.hbs","logic":"index.js"},
	templateSource: '{"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "<div class=\\"ui middle aligned center aligned grid\\">\\n  <div class=\\"column\\">\\n    <h2 class=\\"ui teal image header\\">      \\n      <div class=\\"content\\">\\n        Log-in to your account\\n      </div>\\n    </h2>\\n    <form class=\\"ui large form\\">\\n      <div class=\\"ui stacked segment\\">\\n        <div class=\\"field\\">\\n          <div class=\\"ui left icon input\\">\\n            <i class=\\"user icon\\"></i>\\n            <input type=\\"text\\" name=\\"email\\" id=\\"email\\" placeholder=\\"E-mail address\\">\\n          </div>\\n        </div>\\n        <div class=\\"field\\">\\n          <div class=\\"ui left icon input\\">\\n            <i class=\\"lock icon\\"></i>\\n            <input type=\\"password\\" name=\\"password\\" id=\\"password\\" placeholder=\\"Password\\">\\n          </div>\\n        </div>\\n        <div class=\\"ui fluid large teal submit button\\">Login</div>\\n      </div>\\n\\n      <div class=\\"ui error message\\"></div>\\n\\n    </form>\\n\\n    <div class=\\"ui message\\">\\n      New to us? <a href=\\"/signup\\">Sign Up</a>\\n    </div>\\n  </div>\\n</div>";\n},"useData":true}',
	errorTemplateSource: '{"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "\\n";\n},"useData":true}'
},
{
	name: 'main',
	constructor: require('./catberry_components/main/index.js'),
	properties: {"name":"main","template":"./template.hbs","errorTemplate":"./error.hbs","logic":"index.js"},
	templateSource: '{"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "\\n";\n},"useData":true}',
	errorTemplateSource: '{"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "\\n";\n},"useData":true}'
},
{
	name: 'pages',
	constructor: require('./catberry_components/pages/index.js'),
	properties: {"name":"pages","template":"./template.hbs","errorTemplate":"./error.hbs","logic":"index.js"},
	templateSource: '{"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;\n\n  return "<div class=\\"pages\\">\\n  <cat-"\n    + alias4(((helper = (helper = helpers.currentPage || (depth0 != null ? depth0.currentPage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currentPage","hash":{},"data":data}) : helper)))\n    + " cat-store=\\"Main\\"></cat-"\n    + alias4(((helper = (helper = helpers.currentPage || (depth0 != null ? depth0.currentPage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currentPage","hash":{},"data":data}) : helper)))\n    + ">\\n</div>\\n";\n},"useData":true}',
	errorTemplateSource: '{"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "\\n";\n},"useData":true}'
},
{
	name: 'signup',
	constructor: require('./catberry_components/signup/index.js'),
	properties: {"name":"signup","template":"./template.hbs","errorTemplate":"./error.hbs","logic":"index.js"},
	templateSource: '{"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "<div class=\\"ui middle aligned center aligned grid\\">\\n  <div class=\\"column\\">\\n    <h2 class=\\"ui teal image header\\">      \\n      <div class=\\"content\\">\\n        Create an Account\\n      </div>\\n    </h2>\\n    <form class=\\"ui large form\\">\\n      <div class=\\"ui stacked segment\\">\\n        <div class=\\"field\\">\\n          <div class=\\"ui left icon input\\">\\n            <i class=\\"user icon\\"></i>\\n            <input type=\\"text\\" name=\\"email\\" id=\\"email\\" placeholder=\\"E-mail address\\">\\n          </div>\\n        </div>\\n        <div class=\\"field\\">\\n          <div class=\\"ui left icon input\\">\\n            <i class=\\"lock icon\\"></i>\\n            <input type=\\"password\\" name=\\"password\\" id=\\"password\\" placeholder=\\"Password\\">\\n          </div>\\n        </div>\\n                <div class=\\"field\\">\\n          <div class=\\"ui left icon input\\">\\n            <i class=\\"lock icon\\"></i>\\n            <input type=\\"password\\" name=\\"repassword\\" id=\\"repassword\\" placeholder=\\"Verify Password\\">\\n          </div>\\n        </div>\\n        <div class=\\"ui fluid large teal submit button\\">Signup</div>\\n      </div>\\n\\n      <div class=\\"ui error message\\"></div>\\n\\n    </form>\\n\\n    <div class=\\"ui message\\">\\n      Have account? <a href=\\"/login\\">Login</a>\\n    </div>\\n  </div>\\n</div>\\n";\n},"useData":true}',
	errorTemplateSource: '{"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "\\n";\n},"useData":true}'
},
{
	name: 'spinner',
	constructor: require('./catberry_components/spinner/index.js'),
	properties: {"name":"spinner","template":"./template.hbs","errorTemplate":"./error.hbs","logic":"index.js"},
	templateSource: '{"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "<div class=\\"ui active centered inline loader\\"></div>";\n},"useData":true}',
	errorTemplateSource: '{"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "\\n";\n},"useData":true}'
}

];

const routeDefinitions = require('./routes.js') || [];
const routeDescriptors = [{"expression":"/:page[Pages]","pathParameters":[{"start":1,"end":13,"name":"page","stores":["Pages"]}],"queryParameters":[],"pathRegExpSource":"^/([^\\/\\\\]*)$"}] || [];

const Catberry = require('./node_modules/catberry/browser/Catberry.js');
const BootstrapperBase = require('./node_modules/catberry/lib/base/BootstrapperBase.js');
const StoreDispatcher = require('./node_modules/catberry/lib/StoreDispatcher');
const ModuleApiProvider = require('./node_modules/catberry/browser/providers/ModuleApiProvider');
const CookieWrapper = require('./node_modules/catberry/browser/CookieWrapper');

class Bootstrapper extends BootstrapperBase {

	/**
	 * Creates a new instance of the browser Catberry's bootstrapper.
	 */
	constructor() {
		super(Catberry);
	}

	/**
	 * Configures a Catberry's service locator.
	 * @param {Object} configObject The application config object.
	 * @param {ServiceLocator} locator The service locator to configure.
	 */
	configure(configObject, locator) {
		super.configure(configObject, locator);

		locator.register('storeDispatcher', StoreDispatcher, true);
		locator.register('moduleApiProvider', ModuleApiProvider, true);
		locator.register('cookieWrapper', CookieWrapper, true);

		locator.registerInstance('window', window);

		routeDefinitions.forEach(routeDefinition =>
			locator.registerInstance('routeDefinition', routeDefinition));

		routeDescriptors.forEach(routeDescriptor =>
			locator.registerInstance('routeDescriptor', routeDescriptor));

		stores.forEach(store => locator.registerInstance('store', store));

		components.forEach(component => locator.registerInstance('component', component));
	}
}

module.exports = new Bootstrapper();
