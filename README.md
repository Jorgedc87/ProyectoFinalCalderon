# <span style="display:flex;justify-content: center;align-items: center;gap:15px"> <img src="./src/assets/images/eren-logo.webp" style="width: 40px"><b style="margin-left:20px">EREN - PetShop</b></span>

## Descripción

Este proyecto es la entrega final del curso de React de **Coderhouse**. 

El diseño es completamente responsivo gracias al uso de **TailwindCSS**.

Es un e-commerce completo de una PetShop, conectada a una base de datos Firebase. La misma maneja una colección de productos, con su respectivo stock, y órdenes de compra. También guarda emails para suscripciones.

## Tecnologías

- **React 18** para una interfaz moderna y dinámica.
- **TailwindCSS** para estilos responsivos y consistentes.
- **Vite** como herramienta de desarrollo rápida y eficiente.

## Instalación

Sigue los siguientes pasos para instalar y ejecutar el proyecto:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Jorgedc87/CreaTuLanding1Calder-n.git
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar la instancia de desarrollo:
   ```bash
   npm run dev
   ```

## Funcionalidades destacadas

- **Filtros dinámicos:** La sección de productos permite filtrar por categoría (Perros, Gatos y Peces).
- **Página de detalles de producto (Item):** Visualiza información detallada de un producto, incluyendo su imagen, descripción, precio actualizado, y un selector de cantidad con diseño responsivo.
- **Footer completo:** Contiene:
  - Logo principal de la tienda.
  - Mapa del sitio para navegación rápida.
  - Logotipos de medios de pago (Mercado Pago, MODO, entre otros) con diseño adaptativo.
- **Página de Error 404:** Una vista estilizada y amigable que informa cuando el usuario accede a una ruta no válida, con un botón para regresar al inicio.
- **Página de envíos:** Información ficticia detallada sobre los métodos de envío, tiempos estimados y costos.
- **CardWidget:** Manejo perfecto del carrito donde podrán agregarse productos en tiempo real, eliminarlos o vaciarlos. Al comprar, te devuelve un código de compra.
- **Suscripciones:** Permite guardar suscripciones (emails).
- **Notificaciones Toast:** Uso de Sonner para las diferentes notificaciones en el sitio.
- **Uso de Contextos:** Manejo de dos contextos para evitar la propagación de props entre componentes innecesariamente.
- **Diseño responsivo:** Cada vista y componente están optimizados para dispositivos móviles, tabletas y escritorios, gracias al uso de TailwindCSS.

## Despliegue en Vercel

**Sitio:** https://eren-petshop.vercel.app/

## Licencia y versión
- **Versión:** 1.2
- **Licencia:** Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.
- **Autor:** Jorge Calderón