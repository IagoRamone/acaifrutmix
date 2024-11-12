// src/app/layout.tsx
import React, { ReactNode } from 'react';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Açaí Frut Mix</title>
        <meta name="description" content="Your app description here" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;