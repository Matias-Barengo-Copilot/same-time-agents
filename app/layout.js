import './globals.css';

export const metadata = {
  title: 'Orbita — Ship faster, together',
  description: 'Landing page de un SaaS ficticio, base para el Build Lab.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
