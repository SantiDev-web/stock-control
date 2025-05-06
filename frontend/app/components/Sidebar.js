"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Home from "./Home";
import Components from "./Components";
import Categories from "./Categories";
import Historial from "./Historial";
import Config from "./Config";
import Header from "./Header";

export default function App() {
  const [active, setActive] = useState("Inicio");

  const components = {
    Inicio: <Home />,
    Componentes: <Components />,
    Categorías: <Categories />,
    Historial: <Historial />,
    Configuración: <Config />,
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <Header />

      {/* Contenedor principal */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-gray-300 border-r border-gray-600 p-4 flex flex-col justify-between">
          <nav className="space-y-4">
            {["Inicio", "Componentes", "Categorías", "Historial", "Configuración"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setActive(item)}
                className={`block p-3 rounded-lg transition-all ${
                  active === item ? "bg-gray-700 text-white" : "hover:bg-gray-700"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          {/* Imagen de perfil */}
          <div className="border-t border-gray-600 pt-4 flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/ruta-de-tu-imagen.jpg" alt="Perfil" />
              <AvatarFallback className="text-black">A</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Admin</span>
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 bg-gray-300 overflow-y-auto p-4">
          {components[active]}
        </main>
      </div>
    </div>
  );
}
