// Importing types and utilities from Next.js
import type { Metadata } from "next"; // Metadata type for SEO and page info
import localFont from "next/font/local"; // Utility to load local fonts
import "./globals.css"; // Importing global styles for the application

// Loading custom fonts and defining associated CSS variables
const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Custom sans-serif font file path
  variable: "--font-geist-sans", // CSS variable for the font
  weight: "100 900", // Font weight range for flexibility
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Custom monospace font file path
  variable: "--font-geist-mono", // CSS variable for the font
  weight: "100 900", // Font weight range for flexibility
});

// Metadata for the web application
export const metadata: Metadata = {
  title: "Nike", // Page title
  description: "Hackathon Project", // SEO description
};

// RootLayout component defines the structure and fonts applied globally
export default function RootLayout({
  children, // Child components to render inside the layout
}: Readonly<{
  children: React.ReactNode; // Type for the children property
}>) {
  return (
    <html lang="en"> {/* Set the page language to English */}
      <head>
        {/* Placeholder for additional head content */}
        <meta charSet="UTF-8" /> {/* Specify character encoding */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} // Applying custom fonts and anti-aliasing for smoother text
      >
        {children} {/* Render the child components */}
      </body>
    </html>
  );
}
