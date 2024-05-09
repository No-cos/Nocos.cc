"use client";
import Contributors from "@/components/Contributors";
import ExpectionSection from "@/components/ExpectionSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   fetchIssues();
  // }, []);

  // const fetchIssues = async () => {
  //   try {
  //     const resdata = await fetch(
  //       `https://nocos-api.onrender.com/repos/no-code-issues/design`
  //     );
  //     const data = await resdata.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <Header />
      <Hero />
      <ProjectSection />
      <Contributors />
      {/* <ExpectionSection /> */}
      
    </>
  );
}
