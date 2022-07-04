import grapesjs from 'grapesjs';
import {db} from './firebase';
import {getDoc, setDoc, doc, collection} from 'firebase/firestore';

let changeDocId: Function;

interface PluginOptions {
  docId: string;
}

const grapesjsFirestore: grapesjs.Plugin<PluginOptions> = (editor, options) => {
  let docId = options.docId;
  const collectionRef = collection(db, 'newsletters')
  let docRef = doc(collectionRef, docId);

  changeDocId = async (newDocId: string) => {
    docId = newDocId;
    docRef = doc(collectionRef, docId);
    await editor.load({});
  }

  editor.StorageManager.add('firestore', {
    changeDocId,

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
export {changeDocId};