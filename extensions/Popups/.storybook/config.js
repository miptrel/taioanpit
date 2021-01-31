import { configure, addDecorator, addParameters } from '@storybook/html';
import { withCssResources } from '@storybook/addon-cssresources';
import jquery from 'jquery';
import mockMediaWiki from '../node_modules/@wikimedia/mw-node-qunit/src/mockMediaWiki.js';

global.mw = mockMediaWiki();
global.$ = jquery;

/**
 * Storybook global configuration
 */

addDecorator(
  withCssResources({
    cssresources: [{
    name: `x-ray`,
    code: `<style>
    body * {
	outline: 1px solid rgb(255, 0, 0);
	background-color: rgba(255, 0, 0, 0.07);}
    </style>`,
    picked: false,
  }],
})
);

// Option defaults:
addParameters( {
  options: {
    isFullScreen: false,
    showNav: true,
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: false,
    panelPosition: 'right',
    isToolshown: true,
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: false,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: null,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: null,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true, // true by default
  }
} );


// automatically import all files ending in *.stories.js
const req = require.context('./stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
