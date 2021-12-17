import grapesjs from 'grapesjs';
import {db} from './firebase';
import {getDoc, setDoc, doc, collection} from 'firebase/firestore';

export default grapesjs.plugins.add('grapesjs-firestore', (editor, options = { docId: 'latestUnfinished' }) => {
  const docRef = doc(collection(db, 'newsletters'), options.docId);

  editor.StorageManager.add('firestore', {
    getDoc: () => docRef,

    getDocId: () => options.docId,

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