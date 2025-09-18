import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import { SITE, BRAND, LOGO_URL } from "@/app/seo.config";

const site = process.env.NEXT_PUBLIC_SITE_URL || SITE;

export const metadata = {
  metadataBase: new URL(site),
  title: "รับยิงแอด Facebook สายเทา | รับทำโฆษณา Facebook Ads สายเทา",
  description:
    "บริการรับยิงแอด Facebook สายเทา (Facebook Ads) วางแผน-ตั้งค่าแคมเปญ-วัดผล-ปรับแต่ง ครบวงจร โดยทีมงานมืออาชีพ ราคาเริ่มต้น 9,900 บาท/เดือน",
  alternates: { canonical: `${site}/facebook` },
  openGraph: {
    title: "รับยิงแอด Facebook สายเทา | รับทำโฆษณา Facebook Ads สายเทา",
    description:
      "รับจ้างทำโฆษณา Facebook Ads สายเทา วางแผน-ยิงแอด-วัดผล เพื่อผลลัพธ์ที่วัดได้",
    url: `${site}/facebook`,
    siteName: BRAND,
    images: [{ url: `${site}/images/dark.jpg`, width: 1200, height: 630, alt: "รับทำโฆษณา Facebook Ads สายเทา" }],
    type: "website",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "รับยิงแอด Facebook สายเทา | รับทำโฆษณา Facebook Ads สายเทา",
    description: "บริการโฆษณา Facebook Ads โดยทีมงานมืออาชีพ วางแผน-ยิงแอด-วัดผล ครบวงจร",
    images: [`${site}/images/dark.jpg`],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function FacebookPage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "รับทำโฆษณา Facebook Ads สายเทา",
    serviceType: "Facebook Ads Management",
    provider: {
      "@type": "Organization",
      name: BRAND,
      url: site,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    areaServed: "TH",
    url: `${site}/facebook`,
    description:
      "บริการรับยิงแอด Facebook สายเทา ตั้งค่าแคมเปญ วัดผล และปรับแต่งเพื่อคอนเวอร์ชัน",
    image: `${site}/images/dark.jpg`,
    offers: {
      "@type": "Offer",
      url: `${site}/facebook`,
      priceCurrency: "THB",
      price: "9900",
      availability: "https://schema.org/InStock",
      itemOffered: { "@type": "Service", name: "Facebook Ads Management" },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าหลัก", item: site },
      { "@type": "ListItem", position: 2, name: "รับยิงแอด Facebook สายเทา", item: `${site}/facebook` },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceLd, breadcrumbLd]} />

      <div className="container my-5">
        <div className="mb-3">
          <Link href="/" className="btn btn-outline-secondary">← กลับหน้าแรก</Link>
        </div>

        <header className="text-center mb-4">
          <h1 className="h3 mb-3">รับยิงแอด Facebook สายเทา (Facebook Ads)</h1>
          <div className="d-flex justify-content-center">
            <Image
              src="/images/service.jpg"
              width={1200}
              height={675}
              alt="รับทำโฆษณา Facebook Ads สายเทา"
              className="img-fluid rounded shadow-sm mx-auto d-block"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>
        </header>

        <section className="mx-auto" style={{ maxWidth: 900 }}>
          <h2 className="h5">บริการยิงแอดสายเทา บน Facebook Ads คืออะไร?</h2>
          <p>
            บริการ <strong>รับยิงแอดสายเทา</strong> สำหรับแพลตฟอร์ม Facebook เน้นสร้างครีเอทีฟที่ดึงดูด
            โครงสร้างแคมเปญที่ทดสอบได้จริง พร้อมติดตั้ง Pixel และ <strong>Conversion API (CAPI)</strong> เพื่อให้การวัดผลแม่นยำ
            ลดค่าใช้จ่ายต่อผลลัพธ์และเพิ่มโอกาสปิดการขาย
          </p>

          <div className="d-flex justify-content-center my-3">
            <Image
              src="/images/facebook_ads.webp"
              width={1024}
              height={576}
              alt="ตัวอย่างงานโฆษณา Facebook Ads"
              className="img-fluid rounded shadow-sm mx-auto d-block"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>

          <div className="row g-3 my-4 text-center">
            <div className="col-md-4">
              <div className="p-3 border rounded-4 h-100">
                <h3 className="h6 mb-2">ครีเอทีฟดึงดูด</h3>
                <p className="mb-0">ภาพ/ข้อความ/วิดีโอ ที่ทดสอบจริงและคัดเฉพาะผลงานดี</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded-4 h-100">
                <h3 className="h6 mb-2">โครงสร้างแคมเปญชัดเจน</h3>
                <p className="mb-0">แยกกลุ่มเป้าหมาย/อุปกรณ์/วัตถุประสงค์ เพื่อง่ายต่อการปรับ</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded-4 h-100">
                <h3 className="h6 mb-2">รายงานทุกวัน</h3>
                <p className="mb-0">เห็นตัวเลขจริง CTR, CPC, CPA, ROAS พร้อมข้อเสนอแนะ</p>
              </div>
            </div>
          </div>

          <hr />

          <h2 className="h5">ขั้นตอนการทำงาน (Workflow)</h2>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">สัมภาษณ์ธุรกิจ/สินค้า/ข้อเสนอ (Offer)</li>
            <li className="list-group-item">ออกแบบโครงสร้างแคมเปญ + กลยุทธ์ครีเอทีฟ</li>
            <li className="list-group-item">ติดตั้ง Facebook Pixel + Conversion API</li>
            <li className="list-group-item">ทดสอบ A/B หลายสมมติฐานและปรับอย่างต่อเนื่อง</li>
            <li className="list-group-item">รายงานผลรายวัน + คำแนะนำเชิงกลยุทธ์</li>
          </ol>

          <hr />

          <h2 className="h5">ทำไมต้อง “รับทำโฆษณา Facebook Ads สายเทา” กับเรา?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <h3 className="h6">✅ ผู้เชี่ยวชาญยิงแอดสายเทา</h3>
              <p>ประสบการณ์จริง เพิ่มยอดขาย/ลด CPA ให้ลูกค้าอย่างต่อเนื่อง</p>
            </div>
            <div className="col-md-4">
              <h3 className="h6">📊 โปร่งใส ตรวจสอบได้</h3>
              <p>รายงานตัวเลขครบ พร้อมคำอธิบายเข้าใจง่าย</p>
            </div>
            <div className="col-md-4">
              <h3 className="h6">💰 คุ้มค่า</h3>
              <p>แพ็กเกจเริ่มต้น 9,900 บาท/เดือน สำหรับบริการรับยิงแอด Facebook สายเทา</p>
            </div>
          </div>

          <div className="d-flex justify-content-center my-3">
            <Image
              src="/images/facebook001.jpg"
              width={1024}
              height={576}
              alt="รีวิวผลงาน Facebook Ads"
              className="img-fluid rounded shadow-sm mx-auto d-block"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>

          <hr />

          <h2 className="h5">คำถามที่พบบ่อย (FAQ)</h2>
          <div className="accordion" id="faqFacebook">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ffaq1">
                  ต้องเตรียมอะไรบ้างก่อนเริ่ม “รับยิงแอดสายเทา” บน Facebook?
                </button>
              </h2>
              <div id="ffaq1" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  ภาพ/วิดีโอ โลโก้ ข้อเสนอทางการตลาด (เช่น ส่วนลด/ของแถม) และเป้าหมายเชิงธุรกิจที่ชัดเจน
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ffaq2">
                  ใช้เวลาเท่าไรถึงเห็นผลสำหรับแอดสีเทา?
                </button>
              </h2>
              <div id="ffaq2" className="accordion-collapse collapse">
                <div className="accordion-body">
                  โดยทั่วไป 3–7 วันแรกเป็นช่วงเรียนรู้ (Learning Phase) หลังจากนั้นจะ Optimize เพื่อลด CPA และเพิ่ม Conversion
                </div>
              </div>
            </div>
          </div>

          <div className="text-center my-4">
            <Link href="/contact" className="btn btn-lg btn-primary">
              📞 ปรึกษาฟรี – เริ่ม “รับยิงแอด Facebook สายเทา” ภายใน 24 ชม.
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
