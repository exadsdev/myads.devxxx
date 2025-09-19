// "use client";

// import React, { useEffect, useState } from "react";
// import Head from "next/head";
// import Image from "next/image";

// export default function ReviewsPage() {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     // ตัวอย่าง: ดึงข้อมูลรีวิวจาก API
//     async function fetchReviews() {
//       try {
//         const res = await fetch("https://api.myadsdev.shop/reviews"); // เปลี่ยนเป็น API จริงของคุณ
//         if (!res.ok) throw new Error("โหลดรีวิวไม่สำเร็จ");
//         const data = await res.json();
//         setReviews(data);
//       } catch (err) {
//         console.error(err);
//         // ถ้าโหลด API ไม่ได้ ใช้ static data แทน
//         setReviews([
//           {
//             id: 1,
//             name: "คุณสมชาย",
//             content: "บริการดีมาก! ยิงแอดแล้วได้ลูกค้าจริงๆ แนะนำครับ",
//             avatar: "/avatar1.jpg",
//           },
//           {
//             id: 2,
//             name: "คุณสายฝน",
//             content: "ทีมงานมืออาชีพ ตอบคำถามรวดเร็ว แอดได้ผลจริง",
//             avatar: "/avatar2.jpg",
//           },
//           {
//             id: 3,
//             name: "คุณปกรณ์",
//             content: "แอดสายเทาได้ดีมากๆ ROI ดีสุดๆ",
//             avatar: "/avatar3.jpg",
//           },
//         ]);
//       }
//     }

//     fetchReviews();
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>รีวิวลูกค้า | บริการยิงแอดออนไลน์</title>
//         <meta
//           name="description"
//           content="อ่านรีวิวจากลูกค้าของเรา บริการยิงแอด Facebook, Google Ads สายเทา ที่ช่วยเพิ่มยอดขายจริง"
//         />
//       </Head>

//       <main className="container my-5">
//         <h1 className="text-center mb-4">รีวิวลูกค้าของเรา</h1>
//         <p className="text-center text-muted mb-5">
//           ลูกค้าของเราใช้บริการแล้วได้ผลจริง อ่านความเห็นจากผู้ใช้จริง
//         </p>

//         <div className="row">
//           {reviews.map((review) => (
//             <div key={review.id} className="col-md-4 mb-4">
//               <div className="card h-100 shadow-sm border-0">
//                 <div className="card-body text-center">
//                   <Image
//                     src={review.avatar || "/avatar-placeholder.png"}
//                     alt={review.name}
//                     width={80}
//                     height={80}
//                     className="rounded-circle mb-3"
//                   />
//                   <h5 className="card-title">{review.name}</h5>
//                   <p className="card-text">{review.content}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </>
//   );
// }