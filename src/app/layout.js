import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Unite together with HBO Max watch party and have fun",
  description:
    "With HBO Max watch party, you can watch all your favorite series and shows. It is a fantastic tool with incredible features",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <link rel="canonical" href="https://www.hbomaxparty.net/" />
        <meta
          name="google-site-verification"
          content="_SSDWsPUvPSZSKu77KqbFQw4zYjdrC0ZI71Xyoh7axQ"
        />

        <meta property="og:url" content="https://www.hbomaxparty.net/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bring together HBO Max watch party and movie lovers "
        />
        <meta
          property="og:description"
          content=" With HBO Max watch party, you can watch all your favorite series and shows. It is a fantastic tool with incredible features."
        />
        <meta
          property="og:image"
          content="https://www.hbomaxparty.net/logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="hbomaxparty.net" />
        <meta property="twitter:url" content="https://www.hbomaxparty.net/" />
        <meta
          name="twitter:title"
          content="Bring together HBO Max watch party and movie lovers "
        />
        <meta
          name="twitter:description"
          content=" With HBO Max watch party, you can watch all your favorite series and shows. It is a fantastic tool with incredible features."
        />
        <meta
          name="twitter:image"
          content="https://www.hbomaxparty.net/logo.png"
        />
      </head>
      <body>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
