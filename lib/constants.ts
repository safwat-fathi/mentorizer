export enum Constants {
  ACCESS_TOKEN = "access_token",
  REFRESH_TOKEN = "refresh_token",
  EXPIRES = "expires",
  EXPIRES_AT = "expires_at",
  REGISTERED = "registered",
}

type ConstantsMap = { [key in keyof typeof Constants]: (typeof Constants)[key] };

const CONSTANTS: Readonly<ConstantsMap> = Constants;

export default CONSTANTS;
