 

import "./globals.css";
import "./home.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

import { SITE, BRAND, DEFAULT_OG, KEYWORDS } from "./seo.config";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || SITE),
  icons: { icon: "/icon.png" },
  title: `${BRAND} | รับจ้างยิงแอดสายเทา ทำโฆษณาออนไลน์ Google & Facebook Ads`,
  description: `${BRAND} บริการทำโฆษณาออนไลน์แบบมืออาชีพ โฟกัสผลลัพธ์และการวัดผล ครบวงจร (Google Ads, Facebook Ads) วางกลยุทธ์ ตั้งค่าแคมเปญ วิเคราะห์ และปรับเพื่อยอดขาย`,
  keywords: KEYWORDS,
  alternates: { canonical: process.env.NEXT_PUBLIC_SITE_URL || SITE },
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || SITE,
    siteName: BRAND,
    title: `${BRAND} | รับจ้างยิงแอด ทำโฆษณาออนไลน์`,
    description: `${BRAND} บริการโฆษณาออนไลน์ครบวงจร Google & Facebook Ads พร้อมรายงานและปรับแต่งต่อเนื่อง`,
    images: [{ url: DEFAULT_OG, width: 1200, height: 630, alt: `${BRAND} OG` }],
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    site: "@", // ใส่ Twitter handle ถ้ามี
    title: `${BRAND} | รับจ้างยิงแอด`,
    description: "บริการทำโฆษณาออนไลน์ครบวงจร วางแผน-ยิงแอด-วัดผล เพื่อผลลัพธ์ที่วัดได้",
    images: [DEFAULT_OG],
  },
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        {/* Google Tag Manager / Analytics */}
        {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
              `}
            </Script>
          </>
        )}
      </head>

      <body>

        <Header />


        <main className="container my-4" role="main" aria-label="เนื้อหาหลัก">
          {children}
        </main>


        <Footer />

   
        <Script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        />
      </body>
    </html>
  );
}
