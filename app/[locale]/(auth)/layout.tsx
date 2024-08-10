import Providers from "@/lib/providers";
import { PropsWithChildren } from "react";

export default function AuthLayout({ params, children }: Readonly<PropsWithChildren<{ params: { locale: string } }>>) {
  return <Providers params={params}>{children}</Providers>;
}
