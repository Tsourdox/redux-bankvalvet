import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function getApiBalance() {
  const querySnapshot = await getDocs(
    collection(db, "balance")
  );
  const allDocs = querySnapshot.docs.map((doc) =>
    doc.data()
  );
  return allDocs[0];
}
