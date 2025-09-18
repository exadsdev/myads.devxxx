import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import { SITE, BRAND, LOGO_URL } from "@/app/seo.config";

const site = process.env.NEXT_PUBLIC_SITE_URL || SITE;

export const metadata = {
  metadataBase: new URL(site),
  title: "รับยิงแอด Google สายเทา | รับทำโฆษณา Google Ads สายเทา",
  description:
    "รับยิงแอด Google สายเทา โดยทีมงานมืออาชีพ วางแผน-ตั้งค่า-วัดผล-ปรับแต่ง ครบวงจร เพื่อยอดขายและคุณภาพทราฟฟิกที่ดีขึ้น บริการยิงแอดสายเทาเริ่ม 9,900 บาท/เดือน",
  alternates: { canonical: `${site}/google` },
  openGraph: {
    title: "รับยิงแอด Google สายเทา | รับทำโฆษณา Google Ads สายเทา",
    description:
      "บริการโฆษณา Google Ads สายเทาแบบครบวงจร พร้อมรายงานประจำวันและการปรับแต่งต่อเนื่องเพื่อผลลัพธ์ที่วัดได้",
    url: `${site}/google`,
    siteName: BRAND,
    images: [{ url: `${site}/images/dark.jpg`, width: 1200, height: 630, alt: "รับทำโฆษณา Google Ads สายเทา" }],
    type: "website",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "รับยิงแอด Google สายเทา | รับทำโฆษณา Google Ads สายเทา",
    description: "วางแผน-ยิงแอด-วัดผล ครบวงจร โดยทีมงานมืออาชีพ",
    images: [`${site}/images/dark.jpg`],
  },
  robots: { index: true, follow: true },
};

export default function GooglePage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "รับทำโฆษณา Google Ads สายเทา",
    serviceType: "Google Ads Management",
    provider: {
      "@type": "Organization",
      name: BRAND,
      url: site,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    areaServed: "TH",
    url: `${site}/google`,
    description:
      "บริการรับยิงแอด Google สายเทา ตั้งค่าแคมเปญ วัดผล และปรับแต่งเพื่อคอนเวอร์ชัน",
    image: `${site}/images/dark.jpg`,
    offers: {
      "@type": "Offer",
      url: `${site}/google`,
      priceCurrency: "THB",
      price: "9900",
      availability: "https://schema.org/InStock",
      itemOffered: { "@type": "Service", name: "Google Ads Management" },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าหลัก", item: site },
      { "@type": "ListItem", position: 2, name: "รับยิงแอด Google สายเทา", item: `${site}/google` },
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
          <h1 className="h3 mb-3"><strong>รับยิงแอด Google สายเทา</strong> (Google Ads)</h1>
          <div className="d-flex justify-content-center">
            <Image
              src="/images/Google.jpg"
              alt="รับทำโฆษณา Google Ads สายเทา"
              width={1200}
              height={675}
              className="img-fluid rounded shadow-sm mx-auto d-block"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>
        </header>

        <section className="mx-auto" style={{ maxWidth: 900 }}>
          <h2 className="h5">บริการยิงแอดสายเทา บน Google Ads คืออะไร?</h2>
          <p>
            บริการ <strong>รับยิงแอด Google สายเทา</strong> ของเราออกแบบมาเพื่อธุรกิจที่ต้องการทราฟฟิกคุณภาพ
            โดยใช้กลยุทธ์ <strong>กูเกิ้ลแอดสายเทา</strong> อย่างถูกวิธี วางโครงสร้างแคมเปญแบบมืออาชีพ
            ติดตั้ง Conversion Tracking ครบถ้วน และปรับแต่งทุกวันเพื่อผลลัพธ์สูงสุด
          </p>

            <Image
              src="/images/review.jpg"
              alt="รับทำโฆษณา Google Ads สายเทา"
              width={1200}
              height={675}
              className="img-fluid rounded shadow-sm mx-auto d-block"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />

          <div className="row g-3 my-4 text-center">
            <div className="col-md-4">
              <div className="p-3 border rounded-4 h-100">
                <h3 className="h6 mb-2">โครงสร้างแคมเปญมืออาชีพ</h3>
                <p className="mb-0">แยกกลุ่มคีย์เวิร์ด/แมตช์ไทป์ ลด CPC และเพิ่ม Quality Score</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded-4 h-100">
                <h3 className="h6 mb-2">รายงานประจำวัน</h3>
                <p className="mb-0">CTR, CPC, CPA, Conversion พร้อมคำแนะนำเชิงกลยุทธ์</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded-4 h-100">
                <h3 className="h6 mb-2">บริการยิงแอดสายเทา คุมงบได้</h3>
                <p className="mb-0">กำหนดงบต่อวัน/ต่อคีย์เวิร์ด ปรับเพิ่ม-ลดตามผลลัพธ์</p>
              </div>
            </div>
          </div>

          <hr />

          <h2 className="h5">ขั้นตอนการทำงาน (Workflow)</h2>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">สัมภาษณ์ธุรกิจ + วิเคราะห์คู่แข่ง/กลุ่มเป้าหมาย</li>
            <li className="list-group-item">วางแผนคีย์เวิร์ด/ข้อความโฆษณา/ส่วนขยาย (Extensions)</li>
            <li className="list-group-item">สร้างแคมเปญ Search/Display/Video/PMAX</li>
            <li className="list-group-item">ติดตั้ง GA4/Ads Conversion/Call/Forms ครบถ้วน</li>
            <li className="list-group-item">ส่งรายงานทุกวัน + ปรับแต่งอย่างต่อเนื่อง</li>
          </ol>

          <hr />

          <h2 className="h5">ทำไมต้อง “รับทำโฆษณา Google Ads สายเทา” กับเรา?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <h3 className="h6">✅ มืออาชีพด้านยิงแอดสายเทา</h3>
              <p>ประสบการณ์จริงหลายอุตสาหกรรม เพิ่มยอดขาย/ลด CPA อย่างยั่งยืน</p>
            </div>
            <div className="col-md-4">
              <h3 className="h6">📊 โปร่งใส ตรวจสอบได้</h3>
              <p>รายงานตัวเลขครบ พร้อมสรุปเชิงกลยุทธ์เข้าใจง่าย</p>
            </div>
            <div className="col-md-4">
              <h3 className="h6">💰 คุ้มค่า</h3>
              <p>แพ็กเกจเริ่มต้น 9,900 บาท/เดือน สำหรับบริการ  <strong>รับยิงแอด Google สายเทา</strong></p>
            </div>
          </div>

          <hr />

          <h2 className="h5">คำถามที่พบบ่อย (FAQ)</h2>
          <div className="accordion" id="faqGoogle">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#gfaq1">
                  ต้องมีงบขั้นต่ำเท่าไหร่ในการเริ่ม “รับยิงแอด Google สายเทา”?
                </button>
              </h2>
              <div id="gfaq1" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  แนะนำงบเริ่มต้น 5,000–10,000 บาท/เดือน เพื่อให้ระบบเรียนรู้และปรับแคมเปญได้เต็มประสิทธิภาพ
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gfaq2">
                  ใช้เวลาเห็นผลนานไหมสำหรับกูเกิ้ลแอดสายเทา?
                </button>
              </h2>
              <div id="gfaq2" className="accordion-collapse collapse">
                <div className="accordion-body">
                  ปกติเริ่มเห็นทิศทางภายใน 3–7 วัน จากนั้นเข้าสู่ช่วง Optimize เพื่อลด CPC/CPA และเพิ่ม Conversion Rate
                </div>
              </div>
            </div>
          </div>

          <div className="text-center my-4">
            <Link href="/contact" className="btn btn-lg btn-primary">
              📞 ปรึกษาฟรี – เริ่ม “รับยิงแอด Google สายเทา” ภายใน 24 ชม.
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
