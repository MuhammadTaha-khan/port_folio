import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Contact/>
      </body>
    </html>
  );
}
