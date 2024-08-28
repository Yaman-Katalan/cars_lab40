'use client';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeWrapper from "./context/theme";
import AuthWrapper from "./context/auth";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900">
        <ThemeWrapper>
          <AuthWrapper>
            <Header />
            <main className="dark:bg-gray-900">{children}</main>
            <Footer />
          </AuthWrapper>
        </ThemeWrapper>
      </body>
    </html>
  );
}