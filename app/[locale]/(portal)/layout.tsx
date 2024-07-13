import Footer from "@/lib/components/Footer";
import Navbar from "@/lib/components/Navbar";
import Providers from "@/lib/providers";
import { ReactNode } from "react";

export default function HomeLayout({
  params,
  children,
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  return (
    <Providers params={params}>
      <Navbar />
      {children}
      <Footer />
    </Providers>
  );
}
