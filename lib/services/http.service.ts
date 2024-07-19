// import { getCookieAction } from "@/app/[locale]/actions";
// import { createParams } from "@/lib/utils/qs";
import { getCookieAction } from "@/app/[locale]/actions";
import { HttpServiceAbstract, IPaginatedResponse, IParams, IResponse, TMethod } from "@/types/services";
import { EmptyObject } from "@/types/utils";
import CONSTANTS from "../constants";
import { createParams } from "../utils/qs";

// import CONSTANTS from "../constants";
// import authService from "./auth.service";

export default class HttpService<T = EmptyObject> extends HttpServiceAbstract<T> {
  private _url: string;
  private _token: string | null = null;
  private _options: RequestInit = {};

  constructor(route: string) {
    super();

    if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
      throw new Error("Base API URL is not defined");
    }

    this._url = process.env.NEXT_PUBLIC_BASE_API_URL + route;

    // set timeout for requests
    this._options.signal = AbortSignal.timeout(6000);
  }

  private async _request(
    route: string,
    method: TMethod,
    options?: RequestInit,
    params?: IParams,
    isFormData?: boolean,
    maxAttempts = 2
  ) {
    const attempt = async (attempts = 1) => {
      if (attempts >= maxAttempts) {
        throw new Error("Maximum retry attempts reached");
      }

      try {
        this._token = await getCookieAction(CONSTANTS.ACCESS_TOKEN);

        this._options = {
          method,
          headers: {
            ...(this._token && {
              Authorization: `Bearer ${this._token}`,
            }),
            ...(!isFormData && {
              "Content-Type": "application/json",
            }),
            // "Accept-Language": "en",
          },
          ...options,
        };

        const urlParams = createParams(params || {});

        const fullURL = this._url + route + "?" + urlParams.toString();

        const response = await fetch(fullURL, this._options);

        if (!response.ok) throw new Error(response.statusText);

        // No content response
        if (response.status === 204) return;

        if (response.status === 401) {
          // call refresh token
          // const refreshTokenRes = await authService.refreshToken();

          // if response is ok assign new token to this._token
          // store new token in cookies

          // if (refreshTokenRes?.errors) throw new Error(refreshTokenRes.errors[0].message);

          // if (refreshTokenRes?.data) this._token = refreshTokenRes.data.access_token;

          return await attempt(attempts + 1);
        }

        if (response.status === 403) {
          throw new Error("You don't have permission to access this resource");
        }

        return response;
      } catch (err: unknown) {
        // const message = handleHttpError(err);
        // throw new Error(message);
      }
    };

    return await attempt();
  }

  protected async get(
    route: string,
    params?: IParams,
    options?: RequestInit | undefined
  ): Promise<Response | undefined> {
    return await this._request(route, "GET", options, params);
  }

  protected async getList(
    route: string,
    params?: IParams,
    options?: RequestInit | undefined
  ): Promise<IPaginatedResponse<T> | undefined> {
    const res = await this._request(route, "GET", options, params);

    if (res && res.ok) {
      return await res.json();
    }

    return undefined;
  }

  protected async post(route: string, body: any, params?: IParams, options?: RequestInit) {
    const isFormData = body instanceof FormData;
    const dataToSend = isFormData ? body : JSON.stringify(body);

    const res = await this._request(route, "POST", { ...options, body: dataToSend }, params, isFormData);

    if (res && res.ok) {
      return await res.json();
    }

    return undefined;
  }

  protected async put(
    route: string,
    body: any,
    _params?: IParams,
    options?: RequestInit
  ): Promise<IResponse<T> | undefined> {
    const isFormData = body instanceof FormData;
    const dataToSend = isFormData ? body : JSON.stringify(body);

    const res = await this._request(route, "PUT", { ...options, body: dataToSend }, _params);

    if (res && res.ok) {
      return await res.json();
    }

    return undefined;
  }

  protected async delete(route: string, _params?: IParams, options?: RequestInit): Promise<IResponse<T> | undefined> {
    const res = await this._request(route, "DELETE", { ...options }, _params);

    if (res && res.ok) {
      return await res.json();
    }

    return undefined;
  }
}
