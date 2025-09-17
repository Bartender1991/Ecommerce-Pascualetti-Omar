// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, updateDoc, where, doc, getDoc } from "firebase/firestore";

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



// Trae una orden creada por el id
export const getOrderById = (id) => {
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

// Trae los datos de un producto por id
export const getOneById = (collection, id) => {
  const docRef = doc(db, collection, id)
  return getDoc(docRef)
    .then((docSnap) => {
      console.log(docSnap, 'docSnap')
      if (docSnap.exists()) {
        return { invalid: false, id: docSnap.id, ...docSnap.data() }
      } else {
        return { invalid: true }
      }
    })
    .catch((error) => {
      console.log(error)
    })
}


// Modifica el stock despues de comprar
export const discountStock = (id, quantity) => {
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

// Traer datos por categoria
export const getByCategory = (category) => {
  const docRef = category
    ? query(collection(db, 'productos'), where('category', '==', category))
    : collection(db, 'productos')

  return getDocs(docRef)
}


// Actualiza un producto completo por Id
export const updateprodById = (id, data) => {
  console.log("ID recibido en updateProduct:", id, typeof id)
  const docRef = doc(db, 'productos', id)
  return updateDoc(docRef, data)
}




// DELETE → Eliminar un documento
// export const deleteDocument = (collectionName, id) => {
//   const docRef = doc(db, collectionName, id)
//   return deleteDoc(docRef)
//     .then(() => {
//       console.log(`🗑️ Documento ${id} eliminado con éxito`)
//     })
//     .catch((error) => {
//       console.error("❌ Error al eliminar documento:", error)
//     })
// }