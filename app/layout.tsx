import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s- GizmoStore Online Store",
    default: "GizmoStore Online Store"
  },
  description: "GizmoStore Online Store, Your One stop shop for all your needs"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased " >{children}</body>
    </html>
  );
}
