import "./globals.css";

export const metadata = {
  title: "HCM Management",
  description: "Human Capital Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}