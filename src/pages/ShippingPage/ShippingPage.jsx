export const ShippingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Información de Envíos</h1>

      {/* Introducción */}
      <p className="text-gray-600 mb-4">
        En nuestra tienda, trabajamos para que recibas tus productos de forma rápida, segura y al mejor costo. A continuación, encontrarás toda la información relacionada con nuestras políticas de envío.
      </p>

      {/* Métodos de Envío */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Métodos de Envío</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Envío estándar: Entrega dentro de 5 a 7 días hábiles.</li>
          <li>Envío rápido: Entrega dentro de 2 a 3 días hábiles.</li>
          <li>Envío en el día: Disponible en ciertas localidades para pedidos realizados antes de las 12:00 p.m.</li>
        </ul>
      </div>

      {/* Costos de Envío */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Costos de Envío</h2>
        <p className="text-gray-600">
          Ofrecemos envío gratis en pedidos mayores a <strong>$40,000</strong>. Para pedidos menores, los costos varían según la ubicación y el método de envío seleccionado:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Envío estándar: <strong>$1,200</strong></li>
          <li>Envío rápido: <strong>$2,500</strong></li>
          <li>Envío en el día: <strong>$3,500</strong></li>
        </ul>
      </div>

      {/* Políticas de Envío */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Políticas de Envío</h2>
        <p className="text-gray-600">
          - Procesamos los pedidos de lunes a viernes, excluyendo días festivos. <br />
          - Los tiempos de envío pueden variar según la disponibilidad del producto y la ubicación de entrega. <br />
          - Recibirás un número de seguimiento tan pronto como tu pedido sea despachado.
        </p>
      </div>

      {/* Restricciones */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Restricciones</h2>
        <p className="text-gray-600">
          Actualmente, no realizamos envíos a zonas rurales de difícil acceso o fuera del territorio nacional.
        </p>
      </div>

      {/* Contacto */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">¿Dudas sobre tu envío?</h2>
        <p className="text-gray-600">
          Si tenés preguntas sobre tu envío, podés contactarnos al <strong>0800-123-4567</strong> o enviar un correo a <strong>envios@erenshop.com</strong>. ¡Estamos acá para ayudarte!
        </p>
      </div>
    </div>
  );
};
