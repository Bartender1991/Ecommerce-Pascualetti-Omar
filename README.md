# Tecno Shop

## ✅ Objetivos
Este proyecto fue realizado para aprender las bases de React con JavaScript en CoderHouse.

## ⚙️ Instalación 

1. Clona el repositorio:
	 ```bash
	 git clone https://github.com/Bartender1991/Ecommerce-Pascualetti-Omar.git
	 ```
2. Ingresa a la carpeta raíz del proyecto:
	 ```bash
	 cd Ecommerce-Pascualetti-Omar
	 ```
3. Instala las dependencias:
	 ```bash
	 npm install
	 ```
4. Levanta el proyecto en modo local:
	 ```bash
	 npm run dev
	 ```

## 💻 Demo Online

Si deseas ver el proyecto online, puedes ingresar al siguiente link: [Coder Flex App](#) 
*(Agrega el enlace real si tienes una demo publicada)*

## 📁 Estructura de Carpetas

```
src/
	components/
		NavBarBS.jsx
		ItemListContainer.jsx
		ItemDetailContainer.jsx
		CartContainer.jsx
		Checkout.jsx
		ToastProvider.jsx
		...
	context/
		CartContext.jsx
	mock/
		AsyncMock.js
	service/
		firebase.js
	App.jsx
	index.css
	main.jsx
```

## 🧩 Principales Componentes

- **NavBarBS**: Barra de navegación principal.
- **ItemListContainer**: Muestra la lista de productos y categorías.
- **ItemDetailContainer**: Detalle de cada producto.
- **CartContainer**: Vista y gestión del carrito de compras.
- **Checkout**: Formulario para finalizar la compra.
- **ToastProvider**: Gestión de notificaciones con React Toastify.

## 🗺️ Rutas

- `/` : Home, listado de productos.
- `/categories/:category` : Filtra productos por categoría.
- `/item/:id` : Detalle de producto.
- `/cart` : Carrito de compras.
- `/checkout` : Finalizar compra.
- `/*` : Página de error.

## 📦 Librerías Utilizadas

- [Firebase](https://firebase.google.com/): Base de datos y autenticación.
- [React Router Dom](https://reactrouter.com/): Navegación por rutas.
- [React Bootstrap](https://react-bootstrap.github.io/): Estilos y componentes UI.
- [React Icons](https://react-icons.github.io/react-icons/): Iconos para la app.
- [React Toastify](https://fkhadra.github.io/react-toastify/): Notificaciones.

## 📝 Notas

- Para usar Firebase, configura tus credenciales en `src/service/firebase.js`.
- Las notificaciones se gestionan con el componente `ToastProvider` incluido en la app.
- Si tienes una funcionalidad de subida masiva o administración, agrégala aquí con instrucciones de uso.


## 👤 Autor
- [Omar Pascualetti](https://github.com/Bartender1991)

## 📜 Licencia
Este proyecto se distribuye bajo la licencia MIT.