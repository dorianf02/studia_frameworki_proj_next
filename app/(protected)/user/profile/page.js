"use client";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useAuth } from "@/app/lib/AuthContext"; 
import { updateProfile } from "firebase/auth"; 


export default function ProfilePage() {
  const { user } = useAuth(); 
  const [formData, setFormData] = useState({
    displayName: "",
    photoURL: "",
    email: "",
  });
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(""); 

  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (data) => {
    if (!user) {
      setError("Nie ma użytkownika do zaktualizowania.");
      return;
    }

    updateProfile(user, {
      displayName: data.displayName,
      photoURL: data.photoURL,
    })
      .then(() => {
        console.log("Profile updated");
        setSuccess("Profil został zaktualizowany pomyślnie.");
        setError(""); 
      })
      .catch((error) => {
        setError(error.message);
        setSuccess(""); 
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex justify-center items-center">
      <div className="p-6 bg-white shadow-md rounded-md max-w-lg w-full">
        <header className="text-center mb-6">
          <h1 className="text-2xl font-extrabold text-green-600">
            Twój Profil Użytkownika
          </h1>
          <p className="text-gray-600 mt-2">
            Zaktualizuj swoje dane w poniższym formularzu.
          </p>
        </header>

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 border border-red-400 rounded-md">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 border border-green-400 rounded-md">
            {success}
          </div>
        )}

        <div className="mb-6 flex justify-center">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile Picture"
              className="w-32 h-32 rounded-full border-4 border-green-500 object-cover"
            />
          ) : (
            <img
              src="/default-avatar.png" 
              alt="Default Profile Picture"
              className="w-32 h-32 rounded-full border-4 border-green-500 object-cover"
            />
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Nazwa użytkownika:</span>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-200"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Zdjęcie (URL):</span>
            <input
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-200"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-100"
            />
          </label>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:ring focus:ring-green-300"
          >
            Zapisz zmiany
          </button>
        </form>
      </div>
    </div>
  );
}
