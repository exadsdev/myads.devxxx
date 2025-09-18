"use client";

import './post.css';
import React, { useEffect, useState } from 'react';
import Head from 'next/head'; // Import Head จาก next/head

export default function Page() {
  const [posts, setPosts] = useState([]); // State for posts

  // Fetch posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let response = await fetch('https://cart.accfb-ads.com/get');
        let data = await response.json();
        setPosts(data);  
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);  

  const urlimg = 'https://cart.accfb-ads.com/public';



 useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org/",
  "@type": "Product",
  "name": "PostPage | รับจ้างยิงแอดทำโฆษณาออนไลน์",
  "image": [
    "https://myad-dev.com/img/รับทำโฆษณาสายเทา.webp",
    "https://myad-dev.com/img/about.webp"
  ],
  "description": "myad-dev.com:PostPage | รับจ้างยิงแอดทำโฆษณาออนไลน์Google, Facebook Ads",
  "brand": {
    "@type": "Brand",
    "name": "myad-dev.com:PostPage"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.myad-dev.com/Postpages",
    "priceCurrency": "THB",
    "price": "9900",
    "priceValidUntil": "2025-02-18",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "myad-dev.com:PostPage",
      "url": "https://myad-dev.com",
      "logo": "https://myad-dev.com/img/logo.png"
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
    
      <>
      <title>myad-dev.com:PostPage | รับจ้างยิงแอดทำโฆษณาออนไลน์Google, Facebook Ads </title>
<meta property="og:title" content="myad-dev.com:PostPage | รับจ้างยิงแอดทำโฆษณาออนไลน์Google, Facebook Ads"/>
<meta property="og:description" content="รับจ้างยิงแอดทำโฆษณาออนไลน์รับทำโฆษณา Facebook Adsรับทำโฆษณา Googleทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท"/>
<meta property="og:image" content="https://myad-dev.com/img/ads.jpg"/>
<meta property="og:url" content="https://myad-dev.com/PostPage"/>
<meta name="robots" content="index, follow"/>
<meta property="og:type" content="website"/>
<link rel="shortcut icon" href="https://myad-dev.com/favicon.ico" type="image/x-icon"/> 

<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://myad-dev.com/PostPage" />

      </>




      <div className="container mx-auto">
        {posts.map((post) => (
          <div className="card mx-auto mt-5" key={post.id}>
            <div className="title h3 text-center">{post.title}</div>
            {post.name ? (
              <iframe
                width="560"
                height="315"
                className="vdoimg"
                src={`https://www.youtube.com/embed/${post.name}`}
                title="YouTube video player"
                frameBorder="0"
                allow=" "
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={`${urlimg}${post.imgvdo}`}
                className="vdoimg"
                alt="item"
              />
            )}
            <div className="card-body">
              <h3>{post.title}</h3>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
