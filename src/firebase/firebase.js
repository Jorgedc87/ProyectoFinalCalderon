// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREAPIKEY,
  authDomain: import.meta.env.VITE_FIREAUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREPROJECTID,
  storageBucket: import.meta.env.VITE_FIRESTORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREMESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREAPPID,
  measurementId: import.meta.env.VITE_FIREMEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Métodos Firebase

// Obtener todos los productos
export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "productos"));
    if (querySnapshot.empty) {
      return [];
    }
    const items = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });
    return items;
  } catch (error) {
    console.error("Error al obtener los productos", error);
  }
}

// Obtener un producto por ID
export const getProductById = async (id) => {
  const docRef = doc(db, "productos", id);

  try {
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      return null;
    }
    return {
      ...snapshot.data()
    };
  } catch (error) {
    console.error("Error al obtener el producto", error);
  }
}

// Obtener productos por categoría
export const getProductsByCategory = async (category) => {
  try {
    const filteredQuery = query(
      collection(db, "productos"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(filteredQuery);
    if (querySnapshot.empty) {
      return [];
    }
    const items = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });
    return items;
  }
  catch (error) {
    console.error("Error al obtener los productos", error);
  }
}

// Guardar orden en Firestore
export const saveOrder = async (order) => {
  try {
    const ordersCollection = collection(db, "ordenes");
    const docRef = await addDoc(ordersCollection, order);
    return docRef.id;
  } catch (error) {
    console.error("Error al guardar la orden", error);
  }
}

// Restar stock de un producto al confirmar la compra
export const updateStock = async (id, quantity) => {
  const docRef = doc(db, "productos", id);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const currentStock = docSnap.data().stock;

      if (typeof currentStock === "number" && currentStock >= quantity) {
        const newStock = currentStock - quantity;

        await updateDoc(docRef, { stock: newStock });
      } else {
        console.error("Stock insuficiente o datos inválidos");
      }
    } else {
      console.error("Producto no encontrado");
    }
  } catch (error) {
    console.error("Error al actualizar el stock", error);
  }
};

// Guardar email de suscripción en Firestore si no existe
export const saveSubscriber = async (email) => {
  const subscriberRef = doc(db, "subscribers", email);

  try {
    const docSnap = await getDoc(subscriberRef);

    if (!docSnap.exists()) {
      await setDoc(subscriberRef, { email });
      return "success";
    } else {
      return "exists"; 
    }
  } catch (error) {
    console.error("Error al guardar el email", error);
    throw error;
  }
};

