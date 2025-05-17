import "./globals.css";
import BeforeFooterSection from "./Shared/beforeFooterSection/beforeFooterSection";
import Footer from "./Shared/Footer/Footer";
import Image from "next/image";
import Navbar from "./Shared/navbar";
import PropTypes from "prop-types";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Croonus – Profesionalna izrada online prodavnica",
  description:
    "Sa strašću za izradom online prodavnica, kreiramo B2B i B2C rešenja koja privlače i zadržavaju kupce. Naša rešenja kombinuju estetiku i efikasnost za uspeh vašeg online biznisa.",
  keywords: [
    "Croonus",
    "izrada online prodavnica",
    "eCommerce rešenja",
    "B2B eCommerce",
    "B2C eCommerce",
    "web dizajn",
    "digitalni marketing",
    "online shop development",
    "UX dizajn",
    "konverzija korisnika",
  ],
  authors: [{ name: "Nassim Khelifi", url: "https://www.croonus.com" }],
  generator: "Next.js",
  icons: {
    icon: "/images/spinner.png",
  },
  applicationName: "Croonus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <BeforeFooterSection />
        <Footer />
        <Image
          src={"/images/Croonus_footer_Logo.png"}
          width={400}
          height={350}
          alt={"Croonus footer Logo"}
          className={"footer-logo"}
          priority
        />
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
