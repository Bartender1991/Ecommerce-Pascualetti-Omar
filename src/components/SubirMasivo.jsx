import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { productos } from '../mock/AsyncMock'
import { db } from '../service/firebase'

const SubirMasivo = () => {
    const subirData = () => {
        console.log("subiendo data...")
        const collectionAagregar = collection(db, 'productos')
        productos.map((prod) => addDoc(collectionAagregar, prod))
    }
    return (
        <div>
            <button onClick={subirData}>
                subir a firebase
            </button>
        </div>
    )
}

export default SubirMasivo
