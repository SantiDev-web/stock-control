import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function components() {
  const style = {
    button: "bg-white",
    table: "mg"
  };
  return (
    <div className="justify-center items-center">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 drop-shadow-md">
          Lista de Componentes
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Gestiona tus componentes electrónicos de manera eficiente.
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Button className={style.button}>➕</Button>
        <Button className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
          Editar seleccionado
        </Button>
        <Button className="px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700">
          Eliminar seleccionado
        </Button>
      </div>

      <hr className="border-t border-gray-600 mt-1" />
      <Table className="mt-5 border border-gray-300 rounded-lg shadow-md">
        <TableCaption className="text-gray-600 font-semibold italic">
          Gestión de Componentes
        </TableCaption>
        <TableHeader className="bg-gray-500">
          <TableRow>
            <TableHead className="w-[100px] text-center font-semibold text-gray-700">
              Selección
            </TableHead>
            <TableHead className="w-[200px] text-left font-semibold text-gray-700">
              Nombre
            </TableHead>
            <TableHead className="text-right font-semibold text-gray-700">
              Categoría
            </TableHead>
            <TableHead className="text-right font-semibold text-gray-700">
              Cantidad
            </TableHead>
            <TableHead className="text-right font-semibold text-gray-700">
              Ubicación
            </TableHead>
            <TableHead className="text-right font-semibold text-gray-700">
              Estado
            </TableHead>
            <TableHead className="text-right font-semibold text-gray-700">
              Fecha de ingreso
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-blue-50">
            <TableCell className="text-center">
              <input
                type="checkbox"
                className="h-5 w-5 text-blue-600 rounded focus:ring focus:ring-blue-300"
              />
            </TableCell>
            <TableCell className="text-left font-medium text-gray-800">
              Resistencias 20K
            </TableCell>
            <TableCell className="text-right text-gray-600">
              Resistencias
            </TableCell>
            <TableCell className="text-right text-gray-600">30</TableCell>
            <TableCell className="text-right text-gray-600">A5</TableCell>
            <TableCell className="text-right text-gray-600">Nuevo</TableCell>
            <TableCell className="text-right text-gray-600">
              20-04-2025
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-blue-50">
            <TableCell className="text-center">
              <input
                type="checkbox"
                className="h-5 w-5 text-blue-600 rounded focus:ring focus:ring-blue-300"
              />
            </TableCell>
            <TableCell className="text-left font-medium text-gray-800">
              Capacitores 10µF
            </TableCell>
            <TableCell className="text-right text-gray-600">
              Capacitores
            </TableCell>
            <TableCell className="text-right text-gray-600">50</TableCell>
            <TableCell className="text-right text-gray-600">B2</TableCell>
            <TableCell className="text-right text-gray-600">Usado</TableCell>
            <TableCell className="text-right text-gray-600">
              18-03-2025
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
