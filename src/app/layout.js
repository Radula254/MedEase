import { Roboto } from "next/font/google";
import "./globals.css";
import AppProvider from "../components/AppContext.js";
import Header from "@/components/layout/Header/Header";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "MedEase",
  description: "MedEase Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>
          <AppProvider>
            <Toaster />
            <Header />
            {children}
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
