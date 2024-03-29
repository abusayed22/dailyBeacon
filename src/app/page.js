import Footer from "@/components/master/Footer";
import GenaralLayout from "@/components/master/GenaralLayout";
import Navber from "@/components/master/Navber";
import AllNews from "@/components/news/AllNews";
import Hero from "@/components/news/Hero";
import LatestNews from "@/components/news/LatestNews";
import PopularNews from "@/components/news/PopularNews";
import Slider from "@/components/news/Slider";
import Subscription from "@/components/news/Subscription";




export default async function Home() {

  return (
    <>
      <GenaralLayout>
        <Hero />
        <AllNews />
        <LatestNews />
        <PopularNews />
        <Subscription />
      </GenaralLayout>
    </>
  );
}
