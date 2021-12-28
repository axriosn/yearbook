import grapesjs from 'grapesjs';
import {db} from './firebase';
import {getDoc, setDoc, doc, collection} from 'firebase/firestore';

let changeDocId;

export default grapesjs.plugins.add('grapesjs-firestore', (editor, options) => {
  let docId = options.docId || 'latestUnfinished';

  const collectionRef = collection(db, 'newsletters')
  let docRef = doc(collectionRef, docId);

  changeDocId = (newDocId) => {
    docId = newDocId;
    docRef = doc(collectionRef, docId);
  }

  editor.StorageManager.add('firestore', {
    load(keys, clb, clbError) {
        getDoc(docRef)
          .then(doc => clb(doc.data()))
          .catch(clbError);
    },

    store(data, clb, clbError) {
        setDoc(docRef, data)
          .then(clb)
          .catch(clbError);
      },
    });
  });

export {changeDocId};