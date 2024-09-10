import Footer from "@/lib/components/Footer";
import Navbar from "@/lib/components/Navbar";
import Providers from "@/lib/providers";
import { PropsWithChildren } from "react";

export default function AuthLayout({ params, children }: Readonly<PropsWithChildren<{ params: { locale: string } }>>) {
  return (
    <Providers params={params}>
      <Navbar />
      {children}
      <Footer />
    </Providers>
  );
}
