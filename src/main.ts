import {createApp} from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faTwitter, faInstagram, faFacebook);

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
