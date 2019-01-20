import Vue from 'nativescript-vue'
import App from './components/App'
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
Vue.registerElement("AR", () => require("nativescript-ar").AR);

new Vue({
  render: h => h('frame', [h(App)])
}).$start()
