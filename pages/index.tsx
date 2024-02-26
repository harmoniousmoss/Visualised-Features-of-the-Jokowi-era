import ContentFive from "@/components/ContentFive";
import ContentFour from "@/components/ContentFour";
import ContentOne from "@/components/ContentOne";
import ContentSix from "@/components/ContentSix";
import ContentThree from "@/components/ContentThree";
import ContentTwo from "@/components/ContentTwo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <ContentOne />
      <ContentTwo />
      <ContentThree />
      <ContentFour />
      <ContentFive />
      <ContentSix />
      <Footer />
    </>
  );
}
