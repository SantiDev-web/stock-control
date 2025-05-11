import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Categories() {
  // Lista estática de categorías con imágenes de ejemplo
  const categories = [
    { id: 1, name: "Pantallas", image: "/images/pantallas.png" },
    { id: 2, name: "Arduino", image: "/images/arduino.png" },
    { id: 3, name: "ESP32", image: "/images/esp32.png" },
    { id: 4, name: "Cables", image: "/images/cables.png" },
    { id: 5, name: "Protoboard", image: "/images/protoboard.png" },
    { id: 6, name: "Leds", image: "/images/leds.png" },
    { id: 7, name: "Resistencias", image: "/images/resistencias.png" },
    { id: 8, name: "Potenciómetros", image: "/images/potenciometros.png" },
    { id: 9, name: "Sensores", image: "/images/sensores.png" },
    { id: 10, name: "Otros", image: "/images/otros.png" },
  ];

  return (
    <Card className="w-full max-w-5xl mx-auto mt-8">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Categorías</CardTitle>
        <CardDescription className="text-lg">
          Selecciona una categoría para explorar componentes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center p-6 border rounded-lg shadow-md hover:shadow-lg transition bg-white"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-gray-600 font-semibold italic">
          Gestion de categorías
        </p>
      </CardFooter>
    </Card>
  );
}
