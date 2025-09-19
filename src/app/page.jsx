import Image from "next/image";
import Link from "next/link";
import JsonLd from "./components/JsonLd";
import Secsions from "./components/Secsions";
import { SITE, BRAND, LOGO_URL } from "./seo.config";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(SITE),
  title: `${BRAND} | ทำโฆษณาออนไลน์ Google & Facebook Ads`,
  description: `${BRAND} ผู้เชี่ยวชาญโฆษณาสายเทา วางกลยุทธ์ ตั้งค่า Conversion วัดผลครบถ้วน เน้นยอดขายและคุณภาพทราฟฟิก (Google Ads / Facebook Ads)`,
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: BRAND,
    title: `${BRAND} | ทำโฆษณาออนไลน์ Google & Facebook Ads`,
    description:
      `${BRAND} ผู้เชี่ยวชาญโฆษณาสายเทา วางกลยุทธ์ ตั้งค่า Conversion วัดผลครบถ้วน เน้นยอดขายและคุณภาพทราฟฟิก`,
    images: [
      {
        url: `${SITE}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: `${BRAND} - โฆษณาออนไลน์สายเทา`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | ทำโฆษณาออนไลน์ Google & Facebook Ads`,
    description:
      `${BRAND} ผู้เชี่ยวชาญโฆษณาสายเทา วางกลยุทธ์ ตั้งค่า Conversion วัดผลครบถ้วน เน้นยอดขายและคุณภาพทราฟฟิก`,
    images: [`${SITE}/images/og-default.jpg`],
  },
};

export default function HomePage() {
  // --- Structured Data: Website / Org / Breadcrumb / Image ---
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND,
    url: SITE,
    publisher: {
      "@type": "Organization",
      name: BRAND,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND,
    url: SITE,
    logo: { "@type": "ImageObject", url: LOGO_URL },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE },
    ],
  };

  const heroImageLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${SITE}/images/og-default.jpg`,
    url: `${SITE}/images/og-default.jpg`,
    width: 2000,
    height: 1500,
    caption: `${BRAND} - ตัวอย่างผลงานการทำโฆษณาและแดชบอร์ดสรุปผล`,
  };

  // --- Structured Data: Services + Prices (Rich Results) ---
  const servicesLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Google Ads สายเทา",
      description:
        "บริการรับทำโฆษณา Google Ads สายเทา เน้น Conversion และคุณภาพทราฟฟิก พร้อมวัดผลแบบครบถ้วน",
      provider: { "@type": "Organization", name: BRAND, url: SITE },
      areaServed: "TH",
      offers: {
        "@type": "Offer",
        price: 12900,
        priceCurrency: "THB",
        url: `${SITE}/services/google-ads`,
        priceValidUntil: "2025-12-31",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Facebook Ads สายเทา",
      description:
        "บริการรับทำโฆษณา Facebook Ads สายเทา วางกลยุทธ์ ครีเอทีฟ และ Conversion API เพื่อผลลัพธ์ที่วัดได้",
      provider: { "@type": "Organization", name: BRAND, url: SITE },
      areaServed: "TH",
      offers: {
        "@type": "Offer",
        price: 9900,
        priceCurrency: "THB",
        url: `${SITE}/services/facebook-ads`,
        priceValidUntil: "2025-12-31",
      },
    },
  ];

  // --- Additional Product Rich Result (no duplicates of Website/Breadcrumb) ---
  function StructuredData() {
    const productSchema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "รับยิงแอดสายเทา",
      image: [
        `${SITE}/images/og-default.jpg`,
        `${SITE}/images/og-default.jpg`,
      ],
      description:
        "รับยิงแอด สายเทา & รับทำโฆษณาสายเทา เริ่มโฆษณาก่อน ชำระเงินทีหลัง ผู้เชี่ยวชาญสายแคมเปญและคอนเวอร์ชัน",
      brand: {
        "@type": "Brand",
        name: "รับยิงแอดสายเทา",
      },
      offers: {
        "@type": "Offer",
        url: SITE,
        priceCurrency: "THB",
        price: "9900",
        priceValidUntil: "2025-12-31",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "รับยิงแอดสายเทา",
          url: SITE,
          logo: LOGO_URL,
        },
      },
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    );
  }

  return (
    <>
      <StructuredData />

      <nav className="container" aria-label="เมนูหลัก">
        <ul className="nav">
          <li>
            <Link href="/" prefetch>
              หน้าแรก
            </Link>
          </li>
          <li>
            <Link href="/services" prefetch>
              บริการ
            </Link>
          </li>
          <li>
            <Link href="/services/google-ads" prefetch>
              Google Ads
            </Link>
          </li>
          <li>
            <Link href="/services/facebook-ads" prefetch>
              Facebook Ads
            </Link>
          </li>
          <li>
            <Link href="/course" prefetch>
              คอร์สเรียนยิงAds
            </Link>
          </li>
          <li>
            <Link href="/video" prefetch>
              Video
            </Link>
          </li>
          <li>
            <Link href="/posts" prefetch>
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/contact" prefetch>
              ติดต่อเรา
            </Link>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero container" aria-labelledby="hero-title">
        <div className="hero__text">
          <h1 id="hero-title" className="mb-2">
            <strong>รับยิงแอด สายเทา</strong> & รับทำโฆษณาสายเทา <br />
            ครอบคลุม Google Ads และ Facebook Ads
          </h1>
          <p className="text-muted">
            เริ่มโฆษณาก่อน ชำระเงินทีหลัง ผู้เชี่ยวชาญสายแคมเปญและคอนเวอร์ชัน
            วิเคราะห์คำค้น/ออดิเอนซ์ วางโครงสร้างคอนเทนต์เพื่อ SEO และเสริมความน่าเชื่อถือด้วย
            Structured Data เพื่อโอกาสเกิดรูปตัวอย่างและ Sitelinks บน Google{" "}
            <strong>รับยิงแอด สายเทา</strong>
          </p>

          <div className="btn-row">
            <Link className="btn primary btn--block-sm" href="/services/google-ads" prefetch>
              เริ่มที่ Google Ads
            </Link>
            <Link className="btn btn--ghost btn--block-sm" href="/services/facebook-ads" prefetch>
              ดูบริการ Facebook Ads
            </Link>
          </div>

          <ul className="meta" aria-label="จุดเด่นบริการ">
            <li>ขึ้นแอดโฆษณา ชำระเงินภายหลัง</li>
            <li>
              <strong>รับยิงแอด สายเทา</strong> Google สายเทา
            </li>
            <li>
              <strong>รับยิงแอด สายเทา</strong> Facebook สายเทา
            </li>
          </ul>
        </div>

        <div className="hero__media">
          <Image
            src="/images/og-default.jpg"
            alt="ตัวอย่างผลงานการทำโฆษณาและแดชบอร์ดสรุปผล"
            width={1200}
            height={630}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 90vw, 1200px"
            priority
            className="hero__img"
          />
        </div>
      </header>

      {/* PACKAGES */}
      <section className="section container" aria-labelledby="pkg-title">
        <h2 id="pkg-title" className="mb-3">
          แพ็กเกจยอดนิยมสำหรับธุรกิจสายเทา <strong>รับยิงแอด สายเทา</strong>
        </h2>

        <div className="cards-grid">
          <article className="card" itemScope itemType="https://schema.org/Service">
            <header>
              <h3 itemProp="name">
                <strong>🌎 รับยิงแอด สายเทา</strong> Google Ads สายเทา
              </h3>
            </header>
            <p itemProp="description">
              ค้นหาตรงกลุ่ม เพิ่มโอกาสแปลงเป็นลูกค้า
              <br />
              เน้นคุณภาพทราฟฟิกและ Conversion API
            </p>
            <p className="price" aria-label="ราคาแพ็กเกจ Google Ads">
              ราคา: 12,900 บาท/เดือน
            </p>
            <Link className="btn w-100" href="/services/google-ads" prefetch>
              ✔ รายละเอียด
            </Link>
          </article>

          <article className="card" itemScope itemType="https://schema.org/Service">
            <header>
              <h3 itemProp="name">
                <strong>☑ รับยิงแอด สายเทา</strong> Facebook Ads สายเทา
              </h3>
            </header>
            <p itemProp="description">
              เข้าถึงผู้สนใจด้วยครีเอทีฟและ Conversion API
              <br />
              วิเคราะห์กลุ่มเป้าหมายและปรับแต่งต่อเนื่อง
            </p>
            <p className="price" aria-label="ราคาแพ็กเกจ Facebook Ads">
              ราคา: 9,900 บาท/เดือน
            </p>
            <Link className="btn w-100" href="/services/facebook-ads" prefetch>
              💥 รายละเอียด
            </Link>
          </article>

          <article className="card">
            <header>
              <h3>
                <strong>✔ รับยิงแอด สายเทา</strong> SEO + Content
              </h3>
            </header>
            <p>
              วางโครงสร้างคอนเทนต์ภายในเว็บ
              <br />
              สร้าง FAQ, Services Page และ Internal Linking
            </p>
            <Link className="btn w-100" href="/faq" prefetch>
              👂 ดู FAQ
            </Link>
          </article>

          <article className="card">
            <header>
              <h3>🟢 คอร์สเรียนยิงAds สายเทา</h3>
            </header>
            <p>
              บริการคอร์สเรียนทำการตลาดออนไลน์
              <br />
              คอร์สเรียนทำโฆษณา Google, Facebook สายเทา
            </p>
            <Link className="btn w-100" href="/course" prefetch>
              👀 ดูคอร์สเรียน
            </Link>
          </article>

          <article className="card">
            <header>
              <h3>▶ Video สอนยิงแอด สายเทา</h3>
            </header>
            <p>
              Video สอนยิงแอด สายเทา ฟรี ความรู้ดีๆ เรามีให้
              <br />
              สอนทำโฆษณา Google, Facebook สายเทา
            </p>
            <Link className="btn w-100" href="/posts" prefetch>
              ▶ ดู Video สอนฟรี
            </Link>
          </article>
        </div>
      </section>

      {/* TRUST */}
      <section className="container" aria-label="จุดเด่นและความน่าเชื่อถือ">
        <div className="badges-grid">
          <div className="card card--pad">
            <strong>แผนงานชัดเจน</strong>
            <p className="text-muted">Roadmap รายเดือน + KPI ที่วัดผลได้</p>
          </div>
          <div className="card card--pad">
            <strong>โปร่งใสตรวจสอบได้</strong>
            <p className="text-muted">รายงานผลและ Insight ที่นำไปใช้ได้จริง</p>
          </div>
          <div className="card card--pad">
            <strong>โครงสร้างแคมเปญคุณภาพ</strong>
            <p className="text-muted">Search/Discovery/Remarketing ครบถ้วน</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container" aria-label="ติดต่อทีมงาน">
        <div className="cta">
          <div>
            <h2 className="h4">เริ่มต้นวางแผนโฆษณาให้ธุรกิจของคุณ</h2>
            <p className="text-muted">
              คุยรายละเอียด เป้าหมาย งบประมาณ และกลยุทธ์ที่เหมาะสม เริ่มโฆษณาก่อน ชำระเงินทีหลัง{" "}
              <strong>รับยิงแอด สายเทา</strong>
            </p>
          </div>
          <div className="btn-row">
            <Link className="btn primary btn--block-sm" href="/contact" prefetch>
              ติดต่อเรา
            </Link>
            <Link className="btn btn--ghost btn--block-sm" href="/services" prefetch>
              ดูบริการทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      <Secsions />

      {/* Structured Data (JSON-LD) */}
      <JsonLd json={websiteLd} />
      <JsonLd json={orgLd} />
      <JsonLd json={breadcrumbLd} />
      <JsonLd json={heroImageLd} />
      {servicesLd.map((s, i) => (
        <JsonLd key={`svc-${i}`} json={s} />
      ))}
    </>
  );
}
