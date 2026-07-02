import axios from "axios";

const DASHBOARD_API_URL =
  import.meta.env.VITE_DASHBOARD_API_URL || "http://127.0.0.1:8000/api";

const dashboardApi = axios.create({
  baseURL: DASHBOARD_API_URL,
});

export const dashboardHomeContentApi = {
  homeVideo: () => dashboardApi.get("/home-video").then((res) => res.data),
  trustedClients: () =>
    dashboardApi.get("/trusted-clients").then((res) => res.data),
  industries: () => dashboardApi.get("/industries").then((res) => res.data),
  companyPortfolios: () =>
    dashboardApi.get("/company-portfolios").then((res) => res.data),
  techSolutionServices: () =>
    dashboardApi.get("/tech-solution-services").then((res) => res.data),
  eventsInMotion: () =>
    dashboardApi.get("/events-in-motion").then((res) => res.data),
  contactFooterSetting: () =>
    dashboardApi.get("/contact-footer-setting").then((res) => res.data),
  eventMotionStats: () =>
    dashboardApi.get("/event-motion-stats").then((res) => res.data),
};
