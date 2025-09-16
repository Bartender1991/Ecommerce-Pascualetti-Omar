// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc } from "firebase/firestore";
import { doc, getDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZOX-mVPfX1cq4sQc-hTuOd6mw3LJbaGo",
  authDomain: "tecno-shop-coder.firebaseapp.com",
  projectId: "tecno-shop-coder",
  storageBucket: "tecno-shop-coder.firebasestorage.app",
  messagingSenderId: "962566984624",
  appId: "1:962566984624:web:5fc7ec9620869aabbcbc75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializacion con metodo getFirestore
export const db = getFirestore(app)



// Obtiene un producto por ID desde la colección 'productos'
export const getProductById = (id) => {
  const docRef = doc(db, "orders", id);
  return getDoc(docRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        };
      } else {
        return null;
      }
    });
};

// Modifica el stock en la base de datos
export const updateProductStock = (id, quantity) => {
  const productRef = doc(db, "productos", id)

  return getDoc(productRef)
    .then((productSnap) => {
      if (productSnap.exists()) {
        const currentStock = productSnap.data().stock

        return updateDoc(productRef, {
          stock: currentStock - quantity
        })
        .then(() => {
          console.log(`✅ Stock actualizado: ${currentStock} → ${currentStock - quantity}`)
        })
      } else {
        console.error("❌ El producto no existe")
        return null
      }
    })
    .catch((error) => {
      console.error("⚠️ Error al actualizar el stock:", error)
    })
}