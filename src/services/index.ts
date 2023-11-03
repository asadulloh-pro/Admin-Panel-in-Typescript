import axios, { AxiosRequestConfig } from "axios";

class BaseService {
  axios = axios.create({
    baseURL: "https://fakestoreapi.com"
  });

  public get(
    endpoint: string,
    options?: Omit<AxiosRequestConfig, "url" | "method">
  ) {
    return this.axios({
      ...options,
      url: endpoint,
      method: "GET"
    });
  }
  public post(
    endpoint: string,
    data: AxiosRequestConfig["data"],
    options?: Omit<AxiosRequestConfig, "url" | "method" | "data">
  ) {
    return this.axios({
      ...options,
      data,
      url: endpoint,
      method: "POST"
    });
  }
  public put(
    endpoint: string,
    data: AxiosRequestConfig["data"],
    options?: Omit<AxiosRequestConfig, "url" | "method" | "data">
  ) {
    return this.axios({
      ...options,
      data,
      url: endpoint,
      method: "PUT"
    });
  }
  public patch(
    endpoint: string,
    data: AxiosRequestConfig["data"],
    options?: Omit<AxiosRequestConfig, "url" | "method" | "data">
  ) {
    return this.axios({
      ...options,
      data,
      url: endpoint,
      method: "PATCH"
    });
  }

  public delete(
    endpoint: string,
    options?: Omit<AxiosRequestConfig, "url" | "method">
  ) {
    return this.axios({
      ...options,
      url: endpoint,
      method: "DELETE"
    });
  }
}

const service = new BaseService();
export default service;
