import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
  faAngleDown,
  faXmark
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faAngleDown,
  faXmark
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
