"use client";

import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Electronico.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay */}
      <div className="relative z-20 flex flex-col md:flex-row h-full">
        {/* Sección izquierda con texto */}
        <div className="flex items-center justify-center w-full md:w-1/2 text-center px-6 md:px-16 py-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg font-heading">
              Stockid
            </h1>
            <p className="mt-4 text-base md:text-lg text-white opacity-90 drop-shadow-md font-sans">
              Ten el control total de tu stock de manera sencilla y eficiente.
            </p>
          </div>
        </div>

        {/* Sección derecha con el formulario de login */}
        <div className="flex items-center justify-center w-full md:w-1/2">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
