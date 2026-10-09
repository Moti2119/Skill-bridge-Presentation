"use client";

import { SlideNav } from "@/components/presentation/SlideNav";
import { Slide01Intro } from "@/components/slides/Slide01Intro";
import { Slide02Problem } from "@/components/slides/Slide02Problem";
import { Slide03Solution } from "@/components/slides/Slide03Solution";
import { Slide04Cursor } from "@/components/slides/Slide04Cursor";
import { Slide05Graduate } from "@/components/slides/Slide05Graduate";
import { Slide06Employer } from "@/components/slides/Slide06Employer";
import { Slide07Chat } from "@/components/slides/Slide07Chat";
import { Slide08Impact } from "@/components/slides/Slide08Impact";
import { Slide09Vision } from "@/components/slides/Slide09Vision";
import { Slide10Thanks } from "@/components/slides/Slide10Thanks";

export function Presentation() {
  return (
    <div className="presentation-scroll bg-hero-mesh">
      <SlideNav />
      <Slide01Intro />
      <Slide02Problem />
      <Slide03Solution />
      <Slide04Cursor />
      <Slide05Graduate />
      <Slide06Employer />
      <Slide07Chat />
      <Slide08Impact />
      <Slide09Vision />
      <Slide10Thanks />
    </div>
  );
}
