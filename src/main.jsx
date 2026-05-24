import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import RTLProvider from "theme/provider/RTLProvider";
import "./i18n";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { MotionConfig } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function MobileMotionProvider({ children }) {
  const isMobile = useMediaQuery("(max-width:899px)");

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      {children}
    </MotionConfig>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <RTLProvider>
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <MobileMotionProvider>
              <App />
            </MobileMotionProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </GoogleOAuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </SnackbarProvider>
  </RTLProvider>,
);
