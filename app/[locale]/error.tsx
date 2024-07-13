"use client";

import AppError from "@/lib/components/AppError";
import Providers from "@/lib/providers";

import { useParams } from "next/navigation";
import { GlobalErrorProps } from "./global-error";

export default function Error({ error, reset }: GlobalErrorProps) {
  const params = useParams();

  return (
    <main>
      <Providers params={params as { locale: string }}>
        <AppError error={error} reset={reset} />
      </Providers>
    </main>
  );
}
