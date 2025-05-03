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
      document.cookie = 'authToken=123456; path=/';
      router.push("/dashboard");
    } else {
      console.log("Credenciales incorrectas.");
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg sm:max-w-md lg:max-w-lg xl:max-w-xl mx-4 sm:mx-0 mt-10 p-8 bg-white shadow-xl rounded-lg"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">
          Iniciar Sesión
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Usuario
          </label>
          <Input
            id="username"
            type="text"
            placeholder="Ingresa tu usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Contraseña
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <Button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Iniciar Sesión
        </Button>
      </form>
    </div>
  );
}
