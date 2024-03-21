import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GluestackUIProvider config={config}>
      <Component {...pageProps} />
    </GluestackUIProvider>
  );
}
