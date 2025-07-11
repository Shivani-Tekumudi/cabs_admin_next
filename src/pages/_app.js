import "@/styles/globals.css";
import { Lato } from 'next/font/google';
import { AdminContextProvider } from "./context/adminContext";
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // choose what you need
  variable: '--font-lato', // useful for Tailwind
});

export default function App({ Component, pageProps }) {
  return  (
    <AdminContextProvider>
  <main className={lato.className}>
  <Component {...pageProps} />
  </main></AdminContextProvider>
  )
}
