import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function AddComponent({ isOpen, onClose }) {
  // State hooks para manejar los valores de los inputs
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [estado, setEstado] = useState("nuevo");
  const [error, setError] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir que el formulario recargue la página

    // Validación de campos requeridos
    if (!nombre || !categoria || !cantidad || !ubicacion || !estado) {
      setError("Todos los campos obligatorios deben ser llenados.");
      return;
    }

    // Validar que la cantidad no sea negativa
    if (parseInt(cantidad) < 0) {
      setError("La cantidad no puede ser negativa.");
      return;
    }

    // Aquí puedes proceder a enviar los datos al backend si todo es válido
    console.log("Datos enviados:", {
      nombre,
      categoria,
      cantidad,
      ubicacion,
      estado,
    });

    // Limpiar error y cerrar modal
    setError("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Añadir Componente</DialogTitle>
          <DialogDescription>
            Agrega un nuevo componente a tu lista.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nombre" className="text-right">
                Nombre
              </Label>
              <Input
                id="nombre"
                placeholder="Ej. Resistencia 20K"
                className="col-span-3"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="categoria" className="text-right">
                Categoría
              </Label>
              <Input
                id="categoria"
                placeholder="Ej. Resistencias"
                className="col-span-3"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cantidad" className="text-right">
                Cantidad
              </Label>
              <Input
                id="cantidad"
                type="number"
                placeholder="Ej. 30"
                className="col-span-3"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="ubicacion" className="text-right">
                Ubicación
              </Label>
              <Input
                id="ubicacion"
                placeholder="Ej. A1...A5"
                className="col-span-3"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="estado" className="text-right">
                Estado
              </Label>
              <select
                id="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                className="col-span-3 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
                required
              >
                <option value="nuevo">Nuevo</option>
                <option value="usado">Usado</option>
                <option value="no_funciona">Defectuoso</option>
              </select>
            </div>
          </div>

          {error && <div className="text-red-500 mt-2">{error}</div>}

          <DialogFooter>
            <Button type="submit">Guardar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
