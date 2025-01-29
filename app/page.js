
import dynamic from 'next/dynamic';
const HomePage = dynamic(() => import("@/app/home/page"), { ssr: true })
export default function Home() {
  return (
    <>
    <HomePage />
   

    </>
  );
}
