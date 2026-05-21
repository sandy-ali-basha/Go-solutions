import { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "app/page.jsx";
import ContactUs from "./app/ContactUs/page.jsx";
import ProjectPage from "./app/project/page.jsx";
import TermsPage from "./app/Terms/page.jsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ThemeProviderWrapper from "./ThemeProviderWrapper";
import Layout from "layout/Layout";
import NotFound from "components/NotFound";
import Seo from "components/Seo";
import "@n8n/chat/style.css";
import "./assets/css/style.scss";
import { useQueryClient } from "react-query";
import { CITY_CHANGED_EVENT } from "utils/citySelection";
import OurServices from "app/OurServices/OurServices.jsx";

function App() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const onCityChanged = () => {
      queryClient.invalidateQueries();
    };

    window.addEventListener(CITY_CHANGED_EVENT, onCityChanged);

    return () => {
      window.removeEventListener(CITY_CHANGED_EVENT, onCityChanged);
    };
  }, [queryClient]);

  return (
    <ThemeProviderWrapper>
      <Seo
        title="Event Management"
        description="Go Creative Solutions delivers seamless, innovative, and impactful event experiences for brands, businesses, and large-scale celebrations."
        keywords="Go Creative Solutions, event management, brand activations, exhibitions, corporate events"
        url="https://gocreativesolutions.com"
      />

      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" exact element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-services" element={<OurServices />} />
          {/* <Route path="/project/:id" element={<ProjectPage />} /> */}
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/terms/:id" element={<TermsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProviderWrapper>
  );
}

export default App;
