import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ClerkProvider
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    template: "%s- GizmoStore Online Store",
    default: "GizmoStore Online Store",
  },
  description: "GizmoStore Online Store, Your One stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased ">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
