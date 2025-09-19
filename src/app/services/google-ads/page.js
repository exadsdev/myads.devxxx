import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import { SITE, BRAND, LOGO_URL } from "@/app/seo.config";

const CANON = `${SITE}/services/google-ads`;

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(SITE),
  title: `${BRAND} | บริการ Google Ads สายเทา`,
  description:
    "บริการทำโฆษณา Google Ads สายเทา เน้น Conversion คุณภาพทราฟฟิก วัดผลครบ พร้อมรายงานที่นำไปใช้ได้จริง",
  alternates: { canonical: CANON },
  openGraph: {
    type: "article",
    url: CANON,
    siteName: BRAND,
    title: `${BRAND} | บริการ Google Ads สายเทา`,
    description:
      "บริการทำโฆษณา Google Ads สายเทา เน้น Conversion คุณภาพทราฟฟิก วัดผลครบ พร้อมรายงานที่นำไปใช้ได้จริง",
    images: [
      {
        url: `${SITE}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: `${BRAND} - Google Ads สายเทา`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | บริการ Google Ads สายเทา`,
    description:
      "บริการทำโฆษณา Google Ads สายเทา เน้น Conversion คุณภาพทราฟฟิก วัดผลครบ พร้อมรายงานที่นำไปใช้ได้จริง",
    images: [`${SITE}/images/og-default.jpg`],
  },
};

export default function GoogleAdsServicePage() {
  // Product + Review schema (เหมาะสำหรับหน้าบริการนี้เท่านั้น)
  const productLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Google Ads สายเทา",
    description:
      "บริการทำโฆษณา Google Ads สายเทา เน้น Conversion และคุณภาพทราฟฟิก",
    image: `${SITE}/images/og-default.jpg`,
    sku: "google-ads-001",
    brand: { "@type": "Brand", name: BRAND },
    offers: {
      "@type": "Offer",
      url: CANON,
      priceCurrency: "THB",
      price: "12900",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "89",
    },
    review: {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
      author: { "@type": "Person", name: "Fred Benson" },
    },
    seller: {
      "@type": "Organization",
      name: BRAND,
      url: SITE,
      logo: LOGO_URL,
    },
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Ads สายเทา",
    provider: { "@type": "Organization", name: BRAND, url: SITE },
    areaServed: "TH",
    offers: {
      "@type": "Offer",
      url: CANON,
      priceCurrency: "THB",
      price: "12900",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <section className="container py-5">
        <h1 className="mb-3">บริการ Google Ads สายเทา</h1>
        <p className="text-muted">
          เน้น Conversion คุณภาพทราฟฟิก โครงสร้างแคมเปญชัดเจน รายงานผลโปร่งใส
        </p>

        <div className="my-4">
          <Image
            src="/images/og-default.jpg"
            alt="แดชบอร์ดผลงานโฆษณา Google Ads"
            width={1200}
            height={630}
            priority
          />
        </div>

        <div className="btn-row">
          <Link href="/contact" className="btn primary">ติดต่อทีมงาน</Link>
          <Link href="/services" className="btn btn--ghost">ดูบริการอื่น ๆ</Link>
        </div>
      </section>

      <JsonLd json={productLd} />
      <JsonLd json={serviceLd} />
    </>
  );
}
