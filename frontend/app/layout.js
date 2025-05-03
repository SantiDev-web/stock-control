import "./globals.css";


export const metadata = {
  title: "Stockid",
  description: "Ten el control total de tu stock",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
