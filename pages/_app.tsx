import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import NavContext from "../State/ReactContext/NavContext";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <NavContext>
        <div className="bg-DarkNavy min-h-screen">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </NavContext>
    </SessionProvider>
  );
}

export default MyApp;
