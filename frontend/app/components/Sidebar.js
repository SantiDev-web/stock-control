"use client"
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Sidebar() {
    const [active, setActive] = useState("Inicio")

    return (
        <aside className="w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-800 text-gray-300 border-r border-gray-600 p-4 flex flex-col justify-between">
          <nav className="space-y-4">
            {["Inicio", "Configuración", "Documentos"].map((item) => (
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
              <AvatarFallback className='text-black'>A</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Admin</span>
          </div>
        </aside>
      );
}
