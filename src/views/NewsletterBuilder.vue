<template>
  <div class='container'>
    <div class='buttons'>
      <div class='select'>
        <select v-model='selectedNewsletterId'>
          <option value='latestUnfinished'>Latest Unpublished</option>
          <option value='anotherOption'>option 2</option>
        </select>
      </div>
      <button class='button' @click='publishNewsletter' v-if='selectedNewsletterId === "latestUnfinished"'>Publish as...</button>
      <button class='button' @click='saveNewsletter' v-else >Save changes</button>

    </div>
    <div id='gjs'></div>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref, watch} from "vue";
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.css';

import grapesjs from 'grapesjs';
import 'grapesjs-preset-newsletter';
import '../grapesjs-firestore';
import {changeDocId} from '../grapesjs-firestore';
import authState from '../firebase';

export default defineComponent({
  name: "NewsletterBuilder",
  setup() {
    let selectedNewsletterId = ref('latestUnfinished');
    let saveNewsletter;

    onMounted(() => {
      const editor = grapesjs.init({
        container: '#gjs',
        plugins: ['gjs-preset-newsletter', 'grapesjs-firestore'],
        storageManager: {type: 'firestore'},
        pluginsOpts: {
          'grapesjs-firestore': {
            docId: selectedNewsletterId.value,
          }
        }
      });

      watch(selectedNewsletterId, (prev, next) => {
        if ((prev === 'latestUnfinished') || (next === 'latestUnfinished')) editor.StorageManager.setAutosave(selectedNewsletterId.value === 'latestUnfinished');
        changeDocId(next);
      });

      saveNewsletter = editor.store(() => authState.displaySuccess('Successfully saved progress'))
    });

    function publishNewsletter() {
      'oh god';
    }

    return {
      selectedNewsletterId,
      saveNewsletter,
      publishNewsletter,
    }
  }
});
</script>

<style scoped>
</style>