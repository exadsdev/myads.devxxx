"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Courses() {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "myads.dev:คอร์สเรียนโฆษณา | บริการคอร์สเรียนทำการตลาดออนไลน์",
      "image": [
        "https://myads.dev/img/รับทำโฆษณาสายเทา.webp",
        "https://myads.dev/img/about.webp"
      ],
      "description": "myads.dev:คอร์สเรียนโฆษณา | บริการคอร์สเรียนทำการตลาดออนไลน์: โฆษณา Facebook และ Google สายเทา",
      "brand": {
        "@type": "Brand",
        "name": "คอร์สเรียนโฆษณา"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://myads.dev/course",
        "priceCurrency": "THB",
        "price": "18500",
        "priceValidUntil": "2025-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "myad-dev",
          "url": "https://myads.dev",
          "logo": "https://myads.dev/img/logo.png"
        }
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>
          myads.dev:คอร์สเรียนโฆษณา | บริการคอร์สเรียนทำการตลาดออนไลน์
        </title>
        <meta
          name="description"
          content="myads.dev:คอร์สเรียนโฆษณา | บริการคอร์สเรียนทำการตลาดออนไลน์: โฆษณา Facebook และ Google สายเทา"
        />
        <meta
          name="keywords"
          content="คอร์สเรียนยิงแอด, คอร์สการตลาดออนไลน์, คอร์สโฆษณาสายเทา, ยิงแอด Google สายเทา, ยิงแอด Facebook สายเทา"
        />
        <meta property="og:title" content="myads.dev:คอร์สเรียนโฆษณา" />
        <meta
          property="og:description"
          content="คอร์สเรียนสายเทาแบบมืออาชีพ ทั้ง Google และ Facebook Ads สอนสด ตัวต่อตัว ราคาคุ้มค่า"
        />
        <meta
          property="og:image"
          content="https://myads.dev/logo.png"
        />
        <meta property="og:url" content="https://myads.dev/course" />
        <meta property="og:type" content="website" />
        <link
          rel="shortcut icon"
          href="https://myads.dev/favicon.ico"
          type="image/x-icon"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://myads.dev/course" />
      </Head>

      <div className="container">
        <div className="cassimg text-center">
          <h1>คอร์สเรียนสายเทา</h1>
          <Image
            src="/images/cass.webp"
            width={1200}
            height={600}
            loading="lazy"
            className="imgfb"
            alt="คอร์สเรียนทำการตลาดออนไลน์"
          />
        </div>

        <br /><br />

        <div className="d-flex justify-content-around">
          <a className="btn btn-outline-primary" href="/">
            ไปหน้า Home
          </a>
          <a className="btn btn-outline-primary" href="/course/">
            คอร์สเรียนสายเทา
          </a>
        </div>

        <section id="cass">
          <div className="cassitem">
            <div className="itemcass">
              <h4>🟢 คอร์สเรียน Google สายเทา ราคาสุดคุ้มค่า เพียง 18,500 บาท</h4>
              <ul>
                <li>👉 สร้างและวอร์มอีเมลก่อนใช้งาน</li>
                <li>👉 เริ่มจากการทำ Landing page</li>
                <li>👉 สอนจดโดเมน ซื้อ hosting</li>
                <li>👉 ทำเว็บไซต์ให้องค์ประกอบครบ</li>
                <li>👉 Template ใช้งานฟรี</li>
                <li>👉 วิธีการสร้างบัญชีแบบไม่สร้างแคมเปญ</li>
                <li>👉 เทคนิคการเขียนโฆษณาแบบไม่เสี่ยง</li>
                <li>👉 ตรวจสอบแคมเปญและ Keyword</li>
                <li>👉 สลับ Keyword เทาแบบไม่โดนแบน</li>
                <li>👉 เปลี่ยนหน้าเว็บแบบไม่เสี่ยง</li>
                <li>👉 วิธีการเลี้ยงบัญชีให้ปลอดภัย</li>
                <li>👉 วิธีทำให้โฆษณาราคาถูก</li>
                <li>👉 สอนทุกเทคนิคที่ใช้จริง</li>
                <li>👉 สอนสด ตัวต่อตัว ผ่าน TeamViewer / Zoom</li>
                <li><strong>ราคาสุดคุ้ม: 18,500 บาท</strong></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
