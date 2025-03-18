import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Covenant Capital"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold">Christ-Centric Business Solutions for Your Growth</h1>
          <p className="max-w-2xl mt-4 text-lg">
            Empowering entrepreneurs and career professionals to achieve their God-given potential and contribute meaningfully to their communities.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="/programs" className="px-6 py-3 font-semibold text-white bg-orange-600 rounded-lg">Explore Programs</Link>
            <Link href="/apply" className="px-6 py-3 font-semibold text-orange-600 bg-white rounded-lg">Apply Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
