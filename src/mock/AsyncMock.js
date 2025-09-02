const productos = [
    {
        id: 1,
        name: "Laptop Dell Inspiron 15",
        category: "computadoras",
        price: 15.00,
        stock: 5,
        img: "https://i.postimg.cc/qMRyKB0C/laptop-dell-inspiron-15.jpg",
        description: "Laptop con procesador Intel Core i5, 8GB de RAM y SSD de 256GB."
    },
    {
        id: 2,
        name: "Teclado Mecánico Redragon Kumara",
        category: "perifericos",
        price: 10.00,
        stock: 7,
        img: "https://i.postimg.cc/65g2GdYD/teclado-redragon-kumara.jpg",
        description: "Teclado mecánico compacto con retroiluminación RGB."
    },
    {
        id: 3,
        name: "Mouse Logitech G502 HERO",
        category: "perifericos",
        price: 59.70,
        stock: 0,
        img: "https://i.postimg.cc/QMpTDHgv/mouse-logitech-g502.jpg",
        description: "Mouse gamer de alto rendimiento con 11 botones programables."
    },
    {
        id: 4,
        name: "Monitor Samsung 24\" Curvo",
        category: "monitores",
        price: 179.68,
        stock: 25,
        img: "https://i.postimg.cc/QdK766F8/monitor-samsung-curvo-24.jpg",
        description: "Monitor curvo Full HD de 24 pulgadas con tecnología VA."
    },
    {
        id: 5,
        name: "Disco SSD Kingston 480GB",
        category: "almacenamiento",
        price: 39.99,
        stock: 100,
        img: "https://i.postimg.cc/cC5KhYZt/ssd-kingston-480gb.jpg",
        description: "Unidad de estado sólido SATA III con velocidad de lectura de 500MB/s."
    },
    {
        id: 6,
        name: "Memoria RAM Corsair Vengeance 16GB DDR4",
        category: "componentes",
        price: 69.99,
        stock: 60,
        img: "https://i.postimg.cc/V6g0SpVR/ram-corsair-16gb.jpg",
        description: "Memoria RAM DDR4 de alto rendimiento a 3200MHz."
    },
    {
        id: 7,
        name: "Placa de Video NVIDIA RTX 3060",
        category: "componentes",
        price: 349.79,
        stock: 20,
        img: "https://i.postimg.cc/26DnL48z/gpu-rtx-3060.jpg",
        description: "Tarjeta gráfica con 12GB GDDR6, ideal para gaming y diseño."
    },
    {
        id: 8,
        name: "Fuente de Poder EVGA 600W 80+ Bronze",
        category: "componentes",
        price: 49.99,
        stock: 30,
        img: "https://i.postimg.cc/0Q0DYbb7/fuente-evga-600w.jpg",
        description: "Fuente de alimentación certificada 80+ Bronze para PC de escritorio."
    },
    {
        id: 9,
        name: "Gabinete Gamer NZXT H510",
        category: "componentes",
        price: 89.99,
        stock: 15,
        img: "https://i.postimg.cc/FKcjKPvW/gabinete-nzxt-h510.jpg",
        description: "Gabinete ATX minimalista con panel lateral de vidrio templado."
    },
    {
        id: 10,
        name: "Router TP-Link Archer AX50",
        category: "redes",
        price: 129.90,
        stock: 18,
        img: "https://i.postimg.cc/VvNrX4yc/router-tplink-ax50.jpg",
        description: "Router Wi-Fi 6 de doble banda con velocidades de hasta 3Gbps."
    },
    {
        id: 11,
        name: "Auriculares HyperX Cloud II",
        category: "audio",
        price: 79.99,
        stock: 35,
        img: "https://i.postimg.cc/dVg2vbbZ/auriculares-hyperx-cloud-ii.jpg",
        description: "Auriculares gamer con sonido envolvente 7.1 y micrófono desmontable."
    },
    {
        id: 12,
        name: "Micrófono Blue Yeti USB",
        category: "audio",
        price: 99.91,
        stock: 25,
        img: "https://i.postimg.cc/CLQDsyLr/microfono-blue-yeti.jpg",
        description: "Micrófono de condensador USB ideal para streaming y grabaciones."
    },
    {
        id: 13,
        name: "Impresora Multifunción HP DeskJet 3775",
        category: "impresoras",
        price: 69.99,
        stock: 22,
        img: "https://i.postimg.cc/9X1yzw3h/impresora-hp-deskjet-3775.jpg",
        description: "Impresora multifunción compacta con conectividad Wi-Fi."
    },
    {
        id: 14,
        name: "Tablet Samsung Galaxy Tab S6 Lite",
        category: "tablets",
        price: 249.94,
        stock: 8,
        img: "https://i.postimg.cc/TYp5wkqV/tablet-samsung-galaxy-s6-lite.jpg",
        description: "Tablet de 10.4 pulgadas con S Pen incluido."
    },
    {
        id: 15,
        name: "Cámara Web Logitech C920 HD Pro",
        category: "camaras",
        price: 79.99,
        stock: 40,
        img: "https://i.postimg.cc/L8PqknWh/webcam-logitech-c920.jpg",
        description: "Cámara web Full HD con enfoque automático y micrófono estéreo."
    },
    {
        id: 16,
        name: "Hub USB 3.0 de 4 Puertos",
        category: "accesorios",
        price: 19.99,
        stock: 80,
        img: "https://i.postimg.cc/qqmKFScR/hub-usb-3.jpg",
        description: "Hub USB compacto con 4 puertos y transferencia rápida."
    },
    {
        id: 17,
        name: "Disco Duro Externo Seagate 2TB",
        category: "almacenamiento",
        price: 69.99,
        stock: 50,
        img: "https://i.postimg.cc/0j5mcPwF/hdd-seagate-2tb.jpg",
        description: "Disco duro externo portátil USB 3.0 de 2TB."
    },
    {
        id: 18,
        name: "Proyector Epson PowerLite X49",
        category: "proyectores",
        price: 449.99,
        stock: 12,
        img: "https://i.postimg.cc/qR4Cv4jq/proyector-epson-x49.jpg",
        description: "Proyector XGA con 3600 lúmenes y conectividad HDMI."
    },
    {
        id: 19,
        name: "Smartwatch Amazfit GTS 2",
        category: "wearables",
        price: 149.99,
        stock: 30,
        img: "https://i.postimg.cc/66HGBsR6/smartwatch-amazfit-gts2.jpg",
        description: "Reloj inteligente con GPS, monitor de frecuencia cardíaca y oxígeno."
    },
    {
        id: 20,
        name: "Cargador Portátil Xiaomi Mi Power Bank 20000mAh",
        category: "accesorios",
        price: 39.99,
        stock: 70,
        img: "https://i.postimg.cc/N0hHZ1X1/powerbank-xiaomi-20000.jpg",
        description: "Batería portátil de gran capacidad con carga rápida."
    }
]



// Promesa n° 1

export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (error) {
                // existe el error, rechazamos
                reject("hubo un error intente mas tarde")
            } else {
                resolve(productos)
            }
        }, 2000);
    })
}


// Promesa n° 2
export const getItem = (id) => {
    let error = false
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (error) {
                // existe el error, rechazamos
                reject("hubo un error intente mas tarde")
            } else {
                let prod = productos.find((item) => item.id === parseInt(id))
                resolve(prod)
            }

        }, 2000)
    })
}
