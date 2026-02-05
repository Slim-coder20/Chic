import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

/**
 * Composant NewsLetter
 * Formulaire d'inscription à la newsletter permettant aux utilisateurs
 * de s'abonner pour recevoir les dernières offres et promotions
 * Utilise react-hook-form pour la gestion du formulaire et react-hot-toast pour les notifications
 */

const NewsLetter = () => {
  // Configuration du formulaire avec react-hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  // Fonction de soumission de formulaire //
  const onSubmit = (data) => {
    // A implémenter après avec intégration API pour l'envoie de la requete vers le serveur //
    console.log("Newsletter", data);
    toast.success("Merci, Votre souscription a été effectué avec succès");
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pb-16 md:pb-24">
      <h1 className="md:text-4xl text-2xl font-light">
        Inscrivez-vous et profiter de 20% de réduction!
      </h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Inscrivez-vous pour recevoir les dernières offres, nos nouveautés et des
        réductions exclusives.
      </p>
      <div className="flex flex-col items-center w-full max-w-2xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center justify-between w-full md:h-13 h-12"
        >
          <input
            className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
            type="email"
            placeholder="Entrer votre email"
            {...register("email", { required: "Email est requis " })}
          />
          <button
            type="submit"
            className="md:px-12 px-8 h-full text-white bg-black hover:bg-gray-500 transition-all cursor-pointer rounded-md rounded-l-none whitespace-nowrap"
          >
            Inscrivez-vous
          </button>
        </form>
        {errors.email && (
          <p className="text-red-500 text-sm mt-2 w-full text-left">
            {errors.email.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
