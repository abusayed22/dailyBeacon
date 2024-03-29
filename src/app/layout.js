import { Inter } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
// css
import "./globals.css";
import "@/assets/css/style.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="white" speed={200} />
        {children}
        </body>
    </html>
  );
}
