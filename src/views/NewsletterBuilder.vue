<template>
  <div class='container'>
    <div id='gjs'></div>
  </div>
</template>

<script>
import {defineComponent, onMounted} from "vue";
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.css';

import grapesjs from 'grapesjs';
// import 'grapesjs-firestore';
import 'grapesjs-preset-newsletter';
import '../grapesjs-firestore';

export default defineComponent({
  name: "NewsletterBuilder",
  setup() {
    onMounted(() => grapesjs.init({
      container : '#gjs',
      plugins: ['gjs-preset-newsletter', 'grapesjs-firestore'],
      storageManager: { type: 'firestore' },
      blockManager: {
        blocks: [
          {

          }
        ]
      }
    }));

    return {}
  }
});
</script>

<style scoped>
</style>