<template>
  <PublishInfoModal :publish-newsletter='publishNewsletter' :close-modal='closeModal' :class='{ "is-active": isModalActive}'></PublishInfoModal>
  <div class='container'>
    <div class='buttons'>
      <div class='select'>
        <select v-model='selectedNewsletterProxy.id'>
          <option value='template'>Newsletter Template</option>
          <option value='latestUnfinished'>Latest Unpublished</option>
          <option value='anotherOption'>option 2</option>
        </select>
      </div>
      <div class='field'>
        <div class='label'></div>
        <div class='control'>
          <button class='button' @click='isModalActive = true' v-if='selectedNewsletterProxy.id === "latestUnfinished"'>
            Publish as...
          </button>
          <button class='button' @click='saveNewsletter' v-else>Save changes</button>
        </div>
      </div>

    </div>
    <div id='gjs'></div>
  </div>
</template>

<script>
import {defineAsyncComponent, defineComponent, onMounted, ref} from "vue";
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.css';

import grapesjs from 'grapesjs';
import 'grapesjs-preset-newsletter';
import '../grapesjs-firestore';
import {changeDocId} from '../grapesjs-firestore';

import {addDoc, collection, doc, runTransaction} from 'firebase/firestore';
import authState, {db} from '../firebase';

export default defineComponent({
  name: "NewsletterBuilder",
  components: {
    'PublishInfoModal': defineAsyncComponent(() => import('../components/PublishInfoModal.vue')),

  },
  setup() {
    let editor;
    let isModalActive = ref(false);
    const closeModal = () => isModalActive.value = false;

    let saveNewsletter = () => {
      editor.store();
      authState.displaySuccess('Successfully saved progress');
    };

    const selectedNewsletterObj = {
      id: 'latestUnfinished',
    };

    const selectedNewsletterHandler = {
      set: (obj, prop, value) => {
        if (editor.StorageManager.isAutosave() !== (selectedNewsletterProxy.id === 'latestUnfinished')) editor.StorageManager.setAutosave(selectedNewsletterProxy.id === 'latestUnfinished');
        changeDocId(value);
        authState.displaySuccess(`Changes will${editor.StorageManager.isAutosave() ? ' NOT' : ''} save automatically`);

        obj[prop] = value;
        return true;
      }
    };

    const selectedNewsletterProxy = new Proxy(selectedNewsletterObj, selectedNewsletterHandler);

    onMounted(() => {
      editor = grapesjs.init({
        container: '#gjs',
        plugins: ['gjs-preset-newsletter', 'grapesjs-firestore'],
        storageManager: {type: 'firestore'},
        pluginsOpts: {
          'grapesjs-firestore': {
            docId: selectedNewsletterProxy.id,
          }
        }
      });
    });

    function publishNewsletter(newsletterInfo) {
      runTransaction(db, (transaction) => {
        newsletterInfo.week = new Date(newsletterInfo.week);
        newsletterInfo.week.setDate(newsletterInfo.week.getDate() - newsletterInfo.week.getDay);

        const COLLECTION_REF = collection(db, 'newsletters');
        addDoc(COLLECTION_REF, {
          html: editor.Commands.run('gjs-get-inlined-html'),
          ...newsletterInfo,
        });

        transaction.get(doc(COLLECTION_REF, 'template')).then((templateDoc) => {
          transaction.set(doc(COLLECTION_REF, 'latestUnfinished'), templateDoc.data());
        });
      });
    }

    return {
      selectedNewsletterProxy,
      saveNewsletter,
      publishNewsletter,
      isModalActive,
      closeModal,
    }
  }
});
</script>

<style scoped>
</style>