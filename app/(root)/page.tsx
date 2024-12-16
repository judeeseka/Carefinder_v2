import AboutUs from "@/components/home-layout/AboutUs";
import FaqPage from "@/components/home-layout/FaqPage";
import Features from "@/components/home-layout/Features";
import Testimonial from "@/components/home-layout/Testimonial";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import Image from "next/image";
// import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="relative">
        <Image
          src="/assets/hero-bg.jpg"
          alt="carefinder hero image"
          width={1280}
          height={853}
          priority={true}
          className="w-full max-h-[calc(100vh-69px)] "
        />
        <div className="absolute top-0 h-full w-full bg-black opacity-50"></div>
        <div className="absolute top-0 h-full w-full flex justify-center items-center text-white ">
          <div className="flex flex-col gap-2 md:gap-4 max-w-[560px] text-center">
            <h1 className="text-2xl md:text-6xl font-black">
              Your gateway to accessible healthcare
            </h1>
            <p>
              Locate hospitals and healthcare services within your region
              quickly and easily.
            </p>

            <Button asChild className="w-fit mx-auto">
              <Link href="/search-providers">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <Features />
      {/* ABOUT SECTION */}
      <AboutUs />
      {/* TESTIMONIALS */}
      <Testimonial />
      {/* FAQ  */}
      <FaqPage />
    </>
  );
};

export default Home;
