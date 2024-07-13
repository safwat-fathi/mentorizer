"use client";

import { GlobalErrorProps } from "@/app/[locale]/global-error";
import { useScopedI18n } from "@/locales/client";

const AppError = ({ error, reset }: GlobalErrorProps) => {
  const tGlobal = useScopedI18n("global");

  return (
    <div className="prose flex h-screen max-w-none flex-col items-center justify-center">
      <h2 className="text-center">{error.message || tGlobal("error.globalError")}</h2>
      <button onClick={() => reset()} className="btn btn-primary">
        {tGlobal("actions.tryAgain")}
      </button>
    </div>
  );
};

export default AppError;
