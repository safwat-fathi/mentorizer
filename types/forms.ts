import { EmptyObject } from "./utils";

export type FormState<T = EmptyObject> = {
  message: string;
  data?: T;
  errors?: Record<string, string | boolean>;
};
