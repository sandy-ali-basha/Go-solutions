import { HttpRequestInterceptor } from "interceptor/http-request.interceptor";
import { _axios, _dashboardAxios } from "../../interceptor/http-config";

export const _contact = {
  post: (data) => _dashboardAxios.post(`/contact`, data).then((res) => res),

  index: async () => {
    return _axios
      .get(`/contact_info`, {
        headers: {
          ...HttpRequestInterceptor(),
        },
      })
      .then((res) => res?.data);
  },

  locations: async () => {
    return _axios
      .get(`/contact_info/locations`, {
        headers: {
          ...HttpRequestInterceptor(),
        },
      })
      .then((res) => res?.data);
  },
};
