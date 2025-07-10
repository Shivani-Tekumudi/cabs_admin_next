import "@/styles/globals.css";
import { Lato } from 'next/font/google';
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // choose what you need
  variable: '--font-lato', // useful for Tailwind
});

export default function App({ Component, pageProps }) {
  return  (
  <main className={lato.className}>
  <Component {...pageProps} />
  </main>
  )
}
