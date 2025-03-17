import "./globals.css";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Convenant Capital",
  description: "We Provide Christ Centric Business Solutions",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <head>
      <title>Convenant Capital</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
    </head>
    <body>
    {children}
    {/*<ToastProvider>{children}</ToastProvider>*/}
    </body>
    </html>
  );
}
