import { useState } from "react";
import { toast } from "sonner";
import { saveSubscriber } from "../../firebase/firebase";

export const SubscriptionSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false); 

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.warning("Por favor ingresa un correo electrónico válido");
      return;
    }

    setIsSubmitting(true); 

    try {
      const result = await saveSubscriber(email);

      if (result === "exists") {
        toast.warning("Este correo electrónico ya está suscrito");
      } else if (result === "success") {
        toast.success("¡Gracias por suscribirte!");
        setIsSubscribed(true);
      }
    } catch (error) {
      toast.warning("Hubo un problema al intentar suscribirte");
    } finally {
      setIsSubmitting(false); 
    }

  };

  return (
    <section className="container mt-16 max-w-[1000px] mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">¡Suscríbete a nuestro boletín!</h2>
      <p className="text-gray-600 mb-6">Sé el primero en enterarte de nuestras promociones y novedades.</p>
      <form className="flex flex-col md:flex-row items-center gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubscribed}
        />
        <button
          type="submit"
          className="w-full md:w-1/3 px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
          disabled={isSubmitting || isSubscribed} 
        >
          {isSubscribed ? "Ya estás suscrito" : "Suscribirme"}
        </button>
      </form>
    </section>
  );
};
