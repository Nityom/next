import Image from "next/image";
import { ThreeDCardDemo } from "@/components/Card";
import { HeroParallaxDemo } from "@/components/Hero";
import { StickyScrollRevealDemo } from "@/components/Sticky-scroll";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-3";
export default function Home() {
  return (
   
<div className="bg-gray-900 text-white min-h-screen dark:bg-gray-800 dark:text-gray-200">
<h1 className="text-4xl">Welcome to Dark Mode</h1>
      <HeroParallaxDemo/>
      < FeaturesSectionDemo />
      {/* <StickyScrollRevealDemo/> */}
    </div>
  );
}
