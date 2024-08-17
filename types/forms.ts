export type FormError = Record<string, string>;

export type FormState =
  | {
      success: true;
      message: string;
      data?: unknown;
      errors?: never;
    }
  | {
      success: false;
      message: string;
      data?: never;
      errors?: FormError;
    }
  | null;
