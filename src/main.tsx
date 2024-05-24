import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/global";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { AuthContextProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <AuthContextProvider>
          <Router />
        </AuthContextProvider>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
