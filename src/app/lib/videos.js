// วิดีโอโพสต์แบบ local ไม่พึ่ง API ภายนอก
// ใช้ YouTube (youtube-nocookie) สำหรับฝังวิดีโอ
// แก้ไขค่า SITE, BRAND ใน ../seo.config ให้ถูกต้อง

import { SITE, BRAND } from "../seo.config";

export const videos = [
  {
    slug: "google-ads-grey-setup-2025",
    title: "โฆษณาGoogleAdsสายเทาขึ้นหน้าเทาภายในเวลา2-3ชั่วโมง",
    description:
      "โฆษณาGoogleAdsสายเทาขึ้นหน้าเทาภายในเวลา2-3ชั่วโมง สำหรับมือใหม่ ควรต้องดู",
    youtubeId: "GgzFZSj0VDs", 
    date: "2025-09-10",
    author: `ทีมงาน ${BRAND}`,
    tags: ["Google Ads", "สายเทา", "Conversion"],
    durationISO: "PT6M30S", 
  },
  {
    slug: "facebook-ads-grey-capi-setup",
    title: "ยิงแอดโฆษณา Facebook conversion รูปภาพ + วีดีโอ สายเทา 2025 สำหรับมือใหม่ ควรต้องดู",
    description:
      "คลิปวีดีโอสอนยิงแอดโฆษณา Facebook conversion แบบจัดเต็มตั้งแต่เริ่มทำ sale Page Landing Page",
    youtubeId: "UlCc4FTW6HE", 
    date: "2025-09-05",
    author: `ทีมงาน ${BRAND}`,
    tags: ["Facebook Ads", "CAPI", "สายเทา"],
    durationISO: "PT7M15S",
  },
];

export const videoMap = Object.fromEntries(videos.map((v) => [v.slug, v]));

export function listVideos({ page = 1, pageSize = 12, tag = "", q = "" } = {}) {
  let items = videos.slice();

  if (tag) {
    const t = tag.toLowerCase();
    items = items.filter((v) => (v.tags || []).some((x) => x.toLowerCase() === t));
  }
  if (q) {
    const qq = q.toLowerCase();
    items = items.filter(
      (v) =>
        v.title.toLowerCase().includes(qq) ||
        v.description.toLowerCase().includes(qq)
    );
  }

  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: items.slice(start, end).map((v) => ({
      ...v,
      watchUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${v.youtubeId}`,
      thumbnailUrl: `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`,
      url: `${SITE}/posts/${v.slug}`,
    })),
    page,
    pageSize,
    total,
    totalPages,
  };
}
