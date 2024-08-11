import firebase, { db } from "./config";

export const addDocument = (collection: string, data: any) => {
  const query = db.collection(collection);
  return query.add({
    ...data,
    createAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
