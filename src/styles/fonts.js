import { Montserrat, Noto_Sans_KR } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "800", "900"],
});

export const notoSansKr = Noto_Sans_KR({
  preload: false,
  display: "swap",
  variable: "--font-noto-sans-kr",
  weight: ["100", "400", "500", "700", "900"],
  fallback: ["Noto Sans KR", "Helvetica", "sans-serif"],
});
