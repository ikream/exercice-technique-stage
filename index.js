import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Home() {
  const { register, handleSubmit, reset } = useForm();
  const [info, setInfo] = useState(null); // Pour afficher les informations modifiées ou récupérées

  const onSubmit = async (data) => {
    try {
      // Si tu veux envoyer les données vers une API ou une base de données
      await axios.post("/api/entreprise", data);
      setInfo(data); // Met à jour les informations affichées
      reset(); // Réinitialise le formulaire après soumission
    } catch (error) {
      console.error("Erreur lors de l'ajout des données", error);
    }
  };

  return (
    <div>
      <h1>Informations de l'entreprise</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nom de l'entreprise:
          <input
            type="text"
            placeholder="Nom"
            {...register("nom", { required: true })}
          />
        </label>

        <label>
          Adresse:
          <input
            type="text"
            placeholder="Adresse"
            {...register("adresse", { required: true })}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </label>

        <label>
          Téléphone:
          <input
            type="tel"
            placeholder="Téléphone"
            {...register("telephone", { required: true })}
          />
        </label>

        <button type="submit">Soumettre</button>
      </form>

      {info && (
        <div>
          <h2>Informations mises à jour</h2>
          <p>Nom: {info.nom}</p>
          <p>Adresse: {info.adresse}</p>
          <p>Email: {info.email}</p>
          <p>Téléphone: {info.telephone}</p>
        </div>
      )}
    </div>
  );
}