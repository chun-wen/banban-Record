import { doc, getFirestore, setDoc } from 'firebase/firestore';
import firebase_app from '../config';

interface I_passData {
  collection: string;
  id: string;
  data: any;
}

const db = getFirestore(firebase_app);

export default async function addData({ collection, id, data }: I_passData) {
  let result = null;
  let error = null;
  try {
    result = await setDoc(doc(db, collection, id), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
