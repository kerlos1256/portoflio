import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <div className="bg-DarkNavy min-h-screen">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
