import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const useNavBar = () => {
  const { t } = useTranslation("navbar");
  const navigate = useNavigate();

  const pages = [
    {
      id: "1",
      onClick: () => navigate("/"),
      label: t("Home"),
    },
    {
      id: "2",
      onClick: () => navigate("/projects"),
      label: t("Projects"),
    },
    {
      id: "3",
      onClick: () => navigate("/contact-us"),
      label: t("Contact Us"),
    },
    {
      id: "4",
      onClick: () => navigate("/our-services"),
      label: t("Our Services"),
    },
    {
      id: "5",
      onClick: () => navigate("/Help"),
      label: t("Help"),
    },
  ];
  return {
    pages,
    navigate,
    t,
  };
};
