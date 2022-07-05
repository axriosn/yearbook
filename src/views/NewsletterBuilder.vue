<template>
  <PublishInfoModal :class='{ "is-active": isModalActive}' :close-modal='closeModal'
                    :publish-newsletter='publishNewsletter'></PublishInfoModal>
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
          <button v-if='selectedNewsletterProxy.id === "latestUnfinished"' class='button' @click='isModalActive = true'>
            Publish as...
          </button>
          <button v-else class='button' @click='saveNewsletter'>Save changes</button>
        </div>
      </div>

    </div>
    <div id='gjs'></div>
  </div>
</template>

<script>
import {defineAsyncComponent, defineComponent, onMounted, ref} from "vue";
import 'grapesjs/dist/css/grapes.min.css';
import'grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.css';
// import 'grapesjs-project-manager/dist/grapesjs-project-manager.min.css'

import grapesjs from 'grapesjs';
import gjsPresetNewsletter from 'grapesjs-preset-newsletter';
// import gjsProjectManager from 'grapesjs-project-manager';
import grapesjsFirestore from '../grapesjs-firestore';

import {addDoc, collection, getDoc, setDoc, doc} from 'firebase/firestore';
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
      authState.displayToast('Successfully saved progress', 'is-success');
    };

    const selectedNewsletterObj = {
      id: 'latestUnfinished',
    };

    const selectedNewsletterHandler = {
      set: (obj, prop, value) => {
        if (editor.StorageManager.isAutosave() !== (selectedNewsletterProxy.id === 'latestUnfinished')) editor.StorageManager.setAutosave(selectedNewsletterProxy.id === 'latestUnfinished');
        editor.StorageManager.setId(value).then(() => {
          authState.displayToast(`Changes will${editor.StorageManager.isAutosave() ? ' NOT' : ''} save automatically`, 'is-warning');
          obj[prop] = value;
        });
        return true;
      }
    };

    const selectedNewsletterProxy = new Proxy(selectedNewsletterObj, selectedNewsletterHandler);

    onMounted(() => {
      editor = grapesjs.init({
        container: '#gjs',
        // pageManager: true,
        plugins: [gjsPresetNewsletter, grapesjsFirestore],
        storageManager: {type: 'firestore'},
        pluginsOpts: {
          [grapesjsFirestore]: {
            docId: selectedNewsletterProxy.id,
          }
        }
      });
/*      editor.Panels.addButton('options', {
        id: 'open-templates',
        className: 'fa fa-folder-o',
        attributes: {
          title: 'Open projects and templates'
        },
        command: 'open-templates', //Open modal
      });*/
    });


    function publishNewsletter(newsletterInfo) {
        newsletterInfo.week = new Date(newsletterInfo.week);
        newsletterInfo.week.setDate(newsletterInfo.week.getDate() - newsletterInfo.week.getDay());

        const COLLECTION_REF = collection(db, 'newsletters');
        addDoc(COLLECTION_REF, {
          html: editor.Commands.run('gjs-get-inlined-html'),
          ...newsletterInfo,
        });

        getDoc(doc(COLLECTION_REF, 'template')).then((templateDoc) => {
          setDoc(doc(COLLECTION_REF, 'latestUnfinished'), templateDoc.data());
        });
        isModalActive.value = false;
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