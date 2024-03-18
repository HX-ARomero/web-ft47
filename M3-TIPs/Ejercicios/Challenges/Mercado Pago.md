# Challenge web - Integración de Mercado Pago

### En este challenge web, el objetivo es integrar Mercado Pago en una aplicación web.

Para este proyecto, se debe desarrollar una aplicación web que permita a los usuarios realizar pagos utilizando Mercado Pago. 

## La aplicación debe incluir las siguientes funcionalidades:
- Visualización de productos. Utilizando **json** que se **adjunta al final de este readme**.
- Selección de productos y cantidad a comprar.
- Proceso de pago utilizando Mercado Pago como servicio de pago.
- Confirmación del pago y redirección a una página de agradecimiento.
- La aplicación debe estar desarrollada utilizando Express como framework de desarrollo.

## Requisitos técnicos
- La aplicación debe estar desarrollada utilizando Express como framework de desarrollo.
- Se debe utilizar Mercado Pago como servicio de pago para el proceso de pago.
- La visualización de los productos debe ser dinámica y los productos deben ser cargados desde un archivo JSON.
- La aplicación debe incluir el formulario de pago.
- El formulario de pago debe incluir los siguientes campos: nombre del producto o servicio, precio, cantidad, y el botón de pago.
- La aplicación debe validar el pago y mostrar una página de agradecimiento al usuario después de que se complete el proceso de pago.

## Entregables
- Código fuente de la aplicación web desarrollada en Express (mediante enlace a repositorio en GitHub)
- Documentación de la aplicación que incluya una descripción de las funcionalidades desarrolladas y cómo utilizarlas.

### Consideraciones adicionales (extra)

Se valorará el uso de buenas prácticas de programación y la implementación de medidas de seguridad adecuadas para la protección de los datos de los usuarios y los procesos de pago.

¡Esperamos que este challenge web te resulte útil para desarrollar tus habilidades con Express y la integración de Mercado Pago!!!

## JSON de productos a utilizar
```json
[
    {
        "id":1,
        "title":"Celular MOTOROLA MOTO E13",
        "description":"Celular de 6.5. IPS (720 x 1600) HD+, 60 HZ. Procesador Octa core 1.6 GHz",
        "image":"https://tosellihogar.com.ar/wp-content/uploads/2023/01/4682-8.jpg",
        "stock":5,
        "condition":"new",
        "price": 2
    },
    {
        "id":2,
        "title":"Tarjeta de memoria Kingston SDCS",
        "description":"Esta tarjeta MicroSDHC es ideal para móviles. Su tamaño pequeño facilita su uso y ofrece gran comodidad y practicidad",
        "image":"https://http2.mlstatic.com/D_NQ_NP_2X_927143-MLA42003898015_052020-F.webp",
        "stock":6,
        "condition":"new",
        "price": 323
    },
    {
        "id":3,
        "title":"SDHC CARD 16GB MITSUBISHI",
        "description":"Memoria estándar SDHC de 16 GB",
        "image":"https://ar.wiautomation.com/public/images/landing/anticipa/product/ixr5kSQBju7Pi7pvKubx0cCQDzxzM0xa3Hlr00yP7SF08CUNTw2NwdbmOqJl.jpg",
        "stock":6,
        "condition":"new",
        "price": 433
    },
    {
        "id":4,
        "title":"Motorola Moto G71",
        "description":"Características y precio del nuevo móvil de gama media",
        "image":"https://s1.eestatic.com/2021/11/18/elandroidelibre/moviles-android/628198853_215362143_1706x960.jpg",
        "stock":4,
        "condition":"new",
        "price": 532
    },
    {
        "id":5,
        "title":"APPLE IPHONE 13 PRO 512GB GREEN",
        "description":"Pantalla Super Retina XDR de 6.7 pulgadas con ProMotion",
        "image":"https://front.dev.malditohard.com.ar/img/migration/APPLE--IPHONE-13-PRO-512GB-GREEN.webp",
        "stock":20,
        "condition":"new",
        "price": 24
    },
    {
        "id":6,
        "title":"APPLE WATCH SERIE SE 44MM RELOJ SILVER",
        "description":"El Apple Watch SE tiene el mismo tamaño de pantalla que el Apple Watch",
        "image":"https://front.dev.malditohard.com.ar/img/migration/APPLE-WATCH-SERIE-SE-44MM-RELOJ-SILVER.webp",
        "stock":22,
        "condition":"new",
        "price": 2432
    },
    {
        "id":7,
        "title":"Impresora HP Deskjet Advantage 2375",
        "description":"Imprima, escanee y copie los documentos cotidianos con la todo en uno más asequible de HP",
        "image":"https://front.dev.malditohard.com.ar/img/migration/Impresora-HP-Deskjet-Advantage-2375.webp",
        "stock":2,
        "condition":"new",
        "price": 234
    },
    {
        "id":8,
        "title":"APPLE WATCH SERIE 3 RELOJ 42MM SPACE",
        "description":"Apple Watch Series 3 GPS",
        "image":"https://front.dev.malditohard.com.ar/img/migration/APPLE-WATCH-SERIE-3-RELOJ-42MM-SPACE-GREY-GPS.webp",
        "stock":3,
        "condition":"new",
        "price": 2342
    },
    {
        "id":9,
        "title":"Apple iPhone 13 Pro Max",
        "description":"Pantalla Super Retina XDR de 6.7 pulgadas con ProMotion que brinda una respuesta más rápida",
        "image":"https://http2.mlstatic.com/D_NQ_NP_2X_882160-MLA47775355993_102021-F.webp",
        "stock":7,
        "condition":"new",
        "price": 2342
    },
    {
        "id":10,
        "title":"APPLE AIRPODS GENERACION 3 GEN",
        "description":"Los AirPods son livianos y ofrecen un diseño contorneado. Se sientan en el ángulo correcto para mayor comodidad y para dirigir mejor el audio a su oído",
        "image":"https://front.dev.malditohard.com.ar/img/migration/APPLE-AIRPODS-GENERACION-3-GEN.webp",
        "stock":14,
        "condition":"new",
        "price": 46
    },
    {
        "id":11,
        "title":"APPLE WATCH SERIE 8 41MM RELOJ RED",
        "description":"Características de seguridad innovadoras: la detección de golpes y la detección de caídas pueden conectarte automáticamente con servicios de emergencia en caso de un choque severo en el coche o una caída dura",
        "image":"https://front.dev.malditohard.com.ar/img/migration/APPLE-WATCH-SERIE-8-41MM-RELOJ-RED.webp",
        "stock":4,
        "condition":"new",
        "price": 31456
    },
    {
        "id":12,
        "title":"Samsung Galaxy Z Flip4 5G 256/8GB",
        "description":"Celular. Pantalla de 6.6\", 2640 x 1080 (FHD+), Dynamic AMOLED 2X, 120Hz. Procesador Snapdragon 8+ gen 1 Qualcomm SM8475, Octa core 3.18GHz,2.7GHz,2GHz",
        "image":"https://aremsaprod.vteximg.com.br/arquivos/ids/353775-1000-1000/image-c4aebff59af3460a8fd362de463f6bc5.jpg?v=637983425000730000",
        "stock":4,
        "condition":"new",
        "price": 135
    },
    {
        "id":13,
        "title":"TABLET KANJI KJ-ARIZONA 7' 16 GB NEGRO",
        "description":"Tablet. Pantalla: 7\" con una resolucion de 1024 x 600 Px. Procesador: Quad Core. Almacenamiento: 16 Gb. Memoria RAM: 2 Gb. Wifi. Bluetooth",
        "image":"https://aremsaprod.vteximg.com.br/arquivos/ids/403253-500-500/image-f8c02d7d65e34df097e6b57e359ac50b.jpg?v=638151083134600000",
        "stock":5,
        "condition":"new",
        "price": 143
    },
    {
        "id":14,
        "title":"TABLET POSITIVO BGH T770K 7' 16GB NEGRO",
        "description":"Pant.7\" 1024x600px . Proc.Rockchip 3326 1.5Ghz. SO Android 8.1. Memoria int.16Gb/RAM 1Gb. Camara frontal 0.3mp. Wi-Fi. Multitouch. USB. Video HD. Bateria 2400mAh. Incluye: funda de silicona, cargador, cable USB",
        "image":"https://aremsaprod.vteximg.com.br/arquivos/ids/405566-1000-1000/image-37a62e119e8a4f31b418769a7f125565.jpg?v=638163037014930000",
        "stock":6,
        "condition":"new",
        "price": 134
    },
    {
        "id":15,
        "title":"TABLET X-VIEW MYMO MAX 7' 32 GB ROJO",
        "description":"Tablet. Sistema operativo Android 8.1. Pantalla LCD 7. Resolucion HD 1024 x 600 Px. Almacenamiento: 32 GB. Memoria RAM 2GB DDR3. Multi touch capacitiva. Conexion Micro USB. Dual camera 0.3mp / 2.0mp. Slot Micro SD (expansible hasta 128GB). Conexion WiFi 8",
        "image":"https://aremsaprod.vteximg.com.br/arquivos/ids/398246-1000-1000/image-0e2e87803e7d4f8f8bed89d98ec59709.jpg?v=638143238344070000",
        "stock":6,
        "condition":"new",
        "price": 134
    },
    {
        "id":16,
        "title":"Apple Smart Folio p/ iPad Pro 11",
        "description":"La funda Smart Folio está fabricada con una única pieza de poliuretano para proteger tu iPad Air por ambos lados. También lo activa cuando la abres y lo pone en reposo cuando la cierras. Puedes plegar la Smart Folio en distintas posiciones y convertirla en el soporte perfecto para leer, escribir, ver películas o hacer videollamadas FaceTime.",
        "image":"https://aremsaprod.vteximg.com.br/arquivos/ids/390043-1000-1000/image-5c790b14abdb411c8e5c7af09405013f.jpg?v=638116505512970000",
        "stock":7,
        "condition":"new",
        "price": 3141
    },
    {
        "id":17,
        "title":"iPad mini Wi-Fi 64GB (6ta Gen) - Space Grey",
        "description":"iPad mini Wi-Fi 64GB (6ta Gen). Nuevo iPad mini Grande en poder. Mini en tamaño. Marca: Apple Línea: iPad Mini 6ta Gen Procesador: Chip A15 Bionic con arquitectura de 64 bits Capacidad: 64GB Tamaño de la pantalla: 8,3 Con conexión celular: no Nombre del sistema operativo: iPadOS15 Conectividad: wifi-bluetooth Cantidad de cámaras traseras: 1 Alto: 19,54 cm Ancho: 13,48 cm Profundidad: 0,63 cm Peso: 293 g",
        "image":"https://aremsaprod.vteximg.com.br/arquivos/ids/390039-1000-1000/image-f4f9b08fe8d24c4bb624f401f21e935a.jpg?v=638116500424370000",
        "stock":8,
        "condition":"new",
        "price": 1345
    },
    {
        "id":18,
        "title":"iPhone con iOS 14 - Apple (LA)",
        "description":"iOS 14 viene con nuevas formas de personalizar la pantalla de inicio, descubrir y usar apps con App Clips, y mantenerse conectado con Mensajes",
        "image":"https://www.apple.com/newsroom/images/product/os/ios/standard/Apple_ios14-app-library-screen_06222020_inline.jpg.large.jpg",
        "stock":8,
        "condition":"new",
        "price": 345
    }
]
```