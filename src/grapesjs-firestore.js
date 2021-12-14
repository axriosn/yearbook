import grapesjs from 'grapesjs';
import {db} from './firebase';
import {getDoc, setDoc, doc, collection} from 'firebase/firestore';

export default grapesjs.plugins.add('grapesjs-firestore', (editor, opts = {}) => {
  const options = { ...{
      // Document id
      docId: 'gjs',

      // Collection name
      collectionName: 'templates',

      // Database settings (https://firebase.google.com/docs/reference/js/firebase.firestore.Settings)
      settings: { timestampsInSnapshots: true },
    },  ...opts };

  const sm = editor.StorageManager;
  const storageName = 'firestore';

  let docVar;
  let docId;
  let collectionVar;

  const dbSettings = options.settings;
  const onError = err => sm.onError(storageName, err.code || err);

  const getDocVar = () => docVar;
  const getDocId = () => docId || options.docId;

  const getAsyncCollection = (clb) => {
    if (collectionVar) return clb(collectionVar);

    const callback = () => {
      collectionVar = collection(db, options.collectionName);
      clb(collectionVar);
    }

    callback();
  };

  const getAsyncDoc = (clb) => {
    getAsyncCollection(cll => {
      docVar = doc(cll, getDocId());
      clb(docVar);
    });
  };

  sm.add(storageName, {
    getDoc: getDocVar,

    getDocId,

    setDocId(id) {
      docId = id;
    },

    load(keys, clb, clbError) {
      getAsyncDoc((docTempVar) => {
        getDoc(docTempVar)
          .then(docTemp => clb(docTemp.data()))
          .catch(clbError);
      });
    },

    store(data, clb, clbError) {
      getAsyncDoc((docTemp) => {
        setDoc(docTemp, data)
          .then(clb)
          .catch(clbError);
      });
    }
  });
});