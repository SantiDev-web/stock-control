"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Usuario de prueba
  const userTest = { username: "admin", password: "admin" };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si los campos están vacíos
    if (!username || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    console.log("Datos enviados:", { username, password });

    setError(""); // Limpiar errores anteriores

    // Verificación de las credenciales
    if (username === userTest.username && password === userTest.password) {
      console.log("Credenciales correctas, redirigiendo...");
      document.cookie = "authToken=123456; path=/";
      router.push("/dashboard");
    } else {
      console.log("Credenciales incorrectas.");
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full opacity-95">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg sm:max-w-md lg:max-w-lg xl:max-w-xl mx-4 sm:mx-0 mt-10 p-8 bg-white/30 backdrop-blur-md shadow-2xl rounded-lg border border-white/40"
      >
        <h2 className="text-5xl font-bold text-white text-center mb-8 tracking-wide">
          Iniciar Sesión
        </h2>
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-lg font-medium text-white mb-2"
          >
            Usuario
          </label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-white/50 bg-white/20 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-lg font-medium text-white mb-2"
          >
            Contraseña
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-white/50 bg-white/20 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <Button
          type="submit"
          className="w-full py-3 bg-blue-500/80 text-white rounded-md hover:bg-blue-500 transition duration-300"
        >
          Iniciar Sesión
        </Button>
      </form>
    </div>
  );
}
