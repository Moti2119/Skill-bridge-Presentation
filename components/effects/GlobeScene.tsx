"use client";

import dynamic from "next/dynamic";

/** WebGL canvas must not SSR — avoids hydration mismatch and dev overlay issues. */
export const GlobeScene = dynamic(
  () => import("./GlobeSceneInner").then((mod) => mod.GlobeSceneInner),
  { ssr: false, loading: () => <div className="absolute inset-0" aria-hidden /> },
);
