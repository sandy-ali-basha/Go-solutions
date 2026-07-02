import { useQuery } from "react-query";
import { dashboardHomeContentApi } from "api/dashboard/homeContent";

export const useDashboardHomeVideo = () =>
  useQuery(["dashboardHomeVideo"], dashboardHomeContentApi.homeVideo, {
    retry: false,
  });

export const useDashboardTrustedClients = () =>
  useQuery(["dashboardTrustedClients"], dashboardHomeContentApi.trustedClients, {
    retry: false,
  });

export const useDashboardIndustries = () =>
  useQuery(["dashboardIndustries"], dashboardHomeContentApi.industries, {
    retry: false,
  });

export const useDashboardCompanyPortfolios = () =>
  useQuery(
    ["dashboardCompanyPortfolios"],
    dashboardHomeContentApi.companyPortfolios,
    {
      retry: false,
    },
  );

export const useDashboardTechSolutionServices = () =>
  useQuery(
    ["dashboardTechSolutionServices"],
    dashboardHomeContentApi.techSolutionServices,
    {
      retry: false,
    },
  );

export const useDashboardEventsInMotion = () =>
  useQuery(
    ["dashboardEventsInMotion"],
    dashboardHomeContentApi.eventsInMotion,
    {
      retry: false,
    },
  );

export const useDashboardContactFooterSetting = () =>
  useQuery(
    ["dashboardContactFooterSetting"],
    dashboardHomeContentApi.contactFooterSetting,
    {
      retry: false,
    },
  );

export const useDashboardEventMotionStats = () =>
  useQuery(
    ["dashboardEventMotionStats"],
    dashboardHomeContentApi.eventMotionStats,
    {
      retry: false,
    },
  );

export const useDashboardCertifications = () =>
  useQuery(
    ["dashboardCertifications"],
    dashboardHomeContentApi.certifications,
    {
      retry: false,
    },
  );

export const useDashboardTeamMembers = () =>
  useQuery(["dashboardTeamMembers"], dashboardHomeContentApi.teamMembers, {
    retry: false,
  });
