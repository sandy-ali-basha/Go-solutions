import axios from "axios";
import { settingsStore } from "store/settingsStore";
const API_URL = import.meta.env.VITE_API_URL;
const DASHBOARD_API_URL =
  import.meta.env.VITE_DASHBOARD_API_URL || API_URL;

const direction = settingsStore.getState().direction;

export const _axios = axios.create({
  baseURL: API_URL,
  headers: {
    locale: direction,
    city: localStorage.getItem("city"),
  },
});

export const _dashboardAxios = axios.create({
  baseURL: DASHBOARD_API_URL,
  headers: {
    locale: direction,
    city: localStorage.getItem("city"),
  },
});
