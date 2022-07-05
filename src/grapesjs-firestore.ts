import grapesjs from 'grapesjs';
import {db} from './firebase';
import {collection, doc, getDoc, setDoc} from 'firebase/firestore';

interface PluginOptions {
  docId: string;
}

const grapesjsFirestore: grapesjs.Plugin<PluginOptions> = (editor, options) => {
  let docId = options.docId;
  const collectionRef = collection(db, 'newsletters')
  let docRef = doc(collectionRef, docId);

  editor.StorageManager.add('firestore', {
    async setId(newDocId: string) {
      docId = newDocId;
      docRef = doc(collectionRef, docId);
      await editor.load({});
    },

    async load() {
      const result = await getDoc(docRef);
      return (result.exists() ? result.data() : {}) as grapesjs.ProjectData;
    },

    async store(data) {
      setDoc(docRef, data);
    },
  });
};

export default grapesjsFirestore;