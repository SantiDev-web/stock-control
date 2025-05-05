"use client"; // Agregar esto al inicio del archivo

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function LogoutButton() {
    const router = useRouter()
  const handleLogout = () => {
    document.cookie = "authToken=; Max-Age=0; path=/;";

    console.log("Cerrando sesión...");
    router.push('/login')
  };

  return (
    <Button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
    >
      Salir
    </Button>
  );
}
