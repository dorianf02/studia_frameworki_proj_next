"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "@/app/lib/firebase/firebase";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Hasła nie są zgodne!");
      return;
    }

    try {
      // Próbujemy zarejestrować użytkownika
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Jeśli rejestracja przebiegła pomyślnie, wysyłamy wiadomość weryfikacyjną
      await sendEmailVerification(userCredential.user); 
      alert("Rejestracja powiodła się! Sprawdź swoją skrzynkę pocztową.");
      router.push("/user/verify");  // Przekierowanie na stronę weryfikacji

    } catch (err) {
      // Sprawdzamy, czy błąd to już zarejestrowany email
      if (err.code === "auth/email-already-in-use") {
        setError("Adres email jest już zarejestrowany. Proszę użyj innego adresu.");
      } else {
        setError(err.message || "Wystąpił błąd rejestracji.");
      }
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white shadow-md rounded-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Rejestracja użytkownika</h2>
        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Hasło:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="block mb-4">
          Potwierdź hasło:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </label>
        <button
          type="submit"
          className="btn btn-primary w-full py-2 rounded-md"
        >
          Zarejestruj się
        </button>
      </form>
    </div>
  );
}


