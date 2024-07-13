"use client";

import { useEffect } from "react";

import Providers from "@/lib/providers";
import { useParams } from "next/navigation";
import AppError from "@/lib/components/AppError";

export type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  const params = useParams();

  useEffect(() => {
    // log error to logger service
  }, [error]);

  return (
    <html>
      <body>
        <main>
          <Providers params={params as { locale: string }}>
            <AppError error={error} reset={reset} />
          </Providers>
        </main>
      </body>
    </html>
  );
}
