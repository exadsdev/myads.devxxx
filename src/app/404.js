import Link from 'next/link';
import { headers } from 'next/headers';

// ฟังก์ชันจำลอง getSiteData หากคุณมี API จริงให้แทนที่ตรงนี้
async function getSiteData(domain) {
  // ตัวอย่างข้อมูลจำลอง
  return {
    name: domain || 'My Website',
  };
}

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get('host');
  const data = await getSiteData(domain);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl mt-4 text-gray-700">
          ไม่พบหน้าที่คุณกำลังค้นหา
        </h2>
        <p className="mt-2 text-gray-600">
          เว็บไซต์: <strong>{data.name}</strong>
        </p>
        <p className="mt-4 text-gray-500">
          อาจเป็นเพราะลิงก์ผิดหรือหน้าถูกลบแล้ว
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          กลับไปยังหน้าแรก
        </Link>
        <p className="mt-4 text-gray-500">
          หรือดู <Link href="/blog" className="text-blue-600 underline">บทความทั้งหมด</Link>
        </p>
      </div>
    </main>
  );
}
