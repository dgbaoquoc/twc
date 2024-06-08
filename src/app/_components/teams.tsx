"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Founder = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Teams() {
  return (
    <Suspense>
      <Founder scene="https://prod.spline.design/scFyOsEwjBxZ0h0T/scene.splinecode" />
    </Suspense>
  );
}
