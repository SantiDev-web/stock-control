import LogoutButton from "../components/Logout";
import { Input } from "@/components/ui/input";
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center h-16 bg-gray-800 px-4">
      <div className="pt-1 ml-4">
      <Image src="/stockid-logo-gris.png" alt="Stockid Logo" width={75} height={100} />
      </div>
      {/* Contenedor del buscador centrado */}
      <div className="flex-1 flex justify-center">
        <Input
          type="text"
          placeholder="Buscar..."
          className="w-1/2 md:w-1/3 p-2 rounded-lg border border-gray-600 bg-gray-700 text-gray-300 focus:ring-blue-500"
        />
      </div>

      {/* Botón de salir completamente a la derecha */}
      <div className="ml-auto">
        <LogoutButton />
      </div>
    </header>
  );
}
